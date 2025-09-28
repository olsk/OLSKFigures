(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKFigures = global.OLSKFigures || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

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

			setInnerHTML(target, `<script class="OLSKFigures" async src="${ window.location.host.match('loc.tests') ? '' : 'https://figures.rosano.ca/main.js' }" data-ackee-server="https://figures.rosano.ca" data-ackee-domain-id="${ (function(host) {
				host = host.replace('www.', '').split(':').shift();

				return ({
					'rosano.ca': 'ee1cb071-8dcb-455c-a926-a03842bbf454',
					'rosano.hmm.garden': '8df857eb-2cc5-43ee-bde3-f34db432391a',
					'strolling.rosano.ca': '9d83f3f8-a04d-42be-896c-f916b6e0db4b',

					'0data.app': '49b802c8-f3ad-462a-b513-0708a9ff5087',
					'easyindie.app': '1e38a705-5463-4881-b7f9-bc54dbf5dcd6',
					
					'hyperdraft.rosano.ca': 'da830dd2-ab32-4593-bbd8-03899eb15c1a',
					'emojilog.rosano.ca': 'a67c371a-e452-4fa4-8ed9-429d05c38f9a',
					'joybox.rosano.ca': 'bceb6b40-7346-4826-8c54-d7fe1df162ca',
					'launchlet.dev': '5cf7bd89-e4bf-4475-a2c3-ad5e1d7dd75e',
					'kommit.rosano.ca': 'ab6ee12f-e8d3-4294-82a7-d6a38e2c7af1',
					'sharesnip.rosano.ca': 'f38dd1be-6446-4ed3-aa89-d6166e6d731f',

					'idiomatic.rosano.ca': '724e1073-e9b8-4f41-8fcc-0b8a16633377',
					'massagetxt.rosano.ca': 'cf7fc491-1747-4427-b3b6-cacafffe69d8',

					'archive.rosano.ca': 'e9295a03-3be8-4c2d-98b8-46f37d03a09d',
					
					'loc.tests': 'test-domain',
				})[host];
			})(location.host) }"></script>`);
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
