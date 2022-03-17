/*
Those funcitons can be imported via "loadash.js" package
*/

// eslint-disable-next-line no-extend-native
Array.prototype.distinct = function () {
  return this.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
};

// eslint-disable-next-line no-extend-native
Array.prototype.groupBy = function (func) {
  return this.reduce((a, b, i) => {
    const key = func(b, i, this);
    if (a[key]) {
      a[key].push(b);
    } else {
      a[key] = [b];
    }
    return a;
  }, {});
};
