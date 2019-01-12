import Web3 from 'web3';
import { APIRoute } from "../env/truffle-wallet";

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    APIRoute
  );
  web3 = new Web3(provider);
}

export default web3;
