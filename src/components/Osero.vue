<template>
  <div class="osero" v-on:click="clickact(id)" ref="target">
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyOsero',
  props: ["id"]
  ,
  methods: {
      clickact: function (id){

          if(this.$store.state.somas.includes(id)){
              alert("選択不可");
          }else if(this.$store.state.asahis.includes(id)){
              alert("選択不可");
          }else{

            var num = Math.floor( Math.random() * 11 );
           
                if (num % 2 == 0) {
                    var target = this.$refs.target;
                    if(this.$store.state.player === "soma"){
                        target.style.backgroundColor="#ffefd5";
                        this.$store.commit('somaGet', id);

                    }else if(this.$store.state.player === "asahi"){
                        target.style.backgroundColor="#afeeee";
                        this.$store.commit('asahiGet', id);
                    }
                }else{
                    this.$store.commit('without');
                }
            
            // gameset
            var somas = this.$store.state.somas;
            var asahis = this.$store.state.asahis;
            var total = somas.length + asahis.length;
            if(total == 9){
                var array = [];
                somas = somas.sort();
                asahis = asahis.sort();
                array[0] = somas;
                array[1] = asahis;
                var point = [];
                var somapoint = 0;
                var asahipoint = 0;
                point[0] = somapoint;
                point[1] = asahipoint;

                for (var x=0; x<2; x++){
                    point[x] = point[x] + array[x].length;

                        for (var i=0; i<array[x].length; i++){

                            if(array[x][i] === 0 || array[x][i] === 3 || array[x][i] === 6){
                                if(array[x][i]+1 === array[x][i+1] && array[x][i+1]+1 === array[x][i+2]){
                                    point[x] = point[x] + 2;
                                }
                            }
                            if(array[x][i] === 0 || array[x][i] === 1 || array[x][i] === 2){
                                for (var j=i+1; j<array[x].length; j++){
                                    if(array[x][i]+3 === array[x][j]){
                                        for (var k=j+1; k<array[x].length; k++){
                                            if(array[x][j]+3 === array[x][k]){
                                                point[x] = point[x] + 2;
                                            }
                                        }
                                    }
                                }
                            }
                            if(array[x][i] === 0){
                                for (var f=i+1; i<array[x].length; i++){
                                    if(array[x][f] === 4){
                                        for (var l=f+1; l<array[x].length; l++){
                                            if(array[x][l] === 8){
                                                point[x] = point[x] + 2;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }
                if(point[0] === point[1]){
                    alert("引き分け!"+"そま"+point[0]+"あさ"+point[1]);
                }else if(point[0] > point[1]){
                    alert("そま勝ち!"+"そま"+point[0]+"あさ"+point[1]);
                }else{
                    alert("あさ勝ち!"+"そま"+point[0]+"あさ"+point[1]);
                }
                
            }
          }
    }
  }
}
</script>
<style scoped>
.osero {
width:200px;
height:200px;
background-color: gainsboro;
border: solid white;
}

p{
line-height: 185px
}
</style>