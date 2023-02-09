# Deliveryman 

## Sobre o projeto🔖
Um sistema backend de entregas, onde o cliente pré cadastrado e logado faz seu pedido dentro da plataforma, onde o deliveryman pega o pedido e entrega ao cliente.

## Funcionalidade implementadas
### Cliente👩🏾‍🦱
✅ Cadastro de usuário <br>
✅ Criptografia de senha <br>
✅ Envio de email ao criar usuario <br>
✅ Autenticação por token <br>
✅ Login <br>
✅ Criar pedido <br>
✅ Busca de todos os pedidos feitos pelo cliente solicitante<br>
✅ Busca de informações não sensiveis sobre os cliente por id <br>
✅ Pedidos feitos pelo solicitante busca pelo pedido por data <br>
✅ Pedidos feitos pelo solicitante busca pelo pedido por status <br>
✅ Deletar pedido feito apenas com status AGUARDANDO<br>
✅ Update dos dados cadastrais<br>

### Deliveryman🛵
✅ Cadastro de usuário <br>
✅ Criptografia de senha <br>
✅ Envio de email ao criar usuario <br>
✅ Autenticação por token <br>
✅ Login <br>
✅ Busca de todos os pedidos disponiveis <br>
✅ Busca de pedidos por data <br>
✅ Busca de pedidos por status<br>
✅ Busca de informações não sensiveis sobre os deliverymans por id <br>
✅ Alteração de status do pedido <br>
✅ Envio de email para o usuario da alteração do status do pedido<br>
✅ Deletar o proprio usuario deliveryman <br>
✅ Update dos dados cadastrais<br>


## Version Engines

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)  1.22.11

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  16.14.0

## Tecnologias utilizadas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
## Banco de Dados utilizado
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=red)

## Como executar
### Comandos: 
- yarn install
- docker-compose up -d 
- yarn dev

## Porta utilizada
http://localhost:2023/{router}

## URL Deploy
https://git.heroku.com/delivery-fees.git

## Documentação
http://localhost:2022/delivery-docs <br> <br>
<img width="905" alt="Captura de Tela 2022-02-28 às 02 15 09" src="https://user-images.githubusercontent.com/60610706/155927970-1b81ed54-0406-4eda-9a89-35e637436428.png">

## Melhorias futuras
☑️ TODO terminar a implementação do Swagger<br>
☑️ TODO criar dashboard store<br>

## Melhorias feitas
✅ Validações de estoque na criação do pedido (Produto indisponivel/ Produto inexistente/ Quantidade indisponivel) <br>
✅ Validação no cancelamento do pedido (somente se ainda estiver em aguardo) <br>
✅ Retornando mais detalhes dos produtos nas buscas pelos pedidos <br>
✅ Atualização das versões das dependencias <br>
✅ Tratamento de respostas de erro e criação de erros personalizados <br>
✅ Criado testes unitários <br>
✅ Inserir avatar de usuario<br>
✅ Implementar GraphQL <br>
✅ Personalizar retornos de filtros de acordo com tipo de usuario <br>


# Autora
Beatriz Ferreira dos Santos  
