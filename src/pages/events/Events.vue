<script setup lang="ts">
import App from "@/components/App.vue";
</script>

<template>
	<App>
	</App>
</template>

<style scoped>
.c-svg-container {
	width: 100%;
	max-width: 600px;
	margin: auto;
}

.c-svg-el {
	width: 100%;
}
.c-central-line {
	stroke-width: 5;
	stroke: var(--colour-accent);
}

.c-central-line--time-spacing {
	stroke-width: 5;
	stroke: #e8ec0d;
	stroke-linecap: round;
}

.c-event-point {
	stroke-width: 6;
	fill: var(--colour-background);
}

.c-event-text {
	max-width: calc(100% - 50px);
	position: relative;
	top: 50%;
	left: 40px;
	font-weight: 300;
	text-shadow: none;
	transform: translateY(-50%);
}

.c-event-text__exclaim {
	color: rgb(255, 127, 68);
	position: relative;
	display: inline-block;
	font-size: 1.6em;
	line-height: 0;
	vertical-align: middle;
}

.c-event-text__exclaim::before {
	content: "!";
	position: absolute;
	inset: 0;
	animation: a-exclaim 1s infinite ease-out;
}

@keyframes a-exclaim {
	0% { transform: scale(3); opacity: 0.8; }
	80% { transform: scale(0.8); opacity: 0; }
	100% { transform: scale(0.8); opacity: 0; }
}
</style>