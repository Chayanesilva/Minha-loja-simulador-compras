# 💜 Garagem do Açaí & Suplementos — Simulador de Compras

- **Projeto:** Desafio 1 — Minha Loja: Simulador de Compras
- **Aluna:** Chayane Silva Araujo
- **Trilha:** Desenvolvimento Mobile / Front-End (Programa Trilhas Inova)

---

## 🏪 Apresentação da Loja
A **Garagem do Açaí & Suplementos** é uma loja fictícia voltada para quem busca energia para os treinos e sabor no dia a dia. O sistema apresenta o catálogo de produtos na página e permite simular pedidos calculando automaticamente subtotais e descontos promocionais.

### Catálogo de Produtos e Preços
| Produto | Descrição | Preço |
| :--- | :--- | :--- |
| **Copo de Açaí 500ml** | Açaí cremoso com banana, granola crocante e leite em pó | R$ 18,00 |
| **Whey Protein Concentrado (900g)** | Suplemento proteico para recuperação e ganho muscular | R$ 110,00 |
| **Creatina Monohidratada Pura (300g)** | Mais força, explosão e desempenho físico para treinos | R$ 75,00 |
| **Barra de Proteína (Unidade)** | Lanche prático e rico em proteínas | R$ 10,00 |

> **Regra de Desconto:** Compras com valor subtotal igual ou superior a **R$ 150,00** recebem **10% de desconto** automático.

---

## 🚀 Tecnologias e Instruções de Execução

### Tecnologias Utilizadas
- **HTML5:** Estruturação semântica do cabeçalho, instruções, catálogo de produtos, botão e rodapé.
- **CSS3:** Estilização visual com paleta em tons de roxo (açaí) e laranja (energia), layout responsivo com CSS Grid e Flexbox.
- **JavaScript:** Lógica de simulação de compras com `prompt()`, conversão com `Number()`, estruturas condicionais (`if/else`) e exibição com `alert()`.

### Como Executar
1. Faça o download ou clone este repositório.
2. Certifique-se de manter os arquivos `index.html`, `style.css` e `script.js` na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador web.
4. Clique no botão **"Simular compra"** e insira as quantidades desejadas.

---

## 📸 Captura de Tela da Página
![Captura de tela da loja](screenshot.png)

---

## 🧪 Testes Realizados

1. **Teste 1 — Todos os produtos com quantidade 0:**
   - **Entradas:** Açaí = `0`, Whey = `0`, Creatina = `0`, Barra = `0`.
   - **Resultado obtido:** O sistema exibiu o alerta `"Nenhum produto foi selecionado. Que tal simular novamente?"` e encerrou a função sem gerar recibo zerado.
2. **Teste 2 — Compra sem desconto (abaixo de R$ 150,00):**
   - **Entradas:** Açaí = `2` (R$ 36,00), Whey = `0`, Creatina = `1` (R$ 75,00), Barra = `2` (R$ 20,00).
   - **Resultado obtido:** Subtotal calculado de `R$ 131,00`, desconto de `R$ 0,00` e Total a Pagar de `R$ 131,00`.
3. **Teste 3 — Compra com desconto de 10% (a partir de R$ 150,00):**
   - **Entradas:** Açaí = `1` (R$ 18,00), Whey = `1` (R$ 110,00), Creatina = `1` (R$ 75,00), Barra = `0`.
   - **Resultado obtido:** Subtotal de `R$ 203,00`, aplicação de 10% de desconto (`-R$ 20,30`) e Total a Pagar de `R$ 182,70`.

---

## 🤖 Uso de Inteligência Artificial (Transparência)

- **Como a IA ajudou:** Como meu notebook estava sem espaço de armazenamento em disco para instalar e rodar um editor de código local (como o VS Code), utilizei a IA (Google Gemini) como ambiente de apoio para estruturar o layout base e validar a execução da página diretamente pelo navegador.
- **O que eu adaptei:** Defini a identidade temática da loja (**Garagem do Açaí & Suplementos**), escolhi os 4 produtos do catálogo e seus preços reais de mercado, estabeleci a regra de negócio para o desconto de 10% em compras a partir de R$ 150,00 e revisei o código JavaScript para garantir que seguisse estritamente os comandos trabalhados em aula (`onclick`, `prompt()`, `Number()`, `if/else` e `alert()`).
- **Como verifiquei o resultado:** Realizei testes manuais em ambiente de pré-visualização no navegador simulando três cenários distintos (carrinho vazio com todas as quantidades iguais a zero, compra abaixo da meta de desconto e compra acima de R$ 150,00) e conferi os cálculos matemáticos de cada subtotal e do desconto de 10% antes de publicar os arquivos no GitHub.

---

## 💡 Dificuldade Encontrada e Aprendizado

- **Dificuldade encontrada:** A principal dificuldade técnica foi lidar com a limitação de memória do meu notebook para rodar ferramentas locais e garantir que os valores digitados no `prompt()` (que o JavaScript recebe originalmente como texto/string) não causassem erros nos cálculos nem na formatação de casas decimais.
- **O que aprendi:** Aprendi a utilizar a função `Number()` para converter textos em valores numéricos reais antes das operações aritméticas, a utilizar `.toFixed(2)` para exibir valores monetários corretamente e a combinar condicionais (`if/else`) para validar tanto o carrinho zerado quanto a faixa de desconto promocional.
