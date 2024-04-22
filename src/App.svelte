<script>
	import { onMount, onDestroy } from "svelte";
	import { dcInit, DcWorld } from "dvijcock";
	import DcLogic from "./DcLogic.js";

	// dom element for mount canvas
	let domEl;
	// dc variable for for clear resursec on element destroy
	let dcWorld;
	onMount(async() => {
		//dc must be init before use
		await dcInit();
		//DcWorld is main class that create everything
		dcWorld = new DcWorld();
		//attach dom element
		dcWorld.setDomElement(domEl);
		//attach logic you created for DcWorld
		dcWorld.setLogic(new DcLogic);
	});
	onDestroy(() => {
		//destroy created DcWorld
		dcWorld.destroy();
	});
</script>

<div bind:this={domEl} class="game"></div>

<style>
	.game {
		width: 100vw;
		height: 100vh;
		margin: 0px;
		top: 0px;
		left: 0px;
		position: fixed;
	}
</style>
