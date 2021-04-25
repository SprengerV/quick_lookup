import React from 'react';
import './employee.css'

function Employee(props) {
    const e = props.data;
    let rowClass = 'row d-flex justify-content-center employee';
    props.index % 2 === 1 ?
        rowClass += ' yellow'
        :
        rowClass += ' white'
    return (
        <div className={rowClass}>
            <div className="col-2 d-flex justify-content-center">
                <img alt="Employee photograph" height="100px" src={e.picture.thumbnail}></img>
            </div>
            <div className="col-3">
                {e.name.last}, {e.name.first}
            </div>
            <div className="col-3">
                {e.location.city}, {e.location.state}, {e.location.country}
            </div>
            <div className="col-3">
                {e.email}
            </div>
        </div>
    );
}

export default Employee;