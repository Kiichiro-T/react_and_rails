import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class PayjpForm extends React.Component {
  constructor(props) {
    super(props);
    this.payjp = Payjp('pk_test_58e3a5f8f376dc6bc1b9c472')

    // elementsを取得します。ページ内に複数フォーム用意する場合は複数取得ください
    this.elements = this.payjp.elements()

    // 入力フォームを分解して管理・配置できます
    this.numberElement = this.elements.create('cardNumber')
    this.expiryElement = this.elements.create('cardExpiry')
    this.cvcElement = this.elements.create('cardCvc')

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.numberElement.mount('#number-form')
    this.expiryElement.mount('#expiry-form')
    this.cvcElement.mount('#cvc-form')
  }

  // ボタンが押されたらtokenを生成する関数を用意します
  onSubmit () {
    this.payjp.createToken(this.numberElement).then(function(r) {
      document.querySelector('#token').innerText = r.error ? r.error.message : r.id
    })
  }


  render() {
    return (
      <>
        <div id="number-form" className="payjs-outer"></div>
        <div id="expiry-form" className="payjs-outer"></div>
        <div id="cvc-form" className="payjs-outer"></div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.onSubmit}>
          トークン作成
        </Button>
        <span id="token"></span>
      </>
    );
  }
}

export default PayjpForm
