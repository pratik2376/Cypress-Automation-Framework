#!/bin/bash

# Run Cypress tests
npx cypress run --browser=chrome --headed --spec cypress/e2e/**/*.spec.js --reporter mocha-allure-reporter

# Generate Allure report
npx allure-commandline generate allure-results --clean -o allure-report

# Open Allure report
npx allure-commandline open allure-report
