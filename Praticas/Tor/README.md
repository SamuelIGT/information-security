# Protocolo TOR
## Relatório da Prática

Para realizar a prática, segui as questões propostas no [tutorial](https://github.com/Roger-F-Lima/Seguranca-Da-Informacao/tree/master/Tor).

 1. Instalar o Tor.
	 A forma mais fácil de utilizar o Tor é através do Tor Browser, pois o mesmo já possui todo o ambiente configurado. O download foi feito a partir do [site oficial do Tor](https://www.torproject.org/download/download-easy.html.en).
	 ![Pagina de download do Tor](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(7).png)
	 Após extrair a pasta e abrir o arquivo start-tor-browser.desktop uma conexão com a rede foi estabelecida e um executável para o navegador foi criado.
	![Pasta e Janela de instalação](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(1).png)
	![(3)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(3).png)
2. Configurar uma lista negra de países.
	Para configurar a lista negra, foi necessário editar o arquivo torrc e adicionar a linha `ExcludeExitNodes {país excluído}`.
	![(4)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(4).png)
	
3. Testar o anonimato do Tor.
	A imagem abaixo mostra o endereço ip e o circuito que o Tor levou para chegar no site.
	![(6)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(6).png)
4. Acessar algum site da deep web.
	A imagem abaixo mostra o TORCH, um site de buscas da ***DeepWeb***
	![(5)](https://github.com/SamuelIGT/information-security/blob/master/Praticas/Tor/screenshots/(5).png)
