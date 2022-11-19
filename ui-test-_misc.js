const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFigures_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKFigures', function() {

		it('sets data-domain', function () {
			browser.assert.attribute(OLSKFigures, 'data-domain', 'loc.tests');
		});

		context('OLSKFiguresDomain', function () {

			const OLSKFiguresDomain = Math.random().toString()
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKFiguresDomain,
				});
			});

			it('sets data-domain', function () {
				browser.assert.attribute(OLSKFigures, 'data-domain', OLSKFiguresDomain);
			});
		
		});

	});

});
