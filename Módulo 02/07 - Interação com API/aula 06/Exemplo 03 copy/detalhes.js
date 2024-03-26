async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()
    console.log(produtos)
   // document.body.
   //criou um objeto URLSarchparams e passou
   //coleta dos parametros da URL nele.
   let paramentros = new URLSearchParams(window.location.search)
   // obteve do pararetro "produto-id ", o seu valor 
   let paramentroId = paramentros.get("produto-id")

   let indicePROd
   for(let x in produtos){
        if(produtos[x].id == paramentroId){
            indicePROd = x
        }
   }

   document.body.innerHTML =`
        <h3>${produtos[indicePROd].nome}</h3>
        <img src="${produtos[indicePROd].img}" width="250" height="250">
           `

   
   //alert(paramentroId)

}

buscarDetalhes()