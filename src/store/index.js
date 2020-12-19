/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        playlistSongs: [],
        songs: [
            { artist: "Chris deBurgh", title: "Lady In Red" },
            { artist: "Johnny Cash", title: "You Are My Sunshine" },
            { artist: "AC/DC", title: "Jailbreak" },
            { artist: "Meatloaf", title: "Two Out Of Three Ain't Bad" },
            { artist: "Dj Regard", title: "Ride It" },
            { artist: "Lady Gaga", title: "Rain On Me" },
            { artist: "Black Eyed Peas", title: "VIDA LOCA" }
        ]
    },
    mutations: {
        addNewSong(state, song) {
            state.songs.splice(0, 0, song);
        },
        moveToPlaylist(state, index) {
            let song = state.songs.splice(index, 1)[0];
            state.playlistSongs.splice(0, 0, song);
        },
        removeFromPlaylist(state, index) {
            let song = state.playlistSongs.splice(index, 1)[0];
            state.songs.splice(0, 0, song);
        }
    },
    actions: {},
    modules: {}
});