import React from 'react';

function listHeader(props) {
    let nameDiv;
    let nameBtn;
    switch (props.nameSort) {
        case ('asc'):
            nameDiv = "dropup";
            nameBtn = "btn-outline-danger dropdown-toggle"
            break;
        case ('desc'):
            nameDiv = "dropdown";
            nameBtn = "btn-outline-danger dropdown-toggle"
            break;
        default:
            nameDiv = "";
            nameBtn = "btn-light"
    }

    return (
        <div className="row d-flex justify-content-center">
            <span className="nav-item col-2 text-center">Photo</span>
            <div className={nameDiv + ' nav-item col-3 text-center'}>
                <button onClick={props.nameSortHandler} className={'btn ' + nameBtn} type="button">
                    Name
                </button>
            </div>
            <span className="nav-item col-3 text-center">Location</span>
            <span className="nav-item col-3 text-center">Email</span>
        </div>
    );
}

export default listHeader;