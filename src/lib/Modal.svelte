<script>
  import { fade } from "svelte/transition";
  import { X } from '@lucide/svelte';

    let { showModal = $bindable(false), header, children } = $props();
    let dialog = $state();

    $effect(() => {
        if (showModal) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    })
</script>

<dialog bind:this={dialog}
    onclose={() => showModal = false}
    class="overflow-y-auto overflow-x-hidden rounded-md absolute left-1/2 top-1/3 transform -translate-1/2 min-w-2xl min-h-2xl backdrop:bg-black/80"
    >

    {#if showModal}
        <div class="p-5" transition:fade>
            <div class="flex justify-between border-b border-b-gray-200 pb-3">
                {@render header?.()}
                <!-- svelte-ignore a11y_autofocus -->
                <button autofocus onclick={() => dialog.close()} class="cursor-pointer text-gray-500 hover:bg-gray-200 rounded-lg p-1.5"><X /></button>
            </div>
            {@render children?.()}
        </div>
    {/if}
</dialog>