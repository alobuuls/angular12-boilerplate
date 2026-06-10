<h1 align="center">🅰️ Angular 12 Boilerplate</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Architecture-Modular-blue" alt="Modular Architecture" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular12-boilerplate" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular12-boilerplate/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular12-boilerplate?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular12-boilerplate/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular12-boilerplate" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🅰️ Angular 12 Boilerplate](#️-angular-12-boilerplate)
  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular12-boilerplate/

---

## 📖 Description

> [!NOTE]
> Angular 12 boilerplate project created to study and practice real-world Angular architecture patterns.

The project combines multiple Angular concepts such as lazy loading, guards, interceptors, reactive forms, template-driven forms, custom pipes, reusable components, RxJS operators, and API consumption using a modular and scalable architecture.

It also includes integrations with public APIs such as Unsplash, PokéAPI, and JSONPlaceholder to demonstrate practical Angular development techniques.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular12-boilerplate.git

cd angular12-boilerplate
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a modular architecture inspired by enterprise Angular applications.

### 📦 Core Module

Responsible for:

* Global application configuration
* Navigation menu
* Singleton services
* Shared infrastructure

### 📦 Shared Components

Responsible for:

* Reusable buttons
* Loaders
* Titles
* Shared UI elements

### 📦 Services Layer

Responsible for:

* API communication
* Shared state management
* Business logic abstraction
* Data sharing between components

### 📦 Guards

Responsible for:

* Route protection
* Navigation validation
* Unsaved changes handling

### 📦 Interceptors

Responsible for:

* Request customization
* Header injection
* API key management
* Cross-cutting concerns

### 📦 Feature Modules

Responsible for:

* Forms examples
* API integrations
* Routing demonstrations
* Independent functionality

---

## ✨ Features

* 🧭 Lazy-loaded modules
* 🛡️ Route guards
* 🔄 HTTP interceptors
* 📡 Unsplash API integration
* 🔴 PokéAPI integration
* 📝 JSONPlaceholder integration
* 🧪 Template-driven forms
* 🧪 Reactive forms
* 🎯 FormControl examples
* 🎯 FormGroup examples
* 🎯 FormBuilder examples
* 🔄 Shared state service
* 🧩 Reusable UI components
* 🧪 Custom pipes
* ⚡ RxJS operators
* 👀 Loading state management
* 🚀 Modular architecture

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Angular 12 | Front-End Framework |
| TypeScript | Application Logic |
| RxJS | Reactive Programming |
| Angular Router | Navigation |
| HttpClient | API Communication |
| Angular Forms | Form Management |
| HTML5 | Structure |
| CSS3 | Styling |

---

## 📁 Project Structure

```text
src/

├── app/
│
├── core/
│   └── menu/
│
├── guards/
│   ├── protected-route.guard.ts
│   └── pending-changes-form.guard.ts
│
├── interceptors/
│   ├── api-key-unsplash.interceptor.ts
│   └── headers.interceptor.ts
│
├── services/
│   ├── unsplash-api.service.ts
│   ├── poke-api.service.ts
│   ├── json-placeholder-api.service.ts
│   └── share-data.service.ts
│
├── pages/
│   ├── home/
│   ├── forms/
│   ├── photos/
│   ├── pokemons/
│   ├── posts/
│   ├── admin/
│   ├── about/
│   └── 404/
│
├── components/
│   └── shared/
│
├── pipes/
│   └── ellipsis.pipe.ts
│
├── interfaces/
│
└── app.module.ts
```

---

## 🔥 Best Practices Implemented

* Modular architecture
* Lazy loading strategy
* Route guards
* HTTP interceptors
* Strong typing with interfaces
* Separation of concerns
* Reusable components
* Shared services
* RxJS reactive patterns
* Custom pipes
* Feature-based organization
* Scalable project structure

---

## 🎯 Project Goal

Practice and strengthen Angular fundamentals and advanced concepts through a single learning-oriented boilerplate project:

* Angular Architecture
* Routing & Navigation
* Lazy Loading
* Guards
* Interceptors
* Forms API
* RxJS
* API Consumption
* Shared Components
* TypeScript Best Practices
* Scalable Front-End Development

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
