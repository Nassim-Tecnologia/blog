---
title: " A Fila de Mensagens RabbitMQ "
author: "0xthiagomartins"
categories: 
  - Software
  - Sistemas
date: "2025-03-18"
image: "https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/hero.png"
description: "O RabbitMQ é um broker de mensagens open source maduro e confiável, usado para comunicação entre aplicações. Descubra como ele facilita tarefas de longa duração, trabalhos em segundo plano e por que é a escolha preferida de grandes empresas globalmente."
---

# Visão Geral

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


# Interface de geranciamento

## Visão Geral

Vamos acessar a primeira visualização, o **Overview**, que oferece um resumo rápido e fácil de entender do estado do RabbitMQ.

![first view](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/first-view.png)

O overview exibe dois gráficos: um de **Queued Messages** e outro com a **Message rates**. 
Você pode alterar o intervalo de tempo exibido no gráfico clicando no texto (gráfico: último minuto) acima dos gráficos. 
Informações sobre todos os diferentes status das mensagens podem ser encontradas clicando no ponto de interrogação (?).

**Queued messages** mostram um gráfico com o número total de mensagens enfileiradas em todas as suas filas. 
**Ready** indica o número de mensagens disponíveis para entrega. 
**Unacked** representa o número de mensagens pelas quais o servidor está aguardando um reconhecimento.

O gráfico de **Message rates** mostra a velocidade com que as mensagens estão sendo processadas. 
**Publish** indica a taxa na qual as mensagens estão entrando no servidor, e **Confirm** mostra a taxa na qual o servidor está confirmando as mensagens.

**Global Count** mostra o número total de conexões, canais, exchanges, filas e consumidores para TODOS os hosts virtuais aos quais o usuário atual tem acesso.

### Nodes

Um cluster no RabbitMQ pode incluir um ou vários nodes (servidores). A visualização **Nodes** exibe informações sobre os diferentes nós do cluster RabbitMQ. 
É aqui que você encontra dados sobre a memória do servidor, o número de processos Erlang por nó e outras informações específicas de cada nó. 
Info exibe informações adicionais sobre o nó e os plugins habilitados.

### Churn Rate

As taxas de abertura/fechamento de conexões e canais são métricas importantes do sistema que devem ser monitoradas.
Um alto volume de abertura e fechamento de conexões e canais pode levar ao esgotamento dos recursos do node.

![churn-rate](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/churn-rate.png)

### Portas e contextos

As portas de escuta para diferentes protocolos podem ser encontradas na seção **Ports and contexts**, conforme mostrado na imagem acima.

### Exportar e Importa Definições

É possível importar e exportar definições de configuração.
Ao baixar o arquivo de definições, você obtém uma representação JSON do seu broker, ou seja, das configurações do RabbitMQ. 
Isso pode ser usado para restaurar exchanges, filas, hosts virtuais, políticas e usuários. Essa funcionalidade pode ser utilizada como um backup. 
Sempre que você fizer uma alteração na configuração, poderá manter as configurações antigas, por precaução.

![export and import section](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/export-import.png)

## Conexões e Canais

### Connections

Conexões e canais do RabbitMQ podem estar em diferentes estados:

- **Starting**;
- **Tuning**;
- **Opening**;
- **Running**;
- **Flow**;
- **Blocking**;
- **Blocked**;
- **Closing**;
- **Closed**.

O estado **"flow"** indica que a taxa de publicação foi limitada para evitar que o RabbitMQ fique sem memória. 
Isso ocorre automaticamente quando o RabbitMQ detecta uma conexão que está publicando mensagens mais rapidamente do que a fila consegue processar. 
Uma conexão com controle de fluxo será bloqueada e desbloqueada várias vezes por segundo para manter uma taxa que o servidor consiga suportar.

A aba de Conexões exibe as conexões estabelecidas com o servidor RabbitMQ. 
**vhost** mostra em qual host virtual a conexão está operando. **Username** exibe o usuário associado à conexão. 
**Channels** informa o número de canais usando a conexão. **SSL/TLS** indica se a conexão está protegida com SSL.

Ao clicar em uma das conexões, você obtém uma visão geral daquela conexão específica. 
É possível visualizar os canais dentro da conexão, as taxas de dados, ver propriedades do cliente e encerrar a conexão.

![Connection Tab](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/connection-tab.png)

### Channels

A aba **Channels** exibe informações sobre todos os canais ativos no momento. 
**vhost** mostra em qual host virtual o canal está operando e o **username** indica o usuário associado ao canal. **Mode** exibe o modo de garantia do canal.

![Channel Tab](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/channel-tab.png)

Ao clicar em um dos canais, você obtém uma visão detalhada daquele canal específico. 
A partir dessa visualização, é possível ver a taxa de mensagens e o número de consumidores lógicos que estão recebendo mensagens por meio do canal.

## Exchanges

Todas as exchanges podem ser listadas na aba **Exchanges**. 
**Virtual host** mostra o vhost ao qual a exchange pertence, e **type** indica o tipo de exchange, como *direct*, *topic*, *headers* ou *fanout*. 
**Features** exibem os parâmetros da exchange (por exemplo, **D** significa durable e **AD** significa auto-delete). 
As *features* e o *type* podem ser definidos no momento da criação da exchange. 
Nessa lista, há algumas exchanges **amq.*** e a exchange padrão (sem nome), que são criadas automaticamente por padrão.

![Exchange Tab](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/exchange-tab.png)

Ao clicar no nome da exchange, uma página detalhada sobre a exchange será exibida. 
Nela, você pode ver e adicionar bindings à exchange, publicar uma mensagem para a exchange ou excluir a exchange.

![Exchange Details](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/exchange-details.png)

## Filas e Associações

### Queues

A aba **Queues** exibe as filas de todos os vhosts ou de um vhost selecionado.

As filas têm diferentes parâmetros e argumentos dependendo de como foram criadas. A coluna Features exibe os parâmetros pertencentes à fila. Isso pode incluir características como:

- **Durable queue** (fila durável), que garante que o RabbitMQ nunca perderá a fila.
- **Message TTL** (Tempo de Vida da Mensagem), que define quanto tempo uma mensagem publicada em uma fila pode viver antes de ser descartada.
- **Auto expire**, que determina quanto tempo uma fila pode ficar sem uso antes de ser automaticamente excluída.
- **Max length** (comprimento máximo), que define quantas mensagens (prontas) uma fila pode conter antes de começar a descartá-las.
- **Max length bytes**, que define o tamanho total do corpo das mensagens prontas que a fila pode conter antes de começar a descartá-las.

![Queue Tab](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/queue-tab.png)

Você também pode criar uma fila a partir desta visualização.

Se você clicar em qualquer fila escolhida na lista de filas, todas as informações sobre essa fila serão exibidas.

![Queue Details](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/queue-details.png)

Os dois primeiros gráficos incluem as mesmas informações da visão geral, mas mostram apenas o número de mensagens em fila e as taxas de mensagens para aquela fila específica.

**Consumers** exibe os consumidores/canais que estão conectados à fila.

### Bindings

Um *binding* (associação) pode ser criado entre uma exchange e uma queue. Todas as associações ativos para a fila são exibidos sob a seção **Bindings**. 
Você também pode criar um novo binding para uma fila a partir desta visualização ou desfazer o binding de uma fila com uma exchange.

![Binding Details](https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/rabbitmq/binding-details.png)

