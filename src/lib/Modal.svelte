<script>
  import { fade } from "svelte/transition";
  import { X } from '@lucide/svelte';

    let { showModal = $bindable(false), header, children } = $props();
    let dialog = $state();

    $effect(() => {
        if (showModal) dialog.showModal();
    })
</script>

<dialog bind:this={dialog}
    onclose={() => showModal = false}
    data-modal-backdrop="static"
    class="overflow-y-auto overflow-x-hidden rounded-md absolute left-1/2 top-1/3 transform -translate-1/2 min-w-2xl min-h-2xl"
    transition:fade>

    <div class="p-5">
        <div class="flex justify-between border-b pb-3">
            {@render header?.()}
            <!-- svelte-ignore a11y_autofocus -->
		    <button autofocus onclick={() => dialog.close()} class="cursor-pointer"><X /></button>
        </div>
		{@render children?.()}
    </div>
</dialog>