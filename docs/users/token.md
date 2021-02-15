# Get token

**URL** : `/token`

**Method** : `POST`

**BODY**
```json
{
	"email": "email@test.com",
	"password": "*#12345"
}
```

### Success Responses

**Code** : `200`

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.fh_6m7AIxi5gEoiJlJQIrBBMKxOust6pNf9BR0dV7-E"
}
```

### Error Responses
**Code** : `401`
Unauthorized

**Code** : `404`
Cannot GET /token-example

**Code** : `400`
SyntaxError: Unexpected token } in JSON at position 24