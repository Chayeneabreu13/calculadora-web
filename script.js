const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll("button");

let conta = "";

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const valor = botao.innerText;

        if (valor === "C") {
            conta = "";
            resultado.value = "";
        }

        else if (valor === "⌫") {
            conta = conta.slice(0, -1);
            resultado.value = conta;
        }

        else if (valor === "=") {

            try {
                let calculo = conta
                    .replaceAll("×", "*")
                    .replaceAll("÷", "/")
                    .replaceAll(",", ".");

                resultado.value = eval(calculo);
                conta = resultado.value;

            } catch {
                resultado.value = "Erro";
                conta = "";
            }
        }

        else {
            conta += valor;
            resultado.value = conta;
        }

    });

});