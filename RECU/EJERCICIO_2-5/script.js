function imprimirSuma() {
    let suma = 0;
    let sumatoria = 0;
    let texto = document.querySelector("#texto");
    let sumatoriaTotal = document.querySelector("#sumatoriaTotal");

    texto.innerHTML = ""; // Limpiar contenido previo
    sumatoriaTotal.innerHTML = "";

    while (suma < 1000) {
        suma += 2;
        sumatoria += suma;

        let mensaje = () => {
            let msg = `<p>Suma actual: ${suma}, Sumatoria: ${sumatoria}</p><br>`;        
            return msg;
        }
        texto.innerHTML += mensaje();
    }

    let mensaje2 = () => {
        let msg2 = `<p>Suma Total: ${sumatoria}</p>`;    
        return msg2;
    }
    sumatoriaTotal.innerHTML += mensaje2();
}
