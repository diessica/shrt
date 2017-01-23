import distanceInWords from 'date-fns/distance_in_words'

export const transformStats = ({
  redirectCount,
  lastSeenDate,
  startDate
}) => ({
  visits: redirectCount,
  lastSeen: distanceInWords(lastSeenDate, startDate)
})
