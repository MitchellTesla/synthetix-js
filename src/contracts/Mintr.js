import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Mintr;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Mintr(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Mintr'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.nominsIssued = async address => {
    return await this.contract.nominsIssued(address);
  };

  /**
   * The remaining nomins an issuer can issue against their total havven quantity.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.remainingIssuableNomins = async issuer => {
    return await this.contract.remainingIssuableNomins(issuer);
  };

  /**
   * The maximum nomins an issuer can issue against their total havven quantity. This ignores any already issued nomins.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuableNomins = async issuer => {
    return await this.contract.maxIssuableNomins(issuer);
  };

  /**
   * Issuance is only allowed if the havven price isn't stale and the sender is an issuer., Issue nomins against the sender's havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueNomins(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxNomins = async txParams => {
    txParams = txParams || {};
    return await this.contract.issueMaxNomins(txParams);
  };

  /**
   * Burn nomins to clear issued nomins/free havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnNomins(amount, txParams);
  };

  /**
   * Compute the last period's fee entitlement for the message sender and then deposit it into their nomin account.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawFees = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawFees(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastFeesCollected = async () => {
    return await this.contract.lastFeesCollected();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuanceLastAverageBalance = async () => {
    return await this.contract.totalIssuanceLastAverageBalance();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.issuanceLastAverageBalance = async account => {
    return await this.contract.issuanceLastAverageBalance(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.hasWithdrawnFees = async address => {
    return await this.contract.hasWithdrawnFees(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastFeePeriodStartTime = async () => {
    return await this.contract.lastFeePeriodStartTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodStartTime = async () => {
    return await this.contract.feePeriodStartTime();
  };
}

export default Mintr;