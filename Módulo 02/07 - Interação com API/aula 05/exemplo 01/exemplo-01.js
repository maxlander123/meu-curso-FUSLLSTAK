async function resolver(){
    let busca1 = await fetch("exemplo-01.json")
    let tarefas = await busca1.json()

    for(let x in tarefas){
        document.body.innerHTML  += `<h1> ${x} </h1>`
    }

   
    
    

}
resolver()