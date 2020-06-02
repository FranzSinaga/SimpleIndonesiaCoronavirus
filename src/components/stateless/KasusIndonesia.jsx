import React from 'react';

const KasusIndonesia = (props) => {
    return(
        <div class={props.pref}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.jumlah}</p>
            </div>
        </div>
    )
}

export default KasusIndonesia;