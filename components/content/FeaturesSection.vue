<template>
  <section class="w-full py-12 md:py-24 lg:py-8">
    <div class="container px-4 md:px-6">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <CardCustom
            v-for="(feature, index) in validFeatures"
            :key="index"
            :to="feature?.link || '#'"
            class="classnotinuse group flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20"
        >
          <CardContentCustom class="flex flex-col items-center">
            <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
              <template v-if="feature?.icon">
                <NuxtImg
                    :src="feature.icon.light"
                    :alt="feature.icon.alt || feature.title"
                    class="h-10 w-10 object-contain dark:hidden"
                />
                <NuxtImg
                    :src="feature.icon.dark || feature.icon.light"
                    :alt="feature.icon.alt || feature.title"
                    class="hidden h-10 w-10 object-contain dark:block"
                />
              </template>
              <div v-else class="flex h-10 w-10 items-center justify-center">
                <Icon name="lucide:package" class="h-6 w-6 text-primary" />
              </div>
            </div>

            <h3 class="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
              {{ feature?.title || 'Feature Title' }}
            </h3>

            <p class="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm">
              {{ feature?.details || 'Feature description' }}
            </p>

            <!-- <NuxtLink
                :to="feature?.link || '#'"
                class="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
            >
              Learn more
              <Icon name="lucide:arrow-right" class="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </NuxtLink> -->
          </CardContentCustom>
        </CardCustom>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardContentCustom from "~/components/ui/card/CardContentCustom.vue";
import CardCustom from "~/components/content/CardCustom.vue";

const props = defineProps({
  features: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const validFeatures = computed(() => {
  return props.features.map(feature => ({
    icon: {
      light: feature?.icon?.light || '/placeholder-light.svg',
      dark: feature?.icon?.dark || feature?.icon?.light || '/placeholder-dark.svg',
      alt: feature?.icon?.alt || feature?.title || 'Feature icon',
    },
    title: feature?.title || 'Untitled Feature',
    details: feature?.details || 'No description available',
    link: feature?.link || '#',
  }));
});
</script>
