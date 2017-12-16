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

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(content) {

  }

  render() {
    return (
      <div className="container">
          <Summary filterClick={this.handleFilterClick} />
          <ReviewsComponent reviews={this.props.reviews} />
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