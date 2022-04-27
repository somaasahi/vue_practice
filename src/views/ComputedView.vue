<template>
	<div>
		<h1>算出プロパティ：Computed</h1>
		{{ myNow }}

		<button @click="myClick">メソッドを呼び出す</button><br />

		<input type="text" v-model="myInput" />
		{{ myInput }}<br />

		<input type="text" v-model="fullName" />
		{{ fullName }}<br />

		{{ firstName }}<br />
		{{ lastName }}<br />
	</div>
</template>

<script>
export default {
	name: "ComputedView",
	data: function () {
		return {
			firstName: "John",
			lastName: "Doe",
			myInput: "",
		};
	},

	computed: {
		myNow: function () {
			//console.log(new Date());
			return new Date();
		},

		fullName: {
			// getter 関数
			get: function () {
				return this.firstName + " " + this.lastName;
			},
			// setter 関数
			set: function (newValue) {
				var names = newValue.split(" ");
				this.firstName = names[0];
				this.lastName = names[names.length - 1];
			},
		},
	},
	methods: {
		myNowMethod: function () {
			return new Date();
		},

		myClick() {
			console.log("メソッドを呼び出しました。");
			console.log("算出プロパティのmyNowを呼び出しました。");
			console.log(" Now : " + this.myNow);
			console.log("メソッドで定義したmyNowMethodを呼び出しました。");
			console.log(" Now : " + this.myNowMethod());
		},
	},
};
</script>
