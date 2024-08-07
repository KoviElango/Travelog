from fastapi import FastAPI
from app.routes import router
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    logging.info("Starting Uvicorn")
    uvicorn.run(app, host="0.0.0.0", port=8000)
