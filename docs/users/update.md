# Update an user

**Method** : `POST`

**URL** : `/users/:id`

**URL Parameters** : `id=[integer]` 

**HEADER** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}

**Auth required** : Yes


**BODY**
```json
{
  "name": "Teste Silva",
}
```

### Success Responses

**Code** : `200`

```json
  [
    1
  ]
```

### Error Responses
**Code** : `401`
Unauthorized

**Code** : `404`
Cannot GET /users-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24