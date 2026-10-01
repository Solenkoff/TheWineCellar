const mainUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

export default async function request(path = '/', method = 'GET', data = null) {
    const options = {
        headers: {
            apiKey,
        }
    };

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${mainUrl}${path}`, options);

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
} 