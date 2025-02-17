
npm --init

.vscode
 setting.json 
    add setting vsCode

 npm i -g  typescript ts-node nodemon
    for install package globaly

tsc --init
    tsconfig.json file

.prettierrc
    add prettier config

update tsconfig.json for read and run .ts files

npm i express dotenv

npm i --save-dev @types/express @types/node

create env file and set config server

create src/config/config.ts file and add config server

create src/config/logging.ts file and add custom consol logs

create src/server.ts file and add server api codes and config server

create middleware files and config there
    corsHandler , loggingHandler , routeNotFound

npm i --save-dev typescript ts-node ts-jest supertest jest @types/supertest @types/jest

config tsconfig.json for run test
    update include and types value 

create tsconfig.build.json and add config

create jest.config.ts and add config that

update script in package.json
    add new script for run test
    add new script for build


create test file by name:  application.test.ts 
    write simple test 


create errorHandler.ts middleware 
    use in server

-- define decorator for routes:
npm i reflect-metadata

update tsconfig.json
    add new key : "reflect-metadata"
        "types": ["jest", "reflect-metadata"],
    set true value :
        "experimentalDecorators": true

import reflect-metadata library in server.ts file
    import 'reflect-metadata'

define src/library/routes.ts file for routes type
    define types and export that

define simple controller  file :
    add new route method in controller

define decorator for Controller's class in : src/decorators/controller.ts

define decorator for routes of Controller's class in : src/decorators/route.ts

define module for load Routes from controller's in src/modules/routes.ts

load Controller's by decorator in server:
     defineRoutes([MainController], application);

npm i joi

create validation decorator in : src/decorators/validate.ts

create new controller by name UserController for use Validation decorator
