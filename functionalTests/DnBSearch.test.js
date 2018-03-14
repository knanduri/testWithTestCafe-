import * as page from '../helperFunctions/DnBHelpers';
import { getEnvironment } from '../utils/generateRandom'

fixture `DnB Express: Verify Search Page`
    .page(`${getEnvironment}/express`);


test.only('Search for a company', async browser => {
    await page.searchCompany(browser);
});

test('Click on Search Results and add a company ', async browser => {
    await page.searchCompany(browser);
    await page.addCompanyToCart(browser);
});

test('Click Checkout, fill details & proceed to payment ', async browser => {
    await page.searchCompany(browser);
    await page.addCompanyToCart(browser);
    await page.clickCheckoutButton(browser);
    await page.fillPersonalDetails(browser);
    await page.clickProceedToPayment(browser);
});