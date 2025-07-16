<script>
    export let open = false;
    import { slide } from 'svelte/transition';

    const handleClick = () => open = !open
</script>

<div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
	<div class="flex w-full justify-between">
		<div class="mr-5">
			<slot name="header"></slot>	
		</div>
		
		<button on:click={handleClick} >
			x
		</button>
	</div>
	{#if open}
        <div class="mt-3 p-2 bg-[#cecece]" transition:slide>
            <slot name="details">
            </slot>
        </div>
	{/if}
</div>
