import React, { Component } from 'react'
import List from '../components/List'
import FormContainer from './FormContainer'
import { setData, getData } from '../helpers/storage'

class AppContainer extends Component {
  state = {
    data: []
  }

  clearData = () => {
    this.setState({ data: [] })
    setData([])
  }

  addItem = (item) => {
    const data = [item].concat(this.state.data)
    this.setState({ data })
    setData(data)
  }

  componentDidMount () {
    const data = getData()
    if (data) this.setState({ data: JSON.parse(data) })
  }

  render = () => (
    <main className="App">
      <header className="App__header">
        <h1 className="logo">Shooooort</h1>
        <p className="slogan">The link shortener with a long name</p>
      </header>

      <FormContainer
        onSubmitSuccess={this.addItem}
      />

      <List
        onClear={this.clearData}
        data={this.state.data}
      />
    </main>
  )
}

export default AppContainer

