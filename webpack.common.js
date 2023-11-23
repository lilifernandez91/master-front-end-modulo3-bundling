import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: "asset/resource"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
        ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist/
            template: "./index.html", //Name of template in ./src
            scriptLoading: "blocking", // Load the scripts correctly
        }),
    ],
};