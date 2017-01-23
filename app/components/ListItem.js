import React, { PropTypes, Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

class ListItem extends Component {
  state = {
    isMessageShown: false,
    copied: false
  }

  toggleMessage = () => this.setState({
    isMessageShown: !this.state.isMessageShown,
    copied: false
  })

  onCopy = () => this.setState({ copied: true })

  render () {
    return (
      <tr
        onMouseEnter={this.toggleMessage}
        onMouseLeave={this.toggleMessage}
        className="ListItem"
      >
        <td className="List__url">
          <CopyToClipboard
            text={`http://shoooort.com/${this.props.item.shortcode}`}
            onCopy={this.onCopy}
          >
            <span className="ListItem__url-shortened">
              shoooort.com/<span className="_is-accented">{this.props.item.shortcode}</span>
            </span>
          </CopyToClipboard>

          <If condition={this.state.isMessageShown}>
            <span className="ListItem__clipboard-text _is-accented">
              {this.state.copied ? 'Copied!' : 'Click to copy'}
            </span>
          </If>

          <p className="ListItem__url-long">
            {this.props.item.longUrl}
          </p>
        </td>

        <td className="List__visits">
          {this.props.isLoading ? '...' : this.props.stats.visits}
        </td>

        <td className="List__last-seen">
          {this.props.isLoading ? '...' : this.props.stats.lastSeen}
        </td>
      </tr>
    )
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  stats: PropTypes.object,
  isLoading: PropTypes.bool
}

export default ListItem

