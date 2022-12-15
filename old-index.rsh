'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    num: UInt,
    showNum: Fun([UInt], Null),
  });
  init();
  A.only(() => {
    const n = declassify(interact.num);
  });
  A.publish(n);
  commit();
  const m = n + 1;
  A.interact.showNum(m);
  exit();

})