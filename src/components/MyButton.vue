<template>
	<div class="components-button">
		MYぼたん:タイトルは {{ title }} です<br />
		クリックすると親に通知されます。<br />
		<button @click="$emit('clickButton', myId)">親に通知</button>
		自身をクリックします
		<button @click="myClick">自分自身に通知</button>
		{{ myCounter }}

		<button @click="myDelete" v-if="myId.length > 3">自分を削除</button>
	</div>
</template>

<script>
export default {
	name: "MyButton",

	data: function () {
		return {
			myCounter: 0,
		};
	},

	props: {
		myId: {
			type: String,
			default: "0",
		},
		title: {
			type: String,
			default: "",
		},
	},
	methods: {
		myClick() {
			console.log("自身をクリックしました:" + this.myId);
			this.myCounter++;
		},
		myDelete() {
			this.$emit("deleteButton", this.myId);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.components-button {
	padding: 30px;
	border: 1px solid #ccc;
}
</style>
