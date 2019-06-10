/**
 * 持久化存储 state 数据
 *
 * 主要将数据存储进sessionStorage
 */

const persistent = store => next => action => {
  var result = next(action)
  var data = store.getState()
  for (var key in data) {
    var v = data[key]
    if (typeof data[key] === 'object') v = JSON.stringify(v)
    sessionStorage.setItem(key, v)
  }
  console.log('The data has been stored')
  return result
}

export default persistent
