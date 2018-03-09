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
  }

  /**
   * Set canvas image source.
   * @param {string|HTMLImageElement|HTMLCanvasElement} source
   * @return {Promise}
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
}

// Export class as a module to support requiring.
/* istanbul ignore next */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = CanvasHeightmap;
}
