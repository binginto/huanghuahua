'use strict';

global.BaseURL = "http://dev.gzmoninet.com:8083/wxmp-yunejia"; // 测试环境
global.BaseURL_OG = "https://api.gzmoninet.com/app-og";


// 分享 share
global.shareVideo = BaseURL + "/school/share/videoDetail";
global.checkUserBindHospital = BaseURL + "/school/checkHospitalAuthUserInfo";
global.checkVideoIsOpen = BaseURL + "/school/checkVideoIsOpen";
global.share_video = BaseURL + "/videos";
global.courseShare = BaseURL_OG + "/lessons/courseShare";    //og课程列表分享
global.shareVideoList = BaseURL + "/school/videoList/share";


// 唤醒程序数据
global.download_url_IOS = 'https://itunes.apple.com/cn/app/%E5%AD%95e%E5%AE%B6/id1271257634?l=zh&ls=1&mt=8';
global.download_url_Adr = 'http://yunejia.gzmoninet.com/website/yunejia/index.html';
global.scheme_IOS = 'yunejia://start';
global.scheme_Adr = 'yunejia://start';
global.myAppLinks = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.moni.perinatal'; // 应用宝连接

global.pregnantNotice = BaseURL + "/school/hospital/articles";
global.knowledgeGraphs = BaseURL + "/knowledgeGraphs";

