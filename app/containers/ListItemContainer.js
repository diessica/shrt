import React, { PropTypes, Component } from 'react'
import { fetchStats } from '../helpers/api'
import ListItem from '../components/ListItem'

class ListItemContainer extends Component {
  state = {
    isLoading: false,
    stats: {}
  }

  componentDidMount () {
    this.fetchStats(this.props.item.shortcode)
  }

  fetchStats = (shortcode) => {
    this.setState({ isLoading: true })

    return fetchStats(shortcode)
      .then(({ data }) => this.setState({
        stats: data,
        isLoading: false
      }))
      .catch(() => this.setState({ isLoading: false }))
  }

  render = () => (
    <ListItem
      className="ListItem"
      item={this.props.item}
      isLoading={this.state.isLoading}
      stats={this.state.stats}
    />
  )
}

ListItemContainer.propTypes = {
  item: PropTypes.object
}

export default ListItemContainer

