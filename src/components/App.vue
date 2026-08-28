<script setup lang="ts">
import Footer from "./Footer.vue";
import TopBar from "./TopBar.vue";

import { defineProps } from "vue";

const props = defineProps<{
	backgroundProperties?: {
		backgroundImg: string,
		height: string
	}
}>();
</script>

<template>
	<TopBar />
	<div
		v-if="props.backgroundProperties"
		class="c-content-card c-content-card--img"
		:style="{
			'background-image': `url(${props.backgroundProperties.backgroundImg})`,
			'min-height': `${props.backgroundProperties.height}`,
		}"
	>
		<TopBar hidden />
		<slot name="first-slot" />
	</div>
	<slot />
	<Footer />
</template>

<style scoped>
.c-content-card--img {
	background-size: cover;
	background-position: bottom;
	padding-top: 30px;
	padding-bottom: 80px;
	position: relative;
}
</style>