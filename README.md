# Backend Application

This is a simple Express.js server.

## Running Locally

Install dependencies and start the server in development mode:

```bash
npm install
npm run dev
```

To build the TypeScript source and run the compiled code:

```bash
npm run build
npm start
```

The application listens on port `3000` by default.

### Endpoints

- `GET /` - returns "Hello, world!"
- `GET /random` - returns a JSON object with a random number

## Docker

You can build and run the application using Docker.

### Build image

```bash
docker build -t backend-app .
```

### Run container

```bash
docker run -p 3000:3000 backend-app
```

This maps port 3000 from the container to your host, so you can access the
application at `http://localhost:3000`.
