module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		// FIXME 修复tailwindcss预检样式与antd的样式冲突问题
		/**
		 * 但是目前还未将包进行引入（除create-next-app自带的包外，未引入任何的包）
		 *
		 * 相关链接：
		 * antdIssues：https://github.com/ant-design/ant-design/issues/38794
		 * postcss插件：https://github.com/yunsii/postcss-antd-fixes
		 */

		// "postcss-antd-fixes": {
		// 	// Support multiple prefixes, if you do not custom antd class name prefix, it's not necessary option.
		// 	// prefixes: ['vp-antd', 'ant'],
		// },
	},
};
