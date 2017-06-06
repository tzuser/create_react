const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require("webpack");
const path=require('path');

module.exports={
	context:path.resolve(__dirname,'src'),
	entry:{
		main:'./index.jsx'
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].js',
		chunkFilename:'[name]-[id].js',
		publicPath:'/',
	},
	module:{
		rules:[
		{
			test:/\.(js|jsx)$/,
			use:[{
				loader:'babel-loader',
				options:{presets:["es2015","stage-0","babel-preset-react"]}
			},],
		},
		{
			test:/\.css$/,
			use:['postcss-loader'],
		},
		]
	},
	resolve:{
		//(import Func from './file') to (import Func from './file.js')
		extensions:['.js','.jsx']
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({//公共组件分离
			name:'commons',
			filename:'commons.js',
			minChunks:function(module){
				return module.context && module.context.indexOf('node_modules') !==-1;
			}
		}),
		new HtmlWebpackPlugin({//动态创建html文件
			inject: true,
			title: 'My App',
      		template: '../index.ejs'
		})
	],
}