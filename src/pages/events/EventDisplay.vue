<script setup lang="ts">
import { defineProps } from "vue";

import { EventEntry } from "./term-card";

const props = defineProps<{ event: EventEntry }>();
</script>

<template>
	<div class="c-event-display">
		<h2>{{ props.event.name }}</h2>
		<h3><i>{{ props.event.dateAndTime }}</i></h3>
		<span>{{ props.event.description }}</span>
	</div>
</template>

<style scoped>
.c-event-display {
	display: flex;
	text-align: justify;
	flex-direction: column;
	align-items: center;
}

h2, h3 {
	font-family: Montserrat;
	margin: 0.2em 0;
}
</style>