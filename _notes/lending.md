## Initial Data Models

### Book
- **Title:** string
- **Author:** string
- **Cover?:** string (image url)
- **Type?:** string
- **Available?:** boolean
- **Topic/Category?:** string[ ]
    - **tag:** string

### Library
- **Owner:** string (id/url to user?)
- **Books:** string[ ] (id/url to books)
- **Name:** string

### Book Instance
- **have:** boolean
- **want to read:** boolean
- **want to own:** boolean
- **rating:** number (range 0-10)
- **notes:** string (using text area)
- **current location:** string? (different model?, id to someone else's library?)


## Initial Views

Library/Shelf (filterable?)

Book CRUD
