(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKFigures = global.OLSKFigures || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

		OLSKFiguresEndpointURL () {
			return 'https://old-fire-5813.dash-cloudflare-com7350.workers.dev/js/script.js';
		},

		OLSKFiguresLoad (inputData) {
			// https://stackoverflow.com/questions/925039/detect-iframe-embedding-in-javascript
			if (window !== window.top) {
				return;
			}

			const target = document.createElement('div');
			document.body.appendChild(target);

			// https://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml
			var setInnerHTML = function(elm, html) {
			  elm.innerHTML = html;
			  Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
			    const newScript = document.createElement("script");
			    Array.from(oldScript.attributes)
			      .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
			    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
			    oldScript.parentNode.replaceChild(newScript, oldScript);
			  });
			}
			// target.innerHTML = `<script class="OLSKFigures" defer data-domain="${ location.host }" src="${ window.location.host.match('loc.tests') ? '' : mod.OLSKFiguresEndpointURL() }"></script>`;
			setInnerHTML(target, `<script class="OLSKFigures" defer data-domain="${ window.OLSKFiguresDomain || location.host }" src="${ window.location.host.match('loc.tests') ? '' : mod.OLSKFiguresEndpointURL() }"></script>`);
		},

		// MESSAGE

		DOMContentLoaded () {
			const _mod = (typeof process !== 'undefined' && process.env.npm_lifecycle_script === 'olsk-spec') ? this : mod;

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
