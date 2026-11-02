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
    const newgamebtn = document.getElementById('newgame')
    newgamebtn.addEventListener('click', async () => {
        try {
            const response = await getmethod('api/randomszo');
            
            newgamebtn.style.display = "none"
        
            for (let i = 0; i < response.message.message.length; i++) {
                const div = document.createElement('div');
                div.innerHTML = '';
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
            const megfejt = document.createElement('button');
            megfejt.innerHTML = 'megfejtés';
            body.appendChild(megfejt);

            const badletters = document.createElement('div');
            btn.addEventListener('click', async () => {
                if (input.value.length === 1) {

                    let j = 0
                    while(j < response.message.message.length && input.value !== response.message.message[j]){
                        j++
                    }

                    if(j < response.message.message.length){
                        const newNode = document.createTextNode(input.value);
                        maindiv.replaceChild(newNode, maindiv.childNodes[j])
                    }
                    else{
                            const elet = await getmethod('api/elet')
                            console.log(elet)
                            if(elet.message === 1){
                                const img = document.createElement('img')
                                img.src = '../kepek/'+elet.message+".png"
                                body.appendChild(img)
                            }
                            else{
                                const img = document.createElement('img')
                                img.src = '../kepek/'+elet.message+".png"
                                body.removeChild(body.lastChild)
                                body.appendChild(img)
                            }

                    }

                  /*  for (let i = 0; i < response.message.message.length; i++) {
                        if (input.value === response.message.message[i]) {
                                

                        }
                        else{

                        }
                    }*/
                    

                    

                }
            });

            megfejt.addEventListener('click', () => {
                if(input.value === response.message.message){
                    for(let i = 0; i < response.message.message.length; i++){
                        maindiv.removeChild(maindiv.children[0])
                    }
                        const joszo = document.createElement('div')
                        joszo.innerHTML = input.value
                        maindiv.appendChild(joszo)
                        newgamebtn.style.display = "block"
                }
            })

        } catch (error) {
            console.error('hiba', error.message);
        }
    });
});
