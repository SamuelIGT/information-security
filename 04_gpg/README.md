

# Relatório da Atividade
Eu comecei a atividade em sala, com o **Gleydson Rodrigues**. Fizemos até a parte de assinar uma chave. Em casa, refiz os passos que fizemos em sala e terminei todo o resto que faltava. As tarefas foram feitas de acordo com o que foi pedido na [página do github da disciplina](https://github.com/senapk/seg_2018_1), com a ajuda do tutorial postado no [dontpad.com/segurancaufc](dontpad.com/segurancaufc) e outros tutoriais complementares que encontrei.
Não tive muitas dificuldades durante a atividade. O tutorial no dontpad me ajudou na maior parte da atividade. Quando precisei de algum comando que não estava presente no tutorial, uma rápida pesquisa no google já solucionava o problema.
Para realizar as tarefas da atividade levei em torno de 5 horas. Tive que refazer os passos mais de uma vez pois na primeira vez que fiz, eu não tinha tirado screeshots das telas. Senti mais dificuldades para fazer o relatório, o que me fez demorar mais tempo para concluir a atividade.

## Os passos

	A primeira coisa feita foi a criação da chave. Através do comando `gpg --gen-key`
![comando para gerar chave](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/1-criar_chave.png)
![comando para gerar chave (continuação)](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/1-cria_%20chave%20(2).png)

-	Após isso, foi adicionado uma imagem na chave. Para isso foi utilizado o comando `gpg --edit-key` para editar a chave.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/2-editar_chave.png)
	
	O comando `addPhoto` adiciona uma imagem à chave.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/3-add_foto.png)

-	O próximo passo foi publicar a chave em um servidor remoto, no caso, o Ubuntu Keyserver.  Para isso, foi adicionado a linha `keyserver hkp://keyserver.ubuntu.com` no arquivo **.gnupg/gpg.conf**.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/4-edit_gpg_conf%20(1).png)
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/4-edit%20gpg%20conf%20(2).png)

	Para publicar a chave no servidor foi utilizado o comando `gpg --send-keys <ID_da_chave>`.	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/5-send_key.png)
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/6-key_server.png)
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/6-key%20server%20(2).png)

-   Para importar a chave de outra pessoa do servidor remoto foi utilizado o comando `gpg --search-keys <email>`.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/7-import%20from_server.png)
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/7-import_from%20server_(2).png)

-   Para enviar uma mensagem assinada em texto plano, primeiramente é necessário criar um arquivos de texto com a menssagem.
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/8-criar_texto.png)
	
	Após ter criado o texto, o comando `gpg --clearsign <arquivo_de_texto_da_mensagem>` foi utilizado para assinar a mensagem e gerar o arquivo para envio.
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/8-assinar_msg_texto.png)

-   Para enviar um arquivo .doc com assinatura em anexo foi utilizado o comando `gpg --armor --detach-sign arquivo.doc`.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/9-doc_assinado.png)
	Esse comando gera um arquivo .doc.asc que contem o documento e sua assinatura.

-   Para criptografar uma mensagem de texto e assiná-la, utilizei o comando `gpg --armor --recipient <email> --encrypt --sign <arquivo_mensagem>`.
	![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/10-criptografar_mensagem.png)

-   Após importar uma chave de outro colega (**Rodrigo Almeira**), essa chave foi assinada através do comando `gpg --sign-key <chave_id>`
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/11-assinar_chave.png)
e então reenviada para o Ubuntu Keyserver.
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/12-reenviar_chave.png)
A imagem abaixo mostra a chave do Rodrigo assinada por mim:
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/12-chave_servidor.png)

-	Por último, fiz a revogação da chave. Primeiramente foi gerado um certificado de revogação para a minha chave. Isso foi feito através do comando `gpg --output revoke.asc --gen-revoke <email>`
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/13-revogar.png)
Após isso foi necessário importar a chave revogada que foi gerada a partir do comando anterior. Isso foi feito através do comando `gpg --import revoke.asc`.
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/13-revogar(2).png)
E finalmente, a chave revogada é enviada para o servidor remoto Ubuntu Keyserver.
`gpg --keyserver keyserver.ubuntu.com --send-keys BB0F0BBE`
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/13-revogar(3).png)
![screenshot da execução do comando no terminal](https://github.com/SamuelIGT/information-security/raw/master/04_gpg/images/13-revogar(4).png)
