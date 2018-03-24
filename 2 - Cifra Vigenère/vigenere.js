const prompt = require('readline-sync');//modulo para pegar o input do usuário.
const readline = require('readline');//modulo para ler arquivo linha por linha.
const fs = require('fs');// modulo para ler e gravar arquivos..

//cria interface para leitura linha por linha do arquivo 'keys.txt' na pasta raiz.
const rl = readline.createInterface({
    input: fs.createReadStream('wordlist.txt')
});

var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var option = prompt.question("Digite 1 para criptografar uma mensagem ou 2 para descriptografar: ");
var chave = "";
var mensagem = "";

function formatarChave(){
    console.log(`\n\nChave: ${chave}`);
    var chaveAux = "";
    for(let i = 0; i < mensagem.length; i++){
        if(mensagem[i] === " " || mensagem[i] === ","){
            chaveAux += mensagem[i];
        }else{
            letra = chave[0];
            chave = chave.slice(1, chave.length);
            chave += letra
            chaveAux += letra;
        }
    }
    chave = chaveAux;
    console.log(`Chave criptografada: ${chaveAux} \n`);
}

function criptografarMensagem(){
    var mensagemCriptografada="";
    for(let i = 0; i < mensagem.length; i++ ) {
        if(mensagem[i] === " " || chave[i] === ",") {
            mensagemCriptografada += mensagem[i];
        }else{
            let index = (alfabeto.indexOf(mensagem[i]) + alfabeto.indexOf(chave[i])) % 26;
            mensagemCriptografada += alfabeto[index];
        }
    }
    mensagem = mensagemCriptografada;
}

function descriptografarMensagem(chave){
    console.log(`Mensagem Critografada: ${mensagem}\n`);
    var mensagemDescriptograda = "";
    for(let i = 0; i < mensagem.length; i++){
        if(mensagem[i]!== " " && mensagem[i] !== ","){
            mensagemDescriptograda += alfabeto[((alfabeto.indexOf(mensagem[i]) - alfabeto.indexOf(chave[i])) + 26) % 26];
        }else{
            mensagemDescriptograda += mensagem[i];
        }
    }
    console.log("Mensagem Descriptografada: "+ mensagemDescriptograda);
    return mensagemDescriptograda;
}

function iniciar(){
    switch(option){
        case '1':
            mensagem = prompt.question("Insira a mensagem:").toUpperCase();
            chave = prompt.question("Insira a chave:").toUpperCase();
            formatarChave();
            criptografarMensagem();
            descriptografarMensagem(chave);
            break;
        case '2':
            mensagem = "mllvo gjw axie, viog vlgbg dfptll n zoe fe gyyom j xof nr tuegr fg tfusfe ayqwxt rrpjnfy xg, mlm nbnju, tphuc kzg fltrf i ytamuyvi ig pzi qs or rrzzrgmtt spg acwfq, ux nnz xj eiqln ry akgphrfy"
            var mensagensDescriptografadas = "";
            rl.on('line', function (line) {

                if(line.length <= 8){
                    for(let i = line.length; i < 8; i++){
                        line += "x";
                    }
                    chave = line.toUpperCase();
                    formatarChave();
                    var mensagemDescriptografada = "";
                    mensagemDescriptografada = descriptografarMensagem(chave);
                    for(let i = 0; i < mensagemDescriptografada.length; i++){
                        if(mensagemDescriptografada[i] === "A"){
                            if(i+4 <= mensagemDescriptografada.length){//Verificação para não estourar o indice
                                var aux = mensagemDescriptografada[i] + mensagemDescriptografada[i+1] + mensagemDescriptografada[i+2] + mensagemDescriptografada[i+3] + mensagemDescriptografada[i+4];
                                if(aux === "AMOR " || aux === "AMOR,"){
                                    mensagensDescriptografadas += (`Chave: ${line} => Mensagem: ${mensagemDescriptografada}\n`);
                                }
                            }
                        }
                    }
                }
            }).on('close', function() {
                console.log(`\n\n----Descriptografia Completa!----`);
                fs.writeFileSync("./mensagemDescriptografadas.txt", mensagensDescriptografadas);
                process.exit(0);
            });
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}
iniciar();
