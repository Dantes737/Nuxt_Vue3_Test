<template>
  <div>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-stone-900/25 rounded-md"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Top animation films
      </h2>
      <h3>Author of this page: {{ store.user }}</h3>
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in animeList"
          :key="product.id"
          class="group relative"
        >
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          >
            <img
              :src="product.imgSrc"
              alt="animePoster"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-black">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.stars }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user.store";
const store = useUserStore();

const animeList = [
  {
    id: 1,
    title: "Bleach",
    imgSrc: "/img/bleach-Poster.jpg",
    href: "#",
    stars: "5",
  },
  {
    id: 3,
    title: "Chainsaw-Man",
    imgSrc: "/img/chai.png",
    href: "#",
    stars: "5",
  },
  {
    id: 6,
    title: "CyberPunck",
    imgSrc: "/img/Cyber.jpg",
    href: "#",
    stars: "5",
  },
];
</script>
