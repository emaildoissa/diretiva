# Esboço Detalhado: Tela de Visualização de Leads (CRM Diretiva)

Este documento estabelece as diretrizes de UI/UX para a tela de detalhes do lead, garantindo total consistência com o ecossistema visual da Diretiva.

## 1. Estrutura e Layout
*   **Grid:** Layout de duas colunas assimétricas.
    *   **Coluna Principal (Esquerda - 70%):** Foco em informações de perfil, abas de navegação (Overview, Timeline, Notas) e detalhes operacionais.
    *   **Barra Lateral (Direita - 30%):** Painel de engajamento, status do funil e ações rápidas.
*   **Responsividade:** Colapsa para coluna única em dispositivos móveis, priorizando o cabeçalho de perfil e o histórico.

## 2. Elementos de UI
*   **Header de Perfil:** Card de destaque com foto (ou iniciais), nome, cargo e botões de ação primária (E-mail, Telefone).
*   **Navegação por Abas:** Estilo minimalista com borda inferior ativa na cor secundária.
*   **Timeline de Interações:** Linha vertical conectando ícones de eventos (chamada, e-mail, reunião) com data e resumo.
*   **Cards de Informação:** Contêineres brancos com bordas suaves para agrupar dados como "Informações de Contato" e "Detalhes da Empresa".
*   **Inputs e Formulários:** Campos com labels flutuantes ou superiores, bordas finas e estados de hover/focus sutis.

## 3. Especificações Visuais
*   **Tipografia:** 
    *   Fonte Principal: **Inter** (ou similar sans-serif geométrica).
    *   Títulos: Semi-bold, cor dark (#0F172A).
    *   Corpo: Regular, cor cinza médio (#475569) para leitura confortável.
*   **Cores (Paleta Diretiva):**
    *   Primária: #0F172A (Azul Marinho Escuro/Slate).
    *   Destaque/Ação: #E11D48 (Vermelho Vibrante - usado em botões de conversão e estados críticos).
    *   Fundo: #F8FAFC (Cinza Ultra Claro).
*   **Espaçamento:**
    *   Padding Interno de Cards: 24px.
    *   Margem entre Seções: 32px.
*   **Bordas e Sombras:**
    *   Border-radius: 8px (Round-eight).
    *   Box-shadow: Sombra suave de 1px a 2px para profundidade, sem poluir o visual.

## 4. Funcionalidades Detalhadas
*   **Informações do Cliente:** Dados demográficos e de contato direto.
*   **Histórico de Contato (Timeline):** Registro cronológico de todos os touchpoints.
*   **Status do Funil:** Indicador visual do estágio atual (ex: Prospecção, Negociação, Fechado).
*   **Notas Internas:** Campo de texto livre para colaboração da equipe de vendas.

## 5. Propriedades CSS de Referência
```css
/* Exemplo de propriedades alinhadas à Diretiva */
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
}

.btn-primary {
  background-color: #E11D48; /* Vermelho Diretiva */
  color: #ffffff;
  padding: 10px 20px;
  font-weight: 600;
  transition: opacity 0.2s;
}

.text-title {
  color: #0F172A;
  font-family: 'Inter', sans-serif;
}
```