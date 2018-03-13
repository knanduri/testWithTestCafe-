import { Selector, ClientFunction } from 'testcafe';
import * as page from '../helperFunctions/DnBHelpers';

fixture `DnB Express: Verify Search Page`
    .page `http://www.dnb.com.au/express/`;


test('Search for a company', async browser => {
    await page.searchCompany(browser);
});

test('Click on Search Results and add ', async browser => {
    await page.searchCompany(browser);
    await page.addCompanytoCart(browser);
});

test.skip('Click Checkout, fill details & proceed to payment ', async browser => {
    await page.searchCompany(browser);
    await page.addCompanytoCart(browser);
    await page.fillPersonalDetails(browser);
    await page.clickProceedToPayment(browser);
});