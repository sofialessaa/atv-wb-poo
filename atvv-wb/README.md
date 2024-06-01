# Rodando a atvv-wb

Para rodar a atvv-wb vc precisa executar os comandos que estão presentes nas pastas backend e frontend.
<hr>

## Rodando o Frontend
##### 1. `cd atviii-wb`
##### 2. `cd frontend`
##### 3. `npm install`
##### 4. `npm start`
<hr>

## Rodando o Backend
Se estiver com o termianl aberto na pasta frontend, basta escrever esse comando `cd ..` e pular pro passo 2.
##### 1. `cd atviii-wb`
##### 2. `cd backtend`
##### 3. `npm install`
##### 4. Criar o database `worldBeauty` no banco de dados mysql.
##### 5. Coloque a senha do seu mysql no arquivo .env que esta presente na pasta backend -> `DB_PASS= exemploSenha #Senha do banco de dados`
##### 5. `npx sequelize-cli db:migrate`
##### 6. `nodemon app.js` ou `node app.js`
