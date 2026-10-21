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

const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    let maindiv = document.getElementById('maindiv');
    document.getElementById('newgame').addEventListener('click', async () => {
        try {
            const response = await getmethod('api/randomszo');
            console.log(response.message);
            for (let i = 0; i < response.message.length; i++) {
                const div = document.createElement('p');
                div.classList = 'div';
                div.innerHTML = 'asd';
                console.log(div);
                body.appendChild(div);
            }
        } catch (error) {
            console.error('hiba', error.message);
        }
    });
});
