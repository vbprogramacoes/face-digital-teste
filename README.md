Teste face digital <br/><br/>

Necessita da criação do Banco de dados<br/>
	produtos<br/>
	|Nome 		|Tipo de dados  |Tamanho| Permitir nulo | padrão	   |<br/>
	|id     	|int 			| 11	| não			| Auto_increment|<br/>
	|valor  	|varchar		| 50	| não			| 0			   |<br/>
	|img    	|varchar		| 200	| não			| ''		   |<br/>
	|descrição 	|Text 			|		| não			| ''		   |<br/>
	--------------------------------------------------------------------<br/>
	carrinhos<br/>
	|NOME 		|TIPO DE DADO   |TAMANHO| PERMITIR NULO | PADRÃO	   |<br/>
	|id     	|int 			| 11	| não			| Auto_increment|<br/>
	|id_user  	|varchar		| 200	| não			| Nenhum padrão|<br/>
	|produtos   |text 			| 200	| sim			| null		   |<br/>
	|valor	 	|float 			|		| não			| 0			   |<br/>
	|nome     	|varchar		| 200	| sim			| null		   |<br/>
	|sobrenome  |varchar		| 200	| sim			| null		   |<br/>
	|email   	|varchar		| 200	| sim			| null		   |<br/>
	|cpf	 	|Text 			| 11	| sim			| null		   |<br/>
	|cep     	|int 			| 8 	| sim			| null		   |<br/>
	|logradouro |varchar		| 200	| sim			| null		   |<br/>
	|bairro   	|varchar		| 200	| sim			| null		   |<br/>
	|cidade	 	|Text 			| 200	| sim			| null		   |<br/>
	|estado     |int 			| 200	| sim			| null		   |<br/>
	|pais 	 	|varchar		| 200	| sim			| null		   |<br/>
	|status	  	|tinyint		| 1		| não			| 0			   |<br/>
