import React from 'react';
import "../styling/form.style.css"

const Form = props => {
    return(
        <div className="container">
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-sm-3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                    </div>
                    <div className="col-sm-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                    </div>
                    <div className="col-md-3">
                    <button className="btn btn-success">Weather Report</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Form;