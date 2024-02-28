
import './index.css'




function Card(props) {
   const { start_production,  image, title, classs } = props;
 
   return (
     <div className="card-wrapper">
      <div className="img">
       <img src={image}  />

      </div>
      <div className="card-text">
     
       <h3> Year: {start_production}</h3>
       <h3>Name: {title}</h3>
       <h3>Class: {classs}</h3>
      </div>
     </div>
   );
 }




  export {Card};
