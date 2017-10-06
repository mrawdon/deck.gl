/* eslint-disable max-len */
import {experimental} from 'deck.gl';
import {GL} from 'luma.gl';

import dataSamples from '../immutable-data-samples';

const {MeshLayer, PathOutlineLayer, PathMarkerLayer} = experimental;
import Arrow2DGeometry
  from '../../../../src/experimental-layers/path-marker-layer/arrow-2d-geometry';

// const arrowDataMeters = [
//   {position: [0, 0], angle: 0},
//   {position: [10, 10], angle: 80},
//   {position: [20, 20], angle: 190},
//   {position: [30, 10], angle: 280}
// ];

const arrowDataLngLat = [
  {position: [-122.4111557006836, 37.774879455566406], angle: 0},
  {position: [-122.41878509521484, 37.75032043457031], angle: 70},
  {position: [-122.43194580078125, 37.75153732299805], angle: 212}
];

const MeshLayerExample = {
  layer: MeshLayer,
  props: {
    data: arrowDataLngLat,

    // data: arrowDataMeters,
    // coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    // coordinateOrigin: dataSamples.positionOrigin,

    mesh: new Arrow2DGeometry(),
    sizeScale: 200
  }
};

const PathOutlineExample = {
  layer: PathOutlineLayer,
  // getData: () => dataSamples.zigzag,
  getData: () => dataSamples.routes,
  props: {
    id: 'path-outline-layer',
    opacity: 0.6,
    // getPath: f => f.path,
    getPath: f => [f.START, f.END],
    getColor: f => [128, 0, 0],
    getZLevel: f => Math.random() * 255,
    getWidth: f => 10,
    widthMinPixels: 1,
    pickable: true,
    strokeWidth: 5,
    widthScale: 10,
    autoHighlight: true,
    highlightColor: [255, 255, 255, 255],
    parameters: {
      blendEquation: GL.MAX
    }
  }
};

const PathMarkerExample = {
  layer: PathMarkerLayer,
  getData: () => dataSamples.routes,
  props: {
    id: 'path-outline-layer',
    opacity: 0.6,
    // getPath: f => f.path,
    getPath: f => [f.START, f.END],
    getColor: f => [230, 230, 230],
    getZLevel: f => Math.random() * 255,
    getWidth: f => 10,
    widthMinPixels: 1,
    pickable: true,
    strokeWidth: 5,
    widthScale: 10,
    autoHighlight: true,
    highlightColor: [255, 255, 255, 255],
    parameters: {
      blendEquation: GL.MAX
    },
    sizeScale: 200
  }
};

// BitmapLayer example is currently commented out
// They are going to be added in the future.
// import BitmapLayer from '../../../sample-layers/bitmap-layer/bitmap-layer';

// const BitmapLayerExample = {
//   layer: BitmapLayer,
//   props: {
//     data: []
//   }
// };

/* eslint-disable quote-props */
export default {
  'Experimental Layers': {
    // BitmapLayer currently commented out, going to be added in the future.
    // 'BitmapLayer': BitmapLayerExample,
    'MeshLayer': MeshLayerExample,
    'PathMarkerLayer': PathMarkerExample,
    'PathOutlineLayer': PathOutlineExample
  }
};
