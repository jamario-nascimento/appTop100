<div align="center">
<h1>Top 100 FM</h1>
</div>

 <h3 align="left">Projeto</h3>
 <p align="left">Esse projeto front-end é nada mais nada menos do que uma WebView projetada em Ionic, sendo assim o projeto permite que você utilize o app em ambiente web e também aplicativos que podem ser baixados e utilizados normalmente em um celular.</p>

<h3 align="left">📦 Instalação do projeto em ambiente web</h3>

#### Dependências

##### :warning: Versão do ionic utilizada v6, npm version 16.15.1

#### Agora vamos lá, primeiro clone o repositório na pasta desejada:

```bash
git clone https://github.com/jamarionasciemtnto/appTop100.git
```

#### instalando ioni/cli

```bash
npm install -g @ionic/cli
```

#### É necessário instalar todas as dependências do projeto, como se trata de um projeto legado, recomendo que você use o 'npm':

```bash
npm install
```

#### Pronto, agora para rodar o projeto utilize o seguinte comando:

```bash
ionic serve
```

##### Instalando resources do cordova para o capacitor:

```bash
npm install -g cordova-res
```

##

<h3 align="left">📦 Instalação do app android do projeto </h3>

##### Documentação

https://ionicframework.com/docs/developing/android

##### :warning: Recomendo fortemente rodar o projeto em web antes de tentar rodar o app

##### :warning: Android Studio configurado

##### :warning: Gradle instalado, segue o video para a instalação: https://www.youtube.com/watch?v=h6Figshq6_I

### Adicionando cordova resources para o capacitor

```bash
 npm i -g cordova-res
```

### Gerando resources

### resources/icon.(png|jpg) must be at least 1024×1024px

### resources/splash.(png|jpg) must be at least 2732×2732px

```bash
cordova-res
```

### Gerando resources ignorando xml

```bash
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

### Capacitor build

```bash
ionic capacitor build
ionic capacitor build android
ionic capacitor build ios
```

### Capacitor copy copia os arquivos para as plataformas
```bash
ionic capacitor copy
```
### Capacitor sincronixando projeto
```bash
ionic capacitor sync
```

### Verifica integridade do projeto
```bash
ionic doctor check
```

### Correção automática de alguns erros
```bash
ionic doctor treat
```
