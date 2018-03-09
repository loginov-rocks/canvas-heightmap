'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {JSDOM} = require('jsdom');

const CanvasHeightmap = require('../src/CanvasHeightmap');

chai.use(chaiAsPromised);

const {assert} = chai;

// Provide testing environment with `window` and `Image` objects to support DOM
// and `usable` option to load images.
global.window = new JSDOM('', {resources: 'usable'}).window;
global.Image = window.Image;

const resources = {
  blackAndWhite: {
    url: 'https://raw.githubusercontent.com/1oginov/canvas-heightmap/master/test/resources/black-and-white.png',
    height: 256,
    width: 256,
  },
  unknown: {
    url: 'some-unknown-url',
  },
};

describe('CanvasHeightmap', () => {
  let ch;

  // Create new instance before each test.
  beforeEach(() => {
    ch = new CanvasHeightmap();
  });

  describe('use', () => {
    it('should load image if URL passed and create HTMLImageElement', () => {
      return ch.use(resources.blackAndWhite.url).
          then((source) => assert.strictEqual(source.constructor.name,
              'HTMLImageElement'));
    });

    it('should load image if URL passed and reject if error occurs', () => {
      return assert.isRejected(ch.use(resources.unknown.url));
    });

    it('should accept HTMLImageElement', () => {
      return ch.use(new Image()).
          then((source) => assert.strictEqual(source.constructor.name,
              'HTMLImageElement'));
    });

    it('should accept HTMLCanvasElement', () => {
      return ch.use(window.document.createElement('canvas')).
          then((source) => assert.strictEqual(source.constructor.name,
              'HTMLCanvasElement'));
    });

    it('should reject unknown argument type', () => {
      return assert.isRejected(ch.use(5));
    });
  });

  describe('draw', () => {
    it('should throw an error if source is not specified', () => {
      assert.throws(() => {
        ch.draw();
      });
    });

    it('should return HTMLCanvasElement', () => {
      return ch.use(resources.blackAndWhite.url).
          then(() => {
            const canvas = ch.draw();
            return assert.strictEqual(canvas.constructor.name,
                'HTMLCanvasElement');
          });
    });
  });

  describe('getArray', () => {
    it('should throw an error if canvas is not ready', () => {
      assert.throws(() => {
        ch.getArray();
      });
    });

    it('should return array with length equal to 4 * height * width', () => {
      return ch.use(resources.blackAndWhite.url).
          then(() => {
            ch.draw();
            const array = ch.getArray();
            return assert.strictEqual(array.length, 4 *
                resources.blackAndWhite.height * resources.blackAndWhite.width);
          });
    });

    it('should return cropped array with length equal to ' +
        '4 * (height / 2) * (width / 4)', () => {
      return ch.use(resources.blackAndWhite.url).
          then(() => {
            ch.draw();

            const {height, width} = resources.blackAndWhite;
            const length = 4 * (height / 2) * (width / 4);
            const array = ch.getArray(width / 8, height / 4, width / 4,
                height / 2);

            return assert.strictEqual(array.length, length);
          });
    });
  });
});
