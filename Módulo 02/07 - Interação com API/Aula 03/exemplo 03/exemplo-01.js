async function procurar(){
    let api = await fetch ("papai.txt")
    let virus = await api.text()

    console.log(virus)
    alert(virus)
}

procurar()