# testWithTestCafe-
This is a functional Test framework built using testCafe` and Javascript


Below are the Steps to Run the tests:

 Step 1
 Clone the project

 Step 2
 Open the terminal and run "npm install"

 Step 3
 Install testcafe globally - npm install -g testcafe

 Step 4
 Run the Following Command - rootDomain={envName} testcafe "chrome:userProfile" functionalTests/DnBSearch.test.js -e

    "chrome:userProfile" is the browser name and can be used with any browser
    enVName can be "www" for prod or "systest" for Non-prod

    Eg:
    To Run the tests on system test environment -
        Run the following command in the terminal after navigating through the project

    rootDomain=systest testcafe "firefox:userProfile" functionalTests/DnBSearch.test.js -e

        To Run the tests on prod environment -
            Run the following command in the terminal after navigating through the project

    rootDomain=www testcafe "firefox:userProfile" functionalTests/DnBSearch.test.js -e