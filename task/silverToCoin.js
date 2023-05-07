const base = require('./base');
const qs = require('qs');

/**
 * 漫画签到
 */
class silverToCoin extends base {
  constructor(args) {
    super(args);
    this.silverToCoinURL = `https://api.live.bilibili.com/pay/v1/Exchange/silver2coin`;
    // 查询银瓜子兑换状态
    this.silverToCoinStatusURL =
      'https://api.live.bilibili.com/pay/v1/Exchange/getStatus';
  }

  order() {
    return 4;
  }

  async run() {
    console.log("果粒橙自写，删除银瓜子任务");
  }

  getTaskName() {
    return '银瓜子换硬币';
  }
}

module.exports = silverToCoin;
