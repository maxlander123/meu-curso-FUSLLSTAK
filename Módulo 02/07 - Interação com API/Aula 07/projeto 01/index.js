 
 async function busca(){
    
    let procura= await fetch("ram.json")
    let produtos= await procura.json()
   
    let divlista = document.getElementById("lista-card")
    for(let produto of produtos){
       divlista.innerHTML += `
       <div class="card" data-id="${produto.id}">
           
           <h3>${produto.nome}</h3>
           <img style="border: 3px solid black" src="${produto.img}" width="auto" height="200">
           <p>${produto.descricao}</p>
           <div class="valores">
               <span class="valorcom">R$ ${produto.valorcomdesconto.toFixed(2).replace(".",",")}</span>
               <span class="valorsem">R$ ${produto.valorsemdesconto.toFixed(2).replace(".",",")}</span>
           </div>
   
           
       </div>
   `;
    
    }    let divsCards = document.getElementsByClassName("card")
   
   
    for(let card of divsCards){
        card.addEventListener("click",clicou)
   
    }
   }
   busca()
   
   function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
   }
   
   
   
   
   
                        
   