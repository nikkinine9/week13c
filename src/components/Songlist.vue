<template>
  <div>
    <nav class="panel is-danger">
      <p class="panel-heading">Songlist ({{ songCount }})</p>
      <a
        class="panel-block is-active"
        v-for="(song, index) in songs"
        :key="index"
        @click="addToPlaylist(index)"
      >
        <span class="panel-icon">
          <i class="fas fa-plus" aria-hidden="true"></i>
        </span>
        {{ song.artist }} - {{ song.title }}
      </a>
      <add-song></add-song>
    </nav>
  </div>
</template>

<script>
import AddSong from "./AddSong.vue";
export default {
  name: "Songlist",
  components: {
    AddSong
  },
  props: {
    songs: Array
  },
  computed: {
    songCount() {
      return this.songs.length;
    }
  },
  methods: {
    addToPlaylist(index) {
      this.$store.commit("moveToPlaylist", index);
    }
  }
};
</script>

<style scoped></style>
