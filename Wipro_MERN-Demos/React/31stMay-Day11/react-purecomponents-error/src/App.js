import logo from './logo.svg';
import './App.css';
import Image from './Images';
import image1 from './male.png';
import image2 from './female.png';
import Error from './Error';
import City from './City';

function App() {
  return (
    <>
        <Error>
    <h1> <City/> </h1>
    <h1> <City name="delhi"/> </h1>
    </Error> * 
    <Error>
       <Image name={image1} />
      <Image name={image2} />
     </Error>
     <Error>
     <Image name="noimage"/>
     </Error>
      
     </>

  );
}

export default App;
