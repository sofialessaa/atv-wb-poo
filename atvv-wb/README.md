# Rodando a atvv-wb

Para rodar a atvv-wb vc precisa executar os comandos que estão presentes nas pastas backend e frontend.
<hr>

## Rodando o Frontend
##### 1. Abra o terminal powershell
##### 2. `cd atviii-wb`
##### 3. `cd frontend`
##### 4. `npm install`
##### 5. `npm start`
<hr>

## Rodando o Backend
##### 1. Abra um novo terminal cmd
##### 2. `cd atviii-wb`
##### 3. `cd backtend`
##### 4. `npm install`
##### 5. Criar o database `worldBeauty` no banco de dados mysql.
##### 6. Coloque a senha do seu mysql no arquivo .env que esta presente na pasta backend -> `DB_PASS= exemploSenha #Senha do banco de dados`
##### 7. `npx sequelize-cli db:migrate`
##### 8. `nodemon app.js` ou `node app.js`
