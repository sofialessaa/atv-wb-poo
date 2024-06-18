# Inicie o backend

Primeiro abra o terminal no Visual Studio Code e escreva:
##### 1. `cd atvv-wb`
##### 2. `cd backend`
##### 3. `npm install`
##### 4. Criar o database `worldBeauty` no banco de dados mysql, digite `create database worldBeauty;`
##### 5. Coloque a senha do seu mysql no arquivo .env que esta presente na pasta backend -> `DB_PASS= exemploSenha #Senha do banco de dados`
##### 5. `npx sequelize-cli db:migrate`
##### 6. `nodemon app.js` ou `node app.js`