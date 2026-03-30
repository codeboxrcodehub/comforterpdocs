<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-4 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />

    <ul v-if="sidebarItems.length" class="flex flex-col gap-1 border-b pb-4">
      <li v-for="(group, gIndex) in sidebarItems" :key="gIndex">
        <p class="mt-2 mb-1 font-medium text-foreground/70">{{ group.text }}</p>
        <ul class="pl-2">
          <li v-for="item in group.items" :key="item.link">
            <NuxtLinkLocale
                :to="item.link"
                class="text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm"
                :class="[
                path.startsWith(item.link) && 'bg-muted !text-primary font-medium',
              ]"
            >
              {{ item.text }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </li>
    </ul>

    <!-- keep your LayoutAsideTree only if you still want sub-level docs (optional) -->
    <LayoutAsideTree
        v-if="!sidebarItems.length"
        :links="tree"
        :level="0"
        :class="[(config.aside.useLevel && config.aside.levelStyle === 'aside') ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>


<script setup lang="ts">
defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const config = useConfig();
const { locale, defaultLocale, navigation } = useI18nDocs();
const route = useRoute();

const appConfig = useAppConfig();

const sidebarItems = computed(() => {
  const path = route.path.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes

  const sidebarConfig = appConfig.comfortErpDocs?.sidebar || {};

  // Normalize config keys too
  const normalizedConfig = Object.fromEntries(
      Object.entries(sidebarConfig).map(([key, value]) => [
        key.replace(/^\/+|\/+$/g, ''),
        value,
      ])
  );

  const key = Object.keys(normalizedConfig).find((k) => path.startsWith(k));
  return key ? normalizedConfig[key] : [];
});

const tree = computed(() => {
  if (config.value.aside.useLevel) {
    const pathParts = route.path.split('/');
    const leveledPath = pathParts.splice(0, locale.value === defaultLocale ? 2 : 3).join('/');
    const dir = navDirFromPath(leveledPath, navigation.value);
    return dir ?? [];
  }
  return navigation.value;
});

const path = computed(() => route.path);
</script>
