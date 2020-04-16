# ReactJS - Desafio 02

Para executar este projeto em seu potencial é necessário ter o Node rodando na máquina.

#### Dependencias
Todas as dependencias podem ser opcionalmente instaladas através do [Chocolatey](https://chocolatey.org/).

##### NodeJS
* Obtenha o NodeJS pelo:
 * [Site oficial](https://nodejs.org/), ou use
 
        > choco install nodejs
 
##### Git
* Obtenha o git pelo:
 * [Site oficial](https://git-for-windows.github.io/), ou use:

        > choco install git
 
#### Baixando o Projeto

O download do projeto pode ser feito através do `git` seguindo os passos:

    -aponte para a pasta da solução
     > git clone https://github.com/hugoestevam/reactjs-desafio-02.git

#### Preparando o ambiente

##### Resumo dos comandos
    
-Você pode instalar o yarn globalmente através do seguinte comando:    

    > choco install yarn
        
-Na pasta do projeto, rode esse comando para executar a instalação dos pacotes:

    > yarn install         
        
-Execute esse comanco para subir o servidor Node.

    > yarn start

-Para executar os testes através do Jest, basta rodar o comando abaixo:

    > yarn test


##### Detalhes

* Se estiver usando Windows, inicie o prompt com permissões de administrador para que **choco install** funcione corretamente.
* Ao rodar o comando **yarn start** o Webpack Dev Server vai executar uma página Web com a função HotReload ativada.
* Se tudo estiver ok, o prompt irá listar todas as saídas abaixo.

```shell
$ react-scripts start
Compiled successfully!

You can now view reactjs-desafio-01 in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.116:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```
#### Executando
Basicamente deve estar executando a API Node. A aplicação já deve estar executando em  [http://localhost:3333](http://localhost:3333). Você pode clonar e executar essa API no repositório: [https://github.com/hugoestevam/nodejs-desafio-01](https://github.com/hugoestevam/nodejs-desafio-01)

* [Jest](https://jestjs.io/)
    * Você pode executar os testes através do comando `> yarn test`;

```shell
$ react-scripts test --watchAll=false
 PASS  src/__tests__/App.test.js
  App component
    ✓ should be able to add new repository (61ms)
    ✓ should be able to remove repository (12ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.849s, estimated 7s
Ran all test suites.
Done in 5.60s.
```

## FIM

Qualquer dúvida entre em contato comigo!
Obrigado.