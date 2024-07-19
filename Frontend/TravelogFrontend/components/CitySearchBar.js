import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { GlobalStyle } from '../styles/GlobalStyle';
import ApiIntegrate from './services/ApiIntegrate';

const CitySearchBar = ({ country, onSelect }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async (text) => {
    setSearchText(text);
    if (text && country) {
      const cities = await ApiIntegrate.fetchCities(country);
      const newData = cities.filter((item) => {
        const itemData = item.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData([]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { onSelect(item); setSearchText(''); setFilteredData([]); }}>
      <Text style={GlobalStyle.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={GlobalStyle.inputContainer}>
        <Icon name="search" size={20} />
        <TextInput
          placeholder="Search City"
          value={searchText}
          onChangeText={(text) => handleSearch(text)}
          style={GlobalStyle.textInput}
        />
      </View>
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          style={GlobalStyle.dropdown}
        />
      )}
    </View>
  );
};

export default CitySearchBar;