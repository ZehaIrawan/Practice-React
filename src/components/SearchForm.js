import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class SearchForm extends Component {
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
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input type="text"/>
                <h3>Email:
                </h3>
                   <input type="email"/>
                <h3>Phone:
                </h3>
                   <input type="number"/>
                <h3>Blog URL:
                </h3>
                   <input type="text"/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default SearchForm
