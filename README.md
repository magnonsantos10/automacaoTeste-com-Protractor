# automacaoTeste Com Protractor

7 Passos para iniciar automação de testes com Protractor

## Pré-requisitos

* A versão do node.js deve ser >= 8
* Necessário ter o JAVA instalado para execução dos testes

## Baixando o repositório

````git clone https://github.com/magnonsantos10/automacaoTeste.git```

## Instalação das dependências Node_modules // Package-lock.json // Package.json

```
npm install -g protractor
```
## Baixar a versão mais recente do chromedriver e do geckodriver (Firefox)

```
npx webdriver-manager update
```

## Criar um arquivo de configuração (protractor.conf.js)

```
// protractor.conf.js
module.exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',
capabilities: {
'browserName': 'chrome'
},
specs: ['specs/*.spec.js'],
baseUrl: 'http://www.protractortest.org/'
};
```
## Criar pasta para receber as specs do projeto
# Estrutura de uma spec ex: `homepage.spec.js`
# Toda spec precisa ter um describe e um it

```
describe('Homepage', function() {
    it('perform a search into the api page', function() {
    browser.get('#/api')
    element(by.model('searchTerm')).sendKeys('restart')
    element(by.css('.depth-1')).click()
    expect(element(by.css('.api-title')).getText()).toContain('browser.restart')
    })
})
```

## Iniciar o servidor do selenium para executar os testes

```
webdriver-manager start
```

## executar os testes

```
protractor
```
