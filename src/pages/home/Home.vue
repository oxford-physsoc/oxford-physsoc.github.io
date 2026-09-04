<script setup lang="ts">
import App from "@/components/App.vue";

import BackgroundImage from "@/assets/backgrounds/background-home.png";

import ClockGraphic from "./ClockGraphic.vue";
import PeopleGraphic from "./PeopleGraphic.vue";

import { ref } from "vue";

const height = ref(`${Math.min(window.innerHeight, window.innerWidth * 0.5625)}px`);
window.addEventListener("resize", () => {
	height.value = `${Math.min(window.innerHeight, window.innerWidth * 0.5625)}px`;
});
</script>

<template>
	<App
		:background-properties="{
			'backgroundImg': BackgroundImage,
			'height': height,
			'style': {
				'background-position': 'bottom'
			}
		}"
	>
		<template #first-slot>
			<div class="c-display-card-content">
				<h1>Ad Astra<br>Per Aspera</h1>
				<div class="c-pages-button-list">
					<a
						class="button"
						href="https://buy.stripe.com/4gMbJ1cSK2JncqF6Mt9IQ01"
						target="_blank"
					>
						Join us!
					</a>
					<a
						class="button"
						href="/events"
					>
						Events
					</a>
				</div>
			</div>
		</template>
		<div class="c-content-card">
			<span>
				Ever since our founding over 90 years ago, we have been committed to serving the
				Physics community in Oxford. We are focused on broadening our members' Physics
				education and promoting career opportunities, and we provide a strong sense of
				community to Physicists as well as other STEM students. For more information
				about our events, please see the <a href="/events">Events Tab</a>.
			</span>
			<br>
			<br>
			<div class="c-container-infographics">
				<ClockGraphic />
				<PeopleGraphic />
			</div>
		</div>
	</App>
</template>

<style scoped>
.c-content-card {
	margin-top: 50px;
	font-size: 20px;
	text-align: justify;
}

.c-container-infographics {
	display: flex;
	flex-wrap: wrap;
	max-width: 800px;
	width: 100%;
	gap: 20px;
	justify-content: space-evenly;
	margin-top: 30px;
}

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

.button {
	text-decoration: none;
}

@media screen and (max-width: 750px) {
	.c-pages-button-list {
		grid-template-columns: 150px 150px;
	}
}
</style>