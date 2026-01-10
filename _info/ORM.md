# ORM

## Installation
Install the npm package:

npm install typeorm

You need to install reflect-metadata shim:

npm install reflect-metadata

and import it somewhere in the global place of your app (for example in app.ts):

import "reflect-metadata"

You may need to install node typings:

npm install @types/node --save-dev

Install a database driver: see the documentation for each particular driver: mongodb, mssql, mysql/mariadb, oracle, postgres, sap, spanner, sqlite.

## TypeScript configuration

Also, make sure you are using TypeScript version 4.5 or higher, and you have enabled the following settings in tsconfig.json:

"emitDecoratorMetadata": true,
"experimentalDecorators": true,



## Quick Start
The quickest way to get started with TypeORM is to use its CLI commands to generate a starter project. Quick start works only if you are using TypeORM in a Node.js application. If you are using other platforms, proceed to the step-by-step guide.

To create a new project using CLI, run the following command:

npx typeorm init --name MyProject --database postgres

Where name is the name of your project and database is the database you'll use. Database can be one of the following values: mysql, mariadb, postgres, cockroachdb, sqlite, mssql, sap, spanner, oracle, mongodb, cordova, react-native, expo, nativescript.

This command will generate a new project in the MyProject directory with the following files:

MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options

You can also run typeorm init on an existing node project, but be careful - it may override some files you already have.

The next step is to install new project dependencies:

cd MyProject
npm install

After you have all dependencies installed, edit the data-source.ts file and put your own database connection configuration options in there:

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: [],
})

Particularly, most of the time you'll only need to configure host, username, password, database and maybe port options.

Once you finish with configuration and all node modules are installed, you can run your application:

npm start

That's it, your application should successfully run and insert a new user into the database. You can continue to work with this project and integrate other modules you need and start creating more entities.

You can generate an ESM project by running npx typeorm init --name MyProject --database postgres --module esm command.

You can generate an even more advanced project with express installed by running npx typeorm init --name MyProject --database mysql --express command.

You can generate a docker-compose file by running npx typeorm init --name MyProject --database postgres --docker command.