const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKFiguresEndpointURL', function test_OLSKFiguresEndpointURL () {

	it('returns string', function () {
		deepEqual(mod.OLSKFiguresEndpointURL(), 'https://old-fire-5813.dash-cloudflare-com7350.workers.dev/js/script.js');
	});

});

describe('DOMContentLoaded', function test_DOMContentLoaded() {

	const _DOMContentLoaded = function (inputData = {}) {
		return Object.assign(Object.assign({}, mod), {
			OLSKFiguresLoad: (function () {}),
		}, inputData).DOMContentLoaded();
	};

	it('calls OLSKFiguresLoad', async function () {
		const item = Math.random().toString();
		deepEqual(await uCapture(function (capture) {
			_DOMContentLoaded({
				OLSKFiguresLoad () {
					return capture(item);
				},
			});
		}), [item]);
	});

});

describe('LifecycleModuleDidLoad', function test_LifecycleModuleDidLoad() {

	it('listens for DOMContentLoaded', function () {
		deepEqual(uCapture(function (addEventListener) {
			mod.LifecycleModuleDidLoad({
				document: {
					addEventListener,
				},
			});
		}), ['DOMContentLoaded', mod.DOMContentLoaded]);
	});

});
