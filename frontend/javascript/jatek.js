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
const container = document.createElement('div')
body.appendChild(container)

document.addEventListener('DOMContentLoaded', () => {

    const newgamebtn = document.getElementById('newgame')
    newgamebtn.addEventListener('click', async () => {
        container.innerHTML = ""
            let maindiv = document.createElement('div');
    maindiv.classList = "maindiv"
    container.appendChild(maindiv)
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
            container.appendChild(input);
            container.appendChild(btn);
            const megfejt = document.createElement('button');
            megfejt.innerHTML = 'megfejtés';
            container.appendChild(megfejt);

            const badletters = [] 
            const baddiv = document.createElement('div')
            baddiv.classList = "badbetuk"
            container.appendChild(baddiv)
            const badwords = []
            const baddivw = document.createElement('div')
            baddivw.classList = "badbetuk"
            container.appendChild(baddivw)

            btn.addEventListener('click', async () => {
                if (input.value.length === 1) {
                                let k = 0;
                    while(k < badletters.length && input.value !== badletters[k]){
                        k++;
                    }

                    console.log(k)
                    if(input.value !== badletters[k]){
                    let j = 0
                    while(j < response.message.message.length && input.value !== response.message.message[j]){
                        for(let i = 0; i < badletters.length; i++){
                            
                        }
                        j++
                    }

                    if(j < response.message.message.length){
                        const newNode = document.createTextNode(input.value);
                        maindiv.replaceChild(newNode, maindiv.childNodes[j])
                    }
                    else{
                            const elet = await getmethod('api/elet')
                            if(elet.message === 1){
                                badletters.push(input.value)
                                const img = document.createElement('img')
                                img.src = '../kepek/'+elet.message+".png"
                                body.appendChild(img)
                            }
                            else{
                                if(elet.message < 10){
                                    badletters.push(input.value)
                                    const img = document.createElement('img')
                                    img.src = '../kepek/'+elet.message+".png"
                                    body.removeChild(body.lastChild)
                                    body.appendChild(img)
                                }
                                else{
                                    badletters.push(input.value)
                                    const img = document.createElement('img')
                                    img.src = '../kepek/'+elet.message+".png"
                                    body.removeChild(body.lastChild)
                                    body.appendChild(img)
                                    
                                    alert("A Játéknak vége") 
                                    
                                    newgamebtn.style.display = "block"
                                }

                            }
                            let p = document.createElement('p')
                            for(let i = 0; i < badletters.length; i++){
                                p.innerHTML = badletters[i]
                                baddiv.appendChild(p)
                            }
                    }
                    }
                    


                }
            });

            megfejt.addEventListener('click', async () => {
                    let k = 0;
                    while(k < badwords.length && input.value !== badwords[k]){
                        k++;
                    }

                    if(input.value !== badwords[k]){
                        if(input.value === response.message.message){
                        for(let i = 0; i < response.message.message.length; i++){
                            maindiv.removeChild(maindiv.children[0])
                        }
                        const joszo = document.createElement('div')
                        joszo.innerHTML = input.value
                        maindiv.appendChild(joszo)
                        newgamebtn.style.display = "block"
                    }
                    else{
                            const elet = await getmethod('api/elet')
                            console.log(elet)
                            if(elet.message === 1){
                                badwords.push(input.value)
                                const img = document.createElement('img')
                                img.src = '../kepek/'+elet.message+".png"
                                body.appendChild(img)
                            }
                            else{
                                if(elet.message < 10){
                                    badwords.push(input.value)
                                    const img = document.createElement('img')
                                    img.src = '../kepek/'+elet.message+".png"
                                    body.removeChild(body.lastChild)
                                    body.appendChild(img)
                                }
                                else{
                                    badwords.push(input.value)
                                    const img = document.createElement('img')
                                    img.src = '../kepek/'+elet.message+".png"
                                    body.removeChild(body.lastChild)
                                    body.appendChild(img)
                                    
                                    alert("A Játéknak vége") 
                                    
                                    newgamebtn.style.display = "block"
                                }

                            }
                                                        let p = document.createElement('p')
                            for(let i = 0; i < badwords.length; i++){
                                p.innerHTML = badwords[i]
                                baddivw.appendChild(p)
                            }
                    }
                    }
                
            })

        } catch (error) {
            console.error('hiba', error.message);
        }
    });
});
