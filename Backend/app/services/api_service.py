import httpx
import logging
import os

class APIService:
    def __init__(self):
        self.api_key = os.getenv("API_KEY1")
        self.base_url = "https://api.foursquare.com/v3/places/search"

    async def fetch_tourist_spots(self, name, country, limit=10):
        headers = {
            "accept": "application/json",
            "Authorization": self.api_key
        }
        params = {
            "near": f"{name}, {country}",
            "limit": limit
        }
        
        logging.info(f"Using API_KEY1: {self.api_key}")
        logging.info(f"Headers: {headers}")
        logging.info(f"Params: {params}")

        async with httpx.AsyncClient() as client:
            response = await client.get(self.base_url, headers=headers, params=params)
            logging.info(f"Response status: {response.status_code}")
            logging.info(f"Response text: {response.text}")
            
            if response.status_code == 200:
                return response.json()
            else:
                response.raise_for_status()
