type ClientArgs = {
    body: any;
    headers: any;
    method: string;
};

const defaultConfig = {
    body: null,
    headers: null,
    method: 'GET',
};

const API_URL = 'http://localhost:4000';

export default async function client(endpoint, { body, ...customConfig }: ClientArgs = defaultConfig) {
    const headers = { 'Content-Type': 'application/json' };

    let config: ClientArgs = defaultConfig;
    if (body) {
        config.body = JSON.stringify(body);
    }
    config.method = body ? 'POST' : 'GET';
    config = { ...config, ...customConfig };
    config.headers = {
        ...headers,
        ...customConfig.headers,
    };

    let data;
    try {
        const response = await window.fetch(endpoint, config);
        data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new Error(response.statusText);
    } catch (err) {
        return Promise.reject(err.message ? err.message : data);
    }
}

client.get = function (endpoint, customConfig = defaultConfig) {
    return client(`${API_URL}${endpoint}`, { ...customConfig, method: 'GET' });
};

client.post = function (endpoint, body, customConfig = defaultConfig) {
    return client(`${API_URL}${endpoint}`, { ...customConfig, body });
};

client.put = function (endpoint, body, customConfig = defaultConfig) {
    return client(`${API_URL}${endpoint}`, { ...customConfig, body, method: 'PUT' });
};

client.delete = function (endpoint, customConfig = defaultConfig) {
    return client(`${API_URL}${endpoint}`, { ...customConfig, method: 'DELETE' });
};
