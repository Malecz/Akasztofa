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

const body = document.getElementById('qwe');

document.addEventListener('DOMContentLoaded', () => {
    let maindiv = document.getElementById('maindiv');
    document.getElementById('newgame').addEventListener('click', async () => {
        try {
            const response = await getmethod('api/randomszo');

            for (let i = 0; i < response.message.length; i++) {
                const div = document.createElement('div');
                div.innerHTML = '_';
                div.classList = 'div';
                console.log(div);
                maindiv.appendChild(div);
            }
            const input = document.createElement('input');
            input.type = 'text';
            const btn = document.createElement('button');
            btn.innerHTML = 'tippelt betű';
            body.appendChild(input);
            body.appendChild(btn);
            const megfejt = document.createElement('input');
            megfejt.type = 'text';
            const btn1 = document.createElement('button');
            btn1.innerHTML = 'megfejtés';
            body.appendChild(megfejt);
            body.appendChild(btn1);

            const badletters = document.createElement('div');
            btn.addEventListener('click', () => {
                if (input.value.length === 1) {
                    console.log(input.value.length);
                    console.log(response.message[0]);

                    for (let i = 0; i < response.message.length; i++) {
                        if (input.value === response.message[i]) {
                        }
                    }
                }
            });
        } catch (error) {
            console.error('hiba', error.message);
        }
    });
});
