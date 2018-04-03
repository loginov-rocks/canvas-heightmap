# canvas-heightmap

[![Build Status](https://travis-ci.org/1oginov/canvas-heightmap.svg?branch=master)](https://travis-ci.org/1oginov/canvas-heightmap)
[![Coverage Status](https://coveralls.io/repos/github/1oginov/canvas-heightmap/badge.svg?branch=master)](https://coveralls.io/github/1oginov/canvas-heightmap?branch=master)
[![devDependencies Status](https://david-dm.org/1oginov/canvas-heightmap/dev-status.svg)](https://david-dm.org/1oginov/canvas-heightmap?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/1oginov/canvas-heightmap.svg)](https://greenkeeper.io/)

Under construction...

## Quick Start

### Install

TODO

### Use

TODO

## API

### `CanvasHeightmap`

Canvas Heightmap class.

**Kind**: global class

* [CanvasHeightmap](#CanvasHeightmap)
  * [new CanvasHeightmap()](#new_CanvasHeightmap_new)
  * [use(source) ⇒ Promise.<HTMLImageElement|HTMLCanvasElement>](#CanvasHeightmap+use)
  * [draw() ⇒ HTMLCanvasElement](#CanvasHeightmap+draw)
  * [getFlatArray([sx], [sy], [sw], [sh]) ⇒ Uint8ClampedArray](#CanvasHeightmap+getFlatArray)
  * [getFlatAverageArray([sx], [sy], [sw], [sh]) ⇒ Uint8ClampedArray](#CanvasHeightmap+getFlatAverageArray)
  * [getFlatChannelArray(channel, [sx], [sy], [sw], [sh]) ⇒ Uint8ClampedArray](#CanvasHeightmap+getFlatChannelArray)
  * [getFlatRgbaArray([sx], [sy], [sw], [sh]) ⇒ Array.<Uint8ClampedArray>](#CanvasHeightmap+getFlatRgbaArray)
  * [getAverageArray([sx], [sy], [sw], [sh]) ⇒ Array.<Uint8ClampedArray>](#CanvasHeightmap+getAverageArray)
  * [getChannelArray(channel, [sx], [sy], [sw], [sh]) ⇒ Array.<Uint8ClampedArray>](#CanvasHeightmap+getChannelArray)
  * [getRgbaArray([sx], [sy], [sw], [sh]) ⇒ Array.<Array.<Uint8ClampedArray>>](#CanvasHeightmap+getRgbaArray)

---

#### `new CanvasHeightmap()`

Canvas Heightmap constructor.

---

#### `use(source)` ⇒ `Promise.<HTMLImageElement|HTMLCanvasElement>`

Set canvas image source.

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type                                                          |
| --------- | ------------------------------------------------------------- |
| source    | `string` &#124; `HTMLImageElement` &#124; `HTMLCanvasElement` |

---

#### `draw()` ⇒ `HTMLCanvasElement`

Draw image source on canvas.

**Kind**: instance method of `CanvasHeightmap`

---

#### `getFlatArray([sx], [sy], [sw], [sh])` ⇒ `Uint8ClampedArray`

Get one-dimensional array containing the data in the RGBA order, with integer values between 0 and 255 (included).

**Kind**: instance method of `CanvasHeightmap`

**See**:
* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
* https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getFlatAverageArray([sx], [sy], [sw], [sh])` ⇒ `Uint8ClampedArray`

Get one-dimensional array containing the data by pixels with average over RGB channels, with integer values between 0
and 255 (included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getFlatChannelArray(channel, [sx], [sy], [sw], [sh])` ⇒ `Uint8ClampedArray`

Get one-dimensional array containing the data for specified channel, with integer values between 0 and 255 (included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| channel   | `string` |                | Channel: `red`, `green`, `blue` or `alpha`.                                                       |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getFlatRgbaArray([sx], [sy], [sw], [sh])` ⇒ `Array.<Uint8ClampedArray>`

Get two-dimensional array containing the data by pixels and RGBA array for each, with integer values between 0 and 255
(included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getAverageArray([sx], [sy], [sw], [sh])` ⇒ `Array.<Uint8ClampedArray>`

Get two-dimensional array containing the rows and cols data by pixels with average over RGB channels, with integer
values between 0 and 255 (included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getChannelArray(channel, [sx], [sy], [sw], [sh])` ⇒ `Array.<Uint8ClampedArray>`

Get two-dimensional array containing the rows and cols data for specified channel, with integer values between 0 and 255
(included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| channel   | `string` |                | Channel: `red`, `green`, `blue` or `alpha`.                                                       |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

---

#### `getRgbaArray([sx], [sy], [sw], [sh])` ⇒ `Array.<Array.<Uint8ClampedArray>>`

Get three-dimensional array containing the rows and cols data by pixels and RGBA array for each, with integer values
between 0 and 255 (included).

**Kind**: instance method of `CanvasHeightmap`

| Parameter | Type     | Default        | Description                                                                                       |
| --------- | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| [sx]      | `number` | `0`            | The x coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sy]      | `number` | `0`            | The y coordinate of the upper left corner of the rectangle from which the data will be extracted. |
| [sw]      | `number` | `this._width`  | The width of the rectangle from which the data will be extracted.                                 |
| [sh]      | `number` | `this._height` | The height of the rectangle from which the data will be extracted.                                |

## Contribution

If you want to contribute, please use the [dev](https://github.com/1oginov/canvas-heightmap/tree/dev) branch.
