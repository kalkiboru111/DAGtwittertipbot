import { dag4 } from '@stardust-collective/dag4';
import fetch from 'node-fetch';

dag4.di.useFetchHttpClient(fetch);
dag4.network.config({
   beUrl: 'https://block-explorer.constellationnetwork.io',
   lbUrl: 'http://lb.constellationnetwork.io:9000'
})