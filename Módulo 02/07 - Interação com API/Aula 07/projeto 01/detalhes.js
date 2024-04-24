async function buscarDetalhes(){
    let busca = await fetch("ram.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")

    let indiceProd
    for(let x in produtos){
            if(produtos[x].id == parametroID){
                indiceProd = x

    }
    
}

document.getElementById("detalhes").innerHTML += `
    <img src="${produtos[indiceProd].img[0]}" id="frame" width="250" height="250" style="border: 1px solid #000">
    <div class="miniaturas" id="miniaturas"></div>
    <h3>${produtos[indiceProd].nomer}</h3>
    <p class="ptr">${produtos[indiceProd].descricao}</p>
    <div class="valores">
        <span> o valor com desconto: R$ ${produtos[indiceProd].valorComDesconto.toFixed(2).replece(".", ",")}</span>
        <span> o valor som desconto: R$ ${produtos[indiceProd].valorSemDesconto.toFixed(2).replece(".", ",")}</span>
    </div>
`
let divMiniaturas = document.getElementById("miniaturas")
for(let y of produtos[indiceProd].img){
    divMiniaturas.innerHTML +=`
        <img src="${y}" class="mini" width="80" height="80" style="border: 1px solid #000">
    `
}

let minizinhas = document.getElementsByClassName("mini")
for(let a of minizinhas){
    a.addEventListener("mouseover", deslize)
}
    
}

function deslize(){
    document.getElementById("frame").src = this.src
}
buscarDetalhes()
