<script>
  	export let left = -220;
	export let top = -123;
	
	let moving = false;

    function onMouseDown() {
		moving = true;
	}

    function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

    function onMouseUp() {
		moving = false;
	}
</script>

<button on:pointerdown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</button>

<svelte:window on:pointerup={onMouseUp} on:pointermove={onMouseMove} />

<style>
   	.draggable {
		user-select: none;
		cursor: pointer;
		border: solid 1px gray;
		position: absolute;
	}
</style>