```
npm install --save express
```
ORM (Object Relational Mapping)
```
npm i --save sequelize
npm install -g sequelize-cli
sequelize init
```
```
npm install --save mysql2
```
Create Model
```
sequelize model:generate --name Post --attributes title:string,content:text,imageUrl:string,categoryId:integer,userId:integer
sequelize model:generate --name User --attributes name:string,email:string,password:string 
sequelize model:generate --name Category --attributes name:string    
sequelize model:generate --name Comment --attributes content:text,postId:integer,userId:integer 
sequelize model:generate --name Address --attributes address:string,userId:integer
sequelize model:generate --name PostCategory --attributes postId:integer,categoryId:integer
```
Crate tables
```
sequelize db:migrate
```

```
npm install --save body-parser
```

validate data
```
npm install fastest-validator
```

Authentication 
```
npm install --save bcryptjs jsonwebtoken nodemon
```

Upload file
```
npm install --save multer
```

Run Seeders
```
sequelize seed:generate --name category-seeder
```
```
sequelize db:seed:all
sequelize db:seed --seed 20240611043703-category-seeder
```
```
sequelize db:seed:undo
sequelize db:seed:undo:all
sequelize db:seed:undo --seed 20240611043703-category-seeder
```

Sequelize Associations