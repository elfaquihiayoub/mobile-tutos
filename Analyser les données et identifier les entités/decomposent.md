## Table one (observing)

| numero_command | date_commande | nom_client  | email_client                              | nom_produit | prix_produit | quantite_commandee |
| -------------- | ------------- | ----------- | ----------------------------------------- | ----------- | ------------ | ------------------ |
| C001           | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Clavier     | 200          | 2                  |
| C001           | 10/09/2026    | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) | Sourie      | 100          | 1                  |
| C002           | 11/09/2026    | Sara Amrani | [sara@mail.com](mailto:sara@mail.com)     | Clavier     | 200          | 3                  |


here we can find that alot of infos are repeted like nom_client , nom_produit _ numro_command...

## identifient fonctionel

here we can use :
	 Id_client -> nom_client + email_client;
	 id_produit -> nom_produit+prix_produit;
	 id_command ->numero_command +date_command+id_produit+id_client;
	 id_produit+id_command-> quantity_command;
	 


## final result :
after fixing the problems we arived with these 3 tables 
	-  CLIENT(id_client , nom_client , email_client );
	- PRODUIT(id_produit , nom_produit , prix_produit );
	- COMMAND(id_command , numero_comand  ,date_command, id_client , id_produit )
	- Quantity_command(id_quantity_command,id_produit,id_client)


## command table

| id_command | numero_comand | date_command, | quantite_commandee | id_client | id_produit |
| ---------- | ------------- | ------------- | ------------------ | --------- | ---------- |
| 1          | C001          | 10/09/2026    | 3                  | 1         | 1          |
| 2          | C002          | 10/09/2026    | 1                  | 1         | 2          |




## client table 


| id_client | nom_client  | email_client                              |
| --------- | ----------- | ----------------------------------------- |
| 1         | Madani Ali  | [madani@mail.com](mailto:madani@mail.com) |
| 2         | Sara Amrani | [sara@mail.com](mailto:sara@mail.com)     |


## product table 


| id_product | nom_product | prix_produit |
| ---------- | ----------- | ------------ |
| 1          | clavier     | 200          |
| 2          | souris      | 100          |
|            |             |              |
