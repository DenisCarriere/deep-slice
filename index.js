/**
 * Recursive Array.prototype.slice()
 *
 * @param {Array} items Array input
 * @param {number} start The beginning of the specified portion of the array.
 * @param {number} end The end of the specified portion of the array.
 * @returns {Array} Returns a section of an array.
 * @example
 * deepSlice([[10, 20, 30], [40, 50, 60]], 0, 2)
 * //=[[10, 20], [40, 50]]
 */
function deepSlice (items, start, end) {
  if (typeof items[0] !== 'object') { return items.slice(start, end) }

  var container = []
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    container.push(deepSlice(item, start, end))
  }
  return container
}
module.exports = deepSlice
