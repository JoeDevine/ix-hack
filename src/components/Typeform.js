import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';

class Typeform extends Component {
    componentDidMount() {
        typeformEmbed.makePopup('https://alex324816.typeform.com/to/e3YEST', {
            mode: 'popup',
            autoClose: 3000,
            hideHeaders: true,
            hideFooters: true,
            onSubmit: () => {
                console.log('typeform submitted');
            }
        }).open();
    }
    render() {
        return (<div className="typeform-container"></div>);
    }
}

export default Typeform;