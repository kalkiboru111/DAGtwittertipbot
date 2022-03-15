// In Node.js
import { dag4 } from '@stardust-collective/dag4';

const fetch = require('node-fetch');
const { dag4 } = require("@stardust-collective/dag4");

dag4.di.useFetchHttpClient(fetch);
dag4.network.config({
    beUrl: 'https://block-explorer.constellationnetwork.io',
    lbUrl: 'http://lb.constellationnetwork.io:9000'
})