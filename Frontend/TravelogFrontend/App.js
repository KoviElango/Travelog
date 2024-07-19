import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CountrySearchBar from './components/CountrySearchBar';
import CitySearchBar from './components/CitySearchBar';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <View style={GlobalStyle.appContainer}>
      <CountrySearchBar onSelect={(country) => { setSelectedCountry(country); setSelectedCity(null); }} />
      {selectedCountry && (
        <>
          <Text style={GlobalStyle.selectedText}>Selected Country: {selectedCountry.name}</Text>
          <CitySearchBar country={selectedCountry.name} onSelect={(city) => setSelectedCity(city)} />
        </>
      )}
      {selectedCity && (
        <Text style={GlobalStyle.selectedText}>Selected City: {selectedCity}</Text>
      )}
    </View>
  );
};

export default App;
