# Server

This is a Node.js server using Express.js to provide a REST API with basic Create-Read-Update-Delete (CRUD) functionality. The server is designed using the Model-View-Controller (MVC) pattern but does not include any viewers (no HTML or front-end views). Instead, it handles data using a simulated non-relational database stored in JSON files. These files are reset every time the server restarts.

## Features

- CRUD Operations:
  - Create: Add new data entries.
  - Read: Retrieve data entries.
  - Update: Modify existing data entries.
  - Delete: Remove data entries.
- REST API: Provides a structured way to interact with the data.

- Non-Relational Database Simulation:

  - Data is stored in JSON files.
  - Files are reset to initial values every server restart.

- MVC Architecture:
  - Model: Handles data structure and JSON operations.
  - Controller: Contains the logic for processing API requests and interacting with the model.
  - No View Layer: This server does not include an HTML front-end or other client-facing viewers.

## Endpoints

### products

#### GET

- `/products` => returns all products

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "productType": {
      "id": "string",
      "title": "string"
    },
    "description": "string",
    "stock": "boolean",
    "price": "number",
    "imageUrl": "string"
  }
]
```

- `/products/:id` => returns specific product

```json
//response
{
  "id": "string",
  "title": "string",
  "productType": {
    "id": "string",
    "title": "string"
  },
  "description": "string",
  "stock": "boolean",
  "price": "number",
  "imageUrl": "string"
}
```

#### POST

- `/products` => adds a new product

```json
{
  "title": "string",
  "productType": "string",
  "description": "string",
  "stock": "boolean",
  "price": "number",
  "imageUrl": "string"
}
```

#### PATCH

- `/products/:id` => updates a product

```json
//body - all optional
{
  "title": "string",
  "productType": "string",
  "description": "string",
  "stock": "boolean",
  "price": "number",
  "imageUrl": "string"
}
```

#### DELETE

- `/products/:id` => removes a product
  - Returns status 204 without body

### product-groups

#### GET

- `/product-groups` => returns all the product groups

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "description": "string"
  }
]
```

- `/product-groups/:id` => returns a product group

```json
//response
{
  "id": "string",
  "title": "string",
  "description": "string"
}
```

- `/product-groups/:id/types` => returns related types

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "productGroup": {
      "id": "string",
      "title": "string"
    },
    "description": "string"
  }
]
```

- `/product-groups/:id/products` => returns related products

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "productType": {
      "id": "string",
      "title": "string"
    },
    "description": "string",
    "stock": "boolean",
    "price": "number",
    "imageUrl": "string"
  }
]
```

#### POST

- `/product-groups` => adds a new product group

```json
//body
{
  "title": "string",
  "description": "string"
}
```

#### PATCH

- `/product-groups/:id` => updates a product group

```json
//body - all optional
{
  "title": "string",
  "description": "string"
}
```

#### DELETE

- `/product-groups/:id` => removes a product group
  - Returns status 204 without body

### product-types

#### GET

- `/product-types` => returns all the product types

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "productGroup": {
      "id": "string",
      "description": "string"
    },
    "description": "string"
  }
]
```

- `/product-types/:id` => returns a product type

```json
//response
{
  "id": "string",
  "title": "string",
  "productGroup": {
    "id": "string",
    "description": "string"
  },
  "description": "string"
}
```

- `/product-types/:id/products` => returns related products

```json
//response
[
  {
    "id": "string",
    "title": "string",
    "productType": {
      "id": "string",
      "title": "string"
    },
    "description": "string",
    "stock": "boolean",
    "price": "number",
    "imageUrl": "string"
  }
]
```

#### POST

- `/product-types` => adds a new product type

```json
//body
{
  "title": "string",
  "description": "string",
  "productGroup": "string"
}
```

#### PATCH

- `/product-types/:id` => updates a product type

```json
//body - all optional
{
  "title": "string",
  "description": "string",
  "productGroup": "string"
}
```

#### DELETE

- `/product-types/:id` => removes a product type
  - Returns status 204 without body
  -

### product-restrictions

#### GET

- `/product-restrictions` => returns all the product restrictions

```json
//response
[
  {
    "id": "string",
    "productGroup": "string",
    "sourceProduct": "string",
    "restrictedType": "string",
    "restrictedProduct": "string"
  }
]
```

- `/product-restrictions/:id` => returns a product type

```json
//response
{
  "id": "string",
  "productGroup": "string",
  "sourceProduct": "string",
  "restrictedType": "string",
  "restrictedProduct": "string"
}
```

- `/product-restrictions/source-product/:id` => returns all product restrictions related to a source product

```json
//response
[
  {
    "id": "string",
    "productGroup": "string",
    "sourceProduct": "string",
    "restrictedType": "string",
    "restrictedProduct": "string"
  }
]
```

- `/product-restrictions/restricted-type/:id` => returns all product restrictions related to a restricted product type

```json
//response
[
  {
    "id": "string",
    "productGroup": "string",
    "sourceProduct": "string",
    "restrictedType": "string",
    "restrictedProduct": "string"
  }
]
```

- `/product-restrictions/restricted-product/:id` => returns all product restrictions related to a restricted product

```json
//response
[
  {
    "id": "string",
    "productGroup": "string",
    "sourceProduct": "string",
    "restrictedType": "string",
    "restrictedProduct": "string"
  }
]
```

- `/product-restrictions/product-group/:id` => returns all product restrictions related to a product group

```json
//response
[
  {
    "id": "string",
    "productGroup": "string",
    "sourceProduct": "string",
    "restrictedType": "string",
    "restrictedProduct": "string"
  }
]
```

#### POST

- `/product-restrictions` => adds a new product restriction

```json
//body
{
  "productGroup": "string",
  "sourceProduct": "string",
  "restrictedType": "string",
  "restrictedProduct": "string"
}
```

#### PATCH

- `/product-restrictions/:id` => updates a product type

```json
//body - all optional
{
  "productGroup": "string",
  "sourceProduct": "string",
  "restrictedType": "string",
  "restrictedProduct": "string"
}
```

#### DELETE

- `/product-restrictions/:id` => removes a product restriction
  - Returns status 204 without body

### orders

#### GET

- `/orders` => returns all orders

```json
//response
[
  {
    "id": "string",
    "user": {
      "id": "string",
      "name": "string"
    },
    "products": [
      {
        "id": "string",
        "title": "string",
        "price": "number"
      }
    ],
    "created": "number"
  }
]
```

- `/orders/:id` => returns specific order

```json
//response
{
  "id": "string",
  "user": {
    "id": "string",
    "name": "string"
  },
  "products": [
    {
      "id": "string",
      "title": "string",
      "price": "number"
    }
  ],
  "created": "number"
}
```

#### POST

- `/orders` => adds a new order

```json
{
  "user": "string",
  "products": "string[]"
}
```

#### DELETE

- `/orders/:id` => removes an order
  - Returns status 204 without body

## Folders

- `db/`: Contains all the simulated database files.
- `src/adapters`: Functions responsible for parsing data between the database and the user.
- `src/config`: Contains global Node.js configurations.
- `src/controllers`: Defines how API requests are handled and interacts with the models.
- `src/middlewares`: Validates user input before it reaches the controllers.
- `src/models`: Manages logic for reading and writing JSON files.
- `src/routes`: Defines endpoints for interacting with the API.
- `src/shared`:Houses shared resources used across components.
- `src/validators`: Contains request body validators to ensure data integrity.

## Development Notes

- **Extensibility**: This server was designed with scalability in mind, allowing for real database integrations or additional features to be implemented as needed.
- **PUT** method: The PUT method is intentionally not used in the API. Unlike PATCH, PUT replaces an entire resource or creates one if it doesn’t exist, which is unnecessary in the current use case. PATCH is a better fit for the update operations provided by this server.
- **user** endpoint: Although a user endpoint is implemented, it is not currently used by the client-side application. This is intentional, as it requires an authorization layer before it can be utilized.
- **orders** endpoint: The orders endpoint does not currently support the PATCH method. This is an intentional design decision, but the feature can be added if necessary.
