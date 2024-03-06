async function resolver(){
    let busca1 = await fetch("ati.json")
    let tarefas = await busca1.json()

    let grupoDiv = document.getElementById("lista-card")

    for(let bol of tarefas){
        grupoDiv.innerHTML  += `
            <div class="card">
                <img src="${bol.img}" height="100" width="auto">
                <p> ${bol.carlos} </p>
                <p> ${bol.raimunda} </p>
                <p> ${bol.jan} </p>
            </div>
        
        `
        
    }

}
resolver()