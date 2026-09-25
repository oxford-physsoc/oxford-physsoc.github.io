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
			<h1>Join us!</h1>
		</template>
		<div class="c-content-card">
			<p>
				<b>Life membership costs just £5 which gives discounted entry to social events, as well as higher priority for events in high demand. We will also occasionally host member-only events, so it's definitely worth it to get a membership!</b>
				<br>
				<br>
				You can sign up via the link here (You will be redirected to a stripe payment page):
				<br>
                <br>

				<a
					class="button"
					href="https://buy.stripe.com/4gMbJ1cSK2JncqF6Mt9IQ01"
					target="_blank"
				>
					Join us!
				</a>
                <br>
                <br>
                Note that the mailing list is <i>separate</i> from membership! You can sign up for the mailing list in the form at the bottom.
			</p>
		</div>
	</App>
</template>

<style scoped>
.c-content-card {
	margin: 50px 0;
	font-size: 20px;
	text-align: justify;
}

.button {
    text-decoration: none;
    position: relative;
    left: 50%;
    font-size: 18px;
    transform: translateX(-50%);
}
</style>