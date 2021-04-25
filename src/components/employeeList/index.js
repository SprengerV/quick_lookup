import React, { Component } from 'react';
import ListHeader from '../listHeader';
import Employee from '../employee';

class EmployeeList extends Component {
    state = {
        nameSort: ""
    };

    nameSortHandler = () => {
        switch (this.state.nameSort) {
            case "asc":
              this.setState({ nameSort: "desc" });
              break;
            case "desc":
              this.setState({ nameSort: "asc" });
              break;
            default:
              this.setState({ nameSort: "asc" });
        }
    }
    render() {
        return(
            <div>
                <ListHeader nameSort={this.state.nameSort} nameSortHandler={this.nameSortHandler}/>
                <Employee/>
            </div>
        );
    }
}

export default EmployeeList;