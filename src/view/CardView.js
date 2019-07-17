import React from 'react';

class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.key = props.card.toString();
    this.card = card;
  }

  render() {
      return <div>{this.card.suite} - {this.card.value}</div>
  }
}

export default CardView;
