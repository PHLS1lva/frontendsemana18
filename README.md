# Projeto React com Cypress

Este é um projeto React simples configurado com Cypress para testes end-to-end (E2E).

## Funcionalidades

- Aplicação React com contador interativo
- Configuração completa do Cypress para testes E2E
- Interface responsiva com Tailwind CSS
- Componentes UI com shadcn/ui

## Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **Vite** - Build tool e servidor de desenvolvimento
- **Cypress 15** - Framework para testes E2E
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis

## Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PHLS1lva/react-cypress-project.git
cd react-cypress-project
```

2. Instale as dependências:
```bash
pnpm install
```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:
```bash
pnpm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Executando os Testes

Para executar os testes do Cypress em modo headless:
```bash
pnpm run test:e2e
```

Para abrir a interface do Cypress:
```bash
pnpm run cypress:open
```

Para executar os testes em modo headless:
```bash
pnpm run cypress:run
```

## Estrutura do Projeto

```
react-cypress-project/
├── cypress/
│   ├── e2e/
│   │   └── app.cy.js          # Testes E2E
│   ├── fixtures/              # Dados de teste
│   └── support/               # Comandos e configurações
├── src/
│   ├── components/            # Componentes React
│   ├── assets/               # Arquivos estáticos
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Ponto de entrada
├── cypress.config.js         # Configuração do Cypress
└── package.json              # Dependências e scripts
```

## Testes Incluídos

Os testes do Cypress verificam:
- ✅ Carregamento da página inicial
- ✅ Funcionamento do contador interativo
- ✅ Título correto da página

## Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza o build de produção
- `pnpm run cypress:open` - Abre interface do Cypress
- `pnpm run cypress:run` - Executa testes em modo headless
- `pnpm run test:e2e` - Executa testes E2E

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

