# Get a book

**Method** : `GET`

**URL** : `/books/:id`

**URL Parameters** : `id=[integer]` 

**Auth required** : Yes

**header** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}


### Success Responses

**Code** : `200`

```json
[
  {
    "title": "title 2",
    "isbn": "isbn",
    "pages": "15",
    "abstract": null,
    "authors": null,
    "release_date": "2021-01-01"
  }
]
```

### Error Responses
**Code** : `401`
Unauthorized

**Code** : `404`
Cannot GET /books-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24