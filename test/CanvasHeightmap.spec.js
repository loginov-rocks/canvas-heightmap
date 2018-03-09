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
  blackAndWhite: 'https://raw.githubusercontent.com/1oginov/canvas-heightmap/master/test/resources/black-and-white.png',
  unknown: 'some-unknown-url',
};

describe('CanvasHeightmap', () => {
  let ch;

  // Create new instance before each test.
  beforeEach(() => {
    ch = new CanvasHeightmap();
  });

  describe('use', () => {
    it('should load image if URL passed and create HTMLImageElement', () => {
      return ch.use(resources.blackAndWhite).
          then((source) => assert.strictEqual(source.constructor.name,
              'HTMLImageElement'));
    });

    it('should load image if URL passed and reject if error occurs', () => {
      return assert.isRejected(ch.use(resources.unknown));
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
      return ch.use(resources.blackAndWhite).
          then(() => {
            const canvas = ch.draw();
            return assert.strictEqual(canvas.constructor.name,
                'HTMLCanvasElement');
          });
    });
  });
});
