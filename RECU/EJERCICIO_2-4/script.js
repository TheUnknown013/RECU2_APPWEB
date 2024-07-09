function numPrimo() {
    let numeroInput = document.querySelector("[name='numeroInput']").value.trim();
    
    if (numeroInput === '') {
        alert("Ingrese un Número");
    } else {
        if (numeroInput <= 1) {
            alert("El número ingresado no es primo");
        } else {
            let esPrimo = true;
            for (let i = 2; i < numeroInput; i++) {
                if (numeroInput % i === 0) {
                    esPrimo = false;
                    break;
                }
            }

            if (esPrimo) {
                alert("El número ingresado es primo");
            } else {
                alert("El número ingresado no es primo");
            }
        }
    }
            document.querySelector('formNumero').reset();
}
