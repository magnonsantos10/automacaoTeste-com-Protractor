const { browser } = require("protractor")

describe('Homepage', function() {
    it('Realizar uma pesquisa na página da API com sucesso', function() {
    browser.get('#/api')
    element(by.model('searchTerm')).sendKeys('restart')
    element(by.css('.depth-1')).click()
    expect(element(by.css('.api-title')).getText()).toContain('browser.restart')
    })

    it('Realizar uma pesquisa na página da API sem sucesso', function() {
        browser.get('#/api')
        element(by.model('searchTerm')).sendKeys('restart')
        element(by.css('.depth-1')).click()
        expect(element(by.css('.api-title')).getText()).not.toContain('browser.restart')
        })
})