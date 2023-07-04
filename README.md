# SistemasDistribuidos-2023.2-NataliaEMatheus - Projeto Final

# Criaçao de e-commerce com foco em microserviços

Este projeto tem como objetivo construir um sistema de e-commerce para venda de fones de ouvido. Será implementado utilizando microsserviços em Node.js e a infraestrutura será gerenciada por meio de contêineres Docker.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instruções de Uso](#instruções-de-uso)
- [Contribuição](#contribuição)# Criaçao de e-commerce com foco em microserviços

Este projeto tem como objetivo construir um sistema de e-commerce para venda de fones de ouvido. Será implementado utilizando microsserviços em Node.js e a infraestrutura será gerenciada por meio de contêineres Docker.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instruções de Uso](#instruções-de-uso)
- [Contribuição](#contribuição)

## Visão Geral

Projeto e-comemerce de head-set, com foco em microsserviços. Foi utilizado recursos NodejS e docker compose, por isso é importante qiue você tenha os requisitos necessario para rodar os  serviços.

## Requisitos
  
    Node.js (versão 14.17.0 ou superior)
    Docker (versão 20.10.7 ou superior)
    Banco de dados mongoDB(mongoose)
    
    Certifique-se de ter as versões corretas do Node.js e do Docker instaladas em seu ambiente antes de prosseguir com a configuração.
    
## Configuração do Ambiente

  Clone do repositorio: 
      
      https://github.com/nataliaalmada/SistemasDistribuidos-2023.2-NataliaEMatheus.git
 
## Instruções de Uso

  **instale as dependências na pasta do projeto**:
  
    Passo desnecessario, as depedências estaram rodando dentro dos container
    npm install express mongoose cors dotenv nodemon
    
## Por fim, execute no terminal

    sudo docker-compose up
 
## Contribuição

Fique à vontade para contribuir com este projeto abrindo um Pull Request. Aceitamos feedback, sugestões de melhorias e novas funcionalidades.



## Visão Geral

Projeto e-comemerce de head-set, com foco em microsserviços. Foi utilizado recursos NodejS e docker compose, por isso é importante qiue você tenha os requisitos necessario para rodar os  serviços.

## Requisitos
  
    Node.js (versão 14.17.0 ou superior)
    Docker (versão 20.10.7 ou superior)
    Banco de dados mongoDB(mongoose)
    
    Certifique-se de ter as versões corretas do Node.js e do Docker instaladas em seu ambiente antes de prosseguir com a configuração.
    
## Configuração do Ambiente

  Clone do repositorio: 
      
      https://github.com/nataliaalmada/SistemasDistribuidos-2023.2-NataliaEMatheus.git
 
## Instruções de Uso

  **instale as dependências na pasta do projeto**:
  
    Passo desnecessario, as depedências estaram rodando dentro dos container
    npm install express mongoose cors dotenv nodemon mysql2
    
## Por fim, execute no terminal

    sudo docker-compose up
 
## Contribuição

Fique à vontade para contribuir com este projeto abrindo um Pull Request. Aceitamos feedback, sugestões de melhorias e novas funcionalidades.


Plataforma de e-commerce distribuída:
<p float="left">

 <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/65732203/245491259-6886f294-c08d-4f2e-ad79-842e9e06b08c.png" width="700" />
  
</p>

#A plataforma de e-commerce possui uma arquitetura baseada em microserviços com função de facilitar o escalonamento e implementação. Seus principais microserviços são:
1. Database: Armazenamento e gerencianmento dos dados da plataforma.
2. Autenticação e Autorização: Controle e segurança de acesso dos usuários.
3. Pagamentos: Integra serviços de pagamento online.
4. Carrinho de Compras: Permite adicionar, remover e finalizar produtos no carrinho.
5. Processamento de Pedidos: Gerencia as etapas dos pedidos em completude.
6. Catálogo: Armazenamento de informações e descrições dos produtos.
A comunicação é realizada por uma API Gateway. A plataforma também integra serviços de pagamento e entrega. Tal arquitetura também permite a independência de cada funcionalidade. 
