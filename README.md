*Travelog*

This project is a Travel Planner and Guide application that allows users to search for popular tourist spots, select places they want to visit, and plan their travel itinerary. The app leverages the Foursquare Places API to fetch tourist spot data.

Features:

  Location Search: Users can search for tourist spots in a specific location.
  Tourist Spot Details: Detailed information about each tourist spot, including name, address, categories, and distance.
  Itinerary Planning: Users can select spots they want to visit and plan their travel itinerary accordingly.


Tech Stack:

  Backend: FastAPI for handling API requests and responses.
  Data Validation: Pydantic for ensuring the integrity of the data.
  HTTP Client: HTTPx for making API calls to the Foursquare Places API.
  Frontend (in progress): React Native for building a user-friendly interface.
  API: Foursquare Places API to fetch data on tourist spots.

API Endpoints:
GET /tourist_spots?name={name}&country={country}: Retrieve tourist spots for a specified location.

Contributing:
Contributions are welcomed. Please feel free to Fork the repo and use it.

Fork the Repository.
Create a Branch: git checkout -b feature-branch-name
Commit Changes: git commit -m 'Add new feature'
Push to Branch: git push origin feature-branch-name
Create Pull Request.

Contact:
For questions or feedback, contact Koovendhan Elango at kovendhanelango@gmail.com

