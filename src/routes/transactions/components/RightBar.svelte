<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    
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
    
    <button class="mt-5 p-3 rounded-lg text-white bg-red-400 cursor-pointer min-w-full" onclick={() => showTransactionModal = true}>+ Add Transaction</button>
</div>

<Modal bind:showModal={showTransactionModal}>
	{#snippet header()}
		<h2 class="font-bold">Create Transaction</h2>
	{/snippet}

    <div class="mt-2">
        <form method="POST">
            <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2">
                    <label for="name" class="block mb-2 font-medium">
                        Transaction
                    </label>
                    <input name="name" class="border p-2 rounded-sm min-w-full focus:ring-0 focus:outline-none" autocomplete="off" placeholder="Add Transaction name"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="amount" class="block mb-2 font-medium">
                        Amount
                    </label>
                    <input name="amount" type="number" class="border p-2 rounded-sm min-w-full focus:ring-0 focus:outline-none" autocomplete="off" placeholder="How much did it cost?"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="category" class="block mb-2 font-medium text-gray-900 dark:text-white">Category</label>
                    <select id="category" class="border rounded-sm focus:outline-none focus:ring-0 min-w-full p-2">
                        <option selected={true}>Select category</option>
                        <option value="TV">Transportation</option>
                        <option value="PC">Food</option>
                        <option value="GA">Bills</option>
                        <option value="PH">Hobbies</option>
                    </select>
                </div>
                <div class="col-span-2">
                    <label for="description" class="block mb-2 font-medium">
                        Description
                    </label>
                    <textarea name="description" class="border p-2 rounded-sm min-w-full focus:ring-0 focus:outline-none" autocomplete="off" placeholder="Details of the expense"></textarea>
                </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Add new Transaction
            </button>
        </form>
    </div>
</Modal>