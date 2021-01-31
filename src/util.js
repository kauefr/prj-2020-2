export const apiAddress = "http://localhost:3333/";

export function getAll(endpoint, setter) {
    async function fetchData(endpoint) {
        const response = await fetch(apiAddress + endpoint);
        return await response.json();
    }
    fetchData(endpoint).then(setter);
}