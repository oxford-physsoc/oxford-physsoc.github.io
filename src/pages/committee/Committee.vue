<script setup lang="ts">
import App from "@/components/App.vue";

import CommitteeGroupPhoto from "@/assets/backgrounds/background-about.png";

import { CommitteeList } from "./committee-list";

import Constitution from "@/assets/documents/standard-constitution-2016-17.pdf";
</script>

<template>
	<App
		:background-properties="{
			backgroundImg: CommitteeGroupPhoto,
			height: '20vw',
		}"
	>
		<template #first-slot>
			<h1>Committee</h1>
		</template>
		<div class="c-committee-list c-content-card">
			<template v-for="(infos, role) in CommitteeList">
				<div
					v-for="info in (infos instanceof Array ? infos : [infos])"
					:key="'committee-list-entry-' + role + info.name"
					class="c-committee-list__entry"
				>
					<img
						width="200"
						:src="info.image"
					>
					<h3>{{ info.name }}</h3>
					<h4>{{ role }}</h4>
				</div>
			</template>
		</div>
		<div class="c-constitution-card c-content-card">
			<h1>Constitution</h1>
			<span>
				We are governed as a society registered with the University of Oxford. You can view our constitution below.
				<br>
				<br>
			</span>

			<iframe
				:src="Constitution"
				width="100%"
				height="600"
			/>
		</div>
	</App>
</template>

<style scoped>
.c-committee-list {
	flex-direction: row;
	flex-wrap: wrap;
	align-items: stretch;
	justify-content: center;
	gap: 30px;
	padding: 100px 20px;
	box-sizing: content-box;
	max-width: 700px;
	width: auto;
}

.c-committee-list__entry {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
}

.c-committee-list__entry img {
	border-radius: 100%;
}

.c-committee-list__entry h3, .c-committee-list__entry h4 {
	margin: 0;
}

.c-committee-list__entry h3 {
	font-size: 1.4em;
	margin-top: 10px;
}

.c-constitution-card {
	border-bottom: 50px transparent solid;
	text-align: center;
	background-color: #99f3;
}

@media screen and (max-width: 750px) {
	.c-committee-list {
		font-size: 0.9em;
	}

	.c-committee-list__entry {
		width: 180px;
	}

	.c-committee-list__entry img {
		width: 180px;
	}
}
</style>