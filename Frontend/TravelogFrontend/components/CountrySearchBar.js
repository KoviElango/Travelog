import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { GlobalStyle } from '../styles/GlobalStyle';
import ApiIntegrate from './services/ApiIntegrate';

const CountrySearchBar = ({ onSelect }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = await ApiIntegrate.fetchCountries();
      setCountries(countryList);
    };
    fetchCountries();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = countries.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData([]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { onSelect(item.name); setSearchText(''); setFilteredData([]); }}>
      <Text style={GlobalStyle.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={GlobalStyle.inputContainer}>
        <Icon name="search" size={20} />
        <TextInput
          placeholder="Search Country"
          value={searchText}
          onChangeText={(text) => handleSearch(text)}
          style={GlobalStyle.textInput}
        />
      </View>
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={GlobalStyle.dropdown}
        />
      )}
    </View>
  );
};

export default CountrySearchBar;
