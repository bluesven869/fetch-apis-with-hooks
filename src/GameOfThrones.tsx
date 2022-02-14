import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Characters } from './pages/Characters';
import { Houses } from './pages/Houses';
import { Books } from './pages/Books';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const GameOfThrones = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Books" component={Books} />
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Houses" component={Houses} />
      </Tab.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);


export default GameOfThrones;
