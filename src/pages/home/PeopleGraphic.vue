<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

let interval1Id: number, interval2Id: number;

interface Face {
	x: number,
	y: number,
	angle: number,
}
const faces = ref<Face[]>([]);
onMounted(() => {
	interval1Id = setInterval(() => {
		for (const face of faces.value) {
			face.x += 0.04 * Math.cos(face.angle);
			face.y += 0.04 * Math.sin(face.angle);
		}
		faces.value = faces.value.filter(face => Math.max(face.x, face.y) < 2);
	}, 16);
	interval2Id = setInterval(() => {
		faces.value.push({
			x: -1.5,
			y: -1.5,
			angle: Math.random() * Math.PI / 2,
		});
	}, 100);
});


onUnmounted(() => {
	clearInterval(interval1Id);
	clearInterval(interval2Id);
});
</script>

<template>
	<div class="c-round-circle-infographic">
		<svg
			width="200"
			height="200"
			viewBox="-1.5 -1.5 3 3"
			xmlns="http://www.w3.org/2000/svg"
		>
			<template
				v-for="(face, id) in faces"
				:key="id + '-smiley'"
			>
				<path
					:d="`M${face.x - 0.06} ${face.y - 0.2} v 0.2`"
					stroke="#3c55b5"
					fill="none"
					stroke-width="0.05"
				/>
				<path
					:d="`M${face.x + 0.06} ${face.y - 0.2} v 0.2`"
					stroke="#3c55b5"
					fill="none"
					stroke-width="0.05"
				/>
				<path
					:d="`M${face.x - 0.2} ${face.y + 0.05}
					A 0.26 0.26 0 0 0 ${face.x + 0.2} ${face.y + 0.05}`"
					stroke="#3c55b5"
					fill="none"
					stroke-width="0.05"
				/>
			</template>

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
			1.6k+
		</h1>
		<span>Members</span>
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
	border-radius: 100%;
}

h1 {
	font-size: 3em;
	margin: 0;
	line-height: 1.2;
}
</style>