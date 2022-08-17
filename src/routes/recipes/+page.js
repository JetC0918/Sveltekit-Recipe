  
/** @type {import('./$types').PageLoad} */
export async function load(page) {
	const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; 
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

	const res = await fetch(url);
	const { results } = await res.json();

	if (res.ok) {
		return {
			 recipes: results 
		};
	}

	return{
		status : 404,
		errors : "Can not fetch recipes"
	}
  }
 