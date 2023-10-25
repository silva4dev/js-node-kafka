# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Fluxo da aplicação

- API principal (Station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (sincrona/assincrona)
  
Se conseguir sincrona/assincrona:

- Receber uma resposta assincrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- Rest (latência)
- Redis / RabbitMQ / **Kafka**;