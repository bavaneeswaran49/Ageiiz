import { useEffect, useState } from 'react';
import '../App.css'
export default function Mooter() {
  const [api, setApi] = useState([]);
  const [visible, setVisible] = useState(6);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => {
        setApi(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const loadMore = () => {
    setVisible(prev => prev + 6);
  };
if (loading) {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
}


  return (
    <div className="container mt-4">
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
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible < api.length && (
        <div className="text-center mt-4 men">
          <button className="btn btn-dark" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
