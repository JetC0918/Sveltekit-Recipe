<script> 
    export let data;
    let recipe = data.recipe; 
</script>

<h1 class="text-2xl text-center mb-10">{recipe.title}</h1>

<div class="flex justify-between"> 
    <img width="250" class="rounded-lg shadow-md " src={recipe.image} alt={recipe.title} />

    <div>
        <h2 class="text-xl font-bold"> Ingredient </h2>
        {#each recipe.extendedIngredients as ingredient}
            <p class="text-gray-600 text-sm">{ingredient.name}</p>
        {/each} 
    </div>
    
    <div>
        <h2 class="text-xl font-bold"> Cuisine </h2>
        {#each recipe.cuisines as cuisine}
            <p class="text-gray-600 text-sm">{cuisine}</p>
        {/each} 
    </div>
</div>
