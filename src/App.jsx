
import './App.css'
import './assets/cars.json'
import { carsData } from './assets/assets.jsx';
import { Card } from './assets/components/cars/index.jsx';

  
  
 

  function Cars(props) {
   carsData.map(el, index => {
      return <Card key={index}  title={el.title} start_production={el.start_production} image={el.image} classs={el.classs} />;
    });
  
   
    
  }
  





function App() {
    
 

  return (
    <>
   <div className="header">
    <h1>Cars About</h1>
   </div>
  
   
     {
       carsData.map((el, index)=> {
        return <Card key={index}  title={el.title} start_production={el.start_production} image={el.image} classs={el.class}  />;
      })
     }
    
     
     
    </>
  )
}





export{Cars};
export default App
