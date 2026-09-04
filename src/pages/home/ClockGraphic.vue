<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

let intervalId: number;

const time = ref(0);
onMounted(() => {
	intervalId = setInterval(() => {
		time.value += 0.03;
	}, 16);
});

const secondHand = computed(() => [Math.sin(time.value), -Math.cos(time.value)]);
const minuteHand = computed(() => [Math.sin(time.value / 60), -Math.cos(time.value / 60)]);

onUnmounted(() => clearInterval(intervalId));
</script>

<template>
	<div class="c-round-circle-infographic">
		<svg
			width="200"
			height="200"
			viewBox="-1.5 -1.5 3 3"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				:d="`M${secondHand[0]} ${secondHand[1]} 0 0`"
				stroke="#3c55b5"
				fill="none"
				stroke-width="0.2"
				stroke-linecap="round"
			/>
			<path
				:d="`M0 0 ${minuteHand[0]} ${minuteHand[1]}`"
				stroke="#3c55b5"
				fill="none"
				stroke-width="0.2"
				stroke-linecap="round"
			/>

			<circle
				cx="0"
				cy="0"
				r="1.4"
				stroke="#3c55b5"
				fill="none"
				stroke-width="0.2"
			/>
		</svg>
		<h1>
			90+
		</h1>
		<span>Years Active</span>
	</div>
</template>

<style scoped>
.c-round-circle-infographic {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
}

svg {
	position: absolute;
	inset: 0;
	z-index: -1;
}

h1 {
	font-size: 3em;
	margin: 0;
	line-height: 1.2;
}
</style>