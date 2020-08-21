Teste face digital

Necessita da criação do Banco de dados
	produtos
	|Nome 		|Tipo de dados  |Tamanho| Permitir nulo | padrão	   |
	|id     	|int 			| 11	| não			| Auto_increment|
	|valor  	|varchar		| 50	| não			| 0			   |
	|img    	|varchar		| 200	| não			| ''		   |
	|descrição 	|Text 			|		| não			| ''		   |
	--------------------------------------------------------------------
	carrinhos
	|NOME 		|TIPO DE DADO   |TAMANHO| PERMITIR NULO | PADRÃO	   |
	|id     	|int 			| 11	| não			| Auto_increment|
	|id_user  	|varchar		| 200	| não			| Nenhum padrão|
	|produtos   |text 			| 200	| sim			| null		   |
	|valor	 	|float 			|		| não			| 0			   |
	|nome     	|varchar		| 200	| sim			| null		   |
	|sobrenome  |varchar		| 200	| sim			| null		   |
	|email   	|varchar		| 200	| sim			| null		   |
	|cpf	 	|Text 			| 11	| sim			| null		   |
	|cep     	|int 			| 8 	| sim			| null		   |
	|logradouro |varchar		| 200	| sim			| null		   |
	|bairro   	|varchar		| 200	| sim			| null		   |
	|cidade	 	|Text 			| 200	| sim			| null		   |
	|estado     |int 			| 200	| sim			| null		   |
	|pais 	 	|varchar		| 200	| sim			| null		   |
	|status	  	|tinyint		| 1		| não			| 0			   |
