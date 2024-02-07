

async function procurar () {
    let tia = await fetch ("rato.txt")
    let curso = await tia .text()

    console.log(curso)
    alert(curso)
}

procurar()


