<template>
  <div class="panel-block">
    <form @submit.prevent="addNewSong">
      <input type="text" placeholder="Artist" v-model="newArtist" />
      <input type="text" placeholder="Title" v-model="newTitle" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSong",
  data() {
    return {
      newArtist: "",
      newTitle: ""
    };
  },
  methods: {
    addNewSong() {
      if (this.newArtist && this.newTitle) {
        this.$store.commit("addNewSong", {
          artist: this.newArtist,
          title: this.newTitle
        });
        this.newArtist = this.newTitle = "";
      }
    }
  }
};
</script>

<style scoped></style>
