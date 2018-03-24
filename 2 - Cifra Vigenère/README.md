

# Relatório da Atividade

O algorítimo foi feito em NodeJs e é capaz de realizar as seguintes funções:
- Igualar tamanho da chave para o tamanho da mensagem
- Critografar mesagem
- Descriptografar mensagem a partir da chave completa.
- Descriptografar parte da mensagem a partir de uma parte da chave.

Eu dividi o algoritmo em dois fluxos:
1. Criptografia de uma mensagem a partir de uma dada chave.
2. Descriptografia de mensagem a partir de um dicionário de palavras
 
Na descriptografia, o algorítimo percorre linha por linha um arquivo de texto contendo diversas palavras da língua portuguesa. Cada linha representa uma chave, onde, caso a chave tenha um tamanho <= 8 (dica dada pelo professor), ela passa pelo método que iguala o seu tamanho ao tamanho da mensagem (respeitando espaços e virgulas). Após isso, a chave formatada é passada para o método de descriptografia que percorre a mensagem caractere por caractere  aplicando a seguinte fórmula:

>  **(((posição do caractere da mensagem no alfabeto) - (posição do caractere da chave no alfabeto)) +26 ) % 26**

Esta fórmula retorna a posição de um letra em uma String de A-Z, onde a letra nessa posição representa a letra da mensagem descriptografada. As letras da mensagem vão uma a uma sendo descriptografadas e adicionadas em uma string até chegar ao fim da mensagem, onde a mensagem descriptografada para a determinada chave é retornada. Após isso, a mensagem descriptografada é percorrida na tentativa de encontrar a palavra "AMOR" (dica dada pelo professor em sala) e, caso encontre, o algoritmo adiciona a mensagem e a chave descriptografada a um aquivo de texto.

O trabalho foi feito com a ajuda do ***Gleydson Rodrigues*** que me ajudou com a fórmula para criptografia e descriptografia, e também com ***Leo Jaimesson*** que me deu a dica de usar um dicionário de palavras para procurar a chave correta e forneceu o arquivo .txt com essa lista.

## **Dificuldades**

Inicialmente o código foi feito em Javascript puro, porém encontrei grandes dificuldades para ler um .txt linha por linha e serializar as mensagens para um arquivo .txt. Dessa forma, foi utilizado NodeJs que possui alguns módulos que facilitam esse trabalho.

Outra dificuldade foi pensar em como seria feito para encontrar a chave correta. Inicialmente eu estava gerando um lista de combinações possíveis de 4 caracteres (tendo em vista que uma de 8 seria inviável) na esperança de encontrar a palavra "AMOR" através de uma dessas chaves. Após a dica do Leo, passei a utilizar um dicionário de palavras.

Não consegui descriptografar a mensagem toda. O algoritmo gera uma lista de mensagens que possuem a palavra "AMOR" e a partir dessa lista cada mensagem foi analisada manualmente para encontrar a chave que mais gerou palavras reconhecíveis. Após descobrir que essa chave era "ALUNO" e que o restante da chave eram 3 caracteres, foi fácil deduzir que a senha era "ALUNOUFC" já que a mesma é uma senha padrão nas máquinas da faculdade. Como eu já a quase duas semanas tentado fazer a atividade e mesma já estava atrasando, resolvi deixar o código assim, afinal, a descriptografia de senhas nem sempre é um trabalho feito 100% pelo computador. Posteriormente tentarei utilizar a lista gerada com as possíveis chaves e para cada uma delas testarei as combinações possíveis com numero restante de caracteres. Dessa forma, o algoritmo retornaria exatamente a mensagem descriptografada.
