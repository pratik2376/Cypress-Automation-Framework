# Cypress Automation Framework

## Overview

This repository contains a Cypress automation framework for end-to-end testing of web applications. Cypress is a modern testing framework that provides fast, reliable, and easy-to-write tests.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Cypress Configuration](#cypress-configuration)
- [Writing Tests](#writing-tests)
  - [Test Structure](#test-structure)
- [Running Tests](#running-tests)
  - [Running Tests Locally](#running-tests-locally)
- [Reporting](#reporting)
  - [Built-in Reports](#built-in-reports)
  - [Allure Reporting](#allure-reporting)

## Features

- End-to-end testing with Cypress
- utility functions
- Environment-based configuration
- Integration with Allure for advanced reporting
- Supports XPath locators and CSS selectors
- Flexible test structure and organization

## Getting Started

### Prerequisites

Ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for package management)

### Installation

1. Clone the repository.
2. Install cypress and other dependenciea


### Configuration

## Environment Variables

1. .env File: Create a .env file in the root of the project and add your environment variables there.
2. cypress.config.js: Define environment variables directly in the Cypress configuration file.
3. CLI: Pass environment variables directly when running Cypress.

## Cypress Configuration

Configure Cypress settings in cypress.config.js. Key settings include:

1. Base URL: Set the base URL for your tests.
2. Test Files: Specify the test file patterns.
3. Viewport: Define the default viewport size.

### writing-tests

## test-structure

Its divided into 3 layers - 

1. Locator layer - Define locators in a separate file and import them into your method layer.
2. Method layer - Define methods in a separate file and import them into your spec layer.
3. Spec layer - Actual test case implementation.


### running-tests

## running-tests-locally

1. npx cypress open - GUI mode
2. npx cypress run - To run all the test cases.
3. npm run runTestWithAllureReport - 
Created seperate file 'runTest.sh' which is having commands to run all the spec files.

### reporting

## built-in-reports 
Cypress provides built-in test reports that are displayed in the terminal or Cypress Test Runner.

## allure-reporting
Added dependency for allure reporting. At the end of test execution it will open report automatically.
