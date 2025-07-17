<script>
    // @ts-ignore
    import RightBar from './components/RightBar.svelte';
    import MainCont from './components/MainCont.svelte';

    const { data } = $props();
</script>

<div class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
        <MainCont  categoriesList = {data.categoriesList} transactionsList = {data.transactionsList}/>
    </div>
    <div class="md:w-1/4">
        <RightBar />
    </div>
</div>