const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["church-ruins.jpg","favicon.png","forest-path.png","trees-from-rocks.jpg","water-lilies.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-3bbc086d.js","imports":["_app/immutable/start-3bbc086d.js","_app/immutable/chunks/index-941c896a.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
