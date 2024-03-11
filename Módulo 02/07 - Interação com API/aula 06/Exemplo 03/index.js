    // FUNÇAO ASSINCRONA PARA FAZER USO DO  AWAIT
    async function busca(){
        //await PARA a exercuçao do programa aquardando
        // O RESULTADO DO COMANDO FETCH().
        let procura= await fetch("lista-produtos.json")
        let produtos= await procura.json()

        let divlista = document.getElementById("lista-card")
        for(let produto of produtos){
            divlista.innerHTML +=`
                <div class="card">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                </div>    
            `
        
        }
}  
busca()                       
