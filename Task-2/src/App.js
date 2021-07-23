import React,{useState} from 'react';
import * as ReactBootStrap from "react-bootstrap";

import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [cross, setcross] = useState(false);

    const getApiData = async () => {
        const url = "https://reqres.in/api/users?page=1";
            fetch(url)
            .then((response) => response.json())
            .then(result  => {
                console.log(result);
                setdata(result.data)
                    setloading(true);
                    setTimeout(() => {
                        setloading(false);
                    }, 1000);
                    setcross(true);
            });
    }

  return (
    <div className="App">
      <header className="App-header">
          <nav className={classes.Topbar}>
          <ul className='d-flex justify-content-between'>
          <li style={{listStyle:"none"}} className={classes.Cname}>Food Corner</li>  
          <li onClick={getApiData} className="get pt-3"><a href="#user2" className="btn btn-outline-dark">Get Users </a></li>
          </ul>           
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src='/dish-1.jpg' alt='Food Preview'/>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Your Dish </h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="/dish-1.jpg" alt="dish-1"/>
            <img className={classes.ProductImage} src="/dish-2.jpg" alt="dish-2"/>
            <img className={classes.ProductImage} src="/dish-3.jpg" alt="dish-3"/>
            <img className={classes.ProductImage} src="/dish-4.jpg" alt="dish-4"/>
          </div>

          <button className={classes.PrimaryButton}>Order Now</button>
        </div>
      </div>
      <div className="get-user">
      {loading ? <div className="circle"><ReactBootStrap.Spinner className="spinner" animation="border" /></div> : ""}
        {loading ? "" : <ul className='card m-2'>
        {cross ?<p onClick={() => setloading(true)} className="close ">X</p> : "" }
        <div className='justify-content-around d-flex ' style={{backgroundColor:"#ffffff",}}>
             
        {data.map((item) => (
          
            <div className="person card" id="user2">   
                <img className="card-image-top" style={{
                  minWidth:"150px", height:"100%", 
                }} src={item.avatar} alt="users" srcset="" />
                <div className="p-2">
                <h1 className="h1">{item.first_name}</h1>
                <p className="p">{item.last_name}</p>
                <p className="p">{item.email}</p>
            </div>
            </div>
        ))}
        </div>
        
    </ul>}
    </div>
    </div>
    
  );
}

export default App;
