import React from 'react';
import LocationSearch from './locationsearch.component';
import _ from 'lodash';

import './summary.component.scss';

const Summary = (props) => {
    
    const renderFilters = (filter, field) => {
        const className = props.selectedFilter === filter.type ? "col-sm total selected" : "col-sm total";
        return (
            <div key={filter.type} className={className} onClick={() => props.filterClick(filter.type)}>
                <img src={`./src/images/${filter.imagePath}`} />
                <div>
                    <h5>{props.count[field]}</h5>
                    {filter.text}
                </div>
            </div>
        )
    }

    return (
        <div className="card synup-card">
            <div className="row summary">
                {
                    _.map(props.filters, renderFilters)
                }
            </div>
        </div>
    )
}

export default Summary;