from fastapi import APIRouter, Query
from app.services import TouristSpotService
import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

@router.get("/tourist_spots")
async def get_tourist_spots(name: str = Query(...), country: str = Query(...)):
    logging.info(f"Received request for tourist spots in {name}, {country}")
    tourist_spot_service = TouristSpotService()
    result = await tourist_spot_service.fetch_tourist_spots(name, country)
    logging.info(f"Result: {result}")
    return result