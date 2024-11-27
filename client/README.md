# Frontend Project with Vite, React, React Query, and Zustand

This is a frontend project built with **Vite** and **React**. The project uses **React Query** for server state management, **Zustand** for client state management, **React Suspense** for data loading, and **React Error Boundary** for error handling. Additionally, **React Router** is utilized to manage the application routes.

---

## Features

- **Fast Development with Vite**: A blazing-fast development environment and build tool.
- **Server State Management**: Handled by **React Query** for efficient data fetching, caching, and synchronization.
- **Client State Management**: Managed with **Zustand** for a lightweight, intuitive, and flexible approach.
- **Suspense and Error Boundaries**: Seamlessly manage loading states and gracefully handle errors.
- **React Router**: For declarative routing and navigation.
- **Well-Organized Folder Structure**: Promotes maintainability and scalability.

---

## Folder Structure

```
src/
├── components/ # Contains reusable components used across the project
├── pages/ # Includes all the pages for the application
├── router/ # Handles the application routing setup
├── shared/ # Core shared resources and utilities
│   ├── constants/ # Holds constant values used throughout the app
│   ├── hooks/ # Custom React hooks
│   ├── services/ # API service files for server communication
│   ├── store/ # Client state management with Zustand (slices and hooks)
│   ├── types/ # TypeScript interfaces and type definitions
│   ├── UI/ # Reusable UI components (e.g., table, buttons, modals)
│   └── utils/ # Utility functions and helpers
├── App.tsx # Application root
└── main.tsx # Application entry point
```
