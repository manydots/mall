import Tools from 'utils/index';
const linkConfig = {
  //本地localhost或127.0.0.1环境下的路径设置
  local: {
    'index': '/demos/index.html',
    'login': '/demos/login.html',
    'detail':'/demos/detail.html'
  },
  onLine: {//自行根据服务端路径定义
    'index': '/demos/index.html',
    'login': '/demos/login.html',
    'detail':'/demos/detail.html'
  }
}

const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;
export default links;