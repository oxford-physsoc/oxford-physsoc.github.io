<script setup lang="ts">
import App from "@/components/App.vue";

import CommitteeGroupPhoto from "@/assets/backgrounds/background-about.png";
</script>

<template>
	<App
		:background-properties="{
			backgroundImg: CommitteeGroupPhoto,
			height: '20vw',
		}"
	>
		<template #first-slot>
			<h1>Sponsors</h1>
		</template>
		<div class="c-content-card">
			Our sponsorship packages are designed to introduce your organization to some of the most talented and motivated physics students across the UK. At OUPS, we view our sponsors as both clients and partners, and are committed to ensuring that each of our sponsors receives the greatest standard of service. Some benefits of being a sponsor include, but are not limited to: 
			<ul>
				<li>Advertisements on our weekly newsletter of 1,600+ members, social media, and more</li>
				<li>Access to our resume book</li>
				<li>Opportunities to host lectures, workshops, and coffee chats</li>
			</ul>

			<span>
				We are very grateful for the vital role our sponsors play in keeping our events as accessible as possible to all students across Oxford. Please contact
				<a
					href="mailto:oups.finances@gmail.com"
					target="_blank"
				>oups.finances@gmail.com</a> if you are interested in working with OUPS – we will be glad to send over our sponsorship packages and set up a call to discuss how we might best help your organization. 
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