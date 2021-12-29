import React from "react";
import "./Popup.css";

const Popup = (props) => {
    return (
        <div className={props.active ? "popup active" : "popup"} 
             onClick={() => props.clearOrder()}>
            <div className="popup_content" onClick={e => e.stopPropagation()}>
                Ваше замовлення успішно оформлено!
            </div>
        </div>
    );
}

export default Popup;