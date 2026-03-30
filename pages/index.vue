<template>
  <div
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      :key="page._id"
      :value="page"
      :data="(appConfig.comfortErpDocs as any)?.data"
    />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
const appConfig = useAppConfig();

useSeoMeta({
  title: `${page.value?.title} | ${config.value.site.name}`,
  description: page.value?.description,

  ogType: page.value?.ogType,
  ogTitle: page.value?.ogTitle,
  ogDescription: page.value?.ogDescription,
  ogSiteName: page.value?.ogSiteName,
  ogImage: page.value?.ogImage,
  ogUrl: page.value?.ogUrl,

  twitterCard: page.value?.twitterCard,
  twitterTitle: page.value?.twitterTitle,
  twitterDescription: page.value?.twitterDescription,
  twitterImage: page.value?.twitterImage,
  twitterSite: page.value?.twitterSite,
});

useHead({
  meta: [
    { property: 'fb:app_id', content: page.value?.fbAppId },
    { name: 'keywords', content: page.value?.keywords },
    { name: 'twitter:url', content: page.value?.twitterUrl },
  ],
});
</script>
