/**
 * Recursive Array.prototype.slice()
 *
 * @param {Array} items Array input
 * @param {number} start The beginning of the specified portion of the array.
 * @param {number} end The end of the specified portion of the array.
 * @returns {Array} Returns a section of an array.
 * @example
 * deepSlice([[3, 2, 1], [4, 5, 6]], 0, 2)
 * //=[[3, 2], [4, 5]]
 */
function deepSlice (items, start, end) {
  if (typeof (items[0]) !== 'object') { return items.slice(start, end) }
  return items.map(item => deepSlice(item, start, end))
}
module.exports = deepSlice
