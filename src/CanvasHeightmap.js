/**
 * Canvas Heightmap class.
 */
class CanvasHeightmap {
  /**
   * Canvas Heightmap constructor.
   */
  constructor() {
    /**
     * Canvas image source.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource
     * @type {HTMLImageElement|HTMLCanvasElement|null}
     * @private
     */
    this._source = null;

    /**
     * Canvas.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
     * @type {HTMLCanvasElement|null}
     * @private
     */
    this._canvas = null;

    /**
     * Height of image source.
     * @type {number}
     * @private
     */
    this._height = 0;

    /**
     * Width of image source.
     * @type {number}
     * @private
     */
    this._width = 0;
  }

  /**
   * Set canvas image source.
   * @param {string|HTMLImageElement|HTMLCanvasElement} source
   * @return {Promise<HTMLImageElement|HTMLCanvasElement>}
   */
  use(source) {
    return new Promise((resolve, reject) => {
      if (typeof source === 'string') {
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = source;

        image.onerror = (error) => {
          reject(error);
        };

        image.onload = () => {
          this._source = image;
          resolve(this._source);
        };
      } else if ([
            'HTMLImageElement',
            'HTMLCanvasElement',
          ].indexOf(source.constructor.name) >= 0) {
        this._source = source;
        resolve(this._source);
      } else {
        reject('Unknown argument type');
      }
    });
  }

  /**
   * Draw image source on canvas.
   * @return {HTMLCanvasElement}
   */
  draw() {
    if (!this._source) {
      throw new Error('Source is not specified');
    }

    this._canvas = window.document.createElement('canvas');

    this._height = this._source.height;
    this._width = this._source.width;

    this._canvas.height = this._height;
    this._canvas.width = this._width;

    const context = this._canvas.getContext('2d');

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
     */
    context.drawImage(this._source, 0, 0);

    return this._canvas;
  }

  /**
   * Get one-dimensional array containing the data in the RGBA order, with
   * integer values between 0 and 255 (included).
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
   * @param {number} [sx=0] - The x coordinate of the upper left corner of the
   *                          rectangle from which the data will be extracted.
   * @param {number} [sy=0] - The y coordinate of the upper left corner of the
   *                          rectangle from which the data will be extracted.
   * @param {number} [sw=this._width] - The width of the rectangle from which
   *                                    the data will be extracted.
   * @param {number} [sh=this._height] - The height of the rectangle from which
   *                                     the data will be extracted.
   * @return {Uint8ClampedArray}
   */
  getFlatArray(sx = 0, sy = 0, sw = this._width, sh = this._height) {
    if (!this._canvas) {
      throw new Error('Canvas is not ready');
    }

    return this._canvas.getContext('2d').getImageData(sx, sy, sw, sh).data;
  }

  /**
   * Get two-dimensional array containing the data by pixels and RGBA array for
   * each, with integer values between 0 and 255 (included).
   * @param {number} [sx=0] - The x coordinate of the upper left corner of the
   *                          rectangle from which the data will be extracted.
   * @param {number} [sy=0] - The y coordinate of the upper left corner of the
   *                          rectangle from which the data will be extracted.
   * @param {number} [sw=this._width] - The width of the rectangle from which
   *                                    the data will be extracted.
   * @param {number} [sh=this._height] - The height of the rectangle from which
   *                                     the data will be extracted.
   * @return {Array<Uint8ClampedArray>}
   */
  getFlatRgbaArray(sx = 0, sy = 0, sw = this._width, sh = this._height) {
    const flatArray = this.getFlatArray(sx, sy, sw, sh);
    const flatRgbaArray = [];

    for (let i = 0; i < flatArray.length; i += 4) {
      flatRgbaArray.push(flatRgbaArray.slice(i, i + 4));
    }

    return flatRgbaArray;
  }
}

// Export class as a module to support requiring.
/* istanbul ignore next */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = CanvasHeightmap;
}
