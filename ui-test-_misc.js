const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKFigures_Misc', function () {

	describe('OLSKFigures', function() {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('sets data-domain', function () {
			return browser.assert.attribute(OLSKFigures, 'data-domain', 'loc.tests:' + process.env.PORT);
		});

		context('OLSKFiguresDomain', function () {

			const OLSKFiguresDomain = Math.random().toString()
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKFiguresDomain,
				});
			});

			it('sets data-domain', function () {
				return browser.assert.attribute(OLSKFigures, 'data-domain', OLSKFiguresDomain);
			});
		
		});

	});

});
