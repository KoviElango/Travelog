import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

const TouristSpots = ({ route }) => {
    const { location } = route.params;

    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>Tourist Spots in {location}</Text>
        </View>
    );
};

export default TouristSpots;

