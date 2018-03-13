import {ClientFunction, Selector} from 'testcafe';

   const selectors = {
       dnbExpressSearchBox: Selector('#txtQuickCriteria'),
       dnbExpressSearchButton: Selector('#btnSearch'),
       companyResults: Selector('.col-companyname').withText('QANTAS').nth(0),
       purchaseType: Selector('#HBRR_14'),
       addToCartButton: Selector('#btnAddToCart'),
    };

     export const searchCompany = async browser => {
        await browser
            .typeText(selectors.dnbExpressSearchBox, 'Qantas')
            .click(selectors.dnbExpressSearchButton);

        const getLocation = ClientFunction(() => document.location.href);
        await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/results/asic_list.asp?Name=Qantas&SearchOptions=1%7CASC%7C0&SearchCount=50');
    };

     export const addCompanytoCart = async browser => {
         await browser
             .click(selectors.companyResults)
             .click(selectors.purchaseType)
             .click(selectors.addToCartButton);

         const getLocation = ClientFunction(() => document.location.href);
         await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/cart/cart.asp');
     };

    export const fillPersonalDetails = async browser => {
        await browser
            .click(selectors.companyResults)
            .click(selectors.purchaseType)
            .click(selectors.addToCartButton);

        const getLocation = ClientFunction(() => document.location.href);
        await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/cart/cart.asp');
    };

    export const clickProceedToPayment = async browser => {
        await browser
            .click(selectors.companyResults)
            .click(selectors.purchaseType)
            .click(selectors.addToCartButton);

        const getLocation = ClientFunction(() => document.location.href);
        await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/cart/cart.asp');
    };
