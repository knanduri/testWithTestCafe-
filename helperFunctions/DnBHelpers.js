import {ClientFunction, Selector} from 'testcafe';
import random from 'casual';

   const selectors = {
       dnbExpressSearchBox: Selector('#txtQuickCriteria'),
       dnbExpressSearchButton: Selector('#btnSearch'),
       companyResults: Selector('.col-companyname').withText('QANTAS').nth(0),
       purchaseType: Selector('#HBRR_14'),
       addToCartButton: Selector('#btnAddToCart'),
       CheckoutButton: Selector('#btnCheckout'),
       invoiceDetailsSelectTitle: Selector('select').filter('[name="customer_title"]'),
       invoiceDetailsFirstName: Selector('input').withAttribute('name', 'customer_firstname'),
       invoiceDetailsLastName: Selector('input').withAttribute('name', 'customer_lastname'),
       invoiceDetailsEmail: Selector('#Text8'),
       invoiceDetailsPhone: Selector('input').withAttribute('name', 'phone_number'),
       invoiceDetailsAddress: Selector('input').withAttribute('name', 'customer_address'),
       invoiceDetailsSuburb: Selector('input').withAttribute('name', 'customer_suburb'),
       invoiceDetailsSelectState: Selector('select').filter('[name="customer_state"]'),
       invoiceDetailsPostCode: Selector('input').withAttribute('name', 'customer_postcode'),
       invoiceDetailsCompany: Selector('input').withAttribute('name', 'customer_company'),
       invoiceDetailsNoABNCheckbox: Selector('input').withAttribute('name', 'no_abn'),
       invoiceDetailsTerms: Selector('#AcceptedTC'),
       proceedToPaymentButton:  Selector('#Submit'),
   };

     export const searchCompany = async browser => {
        await browser
            .typeText(selectors.dnbExpressSearchBox, 'Qantas')
            .click(selectors.dnbExpressSearchButton);

        const getLocation = ClientFunction(() => document.location.href);
        await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/results/asic_list.asp?Name=Qantas&SearchOptions=1%7CASC%7C0&SearchCount=50');
    };

     export const addCompanyToCart = async browser => {
         await browser
             .click(selectors.companyResults)
             .click(selectors.purchaseType)
             .click(selectors.addToCartButton);

         const getLocation = ClientFunction(() => document.location.href);
         await browser.expect(getLocation()).eql('http://www.dnb.com.au/express/cart/cart.asp');
     };

     export const clickCheckoutButton = async browser => {
       await browser.click(selectors.CheckoutButton)
     };

    export const fillPersonalDetails = async browser => {
        const emailAddress = await random.email;
        const firstName = await random.first_name;
        const lastName = await random.last_name;
        const mobileNumber = '0469078711';
        const address = '479 St Kilda Rd';
        const suburb = 'Melbourne';
        const postCode = '3000';
        const Company = 'Qantas';

        await browser
            .click(selectors.invoiceDetailsSelectTitle)
            .click(selectors.invoiceDetailsSelectTitle.child(1))
            .typeText(selectors.invoiceDetailsFirstName, firstName)
            .typeText(selectors.invoiceDetailsLastName, lastName)
            .typeText(selectors.invoiceDetailsEmail, emailAddress)
            .typeText(selectors.invoiceDetailsPhone, mobileNumber)
            .typeText(selectors.invoiceDetailsAddress, address)
            .typeText(selectors.invoiceDetailsSuburb, suburb)
            .click(selectors.invoiceDetailsSelectState)
            .click(selectors.invoiceDetailsSelectState.child(1))
            .typeText(selectors.invoiceDetailsPostCode, postCode)
            .typeText(selectors.invoiceDetailsCompany, Company)
            .click(selectors.invoiceDetailsNoABNCheckbox)
            .click(selectors.invoiceDetailsTerms)
    };

    export const clickProceedToPayment = async browser => {
        await browser
            .click(selectors.proceedToPaymentButton);

        const getLocation = ClientFunction(() => document.location.href);
        await browser.expect(getLocation()).contains('https://payments.dnb.com.au/WebPayment/ProcessExpressPayments');
    };
