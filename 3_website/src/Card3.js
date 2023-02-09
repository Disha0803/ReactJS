import React from 'react'

const Card3 = ({ttl="hey there", btn="hello", cnt="hi"}) => (
    <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{ttl}</h5>
                <p className="card-text">
                  {cnt}
                </p>
                <a href="#" className="btn btn-success">{btn}</a>
              </div>
            </div>
);

export default Card3;