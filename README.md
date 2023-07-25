# Horizon Labs - React.js Tech Task

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tech tools

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Class Variance Authority](https://cva.style/docs)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com)
- [React Query](https://tanstack.com/query/v3)

## Instructions

### Node Version

The project has been developed and tested with Node.js `v18.13.0`. It's recommended to use the same version for consistency.

## Getting Started

### Running the React Application

Copy .env.example and create a .env file:

```bash
cp -R env.development .env
```

Install the packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

##

### Running the JSON server

This project uses a mock JSON server to simulate a backend API. The server runs on `localhost:3000` by default. You'll need to start it before you start the development server for the React application.

Start the JSON server by running:

```bash
npx json-server --watch db.json
```

The server will automatically reload if you make changes to db.json.

##

### Running the tests

This project uses a mock JSON server to simulate a backend API. The server runs on `localhost:3000` by default. You'll need to start it before you start the development server for the React application.

Start the test by running:

```bash
pnpm run test
# or
npm run test
# or
yarn run test

```

This will automatically run all the test files.

##

# Project Structure

The project consists of several directories, each having a specific role in the application.

- `/src/api`: This directory contains all the axios calls responsible for interacting with your backend API. These calls are segregated into separate files based on their functionality.
- -`/src/api/__tests__`: This directory contains all the test files for the axios API calls. These tests are responsible for mocking the API interactions with our json-server, ensuring the correct operation of your application's backend integration.

---

- `/src/components`: This directory contains different categories of components:
  - `common`: Reusable UI components such as Button, Checkbox, Input, TextArea, Modal, Spinner, Toast.
  - `common/__tests__`: This directory contains all the test files for the reusable UI components. Unit tests are written to ensure the individual components are working correctly.
  - `hoc`: Higher order components that are used to wrap other components and provide them with additional functionality.
  - `layouts`: Layout components that determine the structural arrangement of a page or sections within a page.
  - `index.ts`: A barrel file to export components in a more organized way.

---

- `/src/constants`: This directory includes constant values that are used throughout the application. This includes dropdown values for active/inactive status, QueryKeys for react-query, and the API_BASE_URL.

---

- `/src/context`: This directory hosts the Context files used in your React app. The Context API is utilized to avoid prop drilling and pass data through the component tree in a more efficient way.

---

- `/src/hooks`: This directory contains reusable hooks. Many of these are used in conjunction with react-query. A future addition might include a useDebounce hook.

---

- `src/interfaces`: This directory is for TypeScript interfaces. It includes those interfaces that are used across different components, promoting reusability and consistency.

---

- `src/pages`: The main components that make up the pages of the application live here. For instance, Product.tsx is the main page and has subcomponents like ProductDetails, ProductForm, and ProductList.

---

- `src/utils`: This directory includes helper functions and validators:
  - `helpers`: Functions that perform generic tasks throughout the application. An example is the stringToBoolean function, useful for data type conversion.
  - `validators`: This contains schema validators for Zod, which is used for form validation and parsing.
