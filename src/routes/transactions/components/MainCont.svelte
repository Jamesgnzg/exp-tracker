<script>
    import Accordion from '$lib/Accordion.svelte';

    const { categoriesList, transactionsList } = $props();
</script>

{#snippet Categories(/** @type {string} */ name, /** @type {number} */ value)}
    <div class="flex min-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <img class="w-15 h-15 rounded-full mr-4" src="https://randomuser.me/api/portraits/med/women/21.jpg" alt="Avatar">
        <div class="text-md overflow-hidden">
            <p class="truncate" title={name}>{name}</p>
            <p class="truncate mt-1">{`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)}`}</p>
        </div>
    </div>
{/snippet}

<div class="md:flex">
    <form class="md:w-full">   
        <label for="default-search" class="absolute mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border-b-2 border-0 border-gray-200 transition duration-300 delay-200 ease focus:outline-none focus:ring-0 focus:border-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off" placeholder="Search"/>
        </div>
    </form>
    <a class="hidden md:inline md:py-4 md:px-2" href="/notifications">Notifications</a>
    <a class="hidden md:inline md:py-4 md:px-2" href="/transactions">Transactions</a>
</div>

<div class="mt-4 md:mt-5">
    <p>Categories</p>
    <div class="flex p-5 gap-3 overflow-hidden">
        {#each categoriesList as { name, totalAmount}  }
            {@render Categories(name, totalAmount)}
        {/each}
    </div>
</div>
<div class="mt-3 md:mt-5">
    <p>Transactions</p>
    <div class="flex flex-col gap-5 scroll-auto p-5">
        {#each transactionsList as {transactionName, amount}}
            <Accordion>
                <p class="font-semibold" slot="name">{transactionName}</p>
                <span class="truncate" slot="price">{`${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)}`}</span>
                <div slot="details">
                    <p>These are the details.</p>
                </div>
            </Accordion>
        {/each}
    </div>
</div>