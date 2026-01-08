import { useEffect, useState } from 'react';
import Carousel from './Carosil';
import Footer from './Footer';
import Aboutin from './Aboutin';

export default function Bv() {
  const [api, setApi] = useState([]);
  const [visible, setVisible] = useState(6); 
  useEffect(() => {
     fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
     .then(data => setApi(data));
  }, []);
  const loadMore = () => {
    setVisible(prev => prev + 6);
  };
  return (
    <>
      <Carousel />
      <Aboutin />
      <div className="container mt-5">
        <h3 className="d-flex justify-content-center M">Menu</h3>
        <div className="row g-4">
          {api.slice(0, visible).map(item => (
            <div className="col-md-4" key={item.id}>
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <strong>Ingredients:</strong>{" "}
                  </p>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visible < api.length && (
          <div className="text-center men mt-4">
            <button className="btn btn-dark" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
