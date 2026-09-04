<script setup lang="ts">
import App from "@/components/App.vue";

import CommitteeGroupPhoto from "@/assets/backgrounds/background-about.png";

import { CommitteeList } from "./committee-list";
</script>

<template>
	<App
		:background-properties="{
			backgroundImg: CommitteeGroupPhoto,
			height: '40vw',
		}"
	>
		<template #first-slot>
			<h1>Committee</h1>
		</template>
		For sponsorship and collaboration enquiries please contact us at oups.finances@gmail.com.
		<div class="c-committee-list">
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
	</App>
</template>

<style scoped>
.c-content-card {
	margin-top: 50px;
	font-size: 20px;
	text-align: justify;
}

.c-committee-list {
	display: flex;
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