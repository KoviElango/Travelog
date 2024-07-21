from fastapi import FastAPI, HTTPException, Query
import logging
from services import TouristSpotService

app = FastAPI()

@app.get("/tourist_spots")
async def get_tourist_spots(name: str = Query(...), country: str = Query(...)):
    service = TouristSpotService()
    try:
        logging.info(f"Received request for tourist spots in {name}, {country}")
        data = await service.fetch_tourist_spots(name, country)
        logging.info(f"Fetched data: {data}")
        return data
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="An internal server error occurred")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
