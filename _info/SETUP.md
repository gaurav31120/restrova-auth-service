# Restrova -- is a multi tenant restaurant.

## Tools nedds to be installed.

1 Git setup

2 Node version manager (NVM) setup

3 Node.js project setup

4 TypeScript setup

5 Prettier setup

6 ESLint setup

7 Git hooks setup

8 Application configuration setup

9 Express.js application setup

10 Logger setup

11 Error handling setup

12 Tests setup

13 Create template

---

1 Git setup

2 Node version manager (NVM) setup

3 Node.js project setup

4 TypeScript setup
i. Run this command
npm i -D typescript

ii. Run this command
npx tsc --init

ii. Run this command
npx tsc
node dist/server.js

5 Prettier setup

Open prettier.io -> docs -. click install
copy this command there -- and paste on terminal

i. npm install --save-dev --save-exact prettier

ii. create a file .prettierrc file in root folder and write empty braces there {}

iii. create prettierIgnore file and pust {dist, coverage} or run this command
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
-- these files will be ignore in formating

iv. npx prettier . --write
This command is used to write prettier in code(means to apply prettier)

To check only you can use this command -- npx prettier .

v. "format:fix": "prettier . --write",
"format:check": "prettier . --check"

    Put this two things inside scripts in package.json file

6 ESLint setup

i.Open eslint website -- https://typescript-eslint.io/getting-started
ii. copy the installation command -- npm install --save-dev eslint @eslint/js typescript-eslint
iii. create eslint.config.mjs file
iv. Paste this code to the page

// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(  
 eslint.configs.recommended,
tseslint.configs.recommended,
);

v. Run this command to check lint npx eslint .

vi. Put this in eslint.config.mjs file to ignore lint
{
ignores: ['dist', 'node_modules', 'eslint.congig.mjs],
}

vii. Add rules to eslint.config.mjs file
rules: {
'dot-notation': "error"
}

viii. Add these two lines in pakage.json

    "lint:check": "eslint .",
    "lint:fix": "eslint . --fix"

7 Git hooks setup
-- It stops bad code(lint issued code) to commit in git

i. Open https://typicode.github.io/husky/get-started.html

ii. Paste this command --
npm install --save-dev husky

iii. Init husky
npx husky init

iv. Open husky precommint and put this code
npm run lint:check

v. Run this cmd -- run lint at the time of staged
npm install --save-dev lint-staged # requires further setup

vi. Add this script in package.json
"lint-staged": {
"\*.ts": ["npm run format:fix", "npm run lint:fix"]
}

8 Application configuration setup
i. npm install dotenv --save

9 Express.js application setup
i. npm i express
ii. npm i -D @types/express
iii. npm i -D nodemon ts-node

10 Logger setup
i. npm i winston
ii. npm i -D @types/winston

11 Error handling setup
i. npm install http-errors
ii. npm install -D @types/http-errors
12 Tests setup
i. npm install --save-dev jest
ii. npm install --save-dev ts-jest
iii. npx ts-jest config:init
iv. npm install --save-dev @types/jest

v. npm install supertest --save-dev
vi.npm install @types/supertest --save-dev

13 Create template

i. Create a new repository
ii. name it
iii. click on create new repository
iv. copy the https/ssh link -- https://github.com/gaurav31120/mernstack-node-app-template.git
v. git remote -v
vi. git remote add template https://github.com/gaurav31120/mernstack-node-app-template.git
vii. git remote -v
viii. git push template main

git push --> to push code in main branch
git push template main --> to push code in template branch

---

## Docker:

1. ### Building the Docker Image 🏗️

Navigate to the directory containing your `Dockerfile` and run:

```bash
docker build -t auth-service:dev -f docker/development/Dockerfile

```

This command will produce a Docker image named auth-service with the tag dev.

---

2. ### Running the Express App in a Docker Container 🚀

Once the image is built, you can run it:

```bash
docker run --rm -it -v $(pwd):/usr/src/app -v /usr/src/app/node_modules --env-file $(pwd)/.env -p 5501:5501 -e NODE_ENV=development auth-prep:dev

```

Your Express app is now accessible at http://localhost:5501

3. ### Stoping the Docker Container ✋🏻

You can stop the running container by using this command:

```bash

// If container is running in interactive mode.
ctr + c

// If container is running in detached mode.
// List all running container
docker ps

// Stop the container using container id
docker stop <container id>
```

---

## Advanced Database Management and Secure User Authentication

1. install docker in your system

2. Pull the PostgreSQL Docker image
   docker pull postgres

3. Create a persistent Volume: Persistent volums ensures that the data remains intact even if the container
   stops or crashes.

docker volume create nameOfTheVolume ----> name of volume must be unique

4. **Run the PostgreSQL container with the volume attached** 🏃‍♂️:

    ```bash
    docker run --rm --name mernpg-container -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -v mernpgdata:/var/lib/postgresql/data -p 5432:5432 -d postgres

    ```

5. How to stop the docker postgre

docker stop idName

## Type ORM -- typeorm.io

## Installing bcrypt -- for hashing password

npm i bcrypt
npm i --save-dev @types/bcrypt

## Installing express validator for validations

npm install express-validator

Two types of using validations:
1 using body
2 using schema validations
