import { Button } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SingleCard from './Components/Card/Card';
import Content from './Components/Content/Content';
import PaginationContainer from './Components/Pagination/Pagination';

function App() {
  return (
    <>
      <Navbar/>
      <Content/>
     
    </>
  );
}

export default App;
