import React from 'react';
import PropTypes from 'prop-types';
// import EmployeeDetail from './EmployeeDetail.jsx';
// const EmployeeDetail = (props) => {
const EmployeeDetail = ({employee}) => {
    const {name, email, phone, avatar} = employee;

    const methodName = (e) => {
        //
    }

    return (
        <div className="employee-detail thumbnail">
            {/*<a onClick={methodName}>Do It</a>       // note no need to call 'this'*/}
            <img src={avatar}/>
            <div className="caption">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        </div>
    );
};


// EmployeeDetail.defaultProps = {};
// EmployeeDetail.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default EmployeeDetail;
