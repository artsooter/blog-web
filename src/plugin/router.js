function GetRouterPlugins(options) {
  // 使用 options 设置插件实例……
}

GetRouterPlugins.prototype.apply = function (compiler) {
  compiler.hooks.emit.tap('justTest', (compilation, callback) => {
    // 在生成文件中，创建一个头部字符串：
    let filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (const filename in compilation.assets) {
      filelist += (`- ${filename}\n`);
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.js'] = {
      source() {
        return filelist;
      },
      size() {
        return filelist.length;
      },
    };
    console.log(callback);
  });
};

module.exports = GetRouterPlugins;
