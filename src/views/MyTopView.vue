<template>
	<div>
		<h1>MyTopView</h1>

		単体でコンポーネントを呼び出す<br />
		<MyButton
			@clickButton="clickButton"
			myId="001"
			title="ぼたん001"
			@deleteButton="deleteButton"
		/>
		<MyButton
			@clickButton="clickButton"
			myId="002"
			title="ぼたん002"
			@deleteButton="deleteButton"
		/>
		<MyButton
			@clickButton="clickButton"
			myId="003"
			title="ぼたん003"
			@deleteButton="deleteButton"
		/>
		<hr />
		ループ文の例:<br />
		<MyButton
			v-for="item in items"
			v-bind:key="item.id"
			v-bind:myId="item.id"
			v-bind:title="item.title"
			@clickButton="clickButton"
			@deleteButton="deleteButton"
		></MyButton>
	</div>
</template>

<script>
// @ is an alias to /src
import MyButton from "@/components/MyButton.vue";

function getUniqueId() {
	return Math.random().toString(36).substr(2, 9);
}

export default {
	name: "MyTopView",
	data: function () {
		return {
			items: [
				{
					id: getUniqueId(),
					title: "MyButton1",
				},
				{
					id: getUniqueId(),
					title: "MyButton2",
				},
				{
					id: getUniqueId(),
					title: "MyButton3",
				},
				{
					id: getUniqueId(),
					title: "MyButton4",
				},
				{
					id: getUniqueId(),
					title: "MyButton5",
				},
			],
		};
	},

	components: {
		MyButton,
	},
	// ボタンをクリック
	methods: {
		clickButton(id) {
			console.log("子から通知されました。" + id);
		},

		deleteButton(id) {
			if (id.length <= 3) {
				return;
			}
			console.log("子から削除されました。" + id);

			this.items = this.items.filter(function (item) {
				return item.id !== id;
			});
		},
	},
};
</script>
