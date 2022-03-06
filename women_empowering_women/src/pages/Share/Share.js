import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Share.css';
import ShareForm from "./ShareForm"

export default function Share () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result)
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  
    return (
      <div className="container">
          <h1 className='header'>Share Your Story</h1>
          {items.map(item =>(
            <div>
          <h1>{item.title}</h1>
          <small>By {item.name}</small>
          <img src={item.image} alt='tech'style={{width:'20%'}}/>
          <section>
            {item.body}
          </section>
          </div>
            ))}
          <ShareForm />
        </div>
    );
  
}
}