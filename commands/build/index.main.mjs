// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v53 = stdlib.protect(ctc0, interact.bank, 'for A\'s interact field bank');
  
  const txn1 = await (ctc.sendrecv({
    args: [v53],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:15:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v53, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v57], secs: v59, time: v58, didSend: v29, from: v56 } = txn1;
      
      sim_r.txns.push({
        amt: v57,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v57], secs: v59, time: v58, didSend: v29, from: v56 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v65, time: v64, didSend: v37, from: v63 } = txn2;
  const v66 = stdlib.safeDiv(v57, stdlib.checkedBigNumberify('./index.rsh:18:16:decimal', stdlib.UInt_max, '2'));
  const v68 = stdlib.add(v57, v66);
  ;
  ;
  return;
  
  
  
  
  };
export async function B(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v57], secs: v59, time: v58, didSend: v29, from: v56 } = txn1;
  ;
  const v62 = stdlib.safeDiv(v57, stdlib.checkedBigNumberify('./index.rsh:18:16:decimal', stdlib.UInt_max, '2'));
  
  const txn2 = await (ctc.sendrecv({
    args: [v56, v57],
    evt_cnt: 0,
    funcNum: 1,
    lct: v58,
    onlyIf: true,
    out_tys: [],
    pay: [v62, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v65, time: v64, didSend: v37, from: v63 } = txn2;
      
      const v66 = stdlib.safeDiv(v57, stdlib.checkedBigNumberify('./index.rsh:18:16:decimal', stdlib.UInt_max, '2'));
      const v68 = stdlib.add(v57, v66);
      sim_r.txns.push({
        amt: v66,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v56,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v65, time: v64, didSend: v37, from: v63 } = txn2;
  const v66 = stdlib.safeDiv(v57, stdlib.checkedBigNumberify('./index.rsh:18:16:decimal', stdlib.UInt_max, '2'));
  const v68 = stdlib.add(v57, v66);
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByADAAECJgIAAQAiNQAxGEEBDChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAEgjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/4AEmouRdLA0/yQKNf40/ogAzLEisgE0/zT+CLIII7IQNANXACCyB7NCAEZIgaCNBogAqyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iACFMQA0/xZQKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107fd3803806107fd833981016040819052610022916101a8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515161008390341460076100e6565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100de926002929091019061010f565b505050610281565b8161010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011b90610246565b90600052602060002090601f01602090048101928261013d5760008555610183565b82601f1061015657805160ff1916838001178555610183565b82800160010185558215610183579182015b82811115610183578251825591602001919060010190610168565b5061018f929150610193565b5090565b5b8082111561018f5760008155600101610194565b60008183036040808212156101bc57600080fd5b80518082016001600160401b0380821183831017156101eb57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561020457600080fd5b83519450602085019150848210818311171561023057634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025a57607f821691505b6020821081141561027b57634e487b7160e01b600052602260045260246000fd5b50919050565b61056d806102906000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046103bc565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610251565b6040516100649291906103d4565b6100c860016000541460096102ee565b6100e2813515806100db57506001548235145b600a6102ee565b6000808055600280546100f490610431565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610431565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610466565b905061019d6040518060200160405280600081525090565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101ce9291906104d8565b60405180910390a16101e582602001516002610318565b8082526101f590341460086102ee565b8151602083015182516040516001600160a01b0390931692910180156108fc02916000818181858888f19350505050158015610235573d6000803e3d6000fd5b506000808055600181905561024c90600290610366565b505050565b60006060600054600280805461026690610431565b80601f016020809104026020016040519081016040528092919081815260200182805461029290610431565b80156102df5780601f106102b4576101008083540402835291602001916102df565b820191906000526020600020905b8154815290600101906020018083116102c257829003601f168201915b50505050509050915091509091565b816103145760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000816103555760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161030b565b61035f8284610515565b9392505050565b50805461037290610431565b6000825580601f10610382575050565b601f0160209004906000526020600020908101906103a091906103a3565b50565b5b808211156103b857600081556001016103a4565b5090565b6000604082840312156103ce57600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610408578581018301518582016060015282016103ec565b8181111561041a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061044557607f821691505b602082108114156103ce57634e487b7160e01b600052602260045260246000fd5b60006040828403121561047857600080fd5b6040516040810181811067ffffffffffffffff821117156104a957634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146104c357600080fd5b81526020928301519281019290925250919050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461050657600080fd5b80604085015250509392505050565b60008261053257634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220033e1bee509850b56efeea96cbd1e6aa8ea170e99a95a985c68e90235708e2b664736f6c634300080c0033`,
  BytecodeLen: 2045,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:17:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:20:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A,
  "B": B
  };
export const _APIs = {
  };
