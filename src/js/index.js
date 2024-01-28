/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
    
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça


Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

// Lets do it!
// O1p1, objetivo 1 passo1

//document.getElementsByClassName('btn-plataforma');
const botao_plata = document.querySelector('.btn-plataforma');
//variavel, q nao muda o valor, q eh o botao da seleçao de plataforma

/*
querySelector:
para selecionar uma classe, .
para selecionar um id, #
*/

console.log('botao_plata'); // mostra na aba 'Console' do devtools

//O1p2, objetivo 1 passo 2
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

//O1p3 - pegar o click
botao_plata.addEventListener("click",() =>  {
    /*
    funçao toggle eh para alternar algo
    no caso, usada para mudar a classe 'ativo'
    */
    elementoPlataformas.classList.toggle('ativo')

    //  outra forma:

    /* //O1p4
    elementoPlataformas.classList.add('ativo') // nesse ponto do codigo, as opçoes aparecem qnd se clica no botao " Selecione a Plataforma" la de baixo (na parte section)

    //O2p1

    //para (des)comentar varias linhas, ctrl+;

    if(elementoPlataformas.classList.contains('ativo')){
        //O2p1
        elementoPlataformas.classList.remove('ativo')
    }else{
        //O1p4
        elementoPlataformas.classList.add('ativo')
    }
        */ 
});


