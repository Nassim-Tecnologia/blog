---
title: "Como Criar uma Blockchain de 1 Bilhão de TPS"
author: "0xthiagomartins"
categories:
- Web 3.0
date: "2025-06-19"
image: "https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/1b-tps-blockchain-no-decentralization-security-shame/hero.jpeg"
description: "Guia satírico para criar uma layer-1 com 1 bilhão de TPS: supercomputador, sem rede, 100 shards e WASM-JIT. Por que descentralização e segurança são superestimadas?"
---

Você não odeia quando vê mais um lançamento de layer-1, alegando um milhão, 10 milhões ou até 100 milhões de TPS? "Como posso lucrar com o hype?" você pergunta. Bem, hoje é seu dia de sorte! Aqui está um guia passo a passo para construir sua própria rede layer-1 de 1 bilhão de TPS que deixará esses impostores no pó.

# Passo 1: Pegue um supercomputador e execute EVM nele

Uma única máquina de alta performance pode executar transações na Ethereum Virtual Machine (EVM) a ~100k TPS—um fato técnico bem documentado. Mas para atingir esse nível de throughput, você precisa contornar a Patricia Merkle Trie durante leituras e escritas no estado permanente, para remover um grande gargalo de throughput que limita o EVM padrão a pouco menos de 100 TPS. Esse mecanismo no EVM existe para garantir que a rede, desculpe, a máquina única, seja capaz de lidar corretamente com qualquer rollback de estado e reorganizações de rede... enfim, quem se importa, é lento, foi embora, não se preocupe com isso.

Estamos usando o EVM porque ser EVM-compatível, ou melhor ainda, EVM-compatible, é muito importante nos dias de hoje, já que se tornou um padrão no desenvolvimento web3. A maioria das aplicações web3 do mundo são escritas em Solidity ou outras linguagens que compilam para bytecode EVM. Dessa forma, você pode atrair mais desenvolvedores para construir em sua nova rede de 1 bilhão de TPS. Confie em mim, cara, "EVM-compatible" vende muito.

# Passo 2: Esqueça a rede

Uma única máquina também é uma rede por si só, tecnicamente falando. Por que complicar esse side hustle com mais de uma máquina?

Além disso, ter outras máquinas na rede só deixa as coisas mais lentas. Se você tem uma rede cheia de máquinas diferentes operadas por pessoas diferentes, elas agora de repente têm que concordar umas com as outras sobre o que acontece na rede. Isso envolve comunicar informações pela rede, criar mecanismos para concordar sobre o que está acontecendo, e então chegar a um consenso antes de fazer progresso. Parece muito lento. Esse mecanismo de consenso é só muito overhead desperdiçado. Quem precisa disso?

Vamos apenas ficar com uma única máquina. Veja todos esses projetos quentes chamados layer-2s; suas redes são todas apenas uma única máquina. Se você se preocupa em ser chamado de centralizado, simplesmente crie um número de outras máquinas na rede e atribua a elas nomes chiques, como "nós de disponibilidade de dados" ou similar. Todo mundo está fazendo isso.

# Passo 3: Faça 100 shards

Prepare-se, é aqui que elevamos seu jogo, com sharding.

Você pega sua rede de uma máquina e faz 100 cópias dela; vamos chamar isso de sharding, muito na moda. Tecnicamente falando, o estado de uma rede fragmentada só é temporariamente fragmentado entre máquinas e eventualmente será parcialmente ou totalmente sincronizado para garantir consistência durante transações cross-shard. Em ambientes adversários como crypto, máquinas entre shards são frequentemente embaralhadas para prevenir conluio.

Mas não vamos ficar técnicos. Essas 100 cópias não precisam sincronizar nada; elas nem precisam se comunicar umas com as outras. É uma rede de 100 shards!

Se você está contando, agora temos 100 shards * 100k TPS = 10 milhões de TPS!

# Passo 4: Abandone o EVM

Dissemos que EVM-compatible é a sensação? Isso é notícia velha. Agora é tudo sobre ser o EVM-killer.

EVM é muito lento. É uma máquina virtual interpretada baseada em pilha que foi projetada para ser totalmente agnóstica à arquitetura de hardware subjacente e sistemas operacionais, para maximizar repetibilidade e correção de execução, para que um grande grupo de máquinas díspares possa operar com segurança na mesma rede. Mas cara, é lento.

Vamos com algo sexy como WASM-JIT. É altamente performático, maduro, e a maioria das principais linguagens de programação pode ser compilada para WASM. Como compila para código de máquina nativo baseado em registradores que visa arquiteturas de hardware específicas, é inerentemente menos portável que uma VM puramente baseada em pilha como EVM. Em implementações do mundo real, WASM-JIT pode superar o EVM em até 100x na velocidade de execução.

Abandone o EVM, agora temos 10 milhões de TPS * 100 = 1 bilhão de TPS.

Você conseguiu!

Fique ligado, e vamos te ensinar como elevar ainda mais sua rede layer-1 de 1 bilhão de TPS com concorrência irrealisticamente otimista! 