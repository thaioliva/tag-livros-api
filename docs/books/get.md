# Get Books by User

**Method** : `GET`

**URL** : `/books`

**URL Parameters** : `offset=[integer]&limit=[integer]` 

**Auth required** : Yes

**header** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}

### Success Responses

**Code** : `200`

```json
[
  {
  "0": {
    "title": "title 1",
    "isbn": "isbn",
    "pages": "9",
    "abstract": null,
    "authors": null,
    "release_date": "2000-01-01"
  },
  "1": {
    "title": "title 2",
    "isbn": "isbn",
    "pages": "15",
    "abstract": null,
    "authors": null,
    "release_date": "2021-01-01"
  },
  "total": 2
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