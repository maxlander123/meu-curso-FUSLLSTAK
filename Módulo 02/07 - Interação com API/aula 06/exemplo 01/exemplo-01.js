async function concessionaria(){
    let resultado = await fetch("carros.json")
    let carros = await resultado.json()

   // alert("a marca é " +carros.marca+  " o modelo é " +carros.modelo+ " o ano é " +carros.ano + " e a cor é " +carros.cor )
    //alert(carros.marca)
     // A marca é x,modelo é x,o ano é x, e a cor é x

    /// alert(carros[1].modelo)

    document.body.innerHTML += `
        <p>"a marca do carro é " ${carros[0].} </P>
    `



}

concessionaria() 