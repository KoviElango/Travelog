from typing import List, Dict

class ParserService:
    def parse_tourist_spots(self, data: Dict) -> List[Dict]:
        parsed_spots = []
        for spot in data['results']:
            parsed_spots.append({
                'name': spot['name'],
                'address': spot['location']['formatted_address'],
                'category': spot['categories'][0]['name'] if spot['categories'] else 'Unknown'
            })
        return parsed_spots
