//Passo 1 - pegar no js o elemento HTML correspondente ao botao alterar tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - pegar no js o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemAlterarTema = document.querySelector(".imagem-botao")

//passo 3 - Identificar o click do usuario no botao trocar de tema
botaoAlterarTema.addEventListener("click", () => {

    //passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    //Com a tag toggle nao é necessário criar uma tag pra remover ou adicionar variável porque a tag em sim já faz essa alteracao entre o if/else então pode ser removi o passo 4 e 7
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do boddy
        body.classList.remove("modo-escuro")

        //passo 8 - trocar a imagem do botao de alterar tema para o sol
        imagemAlterarTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        //passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //passo 5 - trocar a imagem do botao alterar tema para a lua
        imagemAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});



