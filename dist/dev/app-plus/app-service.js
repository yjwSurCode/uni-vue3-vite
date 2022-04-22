var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(shared, vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LAUNCH = "onLaunch";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$n = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$k], ["__scopeId", "data-v-f7c5b1d8"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
  const _sfc_main$m = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$j], ["__scopeId", "data-v-d657ff64"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$l = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  size: "20"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  size: "22"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$i], ["__scopeId", "data-v-1c16b57a"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const isArray$1 = Array.isArray;
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse$1(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse$1(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = isArray$1(values) ? "list" : isObject$2(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  const hasOwn$2 = (val, key) => hasOwnProperty$2.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn$2(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn$2(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$2 = {
    "uni-countdown.day": "day",
    "uni-countdown.h": "h",
    "uni-countdown.m": "m",
    "uni-countdown.s": "s"
  };
  var zhHans$2 = {
    "uni-countdown.day": "\u5929",
    "uni-countdown.h": "\u65F6",
    "uni-countdown.m": "\u5206",
    "uni-countdown.s": "\u79D2"
  };
  var zhHant$2 = {
    "uni-countdown.day": "\u5929",
    "uni-countdown.h": "\u6642",
    "uni-countdown.m": "\u5206",
    "uni-countdown.s": "\u79D2"
  };
  var messages$2 = {
    en: en$2,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant$2
  };
  const {
    t: t$4
  } = initVueI18n(messages$2);
  const _sfc_main$k = {
    name: "UniCountdown",
    emits: ["timeup"],
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      start: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      splitorColor: {
        type: String,
        default: "#333"
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        syncFlag: false,
        d: "00",
        h: "00",
        i: "00",
        s: "00",
        leftTime: 0,
        seconds: 0
      };
    },
    computed: {
      dayText() {
        return t$4("uni-countdown.day");
      },
      hourText(val) {
        return t$4("uni-countdown.h");
      },
      minuteText(val) {
        return t$4("uni-countdown.m");
      },
      secondText(val) {
        return t$4("uni-countdown.s");
      },
      timeStyle() {
        const {
          color,
          backgroundColor,
          fontSize
        } = this;
        return {
          color,
          backgroundColor,
          fontSize: `${fontSize}px`,
          width: `${fontSize * 22 / 14}px`,
          lineHeight: `${fontSize * 20 / 14}px`,
          borderRadius: `${fontSize * 3 / 14}px`
        };
      },
      splitorStyle() {
        const { splitorColor, fontSize, backgroundColor } = this;
        return {
          color: splitorColor,
          fontSize: `${fontSize * 12 / 14}px`,
          margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
        };
      }
    },
    watch: {
      day(val) {
        this.changeFlag();
      },
      hour(val) {
        this.changeFlag();
      },
      minute(val) {
        this.changeFlag();
      },
      second(val) {
        this.changeFlag();
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal) {
            this.startData();
          } else {
            if (!oldVal)
              return;
            clearInterval(this.timer);
          }
        }
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      this.countDown();
    },
    unmounted() {
      clearInterval(this.timer);
    },
    methods: {
      toSeconds(timestamp, day, hours, minutes, seconds) {
        if (timestamp) {
          return timestamp - parseInt(new Date().getTime() / 1e3, 10);
        }
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
      },
      timeUp() {
        clearInterval(this.timer);
        this.$emit("timeup");
      },
      countDown() {
        let seconds = this.seconds;
        let [day, hour, minute, second] = [0, 0, 0, 0];
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24));
          hour = Math.floor(seconds / (60 * 60)) - day * 24;
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        } else {
          this.timeUp();
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.d = day;
        this.h = hour;
        this.i = minute;
        this.s = second;
      },
      startData() {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        if (this.seconds <= 0) {
          this.seconds = this.toSeconds(0, 0, 0, 0, 0);
          this.countDown();
          return;
        }
        clearInterval(this.timer);
        this.countDown();
        this.timer = setInterval(() => {
          this.seconds--;
          if (this.seconds < 0) {
            this.timeUp();
            return;
          }
          this.countDown();
        }, 1e3);
      },
      update() {
        this.startData();
      },
      changeFlag() {
        if (!this.syncFlag) {
          this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
          this.startData();
          this.syncFlag = true;
        }
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-countdown" }, [
      $props.showDay ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        style: vue.normalizeStyle([$options.timeStyle]),
        class: "uni-countdown__number"
      }, vue.toDisplayString($data.d), 5)) : vue.createCommentVNode("v-if", true),
      $props.showDay ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        style: vue.normalizeStyle([$options.splitorStyle]),
        class: "uni-countdown__splitor"
      }, vue.toDisplayString($options.dayText), 5)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([$options.timeStyle]),
        class: "uni-countdown__number"
      }, vue.toDisplayString($data.h), 5),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([$options.splitorStyle]),
        class: "uni-countdown__splitor"
      }, vue.toDisplayString($props.showColon ? ":" : $options.hourText), 5),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([$options.timeStyle]),
        class: "uni-countdown__number"
      }, vue.toDisplayString($data.i), 5),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([$options.splitorStyle]),
        class: "uni-countdown__splitor"
      }, vue.toDisplayString($props.showColon ? ":" : $options.minuteText), 5),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([$options.timeStyle]),
        class: "uni-countdown__number"
      }, vue.toDisplayString($data.s), 5),
      !$props.showColon ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        style: vue.normalizeStyle([$options.splitorStyle]),
        class: "uni-countdown__splitor"
      }, vue.toDisplayString($options.secondText), 5)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$h], ["__scopeId", "data-v-d8982dea"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue"]]);
  const _sfc_main$j = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 15
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        errMsg: "",
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      }
    },
    watch: {
      value(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
        });
      }
    },
    created() {
      if (!this.value && this.value !== 0) {
        this.val = this.modelValue;
      }
      if (!this.modelValue && this.modelValue !== 0) {
        this.val = this.value;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.val);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
      });
    },
    methods: {
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onEyes() {
        this.showPassword = !this.showPassword;
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        event.detail.value;
        this.$emit("blur", event);
      },
      onConfirm(e) {
        this.$emit("confirm", e.detail.value);
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
        style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix"))
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle({
            "padding-right": $props.type === "password" || $props.clearable || $props.prefixIcon ? "" : "10px",
            "padding-left": $props.prefixIcon ? "" : "10px"
          }),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          $data.val != "" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 18,
            color: "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $data.val !== "" && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$g], ["__scopeId", "data-v-7365cc42"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  var popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  var en$1 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans$1 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant$1 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const { t: t$3 } = initVueI18n(messages$1);
  const _sfc_main$i = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t$3("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t$3("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t$3("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t$3("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
        }, vue.toDisplayString($options.titleText), 3)
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", { class: "uni-dialog-content-text" }, vue.toDisplayString($props.content), 1)
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: "text",
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["placeholder", "focus"]), [
            [vue.vModelText, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text" }, vue.toDisplayString($options.closeText), 1)
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text uni-button-color" }, vue.toDisplayString($options.okText), 1)
        ])
      ])
    ]);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$f], ["__scopeId", "data-v-d4e462f4"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$h = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$e], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$g = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$d], ["__scopeId", "data-v-51d50ae6"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  class Calendar {
    constructor({
      date,
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDate(new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    getDate(date, AddDayCount = 0, str = "day") {
      if (!date) {
        date = new Date();
      }
      if (typeof date !== "object") {
        date = date.replace(/-/g, "/");
      }
      const dd = new Date(date);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount);
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y + "-" + m + "-" + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i = firstDay; i > 0; i--) {
        const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          disable: true
        });
      }
      return dateArr;
    }
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i = 1; i <= dateData; i++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          month: full.month,
          disable: !(disableBefore && disableAfter),
          isDay,
          userChecked: false
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          disable: true
        });
      }
      return dateArr;
    }
    getInfo(date) {
      if (!date) {
        date = new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
      return dateInfo;
    }
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    isLogicBefore(currentDay, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = this.dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDay);
    }
    isLogicAfter(currentDay, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = this.dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDay);
    }
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this._getWeek(fullDate);
    }
    setHoverMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (this.lastHover)
        return;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this._getWeek(fullDate);
    }
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (this.dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this._getWeek(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this._getWeek(before);
        }
      }
    }
    _getWeek(dateData) {
      const {
        fullDate,
        year,
        month,
        date,
        day
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        nextMonthDays: [],
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
  }
  const _sfc_main$f = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
        "uni-calendar-item--disable": $props.weeks.disable,
        "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
        "uni-calendar-item--multiple": $props.weeks.multiple,
        "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
      onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box-item", {
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
          "uni-calendar-item--checked-range-text": $props.checkHover,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, [
        $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "uni-calendar-item__weeks-box-circle"
        })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("text", { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" }, vue.toDisplayString($props.weeks.date), 1)
      ], 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass({ "uni-calendar-item--isDay": $props.weeks.isDay })
      }, null, 2)
    ], 34);
  }
  var calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$c], ["__scopeId", "data-v-a1eef54e"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  var en = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select datetime",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN"
  };
  var zhHans = {
    "uni-datetime-picker.selectDate": "\u9009\u62E9\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9009\u62E9\u65F6\u95F4",
    "uni-datetime-picker.selectDateTime": "\u9009\u62E9\u65E5\u671F\u65F6\u95F4",
    "uni-datetime-picker.startDate": "\u5F00\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7ED3\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u5F00\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7ED3\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u786E\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D"
  };
  var zhHant = {
    "uni-datetime-picker.selectDate": "\u9078\u64C7\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9078\u64C7\u6642\u9593",
    "uni-datetime-picker.selectDateTime": "\u9078\u64C7\u65E5\u671F\u6642\u9593",
    "uni-datetime-picker.startDate": "\u958B\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7D50\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u958B\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7D50\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u78BA\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$2 } = initVueI18n(messages);
  const _sfc_main$e = {
    name: "UniDatetimePicker",
    components: {},
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "\u65E5\u671F\u548C\u65F6\u95F4",
        time: "",
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      value: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.parseValue(this.fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "\u65E5\u671F";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "\u65F6\u95F4";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "\u65E5\u671F\u548C\u65F6\u95F4";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      selectTimeText() {
        return t$2("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$2("uni-datetime-picker.ok");
      },
      clearText() {
        return t$2("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$2("uni-datetime-picker.cancel");
      }
    },
    mounted() {
    },
    methods: {
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      initPickerValue(datetime2) {
        let defaultValue = null;
        if (datetime2) {
          defaultValue = this.compareValueWithStartAndEnd(datetime2, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now2 = new Date();
          const year = now2.getFullYear();
          const month = now2.getMonth() + 1;
          const day = now2.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value) && typeof value !== NaN) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point) && Number(point) !== NaN) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(point)) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      getCurrentRange(value) {
        const range = [];
        for (let i = this["min" + this.capitalize(value)]; i <= this["max" + this.capitalize(value)]; i++) {
          range.push(i);
        }
        return range;
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      checkValue(name, value, values) {
        if (values.indexOf(value) === -1) {
          this[name] = values[0];
        }
      },
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      bindDateChange(e) {
        const val = e.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e) {
        const val = e.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      initTimePicker() {
        if (this.disabled)
          return;
        const value = this.fixIosDateFormat(this.value);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      tiggerTimePicker(e) {
        this.visible = !this.visible;
      },
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-datetime-picker" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
          }, [
            vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($data.time), 1),
            !$data.time ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-datetime-picker-time"
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($options.selectTimeText), 1)
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
        style: vue.normalizeStyle($data.fixNvueBug)
      }, [
        vue.createElementVNode("view", { class: "uni-title" }, [
          vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($options.selectTimeText), 1)
        ]),
        $data.dateShow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-datetime-picker__container-box"
        }, [
          vue.createElementVNode("picker-view", {
            class: "uni-datetime-picker-view",
            "indicator-style": $data.indicatorStyle,
            value: $options.ymd,
            onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.years, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.months, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.days, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ])
          ], 40, ["indicator-style", "value"]),
          vue.createCommentVNode(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
          vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
          vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-right" }, "-")
        ])) : vue.createCommentVNode("v-if", true),
        $data.timeShow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-datetime-picker__container-box"
        }, [
          vue.createElementVNode("picker-view", {
            class: vue.normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
            "indicator-style": $data.indicatorStyle,
            value: $options.hms,
            onChange: _cache[3] || (_cache[3] = (...args) => $options.bindTimeChange && $options.bindTimeChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.hours, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.minutes, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.seconds, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ])) : vue.createCommentVNode("v-if", true)
          ], 42, ["indicator-style", "value"]),
          vue.createCommentVNode(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
          vue.createElementVNode("text", {
            class: vue.normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
          }, ":", 2),
          !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uni-datetime-picker-sign sign-right"
          }, ":")) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
          vue.createElementVNode("view", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clearTime && $options.clearTime(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.clearText), 1)
          ]),
          vue.createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
            vue.createElementVNode("view", {
              class: "uni-datetime-picker-cancel",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.cancelText), 1)
            ]),
            vue.createElementVNode("view", {
              onClick: _cache[6] || (_cache[6] = (...args) => $options.setTime && $options.setTime(...args))
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.okText), 1)
            ])
          ])
        ])
      ], 6)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var timePicker = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$b], ["__scopeId", "data-v-03aeab36"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$d = {
    components: {
      calendarItem,
      timePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      typeHasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal, oldVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              this.cale.setDefaultMultiple(before, after);
              if (which === "left") {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        const res = activeDate === this.startDate ? this.selectableTimes.start : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        const res = activeDate === this.endDate ? this.selectableTimes.end : "";
        return res;
      },
      selectDateText() {
        return t$1("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t$1("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t$1("uni-datetime-picker.endDate");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      monText() {
        return t$1("uni-calender.MON");
      },
      TUEText() {
        return t$1("uni-calender.TUE");
      },
      WEDText() {
        return t$1("uni-calender.WED");
      },
      THUText() {
        return t$1("uni-calender.THU");
      },
      FRIText() {
        return t$1("uni-calender.FRI");
      },
      SATText() {
        return t$1("uni-calender.SAT");
      },
      SUNText() {
        return t$1("uni-calender.SUN");
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A, B) {
        const [yearA, monthA] = A.split("-");
        const [yearB, monthB] = B.split("-");
        return yearA === yearB && monthA === monthB;
      },
      clean() {
        this.close();
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate();
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.init(value);
      },
      init(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date);
      },
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      setEmit(name) {
        let {
          year,
          month,
          date,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        this.tempRange.before = this.cale.multipleStatus.before;
        this.tempRange.after = this.cale.multipleStatus.after;
        this.change();
      },
      backtoday() {
        let date = this.cale.getDate(new Date()).fullDate;
        this.init(date);
        this.change();
      },
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        if (startDate <= endDate) {
          return true;
        } else {
          return false;
        }
      },
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-calendar",
      onMouseleave: _cache[9] || (_cache[9] = (...args) => $options.leaveCale && $options.leaveCale(...args))
    }, [
      !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
      }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
        }, [
          $props.left ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__header-btn-box",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker", {
            mode: "date",
            value: $props.date,
            fields: "month",
            onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__header-text" }, vue.toDisplayString(($data.nowDate.year || "") + " \u5E74 " + ($data.nowDate.month || "") + " \u6708"), 1)
          ], 40, ["value"]),
          $props.right ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-calendar__header-btn-box",
            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
          ])) : vue.createCommentVNode("v-if", true),
          !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "dialog-close",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clean && $options.clean(...args))
          }, [
            vue.createElementVNode("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            vue.createElementVNode("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(' <text class="uni-calendar__backtoday" @click="backtoday">\u56DE\u5230\u4ECA\u5929</text> ')
        ], 2),
        vue.createElementVNode("view", { class: "uni-calendar__box" }, [
          $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__box-bg"
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__box-bg-text" }, vue.toDisplayString($data.nowDate.month), 1)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "uni-calendar__weeks",
            style: { "padding-bottom": "7px" }
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SUNText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.monText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.TUEText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.WEDText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.THUText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.FRIText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SATText), 1)
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weeks, (item, weekIndex) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "uni-calendar__weeks",
              key: weekIndex
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (weeks, weeksIndex) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-calendar__weeks-item",
                  key: weeksIndex
                }, [
                  vue.createVNode(_component_calendar_item, {
                    class: "uni-calendar-item--hook",
                    weeks,
                    calendar: $data.calendar,
                    selected: $props.selected,
                    lunar: $props.lunar,
                    checkHover: $props.range,
                    onChange: $options.choiceDate,
                    onHandleMouse: $options.handleMouse
                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "checkHover", "onChange", "onHandleMouse"])
                ]);
              }), 128))
            ]);
          }), 128))
        ]),
        !$props.insert && !$props.range && $props.typeHasTime ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-date-changed uni-calendar--fixed-top",
          style: { "padding": "0 80px" }
        }, [
          vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText), 1),
          vue.createVNode(_component_time_picker, {
            type: "time",
            start: $options.reactStartTime,
            end: $options.reactEndTime,
            modelValue: $data.time,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.time = $event),
            disabled: !$data.tempSingleDate,
            border: false,
            "hide-second": $props.hideSecond,
            class: "time-picker-style"
          }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
        ])) : vue.createCommentVNode("v-if", true),
        !$props.insert && $props.range && $props.typeHasTime ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-date-changed uni-calendar--fixed-top"
        }, [
          vue.createElementVNode("view", { class: "uni-date-changed--time-start" }, [
            vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText), 1),
            vue.createVNode(_component_time_picker, {
              type: "time",
              start: $options.reactStartTime,
              modelValue: $data.timeRange.startTime,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.startTime = $event),
              border: false,
              "hide-second": $props.hideSecond,
              disabled: !$data.tempRange.before,
              class: "time-picker-style"
            }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
          ]),
          vue.createVNode(_component_uni_icons, {
            type: "arrowthinright",
            color: "#999",
            style: { "line-height": "50px" }
          }),
          vue.createElementVNode("view", { class: "uni-date-changed--time-end" }, [
            vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText), 1),
            vue.createVNode(_component_time_picker, {
              type: "time",
              end: $options.reactEndTime,
              modelValue: $data.timeRange.endTime,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.timeRange.endTime = $event),
              border: false,
              "hide-second": $props.hideSecond,
              disabled: !$data.tempRange.after,
              class: "time-picker-style"
            }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-date-changed uni-date-btn--ok"
        }, [
          vue.createCommentVNode(' <view class="uni-calendar__header-btn-box">\r\n					<text class="uni-calendar__button-text uni-calendar--fixed-width">{{okText}}</text>\r\n				</view> '),
          vue.createElementVNode("view", {
            class: "uni-datetime-picker--btn",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.confirm && $options.confirm(...args))
          }, "\u786E\u8BA4")
        ])) : vue.createCommentVNode("v-if", true)
      ], 2)) : vue.createCommentVNode("v-if", true)
    ], 32);
  }
  var calendar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a], ["__scopeId", "data-v-0606c012"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$c = {
    name: "UniDatetimePicker",
    components: {
      calendar,
      timePicker
    },
    data() {
      return {
        isRange: false,
        hasTime: false,
        mobileRange: false,
        singleVal: "",
        tempSingleDate: "",
        defSingleDate: "",
        time: "",
        caleRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        range: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        visible: false,
        popup: false,
        popover: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal.indexOf("time") !== -1) {
            this.hasTime = true;
          } else {
            this.hasTime = false;
          }
          if (newVal.indexOf("range") !== -1) {
            this.isRange = true;
          } else {
            this.isRange = false;
          }
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.startDate = defDate;
          if (this.hasTime) {
            this.caleRange.startTime = defTime;
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.endDate = defDate;
          if (this.hasTime) {
            this.caleRange.endTime = defTime;
          }
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.tempSingleDate;
        const res = activeDate === this.caleRange.startDate ? this.caleRange.startTime : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.tempSingleDate;
        const res = activeDate === this.caleRange.endDate ? this.caleRange.endTime : "";
        return res;
      },
      reactMobDefTime() {
        const times = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? times : this.time;
      },
      mobSelectableTime() {
        return {
          start: this.caleRange.startTime,
          end: this.caleRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : t("uni-datetime-picker.selectDateTime"));
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return t("uni-datetime-picker.selectDate");
      },
      selectTimeText() {
        return t("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || t("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return t("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || t("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return t("uni-datetime-picker.endTime");
      },
      okText() {
        return t("uni-datetime-picker.ok");
      },
      clearText() {
        return t("uni-datetime-picker.clear");
      },
      showClearIcon() {
        const {
          clearIcon,
          disabled,
          singleVal,
          range
        } = this;
        const bool = clearIcon && !disabled && (singleVal || range.startDate && range.endDate);
        return bool;
      }
    },
    created() {
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
    },
    mounted() {
      this.platform();
    },
    methods: {
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      initPicker(newVal) {
        if (!newVal || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.singleVal = defDate;
          this.tempSingleDate = defDate;
          this.defSingleDate = defDate;
          if (this.hasTime) {
            this.singleVal = defDate + " " + defTime;
            this.time = defTime;
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const defBefore = this.parseDate(before);
          const defAfter = this.parseDate(after);
          const startDate = defBefore.defDate;
          const endDate = defAfter.defDate;
          this.range.startDate = this.tempRange.startDate = startDate;
          this.range.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.range.startDate = defBefore.defDate + " " + defBefore.defTime;
            this.range.endDate = defAfter.defDate + " " + defAfter.defTime;
            this.tempRange.startTime = defBefore.defTime;
            this.tempRange.endTime = defAfter.defTime;
          }
          const defaultRange = {
            before: defBefore.defDate,
            after: defAfter.defDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        const systemInfo = uni.getSystemInfoSync();
        this.isPhone = systemInfo.windowWidth <= 500;
        this.windowWidth = systemInfo.windowWidth;
      },
      show(event) {
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          this.$refs.mobile.open();
          return;
        }
        this.popover = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.popover.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.popup = !this.popup;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.range;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.next();
              }
            } else {
              this.$refs.right.next();
              this.$refs.right.cale.lastHover = false;
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.popup = false;
          this.$emit("maskClick", this.value);
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.formItem && this.formItem.setValue(value);
        this.$emit("change", value);
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = this.fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e) {
        this.tempSingleDate = e.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!this.tempSingleDate) {
          this.popup = false;
          return;
        }
        if (this.hasTime) {
          this.singleVal = this.tempSingleDate + " " + (this.time ? this.time : "00:00:00");
        } else {
          this.singleVal = this.tempSingleDate;
        }
        this.setEmit(this.singleVal);
        this.popup = false;
      },
      leftChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e) {
        if (this.isRange) {
          const {
            before,
            after
          } = e.range;
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.singleVal = e.fulldate + " " + e.time;
          } else {
            this.singleVal = e.fulldate;
          }
          this.setEmit(this.singleVal);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate && !this.tempRange.endDate) {
          this.popup = false;
          return;
        }
        let start, end;
        if (!this.hasTime) {
          start = this.range.startDate = this.tempRange.startDate;
          end = this.range.endDate = this.tempRange.endDate;
        } else {
          start = this.range.startDate = this.tempRange.startDate + " " + (this.tempRange.startTime ? this.tempRange.startTime : "00:00:00");
          end = this.range.endDate = this.tempRange.endDate + " " + (this.tempRange.endTime ? this.tempRange.endTime : "00:00:00");
        }
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.popup = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!(before && after))
          return;
        const type = temp ? "tempRange" : "range";
        if (this.dateCompare(before, after)) {
          this[type].startDate = before;
          this[type].endDate = after;
        } else {
          this[type].startDate = after;
          this[type].endDate = before;
        }
      },
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        if (startDate <= endDate) {
          return true;
        } else {
          return false;
        }
      },
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.singleVal = "";
          this.tempSingleDate = "";
          this.time = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.formItem && this.formItem.setValue("");
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.range.startDate = "";
          this.range.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.next();
          }
          if (needEmit) {
            this.formItem && this.formItem.setValue([]);
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      },
      parseDate(date) {
        date = this.fixIosDateFormat(date);
        const defVal = new Date(date);
        const year = defVal.getFullYear();
        const month = defVal.getMonth() + 1;
        const day = defVal.getDate();
        const hour = defVal.getHours();
        const minute = defVal.getMinutes();
        const second = defVal.getSeconds();
        const defDate = year + "-" + this.lessTen(month) + "-" + this.lessTen(day);
        const defTime = this.lessTen(hour) + ":" + this.lessTen(minute) + (this.hideSecond ? "" : ":" + this.lessTen(second));
        return {
          defDate,
          defTime
        };
      },
      lessTen(item) {
        return item < 10 ? "0" + item : item;
      },
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      leftMonthSwitch(e) {
      },
      rightMonthSwitch(e) {
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_calendar = vue.resolveComponent("calendar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-date" }, [
      vue.createElementVNode("view", {
        class: "uni-date-editor",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.show && $options.show(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-date-editor--x", {
              "uni-date-editor--x__disabled": $props.disabled,
              "uni-date-x--border": $props.border
            }])
          }, [
            !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-date-x uni-date-single"
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "calendar",
                color: "#e1e1e1",
                size: "22"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.singleVal = $event),
                placeholder: $options.singlePlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.singleVal]
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-date-x uni-date-range"
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "calendar",
                color: "#e1e1e1",
                size: "22"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input t-c",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.range.startDate = $event),
                placeholder: $options.startPlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.range.startDate]
              ]),
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "" }, vue.toDisplayString($props.rangeSeparator), 1)
              ], true),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input t-c",
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.range.endDate = $event),
                placeholder: $options.endPlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.range.endDate]
              ])
            ])),
            $options.showClearIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "uni-date__icon-clear",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "clear",
                color: "#e1e1e1",
                size: "18"
              })
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      vue.withDirectives(vue.createElementVNode("view", {
        class: "uni-date-mask",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.close && $options.close(...args))
      }, null, 512), [
        [vue.vShow, $data.popup]
      ]),
      !$data.isPhone ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        ref: "datePicker",
        class: "uni-date-picker__container"
      }, [
        !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-date-single--x",
          style: vue.normalizeStyle($data.popover)
        }, [
          vue.createElementVNode("view", { class: "uni-popper__arrow" }),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-date-changed popup-x-header"
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              class: "uni-date__input t-c",
              type: "text",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.tempSingleDate = $event),
              placeholder: $options.selectDateText
            }, null, 8, ["placeholder"]), [
              [vue.vModelText, $data.tempSingleDate]
            ]),
            vue.createVNode(_component_time_picker, {
              type: "time",
              modelValue: $data.time,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.time = $event),
              border: false,
              disabled: !$data.tempSingleDate,
              start: $options.reactStartTime,
              end: $options.reactEndTime,
              hideSecond: $props.hideSecond,
              style: { "width": "100%" }
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "uni-date__input t-c",
                  type: "text",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.time = $event),
                  placeholder: $options.selectTimeText,
                  disabled: !$data.tempSingleDate
                }, null, 8, ["placeholder", "disabled"]), [
                  [vue.vModelText, $data.time]
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_calendar, {
            ref: "pcSingle",
            showMonth: false,
            "start-date": $data.caleRange.startDate,
            "end-date": $data.caleRange.endDate,
            date: $data.defSingleDate,
            onChange: $options.singleChange,
            style: { "padding": "0 8px" }
          }, null, 8, ["start-date", "end-date", "date", "onChange"]),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "popup-x-footer"
          }, [
            vue.createCommentVNode(' <text class="">\u6B64\u523B</text> '),
            vue.createElementVNode("text", {
              class: "confirm",
              onClick: _cache[9] || (_cache[9] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
            }, vue.toDisplayString($options.okText), 1)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-date-popper__arrow" })
        ], 4)) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-date-range--x",
          style: vue.normalizeStyle($data.popover)
        }, [
          vue.createElementVNode("view", { class: "uni-popper__arrow" }),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "popup-x-header uni-date-changed"
          }, [
            vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__input uni-date-range__input",
                type: "text",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.tempRange.startDate = $event),
                placeholder: $options.startDateText
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.tempRange.startDate]
              ]),
              vue.createVNode(_component_time_picker, {
                type: "time",
                modelValue: $data.tempRange.startTime,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.startTime = $event),
                start: $options.reactStartTime,
                border: false,
                disabled: !$data.tempRange.startDate,
                hideSecond: $props.hideSecond
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tempRange.startTime = $event),
                    placeholder: $options.startTimeText,
                    disabled: !$data.tempRange.startDate
                  }, null, 8, ["placeholder", "disabled"]), [
                    [vue.vModelText, $data.tempRange.startTime]
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "start", "disabled", "hideSecond"])
            ]),
            vue.createVNode(_component_uni_icons, {
              type: "arrowthinright",
              color: "#999",
              style: { "line-height": "40px" }
            }),
            vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__input uni-date-range__input",
                type: "text",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.tempRange.endDate = $event),
                placeholder: $options.endDateText
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.tempRange.endDate]
              ]),
              vue.createVNode(_component_time_picker, {
                type: "time",
                modelValue: $data.tempRange.endTime,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.tempRange.endTime = $event),
                end: $options.reactEndTime,
                border: false,
                disabled: !$data.tempRange.endDate,
                hideSecond: $props.hideSecond
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.tempRange.endTime = $event),
                    placeholder: $options.endTimeText,
                    disabled: !$data.tempRange.endDate
                  }, null, 8, ["placeholder", "disabled"]), [
                    [vue.vModelText, $data.tempRange.endTime]
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "end", "disabled", "hideSecond"])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "popup-x-body" }, [
            vue.createVNode(_component_calendar, {
              ref: "left",
              showMonth: false,
              "start-date": $data.caleRange.startDate,
              "end-date": $data.caleRange.endDate,
              range: true,
              onChange: $options.leftChange,
              pleStatus: $data.endMultipleStatus,
              onFirstEnterCale: $options.updateRightCale,
              onMonthSwitch: $options.leftMonthSwitch,
              style: { "padding": "0 8px" }
            }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"]),
            vue.createVNode(_component_calendar, {
              ref: "right",
              showMonth: false,
              "start-date": $data.caleRange.startDate,
              "end-date": $data.caleRange.endDate,
              range: true,
              onChange: $options.rightChange,
              pleStatus: $data.startMultipleStatus,
              onFirstEnterCale: $options.updateLeftCale,
              onMonthSwitch: $options.rightMonthSwitch,
              style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
            }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"])
          ]),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "popup-x-footer"
          }, [
            vue.createElementVNode("text", {
              class: "",
              onClick: _cache[16] || (_cache[16] = (...args) => $options.clear && $options.clear(...args))
            }, vue.toDisplayString($options.clearText), 1),
            vue.createElementVNode("text", {
              class: "confirm",
              onClick: _cache[17] || (_cache[17] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
            }, vue.toDisplayString($options.okText), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ], 4))
      ], 512)), [
        [vue.vShow, $data.popup]
      ]) : vue.createCommentVNode("v-if", true),
      vue.withDirectives(vue.createVNode(_component_calendar, {
        ref: "mobile",
        clearDate: false,
        date: $data.defSingleDate,
        defTime: $options.reactMobDefTime,
        "start-date": $data.caleRange.startDate,
        "end-date": $data.caleRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        typeHasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "pleStatus", "range", "typeHasTime", "hideSecond", "onConfirm"]), [
        [vue.vShow, $data.isPhone]
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9], ["__scopeId", "data-v-0cc8d4cc"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  const _sfc_main$b = {
    name: "TableCheckbox",
    emits: ["checkboxSelected"],
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      },
      checked: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: -1
      },
      cellData: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    watch: {
      checked(newVal) {
        if (typeof this.checked === "boolean") {
          this.isChecked = newVal;
        } else {
          this.isChecked = true;
        }
      },
      indeterminate(newVal) {
        this.isIndeterminate = newVal;
      }
    },
    data() {
      return {
        isChecked: false,
        isDisabled: false,
        isIndeterminate: false
      };
    },
    created() {
      if (typeof this.checked === "boolean") {
        this.isChecked = this.checked;
      }
      this.isDisabled = this.disabled;
    },
    methods: {
      selected() {
        if (this.isDisabled)
          return;
        this.isIndeterminate = false;
        this.isChecked = !this.isChecked;
        this.$emit("checkboxSelected", {
          checked: this.isChecked,
          data: this.cellData
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-table-checkbox",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.selected && $options.selected(...args))
    }, [
      !$props.indeterminate ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["checkbox__inner", { "is-checked": $data.isChecked, "is-disable": $data.isDisabled }])
      }, [
        vue.createElementVNode("view", { class: "checkbox__inner-icon" })
      ], 2)) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "checkbox__inner checkbox--indeterminate"
      }, [
        vue.createElementVNode("view", { class: "checkbox__inner-icon" })
      ]))
    ]);
  }
  var tableCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8], ["__scopeId", "data-v-1e2ebfab"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-tr/table-checkbox.vue"]]);
  const resource = {
    "reset": "\u91CD\u7F6E",
    "search": "\u641C\u7D22",
    "submit": "\u786E\u5B9A",
    "filter": "\u7B5B\u9009",
    "gt": "\u5927\u4E8E\u7B49\u4E8E",
    "lt": "\u5C0F\u4E8E\u7B49\u4E8E",
    "date": "\u65E5\u671F\u8303\u56F4"
  };
  const DropdownType = {
    Select: "select",
    Search: "search",
    Range: "range",
    Date: "date",
    Timestamp: "timestamp"
  };
  const _sfc_main$a = {
    name: "FilterDropdown",
    emits: ["change"],
    components: {
      checkBox: tableCheckbox
    },
    options: {
      virtualHost: true
    },
    props: {
      filterType: {
        type: String,
        default: DropdownType.Select
      },
      filterData: {
        type: Array,
        default() {
          return [];
        }
      },
      mode: {
        type: String,
        default: "default"
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    computed: {
      canReset() {
        if (this.isSearch) {
          return this.filterValue.length > 0;
        }
        if (this.isSelect) {
          return this.checkedValues.length > 0;
        }
        if (this.isRange) {
          return this.gtValue.length > 0 && this.ltValue.length > 0;
        }
        if (this.isDate) {
          return this.dateSelect.length > 0;
        }
        return false;
      },
      isSelect() {
        return this.filterType === DropdownType.Select;
      },
      isSearch() {
        return this.filterType === DropdownType.Search;
      },
      isRange() {
        return this.filterType === DropdownType.Range;
      },
      isDate() {
        return this.filterType === DropdownType.Date || this.filterType === DropdownType.Timestamp;
      }
    },
    watch: {
      filters(newVal) {
        this._copyFilters();
      },
      indeterminate(newVal) {
        this.isIndeterminate = newVal;
      }
    },
    data() {
      return {
        resource,
        enabled: true,
        isOpened: false,
        dataList: [],
        filterValue: "",
        checkedValues: [],
        gtValue: "",
        ltValue: "",
        dateRange: [],
        dateSelect: []
      };
    },
    created() {
      this._copyFilters();
    },
    methods: {
      _copyFilters() {
        let dl = JSON.parse(JSON.stringify(this.filterData));
        for (let i = 0; i < dl.length; i++) {
          if (dl[i].checked === void 0) {
            dl[i].checked = false;
          }
        }
        this.dataList = dl;
      },
      openPopup() {
        this.isOpened = true;
        if (this.isDate) {
          this.$nextTick(() => {
            if (!this.dateRange.length) {
              this.resetDate();
            }
            this.$refs.datetimepicker.show();
          });
        }
      },
      closePopup() {
        this.isOpened = false;
      },
      handleClose(e) {
        this.closePopup();
      },
      resetDate() {
        let date = new Date();
        let dateText = date.toISOString().split("T")[0];
        this.dateRange = [dateText + " 0:00:00", dateText + " 23:59:59"];
      },
      onDropdown(e) {
        this.openPopup();
      },
      onItemClick(e, index) {
        let items = this.dataList;
        let listItem = items[index];
        if (listItem.checked === void 0) {
          items[index].checked = true;
        } else {
          items[index].checked = !listItem.checked;
        }
        let checkvalues = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.checked) {
            checkvalues.push(item.value);
          }
        }
        this.checkedValues = checkvalues;
      },
      datetimechange(e) {
        this.closePopup();
        this.dateRange = e;
        this.dateSelect = e;
        this.$emit("change", {
          filterType: this.filterType,
          filter: e
        });
      },
      timepickerclose(e) {
        this.closePopup();
      },
      handleSelectSubmit() {
        this.closePopup();
        this.$emit("change", {
          filterType: this.filterType,
          filter: this.checkedValues
        });
      },
      handleSelectReset() {
        if (!this.canReset) {
          return;
        }
        var items = this.dataList;
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          this.$set(item, "checked", false);
        }
        this.checkedValues = [];
        this.handleSelectSubmit();
      },
      handleSearchSubmit() {
        this.closePopup();
        this.$emit("change", {
          filterType: this.filterType,
          filter: this.filterValue
        });
      },
      handleSearchReset() {
        if (!this.canReset) {
          return;
        }
        this.filterValue = "";
        this.handleSearchSubmit();
      },
      handleRangeSubmit(isReset) {
        this.closePopup();
        this.$emit("change", {
          filterType: this.filterType,
          filter: isReset === true ? [] : [parseInt(this.gtValue), parseInt(this.ltValue)]
        });
      },
      handleRangeReset() {
        if (!this.canReset) {
          return;
        }
        this.gtValue = "";
        this.ltValue = "";
        this.handleRangeSubmit(true);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_check_box = vue.resolveComponent("check-box");
    const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-filter-dropdown" }, [
      vue.createElementVNode("view", {
        class: "dropdown-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onDropdown && $options.onDropdown(...args))
      }, [
        $options.isSelect || $options.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["icon-select", { active: $options.canReset }])
        }, null, 2)) : vue.createCommentVNode("v-if", true),
        $options.isSearch ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: vue.normalizeClass(["icon-search", { active: $options.canReset }])
        }, [
          vue.createElementVNode("view", { class: "icon-search-0" }),
          vue.createElementVNode("view", { class: "icon-search-1" })
        ], 2)) : vue.createCommentVNode("v-if", true),
        $options.isDate ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass(["icon-calendar", { active: $options.canReset }])
        }, [
          vue.createElementVNode("view", { class: "icon-calendar-0" }),
          vue.createElementVNode("view", { class: "icon-calendar-1" })
        ], 2)) : vue.createCommentVNode("v-if", true)
      ]),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dropdown-cover",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClose && $options.handleClose(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "dropdown-popup dropdown-popup-right",
        onClick: _cache[11] || (_cache[11] = vue.withModifiers(() => {
        }, ["stop"]))
      }, [
        vue.createCommentVNode(" select"),
        $options.isSelect ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "list"
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("label", {
              class: "flex-r a-i-c list-item",
              key: index,
              onClick: ($event) => $options.onItemClick($event, index)
            }, [
              vue.createVNode(_component_check_box, {
                class: "check",
                checked: item.checked
              }, null, 8, ["checked"]),
              vue.createElementVNode("view", { class: "checklist-content" }, [
                vue.createElementVNode("text", {
                  class: "checklist-text",
                  style: vue.normalizeStyle(item.styleIconText)
                }, vue.toDisplayString(item[$props.map.text]), 5)
              ])
            ], 8, ["onClick"]);
          }), 128))
        ])) : vue.createCommentVNode("v-if", true),
        $options.isSelect ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "flex-r opera-area"
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["flex-f btn btn-default", { disable: !$options.canReset }]),
            onClick: _cache[2] || (_cache[2] = (...args) => $options.handleSelectReset && $options.handleSelectReset(...args))
          }, vue.toDisplayString($data.resource.reset), 3),
          vue.createElementVNode("view", {
            class: "flex-f btn btn-submit",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleSelectSubmit && $options.handleSelectSubmit(...args))
          }, vue.toDisplayString($data.resource.submit), 1)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" search "),
        $options.isSearch ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "search-area"
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "search-input",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.filterValue = $event)
          }, null, 512), [
            [vue.vModelText, $data.filterValue]
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $options.isSearch ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "flex-r opera-area"
        }, [
          vue.createElementVNode("view", {
            class: "flex-f btn btn-submit",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.handleSearchSubmit && $options.handleSearchSubmit(...args))
          }, vue.toDisplayString($data.resource.search), 1),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["flex-f btn btn-default", { disable: !$options.canReset }]),
            onClick: _cache[6] || (_cache[6] = (...args) => $options.handleSearchReset && $options.handleSearchReset(...args))
          }, vue.toDisplayString($data.resource.reset), 3)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" range "),
        $options.isRange ? (vue.openBlock(), vue.createElementBlock("view", { key: 4 }, [
          vue.createElementVNode("view", { class: "input-label" }, vue.toDisplayString($data.resource.gt), 1),
          vue.withDirectives(vue.createElementVNode("input", {
            class: "input",
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.gtValue = $event)
          }, null, 512), [
            [vue.vModelText, $data.gtValue]
          ]),
          vue.createElementVNode("view", { class: "input-label" }, vue.toDisplayString($data.resource.lt), 1),
          vue.withDirectives(vue.createElementVNode("input", {
            class: "input",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.ltValue = $event)
          }, null, 512), [
            [vue.vModelText, $data.ltValue]
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $options.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "flex-r opera-area"
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["flex-f btn btn-default", { disable: !$options.canReset }]),
            onClick: _cache[9] || (_cache[9] = (...args) => $options.handleRangeReset && $options.handleRangeReset(...args))
          }, vue.toDisplayString($data.resource.reset), 3),
          vue.createElementVNode("view", {
            class: "flex-f btn btn-submit",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.handleRangeSubmit && $options.handleRangeSubmit(...args))
          }, vue.toDisplayString($data.resource.submit), 1)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" date "),
        $options.isDate ? (vue.openBlock(), vue.createElementBlock("view", { key: 6 }, [
          vue.createVNode(_component_uni_datetime_picker, {
            ref: "datetimepicker",
            value: $data.dateRange,
            type: "datetimerange",
            "return-type": "timestamp",
            onChange: $options.datetimechange,
            onMaskClick: $options.timepickerclose
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view")
            ]),
            _: 1
          }, 8, ["value", "onChange", "onMaskClick"])
        ])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7], ["__scopeId", "data-v-6e538e43"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-th/filter-dropdown.vue"]]);
  const _sfc_main$9 = {
    name: "uniTh",
    options: {
      virtualHost: true
    },
    components: {
      dropdown
    },
    emits: ["sort-change", "filter-change"],
    props: {
      width: {
        type: [String, Number],
        default: ""
      },
      align: {
        type: String,
        default: "left"
      },
      rowspan: {
        type: [Number, String],
        default: 1
      },
      colspan: {
        type: [Number, String],
        default: 1
      },
      sortable: {
        type: Boolean,
        default: false
      },
      filterType: {
        type: String,
        default: ""
      },
      filterData: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        border: false,
        ascending: false,
        descending: false
      };
    },
    computed: {
      contentAlign() {
        let align = "left";
        switch (this.align) {
          case "left":
            align = "flex-start";
            break;
          case "center":
            align = "center";
            break;
          case "right":
            align = "flex-end";
            break;
        }
        return align;
      }
    },
    created() {
      this.root = this.getTable("uniTable");
      this.rootTr = this.getTable("uniTr");
      this.rootTr.minWidthUpdate(this.width ? this.width : 140);
      this.border = this.root.border;
      this.root.thChildren.push(this);
    },
    methods: {
      sort() {
        if (!this.sortable)
          return;
        this.clearOther();
        if (!this.ascending && !this.descending) {
          this.ascending = true;
          this.$emit("sort-change", { order: "ascending" });
          return;
        }
        if (this.ascending && !this.descending) {
          this.ascending = false;
          this.descending = true;
          this.$emit("sort-change", { order: "descending" });
          return;
        }
        if (!this.ascending && this.descending) {
          this.ascending = false;
          this.descending = false;
          this.$emit("sort-change", { order: null });
        }
      },
      ascendingFn() {
        this.clearOther();
        this.ascending = !this.ascending;
        this.descending = false;
        this.$emit("sort-change", { order: this.ascending ? "ascending" : null });
      },
      descendingFn() {
        this.clearOther();
        this.descending = !this.descending;
        this.ascending = false;
        this.$emit("sort-change", { order: this.descending ? "descending" : null });
      },
      clearOther() {
        this.root.thChildren.map((item) => {
          if (item !== this) {
            item.ascending = false;
            item.descending = false;
          }
          return item;
        });
      },
      ondropdown(e) {
        this.$emit("filter-change", e);
      },
      getTable(name) {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-table-th", { "table--border": $data.border }]),
      style: vue.normalizeStyle({ width: $props.width + "px", "text-align": $props.align })
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6], ["__scopeId", "data-v-c33125f8"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-th/uni-th.vue"]]);
  const _sfc_main$8 = {
    name: "uniTr",
    components: { tableCheckbox },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      keyValue: {
        type: [String, Number],
        default: ""
      }
    },
    options: {
      virtualHost: true
    },
    data() {
      return {
        value: false,
        border: false,
        selection: false,
        widthThArr: [],
        ishead: true,
        checked: false,
        indeterminate: false
      };
    },
    created() {
      this.root = this.getTable();
      this.head = this.getTable("uniThead");
      if (this.head) {
        this.ishead = false;
        this.head.init(this);
      }
      this.border = this.root.border;
      this.selection = this.root.type;
      this.root.trChildren.push(this);
      const rowData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
      if (rowData) {
        this.rowData = rowData;
      }
      this.root.isNodata();
    },
    mounted() {
      if (this.widthThArr.length > 0) {
        const selectionWidth = this.selection === "selection" ? 50 : 0;
        this.root.minWidth = this.widthThArr.reduce((a, b) => Number(a) + Number(b)) + selectionWidth;
      }
    },
    unmounted() {
      const index = this.root.trChildren.findIndex((i) => i === this);
      this.root.trChildren.splice(index, 1);
      this.root.isNodata();
    },
    methods: {
      minWidthUpdate(width) {
        this.widthThArr.push(width);
      },
      checkboxSelected(e) {
        let rootData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
        this.checked = e.checked;
        this.root.check(rootData || this, e.checked, rootData ? this.keyValue : null);
      },
      change(e) {
        this.root.trChildren.forEach((item) => {
          if (item === this) {
            this.root.check(this, e.detail.value.length > 0 ? true : false);
          }
        });
      },
      getTable(name = "uniTable") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_table_checkbox = vue.resolveComponent("table-checkbox");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-table-tr" }, [
      $data.selection === "selection" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["checkbox", { "tr-table--border": $data.border }])
      }, [
        vue.createVNode(_component_table_checkbox, {
          checked: $data.checked,
          indeterminate: $data.indeterminate,
          disabled: $props.disabled,
          onCheckboxSelected: $options.checkboxSelected
        }, null, 8, ["checked", "indeterminate", "disabled", "onCheckboxSelected"])
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5], ["__scopeId", "data-v-28366478"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-tr/uni-tr.vue"]]);
  const _sfc_main$7 = {
    name: "uniTd",
    options: {
      virtualHost: true
    },
    props: {
      width: {
        type: [String, Number],
        default: ""
      },
      align: {
        type: String,
        default: "left"
      },
      rowspan: {
        type: [Number, String],
        default: 1
      },
      colspan: {
        type: [Number, String],
        default: 1
      }
    },
    data() {
      return {
        border: false
      };
    },
    created() {
      this.root = this.getTable();
      this.border = this.root.border;
    },
    methods: {
      getTable() {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== "uniTable") {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(` :class="{'table--border':border}"  `),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-table-td", { "table--border": $data.border }]),
        style: vue.normalizeStyle({ width: $props.width + "px", "text-align": $props.align })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 2112);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4], ["__scopeId", "data-v-7f687984"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-td/uni-td.vue"]]);
  const _sfc_main$6 = {
    name: "uniTable",
    options: {
      virtualHost: true
    },
    emits: ["selection-change"],
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      border: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6CA1\u6709\u66F4\u591A\u6570\u636E"
      },
      loading: {
        type: Boolean,
        default: false
      },
      rowKey: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        noData: true,
        minWidth: 0,
        multiTableHeads: []
      };
    },
    watch: {
      loading(val) {
      },
      data(newVal) {
        this.theadChildren;
        if (this.theadChildren) {
          this.theadChildren.rowspan;
        }
        this.noData = false;
      }
    },
    created() {
      this.trChildren = [];
      this.thChildren = [];
      this.theadChildren = null;
      this.backData = [];
      this.backIndexData = [];
    },
    methods: {
      isNodata() {
        this.theadChildren;
        let rowspan = 1;
        if (this.theadChildren) {
          rowspan = this.theadChildren.rowspan;
        }
        this.noData = this.trChildren.length - rowspan <= 0;
      },
      selectionAll() {
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        let isHaveData = this.data && this.data.length.length > 0;
        theadChildren.checked = true;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            item.checked = true;
            if (isHaveData && item.keyValue) {
              const row = this.data.find((v) => v[this.rowKey] === item.keyValue);
              if (!this.backData.find((v) => v[this.rowKey] === row[this.rowKey])) {
                this.backData.push(row);
              }
            }
            if (index > startIndex - 1 && this.backIndexData.indexOf(index - startIndex) === -1) {
              this.backIndexData.push(index - startIndex);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      toggleRowSelection(row, selected) {
        row = [].concat(row);
        this.trChildren.forEach((item, index) => {
          const select = row.findIndex((v) => {
            if (typeof v === "number") {
              return v === index - 1;
            } else {
              return v[this.rowKey] === item.keyValue;
            }
          });
          let ischeck = item.checked;
          if (select !== -1) {
            if (typeof selected === "boolean") {
              item.checked = selected;
            } else {
              item.checked = !item.checked;
            }
            if (ischeck !== item.checked) {
              this.check(item.rowData || item, item.checked, item.rowData ? item.keyValue : null, true);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      clearSelection() {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        theadChildren.checked = false;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item) => {
          item.checked = false;
        });
        this.backData = [];
        this.backIndexData = [];
        this.$emit("selection-change", {
          detail: {
            value: [],
            index: []
          }
        });
      },
      toggleAllSelection() {
        let list = [];
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            if (index > startIndex - 1) {
              list.push(index - startIndex);
            }
          }
        });
        this.toggleRowSelection(list);
      },
      check(child, check, keyValue, emit) {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        let childDomIndex = this.trChildren.findIndex((item, index) => child === item);
        if (childDomIndex < 0) {
          childDomIndex = this.data.findIndex((v) => v[this.rowKey] === keyValue) + 1;
        }
        this.trChildren.filter((v) => !v.disabled && v.keyValue).length;
        if (childDomIndex === 0) {
          check ? this.selectionAll() : this.clearSelection();
          return;
        }
        if (check) {
          if (keyValue) {
            this.backData.push(child);
          }
          this.backIndexData.push(childDomIndex - 1);
        } else {
          const index = this.backData.findIndex((v) => v[this.rowKey] === keyValue);
          const idx = this.backIndexData.findIndex((item) => item === childDomIndex - 1);
          if (keyValue) {
            this.backData.splice(index, 1);
          }
          this.backIndexData.splice(idx, 1);
        }
        const domCheckAll = this.trChildren.find((item, index) => index > 0 && !item.checked && !item.disabled);
        if (!domCheckAll) {
          theadChildren.indeterminate = false;
          theadChildren.checked = true;
        } else {
          theadChildren.indeterminate = true;
          theadChildren.checked = false;
        }
        if (this.backIndexData.length === 0) {
          theadChildren.indeterminate = false;
        }
        if (!emit) {
          this.$emit("selection-change", {
            detail: {
              value: this.backData,
              index: this.backIndexData
            }
          });
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-table-scroll", { "table--border": $props.border, "border-none": !$data.noData }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-table", { "table--stripe": $props.stripe }]),
        style: vue.normalizeStyle({ "min-width": $data.minWidth + "px" })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $data.noData ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-table-loading"
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-table-text", { "empty-border": $props.border }])
          }, vue.toDisplayString($props.emptyText), 3)
        ])) : vue.createCommentVNode("v-if", true),
        $props.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: vue.normalizeClass(["uni-table-mask", { "empty-border": $props.border }])
        }, [
          vue.createElementVNode("div", { class: "uni-table--loader" })
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 6)
    ], 2);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-c1b22370"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-table/components/uni-table/uni-table.vue"]]);
  const _sfc_main$5 = {
    name: "uniCollapseItem",
    props: {
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showAnimation: {
        type: Boolean,
        default: false
      },
      open: {
        type: Boolean,
        default: false
      },
      thumb: {
        type: String,
        default: ""
      },
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name \u503C ${this.nameSync} \u91CD\u590D`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getCollapseHeight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index) => {
            if (item === this) {
              this.collapse.childrens.splice(index, 1);
            }
          });
          this.collapse.names.forEach((item, index) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(false, index);
            return;
          }
          this.height = data.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      getCollapse(name = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse-item" }, [
      vue.createCommentVNode(" onClick(!isOpen) "),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
        class: vue.normalizeClass(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
      }, [
        vue.createElementVNode("view", { class: "uni-collapse-item__title-wrap" }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
            }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: $props.thumb,
                class: "uni-collapse-item__title-img"
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "uni-collapse-item__title-text" }, vue.toDisplayString($props.title), 1)
            ], 2)
          ], true)
        ]),
        $props.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
        }, [
          vue.createVNode(_component_uni_icons, {
            color: $props.disabled ? "#ddd" : "#bbb",
            size: "14",
            type: "bottom"
          }, null, 8, ["color"])
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
        style: vue.normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px" })
      }, [
        vue.createElementVNode("view", {
          id: $data.elId,
          ref: "collapse--hook",
          class: vue.normalizeClass(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 10, ["id"])
      ], 6)
    ]);
  }
  var __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-ef42f8ee"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$4 = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion \u5C5E\u6027\u4E3A false ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion \u5C5E\u6027\u4E3A true ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self2) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index) => {
          if (self2 !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index) => {
          vm.getCollapseHeight();
        });
      },
      onChange(isOpen, self2) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self2.nameSync : "";
        } else {
          this.childrens.forEach((vm, index) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var __easycom_10 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-03ffedca"], ["__file", "C:/material/UNI/vite-vue3-project/src/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      formatAppLog("log", "at pages/index/index.vue:116", "index");
      vue.ref(11);
      const a = uni.createInnerAudioContext();
      formatAppLog("log", "at pages/index/index.vue:120", a, "aaa");
      a.src = "../../static/didi.mp3";
      a.loop = true;
      const testValue = vue.ref([
        { time: "2022-04-01", heartRate: "98", temperature: "37.1" },
        { time: "2022-04-02", heartRate: "99", temperature: "37.2" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-04", heartRate: "110", temperature: "37.4" },
        { time: "2022-04-05", heartRate: "120", temperature: "37.5" },
        { time: "2022-04-06", heartRate: "130", temperature: "37.7" }
      ]);
      const pagetemper = vue.ref(37.2);
      const pagerate = vue.ref(120);
      const mTemper = vue.ref(37.2);
      const mrate = vue.ref(120);
      const inputDialog = vue.ref();
      const setValue = () => {
        inputDialog.value.open();
      };
      const dialogInputConfirm = () => {
        pagetemper.value = mTemper.value;
        pagerate.value = mrate.value;
        formatAppLog("log", "at pages/index/index.vue:163", pagetemper, pagerate);
        a.play();
      };
      vue.watchEffect(() => {
        formatAppLog("log", "at pages/index/index.vue:168", "222222222222222");
        formatAppLog("log", "at pages/index/index.vue:169", pagetemper.value);
      });
      vue.watch([pagetemper.value, mTemper.value], () => {
        formatAppLog("log", "at pages/index/index.vue:173", "111111111111");
      });
      const gooldValue = () => {
        uni.navigateTo({
          url: "/pages/record/record"
        });
      };
      const initWifi = () => {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D"
        });
        formatAppLog("log", "at pages/index/index.vue:189", "info");
        let MainActivity = plus.android.runtimeMainActivity();
        let Context = plus.android.importClass("android.content.Context");
        plus.android.importClass("android.net.wifi.WifiManager");
        plus.android.importClass("android.net.wifi.WifiInfo");
        plus.android.importClass("android.net.wifi.ScanResult");
        plus.android.importClass("java.util.ArrayList");
        let wifiManager = MainActivity.getSystemService(Context.WIFI_SERVICE);
        wifiManager.setWifiEnabled(true);
        let info = wifiManager.getConnectionInfo();
        formatAppLog("log", "at pages/index/index.vue:215", info, "info1111");
        let mac = info.getBSSID();
        let ssid = info.getSSID();
        formatAppLog("log", "at pages/index/index.vue:219", info, mac, "macmacmacmacmac2222222", ssid);
        if (ssid) {
          uni.hideLoading();
          setTimeout(() => {
            uni.showToast({
              title: `\u5F53\u524D\u8FDE\u63A5WIFI\u540D\u79F0\uFF1A${ssid} `,
              icon: "none",
              duration: 2e3
            });
          }, 200);
        }
      };
      const toWifi = () => {
        let main = plus.android.runtimeMainActivity();
        let Intent = plus.android.importClass("android.content.Intent");
        let mIntent = new Intent("android.settings.WIFI_SETTINGS");
        main.startActivity(mIntent);
      };
      const change = () => {
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$2);
        const _component_uni_countdown = resolveEasycom(vue.resolveDynamicComponent("uni-countdown"), __easycom_1$1);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2$1);
        const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_3$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_4$1);
        const _component_uni_th = resolveEasycom(vue.resolveDynamicComponent("uni-th"), __easycom_1);
        const _component_uni_tr = resolveEasycom(vue.resolveDynamicComponent("uni-tr"), __easycom_2);
        const _component_uni_td = resolveEasycom(vue.resolveDynamicComponent("uni-td"), __easycom_3);
        const _component_uni_table = resolveEasycom(vue.resolveDynamicComponent("uni-table"), __easycom_4);
        const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_9);
        const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_10);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "true",
          style: { height: "100%" }
        }, [
          vue.createVNode(_component_uni_nav_bar, {
            dark: "",
            fixed: true,
            color: "#fff",
            backgroundColor: "#007aff",
            shadow: "",
            "left-icon": "home",
            leftText: "",
            rightText: "WIFI\u8BBE\u7F6E",
            title: "\u8109\u640F\u4F53\u6E29\u76D1\u63A7",
            onClickLeft: initWifi,
            onClickRight: toWifi,
            style: { width: "100%" }
          }),
          vue.createVNode(_component_uni_countdown, {
            style: { display: "flex", justifyContent: "center" },
            day: 1,
            hour: 2,
            minute: 30,
            second: 0,
            color: "#FFFFFF",
            "background-color": "#007AFF"
          }),
          vue.createElementVNode("image", {
            class: "bg",
            src: "/static/bg.png"
          }),
          vue.createElementVNode("view", { class: "block" }, [
            vue.createElementVNode("view", { class: "zerobox" }, [
              vue.createElementVNode("image", {
                class: "img",
                src: "/static/zero.svg"
              }),
              vue.createElementVNode("view", { class: "box-text" }, "\u5FC3\u7387\uFF1A"),
              vue.createCommentVNode(' <uni-card>\r\n          <text class="uni-body">100</text>\r\n        </uni-card> '),
              vue.createElementVNode("view", { class: "uni-body" }, "102"),
              vue.createElementVNode("view", { class: "box-text" }, [
                vue.createTextVNode("\u9608\u503C\uFF1A"),
                vue.createElementVNode("text", { style: { color: "red" } }, vue.toDisplayString(pagerate.value), 1)
              ])
            ]),
            vue.createElementVNode("view", { class: "standard" }, [
              vue.createElementVNode("image", {
                class: "img",
                src: "/static/zero.svg"
              }),
              vue.createElementVNode("view", { class: "box-text" }, "\u6E29\u5EA6\uFF1A"),
              vue.createCommentVNode(' <uni-card>\r\n          <text class="uni-body">100</text>\r\n        </uni-card> '),
              vue.createElementVNode("view", { class: "uni-body" }, "36.8"),
              vue.createElementVNode("view", { class: "box-text" }, [
                vue.createTextVNode("\u9608\u503C\uFF1A"),
                vue.createElementVNode("text", { style: { color: "red" } }, vue.toDisplayString(pagetemper.value), 1)
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "button",
            onClick: setValue
          }, " \u8BBE\u7F6E\u53C2\u6570\u9608\u503C "),
          vue.createVNode(_component_uni_popup, {
            ref_key: "inputDialog",
            ref: inputDialog,
            type: "dialog"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                ref: "inputClose",
                mode: "input",
                title: "\u8F93\u5165\u5185\u5BB9",
                value: "\u5BF9\u8BDD\u6846\u9884\u7F6E\u63D0\u793A\u5185\u5BB9!",
                placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
                onConfirm: dialogInputConfirm
              }, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    vue.createElementVNode("view", { style: { display: "flex", alignItems: "center" } }, [
                      vue.createTextVNode("\u5FC3\u7387\u9608\u503C\uFF1A"),
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: mrate.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mrate.value = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u5FC3\u7387"
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("view", { style: { display: "flex", alignItems: "center" } }, [
                      vue.createTextVNode("\u6E29\u5EA6\u9608\u503C\uFF1A"),
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: mTemper.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => mTemper.value = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u6E29\u5EA6"
                      }, null, 8, ["modelValue"])
                    ])
                  ], true)
                ]),
                _: 3
              }, 512)
            ]),
            _: 3
          }, 512),
          vue.createElementVNode("view", {
            class: "button",
            onClick: gooldValue
          }, " \u67E5\u770B\u5F80\u671F\u76D1\u63A7\u8BB0\u5F55 "),
          vue.createVNode(_component_uni_collapse, {
            ref: "collapse",
            onChange: change
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_collapse_item, {
                "show-animation": true,
                open: true,
                class: "abnormal",
                title: "\u5F02\u5E38\u8BB0\u5F55",
                thumb: "../../static/abnormal.svg"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_table, {
                    align: "center",
                    border: "",
                    stripe: "",
                    emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createCommentVNode(" \u8868\u5934\u884C "),
                      vue.createVNode(_component_uni_tr, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_uni_th, { align: "center" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("\u65E5\u671F")
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_uni_th, { align: "center" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("\u59D3\u540D")
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_uni_th, { align: "center" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("\u5730\u5740")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      vue.createCommentVNode(" \u8868\u683C\u6570\u636E\u884C "),
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(testValue.value, (item) => {
                        return vue.openBlock(), vue.createBlock(_component_uni_tr, null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_uni_td, null, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(item.time), 1)
                              ]),
                              _: 2
                            }, 1024),
                            vue.createVNode(_component_uni_td, null, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(item.heartRate), 1)
                              ]),
                              _: 2
                            }, 1024),
                            vue.createVNode(_component_uni_td, null, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(item.temperature), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512),
          vue.createCommentVNode(' <view class="text-area">\r\n      <text class="title">{{ title }}</text>\r\n      <view @click="add()">\u70B9\u51FB</view>\r\n      <view @click="stop()">\u6682\u505C</view>\r\n      <navigator url="/pages/wifi/index">\u7ACB\u5373\u8DF3\u8F6C</navigator>\r\n    </view> ')
        ]);
      };
    }
  });
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1badc801"], ["__file", "C:/material/UNI/vite-vue3-project/src/pages/index/index.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.ref(11);
      const range = vue.ref(["2022-02-1", "2022-3-28"]);
      const testValue = vue.ref([
        { time: "2022-04-01", heartRate: "98", temperature: "37.1" },
        { time: "2022-04-02", heartRate: "99", temperature: "37.2" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
        { time: "2022-04-04", heartRate: "110", temperature: "37.4" },
        { time: "2022-04-05", heartRate: "120", temperature: "37.5" },
        { time: "2022-04-06", heartRate: "130", temperature: "37.7" }
      ]);
      const change = (v) => {
        formatAppLog("log", "at pages/record/record.vue:46", v, "maskClick");
        let filtered = testValue.value.filter((d) => {
          formatAppLog("log", "at pages/record/record.vue:55", new Date(d.time), new Date(v[0]));
          return new Date(d.time) >= new Date(v[0]) && new Date(d.time) <= new Date(v[1]);
        });
        formatAppLog("log", "at pages/record/record.vue:61", "filtered", filtered);
        testValue.value = filtered;
      };
      return (_ctx, _cache) => {
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_0);
        const _component_uni_th = resolveEasycom(vue.resolveDynamicComponent("uni-th"), __easycom_1);
        const _component_uni_tr = resolveEasycom(vue.resolveDynamicComponent("uni-tr"), __easycom_2);
        const _component_uni_td = resolveEasycom(vue.resolveDynamicComponent("uni-td"), __easycom_3);
        const _component_uni_table = resolveEasycom(vue.resolveDynamicComponent("uni-table"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "true",
          style: { height: "100%" }
        }, [
          vue.createElementVNode("view", { class: "example-body" }, [
            vue.createVNode(_component_uni_datetime_picker, {
              modelValue: range.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => range.value = $event),
              type: "daterange",
              onChange: change
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(' <uni-section title="\u57FA\u7840\u7528\u6CD5" type="line" padding> '),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              class: "tableImg",
              src: "/static/table.svg"
            })
          ]),
          vue.createVNode(_component_uni_table, {
            align: "center",
            border: "",
            stripe: "",
            emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
          }, {
            default: vue.withCtx(() => [
              vue.createCommentVNode(" \u8868\u5934\u884C "),
              vue.createVNode(_component_uni_tr, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_th, { align: "center" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u65E5\u671F")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_uni_th, { align: "center" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u59D3\u540D")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_uni_th, { align: "center" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("\u5730\u5740")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createCommentVNode(" \u8868\u683C\u6570\u636E\u884C "),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(testValue.value, (item) => {
                return vue.openBlock(), vue.createBlock(_component_uni_tr, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_uni_td, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(item.time), 1)
                      ]),
                      _: 2
                    }, 1024),
                    vue.createVNode(_component_uni_td, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(item.heartRate), 1)
                      ]),
                      _: 2
                    }, 1024),
                    vue.createVNode(_component_uni_td, null, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(item.temperature), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ]),
            _: 1
          }),
          vue.createCommentVNode(" </uni-section> ")
        ]);
      };
    }
  });
  var PagesRecordRecord = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8d3aef0a"], ["__file", "C:/material/UNI/vite-vue3-project/src/pages/record/record.vue"]]);
  const FvvUniWifiHelper = requireNativePlugin("Fvv-UniWifiHelper");
  const _sfc_main$1 = {
    data() {
      return {
        title: ""
      };
    },
    onLoad() {
    },
    onShow() {
      this.getWifiNameInfo().then((res) => {
        formatAppLog("log", "at pages/wifi/index.vue:23", 222, res);
        const appWifiName = res.replace(/\"/g, "");
        uni.setStorageSync("SSID", appWifiName);
        this.requestGetWifiInfo(appWifiName);
      }).catch((err) => {
        FvvUniWifiHelper.closeWifi();
      });
    },
    mounted() {
      formatAppLog("log", "at pages/wifi/index.vue:34", 44444444444444, uni.getStorageSync("SSID"));
    },
    methods: {
      getWifiInfo() {
      },
      getWifiNameInfo() {
        return new Promise((resolve, reject) => {
          formatAppLog("log", "at pages/wifi/index.vue:41", 1111, "getWifiNameInfo");
          uni.getLocation({
            type: "wgs84",
            success: () => {
              formatAppLog("log", "at pages/wifi/index.vue:45", 2222222, "getWifiNameInfo", FvvUniWifiHelper);
              FvvUniWifiHelper.getWifiInfo((res) => {
                const SSID = res.sSID;
                formatAppLog("log", "at pages/wifi/index.vue:48", 3333333, "SSID");
                formatAppLog("log", "at pages/wifi/index.vue:49", 4545, res);
                if (SSID === "<unknown ssid>") {
                  reject();
                } else {
                  resolve(SSID);
                }
              });
            }
          });
        });
      },
      requestGetWifiInfo(appWifiName) {
        uni.request({
          url: "https://www.fastmock.site/mock/37fc0d926127a097ac580017eb5a9365/api/api/wifi",
          success: (res) => {
            if (res.data.status === 200) {
              const deviceWifiName = res.data.SSID;
              formatAppLog("log", "at pages/wifi/index.vue:66", 123132132, res.data.SSID, appWifiName, deviceWifiName === appWifiName);
              if (deviceWifiName === appWifiName) {
                this.title = "wifi\u540D\u79F0\u4E00\u81F4";
              }
            }
          }
        });
      },
      info() {
        formatAppLog("log", "at pages/wifi/index.vue:80", "info");
        let MainActivity = plus.android.runtimeMainActivity();
        let Context = plus.android.importClass("android.content.Context");
        plus.android.importClass("android.net.wifi.WifiManager");
        plus.android.importClass("android.net.wifi.WifiInfo");
        plus.android.importClass("android.net.wifi.ScanResult");
        plus.android.importClass("java.util.ArrayList");
        let wifiManager = MainActivity.getSystemService(Context.WIFI_SERVICE);
        wifiManager.setWifiEnabled(true);
        let info = wifiManager.getConnectionInfo();
        formatAppLog("log", "at pages/wifi/index.vue:106", info, "info1111");
        let mac = info.getBSSID();
        let ssid = info.getSSID();
        this.title = ssid;
        formatAppLog("log", "at pages/wifi/index.vue:111", info, mac, "macmacmacmacmac1111111", ssid);
        let getSupplican = info.getSupplicanState();
        formatAppLog("log", "at pages/wifi/index.vue:113", info, mac, getSupplican, "macmacmacmacmac2222222", ssid);
      },
      setting() {
        var main = plus.android.runtimeMainActivity();
        var Intent = plus.android.importClass("android.content.Intent");
        var mIntent = new Intent("android.settings.WIFI_SETTINGS");
        main.startActivity(mIntent);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createTextVNode(" wifi\u540D\u79F0---" + vue.toDisplayString($data.title) + " ", 1),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.getWifiInfo && $options.getWifiInfo(...args))
      }, "\u83B7\u53D6wifi\u4FE1\u606F"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.info && $options.info(...args))
      }, "\u83B7\u53D6wifi\u4FE1\u606F2"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.setting && $options.setting(...args))
      }, "\u8DF3\u8F6C\u8BBE\u7F6E")
    ]);
  }
  var PagesWifiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/material/UNI/vite-vue3-project/src/pages/wifi/index.vue"]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni && uni.base64ToArrayBuffer) {
    ArrayBuffer = uni.base64ToArrayBuffer("").constructor;
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/record/record", PagesRecordRecord);
  __definePage("pages/wifi/index", PagesWifiIndex);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      formatAppLog("log", "at App.vue:3", "App1");
      onLaunch(() => {
        formatAppLog("log", "at App.vue:5", "App Launch");
      });
      onShow(() => {
        formatAppLog("log", "at App.vue:8", "App Show");
      });
      onHide(() => {
        formatAppLog("log", "at App.vue:11", "App Hide");
      });
      return () => {
      };
    }
  });
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/material/UNI/vite-vue3-project/src/App.vue"]]);
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf2 = inBrowser && window.performance;
    if (perf2 && perf2.mark && perf2.measure && perf2.clearMarks && perf2.clearMeasures) {
      mark = (tag) => perf2.mark(tag);
      measure = (name, startTag, endTag) => {
        perf2.measure(name, startTag, endTag);
        perf2.clearMarks(startTag);
        perf2.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const pathStateMachine = [];
  pathStateMachine[0] = {
    ["w"]: [0],
    ["i"]: [3, 0],
    ["["]: [4],
    ["o"]: [7]
  };
  pathStateMachine[1] = {
    ["w"]: [1],
    ["."]: [2],
    ["["]: [4],
    ["o"]: [7]
  };
  pathStateMachine[2] = {
    ["w"]: [2],
    ["i"]: [3, 0],
    ["0"]: [3, 0]
  };
  pathStateMachine[3] = {
    ["i"]: [3, 0],
    ["0"]: [3, 0],
    ["w"]: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    ["o"]: [7, 1]
  };
  pathStateMachine[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [
      4,
      2
    ],
    ["]"]: [1, 3],
    ["o"]: 8,
    ["l"]: [4, 0]
  };
  pathStateMachine[5] = {
    ["'"]: [4, 0],
    ["o"]: 8,
    ["l"]: [5, 0]
  };
  pathStateMachine[6] = {
    ['"']: [4, 0],
    ["o"]: 8,
    ["l"]: [6, 0]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code = ch.charCodeAt(0);
    switch (code) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[0] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[1] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[2] = () => {
      actions[0]();
      subPathDepth++;
    };
    actions[3] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[0]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[1]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[0]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap["l"] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(".")) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(".");
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      ["list"]: list,
      ["named"]: named,
      ["plural"]: plural,
      ["linked"]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      ["message"]: message,
      ["type"]: type,
      ["interpolate"]: interpolate,
      ["normalize"]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    [0]: `Expected token: '{0}'`,
    [1]: `Invalid token in placeholder: '{0}'`,
    [2]: `Unterminated single quote in placeholder`,
    [3]: `Unknown escape sequence: \\{0}`,
    [4]: `Invalid unicode escape sequence: {0}`,
    [5]: `Unbalanced closing brace`,
    [6]: `Unterminated closing brace`,
    [7]: `Empty placeholder`,
    [8]: `Not allowed nest placeholder`,
    [9]: `Invalid linked format`,
    [10]: `Plural must have messages`,
    [11]: `Unexpected empty linked modifier`,
    [12]: `Unexpected empty linked key`,
    [13]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code, loc, options = {}) {
    const { domain, messages: messages2, args } = options;
    const msg = format((messages2 || errorMessages$2)[code] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [0]: `Not found '{key}' key in '{locale}' locale messages.`,
    [1]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [2]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [3]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [4]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [5]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code, ...args) {
    return format(warnMessages$1[code], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages: messages2,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
      const locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code) {
    return createCompileError(code, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [14]: "Invalid arguments",
    [15]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [16]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages2[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages: messages2, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages2[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(14);
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(4));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(16);
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(16);
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(15);
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(14);
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(2));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(14);
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
    ["vue-i18n-resource-inspector"]: "I18n Resources",
    ["vue-i18n-timeline"]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    ["vue-i18n-resource-inspector"]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    ["vue-i18n-timeline"]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [6]: `Fall back to {type} '{key}' with root locale.`,
    [7]: `Not supported 'preserve'.`,
    [8]: `Not supported 'formatter'.`,
    [9]: `Not supported 'preserveDirectiveContent'.`,
    [10]: `Not supported 'getChoiceIndex'.`,
    [11]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [12]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code, ...args) {
    return format(warnMessages[code], ...args);
  }
  function createI18nError(code, ...args) {
    return createCompileError(code, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [14]: "Unexpected return type in composer",
    [15]: "Invalid argument",
    [16]: "Must be called at the top of a `setup` function",
    [17]: "Need to install with `app.use` function",
    [22]: "Unexpected error",
    [18]: "Not available in legacy mode",
    [19]: `Required in value: {0}`,
    [20]: `Invalid value`,
    [21]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  makeSymbol("__intlifyMeta");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages: messages2, __i18n } = options;
    const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource: resource2 }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource2, ret[locale2]);
        } else {
          deepCopy(resource2, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(20);
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US");
    const _fallbackLocale = vue.ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages2 = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(14);
      }
    }
    function t2(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(15);
      }
      return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps((context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = translate(_context2, ...args);
        } finally {
          _context2.processor = null;
        }
        return ret;
      }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [vue.createVNode(vue.Text, null, key, 0)], (val) => isArray(val));
    }
    function numberParts(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
    }
    function datetimeParts(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages3 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales.length; i++) {
        const targetLocaleMessages = _messages.value[locales[i]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages3 = messageValue;
          break;
        }
      }
      return messages3;
    }
    function tm(key) {
      const messages3 = resolveMessages(key);
      return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages2,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t: t2,
      rt,
      d,
      n,
      te,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(8));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(9));
    }
    let messages2 = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages2 = locales.reduce((messages3, locale2) => {
        const message = messages3[locale2] || (messages3[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages3;
      }, messages2 || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages: messages2,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        warn(getWarnMessage(8));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(8));
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        warn(getWarnMessage(9));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(9));
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(15);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(15);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return composer.d(...args);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return composer.n(...args);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(10));
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject$1(props.format)) {
        if (isString(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    setup(props, context) {
      const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    setup(props, context) {
      const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
    }
  };
  function getComposer$2(i18n, instance) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
    }
  }
  function vTDirective(i18n) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(22);
      }
      const composer = getComposer$2(i18n, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(7));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(20);
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels["vue-i18n-resource-inspector"],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels["vue-i18n-timeline"],
            color: VueDevToolsTimelineColors["vue-i18n-timeline"]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n) {
    const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages2) {
    const value = {};
    Object.keys(messages2).forEach((key) => {
      const v = messages2[key];
      if (isFunction(v) && "source" in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject$1(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>\u0192</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
    for (const [keyInstance, instance] of i18n.__instances) {
      const composer = i18n.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n) {
    if (nodeId === "global") {
      return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
    } else {
      const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n) {
    const composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n) {
    const composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(22);
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(22);
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages2 = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n = {
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        {
          const ret = await enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(21);
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      get global() {
        return __global;
      },
      __instances,
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(16);
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(17);
    }
    const i18n = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n) {
      throw createI18nError(22);
    }
    const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages2 = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages2 = getLocaleMessages(global2.locale.value, {
          messages: messages2,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages2);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages2[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(12));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n.mode === "legacy") {
      throw createI18nError(18);
    }
    const i18nInternal = i18n;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n;
      if (i18n.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(22);
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(22);
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  let i18nConfig = {
    locale: uni.getLocale()
  };
  createI18n(i18nConfig);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
