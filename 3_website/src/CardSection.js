import React from "react"
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const CardSection = () =>{
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card1 title="Myself" button="My Button" content="I am M Disha."/>
          </div>
          <Card2 />
          <div className="col-4">
            <Card3 cnt="Every little smile can touch somebody's heart. No one is born happy, but all of us are born with the ability to create happiness."/>
          </div>
        </div>
      </div>
    </section>
    );
};

export default CardSection;