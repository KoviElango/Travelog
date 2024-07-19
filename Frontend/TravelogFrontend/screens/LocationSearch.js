import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import Searchbar from '../components/searchbar';

const LocationSearch = ({ navigation }) => {
  const [location, setLocation] = useState('');

  const data = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
  ];

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Search for Tourist Spots</Text>
      <Searchbar
        data={data}
        onSelect={(item) => setLocation(item)}
      />
      {location && (
        <Text>Selected Location: {location}</Text>
      )}
      <Button
        title="Search"
        onPress={() => navigation.navigate('TouristSpots', { location })}
      />
    </View>
  );
};

export default LocationSearch;
