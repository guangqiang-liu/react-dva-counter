/**
 * Created by guangqiang on 2017/12/16.
 */

export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add(count) {
      return count + 1
    },
    minus(count) {
      return count -1
    }
  }
}
