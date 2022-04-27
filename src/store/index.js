import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    likes: [],
    player: "soma",
    somas: [],
    asahis: [],
  },
  getters: {
  },
  mutations: {
    setLikes (state, like) {
      state.likes.push(like);
      alert("add to likes");
    },
    disLikes (state, id) {
      state.likes = state.likes.filter(function (like) {
				return like.id !== id;
			});
      alert("remove from likes");
    },

    somaGet (state, id){
        state.somas.push(id);
        state.player = "asahi";
    },
    asahiGet (state, id){
      state.asahis.push(id);
      state.player = "soma";
    },
    without (state){
      if(state.player === "soma"){
        state.player = "asahi";
      }else{
        state.player = "soma";
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
