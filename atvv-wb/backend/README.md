

Cliente
npx sequelize-cli model:generate --name cliente --attributes nomeCliente:string,nomeSocial:string,genero:string,cpfCliente:string,dataEmissaoCpf:string,RGCliente:string,dataEmissaoRG:string,ufRG:string,telefoneCliente:string

Produto
npx sequelize-cli model:generate --name produtos --attributes nome:string,preco:decimal

Serviços
npx sequelize-cli model:generate --name servicos --attributes nome:string,preco:decimal


Consumo Produto
npx sequelize-cli model:generate --name consumoProduto --attributes nome:string,cpf:string,produto:string,quantidade:string,preco:decimal

Consumo Servico
npx sequelize-cli model:generate --name consumoServico --attributes nome:string,cpf:string,servico:string,preco:decimal

npx sequelize-cli db:migrate