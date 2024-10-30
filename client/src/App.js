import {useState, useEffect} from 'react';

//functions
import { getTest } from './functions/test';
import { getFlavors } from './functions/flavors';

//components
import { Text, Box, Button } from '@chakra-ui/react';
import Nav from './components/Nav';
import Landing from './pages/Landing';


const App = () => {
  return (
    <Landing></Landing>
  );
};


export default App;
