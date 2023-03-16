const path = require('path')


module.exports = {
    mode: 'production',
    entry: "./src/react_widget.tsx",
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../widget'),
        libraryTarget: 'amd'
    },
    module:{
        rules:[
        {
            test: /\.tsx?$/, // определяем тип файлов
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],}
    
}