async function concessionariaa(){
    let resultado = await fetch("moto.json")
    let moto = await resultado.json()

    let grupodiv = document.getElementById("lista-card")

    for(let produto of produtos){
        grupodiv.innerHTML +=`
        <div class = "card">
        <h3>${produto.nome}</h3>
        <p>${produto.marca}</p>

        </div>
        `
        

    }

}