const webpack = require("@nativescript/webpack");
module.exports = (env) => {
	webpack.init(env);
	// config.node = { fs: "empty" };
	webpack.mergeWebpack({ resolve: {fallback:{fs:false,path:false}} })
	// resolve.fallback.fs = false;
	return webpack.resolveConfig();
};


