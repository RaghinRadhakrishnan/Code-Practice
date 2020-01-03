import React from "react";
const Weather = (props) => {
    return(
        <div className="container pt-4 text-light">
            <div className="cards">
                <h1>{props.city}</h1>
                    <div className="py-4">
                        <i className={`wi ${props.weatherIcon} display-1`}></i>
                        {props.temp_celcius ? (<h1 className="py-4">{props.temp_celcius}&deg;</h1>):null}
                        {varTemp(props.temp_max,props.temp_min)}
                        <h4 className="py-2">{props.description}</h4>
                    </div>
                </div>
            </div>
  );
};
function varTemp(min,max) {
    if(min && max){
        return(
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
};
};
export default Weather; 