# Create a book

**Method** : `POST`

**URL** : `/books`

**Auth required** : Yes

**header** : 
- 'Content-Type: application/json',
- 'Authorization: Bearer {TOKEN}


**body**
```json
{
  "title": "title",
  "isbn": "isbn", *
  "pages": "9", *
  "release_date": "2000-01-01", *
  "publisher": null,
  "abstract": null,
  "authors": null
}
```

**Fields required** : *

### Success Responses

**Code** : `200`

```json
  {
  "title": "title",
  "isbn": "isbn", 
  "pages": "9", 
  "release_date": "2000-01-01", 
  "publisher": null,
  "abstract": null,
  "authors": null
}
```

### Error Responses
**Code** : `401`
Unauthorized

**Code** : `404`
Cannot GET /books-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24