# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

src/
├── domain/ # Camada de Domínio (Core Business Logic)
│ ├── models/ # Entidades, Objetos de Valor e Agregados
│ ├── repositories/ # Interfaces de Repositórios (Abstrações)
│ ├── services/ # Serviços de Domínio (Regras de Negócio)
│ └── features/ # Arquivos Gherkin (BDD) e specs do domínio
├── application/ # Camada de Aplicação (Casos de Uso)
│ ├── useCases/ # Implementações de Casos de Uso
│ ├── dtos/ # Objetos de Transferência de Dados (DTOs)
│ └── mappers/ # Conversores (ex: Entidade → DTO)
├── infrastructure/ # Camada de Infraestrutura (Implementações Técnicas)
│ ├── http/ # Clientes HTTP, Axios, Fetch
│ ├── repositories/ # Implementações de Repositórios (ex: API, LocalStorage)
│ ├── state/ # Gerenciamento de Estado Global (Redux, Zustand)
│ └── constants/ # Constantes técnicas (ex: URLs da API, Chaves)
├── presentation/ # Camada de Apresentação (UI)
│ ├── components/ # Componentes React (Atomic Design)
│ ├── screens/ # Telas do aplicativo
│ ├── hooks/ # Hooks de UI (ex: useNavigation, useTheme)
│ ├── contexts/ # Contextos React (ex: ThemeContext)
│ └── assets/ # Imagens, fonts, arquivos estáticos
└── tests/ # Testes
├── unit/ # Testes de Domínio e Aplicação
├── integration/ # Testes de Integração
└── e2e/ # Testes End-to-End (Detox, Maestro)
