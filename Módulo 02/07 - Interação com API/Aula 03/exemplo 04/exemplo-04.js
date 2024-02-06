async function procurar () {
    let casa = await fetch ("xixi.txt")
    let fortaleza = await casa .text()

    console.log(fortaleza)
    alert(fortaleza)
}

procurar()