<input class="frase"><button class="botao">Copiar</button><span class="copia"></span>
<script>
    var inputFrase = document.querySelector('.frase');
    var botao = document.querySelector('.botao');
    var copia = document.querySelector('.copia');

    function botaoHandler() {
        copia.textContent = inputFrase.value;
        inputFrase.value = "";
    }

    botao.addEventListener('click', botaoHandler);
 </script>
