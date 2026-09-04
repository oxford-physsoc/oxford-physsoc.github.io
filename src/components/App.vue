<script setup lang="ts">
import Footer from "./Footer.vue";
import TopBar from "./TopBar.vue";

import { defineProps, StyleValue } from "vue";

const props = defineProps<{
	backgroundProperties?: {
		backgroundImg?: string,
		height: string,
		style?: StyleValue
	}
}>();
</script>

<template>
	<TopBar />
	<div
		v-if="props.backgroundProperties"
		class="c-content-card c-content-card--img"
		:style="props.backgroundProperties.style ? [{
			'background-image': `url(${props.backgroundProperties.backgroundImg})`,
			'min-height': `${props.backgroundProperties.height}`,
		}, props.backgroundProperties.style] : {
			'background-image': `url(${props.backgroundProperties.backgroundImg})`,
			'min-height': `${props.backgroundProperties.height}`,
		}"
	>
		<TopBar hidden />
		<slot name="first-slot" />
	</div>
	<TopBar
		v-else
		hidden
	/>
	<slot />
	<Footer />
</template>

<style scoped>
.c-content-card--img {
	background-size: cover;
	background-position: center;
	padding-bottom: 70px;
	position: relative;
	background-color: var(--colour-accent-deep);
}
</style>