---
title: " A Fila de Mensagens RabbitMQ "
author: "0xthiagomartins"
categories: 
  - Software
  - Sistemas
date: "2025-03-18"
image: "https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/hero.jpg"
description: "O RabbitMQ é um broker de mensagens open source maduro e confiável, usado para comunicação entre aplicações. Descubra como ele facilita tarefas de longa duração, trabalhos em segundo plano e por que é a escolha preferida de grandes empresas globalmente."
---
 
RabbitMQ é o broker de mensagens open source mais implantado no mundo e é conhecido como um broker de mensagens maduro, de uso geral, que é amigável ao usuário e confiável. Ele é usado para comunicação entre aplicações e é ideal para tarefas de longa duração ou quando você precisa executar trabalhos em segundo plano com confiabilidade. 

RabbitMQ raramente aparece em destaque porque sempre atua nos bastidores. No entanto, ele desempenha um papel vital e é confiado por grandes empresas ao redor do mundo em diversos setores. O motivo por trás da popularidade do RabbitMQ é o fato de ele ser altamente escalável e facilmente adaptável para atender a diferentes necessidades. E, por último, mas não menos importante, ele é open source com uma comunidade ativa.

Nesta seção, você se familiariza com o RabbitMQ e suas grandes vantagens.

## Contexto Técnico e uma Breve História

**Open Source:** Mozilla Public License 
**Escrito em:** Erlang 
**Primeira Versão Lançada:** 2007

- RabbitMQ persiste mensagens até que sejam descartadas mediante a confirmação do recebimento.
- Monitoramento disponível por meio de uma interface de usuário integrada.
- Suporte para a maioria das linguagens.
- Suporte para múltiplos protocolos de mensagens.
- Suporta autenticação padrão e OAuth2. 
- RabbitMQ permite que os clientes se conectem através de uma variedade de protocolos abertos e padronizados, tais como AMQP, HTTP, STOMP, MQTT e WebSockets/Web-Stomp. 

![rabbitmq timeline](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/timeline.png)

O RabbitMQ foi originalmente desenvolvido pela LShift e CohesiveFT como um projeto conjunto em 2007. Em 2010, o RabbitMQ foi incorporado pela divisão SpringSource da VMware e, posteriormente, em 2013, o projeto passou a fazer parte da Pivotal Software. 

## Fácil de Usar

O RabbitMQ Management é uma interface amigável que permite monitorar e gerenciar seu servidor RabbitMQ a partir de um navegador web. Entre outras coisas, filas, conexões, canais, exchanges, usuários e permissões de usuários podem ser gerenciados — criados, excluídos e listados — diretamente pelo navegador. Você pode monitorar taxas de mensagens e enviar/receber mensagens manualmente. Esta seção fornece informações sobre as diferentes visualizações encontradas na interface de gerenciamento do RabbitMQ.

A interface de gerenciamento do RabbitMQ é um plugin que pode ser habilitado para o RabbitMQ. Ela fornece uma única página HTML estática que realiza consultas em segundo plano à API HTTP do RabbitMQ. As informações da interface de gerenciamento podem ser úteis quando você está depurando suas aplicações ou quando precisa de uma visão geral de todo o sistema. Se você notar que o número de mensagens não confirmadas começa a aumentar, isso pode indicar que seus consumidores estão ficando lentos. Se você precisar verificar se um exchange está funcionando, pode tentar enviar uma mensagem de teste através da interface. 

![rabbitmq timeline](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/management-ui.png)

## Comunidade Ampla, Ativa e de Suporte

A comunidade oferece diversas oportunidades para suporte e compartilhamento de conhecimento. Uma vez cadastrado, você pode participar da comunidade RabbitMQ através dos seguintes canais:

- **Lista de Discussão:** Discuta sobre o RabbitMQ e obtenha ajuda com questões técnicas participando da lista de discussão oficial do RabbitMQ.

- **GitHub:** O desenvolvimento do RabbitMQ ocorre no GitHub.

- **RabbitMQ Summit:** O RabbitMQ Summit reúne usuários e desenvolvedores de todo o mundo. Aprenda com palestrantes e keynotes sobre o que está acontecendo no universo do RabbitMQ e como grandes empresas utilizam o RabbitMQ para potencializar seus serviços.

- **Slack:** Existe um canal comunitário do RabbitMQ no Slack, disponível gratuitamente, onde você pode obter suporte da comunidade.

- **Stack Overflow:** Se você precisa de respostas para suas questões técnicas, muitos usuários do RabbitMQ estarão dispostos a ajudar no Stack Overflow. 

##  Bem Mantido - Nova Versão Aproximadamente a Cada 6 Meses

O RabbitMQ é um software bem mantido, com novas versões lançadas aproximadamente a cada 6 meses. Obtenha informações sobre lançamentos e mudanças através do [changelog no site do RabbitMQ](https://www.rabbitmq.com/release-information) ou pelas [notas de lançamento no GitHub](https://github.com/rabbitmq/rabbitmq-server/releases).

![rabbitmq timeline](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/release-note.png)
