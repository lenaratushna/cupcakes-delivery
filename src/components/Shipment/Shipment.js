import React, {useState} from "react";
import Popup from "../Popup/Popup";
import "./Shipment.css";

const Shipment = (props) => {

    const {total, clearOrder} = props;
    const shipping = total > 0 && total < 900 ? 120 : 0;
    const [popupActive, setPopupActive] = useState(false);

    return (
        <>
            <div className="shipping">Доставка: {shipping === 0 ? 'безкоштовнa' : `${shipping} грн`}</div>
            <div>{total < 900 ? `*замовте ще на ${900 - total} грн для безкоштовної доставки` : null}</div>
            <div className="total">Усього: {total + shipping} грн</div>
            <button onClick={() => setPopupActive(true)} 
                    className="payBtn violet_btn">Оформити замовлення</button>
            <Popup active={popupActive}
                   setActive={setPopupActive}
                   clearOrder={clearOrder}
            />
        </>
    );
}

export default Shipment;