---
title: "PoS: uma Alternativa Superior ao PoW"
author: "0xthiagomartins"
categories:
  - Blockchain
  - Cryptocurrency
date: "2023-06-02"
image: "https://raw.githubusercontent.com/Nassim-Tecnologia/blog/refs/heads/main/assets/posts/pos-superior-pow/pos-v-pow.png"
description: "Uma análise abrangente comparando os mecanismos de consenso Proof of Stake (PoS) e Proof of Work (PoW), enfatizando os benefícios do PoS em áreas como eficiência econômica, segurança, descentralização e governança."
---

Proof of Stake (PoS) supera o Proof of Work (PoW) em todos os aspectos significativos. Ao avaliar esses dois mecanismos de consenso de forma objetiva—considerando fatores como impacto econômico, segurança, descentralização e critérios subjetivos amplamente reconhecidos, como justiça e igualdade—a conclusão é clara: PoS possui todos os benefícios sobre o PoW. Essa perspectiva contradiz a visão predominante, já que o público em geral ainda está se adaptando a esses avanços. O objetivo deste artigo é apoiar inequivocamente essa afirmação, promovendo um mercado mais lógico e nos avançando em direção aos objetivos finais do ecossistema de criptomoedas.

# Economia

Proof of Work implica despesas substanciais em esforços computacionais arbitrários, custos que são praticamente inexistentes no Proof of Stake. Essas despesas devem ser cobertas através de taxas de transação ou inflação para sustentar a segurança a longo prazo.

O PoW desloca o custo de validação para fora, necessitando de um investimento significativo em hardware e eletricidade para proteger a rede, tudo para resolver problemas matemáticos arbitrários que não oferecem benefício direto para a própria rede. Em contraste, o PoS utiliza o valor inerente do token para garantir a rede, proporcionando um método muito mais eficiente para alcançar uma segurança robusta da blockchain.

Economicamente, o PoS é vantajoso porque, sem esses enormes custos de computação arbitrária, sua tokenômica pode manter taxas muito mais baixas e/ou inflação em vários designs, graças a essa maior eficiência.

# Segurança

Como mencionado anteriormente, o PoS já incorre em despesas muito menores, tornando-o inerentemente mais seguro se todos os outros fatores forem iguais. No entanto, ao imaginar um cenário de ataque e calcular o custo de comprometer um sistema PoS versus um PoW, surgem diferenças marcantes:

Considere, por exemplo, uma rede PoW de $100 bilhões. Usando dados históricos do BTC de 2020 e simplificando para este exemplo, podemos presumir que aproximadamente $2 bilhões são pagos anualmente aos mineradores para garantir a rede. Consequentemente, executar um ataque de 51% em tal rede custaria pelo menos $1 bilhão por ano.

Agora, considere uma rede PoS de $100 bilhões, assumindo uma taxa de staking de 50%. Atacar a rede exigiria pelo menos $25 bilhões para adquirir metade dos tokens em staking. Portanto, neste cenário, nossa rede PoS é 25 vezes mais cara de atacar comparada a um sistema PoW equivalente.

Fatores adicionais a considerar incluem a necessidade de exceder uma participação de 50% para um ataque bem-sucedido e o impacto das compras de tokens na elevação de preços, entre outros detalhes. Entretanto, para simplicidade e brevidade, esses aspectos são omitidos deste modelo.

Se examinarmos cenários de pior caso, como uma tomada completa dos validadores (um ataque de 51%) em ambos os sistemas usando os números mencionados, e percorrermos o exemplo começando com o PoW:

Um atacante poderia sustentar um ataque por mais de um ano com base em nosso exemplo anterior. Portanto, confiar na rotação natural de mineradores no PoW é irrealista, já que manter a blockchain não operacional por um período tão prolongado é insustentável, especialmente enquanto mantém a dominância de mercado. Nesse caso, mudar o algoritmo de mineração poderia mitigar o ataque, potencialmente causando uma divisão da rede. No entanto, se o atacante antecipasse essa mudança, ele já poderia ter preparado poder de CPU/GPU suficiente para um ataque subsequente. Neste ponto, nenhuma ação adicional poderia ser tomada, já que uma mudança no algoritmo de mineração só pode ser efetivamente implementada uma vez por essa razão.

Agora, examinando o exemplo com PoS:

No caso de um ataque ao algoritmo PoS, um atacante poderia sustentar o ataque indefinidamente. Isso pode parecer uma vantagem do PoW se não fosse pelas seguintes estratégias de mitigação disponíveis no PoS. A principal estratégia é a capacidade de realizar slashing, levando a uma divisão da rede. Como as participações das partes atacantes podem ser claramente identificadas, elas podem ser cortadas quando ocorre o fork de defesa. Isso destrói completamente o capital do atacante, tornando impossíveis quaisquer ataques de acompanhamento, exceto ao incorrer novamente na despesa inicial total, o que resultaria no mesmo desfecho. Esse mecanismo defensivo é tão eficaz que atacar tais redes PoS nem é vantajoso, ao contrário de redes PoW menores como ETC e BSV, que têm sido alvo de múltiplos ataques devido ao declínio em seus orçamentos de segurança.

# Participação na Validação

Atualmente, participar da mineração PoW não é financeiramente viável para o indivíduo "médio". Exige economias de escala e um investimento inicial de pelo menos várias centenas de mil dólares, se não próximo a um milhão. Além disso, requer acesso a eletricidade barata, frequentemente obtida através de conexões e acordos especiais e de alto valor com fornecedores de eletricidade em regiões específicas. Isso torna a participação no PoW altamente exclusiva, com apenas um número relativamente pequeno de entidades distintas capazes de se envolver em atividades de mineração.

Em contraste, o PoS permite que usuários "médios" participem através de pools de staking, exigindo tão pouco quanto 0,01 ETH ($19 no momento da redação). Essa não é uma comparação enganosa com o PoW, já que pools são uma absoluta necessidade no PoW, onde não mais que 50 pools são financeiramente viáveis devido à variância, ao contrário do PoS, onde validadores únicos já excedem 38.000 na beacon chain do ETH atualmente (com base em estimativas de agregação de IP e endereço). No PoS, os retornos financeiros são padronizados para todos os participantes, ao contrário do PoW, onde aqueles com as maiores economias de escala e menores custos de eletricidade alcançam lucros desproporcionais em relação ao protocolo. Isso significa que os mecanismos de consenso PoS podem suportar um número significativamente maior de entidades distintas realizando validação comparado ao PoW.

# Descentralização

Essa distribuição aprimorada de poder e validação epitomiza a descentralização no design de blockchain. Portanto, com base na comparação anterior e assumindo recompensas de bloco iguais, o PoS é consideravelmente mais descentralizado do que o PoW devido à sua arquitetura fundamental.

Reduzir barreiras de participação e permitir um número muito maior de validadores únicos facilita essa distribuição mais ampla de poder. Como o verdadeiro poder dentro de uma blockchain reside na capacidade de criar blocos, apenas operar nós que não estão em staking ou mineração oferece influência mínima, já que esses não são mecanismos resistentes a Sybil.

Igualdade de oportunidades também é crucial para a descentralização, prevenindo centralizações adicionais de poder. No PoW, um minerador mais competitivo pode ganhar significativamente mais, permitindo que ele escale operações mais rápido que seus rivais. Esse problema é exacerbado pela centralização na fabricação de chips, já que apenas algumas fundições de chips operam globalmente a qualquer momento.

# Governança

As implicações de governança deveriam estar claras até agora. Maior descentralização traduz-se em um modelo de governança superior no PoS dentro do contexto das criptomoedas.

Não apenas há um aumento na descentralização, mas também uma melhor alinhamento de incentivos entre os stakeholders. Isso ocorre porque o PoW cria uma "classe dominante" distinta dos stakeholders, enquanto o PoS funde esses papéis em um único grupo. Isso naturalmente resulta em um alinhamento mais harmonioso de incentivos entre as partes.

Uma das discrepâncias de incentivos no PoW é que os mineradores priorizam ganhos a curto prazo, com horizontes temporais entre 2–5 anos baseados na vida útil do hardware e contratos de eletricidade. Argumento que isso historicamente levou os mineradores a favorecer decisões de curto a médio prazo sobre estratégias de longo prazo.

O PoS, por outro lado, não sofre consistentemente com esse problema. Ao comparar os horizontes temporais de investidores versus operações industriais como mineração, os investidores estão inerentemente melhor posicionados para decisões de longo prazo, potencialmente abordando esse desafio específico de governança na blockchain.

# Conclusão

O PoS oferece uma alternativa definitvamente superior ao PoW em todos os aspectos significativos. O PoS é genuinamente mais eficiente economicamente, seguro, justo, inclusivo e descentralizado do que o PoW. A transição para o PoS envolve superar numerosos interesses estabelecidos. No entanto, essa situação representa claramente um caso de uma tecnologia vastamente superior competindo diretamente com uma consideravelmente inferior. Historicamente, isso indica que é apenas uma questão de tempo antes que a narrativa dominante mude para essa realidade inevitável.