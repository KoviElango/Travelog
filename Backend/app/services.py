import httpx
import logging

class TouristSpotService:
    def __init__(self):
        self.api_url = "https://api.foursquare.com/v3/places/search"
        self.api_key = "fsq3vcUrmJWYbR7R23z65CKc1o31iHnWYza9glh2Vq0rI0Y="
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
        logging.info(f"Fetching tourist spots for {name}, {country} with headers {headers} and params {params}")

        async with httpx.AsyncClient() as client:
            response = await client.get(self.api_url, headers=headers, params=params)
            logging.info(f"API response status: {response.status_code}")
            logging.info(f"API response content: {response.text}")
            if response.status_code == 200:
                return response.json()
            else:
                logging.error(f"Error fetching tourist spots: {response.text}")
                return {"error": "Failed to fetch places of interest"}