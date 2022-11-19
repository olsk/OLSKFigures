const mod = {

};

Object.entries(mod).map(function (e) {
	return global[e.shift()] = e.pop();
});

Object.assign(exports, mod);
