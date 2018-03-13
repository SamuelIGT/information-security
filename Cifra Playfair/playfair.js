//1º: recerber cifra
//2º: remover repetições
//3º: adicionar cifra corrigida no alfabeto
//4º: receber mensagem
//5: adicionar x entre ss repetidas de um par, adicionar x no fim da mensagem caso ela tenha um tamanho impar, adicionar z caso o x ja esteja presente.
//6º: adicionar

var linha = 0;
var coluna = 0;
var grade = [[],[],[],[],[]];
var mensagemCriptografada = "";
var chave = prompt("Insira a chave.").toUpperCase();
var mensagem = prompt("Insira a Mensagem?").toUpperCase();

var alfabeto = ['A','B','C','D','E',
                'F','G','H','I','J',
                'L','M','N','O','P',
                'Q','R','S','T','U',
                'V','W','X','Y','Z'
                ];

function criarGrade(){
    coluna = 0;
    linha = 0;
    for(let i = 0; i < chave.length; i++){
        if( coluna%5 !== 0 || coluna === 0 ){
            grade[linha][coluna] = chave[i];
            coluna++;
        }else{
            linha ++;
            coluna = 0;
            i--;
        }
    }
}

function removerRepetidas(){
    let aux = '';
    for(let i = 0; i < chave.length; i++){
        if(aux.indexOf(chave[i]) === -1){
            aux += chave[i];
        }
    }
    chave = aux;
}

function preencherComAlfabeto(){
    for(let i = 0; i< alfabeto.length; i++){
        if(grade.toString().indexOf(alfabeto[i]) === -1){
            if( coluna%5 !== 0 || coluna === 0 ){
                grade[linha][coluna] = alfabeto[i];
                coluna++;
            }else{
                linha ++;
                coluna = 0;
                i--;
            }
        }
    }
    console.log(grade);
}

function formatarMensagem(){
    mensagem = mensagem.replace(/ /g,"");//Remove espaços da string.
    mensagem = mensagem.replace(/,/g,"");//Remove virgulas da string.
    let mensagemConcertada = "";
    for(let i = 0; i < mensagem.length; i++){
        if(mensagem[i] == mensagem[i+1]){//se o par de letras escolhido for composto por letras iguais
            if(mensagem[i] == "X" || mensagem[i +1] == "X"){//se uma das duas letras for um X
            mensagemConcertada += mensagem[i] + "Z";//substituir letra repetida por um Z.
            }else{
            mensagemConcertada += mensagem[i] + "X";//Senão, substituir letra repetida por um X.
            }
        }else if(i < mensagem.length -1){//Se o i não for a penultima letra da mensagem. (evita que o array estoure por causa do 'i+1' abaixo).
            mensagemConcertada += mensagem[i] + mensagem[i+1];//adiciona o par de letras.
        }else{
            mensagemConcertada += mensagem[i];//Como o i já está no fim da mensagem, adiciona somente uma letra (no caso, a ultima).
        }

        if(mensagem.length % 2 !== 0 && i === mensagem.length - 1){//Se o tamanho da mensagem for par e o i estiver no fim na mensagem
            if(mensagem[i] == "X"){//se a ultima letra for um X
                mensagemConcertada += "Z";//adiciona um Z no final
            }else{
                mensagemConcertada += "X";//senão, adiciona um X
            }
        }
        i++;//anda mais uma vez para o proximo par.
    }
    mensagem = mensagemConcertada;
}

function criptografarMensagem(){
    for(let i = 0; i < mensagem.length; i++){ //percorrer mensagem
        var a = mensagem[i];//letra 1 do par
        var b = mensagem[i + 1];//letra 2 do par

        var linhaA = Math.floor(grade.toString().replace(/,/g,"").indexOf(a)/5);//indice da linha que letra 1 se encontra na matriz
        var linhaB = Math.floor(grade.toString().replace(/,/g,"").indexOf(b)/5);//indice da linha que a letra 2 se encontra na matriz

        var colunaA = grade[linhaA].indexOf(a);//indice da coluna que a letra 1 se encontra na matriz
        var colunaB = grade[linhaB].indexOf(b);//indice da coluna que a letra 2 se encontra na matriz

        if(linhaA === linhaB){//Se as letras 1 e 2 estiverem na mesma linha
            mensagemCriptografada += grade[linhaA][(colunaA + 1)%5];//adiciona a proxima letra(à direita)
            mensagemCriptografada += grade[linhaB][(colunaB + 1)%5];//adiciona a proxima letra(à direita)
        }else if(colunaA === colunaB){//Se estiverem na mesma coluna
            mensagemCriptografada += grade[(linhaA + 1)%5][colunaA];//adiciona a letra da próxima linha (letra abaixo da atual)
            mensagemCriptografada += grade[(linhaB + 1)%5][colunaB];//adiciona a letra da próxima linha (letra abaixo da atual)
        }else{//Se não, estão em linhas e colunas diferentes
            mensagemCriptografada += grade[linhaA][(colunaB)];//adiciona letra da linha1 coluna da linha 2
            mensagemCriptografada += grade[linhaB][(colunaA)];//adiciona letra da linha2 coluna da linha 1
        }
        i++;//proximo par de letras.
        if(i >= mensagem.length){ //se o i for maior que a mensagem.
            break;//parar o for
        }
    }
    console.log("Mensagem Criptografada" + ": " + mensagemCriptografada);
}


function descriptografarMensagem(){
    var mensagemDescriptografada = "";
    var novaGrade = grade.toString().replace(/,/g,""); //retorna letras da matriz.

    for(let i = 0; i < mensagemCriptografada.length; i++){
        var linhaAaux = 4;
        var linhaBaux = 4;

        var a = mensagemCriptografada[i];//letra 1 da mensagem criptografada
        var b = mensagemCriptografada[i + 1];//letra 2 da mensagem criptografada

        var linhaA = Math.floor(novaGrade.indexOf(a)/5);//indice da linha da letra 1 na nova grade.
        var linhaB = Math.floor(novaGrade.indexOf(b)/5);//indice da linha da letra 2 na nova grade.

        if(linhaA !== 0){
            linhaAaux = linhaA - 1;
        }

        if(linhaB !== 0){
            linhaBaux = linhaB - 1;
        }

        var colunaA = grade[linhaA].indexOf(a);
        var colunaB = grade[linhaB].indexOf(b);

        var colunaAaux = 4;
        var colunaBaux = 4;

        if(colunaA !== 0){
            colunaAaux = colunaA - 1;
        }

        if(colunaB !== 0){
            colunaBaux = colunaB - 1;
        }


        if(linhaA === linhaB){
            mensagemDescriptografada += grade[linhaA][(colunaAaux)];
            mensagemDescriptografada += grade[linhaB][(colunaBaux)];
            //console.log(mensagemDescriptografada +" ll");
        }else if(colunaA === colunaB){

            mensagemDescriptografada += grade[(linhaAaux)][colunaA];
            mensagemDescriptografada += grade[(linhaBaux)][colunaB];
            //console.log(mensagemDescriptografada +" cc");
        }else{
            mensagemDescriptografada += grade[linhaA][(colunaB)];
            mensagemDescriptografada += grade[linhaB][(colunaA)];
            //console.log(mensagemDescriptografada +" else");
        }

        i++;
        if(i >= mensagemCriptografada.length){
            break;
        }
    }
    console.log("Mensagem Descriptografada" + ": " + mensagemDescriptografada);
}
removerRepetidas();
criarGrade();
preencherComAlfabeto();
formatarMensagem();
criptografarMensagem();
descriptografarMensagem();