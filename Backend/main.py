from fastapi import FastAPI
from app.routes import router
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.include_router(router)

@app.get("/")
def read_root():
    return {"Python_application": "Initiated"}

if __name__ == "__main__":
    import uvicorn
    logging.info("Starting Uvicorn")
    uvicorn.run(app, host="0.0.0.0", port=8000)

# http://127.0.0.1:8000/tourist_spots?name=Chennai&country=India
# http://localhost:8000/
