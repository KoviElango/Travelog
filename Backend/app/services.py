import httpx

class TouristSpotService:
    def __init__(self):
        self.api_url = "https://api.foursquare.com/v3/places/search"
        self.api_key = "fsq3vcUrmJWYbR7R23z65CKc1o31iHnWYza9glh2Vq0rI0Y="  # Your Foursquare API key

    async def fetch_tourist_spots(self, location):
        headers = {
            "Accept": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }
        params = {
            "near": f"{location['name']}, {location['country']}",
            "limit": 10
        }
        async with httpx.AsyncClient() as client:
            response = await client.get(self.api_url, headers=headers, params=params)
            if response.status_code == 200:
                spots_data = response.json()
                tourist_spots = [
                    {
                        "name": spot["name"],
                        "description": spot.get("description", "No description available."),
                        "address": spot["location"].get("address", "No address available.")
                    }
                    for spot in spots_data["results"]
                ]
                return tourist_spots
            else:
                return {"error": "Failed to fetch places of interest"}
