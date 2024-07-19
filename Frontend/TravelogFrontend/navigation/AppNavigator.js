import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LocationSearch from '../screens/LocationSearch';
import TouristSpots from '../screens/TouristSpots';
import Planner from '../screens/Planner';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationSearch">
        <Stack.Screen name="LocationSearch" component={LocationSearch} />
        <Stack.Screen name="TouristSpots" component={TouristSpots} />
        <Stack.Screen name="Planner" component={Planner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
