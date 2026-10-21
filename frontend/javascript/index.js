const postfetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Hiba', response.status, response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Hiba', error);
    }
};

const torolpostfetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Hiba', response.status, response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Hiba', error);
    }
};

const getmethod = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Hiba', response.status, response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Hiba', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gomb').addEventListener('click', async () => {
        let message = document.getElementById('ujszo').value;
        if (message !== '') {
            try {
                const response = await postfetch('/api/szavak', {
                    message: message
                });
            } catch (error) {
                console.error('error', error.message);
            }
        }
    });
    document.getElementById('torol').addEventListener('click', async () => {
        let message = document.getElementById('ujszo').value;
        if (message !== '') {
            try {
                const response = await getmethod('/api/lista');
                const torol = await torolpostfetch('api/torol', {
                    message: message
                });
                console.log(response);
            } catch (error) {
                console.error('error', error.message);
            }
        }
    });
});
