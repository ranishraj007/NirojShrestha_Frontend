# GEMINI.md

## Project Overview

This is the frontend for **Niroj Shrestha's personal portfolio and blog platform**. It is a modern React application built with TypeScript and Vite, designed to showcase projects, articles, and personal insights.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

The project follows a standard React directory structure:

- `src/api/`: API client and services.
- `src/assets/`: Static assets like images and icons.
- `src/components/`: Reusable UI components, organized by feature (Homepage, Navbar, Footer, etc.).
- `src/lib/`: Utility functions, queries, and shared logic.
- `src/pages/`: Page-level components corresponding to routes.
- `src/router/`: Routing configuration using `react-router-dom`.
- `src/staticData/`: Local static data used throughout the application.

## Development

### Getting Started

1.  **Install dependencies**:
    ```bash
    yarn install
    ```
2.  **Start the development server**:
    ```bash
    yarn dev
    ```
3.  **Build for production**:
    ```bash
    yarn build
    ```
4.  **Preview the production build**:
    ```bash
    yarn preview
    ```

### Path Aliases

The project uses a path alias for cleaner imports. `@/` points to the `src/` directory.

Example:
```tsx
import { Navbar } from '@/components/Navbar/Navbar';
```

## Conventions

- **Linting**: ESLint is used for code quality. Run `yarn lint` to check for issues.
- **Styling**: Use Tailwind CSS utility classes. Tailwind v4 is integrated directly via the Vite plugin.
- **Components**: Prefer functional components with hooks.
- **Types**: Ensure all new components and functions are properly typed with TypeScript.
