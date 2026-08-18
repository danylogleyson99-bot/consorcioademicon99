# Plano: Criação da Página de Vendas de Consórcio

O objetivo é transformar a página inicial atual em uma página de vendas para consórcios, mantendo a identidade visual profissional e responsiva, com foco em conversão.

## Ações

### 1. Atualização do Tema e Identidade Visual
* Adaptar as cores do "Dark Tech" para tons que inspirem confiança financeira (preto profundo com detalhes em dourado ou verde esmeralda, mantendo a base dark).
* Atualizar textos e metadados para o contexto de consórcio.

### 2. Reformulação da Landing Page (`src/routes/index.tsx`)
* **Hero Section**: Substituir a mensagem de leads por uma proposta de valor focada em consórcios (ex: "Realize seus sonhos com o consórcio inteligente").
* **Benefícios**: Listar vantagens (taxa zero, flexibilidade, poder de compra).
* **Call to Action (CTA)**: Botões para "Simular Consórcio" e "Falar com Especialista".
* **Simulador Simples**: Adicionar uma seção básica de simulação (entrada, parcelas, prazo).

### 3. Componentes e Estrutura
* Criar componentes específicos se necessário (Cards de Planos, Depoimentos).
* Garantir total responsividade em dispositivos móveis.

## Detalhes Técnicos
* Manter o uso de Tailwind CSS para estilização.
* Utilizar `lucide-react` para ícones relacionados a finanças/imóveis/veículos.
* Preservar a integração com o Supabase para captura de leads (interessados no consórcio).
