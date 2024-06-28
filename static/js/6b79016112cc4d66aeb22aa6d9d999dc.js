/*判断*/
function isInclude(name){
	var js= /js$/i.test(name);
	var es=document.getElementsByTagName(js?'script':'link');
	for(var i=0;i<es.length;i++) 
	if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;
	return false;
}
if(isInclude("/main.css") == false){
	$("head").append('<link href="/cms_files/webmiit/tplobject/gxbsy/7cdb63ce84fc43b8a14ef96215171444/images/main.css" rel="stylesheet">');
}

document.writeln("<style>.wza_phone{display:none;} @media(max-width:768px) {.wza_phone{display:block !important;} .wza_pc{display:none !important;}}</style>");
//document.writeln("<script id=\"barrierfree\" src=\"/cms_files/filemanager/accessiblereading/load.js\"></script>");

document.writeln("<h2 class=\'logos pclog fl\'><a href=\'/\'><img src=\'/cms_files/filemanager/1226211233/picture/202112/d7cb9fc4c5a54b00b0f2f5540ba0e227.png\'></a></h2>");

document.writeln("<h2 class=\'logos waplog fl\' style=\'display:none;\'><a href=\'/\'><img src=\'/cms_files/filemanager/1226211233/picture/20222/ac606e43c9b24276b75d7847da79b96c.png\'></a></h2>");

document.writeln("<div class=\'h_right fr\'>");
document.writeln("    <ul>");
//document.writeln("        <li><a href=\"javascript:;\" onclick=\"toggleToolBar();\"><img title=\"无障碍浏览\" style=\"position:relative;top:2px;\" src=\"/cms_files/filemanager/picture/20207/S41c11d74fa5d4bce99f1684374973f95-0.jpg\"/></a></li>");

document.writeln("        <li class=\"wza_pc\"><a href=\"javascript:void(0)\" onclick=\"aria.start()\">无障碍浏览</li>");

document.writeln("        <li><a href=\"https://bzxx.miit.gov.cn/qa/znzx/main\" target=\"_blank\"><img title=\"阳光小信\" style=\"position:relative;top:0;\" src=\"/cms_files/filemanager/1226211233/picture/20222/c839e24f7e7841c990029b048d5a386a.png\"/></a></li>");

document.writeln("        <li class=\"wza_phone\"><a href=\"https://www.miit.gov.cn/_config.html\" ><img title=\"无障碍浏览\" style=\"position:relative;top:2px;\" src=\"/cms_files/filemanager/picture/20207/S41c11d74fa5d4bce99f1684374973f95-0.jpg\"/></a></li>");
document.writeln("        <li><a href=\"/ydbwz/index.html\" target=\"_blank\"><img title=\"移动版网站\" style=\"position:relative;top:3px;\" src=\"/cms_files/filemanager/1226211233/picture/202112/116a8dfa41e740528f8dc8d755dc6534.png\"/></a></li>");
document.writeln("        <li><a href=\'https://mail.miit.gov.cn/\' target=\'_blank\'><img title=\"邮箱登录\" style=\"position:relative;top:4px;\" src=\"/cms_files/filemanager/1226211233/picture/202112/cd74db4378a340939344cf61dc74069d.png\"/></a></li>");
//document.writeln("        <li>工信微报</li>");
document.writeln("");
document.writeln("        <li class=\'share\'>");
document.writeln("            <a href=\'javascript:;\' style=\'position:relative;\' class=\'weixin\' onmouseover=\'erweima.style.display=&#39;block&#39;;\'");
document.writeln("               onmouseout=\'erweima.style.display=&#39;none&#39;;\'>");
document.writeln("                <div id=\'erweima\' onmouseover=\'this.style.display=&#39;block&#39;;\'");
document.writeln("                     onmouseout=\'this.style.display=&#39;none&#39;;\' class=\'wxshare\' style=\'display: none;position:absolute;z-index:999999;\'>");
document.writeln("                    <img src=\'/cms_files/filemanager/picture/201911/13fc9b5fb8f148a88d5d8ca0f722f389.png\'></div>");
document.writeln("            </a>");
document.writeln("            <a href=\'http://weibo.com/miit\' class=\'weibo\' target=\'_blank\' title=\'工信微报\'></a>");
document.writeln("        </li>");
document.writeln("");
//document.writeln("        <li class=\'fk\' style=\"position:relative;\"><a href=\'javascript:;\' onmouseover=\'fkyy.style.display=&#39;block&#39;;\'");
//document.writeln("                                 onmouseout=\'fkyy.style.display=&#39;none&#39;;\'>访客预约");
//document.writeln("        </a>");
//document.writeln("            <div id=\'fkyy\' style=\"display: none; position: absolute; top: 25px; left: -70px;\" class=\'wxshare\' style=\'display: none;\'>");
//document.writeln("                <img src=\'/cms_files/filemanager/picture/20204/50dc14b29d02481e9cedf387dd0c5a66.jpg\'></div>       </li>");
document.writeln("        <li class=\'take\'><a href=\'/RRSdy/index.html\' target=\'_blank\'>RSS订阅</a>");
document.writeln("        </li>");
document.writeln("    </ul>");
document.writeln("");
document.writeln("    <div class=\'searchbox clearfix\' style=\'height:auto;\'>");
document.writeln("        <!--     <form action=\'http://www.miit.gov.cn/search/search.jsp\' method=\'post\' target=\'_blank\' id=\'form\'>  -->");

document.writeln("            <form id=\'form\' name=\'searchform\' action=\'/search/index.html\' method=\'get\' target=\'_blank\'>");
document.writeln("                <input id=\'websiteid\' name=\'websiteid\' type=\'hidden\' value=\'110000000000000\'>");
document.writeln("                <input id=\'pg\' name=\'pg\' type=\'hidden\' value=\'\'>");
document.writeln("                <input id=\'p\' name=\'p\' type=\'hidden\' value=\'\'>");
document.writeln("                <input id=\'tpl\' name=\'tpl\' type=\'hidden\' value=\'\'>");
document.writeln("                <input id=\'category\' name=\'category\' type=\'hidden\' value=\'\'>");
document.writeln("                <input class=\'s_ipt fl\' id=\'q\' name=\'q\' type=\'text\' autocomplete=\'off\'  placeholder=\'\'>");
// document.writeln("                <input class=\'search-txt\' id=\'q\' name=\'q\' type=\'text\' autocomplete=\'off\' value=\'请输入关键词\'>");
document.writeln("            <input id=\'jsfl\' name=\'jsflIndexSeleted\' type=\'hidden\'>");
document.writeln("                <input id=\'user-defined02\' class=\'ibt fr\' type=\'submit\' value=\'统一搜索\'>");
document.writeln("            </form>")

//document.writeln("        <a onclick=\'document.getElementById(&#39;jsfl&#39;).value=&#39; &#39;; form.submit()\' id=\'user-defined02\' class=\'ibt fr\'>统一搜索</a>");
document.writeln("    </div>");
document.writeln("    <div class=\'hotword\'>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&q=&p=1&cateid=45&start=&end=\'>看新闻</a>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&q=&p=1&cateid=46&start=&end=\'>找文件</a>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&q=我要办事&p=1&cateid=47\'>查办事</a>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&q=&p=1&cateid=48&start=&end=\'>提意见</a>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&q=&p=1&cateid=49&start=&end='>查数据</a>");
document.writeln("        <a target=\'_blank\' href=\'/search/index.html?websiteid=110000000000000&pg=&p=&tpl=&category=&q=投诉\'>要投诉</a>");
document.writeln("    </div>");
document.writeln("</div>");

document.writeln("<style>");
document.writeln(".head .h_right{width:500px;float:right;padding-top:17px;}");
document.writeln(".head .h_right ul{font-size:12px;float:right;}");
document.writeln(".head .h_right ul li{margin-left: 0px !important; margin-top: 0 !important;}");
document.writeln(".head .h_right .searchbox{margin-left:158px;margin-top:7px;}");
document.writeln(".head .h_right .hotword{text-align:right;}");
document.writeln(".head .h_right > ul,");
document.writeln(".head .h_right > div{float:right;}");
document.writeln(".head .h_right > ul {line-height:26px;vertical-align:middle;}");
document.writeln(".head .h_right > ul > li > a {font-size:12px;}");
document.writeln(".head .h_right > ul > li > a > img{margin-left:17px;vertical-align:top;}");
document.writeln(".head .h_right > ul > li.fk{margin-left:12px !important;}");
document.writeln(".head .h_right > ul > li.share{margin-left:19px !important;}");
document.writeln(".head .h_right > ul > li.take{margin-left:10px !important;}");
document.writeln(".nav{padding-bottom:10px;}");
document.writeln(".nav *{vertical-align:top;}");
document.writeln(".head .h_right ul li.take:before{content: '|';margin-right: 15px;color: #333;}");
document.writeln("</style>");
document.writeln("<style>");
document.writeln(".nav > div > a, .nav > a{margin:0 37px}");






document.writeln("body{background:url(/cms_files/filemanager/1226211233/picture/20222/a5d67fbde3544ec9974d5c86f521171c.jpg) no-repeat center top}");
document.writeln(".bj_pic{display:none;}");
document.writeln(".nav > div > a, .nav > a{color:#fff;font-weight:normal;}");
document.writeln(".nav > div > a:hover,");
document.writeln(".nav > a:hover{font-weight:bold;color:#fff;}");
document.writeln(".nav_curr{border-bottom:3px solid #f1b645;}");
document.writeln(".head .h_right .searchbox{background:#fff;margin-top:10px;}");
document.writeln(".head .h_right .searchbox .ibt{background-color:#f1b645;}");
document.writeln(".head .h_right .searchbox{border:0;}");
document.writeln(".head .h_right .hotword a,");
document.writeln(".head .h_right ul li a{color:#fff;}");
document.writeln(".head .h_right ul li.take:before{color:#fff;}");
document.writeln(".head .h_right ul .share .weibo{background:url(/cms_files/filemanager/1226211233/picture/202112/f96cf302135243aa9dbbcaf836e4e4b0.png) no-repeat 50% 50%;margin-left:15px;margin-right:0;}");
document.writeln(".head .h_right ul .share .weixin{width:22px;background:url(/cms_files/filemanager/1226211233/picture/202112/9902c1ed71b84e0e94088aeff9d197e5.png) no-repeat 50% 50%;}");
document.writeln(".head .h_right ul .share .weibo{}");
document.writeln(".head .h_right ul .share .weibo{margin-left:15px;margin-right:0;}");
document.writeln(".head .h_right .hotword a{margin:0 0 0 12px;}");
document.writeln(".head .h_right .searchbox{width:400px;}");
document.writeln(".head .h_right .searchbox .ibt{width:100px;}");
document.writeln(".head .h_right .searchbox .s_ipt{width:290px;}");
document.writeln(".head .h_right .hotword{float:left;margin-left:87px;}");
document.writeln(".head .h_right .hotword{margin-left:88px;}");
document.writeln(".head .h_right > ul > li > a > img{margin-left: 20px;}");
document.writeln(".head .h_right > ul > li.fk {margin-left: 20px !important;}");
document.writeln(".head .logos{margin-top:50px;}");
document.writeln(".xiala{top:63px;}");
document.writeln(".nav > div > a, .nav > a{height:51px;}");
document.writeln("</style>");