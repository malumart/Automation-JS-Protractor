const basePage = require('./basePage')

class resultsPage extends basePage {
    constructor() {
        super()
        this.searchResult = element(by.xpath("//*[@id='content']/div[2]/div[1]/ul/li[2]/span"))
    }

/*
    var sizeBtn = element(by.className('selectSize mbs loaded'));
lo podrías llamar haciendo asi: resultpage.waitForElementAndClick(resultpage.sizeBtn , 8000)     //si lo querés esperar 8 segundos, ponele
y finalmente seleccionar el 1er talle disponible:
var sizeList = element(by.id("sizesListDropdownUl")).all(by.className("prd-option-item"));
sizeList[0].click();
*/

}

module.exports = new resultsPage()

