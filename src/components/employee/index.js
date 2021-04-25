import React from 'react';

function Employee() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-2 d-flex justify-content-center">
                <img alt="Employee photograph" height="100px" src="https://via.placeholder.com/200"></img>
            </div>
            <div className="col-3">
                LastName, FirstName
            </div>
            <div className="col-3">
                Location
            </div>
            <div className="col-3">
                email@email.com
            </div>
        </div>
    );
}

export default Employee;