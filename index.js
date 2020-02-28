class SetVersion {
    apply(compiler) {
        compiler.hooks.compilation.tap('setVersion', (
            compilation, callback
        ) => {
            compilation.plugin(
                "html-webpack-plugin-before-html-processing",
                function (htmlPluginData, callback) {
                    let version = new Date().getTime();
                    htmlPluginData.assets.js = htmlPluginData.assets.js.map(js =>
                        js = js + `?t=${version}`
                    );
                    htmlPluginData.assets.css = htmlPluginData.assets.css.map(js =>
                        js = js + `?t=${version}`
                    );
                }
            )
        });
    }
}
module.exports = new SetVersion();