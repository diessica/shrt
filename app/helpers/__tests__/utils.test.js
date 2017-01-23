import test from 'ava'
import { transformStats } from '../utils'

test('transform stats response properly', t => {
  const data = {
    startDate: '2015-12-17T16:05:00.020Z',
    lastSeenDate: '2017-01-21T11:42:53.847Z',
    redirectCount: 16
  }

  t.deepEqual(transformStats(data), {
    visits: 16,
    lastSeen: 'about 1 year'
  })
})
