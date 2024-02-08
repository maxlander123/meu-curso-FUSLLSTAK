


async function buscar(){
    let resposta = await fetch("msg.txt")
    let convertido = await resposta.text()
    
    let LISTA = [5,7,9]


    for(let x in LISTA){
        document.body.innerHTML  += `
            </h1>
                ${convertido}
            </h1>
            <P>
                ${LISTA[x]}
            </p>

            3
        `
    }
    
}
buscar()