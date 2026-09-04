<script setup lang="ts">
import App from "@/components/App.vue";

import CommitteeGroupPhoto from "@/assets/backgrounds/background-about.png";
</script>

<template>
	<App
		:background-properties="{
			backgroundImg: CommitteeGroupPhoto,
			height: '40vw',
		}"
	>
		<template #first-slot>
			<h1>Sponsors</h1>
		</template>
		<div class="c-content-card">
			<span>
				For sponsorship and collaboration enquiries please contact us at
				<a
					href="mailto:oups.finances@gmail.com"
					target="_blank"
				>oups.finances@gmail.com</a>.
			</span>
			<br>
			Our list of sponsors is still being finalised for the 26/27 academic year! Check back
			for more.
		</div>
	</App>
</template>

<style scoped>
.c-content-card {
	margin-top: 50px;
	font-size: 20px;
	text-align: justify;
}
</style>