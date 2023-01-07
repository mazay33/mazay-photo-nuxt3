<script lang="ts" setup></script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow h-16 ">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <HeaderLogo />
        <ul class="flex gap-10 text-lg h-16 items-center">
          <li>
            <nuxt-link to="/">Главная</nuxt-link>
          </li>
          <li>
            <nuxt-link to="price">Услуги и цены</nuxt-link>
          </li>
          <li>
            <nuxt-link to="contact">Контакты</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
