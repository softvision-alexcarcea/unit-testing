module.exports = function(config) {
	const reporters = process.env.NODE_ENV === 'test' ?
		['progress', 'kjhtml', 'coverage-istanbul'] :
		['progress', 'kjhtml']
	;
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		preprocessors: {
			'src/**/*.js': ['babel'],
			'test/**/*.js': ['babel']
		},
		babelPreprocessor: {
			options: {
				presets: [[
					'@babel/preset-env',
					{ modules: false }
				]]
			}
		},
		reporters,
		coverageIstanbulReporter: {},
		files: [
			{ pattern: 'test/**/*.js', type: 'module' },
			{ pattern: 'src/**/*.js', type: 'module', included: false }
		]
	});
};

