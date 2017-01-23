import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import ListItem from '../ListItem'

test('show clipboard message when the item is hovered', t => {
  const wrapper = shallow(
    <ListItem
      item={{
        longUrl: 'https://github.com/',
        shortcode: '09c34d'
      }}
      stats={{
        visits: 20,
        lastSeen: '1 day ago'
      }}
    />
  )

  wrapper.simulate('mouseenter')
  t.is(wrapper.find('.ListItem__clipboard-text').text(), 'Click to copy')
})
