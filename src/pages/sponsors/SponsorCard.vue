<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ img: string }>();
</script>

<template>
	<div class="c-sponsor-square">
		<img
			width="150"
			:src="props.img"
		>
		<p><slot /></p>
	</div>
</template>

<style scoped>
.c-sponsor-square {
	display: flex;
	flex-direction: column;
	width: auto;
	max-width: 800px;
	gap: 10px;
	padding: 20px;
	align-items: center;
	background: white;
	border-radius: 20px;
	color: black;
	font-size: 0.9em;
	margin: 10px;
}
</style>