import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const animeArr = ref([]);
  const filmsArr = ref([]);
  const user = ref("Eduard");

  return { user, animeArr, filmsArr };
});
