<script>
    /** @type {import('./$types').PageData} */
  export let data;  
</script>   

<h1 class="text-2xl text-center mb-10"> Food Recipes </h1>

<div class="grid grid-cols-3 gap-4 ">
  {#each data.recipes as item}
    <a class="relative" href={`/recipes/${item.id}`}>
        <p class="text-sm absolute top-0 z-20 inset-x-0 text-center mt-20 text-white bg-slate-500">{item.title}</p>
        <img class="rounded-lg shadow-md" src="{item.image}" alt="{item.title}">
    </a>
  {/each}    

</div>