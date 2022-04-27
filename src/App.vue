<template>
	<div id="app">
		<nav>
			<!-- <router-link to="/">Home</router-link>&nbsp; -->
			<router-link to="/about">About</router-link>&nbsp;
			<router-link to="/myTop">MyTop</router-link>&nbsp;
			<router-link to="/computed">Computed</router-link>&nbsp;
			<!-- <router-link to="/myState">MyState</router-link>&nbsp; -->
			<router-link to="/myTest">todolist</router-link>&nbsp;
			<router-link to="/ImageApi">images</router-link>&nbsp;
			<router-link to="/LikesView">Likes</router-link>&nbsp;
			<router-link to="/GameView">Game</router-link>&nbsp;
		</nav>
		<router-view />
	</div>
</template>


<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
