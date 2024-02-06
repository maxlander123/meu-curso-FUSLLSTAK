     async function procura (){
    let mensagem = await fetch ("rato.txt")
    let fortaleza = await mensagem.text()

    console.log(fortaleza)
    alert(fortaleza)
}
procurar()

