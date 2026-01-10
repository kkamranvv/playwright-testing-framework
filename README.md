# Playwright Automation Tests

Comprehensive **UI** and **API** automation testing framework built with **Playwright + TypeScript**.  
This project combines:

- 🧭 **UI testing** for [SauceDemo](https://www.saucedemo.com/) using the **Page Object Model (POM)** pattern
- 🧭 **UI testing** for [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) using a modular and maintainable Page Object Model architecture
- 🔗 **API testing** for [Reqres](https://reqres.in/) — a fake REST API for practicing and demonstrating CRUD operations
- 🔗 **API testing** for [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — extended API tests for posts, comments, users, etc

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) (TypeScript)
- Page Object Model (POM)
- [Testomat.io](https://testomat.io/) — test management & living documentation
- GitHub Actions — CI/CD pipeline
- ESLint + Husky — code quality & pre-commit checks
- Allure Report

## 🌐 API Reference

API tests in this project cover multiple public REST APIs used for testing and prototyping:

🔹 Reqres API

Tests are based on the Reqres API
 — a fake REST API for testing and prototyping.
It’s used to demonstrate full CRUD operations (GET, POST, PUT, DELETE) and basic API validation.
Tests are located in the tests/api/reqres/ folder.

🔹 JSONPlaceholder API

Extended API tests are implemented using JSONPlaceholder
 — a free fake REST API for prototyping and testing.
 
It’s used to validate operations on:

Posts

Comments

Users

Albums

Todos

## 📂 Project Structure

tests/ # Test cases

pages/ # Page Object Model classes

utils/ # Helpers and test data

fixtures/ # Custom Playwright fixtures

reports/ # Reports (Allure)

## 🚀 How to Run Tests

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with UI browser
npx playwright test --headed

# Run a specific test file
npx playwright test tests/login.spec.ts
```
