import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations, fetchReviews } from '../../actions'
import _ from 'lodash';
import './newsearch.component.scss';
import $ from 'jquery';

import Autocomplete from './autocomplete.component';
import ReviewsComponent from './reviews.component'
 
class LocationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '',
                   autocompleteVisible: false,
                   selected: ""
                 }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputFocusOut = this.onInputFocusOut.bind(this);
    this.handleSelectSearch = this.handleSelectSearch.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  onInputChange(value) {
    event.preventDefault();
    this.setState({ term: value });
    // this.props.fetchLocations(this.state.term);

    if(this.props.locations[0]){
      this.setState({autocompleteVisible: true})
    }
  }

  onInputFocusOut(e){
    setTimeout(()=>{
      this.setState({ autocompleteVisible: false });
    }, 1000)
  }

  handleSelectSearch(input) {
    console.log(input);
    this.props.fetchReviews("38e2c06c-2096-4794-8cdf-70e3329632e0");
    this.setState({ autocompleteVisible: false,  term: `${input.name} - ${input.city}, ${input.state}`  });
  }

  componentWillMount() {
    this.props.fetchLocations(this.state.term);
  }

  render() {
    const onInputChange = _.debounce(term => this.onInputChange, 300);
    if(!this.props.locations) {
      return <div>Loading...</div>
    }
    
    const autoCompleteClass = this.state.autocompleteVisible ?
    "bs-autocomplete-menu dropdown visible": "list-group dropdown bs-autocomplete-menu";

    return (
      <div>
        <Autocomplete 
                handleFormSubmit={this.handleFormSubmit}
                onInputChange={this.onInputChange}
                onInputFocusOut={this.onInputFocusOut}
                term={this.state.term}
                autoCompleteClass={autoCompleteClass}
                locations={this.props.locations}
                onSelecteAutoSearch={this.handleSelectSearch}
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
  })(LocationSearch)