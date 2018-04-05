
# Relatório da Atividade
Eu comecei a atividade em sala, com o **Gleydson Rodrigues**. Fizemos até a parte de assinar uma chave. Em casa, refiz os passos que fizemos em sala e terminei todo o resto que faltava. As tarefas foram feitas de acordo com o que foi pedido na [página do github da disciplina](https://github.com/senapk/seg_2018_1), com a ajuda do tutorial postado no [dontpad.com/segurancaufc](dontpad.com/segurancaufc) e outros tutoriais complementares que encontrei.
-	A primeira coisa feita foi a criação da chave. Através do comando `gpg --gen-key`

![GitHub Logo](/images/logo.png)
	![enter image description here](/images/1-criar_chave.png)

	e 	1-criar chave (2).png
-	Após isso, foi adicionado uma imagem na chave. Para isso foi utilizado o comando `gpg --edit-key` para editar a chave.
	2-editar chave.png
	O comando `addPhoto` adiciona uma imagem à chave.
	3-add foto.png
-	O próximo passo foi publicar a chave em um servidor remoto, no caso, o Ubuntu Keyserver.  Para isso, foi adicionado a linha `keyserver hkp://keyserver.ubuntu.com` no arquivo **.gnupg/gpg.conf**.
	4-edit gpg conf (1)
	4-edit gpg conf (2)
	Para publicar a chave no servidor foi utilizado o comando `gpg --send-keys <ID_da_chave>`.
	5-send key.png
	6-key server.png
	6-key server (2).png
-   Para importar a chave de outra pessoa do servidor remoto foi utilizado o comando `gpg --search-keys <email>`.
	7-import from server.png
	7-import from server (2).png
-   Para enviar uma mensagem assinada em texto plano, primeiramente é necessário criar um arquivos de texto com a menssagem.
	8-criar texto.png
	Após ter criado o texto, o comando `gpg --clearsign <arquivo_de_texto_da_mensagem>` foi utilizado para assinar a mensagem e gerar o arquivo para envio.
	8-assinar msg texto.png
-   Para enviar um arquivo .doc com assinatura em anexo foi utilizado o comando `gpg --armor --detach-sign arquivo.doc`.
	9-doc assinado.png
	Esse comando gera um arquivo .doc.asc que contem o documento e sua assinatura.

-   Para criptografar uma mensagem de texto e assiná-la, utilizei o comando `gpg --armor --recipient <email> --encrypt --sign <arquivo_mensagem>`.
	10-criptografar mensagem.png

-   Após importar uma chave de outro colega (**Rodrigo Almeira**), essa chave foi assinada através do comando `gpg --sign-key <chave_id>`
11-assinar chave.png
e então reenviada para o Ubuntu Keyserver.
12-reenviar chave.png
A imagem abaixo mostra a chave do Rodrigo Barbosa assinada por mim:
12-chave servidor.png
-	Por último, fiz a revogação da chave. Para revogar utilizei o comando
-   revogar a sua chave no servidor remoto utilizando o certificado