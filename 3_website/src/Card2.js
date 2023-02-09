import React from "react";

const Card2 = ({content='sample text', title='sample title', btn='sample button'}) => {
    return(
        <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {content}
                </p>
                <a href="#" className="btn btn-success">{btn}</a>
              </div>
            </div>
          </div>
    );
};

export default Card2;