# API-ViaCEP
O link da API se encontra no site da ViaCEP(https://viacep.com.br/)
A api que escolhi, ViaCep, é um serviço que permite consultar Códigos de Endereçamento Postal (CEP) com base em um cep fornecido.  
Para acessar o webservice, um CEP no formato de 8 dígitos deve ser fornecido, por exemplo: "01001000".
Essa API foi escolhida por conta do projeto de cadastro ultilizado na atividade 1,
que ajuda na consulta e validação das informações de endereço podendo ser ultilizada para preencher campos obrigatório de um formulário por exemplo.

# PARAMETRO DE BUSCA
URL local para acessar a rota definida no servidor é /buscar-endereco com o CEP desejado seria algo como:
http://localhost:3000/buscar-endereco?cep=digite_aqui_um_cep_real
deve retornar a resposta em formato "JSON" Essas informações incluem detalhes como logradouro, bairro, cidade e estado.











