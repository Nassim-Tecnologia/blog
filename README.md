# Blog

Repositorio dedicado para armazenar os blog posts do site e gerar o RSS feed automaticamente. Este repositório organiza os posts por idioma, autor e categoria, proporcionando feeds RSS personalizados para cada combinação. Além disso, facilita a gestão de autores através do arquivo `authors.toml`.

## Índice

1. [Consumindo Feeds RSS](#consumindo-feeds-rss)
2. [Configurando Autores (`authors.toml`)](#configurando-autores-authorstoml)
3. [Adicionando Posts](#adicionando-posts)
4. [Gerando Feeds RSS](#gerando-feeds-rss)
5. [Estrutura dos Feeds](#estrutura-dos-feeds)
6. [Problemas Comuns e Soluções](#problemas-comuns-e-soluções)
7. [Melhorias Futuras](#melhorias-futuras)

---

## 1. Consumindo Feeds RSS

Os feeds RSS gerados são organizados dentro da pasta `feeds`, estruturados por idioma, tipo de filtro e filtros específicos (autores ou categorias). Essa organização facilita o acesso e a assinatura de diversos feeds RSS.

### **Estrutura das URLs dos Feeds**

- **Feeds por Autor:**

  ```
  https://seudominio.com/feeds/{idioma}/author/{authorId}/latest-feed.xml
  ```

  - **Exemplo:**
    - **ID do Autor:** `0xthiagomartins`
    - **Idioma:** `en`
    - **URL do Feed RSS:** `https://seudominio.com/feeds/en/author/0xthiagomartins/latest-feed.xml`

- **Feeds por Categoria:**

  ```
  https://seudominio.com/feeds/{idioma}/category/{nomeDaCategoria}/latest-feed.xml
  ```

  - **Exemplo:**
    - **Categoria:** `Software`
    - **Idioma:** `en`
    - **URL do Feed RSS:** `https://seudominio.com/feeds/en/category/Software/latest-feed.xml`

- **Feeds Combinados 'Any' (Todos os Autores e Categorias):**

  ```
  https://seudominio.com/feeds/{idioma}/any/latest-feed.xml
  ```

  - **Exemplo:**
    - **Idioma:** `en`
    - **URL do Feed RSS:** `https://seudominio.com/feeds/en/any/latest-feed.xml`

### **Assinando Feeds RSS**

Para assinar os feeds RSS:

1. **Usando um Leitor de RSS:**
   - **Leitores Populares:**
     - [Feedly](https://feedly.com/)
     - [Inoreader](https://www.inoreader.com/)
     - [The Old Reader](https://theoldreader.com/)
     - [NewsBlur](https://newsblur.com/)
   - **Como Assinar:**
     - Abra seu leitor de RSS preferido.
     - Selecione a opção para adicionar um novo feed.
     - Insira a URL do feed RSS desejado (conforme as estruturas acima).
     - Confirme e comece a receber atualizações.

2. **Extensões de Navegador:**
   - **Exemplos:**
     - [RSS Feed Reader (by Feeder.co)](https://chrome.google.com/webstore/detail/rss-feed-reader-by-feede/ldnnhddmkiiihnedobmlmillhodjkdmb)
     - [Feedbro](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/)
   - **Como Assinar:**
     - Instale a extensão desejada.
     - Utilize a interface da extensão para adicionar novas URLs de feeds RSS.

3. **Favoritos de Navegador:**
   - Marque manualmente as URLs dos feeds RSS para acesso rápido.

---

## 2. Configurando Autores (`authors.toml`)

O arquivo `authors.toml` define os autores que podem contribuir para o blog. Cada autor é identificado de forma única e associado a metadados que enriquecem seu perfil nos feeds RSS.

### **Estrutura do `authors.toml`**

```toml
[0xthiagomartins]
name = "Thiago Martins"
description = """
Thiago Martins é um Desenvolvedor de Software apaixonado com ampla experiência na construção de soluções de software de alta qualidade. 
Ele se especializa em desenvolvimento web, computação em nuvem e arquitetura de microsserviços. 
Thiago é dedicado ao aprendizado contínuo e está sempre atualizado com as últimas tendências e tecnologias da indústria.
"""
avatar = "http://github.com/0xthiagomartins.png"
contacts = { 
    email = "thiago.fmartins@outlook.com", 
    instagram = "0xthiagomartins", 
    x = "0xthiagomartins", 
    github = "0xthiagomartins", 
    telegram = "thiagofmartins", 
    linkedin = "0xthiagomartins", 
    whatsapp = "+55 (11) 91964-6223" 
}
donations = { 
    ethereum = "0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE", 
    taraxa = "0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE" 
}

[samuelpoiani]
name = "Samuel Poiani"
description = "Desenvolvedor de Software"
avatar = "http://github.com/SamuelPoiani.png"
contacts = { 
    email = "samuel.poiani@example.com", 
    instagram = "samuelpoiani", 
    x = "samuelpoiani", 
    github = "samuelpoiani", 
    telegram = "samuelpoiani", 
    linkedin = "samuelpoiani", 
    whatsapp = "+55 (11) 91964-6223" 
}
donations = { 
    ethereum = "0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE", 
    taraxa = "0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE" 
}
```

### **Descrição dos Campos**

- **ID do Autor:** Identificador único para cada autor (e.g., `0xthiagomartins`, `samuelpoiani`).
- **name:** Nome completo do autor.
- **description:** Uma biografia detalhada ou descrição. Suporta strings multilinha usando aspas triplas.
- **avatar:** URL apontando para a imagem de avatar do autor.
- **contacts:** Tabela contendo vários métodos de contato. Campos comuns incluem:
  - `email`
  - `instagram`
  - `x`
  - `github`
  - `telegram`
  - `linkedin`
  - `whatsapp`
- **donations:** Tabela contendo endereços de carteiras para doações. Campos comuns incluem:
  - `ethereum`
  - `taraxa`

### **Adicionando um Novo Autor**

1. **Escolha um ID de Autor Único:**
   - Geralmente um nome de usuário ou handle (e.g., `johndoe`, `devJane`).

2. **Adicione uma Nova Seção no `authors.toml`:**
   
   ```toml
   [johndoe]
   name = "John Doe"
   description = """
   John Doe é um Engenheiro de Software experiente com paixão por desenvolver aplicações web escaláveis.
   """
   avatar = "http://github.com/johndoe.png"
   contacts = { 
       email = "john.doe@example.com", 
       instagram = "johndoe_insta", 
       x = "johndoe_x", 
       github = "johndoe_github", 
       telegram = "johndoe_telegram", 
       linkedin = "johndoe_linkedin", 
       whatsapp = "+55 (11) 91234-5678" 
   }
   donations = { 
       ethereum = "0xYourEthereumWalletAddress", 
       taraxa = "0xYourTaraxaWalletAddress" 
   }
   ```

3. **Salve o Arquivo:**
   - Certifique-se de que o arquivo está salvo e devidamente formatado.

### **Notas**

- **Consistência:** Garanta que cada ID de autor usado nos posts corresponda a uma entrada no `authors.toml`.
- **Completude:** Embora alguns campos de contato sejam opcionais, fornecer informações de contato abrangentes enriquece o perfil do autor.

---

## 3. Adicionando Posts

Os posts são escritos em Markdown e organizados por idioma dentro da pasta `posts`. Cada idioma possui seu subdiretório específico (e.g., `en` para inglês, `pt` para português).

### **Estrutura de Diretórios**

```
posts/
  ├── en/
  │   ├── dag-based-dlt.md
  │   ├── microsservices-architecture.md
  │   └── ...
  └── pt/
      ├── ms.md
      ├── arquitetura-microsservicos.md
      └── ...
```

### **Criando um Novo Post**

1. **Navegue para o Diretório de Idioma Apropriado:**
   - Para um post em inglês: `posts/en/`
   - Para um post em português: `posts/pt/`

2. **Crie um Novo Arquivo Markdown:**
   - Nomeie o arquivo de forma descritiva, usando kebab-case (e.g., `new-post-title.md`).

3. **Adicione o Front Matter ao Arquivo Markdown:**
   - Inclua o front matter YAML no início para definir os metadados.
   
   ```markdown
   ---
   title: "Título do Post"
   categories: 
     - Categoria1
     - Categoria2
   date: "YYYY-MM-DD"
   author: "authorId" # Deve corresponder a um ID em authors.toml
   heroImageSrc: "URL_da_imagem"
   pageTitle: "Título da Página para SEO"
   description: "Uma breve descrição do post para fins de SEO."
   ---
   
   # Introdução
   
   O conteúdo do seu post começa aqui.
   
   <!-- more -->
   
   Seções adicionais e conteúdo.
   ```

### **Campos do Front Matter**

- **title:** O título do post do blog.
- **categories:** Uma lista de categorias às quais o post pertence. São usadas para gerar feeds RSS específicos por categoria.
- **date:** Data de publicação no formato `YYYY-MM-DD`.
- **author:** O ID do autor conforme definido no `authors.toml`.
- **heroImageSrc:** URL para a imagem hero exibida com o post.
- **pageTitle:** Título usado na tag HTML `<title>` para melhor SEO.
- **description:** Um breve resumo do post para benefícios de SEO.

### **Exemplo de Post**

```markdown
---
title: "Arquitetura de Microsserviços: Desenvolvimento de Software Escalável e Flexível"
categories: 
  - Software
  - Sistemas
date: "2024-10-14"
author: "0xthiagomartins"
heroImageSrc: "https://github.com/Nassim-Tecnologia/blog/assets/posts/ms/ms.png"
pageTitle: "Arquitetura de Microsserviços para 2024"
description: "A arquitetura de microsserviços permite o desenvolvimento ágil e escalável, dividindo aplicações em serviços independentes."
---

# Introdução

[O conteúdo do post vai aqui...]

<!-- more -->

[Conteúdo adicional continua...]
```

### **Notas**

- **Referência do Autor:** O campo `author` deve corresponder exatamente a um ID de autor presente no `authors.toml`.
- **Categorias:** Escolha categorias relevantes que alinhem com o conteúdo do post. As categorias devem ser consistentes entre os posts para uma geração eficaz de feeds RSS.
- **Formato da Data:** Assegure-se de que o campo `date` segue o formato `YYYY-MM-DD` para manter a consistência.
- **Campos de SEO:** Preencher adequadamente `pageTitle` e `description` aprimora a otimização para motores de busca e proporciona melhor visibilidade.

---

## 4. Gerando Feeds RSS

Os feeds RSS são gerados automaticamente com base no conteúdo da pasta `posts` e nas configurações dos autores no `authors.toml`. O processo de geração envolve a análise dos posts, organização por idioma, autor e categoria, e a criação dos arquivos de feeds RSS correspondentes.

### **Pré-requisitos**

- **Node.js:** Certifique-se de ter o Node.js instalado (versão 18.20.2 conforme seu ambiente).
- **npm:** O Node Package Manager deve estar instalado juntamente com o Node.js.

### **Passos para Gerar Feeds RSS**

1. **Instalar Dependências:**
   
   Navegue até o diretório raiz do projeto e execute:
   
   ```bash
   npm install
   ```

   Este comando instala todos os pacotes necessários conforme definido no `package.json`, incluindo:
   - `feed`: Para geração de feeds RSS.
   - `gray-matter`: Para análise do front matter YAML em posts Markdown.
   - `toml`: Para análise do `authors.toml`.

2. **Executar o Script de Geração de Feeds RSS:**
   
   Execute o script utilizando Node.js:
   
   ```bash
   node scripts/generate-rss.js
   ```
   
   - **Funcionalidade do Script:**
     - **Processamento de Idiomas:** Itera através de cada idioma suportado (`en`, `pt`).
     - **Análise de Posts:** Lê e analisa cada arquivo Markdown para extrair metadados e conteúdo.
     - **Criação de Feeds:** 
       - **Feeds por Autor:** Cria feeds RSS para cada autor, contendo seus respectivos posts.
       - **Feeds por Categoria:** Cria feeds RSS para cada categoria, contendo posts relevantes.
       - **Feeds 'Any':** Cria um feed RSS combinado contendo todos os posts independentemente do autor ou categoria.
     - **Organização de Arquivos:** Exporta os arquivos de feeds RSS na pasta `feeds` estruturada com nomes de arquivos versionados utilizando timestamps Unix.
     - **Log de Operações:** Registra mensagens de sucesso ao gerar feeds ou mensagens de erro caso ocorram problemas.

3. **Verificar Feeds Gerados:**
   
   Após executar o script, verifique se os feeds RSS foram corretamente gerados na pasta `feeds`. A estrutura de diretórios deve refletir a organização por idioma, tipo de filtro e filtros específicos.
   
   ```
   feeds/
     ├── en/
     │   ├── author/
     │   │   └── 0xthiagomartins/
     │   │       ├── 1729269930338-feed.xml
     │   │       └── latest-feed.xml
     │   ├── category/
     │   │   └── Software/
     │   │       ├── 1729269930338-feed.xml
     │   │       └── latest-feed.xml
     │   └── any/
     │       ├── 1729269930338-feed.xml
     │       └── latest-feed.xml
     └── pt/
         ├── author/
         │   └── 0xthiagomartins/
         │       ├── 1729271737139-feed.xml
         │       └── latest-feed.xml
         ├── category/
         │   └── Sistemas/
         │       ├── 1729271737139-feed.xml
         │       └── latest-feed.xml
         └── any/
             ├── 1729271737139-feed.xml
             └── latest-feed.xml
   ```
   
4. **Validar a Integridade dos Feeds:**
   
   Utilize ferramentas de validação de RSS para garantir que os feeds gerados estão corretamente formatados e livres de erros:
   
   - [W3C Feed Validation Service](https://validator.w3.org/feed/)
   - [FeedValidator](https://feedvalidator.org/)
   
   Insira a URL do seu feed RSS (e.g., `https://seudominio.com/feeds/en/author/0xthiagomartins/latest-feed.xml`) para validar sua estrutura e conteúdo.

### **Automatizando a Geração de Feeds**

Para integração contínua e deployment, considere automatizar o processo de geração de feeds RSS. Integrar o script no pipeline de CI/CD garante que os feeds RSS estejam sempre atualizados com os últimos posts sem intervenção manual.

---

## 5. Estrutura dos Feeds

Os feeds RSS são organizados meticulosamente para facilitar o consumo por leitores de RSS e manter a clareza na distribuição dos feeds.

### **Estrutura Hierárquica dos Diretórios**

```
feeds/
  ├── {idioma}/
  │   ├── author/
  │   │   └── {authorId}/
  │   │       ├── {unix_timestamp}-feed.xml
  │   │       └── latest-feed.xml
  │   ├── category/
  │   │   └── {nomeDaCategoria}/
  │   │       ├── {unix_timestamp}-feed.xml
  │   │       └── latest-feed.xml
  │   └── any/
  │       ├── {unix_timestamp}-feed.xml
  │       └── latest-feed.xml
  └── ...
```

#### **Componentes:**

- **{idioma}:** Código do idioma (`en`, `pt`, etc.).
- **author/:** Contém feeds filtrados por autores.
  - **{authorId}/:** Identificador único para cada autor.
    - **{unix_timestamp}-feed.xml:** Feed RSS versionado com base no horário de geração.
    - **latest-feed.xml:** Contém sempre os posts mais recentes do autor.
- **category/:** Contém feeds filtrados por categorias.
  - **{nomeDaCategoria}/:** Nome da categoria.
    - **{unix_timestamp}-feed.xml:** Feed RSS versionado para a categoria.
    - **latest-feed.xml:** Contém sempre os posts mais recentes na categoria.
- **any/:** Feed combinado contendo todos os posts independentemente do autor ou categoria.
  - **{unix_timestamp}-feed.xml:** Feed RSS combinado versionado.
  - **latest-feed.xml:** Contém sempre os posts mais recentes de todos os autores e categorias.

### **Nomenclatura dos Arquivos de Feed**

- **Feeds Versionados:**
  
  ```
  {unix_timestamp}-feed.xml
  ```
  
  - **Exemplo:** `1729269930338-feed.xml`
  - **Propósito:** Mantém versões históricas do feed RSS com base no timestamp Unix.

- **Feeds Mais Recentes:**
  
  ```
  latest-feed.xml
  ```
  
  - **Propósito:** Fornece a versão mais recente do feed RSS, facilmente acessível para assinantes.

### **Visão Geral do Conteúdo dos Feeds**

Cada arquivo de feed RSS contém:

- **Metadados:**
  - `title`
  - `description`
  - `id`
  - `link`
  - `language`
  - `image`
  - `favicon`
  - `copyright`
  - `updated`
  - `generator`
  - `feedLinks`
  - `author`

- **Itens:**
  - `title`
  - `id`
  - `link`
  - `description`
  - `content`
  - `author`
  - `date`
  - `customFields` (e.g., `unixTimestamp`)

---

## 6. Problemas Comuns e Soluções

### **1. TypeError: Cannot set properties of undefined (setting 'rss')**

- **Causa:**
  - Tentativa de definir `feed.feedLinks.rss` após a criação da instância `Feed` sem garantir que `feedLinks` está devidamente inicializado dentro do construtor.

- **Solução:**
  - Assegure-se de que o `rssLink` seja passado como parâmetro para a função `createFeed` e definido dentro do construtor da instância `Feed`.
  - **Não Faça:** Tente definir `feed.feedLinks.rss` fora da função `createFeed`.

- **Implementação:**
  
  ```javascript
  const rssLink = `${site_url}/feeds/${language}/author/${authorId}/latest-feed.xml`;
  const feed = createFeed(language, 'author', author, site_url, rssLink);
  // Não é necessário definir feed.feedLinks.rss aqui
  ```

### **2. Diretório de Idioma Ausente**

- **Causa:**
  - O script espera um diretório sublinguagem específico (e.g., `en`, `pt`) dentro da pasta `posts`, que não existe.

- **Solução:**
  - Garanta que o diretório do idioma exista dentro de `posts/` e contenha arquivos Markdown.
  - **Exemplo:**
    ```
    posts/
      ├── en/
      │   ├── post1.md
      │   └── ...
      └── pt/
          ├── post2.md
          └── ...
    ```

### **3. Autor Não Encontrado**

- **Causa:**
  - O campo `author` em um post referencia um ID que não existe em `authors.toml`.

- **Solução:**
  - Verifique se o ID do `author` no front matter do post corresponde a uma entrada existente em `authors.toml`.
  - **Exemplo:**
    ```markdown
    author: "0xthiagomartins" # Este ID deve existir em authors.toml
    ```

### **4. Categoria Não Reconhecida**

- **Causa:**
  - Um post referencia uma categoria que não é consistentemente usada ou reconhecida em outros posts.

- **Solução:**
  - Mantenha nomes de categorias consistentes em todos os posts para garantir a geração apropriada de feeds RSS.
  - Evite o uso de caracteres especiais que possam interferir na nomenclatura das pastas.

### **5. Formato de Data Inválido**

- **Causa:**
  - O campo `date` no front matter de um post não segue o formato `YYYY-MM-DD`.

- **Solução:**
  - Assegure-se de que todas as datas dos posts aderem ao formato `YYYY-MM-DD`.
  - **Exemplo:**
    ```markdown
    date: "2024-10-14"
    ```

### **6. Erros de Validação do Feed**

- **Causa:**
  - Feeds RSS gerados contêm erros estruturais ou relacionados a dados que impedem o correto parsing por leitores de RSS.

- **Solução:**
  - Utilize ferramentas de validação de RSS para identificar e corrigir problemas.
  - **Ferramentas:**
    - [W3C Feed Validation Service](https://validator.w3.org/feed/)
    - [FeedValidator](https://feedvalidator.org/)
  
  - **Passos:**
    1. Acesse a ferramenta de validação.
    2. Insira a URL do feed RSS que deseja validar.
    3. Revise e solucione quaisquer erros reportados.

---

## 7. Melhorias Futuras

Para aprimorar ainda mais a geração de feeds RSS e a experiência geral do blog, considere implementar as seguintes melhorias:

### **1. Operações de Arquivo Assíncronas**

- **Benefício:** Melhora o desempenho, especialmente com um grande número de posts, prevenindo o bloqueio do event loop.
- **Implementação:** Refatore o script para usar métodos assíncronos (`fs.promises`) em vez de síncronos.
  
  ```javascript
  const fs = require('fs').promises;
  
  // Exemplo:
  const fileContents = await fs.readFile(filePath, 'utf8');
  ```

### **2. Geração Automática de Feeds por Categoria**

- **Visão Geral:** Implemente a geração dinâmica de feeds com base nas categorias inferidas a partir dos arquivos Markdown, em vez de categorias pré-definidas.
- **Implementação:** Estenda o script para analisar todas as categorias dos posts e gerar feeds conforme necessário.
  
  ```javascript
  // Coletar categorias únicas dos posts
  const categoriesSet = new Set();
  
  await Promise.all(filenames.map(async (filename) => {
      const filePath = path.join(langDir, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      if (data.categories && Array.isArray(data.categories)) {
          data.categories.forEach(category => categoriesSet.add(category));
      }
  }));
  
  const categories = Array.from(categoriesSet);
  ```

### **3. Integração com CI/CD**

- **Benefício:** Automatiza a geração de feeds RSS e garante que os feeds estejam sempre atualizados com os últimos posts sem intervenção manual.
- **Implementação:** Integre o script de geração de feeds no pipeline de Integração Contínua/Distribuição Contínua (e.g., GitHub Actions, GitLab CI/CD).
  
  ```yaml
  # Exemplo de Workflow do GitHub Actions: .github/workflows/generate-rss.yml
  name: Gerar Feeds RSS
  
  on:
    push:
      paths:
        - 'posts/**'
        - 'authors.toml'
        - 'scripts/generate-rss.js'
  
  jobs:
    build:
      runs-on: ubuntu-latest
  
      steps:
      - uses: actions/checkout@v3
  
      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
  
      - name: Instalar Dependências
        run: npm install
  
      - name: Executar Script de Geração de Feeds RSS
        run: node scripts/generate-rss.js
  
      - name: Commit e Push dos Feeds RSS
        run: |
          git config --global user.name "GitHub Actions"
          git config --global user.email "actions@github.com"
          git add feeds/
          git commit -m "Atualizar feeds RSS"
          git push
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```

### **4. Melhorias no Logging e Monitoramento**

- **Benefício:** Fornece insights mais profundos sobre possíveis problemas durante a geração dos feeds RSS.
- **Implementação:** Integre bibliotecas ou serviços de logging (e.g., Winston, Loggly) para capturar e monitorar erros e logs.
  
  ```javascript
  const winston = require('winston');
  
  const logger = winston.createLogger({
      level: 'error',
      transports: [
          new winston.transports.File({ filename: 'error.log' })
      ],
  });
  
  // Uso dentro de try-catch
  try {
      // Operações de arquivo...
  } catch (error) {
      logger.error(`Falha ao escrever o feed RSS: ${error.message}`);
  }
  ```

### **5. Melhorias de Segurança**

- **Sanitização de Dados:** Assegure-se de que todos os dados provenientes dos posts e autores sejam sanitizados para prevenir ataques de injeção XML ou feeds malformados.
- **Controle de Acesso:** Restrinja o acesso à pasta `feeds` para prevenir modificações não autorizadas ou exclusões de arquivos de feeds.

### **6. Documentação e Diretrizes para Desenvolvedores**

- **Benefício:** Facilita a integração de novos colaboradores e mantém a consistência.
- **Implementação:** Expanda o README com diretrizes detalhadas, exemplos e melhores práticas para futuros desenvolvimentos.

### **7. Monitoramento de Integridade dos Feeds**

- **Benefício:** Garante que os feeds RSS estejam sempre funcionando corretamente e consulta alertas em caso de falhas.
- **Implementação:** Utilize ferramentas para monitorar a integridade dos feeds, garantindo que estejam acessíveis e válidos.

---

## Conclusão

Esta configuração garante que os feeds RSS do seu blog sejam gerados de forma sistemática, organizada e facilmente consumível por leitores de RSS. Ao seguir as orientações descritas neste README, você pode gerenciar eficientemente autores, publicar novos posts e manter feeds RSS atualizados que aumentam a acessibilidade e o alcance do seu blog.

Para qualquer assistência adicional ou dúvidas, sinta-se à vontade para abrir uma issue ou entrar em contato com os mantenedores.

---