## nodejs-typescript-express

Example Node API application with automatic generated Swagger documentation

Uses TSOA to generate swagger documentation based on decorated controllers and models. Provides a well structured Node API with type checked models and business logic with documentation aiding external parties to consume it.

## Guideline

- [NodeJS] (v14+)
- [Typescript]
- [TSOA](https://tsoa-community.github.io/docs/getting-started.html)

## Overview

- `app` - the source of our core app code.
- `app/main.ts` - start script for Express
- `app/controllers` - controllers for API
- `app/models` - interfaces for request/response objects used by controllers
- `app/services` - services used by controllers
- `app/routes` - router module on a path in the main app.
- `app/routes/index.ts` - the middleman for handling all requests and getting routes.
- `app/utils` - common functions that are often used
- `tsconfig.json` - TypeScript config for `tsc` compile used to generate Javascript
- `tslint.json` - TypeScript linting config setup to mimic StandardJS
- `tsoa.json` - TSOA config, see [here](https://github.com/lukeautry/tsoa) for details
- `dist` - folder for generate JavaScript
- `public/swagger.json` - TSOA generated swagger doc from command `npm run-script swagger`

## how to running

```
npm install
npm start:dev # http://localhost:8000/docs
```
