<template>
  <b-container>
    <h1>All Galleries</h1>
    <b-container>
      <b-container v-for="gallery in galleries" :key="gallery.id">
        <router-link :to="{path: 'my-galleries'}">{{ gallery.name }} </router-link> {{ gallery.description }}
        <b-container v-for="image in gallery.images" :key="image.id" class="b-row">
          <b-row>
            <b-col><img :src="image.imagesUrls" alt="" /> </b-col>
          </b-row>
        </b-container>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("galleries", ["getAllGalleries"]),
  },

  computed: {
    ...mapGetters("galleries", ["galleries"]),
  },
  created() {
    this.getAllGalleries();
  },
};
</script>

<style>
img {
  max-width: 30em;
}
</style>