// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  const _currBid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v312;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _min = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v286;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _nft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v285;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      currBid: {
        decode: _currBid,
        dom: [],
        rng: ctc2
        },
      min: {
        decode: _min,
        dom: [],
        rng: ctc2
        },
      nft: {
        decode: _nft,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
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
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v284, v285, v286, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v335 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v338 = stdlib.gt(v336, v312);
  stdlib.assert(v338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v285, v286, v309, v310, v311, v312, v313, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v351,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v360 = [v310, v312];
      const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
      
      if (v311) {
        const v632 = v346;
        const v633 = false;
        const v634 = v351;
        const v635 = v348;
        const v637 = stdlib.le(v313, v309);
        if (v637) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v638 = v346;
        const v639 = false;
        const v640 = v351;
        const v641 = v348;
        const v643 = stdlib.le(v313, v309);
        if (v643) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
  undefined /* setApiDetails */;
  const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
  const v352 = stdlib.gt(v351, v312);
  stdlib.assert(v352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v360 = [v310, v312];
  const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
  if (v165) {
    stdlib.protect(ctc6, await interact.out(v347, v361), {
      at: './index.rsh:44:11:application',
      fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:47:15:application call to "notify" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v311) {
    const v632 = v346;
    const v633 = false;
    const v634 = v351;
    const v635 = v348;
    const v637 = stdlib.le(v313, v309);
    if (v637) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v638 = v346;
    const v639 = false;
    const v640 = v351;
    const v641 = v348;
    const v643 = stdlib.le(v313, v309);
    if (v643) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v277 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:25:69:application',
    fs: ['at ./index.rsh:24:15:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v278 = v277.lenInBlocks;
  const v279 = v277.minBid;
  const v280 = v277.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v279, v278],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v285
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v284, v285, v286, v287, v288],
    evt_cnt: 0,
    funcNum: 1,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:28:15:decimal', stdlib.UInt_max, '1'), v285]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:28:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v285
        });
      
      const v309 = stdlib.safeAdd(v288, v287);
      const v310 = v284;
      const v311 = true;
      const v312 = v286;
      const v313 = v295;
      const v314 = v288;
      
      if (await (async () => {
        const v328 = stdlib.le(v314, v309);
        
        return v328;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: v285
          });
        if (v311) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v284, v294);
  stdlib.assert(v303, {
    at: './index.rsh:30:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:31:32:application',
    fs: ['at ./index.rsh:31:32:application call to [unknown function] (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:31:32:application call to "liftedInteract" (defined at: ./index.rsh:31:32:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v309 = stdlib.safeAdd(v288, v287);
  let v310 = v284;
  let v311 = true;
  let v312 = v286;
  let v313 = v295;
  let v314 = v288;
  
  let txn3 = txn2;
  while (await (async () => {
    const v328 = stdlib.le(v314, v309);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v309],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v284, v285, v286, v309, v310, v311, v312, v313],
        evt_cnt: 0,
        funcNum: 4,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
          
          ;
          const cv310 = v310;
          const cv311 = v311;
          const cv312 = v312;
          const cv313 = v379;
          const cv314 = v313;
          
          await (async () => {
            const v310 = cv310;
            const v311 = cv311;
            const v312 = cv312;
            const v313 = cv313;
            const v314 = cv314;
            
            if (await (async () => {
              const v328 = stdlib.le(v314, v309);
              
              return v328;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: v285
                });
              if (v311) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v284,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
      ;
      const v381 = stdlib.addressEq(v284, v378);
      stdlib.assert(v381, {
        at: './index.rsh:57:15:dot',
        fs: ['at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv310 = v310;
      const cv311 = v311;
      const cv312 = v312;
      const cv313 = v379;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn4;
      undefined /* setApiDetails */;
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
      const v352 = stdlib.gt(v351, v312);
      stdlib.assert(v352, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v360 = [v310, v312];
      await txn4.getOutput('Bidder_bid', 'v360', ctc6, v360);
      if (v311) {
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:32:application',
          fs: ['at ./index.rsh:52:32:application call to [unknown function] (defined at: ./index.rsh:52:32:function exp)', 'at ./index.rsh:52:32:application call to "liftedInteract" (defined at: ./index.rsh:52:32:application)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:32:application',
          fs: ['at ./index.rsh:52:32:application call to [unknown function] (defined at: ./index.rsh:52:32:function exp)', 'at ./index.rsh:52:32:application call to "liftedInteract" (defined at: ./index.rsh:52:32:application)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}}
    
    }
  ;
  if (v311) {
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:63:31:application',
      fs: ['at ./index.rsh:63:31:application call to [unknown function] (defined at: ./index.rsh:63:31:function exp)', 'at ./index.rsh:63:31:application call to "liftedInteract" (defined at: ./index.rsh:63:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:63:31:application',
      fs: ['at ./index.rsh:63:31:application call to [unknown function] (defined at: ./index.rsh:63:31:function exp)', 'at ./index.rsh:63:31:application call to "liftedInteract" (defined at: ./index.rsh:63:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(uint64)))void`, `_reachp_4((uint64))void`],
    pure: [`currBid()uint64`, `min()uint64`, `nft()uint64`],
    sigs: [`Bidder_bid(uint64)(address,uint64)`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(uint64)))void`, `_reachp_4((uint64))void`, `currBid()uint64`, `min()uint64`, `nft()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEFCKCNBiAoMAQmAgABADEYQQKhKGRJIls1ASVbNQIpZIIIBAOvozwEEC8NoAQRf3JoBCZSBjUEiXOhigSduehpBN/ZIygE8TfIRDYaAI4IAiQAAQLuAj8C8QJ1AjQCSgA2GgEXNQslrzQLFlA1CyQ0ARJEiAL2NAsiWzUMNAtXCAg1FoAEDc0vMDQMFlA0FlCwNAyIAwsyBjQSDEQ0FhdJNQs0Dw1ENAuIAwQ0ETQPFlA1DIAIAAAAAAAAAWg0DFCwNAw1BDQQQQJmMQAiNAsyBjQONQ01DjUPNRA1ETQNNBIOQQHyNBU0FBZQNBMWUDQSFlA0EVA0EBZRBwhQNA8WUDQOFlAkMgY1AjUBKUxXAGlnKDQBFjQCFlBnMRkiEkSIArI0A0AACoAEFR98dTQEULAjQzQBJBJEiAIwNA8WNQQxGSISREL/3zQBJBJEiAIbNBMWNQRC/+g0ASQSRIgCCzQUFjUEQv/YMQA1FTIGNQs0DSJbNQ40DSVbNRQ0DYEQWzUTNA2BGFs1DIAE9u2r0jQOFlA0FBZQNBMWUDQMFlCwNA6IAfohBIgCIyI0FDIKiAIXNBU0FBZQNBMWUDQMFlA0CxZQgSmvUCMyBkL/OCM0ARJESVcAIDUVSSEFWzUUSSEGWzUTSSEHWzUMgThbNQs0Ehc1FoAE1RUZFDQWFlCwNBaIAZojNBQxFjQAIwhJNQAJRwM4FDIKEkQ4ECEIEkQ4EU8CEkQ4EhJENBUxABJENAs0DAg1EjQVIzQTMgY0CzUNNQ41DzUQNRFC/o4kNAESRIgBFTQLFzUMgAT5i694NAwWULA0DIgBNTIGNBIPRDQVMQASRDIGNA41DTUOQv5aiAEXIQSIAUQ2GgE1DUL+1ogBBzYaATUSQv8yiAD8NhoBNQtC/cWIAPE2GgE1C0L/myIxNBJEgQIxNRJEIjE2EkQiMTcSRIgA0YFpryIiQv40Qv5dIzQUNBGIAOw0EEEAHSI0FDIKMgmIAPMxGSQSRIgA3yIyCjIJiADpQv4iNA80FYgAoyI0FDIKMgmIAM9C/9kisgEjshCyB7IIs4kisgEhCLIQshSyEbISs4k0DzQRiAB0MQAiNAsyBjQONQ01DjUPNRA1EUL9kEL9+UL+BkiJTAlJNQYyCYgATIkJSUH/7kk1BogARIlJVwAgNRVJIQVbNRRJIQZbNRNJIQdbNRJJVzggNRFJV1gBFzUQSYFZWzUPgWFbNQ6JIzUDiUkiEkw0AhIRRImxQv9mMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEibFC/1I0Bgg1Bok0BjQHSg9B/3dC/3+xshVC/zqxsglC/yg=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `22`,
    1000: `619`,
    1001: `620`,
    1002: `620`,
    1003: `620`,
    1004: `622`,
    1005: `623`,
    1006: `623`,
    1007: `624`,
    101: `24`,
    102: `24`,
    103: `24`,
    104: `25`,
    105: `26`,
    106: `26`,
    107: `28`,
    108: `29`,
    109: `30`,
    11: `2`,
    110: `30`,
    111: `31`,
    112: `32`,
    113: `33`,
    114: `33`,
    115: `35`,
    116: `36`,
    117: `36`,
    118: `37`,
    119: `38`,
    12: `2`,
    120: `39`,
    121: `39`,
    122: `39`,
    123: `40`,
    124: `40`,
    125: `41`,
    126: `42`,
    127: `43`,
    128: `43`,
    129: `44`,
    13: `2`,
    130: `44`,
    131: `45`,
    132: `45`,
    133: `45`,
    134: `46`,
    135: `46`,
    136: `47`,
    137: `47`,
    138: `47`,
    139: `47`,
    14: `2`,
    140: `47`,
    141: `47`,
    142: `48`,
    143: `48`,
    144: `49`,
    145: `50`,
    146: `51`,
    147: `51`,
    148: `52`,
    149: `53`,
    15: `2`,
    150: `55`,
    151: `55`,
    152: `56`,
    153: `56`,
    154: `56`,
    155: `57`,
    156: `57`,
    157: `58`,
    158: `58`,
    159: `59`,
    16: `2`,
    160: `60`,
    161: `62`,
    162: `62`,
    163: `63`,
    164: `64`,
    165: `65`,
    166: `65`,
    167: `66`,
    168: `66`,
    169: `67`,
    17: `2`,
    170: `68`,
    171: `74`,
    172: `74`,
    173: `75`,
    174: `75`,
    175: `75`,
    176: `78`,
    177: `78`,
    178: `79`,
    179: `79`,
    18: `2`,
    180: `80`,
    181: `81`,
    182: `82`,
    183: `82`,
    184: `83`,
    185: `83`,
    186: `83`,
    187: `83`,
    188: `83`,
    189: `83`,
    19: `4`,
    190: `83`,
    191: `83`,
    192: `83`,
    193: `83`,
    194: `84`,
    195: `84`,
    196: `85`,
    197: `86`,
    198: `87`,
    199: `87`,
    2: `2`,
    20: `4`,
    200: `88`,
    201: `88`,
    202: `89`,
    203: `89`,
    204: `90`,
    205: `90`,
    206: `90`,
    207: `91`,
    208: `91`,
    209: `92`,
    21: `5`,
    210: `93`,
    211: `93`,
    212: `94`,
    213: `94`,
    214: `95`,
    215: `95`,
    216: `96`,
    217: `96`,
    218: `97`,
    219: `97`,
    22: `5`,
    220: `98`,
    221: `98`,
    222: `99`,
    223: `99`,
    224: `100`,
    225: `100`,
    226: `102`,
    227: `102`,
    228: `103`,
    229: `103`,
    23: `5`,
    230: `104`,
    231: `105`,
    232: `105`,
    233: `105`,
    234: `107`,
    235: `107`,
    236: `108`,
    237: `108`,
    238: `109`,
    239: `110`,
    24: `6`,
    240: `111`,
    241: `111`,
    242: `112`,
    243: `113`,
    244: `114`,
    245: `114`,
    246: `115`,
    247: `116`,
    248: `117`,
    249: `117`,
    25: `7`,
    250: `118`,
    251: `119`,
    252: `119`,
    253: `120`,
    254: `121`,
    255: `121`,
    256: `121`,
    257: `122`,
    258: `123`,
    259: `123`,
    26: `8`,
    260: `124`,
    261: `125`,
    262: `126`,
    263: `126`,
    264: `127`,
    265: `128`,
    266: `129`,
    267: `130`,
    268: `130`,
    269: `132`,
    27: `9`,
    270: `132`,
    271: `133`,
    272: `133`,
    273: `134`,
    274: `135`,
    275: `136`,
    276: `136`,
    277: `136`,
    278: `137`,
    279: `138`,
    28: `10`,
    280: `139`,
    281: `139`,
    282: `140`,
    283: `141`,
    284: `141`,
    285: `142`,
    286: `143`,
    287: `144`,
    288: `145`,
    289: `145`,
    29: `11`,
    290: `146`,
    291: `147`,
    292: `148`,
    293: `150`,
    294: `150`,
    295: `150`,
    296: `152`,
    297: `152`,
    298: `153`,
    299: `153`,
    3: `2`,
    30: `11`,
    300: `153`,
    301: `155`,
    302: `155`,
    303: `155`,
    304: `155`,
    305: `155`,
    306: `155`,
    307: `156`,
    308: `156`,
    309: `157`,
    31: `12`,
    310: `158`,
    311: `160`,
    312: `161`,
    313: `163`,
    314: `163`,
    315: `164`,
    316: `165`,
    317: `166`,
    318: `169`,
    319: `169`,
    32: `13`,
    320: `169`,
    321: `170`,
    322: `170`,
    323: `171`,
    324: `172`,
    325: `172`,
    326: `174`,
    327: `174`,
    328: `175`,
    329: `176`,
    33: `14`,
    330: `177`,
    331: `179`,
    332: `179`,
    333: `179`,
    334: `181`,
    335: `181`,
    336: `182`,
    337: `183`,
    338: `184`,
    339: `187`,
    34: `14`,
    340: `187`,
    341: `187`,
    342: `188`,
    343: `188`,
    344: `189`,
    345: `190`,
    346: `190`,
    347: `191`,
    348: `191`,
    349: `191`,
    35: `15`,
    350: `193`,
    351: `193`,
    352: `194`,
    353: `195`,
    354: `196`,
    355: `199`,
    356: `199`,
    357: `199`,
    358: `200`,
    359: `200`,
    36: `16`,
    360: `201`,
    361: `202`,
    362: `202`,
    363: `203`,
    364: `203`,
    365: `203`,
    366: `205`,
    367: `205`,
    368: `206`,
    369: `206`,
    37: `18`,
    370: `207`,
    371: `207`,
    372: `208`,
    373: `208`,
    374: `209`,
    375: `209`,
    376: `210`,
    377: `211`,
    378: `212`,
    379: `212`,
    38: `18`,
    380: `213`,
    381: `213`,
    382: `214`,
    383: `215`,
    384: `216`,
    385: `216`,
    386: `217`,
    387: `217`,
    388: `218`,
    389: `218`,
    39: `18`,
    390: `219`,
    391: `220`,
    392: `220`,
    393: `221`,
    394: `221`,
    395: `222`,
    396: `222`,
    397: `223`,
    398: `224`,
    399: `224`,
    4: `2`,
    40: `18`,
    400: `225`,
    401: `225`,
    402: `225`,
    403: `225`,
    404: `225`,
    405: `225`,
    406: `226`,
    407: `226`,
    408: `227`,
    409: `228`,
    41: `18`,
    410: `229`,
    411: `229`,
    412: `230`,
    413: `231`,
    414: `232`,
    415: `232`,
    416: `233`,
    417: `234`,
    418: `235`,
    419: `235`,
    42: `18`,
    420: `236`,
    421: `237`,
    422: `238`,
    423: `240`,
    424: `240`,
    425: `241`,
    426: `241`,
    427: `241`,
    428: `242`,
    429: `242`,
    43: `18`,
    430: `243`,
    431: `243`,
    432: `243`,
    433: `244`,
    434: `246`,
    435: `246`,
    436: `247`,
    437: `247`,
    438: `248`,
    439: `248`,
    44: `18`,
    440: `248`,
    441: `250`,
    442: `250`,
    443: `251`,
    444: `251`,
    445: `252`,
    446: `253`,
    447: `254`,
    448: `254`,
    449: `255`,
    45: `18`,
    450: `256`,
    451: `257`,
    452: `257`,
    453: `258`,
    454: `259`,
    455: `260`,
    456: `260`,
    457: `261`,
    458: `262`,
    459: `263`,
    46: `18`,
    460: `263`,
    461: `264`,
    462: `265`,
    463: `266`,
    464: `267`,
    465: `267`,
    466: `268`,
    467: `268`,
    468: `268`,
    469: `270`,
    47: `18`,
    470: `271`,
    471: `271`,
    472: `272`,
    473: `273`,
    474: `275`,
    475: `276`,
    476: `276`,
    477: `276`,
    478: `277`,
    479: `277`,
    48: `18`,
    480: `278`,
    481: `279`,
    482: `279`,
    483: `280`,
    484: `281`,
    485: `281`,
    486: `282`,
    487: `283`,
    488: `283`,
    489: `284`,
    49: `18`,
    490: `285`,
    491: `285`,
    492: `286`,
    493: `287`,
    494: `287`,
    495: `288`,
    496: `289`,
    497: `289`,
    498: `290`,
    499: `290`,
    5: `2`,
    50: `18`,
    500: `291`,
    501: `292`,
    502: `292`,
    503: `293`,
    504: `293`,
    505: `294`,
    506: `295`,
    507: `295`,
    508: `296`,
    509: `296`,
    51: `18`,
    510: `296`,
    511: `296`,
    512: `296`,
    513: `296`,
    514: `297`,
    515: `297`,
    516: `298`,
    517: `299`,
    518: `300`,
    519: `302`,
    52: `18`,
    520: `302`,
    521: `303`,
    522: `303`,
    523: `303`,
    524: `304`,
    525: `305`,
    526: `305`,
    527: `308`,
    528: `308`,
    529: `309`,
    53: `18`,
    530: `309`,
    531: `310`,
    532: `311`,
    533: `312`,
    534: `313`,
    535: `313`,
    536: `314`,
    537: `315`,
    538: `315`,
    539: `316`,
    54: `18`,
    540: `316`,
    541: `317`,
    542: `317`,
    543: `318`,
    544: `319`,
    545: `320`,
    546: `320`,
    547: `321`,
    548: `321`,
    549: `322`,
    55: `18`,
    550: `323`,
    551: `324`,
    552: `324`,
    553: `325`,
    554: `325`,
    555: `326`,
    556: `327`,
    557: `328`,
    558: `328`,
    559: `329`,
    56: `18`,
    560: `330`,
    561: `333`,
    562: `333`,
    563: `334`,
    564: `334`,
    565: `335`,
    566: `336`,
    567: `339`,
    568: `339`,
    569: `340`,
    57: `18`,
    570: `340`,
    571: `341`,
    572: `342`,
    573: `342`,
    574: `343`,
    575: `343`,
    576: `344`,
    577: `345`,
    578: `345`,
    579: `346`,
    58: `18`,
    580: `346`,
    581: `347`,
    582: `347`,
    583: `348`,
    584: `348`,
    585: `349`,
    586: `349`,
    587: `350`,
    588: `350`,
    589: `351`,
    59: `18`,
    590: `351`,
    591: `352`,
    592: `352`,
    593: `353`,
    594: `353`,
    595: `353`,
    596: `355`,
    597: `356`,
    598: `356`,
    599: `357`,
    6: `2`,
    60: `18`,
    600: `358`,
    601: `359`,
    602: `359`,
    603: `359`,
    604: `360`,
    605: `360`,
    606: `361`,
    607: `362`,
    608: `362`,
    609: `363`,
    61: `18`,
    610: `363`,
    611: `363`,
    612: `363`,
    613: `363`,
    614: `363`,
    615: `364`,
    616: `364`,
    617: `365`,
    618: `366`,
    619: `367`,
    62: `18`,
    620: `369`,
    621: `369`,
    622: `370`,
    623: `370`,
    624: `370`,
    625: `371`,
    626: `371`,
    627: `372`,
    628: `372`,
    629: `373`,
    63: `18`,
    630: `374`,
    631: `375`,
    632: `375`,
    633: `376`,
    634: `376`,
    635: `377`,
    636: `378`,
    637: `382`,
    638: `382`,
    639: `383`,
    64: `18`,
    640: `383`,
    641: `384`,
    642: `384`,
    643: `385`,
    644: `385`,
    645: `386`,
    646: `386`,
    647: `386`,
    648: `388`,
    649: `388`,
    65: `18`,
    650: `388`,
    651: `389`,
    652: `389`,
    653: `390`,
    654: `390`,
    655: `390`,
    656: `391`,
    657: `391`,
    658: `391`,
    659: `392`,
    66: `18`,
    660: `392`,
    661: `393`,
    662: `393`,
    663: `393`,
    664: `395`,
    665: `395`,
    666: `395`,
    667: `396`,
    668: `396`,
    669: `396`,
    67: `18`,
    670: `397`,
    671: `397`,
    672: `398`,
    673: `398`,
    674: `398`,
    675: `400`,
    676: `400`,
    677: `400`,
    678: `401`,
    679: `401`,
    68: `18`,
    680: `401`,
    681: `402`,
    682: `402`,
    683: `403`,
    684: `403`,
    685: `403`,
    686: `405`,
    687: `405`,
    688: `405`,
    689: `406`,
    69: `18`,
    690: `406`,
    691: `406`,
    692: `407`,
    693: `407`,
    694: `408`,
    695: `408`,
    696: `408`,
    697: `410`,
    698: `411`,
    699: `411`,
    7: `2`,
    70: `18`,
    700: `412`,
    701: `413`,
    702: `414`,
    703: `414`,
    704: `415`,
    705: `415`,
    706: `416`,
    707: `417`,
    708: `418`,
    709: `419`,
    71: `18`,
    710: `419`,
    711: `420`,
    712: `421`,
    713: `422`,
    714: `423`,
    715: `423`,
    716: `424`,
    717: `425`,
    718: `426`,
    719: `426`,
    72: `18`,
    720: `426`,
    721: `427`,
    722: `427`,
    723: `428`,
    724: `429`,
    725: `430`,
    726: `431`,
    727: `431`,
    728: `431`,
    729: `433`,
    73: `18`,
    730: `433`,
    731: `433`,
    732: `435`,
    733: `437`,
    734: `437`,
    735: `439`,
    736: `439`,
    737: `440`,
    738: `440`,
    739: `440`,
    74: `18`,
    740: `441`,
    741: `441`,
    742: `442`,
    743: `442`,
    744: `442`,
    745: `444`,
    746: `445`,
    747: `445`,
    748: `446`,
    749: `446`,
    75: `18`,
    750: `447`,
    751: `447`,
    752: `448`,
    753: `448`,
    754: `448`,
    755: `450`,
    756: `450`,
    757: `451`,
    758: `452`,
    759: `453`,
    76: `18`,
    760: `455`,
    761: `455`,
    762: `455`,
    763: `457`,
    764: `458`,
    765: `458`,
    766: `459`,
    767: `459`,
    768: `460`,
    769: `460`,
    77: `18`,
    770: `460`,
    771: `461`,
    772: `461`,
    773: `461`,
    774: `463`,
    775: `463`,
    776: `465`,
    777: `465`,
    778: `466`,
    779: `466`,
    78: `18`,
    780: `466`,
    781: `468`,
    782: `469`,
    783: `469`,
    784: `470`,
    785: `470`,
    786: `471`,
    787: `471`,
    788: `472`,
    789: `472`,
    79: `19`,
    790: `472`,
    791: `473`,
    792: `473`,
    793: `473`,
    794: `475`,
    795: `476`,
    796: `476`,
    797: `477`,
    798: `478`,
    799: `478`,
    8: `2`,
    80: `19`,
    800: `479`,
    801: `479`,
    802: `480`,
    803: `480`,
    804: `481`,
    805: `482`,
    806: `484`,
    807: `485`,
    808: `485`,
    809: `486`,
    81: `19`,
    810: `486`,
    811: `487`,
    812: `487`,
    813: `488`,
    814: `488`,
    815: `489`,
    816: `489`,
    817: `490`,
    818: `490`,
    819: `491`,
    82: `20`,
    820: `492`,
    821: `494`,
    822: `494`,
    823: `496`,
    824: `496`,
    825: `497`,
    826: `497`,
    827: `497`,
    828: `498`,
    829: `498`,
    83: `20`,
    830: `499`,
    831: `500`,
    832: `500`,
    833: `501`,
    834: `501`,
    835: `502`,
    836: `502`,
    837: `503`,
    838: `503`,
    839: `504`,
    84: `20`,
    840: `504`,
    841: `505`,
    842: `505`,
    843: `506`,
    844: `506`,
    845: `507`,
    846: `507`,
    847: `508`,
    848: `508`,
    849: `508`,
    85: `20`,
    850: `510`,
    851: `510`,
    852: `510`,
    853: `512`,
    854: `512`,
    855: `512`,
    856: `514`,
    857: `515`,
    858: `517`,
    859: `518`,
    86: `20`,
    860: `519`,
    861: `520`,
    862: `520`,
    863: `521`,
    864: `521`,
    865: `522`,
    866: `522`,
    867: `522`,
    868: `523`,
    869: `525`,
    87: `20`,
    870: `526`,
    871: `527`,
    872: `527`,
    873: `527`,
    874: `528`,
    875: `529`,
    876: `529`,
    877: `530`,
    878: `530`,
    879: `530`,
    88: `20`,
    880: `531`,
    881: `533`,
    882: `534`,
    883: `534`,
    884: `534`,
    885: `535`,
    886: `535`,
    887: `536`,
    888: `537`,
    889: `537`,
    89: `20`,
    890: `538`,
    891: `539`,
    892: `539`,
    893: `540`,
    894: `541`,
    895: `541`,
    896: `542`,
    897: `543`,
    898: `543`,
    899: `544`,
    9: `2`,
    90: `20`,
    900: `545`,
    901: `545`,
    902: `546`,
    903: `547`,
    904: `547`,
    905: `548`,
    906: `549`,
    907: `549`,
    908: `549`,
    909: `550`,
    91: `20`,
    910: `550`,
    911: `551`,
    912: `552`,
    913: `552`,
    914: `552`,
    915: `553`,
    916: `554`,
    917: `554`,
    918: `555`,
    919: `556`,
    92: `20`,
    920: `556`,
    921: `557`,
    922: `558`,
    923: `558`,
    924: `559`,
    925: `559`,
    926: `560`,
    927: `561`,
    928: `561`,
    929: `562`,
    93: `20`,
    930: `564`,
    931: `565`,
    932: `565`,
    933: `566`,
    934: `568`,
    935: `569`,
    936: `570`,
    937: `571`,
    938: `572`,
    939: `572`,
    94: `20`,
    940: `573`,
    941: `574`,
    942: `575`,
    943: `576`,
    944: `578`,
    945: `579`,
    946: `579`,
    947: `579`,
    948: `582`,
    949: `582`,
    95: `20`,
    950: `583`,
    951: `583`,
    952: `584`,
    953: `585`,
    954: `586`,
    955: `587`,
    956: `587`,
    957: `588`,
    958: `589`,
    959: `589`,
    96: `20`,
    960: `590`,
    961: `590`,
    962: `591`,
    963: `591`,
    964: `592`,
    965: `593`,
    966: `594`,
    967: `594`,
    968: `595`,
    969: `596`,
    97: `20`,
    970: `597`,
    971: `598`,
    972: `598`,
    973: `599`,
    974: `600`,
    975: `601`,
    976: `603`,
    977: `604`,
    978: `604`,
    979: `604`,
    98: `20`,
    980: `606`,
    981: `606`,
    982: `607`,
    983: `608`,
    984: `608`,
    985: `609`,
    986: `611`,
    987: `611`,
    988: `612`,
    989: `612`,
    99: `20`,
    990: `613`,
    991: `614`,
    992: `615`,
    993: `615`,
    994: `615`,
    995: `616`,
    996: `616`,
    997: `616`,
    998: `618`,
    999: `619`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 13,
  warnings: [`API Bidder_bid may use up to 5 accounts, but the limit is 4. API Bidder_bid starts at /app/index.rsh:37:19:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/index.rsh:37:19:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T5","name":"v657","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v360","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v654","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v660","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v663","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v666","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200188090813803601f1980601f83011683019360018060401b0392848610848711176200039c57808592604097885283396080948591810103126200039757845190848201828110858211176200039c578652805182526020808201516001600160a01b039690939087851685036200039757828201948552888401519089830191825260608095015195858401968752436003558a5195620000a587620003b2565b6000968781528c518d81018181108d821117620003835791898f879382958252828152828c8201528b8401528201528284820152015260049460ff8654166200036c577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a08d8f80519133835285518c840152875116908201528751858201528b5187820152a15180159081156200035f575b501562000348573462000331578b51936200015485620003b2565b86850198888a528d8601918983528d848801958b8752878901988c8a5233905251168b5251825251835243855260019b8c8955438d558d519933898c015251168d8a0152519088015251908601525160a085015260a0845260c08401848110878211176200031e57885283519586116200030b57600254908782811c9216801562000300575b83831014620002ed5750601f8111620002a1575b508093601f861160011462000239575050918394918493946200022d575b50501b916000199060031b1c1916176002555b516114b19081620003cf8239f35b0151925038806200020c565b600283528183209493928692918316915b888383106200028657505050106200026c575b505050811b016002556200021f565b015160001960f88460031b161c191690553880806200025d565b8587015188559096019594850194879350908101906200024a565b60028352818320601f870160051c810191838810620002e2575b601f0160051c019087905b828110620002d6575050620001ee565b848155018790620002c6565b9091508190620002bb565b634e487b7160e01b845260229052602483fd5b91607f1691620001da565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8b5163100960cb60e01b8152600c81870152602490fd5b8b5163100960cb60e01b8152600b81870152602490fd5b9050600154143862000139565b8c5163100960cb60e01b8152600a81880152602490fd5b634e487b7160e01b8a52604160045260248afd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b60a081019081106001600160401b038211176200039c5760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806317b28f08146100e05780631e93b0f1146100d757806347ccca02146100ce578063573b8510146100c557806383230757146100bc578063a1357973146100b3578063ab53f2c6146100aa578063b6279224146100a1578063d3c64a7a146100985763f88979450361000e576100936106b0565b61000e565b50610093610549565b506100936104c1565b5061009361042c565b506100936103cf565b506100936103b0565b5061009361021d565b5061009361017c565b50610093610151565b503461014c57600036600319011261014c576100fa6108b1565b60056000540361013357604060209160c06101246101166107ed565b85808251830101910161091e565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b503461014c57600036600319011261014c576020600354604051908152f35b6001600160a01b031690565b503461014c57600036600319011261014c576101966108b1565b6005600054036101f35760806101ef916101ae6107ed565b80516001600160a01b03916020916101cd91908101830190830161091e565b01511691018190526040516001600160a01b0390911681529081906020820190565b0390f35b60405163100960cb60e01b815260096004820152602490fd5b602090600319011261014c57600490565b5061039861023d61022d3661020c565b6102356108b1565b503690611372565b61024b600160005414610c33565b6102c86102686102596107ed565b60208082518301019101611390565b9161028461027f61027b60045460ff1690565b1590565b610c53565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806102b48433836113e4565b0390a15180159081156103a4575b50610c73565b6102d23415610c93565b60208101906102f26102ed6102e78451610170565b33611428565b610cb3565b61030e3360018060a01b036103078451610170565b1614610cd3565b61033f61033661031c6109bb565b9361033061032a8551610170565b8661099f565b51610170565b6020840161099f565b6040810180516040840152610379610370608084019361036585516060830151906113fe565b606087015251610170565b6080850161099f565b600160a08401525160c08301524360e083015251610100820152611068565b60405160008152602090f35b905060015414386102c2565b503461014c57600036600319011261014c576020600154604051908152f35b50604036600319011261014c576103e46108b1565b604051906103f182610750565b6004358252602036602319011261014c576104219160405161041281610778565b60243581526020820152610a1f565b602060405160008152f35b503461014c5760008060031936011261049e5780546104496107ed565b906040519283918252602090604082840152835191826040850152815b83811061048757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610466565b80fd5b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261014c576104d6610898565b506101ef60206104e46108b1565b61053b816040516104f481610778565b60405161050081610778565b80825260043590526040519061051582610750565b600082528582019060405161052981610778565b60008152825260008352519052610a1f565b0151604051918291826104a1565b5061039861055961022d3661020c565b610567600560005414610cf3565b6105e06105846105756107ed565b6020808251830101910161091e565b9161059c61059761027b60045460ff1690565b610d13565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806105cc8433836113e4565b0390a15180159081156106a4575b50610d33565b60e060608201916105f48351431015610d53565b6105fe3415610d73565b61061a3360018060a01b036106138451610170565b1614610d93565b6106226109bb565b926106366106308351610170565b8561099f565b61064f6106466020840151610170565b6020860161099f565b6040820151604085015251606084015261066f6103706080830151610170565b61068861067f60a0830151151590565b151560a0850152565b60c081015160c084015243828401520151610100820152611068565b905060015414386105da565b503461014c57600036600319011261014c576106ca6108b1565b6005600054036106e657606060209160406101246101166107ed565b60405163100960cb60e01b815260086004820152602490fd5b90600182811c9216801561072f575b602083101461071957565b634e487b7160e01b600052602260045260246000fd5b91607f169161070e565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761076b57604052565b610773610739565b604052565b602081019081106001600160401b0382111761076b57604052565b60a081019081106001600160401b0382111761076b57604052565b61010081019081106001600160401b0382111761076b57604052565b601f909101601f19168101906001600160401b0382119082101761076b57604052565b6040519060008260025491610801836106ff565b8083526001938085169081156108775750600114610829575b50610827925003836107ca565b565b6002600090815260008051602061148583398151915294602093509091905b81831061085f57505061082793508201013861081a565b85548884018501529485019487945091830191610848565b905061082794506020925060ff191682840152151560051b8201013861081a565b604051906108a582610750565b60006020838281520152565b604051906108be82610793565b60006080838281526108ce610898565b60208201528260408201528260608201520152565b604051906108f082610778565b816108f9610898565b9052565b51906001600160a01b038216820361014c57565b5190811515820361014c57565b908161010091031261014c5760e060405191610939836107ae565b610942816108fd565b8352610950602082016108fd565b60208401526040810151604084015260608101516060840152610975608082016108fd565b608084015261098660a08201610911565b60a084015260c081015160c0840152015160e082015290565b6001600160a01b039091169052565b506040513d6000823e3d90fd5b6040519061012082016001600160401b03811183821017610a12575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b610a1a610739565b6109d7565b610a276108e3565b6000610a366005825414610db3565b610a3e6107ed565b92610a5360209485808251830101910161091e565b94610a6b610a6661027b60045460ff1690565b610dd3565b60408051338152835160208083019190915284015151818301529091907f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc190606090a1610ac383518015908115610c27575b50610df3565b856060880193610ad585514310610e13565b019485515191610aeb60c08a0193845110610e33565b610af88751513414610e53565b8760808a0192610b12610b0b8551610170565b825161099f565b845182825101527f216835c7eea22b69307d3475736ebcdcdf48107212d1da49fbb21ab3a8f74e44610b4a82518851918291826104a1565b0390a15191015260a088015115610bd35750509160e093916108279693610b9a610b726109bb565b97610b86610b808851610170565b8a61099f565b610b9281880151610170565b90890161099f565b8085015190870152516060860152610bb5336080870161099f565b60a0850152515160c084015243828401520151610100820152611068565b918480808060e0999795610bf4610bef6108279e9b9951610170565b610170565b905190828215610c1e575bf115610c11575b610b9a610b726109bb565b610c196109ae565b610c06565b506108fc610bff565b90506001541438610abd565b15610c3a57565b60405163100960cb60e01b8152600d6004820152602490fd5b15610c5a57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610c7a57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610c9a57565b60405163100960cb60e01b815260106004820152602490fd5b15610cba57565b60405163100960cb60e01b815260116004820152602490fd5b15610cda57565b60405163100960cb60e01b815260126004820152602490fd5b15610cfa57565b60405163100960cb60e01b815260196004820152602490fd5b15610d1a57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d3a57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d5a57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610d7a57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610d9a57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610dba57565b60405163100960cb60e01b815260136004820152602490fd5b15610dda57565b60405163100960cb60e01b815260146004820152602490fd5b15610dfa57565b60405163100960cb60e01b815260156004820152602490fd5b15610e1a57565b60405163100960cb60e01b815260166004820152602490fd5b15610e3a57565b60405163100960cb60e01b815260176004820152602490fd5b15610e5a57565b60405163100960cb60e01b815260186004820152602490fd5b818110610e7e575050565b60008155600101610e73565b610e956002546106ff565b80610e9d5750565b601f8111600114610eb057506000600255565b6002600052610ef590601f0160051c600080516020611485833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610e73565b6000602081208160025555565b60405190610f0f826107ae565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b90601f8211610f4d575050565b6108279160026000526020600020906020601f840160051c83019310610f7b575b601f0160051c0190610e73565b9091508190610f6e565b80519091906001600160401b03811161105b575b610fad81610fa86002546106ff565b610f40565b602080601f8311600114610fe95750819293600092610fde575b50508160011b916000199060031b1c191617600255565b015190503880610fc7565b6002600052601f19831694909190600080516020611485833981519152926000905b87821061104357505083600195961061102a575b505050811b01600255565b015160001960f88460031b161c1916905538808061101f565b8060018596829496860151815501950193019061100b565b611063610739565b610f99565b6101008101516060820180519091116111805761117b61116d9160e061082794611090610f02565b9261109e6106308351610170565b6110ae6106466020840151610170565b604082015160408501525160608401526110ce6103706080830151610170565b6110de61067f60a0830151151590565b60c081015160c0840152015160e08201526110f96005600055565b61110243600155565b6040519283916020830191909160e08061010083019460018060a01b038082511685528060208301511660208601526040820151604086015260608201516060860152608082015116608085015260a0810151151560a085015260c081015160c08501520151910152565b03601f1981018352826107ca565b610f85565b506111af6111916020830151610170565b60808301516001600160a01b03906111a890610170565b169061121c565b60a0810151156111d05750600080556111c86000600155565b610827610e8a565b600080808360c06111e5610bef849751610170565b91015190828215611213575bf115611206575b600080556111c86000600155565b61120e6109ae565b6111f8565b506108fc6111f1565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526001604480840191909152825261129a9360009384939092918491608081016001600160401b038111828210176112a1575b6040525193165af161128a6112836112ae565b8092611312565b50602080825183010191016112fb565b1561014c57565b6112a9610739565b611270565b3d156112f6573d906001600160401b0382116112e9575b604051916112dd601f8201601f1916602001846107ca565b82523d6000602084013e565b6112f1610739565b6112c5565b606090565b9081602091031261014c5761130f90610911565b90565b1561131a5790565b80511561132957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561134a5790565b80511561135957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b919082602091031261014c5760405161138a81610778565b91358252565b908160a091031261014c576080604051916113aa83610793565b6113b3816108fd565b83526113c1602082016108fd565b602084015260408101516040840152606081015160608401520151608082015290565b6001600160a01b0390911681529051602082015260400190565b919082019182811161141257821061014c57565b634e487b7160e01b600052601160045260246000fd5b600061130f928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152600160648201526064815261146d81610793565b5193165af161128a61147d6112ae565b809261134256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6272,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:37:19:after expr stmt semicolon',
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
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
