import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class DoctorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }

    render() {
        return (
            <div className="row">
              Card
        </div>);
    }
}

export default DoctorCard
