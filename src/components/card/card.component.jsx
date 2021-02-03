import React from 'react';
import '../card/card.styles.css';

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card-container'>
                <img alt='robohash monsters' src={`https://robohash.org/${ this.props.monster.id }?set=set2&size=180x180`}/>
                <h2> { this.props.monster.name }</h2>
                <p> { this.props.monster.email }</p>
            </div>
        );
    }
    
}

export default Card;