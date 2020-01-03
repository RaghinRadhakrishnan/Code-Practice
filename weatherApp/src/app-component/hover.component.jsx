import React from 'react';
const Hover = props => {
    return(
        <form onSubmit={props.loadWeather}>
        <div className="container py-5">
            <div className="row align-items-center">
                <h2 className="pr-4">Bangalore</h2>
                <h2 className="pr-4">Coimbatore</h2>
                <h2 className="pr-4">Chennai</h2>
                <h2 className="pr-4">Palakkad</h2>
            </div>
        </div>
        </form>
    );
};
export default Hover;
