import React from 'react';
import LocationSearch from './locationsearch.component'


import './summary.component.scss';

const Summary = (props) => {
    return (
        <div className="card synup-card summary-card">
            <div className="row summary">
                <div className="col-sm total">
                    <img src="./src/images/interactions-all.svg" />
                    <div>
                    <h5>330</h5>
                    Total Interations
                    </div>
                </div>
                <div className="col-sm new">
                    <img src="./src/images/interactions-new.svg" />
                    <div>
                    <h5>40</h5>
                    New Interations
                    </div>
                </div>
                <div className="col-sm positive">
                    <img src="./src/images/interactions-positive.svg" />
                    <div>
                        <h5>200</h5>
                        Positive Interations
                    </div>
                </div>
                <div className="col-sm negative">
                    <img src="./src/images/interactions-negative.svg" />
                    <div>
                    <h5>90</h5>
                    Negative Interations
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;