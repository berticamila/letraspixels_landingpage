# Atividade 4 - Desenvolvimento de Página Web com HTML e CSS
**+PraTi e Codifica - Turma 2 (2024)**

Este repositório contém o código desenvolvido para a Atividade 4 do curso Full Stack da Turma 2, realizada pela iniciativa social Mais Prati em parceria com a Edtech Codifica. Esta atividade foca no desenvolvimento de uma landing page moderna e interativa, utilizando HTML, CSS e JavaScript, além de bibliotecas externas.

## Objetivo
O projeto tem como objetivo criar uma landing page completa com elementos modernos e interativos, incluindo:
- Cabeçalho (header)
- Seções (sections)
- Rodapé (footer)
- Slider de imagens
- Seções dinâmicas com consumo de APIs
- Formulário de contato integrado com serviço de API externo(EmailJS).

Esta página aplica conceitos de design responsivo, interatividade e boas práticas de acessibilidade e semântica.

## Estrutura da Página

#### 1. Header<br>
Contém o logo da empresa e um menu de navegação com links para "Sobre", "Produtos", "Testemunhos" e "Contato".<br>
Inclui um botão de chamada para ação (CTA) de "Entre em Contato".
#### 2. Banner Principal<br>
Exibe um slider com imagens e conteúdo sobre os principais produtos da empresa.<br>
Implementado com a biblioteca Swiper.js, com botões de navegação e indicadores para cada slide.
#### 3. Seção "Sobre"<br>
Uma breve apresentação da empresa, com título e parágrafo descritivo.
#### 4. Seção "Produtos"<br>
Apresenta os principais produtos em formato de cards que consome dados de uma API externa (Google Books API) para popular esta seção.
#### 5. Seção "Testemunhos"<br>
Exibe depoimentos de clientes, com nome, foto e texto utilizando a API Random User para gerar dinamicamente o nome e a foto. O texto é estático.<br>
Usa a biblioteca AOS.js para aplicar animações de exibição ao rolar a página.
#### 6. Seção "Contato"<br>
Formulário de contato com campos para nome, email, telefone e mensagem.<br>
Validação com JavaScript e envio de dados via EmailJS para um email especificado.
#### 7. Footer<br>
Contém links para redes sociais e informações de termos de uso e política de privacidade.

## Tecnologias utilizadas
- **HTML5** para a estruturação dos elementos da página.
- **CSS3** para estilização e layout responsivo, utilizando media queries para adaptação a diferentes dispositivos.
- **JavaScript** para interatividade, validação de formulário e consumo de APIs.
- **Swiper.js** para implementação do slider.
- **AOS.js** para animações ao rolar a página.
- **EmailJS** para integração do formulário de contato para envio de emails.

## Como visualizar o projeto

