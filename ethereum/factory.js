import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
import contractAddress from '../env/address';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  contractAddress
);

export default instance;
