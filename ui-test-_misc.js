const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFigures_Misc', function () {

	describe('OLSKFigures', function() {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('sets data-ackee-domain-id', function () {
			return browser.assert.attribute(OLSKFigures, 'data-ackee-domain-id', 'test-domain');
		});

	});

});
