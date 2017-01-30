var deepSlice = require('./')

// Variables
var polygonZ = [[[1, 2, 3], [4, 5, 6]]]
var lineZ = [[1, 2, 3], [4, 5, 6]]
var pointZ = [1, 2, 3]
var polygon = [[[1, 2], [4, 5]]]
var line = [[1, 2], [4, 5]]
var point = [1, 2]

describe('deepSlice', () => {
  test('polygonZ', () => expect(deepSlice(polygonZ, 0, 2)).toEqual(polygon))
  test('lineZ', () => expect(deepSlice(lineZ, 0, 2)).toEqual(line))
  test('pointZ', () => expect(deepSlice(pointZ, 0, 2)).toEqual(point))
  test('polygon', () => expect(deepSlice(polygon, 0, 2)).toEqual(polygon))
  test('line', () => expect(deepSlice(line, 0, 2)).toEqual(line))
  test('point', () => expect(deepSlice(point, 0, 2)).toEqual(point))
})
