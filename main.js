(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKFigures = global.OLSKFigures || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

		OLSKFiguresEndpointURL () {
			return 'https://old-fire-5813.dash-cloudflare-com7350.workers.dev/js/script.js';s
		},

		OLSKFiguresLoad (inputData) {
			const target = document.createElement('div');
			document.body.appendChild(target);
			target.innerHTML = `<script class="OLSKFigures" defer data-domain="${ location.host }" src="${ window.location.host.match('loc.tests') ? '' : mod.OLSKFiguresEndpointURL() }"></script>`;
		},

		// MESSAGE

		DOMContentLoaded () {
			const _mod = (typeof process !== 'undefined' && process.env.npm_lifecycle_script === 'olsk-spec') ? this : mod;

			if (typeof window === 'object' && window.location.host.match('loc.tests')) {
				return;
			}

			_mod.OLSKFiguresLoad();
		},

		// LIFECYCLE

		LifecycleModuleDidLoad (debug) {
			(debug || window).document.addEventListener('DOMContentLoaded', mod.DOMContentLoaded);
		},

	};

	Object.assign(exports, mod);

	if (typeof window === 'object') {
		mod.LifecycleModuleDidLoad();
	}

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
