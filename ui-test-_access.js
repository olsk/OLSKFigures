const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKFigures: '.OLSKFigures',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKFigures_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKFigures', function () {
		browser.assert.elements(OLSKFigures, 1);
	});

});
