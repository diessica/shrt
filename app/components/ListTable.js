import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import ListItemContainer from '../containers/ListItemContainer'

const ListTable = ({ data }) => (
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
)

export default ListTable

ListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}
