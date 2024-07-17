from fastapi import APIRouter
from app.services import TouristSpotService

router = APIRouter()

@router.post("/tourist_spots")
async def get_tourist_spots(location: dict):
    tourist_spot_service = TouristSpotService()
    return await tourist_spot_service.fetch_tourist_spots(location)
