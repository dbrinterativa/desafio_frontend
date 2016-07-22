# Boilerplate Front-End Basic
A Basic Front-End Boilerplate with Gulp + LESS + Rucksack + Autoprefixer

## Instalação

1) Instale o GIT -> [Download](https://git-scm.com/downloads)

2) Instale o NodeJS -> [Download](https://nodejs.org/en/download/)

3) Acesse o terminal do GIT no diretório desejado e instale o gulp global:

```
npm install gulp -g
```
4) Em seguida instale as depências presentes no package.json:

```
npm install
```

OBS: Caso o terminal informe mensagens de erro repita a 4ª etapa.

## Comandos

- **gulp dev** : gera o diretório build
- **gulp serve** : gera o diretório build e serve na url http://localhost:3000/

## .gitignore

O arquivo .gitignore que fica na raiz do projeto impede os seguintes arquivos/diretórios de serem comitados:

- node_modules
- build

## .editorconfig

O arquivo .editorconfig configura seu editor para manter o padrão de todos os projetos,
para o mesmo funcionar corretamente deve-se instalar o plugin de mesmo nome deste arquivo,
as instruções se encontram no site [EditorConfig](http://editorconfig.org/).

## Features

- [Modernizr](https://modernizr.com/):

O Modernizr nos ajuda a fazer com que os navegadores antigos possam interpretar as novas tags do HTML5,
assim podendo estiliza-los normalmente;

- [Respond](https://github.com/scottjehl/Respond):

O RespondJS nos ajuda a fazer com que os navegadores antigos compreendam media-queries, podendo trabalhar
com responsivo em browser antigos.

- [Rucksack](https://simplaio.github.io/rucksack/):

O Rucksack é um poderoso conjunto de mixins que te ajuda na hora de desenvolver o css,
além de trazer features poderosas, mas cuidado verifique o suporte das opções que ele oferece pois,
pode não ser compativel com os browsers que você esta trabalhando.;
