import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x551597418390AEB5BCAD6aAD6871fA858fD332D7'
);

export default instance;
