import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load(page) {
	const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
	const url = `https://api.spoonacular.com/recipes/${page.params.recipeid}/information?apiKey=${apiKey}`;

	const res = await fetch(url);
	const data = await res.json();

	if (res.ok) {
		return {
			 recipe: data
		};
	}

	return{
		status : 404,
		errors : "Can not fetch recipes"
	}
  }
 