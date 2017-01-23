import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import ListItemContainer from '../containers/ListItemContainer'
import Button from './Button'

const List = ({ onClear, data, isLoading }) => (
  <div className="List">
    <header className="List__header">
      <h1 className="title">Previously shortened by you</h1>

      <If condition={data.length}>
        <Button kind="secondary" onClick={onClear}>Clear history</Button>
      </If>
    </header>

    <VelocityTransitionGroup
      enter={{ animation: 'fadeIn' }}
      runOnMount
    >
      <Choose>
        <When condition={data.length}>
          <table className="table">
            <thead>
              <tr>
                <th className="List__url">Link</th>
                <th className="List__visits">Visits</th>
                <th className="List__last-seen">Last Visited</th>
              </tr>
            </thead>

            <VelocityTransitionGroup
              component="tbody"
              enter={{ animation: 'fadeIn', display: 'table-row' }}
              leave={{ animation: 'fadeOut', display: 'table-row' }}
              runOnMount
            >
              <For each="item" of={data} index="index">
                <ListItemContainer
                  key={index}
                  item={item}
                />
              </For>
            </VelocityTransitionGroup>
          </table>
        </When>

        <When condition={isLoading}>
          <span>Loading...</span>
        </When>

        <Otherwise>
          <h2>No links yet :-(</h2>
          <p>Shorten your first link by entering an URL in the input above!</p>
        </Otherwise>
      </Choose>
    </VelocityTransitionGroup>
  </div>
)

export default List

List.propTypes = {
  onClear: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
}
