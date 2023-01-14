<script lang="ts" setup>
const categories = [
  {
    name: "Индивидуальные съёмки на улице",
    slug: "/street",
    src: "/street/Anna/1_fjmpnk.jpg",
  },
  {
    name: "Уличные фотографии",
    slug: "/city",
    src: "/city/1_kygyms.jpg",
  },
  {
    name: "Индивидуальные съёмки в студии",
    slug: "/studio",
    src: "studio/Kate/1_r2b5ok.jpg",
  },
];
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-10 text-center">
      <nuxt-link
        class="overflow-hidden"
        v-for="item in categories"
        :key="item.src"
        :to="item.slug"
      >
        <div class="overflow-hidden rounded-xl shadow-xl">
          <nuxt-img
            preload
            loading="lazy"
            class="transition-all duration-300 hover:scale-110"
            provider="cloudinary"
            :src="item.src"
            fit="fill"
            :modifiers="{
              fit: 'cover',
              format: 'webp',
            }"
          />
        </div>
        <h2 class="mt-4 text-xl tracking-wide">{{ item.name }}</h2>
      </nuxt-link>
    </div>
  </div>
</template>
