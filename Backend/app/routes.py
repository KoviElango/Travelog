from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.services.services import TouristSpotService
import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

class Location(BaseModel):
    name: str
    country: str

@router.get("/tourist_spots")
async def get_tourist_spots(location: Location = Depends()):
    logging.info(f"Received request for tourist spots in {location.name}, {location.country}")
    tourist_spot_service = TouristSpotService()
    result = await tourist_spot_service.fetch_and_parse_tourist_spots(location.name, location.country)
    logging.info(f"Result: {result}")
    return result
