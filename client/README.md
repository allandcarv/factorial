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

## Overview

The application provides users with an intuitive interface to browse products, select related items, and place orders. Key components include the product catalog, category-based navigation, product grouping, and a streamlined ordering process.

## Flow Details

1. Home Page

- Default View:
  - Upon entering the homepage, users see a list of all products, regardless of category.
  - A category menu is displayed in the top-right corner, allowing users to filter products by category.

2. Product Group Navigation

- Product Click Action:
  - When a user clicks on a product, a request is sent to the server to retrieve the associated product group.
  - The user is navigated to a new page displaying all products in the selected group.

3. Product Selection

- Deactivating Related Products:
  - When a product is selected, all other products of the same type (e.g., color variants or size options) are deactivated.
- Server Requests on Selection:
  - Two simultaneous server requests are triggered:
  1.  Fetch Restricted Products: If the selected product is a source product, the system retrieves any products restricted by its selection.
  2.  Fetch Source Product: If the selected product is a restricted product, the system retrieves the corresponding source product.
  - Products related to the response of these requests are also deactivated.

4. Cart Management

- Cart Counter:
  - A counter near the cart icon in the top-right corner dynamically updates to reflect the number of selected products.

5. Order Page

- Navigating to the Order Page:
  - Once the selection process is complete, the user can click on the cart icon menu to proceed to the order page.
- Order Summary Table:
  - The order page displays a table summarizing the selected products.
  - The user can review the items and place an order.

6. Order Completion

- Order Success:
  - If the order is placed successfully, the user is redirected to a confirmation page showing the order details.

## Key Features

- Dynamic Product Interaction: Users can select products, triggering logical deactivation of related items and associated requests for restricted/source products.
- Simultaneous Server Requests: Ensures efficient data retrieval for restricted or source products.
- Real-Time Cart Updates: A counter dynamically reflects selected items for a clear user experience.
- Streamlined Navigation: Intuitive flow from product selection to order placement.

## Future Considerations

- Admin Interface: Ensure proper admin interface to manage all related matters (backoffice).
- Server Side Rendering: Optimize server status with caching on the server side.
- Mobile Responsiveness: Ensure the flow adapts seamlessly to various screen sizes.
