var path = require('path');
module.exports={
    entry: path.join(__dirname, './src/index.js'),//入口文件
    
    output:{
        path: path.join(__dirname, './dist'),//打包后的文件位置
        filename:'bundle.js'//打包后的文件
    },
	module: {
        rules:[
            {   
                test: /(\.jsx|\.js)$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env","react","stage-0"
                        ]
                    }}],
                exclude:/node_modules/
            },
			{
				test:/\.css$/,
                use:['style-loader','css-loader']
            },
            { 
                test: /\.(svg|png|jpg)\??.*$/,
                use: 'url-loader?name=[path][name].[ext]'
            }
			]
    },
	 devServer: {
        //contentBase: 'app/',//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        port:8085//更改端口号，默认8080
    },

}
