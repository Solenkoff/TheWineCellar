const restUrl = import.meta.env.VITE_SUPABASE_REST_URL;
const authUrl = import.meta.env.VITE_SUPABASE_AUTH_URL;
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_API_KEY;

//*  ToDo  ->   Image Upload

async function baseRequest(url, path = '/', method = 'GET', data = null, opts = {}) {
    const options = {
        ...opts,
        headers: {
            ...opts.headers,
            apiKey,
            Prefer: "return=representation",
            ...getAuthHeader(),
        },
    };

    if (method !== 'GET') {
        options.method = method;
    } 

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json(); 
}

export default async function request(path = '/', method = 'GET', data = null, opts = {}) {
    return baseRequest(restUrl, path , method, data, opts);
}

export const authRequest = async (path = '/', method = 'GET', data = null, opts = {}) => {
    return baseRequest(authUrl, path , method, data, opts);
}


function getAuthHeader() {
    const auth = localStorage.getItem('auth');
    const accessToken = auth ? JSON.parse(auth)?.access_token : null;

    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
}