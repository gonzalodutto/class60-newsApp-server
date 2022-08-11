## 0. Backend Entities & Relations

### Categories

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

npx sequelize-cli model:generate --name category --attributes name:string

`category.hasMany(models.article)`

### Articles

| key         | data type | required | notes                           |
| ----------- | --------- | -------- | ------------------------------- |
| id          | Integer   | yes      | Already added by model:generate |
| title       | String    | yes      |                                 |
| author      | String    | yes      |                                 |
| content     | Integer   | yes      |                                 |
| publishDate | Date      | yes      |                                 |
| imageUrl    | String    | yes      |                                 |
| categoryId  | Integer   | yes      | Foreign key                     |
| createdAt   | Date      | yes      | Already added by model:generate |
| updatedAt   | Date      | yes      | Already added by model:generate |

npx sequelize-cli model:generate --name article --attributes title:string,author:string,content:string,publishDate:date,imageUrl:string

`article.belongsTo(models.category)`
`article.hasMany(models.comment)`

### Comments

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| comment   | String    | yes      |                                 |
| articleId | Integer   | yes      | Foreign key                     |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

npx sequelize-cli model:generate --name comment --attributes name:string,comment:string

`comment.belongsTo(models.article)`
