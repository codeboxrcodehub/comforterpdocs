<template>
  <div
      class="gap-8 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10"
      :class="{ 'grid md:grid-cols-2': true }"
  >
    <!-- Left Column - Content -->
    <section class="flex flex-col items-start gap-2">
      <NuxtLinkLocale
          v-if="announcement"
          :to="announcement.to"
          :target="announcement.target"
          class="inline-flex items-center px-0.5 text-sm font-medium"
      >
        <template v-if="announcement.icon">
          <SmartIcon :name="announcement.icon" :size="16" />
          <UiSeparator class="mx-2 h-4" orientation="vertical" />
        </template>
        <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
        <Icon name="lucide:arrow-right" class="ml-1 size-4" />
      </NuxtLinkLocale>

      <h1 class="text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] custom-hero-alt-heading-1">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <h1 class="text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </h1>
      <p class="text-foreground max-w-3xl text-xl font-light md:text-2xl">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </p>

      <!-- <div class="flex w-full items-center justify-start gap-2 py-2">
        <NuxtLinkLocale
            v-for="(action, i) in actions"
            :key="i"
            :to="action.to"
            :target="action.target"
        >
          <UiButton :variant="action.variant" size="sm">
            <SmartIcon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
            {{ action.name }}
            <SmartIcon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
          </UiButton>
        </NuxtLinkLocale>
      </div> -->

      <div class="flex w-full items-center justify-start gap-2 py-2">
        <UiButton
            v-for="(action, i) in actions"
            :key="i"
            as="a"
            :to="action.to"
            :target="action.target"
            :variant="action.variant"
            size="sm"
        >
          <SmartIcon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
          {{ action.name }}
          <SmartIcon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
        </UiButton>
      </div>

    </section>

    <!-- Right Column - Logo -->
    <div class="flex items-center justify-center order-first md:order-last">
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center justify-center rounded-2xl bg-muted/20">
          <NuxtImg
              :src="logo?.light"
              :alt="logo?.alt"
              class="h-80 w-80 object-contain dark:hidden"
          />
          <NuxtImg
              :src="logo?.dark || logo?.light"
              :alt="logo?.alt"
              class="hidden h-80 w-80 object-contain dark:block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string;
    target?: Target;
    icon?: string;
    title: string;
  };
  actions?: [{
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    to: string;
    target?: Target;
  }];
  logo?: {
    light?: string;
    dark?: string;
    alt?: string;
  };
  mobileRight?: 'top' | 'bottom';
}>();
defineSlots();
</script>
