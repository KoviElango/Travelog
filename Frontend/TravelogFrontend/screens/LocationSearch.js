import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import CountrySearchBar from '../components/CountrySearchBar';
import CitySearchBar from '../components/CitySearchBar';

const LocationSearch = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Search for Tourist Spots</Text>
      <CountrySearchBar onSelect={(country) => { setSelectedCountry(country); setSelectedCity(''); }} />
      {selectedCountry && (
        <>
          <Text style={GlobalStyle.selectedText}>Selected Country: {selectedCountry.name}</Text>
          <CitySearchBar country={selectedCountry} onSelect={(city) => setSelectedCity(city)} />
        </>
      )}
      {selectedCity && (
        <Text style={GlobalStyle.selectedText}>Selected City: {selectedCity}</Text>
      )}
      <Button
        title="Search"
        onPress={() => navigation.navigate('TouristSpots', { location: selectedCity })}
      />
    </View>
  );
};

export default LocationSearch;
