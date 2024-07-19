import axios from 'axios';

class ApiIntegrate {
  constructor() {
    this.baseUrl = 'https://countriesnow.space/api/v0.1';
  }

  async fetchCountries() {
    try {
      const response = await axios.get(`${this.baseUrl}/countries/iso`);
      return response.data.data.map(country => ({
        id: country.Iso2,
        name: country.name,
      }));
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }

  async fetchCities(country) {
    try {
      const response = await axios.post(`${this.baseUrl}/countries/cities`, {
        country: country
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  }
}

export default new ApiIntegrate();
