import React from 'react';
import Shipment from '../Shipment/Shipment';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './Order.css';

class Order extends React.Component {

    renderOrder = key => {
        const cupcake = this.props.cupcakes[key];
        const count = this.props.order[key];

        return (
            <CSSTransition classNames="order" key={key} timeout={{enter: 600, exit: 500}}>
                <li key={key}>
                    <span className="order_count">{count}</span>
                    <span className="order_name">{cupcake.name}</span>
                    <span className="order_price">{count * cupcake.price} грн</span>
                    <button onClick={() => this.props.deleteFromOrder(key)} className="cansel_btn">&times;</button>
                </li>
            </CSSTransition>
        )
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prev, key) => {
            const cupcake = this.props.cupcakes[key];
            const count = this.props.order[key];
            
            return prev + cupcake.price * count;
        }, 0);

        return (
            <div className="order_wrap">
                <h2 className="order_title">Ваше замовлення</h2>
                <div className="order_container">
                    <TransitionGroup component="ul" className="order">
                        {orderIds.map(this.renderOrder)}
                    </TransitionGroup>
                    
                    {total > 0 
                            ? <Shipment total={total} clearOrder={this.props.clearOrder}/> 
                            : (
                                <div className="order_empty">
                                    Додайте капкейки до замовлення
                                </div>
                            )}
                    
                </div>
            </div>
        );
    }
}

export default Order;