<template>
  <div
    v-if="!page?.body"
    class="flex h-[calc(100vh-3.5rem)] items-center justify-center"
  >
    <h3 class="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
      404
    </h3>
    <span class="scroll-m-20 px-4">
      {{ $t('This page could not be found.') }}
    </span>
  </div>

  <template v-else>
    <div
      v-if="page?.fullpage"
      class="px-4 py-6 md:px-8"
      :class="[config.main.padded && 'container']"
    >
      <ContentRenderer
        :key="page._id"
        :value="page"
        :data="(appConfig.comfortErpDocs as any)?.data"
      />
    </div>
    <main
      v-else
      class="relative py-6"
      :class="[config.toc.enable && (page.toc ?? true) && 'lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8']"
    >
      <div class="mx-auto w-full min-w-0">
        <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb && (page.breadcrumb ?? true)" class="mb-4" />
        <LayoutTitle
          v-if="config.main.showTitle"
          :title="page?.title"
          :description="page?.description"
          :badges="page?.badges"
          :authors="page?.authors"
        />

        <Alert
          v-if="page?.body?.children?.length === 0"
          icon="lucide:circle-x"
          :title="$t('Empty page')"
        >
          <i18n-t keypath="Start writing content">
            <template #fileLink>
              <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline>
            </template>
          </i18n-t>
        </Alert>

        <ContentRenderer
          v-else
          :key="page._id"
          :value="page"
          :data="(appConfig.comfortErpDocs as any)?.data"
          class="docs-content"
        />

        <LayoutDocsFooter />
      </div>
      <div v-if="config.toc.enable && (page.toc ?? true)" class="hidden text-sm lg:block">
        <div
          class="sticky"
          :class="[
            (config.aside.useLevel && config.aside.levelStyle === 'aside') ? 'md:top-[91px]' : 'md:top-[133px]',
          ]"
        >
          <LayoutToc :is-small="false" />
        </div>
      </div>
    </main>
  </template>
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

// For Facebook App ID
useHead({
  meta: [
    { property: 'fb:app_id', content: page.value?.fbAppId },
    { name: 'keywords', content: page.value?.keywords },
    { name: 'twitter:url', content: page.value?.twitterUrl },
  ],
});
</script>
