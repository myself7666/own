/*
发财挖宝
更新时间：2022-3-29
活动入口：极速版-发财挖宝
目前需要下一单才能通关，需要的自己玩下

如提示活动火爆，可尝试多次运行脚本

默认助力满40停止。

40 6,17 15 4 * https://raw.githubusercontent.com/KingRan/KR/main/jd_fcwb_help.js, tag=发财挖宝, img-url=https://github.com/58xinian/icon/raw/master/jdgc.png, enabled=true

*/
const $ = new Env('发财挖宝助力-按需使用');
var _0xoda='jsjiami.com.v6',_0xoda_=['_0xoda'],_0x585f=[_0xoda,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x68\x61\x73\x45\x6e\x64','\x70\x54\x54\x76\x4a\x65\x53\x54\x72\x70\x74\x68\x67\x6b\x39\x41\x53\x42\x56\x47\x73\x77','\x67\x65\x74\x54\x69\x6d\x65','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x0a\u3010\u9ed8\u8ba4\u5168\u90e8\u52a9\u529b\u8d26\u53f7\u4e00\uff0c\u9080\u8bf7\u6ee1\x34\x30\u81ea\u52a8\u505c\u6b62\u3011\x0a\u3010\u52a0\u5bc6\u811a\u672c\uff0c\u4e0d\u653e\u5fc3\u53ef\u7981\u7528\u3011\x0a','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x6c\x65\x6e\x67\x74\x68','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x70\x65\x72\x73\x6f\x6e\x4e\x75\x6d','\x68\x65\x6c\x70\x43\x6f\x75\x6e\x74','\x68\x65\x6c\x70\x6f\x6b','\u3010\u8d26\u53f7','\u3011\u5df2\u9080\u8bf7\u4eba\u6570\uff1a','\x20\u3010\u8d26\u53f7\x31\u3011\u5df2\u9080\u8bf7\u4eba\u6570\uff1a','\x67\x65\x74','\x68\x61\x70\x70\x79\x44\x69\x67\x48\x6f\x6d\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x70\x61\x72\x73\x65','\x73\x75\x63\x63\x65\x73\x73','\x64\x61\x74\x61','\x63\x75\x72\x52\x6f\x75\x6e\x64','\x69\x6e\x76\x69\x74\x65\x43\x6f\x64\x65','\x6d\x61\x72\x6b\x65\x64\x50\x69\x6e','\x62\x6c\x6f\x6f\x64','\u3010\u5f53\u524d\u52a9\u529b\u3011\x3a','\u62b1\u6b49\uff0c\u8c8c\u4f3c\u8d26\u53f7\u5df2\u9ed1\uff0c\u8df3\u8fc7\uff01','\x6c\x6f\x67\x45\x72\x72','\x68\x61\x70\x70\x79\x44\x69\x67\x48\x65\x6c\x70\x4c\x69\x73\x74','\x7b\x22\x6c\x69\x6e\x6b\x49\x64\x22\x3a\x22\x70\x54\x54\x76\x4a\x65\x53\x54\x72\x70\x74\x68\x67\x6b\x39\x41\x53\x42\x56\x47\x73\x77\x22\x2c\x22\x69\x6e\x76\x69\x74\x65\x72\x22\x3a\x22','\x22\x2c\x22\x69\x6e\x76\x69\x74\x65\x43\x6f\x64\x65\x22\x3a\x22','\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x31\x31\x35\x37\x25\x33\x42\x31\x39\x37\x65\x65\x36\x39\x37\x64\x35\x30\x63\x61\x33\x31\x36\x66\x33\x35\x38\x32\x34\x38\x38\x63\x37\x66\x61\x39\x64\x33\x34\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x64\x39\x34\x35\x31\x64\x65\x62\x31\x38\x6e\x31\x50\x33\x31\x4a\x75\x6e\x53\x47\x54\x66\x5a\x68\x6d\x65\x62\x75\x69\x76\x77\x73\x45\x77\x59\x57\x55\x51\x46\x31\x5a\x6b\x70\x64\x74\x75\x53\x6d\x4b\x4f\x45\x53\x35\x44\x6e\x49\x4d\x46\x64\x79\x4f\x76\x4b\x69\x6b\x64\x67\x75\x65\x6c\x49\x69\x42\x55\x6e\x4a\x62\x65\x43\x67\x6f\x4e\x6c\x63\x45\x76\x76\x25\x33\x42\x36\x65\x30\x39\x30\x63\x62\x64\x65\x33\x33\x37\x35\x39\x30\x62\x35\x31\x61\x35\x31\x34\x37\x31\x38\x66\x65\x65\x33\x39\x31\x64\x34\x36\x66\x65\x63\x65\x36\x62\x39\x35\x33\x65\x64\x31\x30\x38\x34\x61\x30\x35\x32\x66\x36\x64\x37\x36\x66\x66\x62\x64\x39\x32\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x31\x31\x35\x37','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x68\x61\x70\x70\x79\x44\x69\x67\x48\x65\x6c\x70\x26\x62\x6f\x64\x79\x3d','\x26\x74\x3d','\x6e\x6f\x77','\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30\x26\x68\x35\x73\x74\x3d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x57\x69\x6e\x64\x6f\x77\x73\x20\x4e\x54\x20\x31\x30\x2e\x30\x3b\x20\x57\x69\x6e\x36\x34\x3b\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39\x30\x2e\x30\x2e\x34\x34\x33\x30\x2e\x32\x31\x32\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\u3010\u52a9\u529b\u72b6\u6001\u3011\uff1a','\x65\x72\x72\x4d\x73\x67','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x69\x6e\x66\x6f\x2f\x51\x75\x65\x72\x79\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x63\x6e','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x73\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x2f\x6a\x69\x6e\x67\x64\x6f\x75\x2f\x6d\x79\x2e\x73\x68\x74\x6d\x6c\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x4a\x44\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54','\x2e\x2f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53','\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54','\x4a\x44\x55\x41','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x34\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31','\x70\x6f\x73\x74','\x72\x65\x74\x63\x6f\x64\x65','\x62\x61\x73\x65','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\u4eac\u4e1c\u670d\u52a1\u5668\u8fd4\u56de\u7a7a\u6570\u636e','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x32\x2e\x32\x3b\x31\x34\x2e\x33\x3b','\x3b\x4d\x2f\x35\x2e\x30\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x41\x44\x49\x44\x2f\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x32\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x34\x31\x39\x39\x31\x37\x35\x31\x39\x33\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x36\x33\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31\x3b','\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39','\x63\x68\x61\x72\x41\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x6f\x62\x6a\x65\x63\x74','\u4eac\u4e1c\u670d\u52a1\u5668\u8bbf\u95ee\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u81ea\u8eab\u8bbe\u5907\u7f51\u7edc\u60c5\u51b5','\x73\x74\x72\x69\x6e\x67','\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x2f\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d','\x26\x62\x6f\x64\x79\x3d','\x26\x74\x3d\x31\x36\x33\x35\x35\x36\x31\x36\x30\x37\x31\x32\x34\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x32\x2e\x30','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x6e\x7a\x66\x2e\x6a\x64\x2e\x63\x6f\x6d','\x20\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x37\x2e\x36\x3b','\x64\x64\x6c\x6a\x45\x73\x6a\x71\x53\x69\x61\x6d\x69\x2e\x63\x6f\x50\x46\x59\x71\x6d\x54\x48\x2e\x76\x36\x3d\x3d'];function _0x49e8(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x0));var _0x34a12b=_0x585f[_0x2d8f05];return _0x34a12b;};(function(_0x36c6a6,_0x33748d){var _0x3e4c21=0x0;for(_0x33748d=_0x36c6a6['shift'](_0x3e4c21>>0x2);_0x33748d&&_0x33748d!==(_0x36c6a6['pop'](_0x3e4c21>>0x3)+'')['replace'](/[ddlEqSPFYqTH=]/g,'');_0x3e4c21++){_0x3e4c21=_0x3e4c21^0xdf199;}}(_0x585f,_0x49e8));const notify=$[_0x49e8('0')]()?require(_0x49e8('1')):'';const jdCookieNode=$[_0x49e8('0')]()?require(_0x49e8('2')):'';const JD_API_HOST=_0x49e8('3');let cookiesArr=[],cookie='',message;let inviteCodes=[];$[_0x49e8('4')]=![];let link=_0x49e8('5');var timestamp=new Date()[_0x49e8('6')]();if($[_0x49e8('0')]()){Object[_0x49e8('7')](jdCookieNode)[_0x49e8('8')](_0x1c04d7=>{cookiesArr[_0x49e8('9')](jdCookieNode[_0x1c04d7]);});if(process[_0x49e8('a')][_0x49e8('b')]&&process[_0x49e8('a')][_0x49e8('b')]===_0x49e8('c'))console[_0x49e8('d')]=()=>{};}else{cookiesArr=[$[_0x49e8('e')](_0x49e8('f')),$[_0x49e8('e')](_0x49e8('10')),...jsonParse($[_0x49e8('e')](_0x49e8('11'))||'\x5b\x5d')[_0x49e8('12')](_0x15d467=>_0x15d467[_0x49e8('13')])][_0x49e8('14')](_0x121615=>!!_0x121615);}!(async()=>{console[_0x49e8('d')](_0x49e8('15'));if(!cookiesArr[0x0]){$[_0x49e8('16')]($[_0x49e8('17')],_0x49e8('18'),_0x49e8('19'),{'open-url':_0x49e8('19')});return;}for(let _0x3f7b30=0x0;_0x3f7b30<cookiesArr[_0x49e8('1a')];_0x3f7b30++){if(cookiesArr[_0x3f7b30]){cookie=cookiesArr[_0x3f7b30];$[_0x49e8('1b')]=decodeURIComponent(cookie[_0x49e8('1c')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x49e8('1c')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x49e8('1d')]=_0x3f7b30+0x1;$[_0x49e8('1e')]=!![];$[_0x49e8('1f')]='';message='';await TotalBean();console[_0x49e8('d')](_0x49e8('20')+$[_0x49e8('1d')]+'\u3011'+($[_0x49e8('1f')]||$[_0x49e8('1b')])+_0x49e8('21'));if(!$[_0x49e8('1e')]){$[_0x49e8('16')]($[_0x49e8('17')],_0x49e8('22'),_0x49e8('23')+$[_0x49e8('1d')]+'\x20'+($[_0x49e8('1f')]||$[_0x49e8('1b')])+_0x49e8('24'),{'open-url':_0x49e8('19')});if($[_0x49e8('0')]()){await notify[_0x49e8('25')]($[_0x49e8('17')]+_0x49e8('26')+$[_0x49e8('1b')],_0x49e8('23')+$[_0x49e8('1d')]+'\x20'+$[_0x49e8('1b')]+_0x49e8('27'));}continue;}await getUA();await run();if($[_0x49e8('4')])break;}}})()[_0x49e8('28')](_0x322a19=>{$[_0x49e8('d')]('','\u274c\x20'+$[_0x49e8('17')]+_0x49e8('29')+_0x322a19+'\x21','');})[_0x49e8('2a')](()=>{$[_0x49e8('2b')]();});async function run(){$[_0x49e8('2c')]=0x0;try{await happyDigHome();let _0x18e692=await help();await happyDigHelpList();if($[_0x49e8('1d')]==0x1){$[_0x49e8('2d')]=$[_0x49e8('2c')];}else if($[_0x49e8('2e')]==!![]){$[_0x49e8('2d')]++;}console[_0x49e8('d')](_0x49e8('2f')+$[_0x49e8('1d')]+_0x49e8('30')+$[_0x49e8('2c')]+($[_0x49e8('1d')]!=0x1&&_0x49e8('31')+$[_0x49e8('2d')]||''));if($[_0x49e8('2d')]>=0x28)$[_0x49e8('4')]=!![];}catch(_0x933d6a){console[_0x49e8('d')](_0x933d6a);}}function happyDigHome(){return new Promise(_0x20e5bf=>{let _0xbf752b={'linkId':link};$[_0x49e8('32')](taskurl(_0x49e8('33'),_0xbf752b),async(_0x47107b,_0x16984e,_0x1761e9)=>{try{if(_0x47107b){console[_0x49e8('d')](''+JSON[_0x49e8('34')](_0x47107b));console[_0x49e8('d')]($[_0x49e8('17')]+_0x49e8('35'));}else{if(safeGet(_0x1761e9)){_0x1761e9=JSON[_0x49e8('36')](_0x1761e9);if($[_0x49e8('1d')]===0x1){if(_0x1761e9[_0x49e8('37')]==!![]){curRound=_0x1761e9[_0x49e8('38')][_0x49e8('39')];inviteCode=_0x1761e9[_0x49e8('38')][_0x49e8('3a')];inviter=_0x1761e9[_0x49e8('38')][_0x49e8('3b')];blood=_0x1761e9[_0x49e8('38')][_0x49e8('3c')];console[_0x49e8('d')](_0x49e8('3d')+_0x1761e9[_0x49e8('38')][_0x49e8('3a')]);if(_0x1761e9[_0x49e8('38')]&&_0x1761e9[_0x49e8('38')][_0x49e8('3a')]&&inviteCodes[_0x49e8('1a')]===0x0){inviteCodes[_0x49e8('9')]({'\x75\x73\x65\x72':$[_0x49e8('1b')],'\x66\x63\x77\x62\x69\x6e\x76\x69\x74\x65\x43\x6f\x64\x65':_0x1761e9[_0x49e8('38')][_0x49e8('3a')],'\x66\x63\x77\x62\x69\x6e\x76\x69\x74\x65\x72':_0x1761e9[_0x49e8('38')][_0x49e8('3b')]});}}}else if(_0x1761e9[_0x49e8('37')]==![]){console[_0x49e8('d')](_0x49e8('3e'));}}}}catch(_0x308f44){$[_0x49e8('3f')](_0x308f44,_0x16984e);}finally{_0x20e5bf(_0x1761e9);}});});}function happyDigHelpList(){return new Promise(_0x113adb=>{let _0x4b24a4={'pageNum':0x1,'pageSize':0x32,'linkId':link};$[_0x49e8('32')](taskurl(_0x49e8('40'),_0x4b24a4),async(_0xa99dec,_0x50313b,_0x2075fc)=>{try{if(_0xa99dec){console[_0x49e8('d')](''+JSON[_0x49e8('34')](_0xa99dec));console[_0x49e8('d')]($[_0x49e8('17')]+_0x49e8('35'));}else{if(safeGet(_0x2075fc)){_0x2075fc=JSON[_0x49e8('36')](_0x2075fc);if(_0x2075fc[_0x49e8('37')]==!![]){$[_0x49e8('2c')]=_0x2075fc[_0x49e8('38')][_0x49e8('2c')];}else if(_0x2075fc[_0x49e8('37')]==![]){console[_0x49e8('d')](_0x49e8('3e'));}}}}catch(_0x39d81f){$[_0x49e8('3f')](_0x39d81f,_0x50313b);}finally{_0x113adb(_0x2075fc);}});});}function help(){return new Promise(async _0x52a3aa=>{let _0x16840e=inviteCode;let _0x19e198=inviter;let _0x5eef66=_0x49e8('41')+inviter+_0x49e8('42')+inviteCode+'\x22\x7d';let _0x5d2275=_0x49e8('43');let _0x7e6466={'\x75\x72\x6c':_0x49e8('44')+_0x5eef66+_0x49e8('45')+Date[_0x49e8('46')]()+_0x49e8('47')+_0x5d2275,'\x68\x65\x61\x64\x65\x72\x73':{'Cookie':cookie,'Origin':_0x49e8('3'),'User-Agent':_0x49e8('48')}};$[_0x49e8('32')](_0x7e6466,async(_0x39eee7,_0x3f31fc,_0x3c30a1)=>{try{if(_0x39eee7){console[_0x49e8('d')](''+JSON[_0x49e8('34')](_0x39eee7));console[_0x49e8('d')]($[_0x49e8('17')]+_0x49e8('35'));}else{if(safeGet(_0x3c30a1)){_0x3c30a1=JSON[_0x49e8('36')](_0x3c30a1);$[_0x49e8('2e')]=_0x3c30a1[_0x49e8('37')];if(_0x3c30a1[_0x49e8('37')]==!![]){console[_0x49e8('d')](_0x49e8('49')+_0x3c30a1[_0x49e8('4a')]);}else if(_0x3c30a1[_0x49e8('37')]==![]){console[_0x49e8('d')](_0x49e8('49')+_0x3c30a1[_0x49e8('4a')]);}}}}catch(_0x17a4cd){$[_0x49e8('3f')](_0x17a4cd,_0x3f31fc);}finally{_0x52a3aa(_0x3c30a1);}});});}function TotalBean(){return new Promise(async _0x2ff925=>{const _0x4639ef={'url':_0x49e8('4b'),'headers':{'Accept':_0x49e8('4c'),'Content-Type':_0x49e8('4d'),'Accept-Encoding':_0x49e8('4e'),'Accept-Language':_0x49e8('4f'),'Connection':_0x49e8('50'),'Cookie':cookie,'Referer':_0x49e8('51'),'User-Agent':$[_0x49e8('0')]()?process[_0x49e8('a')][_0x49e8('52')]?process[_0x49e8('a')][_0x49e8('52')]:require(_0x49e8('53'))[_0x49e8('54')]:$[_0x49e8('e')](_0x49e8('55'))?$[_0x49e8('e')](_0x49e8('55')):_0x49e8('56')}};$[_0x49e8('57')](_0x4639ef,(_0x177153,_0xec7363,_0x897e8)=>{try{if(_0x177153){console[_0x49e8('d')](''+JSON[_0x49e8('34')](_0x177153));console[_0x49e8('d')]($[_0x49e8('17')]+_0x49e8('35'));}else{if(_0x897e8){_0x897e8=JSON[_0x49e8('36')](_0x897e8);if(_0x897e8[_0x49e8('58')]===0xd){$[_0x49e8('1e')]=![];return;}if(_0x897e8[_0x49e8('58')]===0x0){$[_0x49e8('1f')]=_0x897e8[_0x49e8('59')]&&_0x897e8[_0x49e8('59')][_0x49e8('5a')]||$[_0x49e8('1b')];}else{$[_0x49e8('1f')]=$[_0x49e8('1b')];}}else{console[_0x49e8('d')](_0x49e8('5b'));}}}catch(_0x5c13a1){$[_0x49e8('3f')](_0x5c13a1,_0xec7363);}finally{_0x2ff925();}});});}function getUA(){$['\x55\x41']=_0x49e8('5c')+randomString(0x28)+_0x49e8('5d');}function randomString(_0x2d2943){_0x2d2943=_0x2d2943||0x20;let _0x323439=_0x49e8('5e'),_0x28976f=_0x323439[_0x49e8('1a')],_0x279841='';for(i=0x0;i<_0x2d2943;i++)_0x279841+=_0x323439[_0x49e8('5f')](Math[_0x49e8('60')](Math[_0x49e8('61')]()*_0x28976f));return _0x279841;}function safeGet(_0x1ce2ce){try{if(typeof JSON[_0x49e8('36')](_0x1ce2ce)==_0x49e8('62')){return!![];}}catch(_0x34d1ca){console[_0x49e8('d')](_0x34d1ca);console[_0x49e8('d')](_0x49e8('63'));return![];}}function jsonParse(_0x49e261){if(typeof _0x49e261==_0x49e8('64')){try{return JSON[_0x49e8('36')](_0x49e261);}catch(_0x54253e){console[_0x49e8('d')](_0x54253e);$[_0x49e8('16')]($[_0x49e8('17')],'',_0x49e8('65'));return[];}}}function taskurl(_0x782dfd,_0x273e4e){return{'\x75\x72\x6c':JD_API_HOST+_0x49e8('66')+_0x782dfd+_0x49e8('67')+escape(JSON[_0x49e8('34')](_0x273e4e))+_0x49e8('68'),'\x68\x65\x61\x64\x65\x72\x73':{'Cookie':cookie,'Origin':_0x49e8('69'),'User-Agent':_0x49e8('6a')}};};_0xoda='jsjiami.com.v6';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

