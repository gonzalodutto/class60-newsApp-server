## 0. Backend Entities & Relations

### Categories

| key        | data type | required | notes                             |
| ---------- | --------- | -------- | ----------------------------------|
| id         | Integer   | yes      | Already added by model:generate   |
| namme      | String    | yes      |                                   |
| createdAt  | Date      | yes      | Already added by model:generate   |
| updatedAt  | Date      | yes      | Already added by model:generate   |

`category.hasMany(models.article)`

### Articles

| key        | data type | required | notes                             |
| ---------- | --------- | -------- | ----------------------------------|
| id         | Integer   | yes      | Already added by model:generate   |
| title      | String    | yes      |                                   |
| author     | String    | yes      |                                   |
| content    | Integer   | yes      |                                   |
| publishDate| Date      | yes      |                                   |
| imageUrl   | String    | yes      |                                   |
| categoryId | Integer   | yes      | Foreign key                       |
| createdAt  | Date      | yes      | Already added by model:generate   |
| updatedAt  | Date      | yes      | Already added by model:generate   |

`article.belongsTo(models.category)`
`article.hasMany(models.comment)`

### Comments

| key        | data type | required | notes                             |
| ---------- | --------- | -------- | ----------------------------------|
| id         | Integer   | yes      | Already added by model:generate   |
| name       | String    | yes      |                                   |
| comment    | String    | yes      |                                   |
| articleId  | Integer   | yes      | Foreign key                       |
| createdAt  | Date      | yes      | Already added by model:generate   |
| updatedAt  | Date      | yes      | Already added by model:generate   |

`comment.belongsTo(models.article)`
