var using = require('jasmine-data-provider');
var homePage = require('../pages/homePage');
var resultPage = require('../pages/resultPage')

describe("Homepage Test Suite", function () {

	it("Dafiti Logo Visibility", function () {
		expect(homePage.dafitiLogo.isDisplayed()).toBe(true, 'Dafiti logo is not displayed');
	});

	it("Search for product", function () {
		expect(homePage.searchBox.isDisplayed()).toBe(true);
		homePage.setSearch("remera");
		homePage.clickSearch();

		expect(resultPage.searchResult.isDisplayed()).toBe(true);
		expect(resultPage.searchResult.getText()).toEqual('"remera"');

	});
	
});
