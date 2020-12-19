<template>
  <div>
    <nav class="panel is-warning">
      <p class="panel-heading">Playlist ({{ songCount }})</p>
      <a
        class="panel-block is-active"
        v-for="(song, index) in songs"
        :key="index"
        @click="removeFromPlaylist(index)"
      >
        <span class="panel-icon">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
        {{ song.artist }} - {{ song.title }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    songs: Array
  },
  computed: {
    songCount() {
      return this.songs.length;
    }
  },
  methods: {
    removeFromPlaylist(index) {
      this.$store.commit("removeFromPlaylist", index);
    }
  }
};
</script>

<style scoped></style>
