import React from 'react';
import './Cupcake.css';

class Cupcake extends React.Component{
    render() {
        const {image, name, desc, set, price} = this.props.details;

        return (
            <li className='cupcake'>
                <div className='cupcake_img'>
                    <img src={image} alt='name'/>
                </div>
                <div className='cupcake_details'>
                    <h3 className='cupcake_name'>{name}</h3>
                    <p className='cupcake_desc'>{desc}</p>
                    <span className='cupcake_set'>1 набір - {set} шт</span>
                    <span className='cupcake_price'>{price} грн</span>
                    <button className='buttonOrder violet_btn'
                            onClick={() => this.props.addToOrder(this.props.index)}>
                                Замовити
                    </button>
                </div>
            </li>
        );
    }
} 

export default Cupcake;