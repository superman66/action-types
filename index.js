/**
 * 创建带有 namespace 的 Action Type
 * @param {*} namespace
 * @param {*} constants
 */
export function createActionTypes(namespace, constants) {
  if (typeof namespace !== 'string') {
    throw Error('`namespace` expect string type')
  }

  if (!Array.isArray(constants)) {
    throw Error('`constants` expect array type')
  }
  return Object.freeze(
    constants.reduce((obj, constant) => {
      obj[constant] = `${namespace}/${constant}`
      return obj
    }, {}),
  )
}
