import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(cards => <Card key={cards.headline} cards={cards}/> )
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
}

export default Cards;