# Server

The server leverages Node.js and Express to provide a REST API with the following endpoints:

## products

### GET

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

### POST

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

### PATCH

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

### DELETE

- `/products/:id` => removes a product
  - Returns status 204 without body

## product-groups

### GET

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

### POST

- `/product-groups` => adds a new product group

```json
//body
{
  "title": "string",
  "description": "string"
}
```

### PATCH

- `/product-groups/:id` => updates a product group

```json
//body - all optional
{
  "title": "string",
  "description": "string"
}
```

### DELETE

- `/product-groups/:id` => removes a product group
  - Returns status 204 without body

## product-types

### GET

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

### POST

- `/product-types` => adds a new product type

```json
//body
{
  "title": "string",
  "description": "string",
  "productGroup": "string"
}
```

### PATCH

- `/product-types/:id` => updates a product type

```json
//body - all optional
{
  "title": "string",
  "description": "string",
  "productGroup": "string"
}
```

### DELETE

- `/product-types/:id` => removes a product type
  - Returns status 204 without body
  -

## product-restrictions

### GET

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

### POST

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

### PATCH

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

### DELETE

- `/product-restrictions/:id` => removes a product restriction
  - Returns status 204 without body

## orders

### GET

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

### POST

- `/orders` => adds a new order

```json
{
  "user": "string",
  "products": "string[]"
}
```

### DELETE

- `/orders/:id` => removes an order
  - Returns status 204 without body
