
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