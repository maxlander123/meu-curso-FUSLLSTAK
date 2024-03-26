    // FUNÇAO ASSINCRONA PARA FAZER USO DO  AWAIT
        async function busca(){
        //await PARA a exercuçao do programa aquardando
        // O RESULTADO DO COMANDO FETCH().
        let procura= await fetch("lista-produtos.json")
        let produtos= await procura.json()

        let divlista = document.getElementById("lista-card")
        for(let produto of produtos){
            divlista.innerHTML +=`
                <div class="card"> data-id="${produto.id}">
                    <h3>${produto.nome}</h3>
                    <img src="${produto.img}" width="200" height="200">
                     <p>${produto.descricao}</p>
                    <div class="valores">
                        <span class="valorcom">R$ ${produto.valorcomdesconto.toFixed(2).replace(".",",")}</span>
                        <span class="valorsem">R$ ${produto.valorsemdesconto.toFixed(2).replace(".",",")}</span>
                    <div>
                </div>    
            `
        
        }
        //busca por todos elementos html que contem"card"
        // como valor do paramentro "class".
        let divsCards = document.getElementsByClassName("card")
        // Add em cada Div card um evento que escuta quando
        // o usuario clica nele ,e chama uma funçao.
        for(let card of divsCards){
            card.addEventListener("click",clicou)


        }

}
    function clicou(){
        console.log(this)
        let elementoId = this.getAttribute("data-id")
        window.location.href = "detalhes.html?produto-id=" + elementoId
        // window.location.href = "detalhes.html?"produtos-id="+ e"
    } 
busca()                       
