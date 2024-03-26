    // FUNÇAO ASSINCRONA PARA FAZER USO DO  AWAIT
        async function busca(){}
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
        
        }    let divsCards = document.getElementsByClassName("card")







        for(let card of divsCards){
            card.addEventListener("click",clicou)


    function clicou(){
        console.log(this)
        let elementoId = this.getAttribute("data-id")
        windowindow.location.href = "detalher.html?"produto-id=" + elementoId
    }







}  
busca()                      
