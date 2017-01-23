import React, { Component, PropTypes } from 'react'
import Button from '../components/Button'
import { shorten } from '../helpers/api'

class FormContainer extends Component {
  state = { value: '' }

  change = event => this.setState({ value: event.target.value })

  submit = (event) => {
    event.preventDefault()
    shorten(this.state.value)
      .then(({ data }) => this.props.onSubmitSuccess({
        longUrl: this.state.value,
        shortcode: data.shortcode
      }))
  };

  render = () => (
    <form onSubmit={this.submit} className="Form">
      <input
        type="text"
        placeholder="Paste the link you want to shorten here"
        value={this.state.value}
        onChange={this.change}
        className="Form__input"
      />

      <Button
        type="submit"
        disabled={!this.state.value.length}
        className="Form__button"
      >
        Shorten this link
      </Button>
    </form>
  )
}

FormContainer.propTypes = {
  onSubmitSuccess: PropTypes.func
}

export default FormContainer
