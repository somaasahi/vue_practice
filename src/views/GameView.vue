<template>
  <div class="all">
  <p>1マス1点・横か縦一列さらに2点・斜め一列さらに3点
  <p>turn: {{$store.state.player}}</p>
  <p>somas: {{$store.state.somas}}</p>
  <p>asahis: {{$store.state.asahis}}</p>
    <div class="hop">
        <MyOsero v-for="(n, key) in [0, 1, 2]" :key="key" :id=n></MyOsero>
    </div>
    <div class="step">
        <MyOsero v-for="(n, key) in [3, 4, 5]" :key="key" :id=n></MyOsero>
    </div>
    <div class="jump">
        <MyOsero v-for="(n, key) in [6, 7, 8]" :key="key" :id=n></MyOsero>
    </div>
  </div>
</template>

<script>
import MyOsero from '@/components/Osero.vue'

export default {
  name: 'GameView',
  components: {
    MyOsero
  },
//   data: function () {
//         return {
          
//             imgs: [],
            
//         };
//     },

    // created: function () {
        
    // },

    methods: {
        
    }
}
</script>

<style scoped>
.all {
    width:600px;
    height:600px;
    margin: auto;
}

.hop {
display: flex;
}

.step {
display: flex;
}

.jump {
display: flex;
}

</style>