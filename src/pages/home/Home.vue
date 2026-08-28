<script setup lang="ts">
import App from "@/components/App.vue";

import BackgroundImage from "@/assets/backgrounds/background-home.png";

import { ref } from "vue";

const height = ref("56.25vw");
window.addEventListener("resize", () => {
	height.value = `${Math.min(1080, window.innerWidth * 0.5625)}px`;
});
</script>

<template>
	<App
		:background-properties="{
			'backgroundImg': BackgroundImage,
			'height': height,
		}"
	>
		<template #first-slot>
			<div class="c-display-card-content">
				<h1>Ad Astra<br>Per Aspera</h1>
				<div class="c-pages-button-list">
					<button
						onclick="window.open('https://buy.stripe.com/4gMbJ1cSK2JncqF6Mt9IQ01', '_blank')"
					>
						Join us!
					</button>
					<button>
						Events
					</button>
				</div>
			</div>
		</template>
	</App>
</template>

<style scoped>
.c-display-card-content {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	flex-grow: 1;
}

.c-pages-button-list {
	display: grid;
	grid-template-columns: 200px 200px;
	column-gap: 20px;
	margin-top: 30px;
}

@media screen and (max-width: 750px) {
	.c-pages-button-list {
		grid-template-columns: 150px 150px;
	}
}
</style>