<template>
  <div v-if="page.prevNext ?? true" class="border-t pt-6 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="prevPage" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="nextPage" side="right" />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const route = useRoute();
const appConfig = useAppConfig();

// Get flattened list of all sidebar items (with both link and text) in order
const sidebarItems = computed(() => {
  const sidebarConfig = appConfig.comfortErpDocs?.sidebar || {};
  const key = Object.keys(sidebarConfig).find(k => route.path.startsWith(k));
  if (!key) return [];

  const items: Array<{ link: string; text: string }> = [];
  const sidebar = sidebarConfig[key];

  // Flatten sidebar and include both link and text
  sidebar.forEach(section => {
    if (section.items) {
      section.items.forEach(item => {
        if (item.link && item.text) {
          items.push({
            link: item.link,
            text: item.text
          });
        }
      });
    }
  });

  return items;
});

const currentIndex = computed(() =>
    sidebarItems.value.findIndex(item => item.link === route.path)
);

const prevPage = computed(() => {
  if (currentIndex.value > 0) {
    const prevItem = sidebarItems.value[currentIndex.value - 1];
    return {
      _path: prevItem.link,
      title: prevItem.text  // Add title for the button
    };
  }
  return null;
});

const nextPage = computed(() => {
  if (currentIndex.value < sidebarItems.value.length - 1) {
    const nextItem = sidebarItems.value[currentIndex.value + 1];
    return {
      _path: nextItem.link,
      title: nextItem.text  // Add title for the button
    };
  }
  return null;
});
</script>