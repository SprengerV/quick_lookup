import React, { Component } from 'react';
import ListHeader from '../listHeader';
import Employee from '../employee';

class EmployeeList extends Component {
    state = {
        nameSort: "",
        sorted: []
    };

    componentDidMount() {
        this.setState({ sorted: this.props.employees });
    }
    nameSortHandler = () => {
        const emps = this.props.employees;
        switch (this.state.nameSort) {
            case "asc": 
                this.setState({
                    nameSort: "desc",
                    sorted: emps.sort((a, b) => b.name.last.localeCompare(a.name.last, 'en', { 'sensitivity': 'base' }))
                });
                break;
            case "desc":
                this.setState({
                    nameSort: "asc",
                    sorted: emps.sort((a, b) => a.name.last.localeCompare(b.name.last, 'en', { 'sensitivity': 'base' }))
                });
                break;
            default:
                this.setState({
                    nameSort: "asc",
                    sorted: emps.sort((a, b) => a.name.last.localeCompare(b.name.last, 'en', { 'sensitivity': 'base' }))
                });
        }
    }
    render() {
        return(
            <div>
                <ListHeader nameSort={this.state.nameSort} nameSortHandler={this.nameSortHandler}/>
                {this.state.sorted.map((employee, i) => (
                    <Employee key={i} index={i} data={employee}/>
                ))}
            </div>
        );
    }
}

export default EmployeeList;