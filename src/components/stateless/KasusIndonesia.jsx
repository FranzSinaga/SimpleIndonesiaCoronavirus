import React from 'react';

const KasusIndonesia = (props) => {
    return(
        <div className={props.pref}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.jumlah}</p>
            </div>
        </div>
    )
}

export default KasusIndonesia;