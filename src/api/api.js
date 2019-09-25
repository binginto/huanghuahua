// aiUrl路径
export default {
  // baseUrl: 'http://dev.gzmoninet.com/moni-web',  // 测试服务器
  // baseUrl: 'http://api.gzmoninet.com/moni-web', // 正式服务器
  // baseUrl: 'http://dev.gzmoninet.com/wxmp-yunejia', // 测试服务器
  // baseUrl: 'https://yunejia.gzmoninet.com/wxmp-yunejia', // 正式服务器
  baseUrl: 'https://api.gzmoninet.com/wxmp-yunejia', // 正式服务器
  // avatarUrl: 'http://dev.gzmoninet.com/wechat_image/', // 测试服务器头像反向代理地址
  avatarUrl: 'https://yunejia.gzmoninet.com/wechat_image/', // 正式服务器头像反向代理地址
  // baseUrl: 'http://192.168.1.61:8083/wxmp-yunejia', // 袁程服务器
  getWechatUserInfo: '/official/userInfo', // 获取公众号用户信息
  getWechatConfig: 'official/signature', // 获取公众号jssdk签名配置

}