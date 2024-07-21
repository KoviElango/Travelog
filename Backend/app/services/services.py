from .api_service import APIService
from app.models import TouristSpot

class TouristSpotService:
    def __init__(self):
        self.api_service = APIService()

    async def fetch_and_parse_tourist_spots(self, name, country):
        response = await self.api_service.fetch_tourist_spots(name, country)
        spots = [TouristSpot(spot['name'], spot.get('description', ''), spot['location']) for spot in response.get('results', [])]
        return spots
