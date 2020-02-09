module.exports = class basePage {
    
    constructor() {
        this.dafitiLogo = element(by.className("logoDft sel-dafiti-logo"));
        
        this.searchBox = element(by.id("searchInput"));
        this.searchButton = element(by.className("icon-magnifier searchButton sel-search-button"));
        
    }

    waitForElementAndClick(element) {
        var expCondition = protractor.ExpectedConditions;
        browser.wait(expCondition.presenceOf(element), 5000);
        element.click();
    }
   
    setSearch(search) {
        return this.searchBox.sendKeys(search)
    }

    getSearch() {
            return this.searchBox.getText()
    }

    clearSearch() {
            return this.searchBox.clear()
    }

    clickSearch() {
            this.searchButton.click()
    }
}
