import React, { Component } from 'react';
import _ from 'lodash';

const Autocomplete = (props) => {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="form-group input-group bs-autocomplete-input">
                <input name="input"
                    className="form-control bs-autocomplete"
                    onChange={event => props.onInputChange(event.target.value)}
                    // onBlur={event => props.onInputFocusOut(event)}
                    value={props.term}
                    autoComplete="off"
                    placeholder="Type the first two characters of a city name..."
                />
                <div className="input-group-btn">
                    <button type="button"
                        className="btn btn-outline dropdown-toggle"
                        // data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"
                        onClick={event => props.onInputChange(event.target.value)}
                    >
                    </button>
                </div>
                <ul className={props.autoCompleteClass}>
                    { 
                        _.map(props.locations, (location, index) =>{
                            return (
                                    <li key={location.id}>
                                        <a href="#" onClick={event => props.onSelecteAutoSearch(location)}>{location.city}</a>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </form>
    )
}

export default Autocomplete;