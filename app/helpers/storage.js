export const KEY = 'data'
export const setData = data => window.localStorage.setItem(KEY, JSON.stringify(data))
export const getData = data => window.localStorage.getItem(KEY)
