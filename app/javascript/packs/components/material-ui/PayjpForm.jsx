import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class PayjpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.payjp = Payjp('pk_test_58e3a5f8f376dc6bc1b9c472')
    this.elements = this.payjp.elements()
    this.numberElement = this.elements.create('cardNumber')
    this.expiryElement = this.elements.create('cardExpiry')
    this.cvcElement = this.elements.create('cardCvc')
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.checkCards = this.checkCards.bind(this);
    this.cardChange = this.cardChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const style = {
      base: {
        background: 'red',
      },
      invalid: {
        color: 'red',
      }
    }
    this.numberElement.mount('#number-form', {style: style})
    this.expiryElement.mount('#expiry-form', {style: style})
    this.cvcElement.mount('#cvc-form', {style: style})
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  };

  handleClose() {
    this.setState({
      open: false
    });
  };

  onSubmit() {
    this.payjp.createToken(this.numberElement).then(function(r) {
      document.querySelector('#token').innerText = r.error ? r.error.message : r.id
    })
  }

  checkCards() {
    this.payjp.retrieveAvailability().then((response) => {
      if (response.error) {
        // handle error
      } else {
        console.log(response)
      }
    })
  }

  cardChange(event) {
    console.log(event)
  }


  render() {
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          支払い情報を入力
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">支払い情報</DialogTitle>
          <DialogContent>
            {/* <div id="number-form" className="payjs-outer"></div>
            <div id="expiry-form" className="payjs-outer"></div>
            <div id="cvc-form" className="payjs-outer"></div> */}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClose}>
              キャンセル
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <div id="number-form" className="payjs-outer" onChange={this.cardChange}></div>
        <div id="expiry-form" className="payjs-outer"></div>
        <div id="cvc-form" className="payjs-outer"></div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.onSubmit}>
          トークン作成
        </Button>
        <span id="token"></span>
        <Button
          variant="contained"
          color="primary"
          onClick={this.checkCards}>
          カード確認
        </Button>
        <p id="card-status"></p>
      </>
    );
  }
}

export default PayjpForm
