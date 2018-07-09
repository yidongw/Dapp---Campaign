import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe790da3888eDB0E26c82B205718914fAc91dB2F7'
);

export default instance;
