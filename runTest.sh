#!/bin/bash

# Run Cypress tests
npx cypress run --browser=chrome --headed --spec cypress/e2e/**/fileDownload.spec.js --reporter mocha-allure-reporter

# Generate Allure report
npx allure-commandline generate allure-results --clean --output allure-report

# Open Allure report
npx allure-commandline open allure-report
