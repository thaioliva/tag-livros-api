# Update an user

**Method** : `POST`

**URL** : `/books/:id`

**URL Parameters** : `id=[integer]` 

**HEADER** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}

**Auth required** : Yes


**BODY**
```json
{
  "title": "title 3",
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
Cannot GET /books-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24