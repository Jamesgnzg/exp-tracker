<script>
    export let open = false;
	import { ChevronUp, ChevronDown } from '@lucide/svelte';
    import { slide } from 'svelte/transition';

    const handleClick = () => open = !open
</script>

<div class="p-5 bg-white border border-transparent border-b-gray-200 rounded-lg shadow-sm">
	<div class="flex justify-between w-full">
		<div class="mr-5">
			<slot name="name">
				<p>Name</p>
			</slot>	
		</div>
		<div class="flex gap-2">
			<slot name="price">
				<span>$0</span>
			</slot>
			<button class="cursor-pointer" on:click={handleClick}>
				{#if open}
					<ChevronUp />
				{:else}
					<ChevronDown />
				{/if}
			</button>
		</div>
	</div>
	{#if open}
        <div class="mt-3 p-2 bg-[#cecece]" transition:slide>
            <slot name="details">
				<p>No available details</p>
            </slot>
        </div>
	{/if}
</div>
