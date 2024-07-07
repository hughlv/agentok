# Backend Service for Agentok Studio

Run the service:

```bash
uvicorn app.main:app --reload --port 5004
```

If you need to run the service with network proxy, you can use the following command:

```bash
proxychains4 uvicorn app.main:app --reload --port 5004
```

You need to configure proxychains4 to make it work, which is out of the scope of this document.

For convenience (assumed you have created a virtual environment named `venv`):

```bash
./start.sh
```

## Deps

For retrieve related agents, should install pyautogen[retrievechat]:

```bash
pip install "pyautogen[retrievechat]"
```

## Docker Build

```bash
docker build -t agentok-api ./api
docker run -d -p 5004:5004 agentok-api
```

## API Docs

By default, when you create a FastAPI application, it automatically generates OpenAPI schemas for all your routes and serves them under /docs and /redoc paths.

You can visit `/redoc` or `/docs`, such as [http://localhost:5004/redoc](http://localhost:5004/redoc) or [http://localhost:5004/docs](http://localhost:5004/docs) to see the API docs.