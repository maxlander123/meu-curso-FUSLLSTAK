async function buscar(){
      let procura = await fetch("api/tarefas.json")
      let LISTA = await procura.json()
      console.log(procura)
    
     for (let X in LISTA){
        alert(LISTA[X])
     }

}
buscar()