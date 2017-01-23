import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import ListTable from './ListTable'
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
          <ListTable data={data} />
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
