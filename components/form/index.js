import { Component } from 'react';
import axios from 'axios';
import { isEmail } from 'validator';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeAlert = this.closeAlert.bind(this);

    this.state = this.getInitialState();

    this.fromAddress = 'durhamstoves@g*m*a*i*l.com'.replace(/\*/g, '');
  }

  getInitialState() {
    return {
      formData: {
        name: '',
        _replyTo: '',
        message: ''
      },
      alert: {
        message: '',
        isSuccess: true,
      }
    };
  }

  componentDidMount() {
    document.querySelector('form').reset();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      formData: { ...this.state.formData, [name]: value }
    });
  }

  componentDidUpdate(_, prevState) {
    const changedField = Object.keys(prevState.formData).filter(field => prevState.formData[field] !== this.state.formData[field])[0]
    const value = this.state.formData[changedField];

    if (changedField && value) this.validateField(changedField, value);
  }

  validateField(changedField, value) {
    const el = document.querySelector(`[name=${changedField}]`);
    let valid = true;

    if (el && el['type'] === 'email') {
      valid = isEmail(value);
    }

    value.length > 1 && valid ? el.parentNode.classList = 'validation valid' : el.parentNode.classList = 'validation invalid';
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name,_replyTo, message} = this.state.formData;

    if (name && _replyTo && message) {
      axios({
        url: `https://formspree.io/${this.fromAddress}`,
        method: 'POST',
        data: this.state.formData,
      }).then((res) => {
        document.querySelector('form').reset();
        this.setState(this.getInitialState);

        document.querySelectorAll('span.validation').forEach((el) => {
          el.classList = 'validation';
        });

        this.setState({
          alert: {
            message: 'Your message has been sent',
            isSuccess: true
          }
        });
      })
      .catch((error) => {
        this.setState({
          alert: {
            message: `${error}: There has been a problem sending your message, please try again`,
            isSuccess: false
          }
        });
      });
    }
  }

  closeAlert() {
    this.setState({
      alert: {
        message: null,
        isSuccess: false
      }
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={ this.handleSubmit }>

          { this.state.alert.message ?
              <div className={ `alert ${this.state.alert.isSuccess ? 'success' : 'error' }` }>
                <button onClick={ this.closeAlert }>&#10006;</button>
                { this.state.alert.message }
              </div>
          : null }

          <label>
            Name:
            <span className="validation"><input name="name" type="text" value={ this.state.name } onChange={ this.handleInputChange } /></span>
          </label>
          <label>
            Email address:
            <span className="validation"><input name="_replyTo" type="email" value={ this.state._replyTo } onChange={ this.handleInputChange } /></span>
          </label>
          <label>
            Message:
            <span className="validation"><textarea name="message" value={ this.state.message } onChange={ this.handleInputChange }></textarea></span>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
