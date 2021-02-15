# Get Users

**Method** : `GET`

**URL** : `/users`

**Auth required** : Yes

**header** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}


### Success Responses

**Code** : `200`

```json
[
  {
    "id": 1,
    "name": "Teste",
    "email": "email@teste.com",
    "password": "$2b$10$3qdEjNCQVrQFkJavDpaHNuBQRl3QoZVdhip0GAJGxIzxOCifrBwQe",
    "createdAt": "2021-02-15T01:18:17.443Z",
    "updatedAt": "2021-02-15T01:18:17.443Z"
  }
]
```

### Error Responses
**Code** : `401`
Unauthorized

**Code** : `404`
Cannot GET /users-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24