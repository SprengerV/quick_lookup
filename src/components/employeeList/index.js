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
    componentDidUpdate(prevProps) {
        if (prevProps.employees !== this.props.employees) {
            
            this.nameSort()
        }
    }
    nameSortSwitch = async () => {
        switch (this.state.nameSort) {
            case "asc": 
                await this.setState({ nameSort: "desc" });
                break;
            case "desc":
                await this.setState({ nameSort: "asc" });
                break;
            default:
                await this.setState({ nameSort: "asc" });
        }
        this.nameSort();
    }
    nameSort = () => {
        const emps = this.props.employees;
        switch(this.state.nameSort) {
            case "asc":
                this.setState({
                    sorted: emps.sort((a, b) => a.name.last.localeCompare(b.name.last, 'en', { 'sensitivity': 'base' }))
                });
                break;
            case "desc":
                this.setState({
                    sorted: emps.sort((a, b) => b.name.last.localeCompare(a.name.last, 'en', { 'sensitivity': 'base' }))
                });
                break;
            default:
                this.setState({ sorted: emps });
        }
    }
    render() {
        return(
            <div>
                <ListHeader nameSort={this.state.nameSort} nameSortHandler={this.nameSortSwitch}/>
                {this.state.sorted.map((employee, i) => (
                    <Employee key={i} index={i} data={employee}/>
                ))}
            </div>
        );
    }
}

export default EmployeeList;