// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from './actionCreators';
import Header from './Header';
import Spinner from './Spinner';

class Details extends React.Component {
  componentDidMount() {
    if (!this.props.rating) this.props.getAPIData();
  }

  props: {
    show: Show,
    rating: string,
    getAPIData: Function
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const rating = this.props.rating;
    const ratingComponent = rating ? <h3>rating</h3> : <Spinner />;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) =>  {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {}
  return {
    rating: apiData.rating
  }
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
