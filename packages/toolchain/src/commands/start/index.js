// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require("@atools/cf").BC;

export default class Start extends BC {
  static command = "start"
  static alias = "s"
  static description = "start to write"
  init (commander) {
  }

  async do () {
    await console.log('Hello World.')
  }
}
