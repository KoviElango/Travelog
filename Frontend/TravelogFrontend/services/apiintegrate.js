import axios from 'axios';

class ApiIntegrate {
  constructor() {
    this.baseUrl = 'https://countriesnow.space/api/v0.1';
  }

  async fetchCountriesAndCities() {
    try {
      const response = await axios.get(`${this.baseUrl}/countries`);
      return response.data.data.map(country => ({
        iso2: country.iso2,
        name: country.country,
        cities: country.cities,
      }));
    } catch (error) {
      console.error('Error fetching countries and cities:', error);
      return [];
    }
  }
}

export default new ApiIntegrate();
