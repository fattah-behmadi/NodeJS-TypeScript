# NodeJS-TypeScript

A TypeScript-based Node.js project with Express, MongoDB, and decorators for structured API development.

## Features
- TypeScript setup with ts-node and Jest for testing.
- Express server with middleware for logging, error handling, and CORS.
- Decorators for defining controllers and routes.
- MongoDB integration using Mongoose.
- Validation using Joi.
- Fully configurable via environment variables.

## Installation

1. **Initialize the project**
   ```sh
   npm init -y
   ```

2. **Setup TypeScript and related tools**
   ```sh
   npm i -g typescript ts-node nodemon
   tsc --init
   ```

3. **Configure Prettier**
   - Add a `.prettierrc` file for code formatting.

4. **Install dependencies**
   ```sh
   npm i express dotenv
   npm i --save-dev @types/express @types/node
   ```

5. **Setup middleware**
   - Create `corsHandler`, `loggingHandler`, and `routeNotFound` middlewares.

6. **Install testing tools**
   ```sh
   npm i --save-dev ts-jest supertest jest @types/supertest @types/jest
   ```
   - Configure `tsconfig.json` and `jest.config.ts` for testing.

7. **Define decorators for controllers and routes**
   ```sh
   npm i reflect-metadata
   ```
   - Enable `"experimentalDecorators": true` in `tsconfig.json`.
   - Import `reflect-metadata` in `server.ts`.

8. **Setup validation**
   ```sh
   npm i joi
   ```
   - Create validation decorators in `src/decorators/validate.ts`.

9. **Setup MongoDB with Mongoose**
   ```sh
   npm i mongoose
   ```
   - Update `.env` and `src/config/config.ts` with MongoDB configuration.

## Project Structure

```
project-root/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── decorators/
│   ├── middleware/
│   ├── models/
│   ├── modules/
│   ├── library/
│   ├── server.ts
│   ├── tests/
├── .vscode/
├── .prettierrc
├── tsconfig.json
├── tsconfig.build.json
├── jest.config.ts
├── package.json
├── .env
```

## Scripts

- **Start server**: `npm start`
- **Run tests**: `npm test`
- **Build project**: `npm run build`

## Description of Used Packages

- **TypeScript**: Used for static typing and better development experience.
- **ts-node**: Enables running TypeScript files without manual compilation.
- **nodemon**: Restarts the server on file changes.
- **Express**: Web framework for building APIs.
- **dotenv**: Loads environment variables from a `.env` file.
- **Jest & Supertest**: Testing framework for unit and integration tests.
- **reflect-metadata**: Enables decorators for controllers and routes.
- **Joi**: Schema validation for request payloads.
- **Mongoose**: ODM for MongoDB.

## Contributing
Feel free to fork the repository and submit pull requests!

## License
This project is licensed under the MIT License.