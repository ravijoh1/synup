import React, { Component } from 'react';
import _ from 'lodash';

import './reviews.component.scss';

const ReviewsComponent = (props) => {
    if(!Object.keys(props.reviews).length) {
        return (<div></div>)
    }

    const render = (item) => {
        return(
            <li key={item.id} className="media">
                <div className="mr-3 review-left">
                    <div className="name-image">
                        <div className="col-l">
                            <img src="./src/images/facebook.com.png" width="45" alt="Generic placeholder image" />
                        </div>
                        <div className="col-r">
                                <p>{item.author_name}</p>
                                <span></span>
                        </div>
                    </div>
                    <p className="date">Rated on {item.date}</p>
                </div>
                <div className="media-body">
                    <h6 className="mt-0 mb-1 title">{item.title}</h6>
                    <p className="comment"><i>{item.comment}</i></p>
                    <button type="button" className="btn btn-primary synup-primary-btn">Respond</button>
                </div>
            </li>
        )
    }

    return (
        <div className="reviews card synup-card">
            <div className="card-header">
                All Interations in the past month from All platforms()
            </div>
            <div className="card-main">
                <ul className="list-unstyled">
                    {
                        _.map(props.reviews, (review, index) => {
                            
                            return (
                                <span key={index}>
                                    {
                                        review.map((item) => {
                                            if (item.rating > 3 && props.filter === "positive") {
                                                return render(item);
                                            } else if(item.rating <= 3 && props.filter === "negative") {
                                                return render(item);
                                            } else {
                                                return render(item);
                                            }
                                        })
                                    }
                                </span>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ReviewsComponent;