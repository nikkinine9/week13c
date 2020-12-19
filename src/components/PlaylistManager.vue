/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */ /*
eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div id="playlistManager">
    <h1 class="title">My Playlist</h1>
    <section>
      <songlist :songs="songs"></songlist>
      <playlist :songs="playlistSongs"></playlist>
    </section>
  </div>
</template>

<script>
import Playlist from "./Playlist";
import Songlist from "./Songlist";

export default {
  name: "PlaylistManager",
  components: { Playlist, Songlist },
  data() {
    return {};
  },
  computed: {
    playlistSongs() {
      return this.$store.state.playlistSongs;
    },
    songs() {
      return this.$store.state.songs;
    }
  },
  methods: {}
};
</script>

<style scoped>
#playlistManager > section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
}
</style>
