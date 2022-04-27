<template>
<div class="all">
    <div class="likes">
    <p>your likes</p>
        <img v-for="(like, key) in $store.state.likes" 
                :key="key" :src="like.url" v-on:click="dislike(like.id)">
    </div>
    <div class="back">
        <input type="text" v-model="key"><button v-on:click="search">search</button><br />
        <div>
            <div v-for="(page, key) in imgs" :key="key">
             <img v-for="(img, key) in page"
                :key="key" :src="img.previewURL" v-on:click="like(img.previewURL)">
            
            </div>
            <div ref="ID" ></div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

function getUniqueId() {
	return Math.random().toString(36).substr(2, 9);
}

export default {
  name: 'ImageApi',
  
  data: function () {
        return {
            url: 'https://pixabay.com/api/?key=26850538-39bf61092d464b5c0e350dc0c',
            key: '',
            imgs: [],
            buttonStatus: false,
        };
    },

    created: function () {
        this.fetchGo();
    },

    mounted: function () {

        let $data = this;

        let options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2
        }

        function call () { 
            axios.get($data.url + '&q=' + $data.key).then((res) => {
                    $data.imgs.push(res.data.hits);
            });
        }

        let observer = new IntersectionObserver(call, options);
        
        observer.observe(this.$refs.ID);
    
    },

    methods: {

        fetchGo:function() {
            axios.get(this.url + '&q=' + this.key).then((res) => {
                this.imgs.push(res.data.hits);
                
            })
        },
        search:function () {

            this.imgs = [];
            this.fetchGo();
        },
        like:function (url) {

            var like = {
                id: getUniqueId(),
                url: url
            };
            this.$store.commit('setLikes', like);

        },
        dislike:function (id) {
        
            this.$store.commit('disLikes', id);
        },

    }
}
</script>
<style scoped>

.all {

height: 1300px;
max-height: 1300px;
}

.likes {
height:300px;
width:1000px;
background-color:#ffe4e1 ;

}

.likes img {
height:50px;
}

.back {
width:1000px;
height: 1000px;
max-height: 1000px;
background-color: azure;
padding-top: 30px;
}

img {
  height: 180px;
  width: auto;
  margin: 10px;
}
</style>