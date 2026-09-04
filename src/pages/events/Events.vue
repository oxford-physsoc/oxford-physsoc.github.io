<script setup lang="ts">
import App from "@/components/App.vue";

import BackroundImage from "@/assets/backgrounds/background-termcard.png";

import { TermCard } from "@/pages/events/term-card";
</script>

<template>
	<App
		:background-properties="{
			'backgroundImg': BackroundImage,
			'height': '0'
		}"
	>
		<template #first-slot>
			<h1>Term Card</h1>

			<div id="term-card">
				<div
					v-for="(events, id) in TermCard"
					:key="'term-card-entry-' + id"
					class="c-term-card-entry"
				>
					<span class="c-term-card__week-text">W{{ id }}</span>
					<div class="c-term-card__event-wrapper">
						<div
							v-for="event in events"
							:key="event.name"
							class="c-term-card__event"
						>
							{{ event.name }}
							<br>
							<i>{{ event.dateAndTime }}</i>
						</div>
					</div>
				</div>
			</div>
		</template>
	</App>
</template>

<style scoped>
#term-card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 1px solid white;
	background: repeating-linear-gradient(45deg, #3336 0px, #4444 30px, #3336 60px);
	backdrop-filter: blur(1px);
}

.c-term-card-entry {
	width: 400px;
	display: flex;
	align-items: center;
	border: 1px solid white;
	padding: 10px;
}

.c-term-card-entry:nth-child(even) {
	flex-direction: row-reverse;
}

.c-term-card-entry:nth-child(4n + 1) .c-term-card__week-text {
	color: #828fe8;
}

.c-term-card-entry:nth-child(4n + 2) .c-term-card__week-text,
.c-term-card-entry:nth-child(4n + 3) .c-term-card__week-text {
	color: #ddd;
}

.c-term-card-entry:nth-child(4n) .c-term-card__week-text {
	color: #eccc75;
}

.c-term-card__week-text {
	font-size: 3em;
	font-weight: bold;
}

.c-term-card__event-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	flex-grow: 1;
	font-size: 1.3em;
	line-height: 1.05;
	gap: 0.5em;
}

.c-term-card__event-wrapper i {
	font-size: 0.75em;
	opacity: 0.8;
}

@media screen and (max-width: 850px) {
	#term-card {
		grid-template-columns: 1fr;
	}
}
</style>