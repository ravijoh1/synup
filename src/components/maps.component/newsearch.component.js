import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations, fetchReviews } from '../../actions'
import _ from 'lodash';
import './newsearch.component.scss';
import $ from 'jquery';

import ReviewsComponent from './reviews.component';
import LocationSearch from './locationsearch.component';
import Summary from './summary.component';
 
class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedFilter: "all"}

    this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  handleFilterClick(filter) {
    this.setState({
      selectedFilter: filter 
    })
    // console.log(`Clicked: ${filter} : ${this.state.selectedFilter}`);
  }

  render() {
    var filter = this.state.selectedFilter;

    
    const reviews = _.map(this.props.reviews, (review, index) => {
      return review.map((item) => {
        if (item.rating > 3 && filter === "positive") {
            console.log("from render:", item.rating);
            return item;
        } else if(item.rating <= 3 && filter === "negative") {
            console.log("from render:", item.rating);
            return item;
        } else {
            return item;
        }
      })
    })


    return (
      <div className="container">
          <Summary filterClick={this.handleFilterClick} reviews={this.props.reviews} />
          <ReviewsComponent
            reviews={this.props.reviews}
            filter={this.state.selectedFilter}
          />
      </div>
    )
  }
}

function mapStateToProps({locations, reviews}, ownProps) {
  return {
    locations,
    reviews
  }
}

export default connect(mapStateToProps, {
    fetchLocations,
    fetchReviews
  })(SimpleForm)