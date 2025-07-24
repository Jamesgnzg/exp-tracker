<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { CirclePlus } from '@lucide/svelte';
    
    let showTransactionModal = $state(false);
</script>
<div class="p-3">
    <div class="flex flex-col items-center max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <img class="w-15 h-15 rounded-full mr-4" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="Avatar">
        <div class="text-md mt-2">
            <p>Jonathan Kuminga</p>
            <p>Shooting Guard</p>
        </div>
    </div>
    
    <button class="mt-5 p-3 rounded-lg text-white bg-red-500 cursor-pointer min-w-full hover:bg-red-700" onclick={() => showTransactionModal = true}>
        <div class="flex gap-2 justify-center">
            <CirclePlus />
            <span>Add Transaction</span>
        </div>
    </button>
</div>

<Modal bind:showModal={showTransactionModal}>
	{#snippet header()}
		<h2 class="text-xl font-medium text-gray-900">Create Transaction</h2>
	{/snippet}

    <div class="mt-2">
        <form method="POST">
            <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <label for="name" class="text-sm rtl:text-right font-medium block text-gray-700 dark:text-gray-200 space-y-2 mb-1">
                        Transaction
                    </label>
                    <input name="name" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden text-sm px-2.5 py-2.5 border border-gray-300 focus:border-primary-500 focus:ring-orange-500 bg-gray-50 text-gray-900 rounded-lg" required autocomplete="off" placeholder="Add Transaction name"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="amount" class="text-sm rtl:text-right font-medium block text-gray-700 dark:text-gray-200 space-y-2 mb-1">
                        Amount
                    </label>
                    <input name="amount" type="number" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden text-sm px-2.5 py-2.5 border border-gray-300 focus:border-primary-500 focus:ring-orange-500 bg-gray-50 text-gray-900 rounded-lg" autocomplete="off" placeholder="How much did it cost?"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="category" class="text-sm rtl:text-right font-medium block text-gray-700 dark:text-gray-200 space-y-2 mb-1">Category</label>
                    <select id="category" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden text-sm px-2.5 py-2.5 border border-gray-300 focus:border-primary-500 focus:ring-orange-500 bg-gray-50 text-gray-900 rounded-lg">
                        <option selected={true}>Select category</option>
                        <option value="TV">Transportation</option>
                        <option value="PC">Food</option>
                        <option value="GA">Bills</option>
                        <option value="PH">Hobbies</option>
                    </select>
                </div>
                <div class="col-span-2">
                    <label for="description" class="text-sm rtl:text-right font-medium block text-gray-700 dark:text-gray-200 space-y-5 mb-1">
                        Description
                    </label>
                    <textarea name="description" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden text-sm px-2.5 py-2.5 border border-gray-300 focus:border-primary-500 focus:ring-orange-500 bg-gray-50 text-gray-900 rounded-lg" autocomplete="off" placeholder="Details of the expense"></textarea>
                </div>
            </div>

            <div class="flex flex-row-reverse gap-2">
                <button class="text-gray-900 inline-flex items-center bg-transparent border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 cursor-pointer" onclick={() => showTransactionModal = false}>
                    Cancel
                </button>
                <button type="submit" class="text-white inline-flex items-center bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 cursor-pointer">
                    Add Transaction
                </button>
            </div>
        </form>
    </div>
</Modal>