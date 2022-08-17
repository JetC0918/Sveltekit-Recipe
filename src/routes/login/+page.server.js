import { error } from '@sveltejs/kit';

/** @type {import('../../../.svelte-kit/types/src/routes/login/$types').Action} */

export async function POST({request}) { 
    const body = await request.formData();
    const [emailField, passwordField] = body; 

    const email = emailField[1]
    const password = passwordField[1] 

    let errors = [];

    if(!email){
        errors.push({
            message: 'Email field is required'
        })
    }

    if(!password){
        errors.push({
            message: 'Password field is required'
        })
    }
    
    if (errors.length > 0){ 
        return{
            status: 404,
            errors: errors
        }
    }

    return{
        location:  '/',
        status: 302
    }
  }
 