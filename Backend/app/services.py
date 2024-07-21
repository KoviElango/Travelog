import httpx
import logging
from fastapi import HTTPException
import os

class TouristSpotService:
    def __init__(self):
        self.places_api_url = "https://api.foursquare.com/v3/places/search"
        self.api_key = os.getenv("API_KEY")
        logging.basicConfig(level=logging.INFO)

    async def fetch_tourist_spots(self, name: str, country: str):
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }
        params = {
            "near": f"{name}, {country}",
            "limit": 10
        }
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(self.places_api_url, headers=headers, params=params)
                response.raise_for_status()
                data = response.json()
                if 'results' in data:
                    return data['results']
                else:
                    raise ValueError("Unexpected response format")
        except httpx.HTTPStatusError as e:
            logging.error(f"HTTP error occurred: {e}")
            raise HTTPException(status_code=response.status_code, detail=str(e))
        except Exception as e:
            logging.error(f"An error occurred: {e}")
            raise HTTPException(status_code=500, detail="An internal server error occurred")
