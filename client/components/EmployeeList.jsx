






// EmployeeList.defaultProps = {};
// EmployeeList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     meteorCall:  PropTypes.func.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol



import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

const PER_PAGE = 20;

// import EmployeeList from './EmployeeList.jsx';
// import {EmployeeList} from './EmployeeList.jsx';
export class EmployeeList extends Component {

    componentWillMount() {
        this.page = 1;
    }


    constructor(props, context){
        super(props, context);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        Meteor.subscribe('employees',PER_PAGE * (this.page + 1));
        this.page += 1;
    }

    render(){
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map((e) => {
                        return (
                            <EmployeeDetail employee={e}
                                            key={e._id}/>
                        )
                    })}
                </div>
                <button className="btn btn-primary"
                        onClick={this.handleClick} >
                    Load More...
                </button>
            </div>
        );
    }
}

export default createContainer(
    () => {
        Meteor.subscribe('employees', PER_PAGE);
        return { employees: Employees.find({}).fetch() }
    },
    EmployeeList
);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')