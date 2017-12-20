import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations, fetchReviews } from '../../actions'
import _ from 'lodash';
import './newsearch.component.scss';

import ReviewsComponent from './reviews.component';
import LocationSearch from './locationsearch.component';
import Summary from './summary.component';
 
class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedFilter: "all", selectedPlatform: "all"}

    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handlePlatformClick = this.handlePlatformClick.bind(this)

    this.state.filters = {
        all : {
            type: "all",
            imagePath: "interactions-all.svg",
            text: "Total Interations"
        },
        newreview : {
            type: "new",
            imagePath: "interactions-new.svg",
            text: "New Interations"
        },
        positive : {
            type: "positive",
            imagePath: "interactions-positive.svg",
            text: "Positive Interations"
        },
        negative : {
            type: "negative",
            imagePath: "interactions-negative.svg",
            text: "Negative Interations"
        }
    }
  }

  handleFilterClick(filter) {
    this.setState({
      selectedFilter: filter 
    })
  }

  componentWillMount() {
    
  }

  isNewReview(reviewDate) {
    let d1 = new Date();
    d1.setMonth(d1.getMonth() - 1);
    
    let fullDate = reviewDate.split("-"),
        year = parseInt(fullDate[0]),
        month = parseInt(fullDate[1]),
        date = parseInt(fullDate[2]);
    
    let d2 = new Date(year, month, date);

    return d1 < d2;
  }
  
  handlePlatformClick(field) {
    this.setState({selectedPlatform: field})
  }

  render() {
    if(!Object.keys(this.props.reviews).length) {
        return (<div className="container">Please select the place from above search to display content</div>)
    }

    var filter = this.state.selectedFilter;

    const reviews = (review, field) => {
        return review.map((item) => {
          if (item.rating > 3 && filter === "positive") {
              return <ReviewsComponent item={item} image={field} />;
          } if (item.rating <= 3 && filter === "negative") {
              return <ReviewsComponent item={item} image={field} />;
          } if (filter === "all") {
              return <ReviewsComponent item={item} image={field} />;
          } if (this.isNewReview(item.date) && filter === "new") {
              return <ReviewsComponent item={item} image={field} />;
          }
        })
    }

    const reviewsSinglePlatform = (item) => {
          if (item.rating > 3 && filter === "positive") {
              return <ReviewsComponent item={item} image={this.state.selectedPlatform} />;
          } if (item.rating <= 3 && filter === "negative") {
              return <ReviewsComponent item={item} image={this.state.selectedPlatform} />;
          } if (filter === "all") {
              return <ReviewsComponent item={item} image={this.state.selectedPlatform} />;
          } if (this.isNewReview(item.date) && filter === "new") {
              return <ReviewsComponent item={item} image={this.state.selectedPlatform} />;
          }
    }

    const renderList = () => {
        const pf = this.state.selectedPlatform
        if( pf === "all") {
            return _.map(this.props.reviews, reviews);
        }
        else {
            return _.map(this.props.reviews[pf], reviewsSinglePlatform);
        }
    }

    const summaryTotal = () => {
        let pf = this.state.selectedPlatform;
      var all = 0, positive = 0, negative = 0, newreview = 0, platform = {}, count = 0;
      _.forEach(this.props.reviews, (review, field) => {
        review.map((item) => {
          if (item.rating > 3) positive++;

          if (item.rating <= 3) negative++;
          
          if (item) all++;
          
          if (this.isNewReview(item.date)) newreview++;
        })
      })

        _.forEach(this.props.reviews, (review, field) => {
            if(field !== platform[field]) {
                platform[field] = count
            }
            review.map((item) => {
                platform[field]++
            })
        })

      return {all,
        newreview,
        negative,
        positive,
        platform
    }
      
    }

    return (
      <div className="container">
          <Summary
            filterClick={this.handleFilterClick}
            filters={this.state.filters}
            selectedFilter={filter}
            count={summaryTotal()}
          />
          <div className="reviews card synup-card">
             <div className="card-header">
                 All Interations from
                 <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.selectedPlatform} ({summaryTotal().platform[this.state.selectedPlatform]})
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={(e) => this.handlePlatformClick("all")} href="#">All Platforms ({summaryTotal()["all"]})</a>
                        {
                            _.map(this.props.reviews, (item, field) => {
                                return <a key={field} onClick={(e) => this.handlePlatformClick(field)} className="dropdown-item" href="#">{field}  ({summaryTotal().platform[field]})</a>;
                            })
                        }
                    </div>
                </div>
             </div>
             <div className="card-main">
                 <ul className="list-unstyled">
                    {
                        renderList()
                    }
                  </ul>
              </div>
          </div>
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