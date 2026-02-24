# GEMINI.md

## Project Overview

This is a frontend project built with React and TypeScript, using Vite as the build tool. It is set up with Tailwind CSS for styling. The project was initialized from a minimal Vite template for React with TypeScript.

## Building and Running

The following scripts are available in `package.json`:

*   **`yarn dev`**: Starts the development server with Hot Module Replacement (HMR).
*   **`yarn build`**: Compiles the TypeScript code and builds the project for production.
*   **`yarn lint`**: Lints the codebase using ESLint.
*   **`yarn preview`**: Serves the production build locally for previewing.

To get started, first install the dependencies:

```bash
yarn install
```

Then, you can run the development server:

```bash
yarn dev
```

## Development Conventions

*   **Linting**: The project uses ESLint for code quality and consistency. The configuration can be found in `eslint.config.js`.
*   **TypeScript**: The project uses TypeScript. Type checking is part of the build process.
*   **Styling**: The project uses Tailwind CSS for styling. The configuration can be found in `vite.config.ts`.
