describe('Test Skyscanner Homepage', function async() {
   
    it('First Test', function () {
        // Get element by className
        var fromField = element(by.id("fsc-origin-search"));
        expect(fromField.getText()).toContain("MDQ", "El texto del botón From es incorrecto");
    });
    it('Second Test', function () {
        var logo = element(by.id("identity")).element(by.className("bpk-logo_bpk-logo__2jfMA bpk-logo_bpk-logo__inline__1A8Uo Logo_Logo__svg__1kg5V"));
        expect(logo.isDisplayed()).toBe(true, "Skyscanner logo is missing");
    });
});


