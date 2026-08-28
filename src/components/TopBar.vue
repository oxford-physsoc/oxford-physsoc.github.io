<script setup lang="ts">
import LogoImg from "@/assets/logo.png";
import MenuImg from "@/assets/icons/menu.svg";

import FbImg from "@/assets/icons/facebook.svg";
import InstaImg from "@/assets/icons/instagram.svg";
import MailImg from "@/assets/icons/mail.svg";

import { Pages } from "@/database/page-list";

import { defineProps, ref } from "vue";

const props = defineProps<{
	hidden?: boolean,
}>();

const getScroll = (function() {
	if (window.pageYOffset === undefined) {
		const scrollElement = document.documentElement || document.body;
		if (scrollElement) return () => scrollElement.scrollTop;
		return () => 0;
	}
	return () => window.pageYOffset;
}());

const scroll = ref(0);
const maxLogoSize = ref(60);
const maxTitleSize = ref(2.4);

const showMobileTabList = ref(false);

addEventListener("scroll", () => scroll.value = getScroll());
maxTitleSize.value = Math.max(Math.min(innerWidth / 300, 2.4), 1.5);
maxLogoSize.value = Math.max(Math.min(innerWidth / 12, 60), 40);
addEventListener("resize", () => {
	maxTitleSize.value = Math.max(Math.min(innerWidth / 300, 2.4), 1.5);
	maxLogoSize.value = Math.max(Math.min(innerWidth / 12, 60), 40);
	if (innerWidth > 680) showMobileTabList.value = false;
});
</script>

<template>
	<div
		v-if="!props.hidden"
		class="c-topbar"
	>
		<div class="c-topbar__tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				:href="page.url"
				class="c-topbar__tab-button"
			>{{ page.name }}</a>
		</div>
		<div class="c-topbar__title">
			<img
				class="c-topbar__logo-image"
				:src="LogoImg"
				alt="OUPS logo"
			>
			Oxford Physics Society
		</div>
		<div class="c-topbar__social-buttons">
			<a
				href="https://www.instagram.com/oxfordphyssoc/"
				target="_blank"
				class="c-topbar__social-button"
			>
				<img
					:src="InstaImg"
				>
			</a>
			<a
				href="https://www.facebook.com/physsoc/"
				target="_blank"
				class="c-topbar__social-button"
			>
				<img
					:src="FbImg"
				>
			</a>
			<a
				href="mailto:ouphyssoc@gmail.com"
				target="_blank"
				class="c-topbar__social-button"
			>
				<img
					:src="MailImg"
				>
			</a>
		</div>
		<button
			class="c-topbar__tab-list"
			aria-label="Open list of tabs"
			label="Open list of tabs"
			tabindex="1"
			@click="showMobileTabList = !showMobileTabList"
		>
			<img
				:src="MenuImg"
				width="40"
			>
		</button>
	</div>
	<div
		v-if="!props.hidden"
		:class="{
			'c-mobile-tab-list': true,
			'c-mobile-tab-list--show': showMobileTabList
		}"
	>
		<div class="c-topbar c-topbar--fake">
			<div class="c-topbar__title">
				<img
					class="c-topbar__logo-image"
				>
			</div>
			<div class="c-topbar__tab-buttons">
				<a
					v-for="page in Pages"
					:key="page.name"
					class="c-topbar__tab-button"
				>{{ page.name }}</a>
			</div>
		</div>
		<div class="c-mobile-tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				:href="page.url"
				class="c-mobile-tab-button"
			>{{ page.name }}</a>

			<div class="c-mobile-social-buttons">
				<a
					href="https://www.instagram.com/oxfordphyssoc/"
					target="_blank"
					class="c-topbar__social-button"
				>
					<img
						:src="InstaImg"
					>
				</a>
				<a
					href="https://www.facebook.com/physsoc/"
					target="_blank"
					class="c-topbar__social-button"
				>
					<img
						:src="FbImg"
					>
				</a>
				<a
					href="mailto:ouphyssoc@gmail.com"
					target="_blank"
					class="c-topbar__social-button"
				>
					<img
						:src="MailImg"
					>
				</a>
			</div>
		</div>
	</div>
	<div
		v-if="props.hidden"
		class="c-topbar c-topbar--fake"
	>
		<div class="c-topbar__title">
			<img
				class="c-topbar__logo-image"
			>
		</div>
		<div class="c-topbar__tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				class="c-topbar__tab-button"
			>{{ page.name }}</a>
		</div>
	</div>
</template>

<style scoped>
button {
	backdrop-filter: none;
}

.c-topbar {
	display: grid;
	grid-template-columns: 1fr 370px 1fr;
	align-items: center;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	background: linear-gradient(transparent, var(--colour-accent));
	/* Move the background upwards a little to make transparent effect instead of
	a solid colour at the bottom and none at the top */
	background-position-y: 20%;
	text-align: center;
	backdrop-filter: blur(3px);
	min-height: 100px;
}

.c-topbar::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-background);
	opacity: 0.5;
}

.c-topbar--fake {
	position: static;
	visibility: hidden;
	width: 100vw;
}

.c-topbar__title {
	font-size: 1.5em;
	line-height: 1.2;
	font-weight: 300;
	color: #fffb;
	text-shadow: 0 0 var(--colour-accent);
	font-family: Montserrat;
}

.c-topbar__title * {
	vertical-align: middle;
}

.c-topbar__logo-image {
	filter: drop-shadow(var(--colour-accent) 0 0 2px) drop-shadow(var(--colour-text) 0 0 2px);
	margin-right: 7px;
	width: 50px;
}

.c-topbar__tab-list {
	display: none;
	background-color: transparent;
	border: none;
	outline: none;

	justify-self: end;
	padding: 1.6em;
	line-height: 0;
}

.c-topbar__tab-buttons {
	position: relative;
	width: 100%;
	text-align: left;
}

.c-topbar__tab-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 100px;
	height: 50px;
	text-decoration: none;
	transition: color 0.1s, background-color 0.1s;
}

.c-topbar__tab-button:hover {
	background-color: var(--colour-text);
	color: var(--colour-background);
}

.c-topbar__social-buttons {
	position: relative;
	width: 100%;
	text-align: right;
	padding-right: 20px;
}

.c-topbar__social-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
}

.c-topbar__social-button > img {
	width: 25px;
}

.c-mobile-tab-list {
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	background-color: #0008;
	display: flex;
	flex-direction: column;
	align-items: end;

	visibility: hidden;
	transform: translateX(100%);
	opacity: 0;
	transition: transform 0.3s, visibility 0.3s, opacity 0.2s;
}

.c-mobile-tab-list--show {
	visibility: visible;
	transform: none;
	opacity: 1;
}

.c-mobile-tab-buttons {
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 200px;
	border-left: 3px solid var(--colour-accent);
}

.c-mobile-tab-buttons::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-accent);
	opacity: 0.8;
	filter: brightness(0.3);
}

.c-mobile-tab-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 50px;
	padding: 0 10px;
	border-bottom: 1px solid var(--colour-text);
	text-decoration: none;
	transition: color 0.1s, background-color 0.1s, width 0.1s;
}

.c-mobile-tab-button:hover {
	background-color: var(--colour-text);
	color: var(--colour-background);
	width: 100%;
}

.c-mobile-social-buttons {
	width: 100%;
	padding-top: 10px;
	text-align: center;
}

@media screen and (max-width: 750px) {
	.c-topbar__title {
		width: 100%;
		text-align: left;
	}

	.c-topbar__tab-list {
		display: block;
	}

	.c-topbar__tab-buttons {
		height: 0;
		visibility: hidden;
	}

	.c-topbar__social-buttons {
		display: none;
	}
}

@media screen and (max-width: 1000px) {
	.c-topbar__title {
		font-size: 1.2em;
	}

	.c-topbar__logo-image {
		width: 40px;
	}

	.c-topbar {
		grid-template-columns: 1fr 300px 1fr;
	}
}
</style>