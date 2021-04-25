import React, { Component } from 'react';
import ListHeader from '../listHeader';
import Employee from '../employee';
import { isThisTypeNode } from 'typescript';

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
                {this.props.employees.map((employee, i) => (
                    <Employee key={i} index={i} data={employee}/>
                ))}
            </div>
        );
    }
}

export default EmployeeList;