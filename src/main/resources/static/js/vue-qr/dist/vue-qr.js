!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-qr", [], e) : "object" == typeof exports ? exports["vue-qr"] = e() : t["vue-qr"] = e()
}(this, (function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var i = e[n] = {i: n, l: !1, exports: {}};
      return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
      return n
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return r.d(e, "a", e), e
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/dist/", r(r.s = 5)
  }([function (t, e, r) {
    t.exports = r(6)
  }, function (t, e) {
    function r(t, e, r, n, i, o, a) {
      try {
        var s = t[o](a), l = s.value
      } catch (t) {
        return void r(t)
      }
      s.done ? e(l) : Promise.resolve(l).then(n, i)
    }

    t.exports = function (t) {
      return function () {
        var e = this, n = arguments;
        return new Promise((function (i, o) {
          var a = t.apply(e, n);

          function s(t) {
            r(a, i, o, s, l, "next", t)
          }

          function l(t) {
            r(a, i, o, s, l, "throw", t)
          }

          s(void 0)
        }))
      }
    }
  }, function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(4), i = r.n(n);
    e.default = function () {
      return i()('!function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e){!function(){var t,e,i,r=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function o(o,s,n,a){var h,l,u,p,f,c,y=Math.max(2,a),d=new Uint8Array(256),w=new Int32Array(5003),g=new Int32Array(5003),b=0,x=0,v=!1;function P(t,e){d[l++]=t,l>=254&&S(e)}function m(t){B(5003),x=f+2,v=!0,F(f,t)}function B(t){for(var e=0;e<t;++e)w[e]=-1}function S(t){l>0&&(t.writeByte(l),t.writeBytes(d,0,l),l=0)}function T(t){return(1<<t)-1}function M(){return 0===t?-1:(--t,255&n[e++])}function F(t,e){for(h&=r[b],b>0?h|=t<<b:h=t,b+=i;b>=8;)P(255&h,e),h>>=8,b-=8;if((x>u||v)&&(v?(u=T(i=p),v=!1):(++i,u=12==i?4096:T(i))),t==c){for(;b>0;)P(255&h,e),h>>=8,b-=8;S(e)}}this.encode=function(r){r.writeByte(y),t=o*s,e=0,function(t,e){var r,o,s,n,a,h;for(v=!1,u=T(i=p=t),c=(f=1<<t-1)+1,x=f+2,l=0,n=M(),h=0,r=5003;r<65536;r*=2)++h;h=8-h,B(5003),F(f,e);t:for(;-1!=(o=M());)if(r=(o<<12)+n,w[s=o<<h^n]!==r){if(w[s]>=0){a=5003-s,0===s&&(a=1);do{if((s-=a)<0&&(s+=5003),w[s]===r){n=g[s];continue t}}while(w[s]>=0)}F(n,e),n=o,x<4096?(g[s]=x++,w[s]=r):m(e)}else n=g[s];F(n,e),F(c,e)}(y+1,r),r.writeByte(0)}}var s;function n(t,e){var i,r,o,s,n;function a(t,e,r,o,s){i[e][0]-=t*(i[e][0]-r)/1024,i[e][1]-=t*(i[e][1]-o)/1024,i[e][2]-=t*(i[e][2]-s)/1024}function h(t,e,r,o,s){for(var a,h,l=Math.abs(e-t),u=Math.min(e+t,256),p=e+1,f=e-1,c=1;p<u||f>l;)h=n[c++],p<u&&((a=i[p++])[0]-=h*(a[0]-r)/(1<<18),a[1]-=h*(a[1]-o)/(1<<18),a[2]-=h*(a[2]-s)/(1<<18)),f>l&&((a=i[f--])[0]-=h*(a[0]-r)/(1<<18),a[1]-=h*(a[1]-o)/(1<<18),a[2]-=h*(a[2]-s)/(1<<18))}function l(t,e,r){var n,a,h,l,u,p=~(1<<31),f=p,c=-1,y=c;for(n=0;n<256;n++)a=i[n],(h=Math.abs(a[0]-t)+Math.abs(a[1]-e)+Math.abs(a[2]-r))<p&&(p=h,c=n),(l=h-(o[n]>>12))<f&&(f=l,y=n),u=s[n]>>10,s[n]-=u,o[n]+=u<<10;return s[c]+=64,o[c]-=65536,y}this.buildColormap=function(){!function(){var t,e;for(i=[],r=new Int32Array(256),o=new Int32Array(256),s=new Int32Array(256),n=new Int32Array(32),t=0;t<256;t++)e=(t<<12)/256,i[t]=new Float64Array([e,e,e,0]),s[t]=256,o[t]=0}(),function(){var i,r,o,s,u,p,f=t.length,c=30+(e-1)/3,y=f/(3*e),d=~~(y/100),w=1024,g=2048,b=g>>6;for(b<=1&&(b=0),i=0;i<b;i++)n[i]=w*(256*(b*b-i*i)/(b*b));f<1509?(e=1,r=3):r=f%499!=0?1497:f%491!=0?1473:f%487!=0?1461:1509;var x=0;for(i=0;i<y;)if(a(w,p=l(o=(255&t[x])<<4,s=(255&t[x+1])<<4,u=(255&t[x+2])<<4),o,s,u),0!==b&&h(b,p,o,s,u),(x+=r)>=f&&(x-=f),0===d&&(d=1),++i%d==0)for(w-=w/c,(b=(g-=g/30)>>6)<=1&&(b=0),p=0;p<b;p++)n[p]=w*(256*(b*b-p*p)/(b*b))}(),function(){for(var t=0;t<256;t++)i[t][0]>>=4,i[t][1]>>=4,i[t][2]>>=4,i[t][3]=t}(),function(){var t,e,o,s,n,a,h=0,l=0;for(t=0;t<256;t++){for(n=t,a=(o=i[t])[1],e=t+1;e<256;e++)(s=i[e])[1]<a&&(n=e,a=s[1]);if(s=i[n],t!=n&&(e=s[0],s[0]=o[0],o[0]=e,e=s[1],s[1]=o[1],o[1]=e,e=s[2],s[2]=o[2],o[2]=e,e=s[3],s[3]=o[3],o[3]=e),a!=h){for(r[h]=l+t>>1,e=h+1;e<a;e++)r[e]=t;h=a,l=t}}for(r[h]=l+255>>1,e=h+1;e<256;e++)r[e]=255}()},this.getColormap=function(){for(var t=[],e=[],r=0;r<256;r++)e[i[r][3]]=r;for(var o=0,s=0;s<256;s++){var n=e[s];t[o++]=i[n][0],t[o++]=i[n][1],t[o++]=i[n][2]}return t},this.lookupRGB=function(t,e,o){for(var s,n,a,h=1e3,l=-1,u=r[e],p=u-1;u<256||p>=0;)u<256&&((a=(n=i[u])[1]-e)>=h?u=256:(u++,a<0&&(a=-a),(s=n[0]-t)<0&&(s=-s),(a+=s)<h&&((s=n[2]-o)<0&&(s=-s),(a+=s)<h&&(h=a,l=n[3])))),p>=0&&((a=e-(n=i[p])[1])>=h?p=-1:(p--,a<0&&(a=-a),(s=n[0]-t)<0&&(s=-s),(a+=s)<h&&((s=n[2]-o)<0&&(s=-s),(a+=s)<h&&(h=a,l=n[3]))));return l}}function a(){this.page=-1,this.pages=[],this.newPage()}s=function(t){var e,i,r,o;return e=new l(t.width,t.height),0===t.index?e.writeHeader():e.firstFrame=!1,e.setTransparent(t.transparent),e.setRepeat(t.repeat),e.setDelay(t.delay),e.setQuality(t.quality),e.setDither(t.dither),e.setGlobalPalette(t.globalPalette),e.addFrame(t.data),t.last&&e.finish(),!0===t.globalPalette&&(t.globalPalette=e.getGlobalPalette()),r=e.stream(),t.data=r.pages,t.cursor=r.cursor,t.pageSize=r.constructor.pageSize,t.canTransfer?(o=function(){var e,r,o,s;for(s=[],e=0,r=(o=t.data).length;e<r;e++)i=o[e],s.push(i.buffer);return s}(),self.postMessage(t,o)):self.postMessage(t)},self.onmessage=function(t){return s(t.data)},a.pageSize=4096,a.charMap={};for(var h=0;h<256;h++)a.charMap[h]=String.fromCharCode(h);function l(t,e){this.width=~~t,this.height=~~e,this.transparent=null,this.transIndex=0,this.repeat=-1,this.delay=0,this.image=null,this.pixels=null,this.indexedPixels=null,this.colorDepth=null,this.colorTab=null,this.neuQuant=null,this.usedEntry=new Array,this.palSize=7,this.dispose=-1,this.firstFrame=!0,this.sample=10,this.dither=!1,this.globalPalette=!1,this.out=new a}a.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(a.pageSize),this.cursor=0},a.prototype.getData=function(){for(var t="",e=0;e<this.pages.length;e++)for(var i=0;i<a.pageSize;i++)t+=a.charMap[this.pages[e][i]];return t},a.prototype.writeByte=function(t){this.cursor>=a.pageSize&&this.newPage(),this.pages[this.page][this.cursor++]=t},a.prototype.writeUTFBytes=function(t){for(var e=t.length,i=0;i<e;i++)this.writeByte(t.charCodeAt(i))},a.prototype.writeBytes=function(t,e,i){for(var r=i||t.length,o=e||0;o<r;o++)this.writeByte(t[o])},l.prototype.setDelay=function(t){this.delay=Math.round(t/10)},l.prototype.setFrameRate=function(t){this.delay=Math.round(100/t)},l.prototype.setDispose=function(t){t>=0&&(this.dispose=t)},l.prototype.setRepeat=function(t){this.repeat=t},l.prototype.setTransparent=function(t){this.transparent=t},l.prototype.addFrame=function(t){this.image=t,this.colorTab=this.globalPalette&&this.globalPalette.slice?this.globalPalette:null,this.getImagePixels(),this.analyzePixels(),!0===this.globalPalette&&(this.globalPalette=this.colorTab),this.firstFrame&&(this.writeLSD(),this.writePalette(),this.repeat>=0&&this.writeNetscapeExt()),this.writeGraphicCtrlExt(),this.writeImageDesc(),this.firstFrame||this.globalPalette||this.writePalette(),this.writePixels(),this.firstFrame=!1},l.prototype.finish=function(){this.out.writeByte(59)},l.prototype.setQuality=function(t){t<1&&(t=1),this.sample=t},l.prototype.setDither=function(t){!0===t&&(t="FloydSteinberg"),this.dither=t},l.prototype.setGlobalPalette=function(t){this.globalPalette=t},l.prototype.getGlobalPalette=function(){return this.globalPalette&&this.globalPalette.slice&&this.globalPalette.slice(0)||this.globalPalette},l.prototype.writeHeader=function(){this.out.writeUTFBytes("GIF89a")},l.prototype.analyzePixels=function(){this.colorTab||(this.neuQuant=new n(this.pixels,this.sample),this.neuQuant.buildColormap(),this.colorTab=this.neuQuant.getColormap()),this.dither?this.ditherPixels(this.dither.replace("-serpentine",""),null!==this.dither.match(/-serpentine/)):this.indexPixels(),this.pixels=null,this.colorDepth=8,this.palSize=7,null!==this.transparent&&(this.transIndex=this.findClosest(this.transparent,!0))},l.prototype.indexPixels=function(t){var e=this.pixels.length/3;this.indexedPixels=new Uint8Array(e);for(var i=0,r=0;r<e;r++){var o=this.findClosestRGB(255&this.pixels[i++],255&this.pixels[i++],255&this.pixels[i++]);this.usedEntry[o]=!0,this.indexedPixels[r]=o}},l.prototype.ditherPixels=function(t,e){var i={FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]};if(!t||!i[t])throw"Unknown dithering kernel: "+t;var r=i[t],o=0,s=this.height,n=this.width,a=this.pixels,h=e?-1:1;this.indexedPixels=new Uint8Array(this.pixels.length/3);for(var l=0;l<s;l++){e&&(h*=-1);for(var u=1==h?0:n-1,p=1==h?n:0;u!==p;u+=h){var f=3*(o=l*n+u),c=a[f],y=a[f+1],d=a[f+2];f=this.findClosestRGB(c,y,d),this.usedEntry[f]=!0,this.indexedPixels[o]=f,f*=3;for(var w=c-this.colorTab[f],g=y-this.colorTab[f+1],b=d-this.colorTab[f+2],x=1==h?0:r.length-1,v=1==h?r.length:0;x!==v;x+=h){var P=r[x][1],m=r[x][2];if(P+u>=0&&P+u<n&&m+l>=0&&m+l<s){var B=r[x][0];f=o+P+m*n,a[f*=3]=Math.max(0,Math.min(255,a[f]+w*B)),a[f+1]=Math.max(0,Math.min(255,a[f+1]+g*B)),a[f+2]=Math.max(0,Math.min(255,a[f+2]+b*B))}}}}},l.prototype.findClosest=function(t,e){return this.findClosestRGB((16711680&t)>>16,(65280&t)>>8,255&t,e)},l.prototype.findClosestRGB=function(t,e,i,r){if(null===this.colorTab)return-1;if(this.neuQuant&&!r)return this.neuQuant.lookupRGB(t,e,i);for(var o=0,s=16777216,n=this.colorTab.length,a=0,h=0;a<n;h++){var l=t-(255&this.colorTab[a++]),u=e-(255&this.colorTab[a++]),p=i-(255&this.colorTab[a++]),f=l*l+u*u+p*p;(!r||this.usedEntry[h])&&f<s&&(s=f,o=h)}return o},l.prototype.getImagePixels=function(){var t=this.width,e=this.height;this.pixels=new Uint8Array(t*e*3);for(var i=this.image,r=0,o=0,s=0;s<e;s++)for(var n=0;n<t;n++)this.pixels[o++]=i[r++],this.pixels[o++]=i[r++],this.pixels[o++]=i[r++],r++},l.prototype.writeGraphicCtrlExt=function(){var t,e;this.out.writeByte(33),this.out.writeByte(249),this.out.writeByte(4),null===this.transparent?(t=0,e=0):(t=1,e=2),this.dispose>=0&&(e=7&dispose),e<<=2,this.out.writeByte(0|e|t),this.writeShort(this.delay),this.out.writeByte(this.transIndex),this.out.writeByte(0)},l.prototype.writeImageDesc=function(){this.out.writeByte(44),this.writeShort(0),this.writeShort(0),this.writeShort(this.width),this.writeShort(this.height),this.firstFrame||this.globalPalette?this.out.writeByte(0):this.out.writeByte(128|this.palSize)},l.prototype.writeLSD=function(){this.writeShort(this.width),this.writeShort(this.height),this.out.writeByte(240|this.palSize),this.out.writeByte(0),this.out.writeByte(0)},l.prototype.writeNetscapeExt=function(){this.out.writeByte(33),this.out.writeByte(255),this.out.writeByte(11),this.out.writeUTFBytes("NETSCAPE2.0"),this.out.writeByte(3),this.out.writeByte(1),this.writeShort(this.repeat),this.out.writeByte(0)},l.prototype.writePalette=function(){this.out.writeBytes(this.colorTab);for(var t=768-this.colorTab.length,e=0;e<t;e++)this.out.writeByte(0)},l.prototype.writeShort=function(t){this.out.writeByte(255&t),this.out.writeByte(t>>8&255)},l.prototype.writePixels=function(){new o(this.width,this.height,this.indexedPixels,this.colorDepth).encode(this.out)},l.prototype.stream=function(){return this.out}}()}]);\n', "Worker", void 0, void 0)
    }
  }, function (t, e) {
    function r(e) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = r = function (t) {
        return typeof t
      } : t.exports = r = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, r(e)
    }

    t.exports = r
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t, e, r, n) {
      try {
        try {
          var i;
          try {
            i = new window.Blob([t])
          } catch (e) {
            (i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(t), i = i.getBlob()
          }
          var o = window.URL || window.webkitURL, a = o.createObjectURL(i), s = new window[e](a, r);
          return o.revokeObjectURL(a), s
        } catch (n) {
          return new window[e]("data:application/javascript,".concat(encodeURIComponent(t)), r)
        }
      } catch (t) {
        if (!n) throw Error("Inline worker is not supported");
        return new window[e](n, r)
      }
    }
  }, function (t, e, r) {
    t.exports = r(7)
  }, function (t, e, r) {
    var n = function (t) {
      "use strict";
      var e = Object.prototype, r = e.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator", a = n.toStringTag || "@@toStringTag";

      function s(t, e, r) {
        return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
      }

      try {
        s({}, "")
      } catch (t) {
        s = function (t, e, r) {
          return t[e] = r
        }
      }

      function l(t, e, r, n) {
        var i = e && e.prototype instanceof c ? e : c, o = Object.create(i.prototype), a = new k(n || []);
        return o._invoke = function (t, e, r) {
          var n = "suspendedStart";
          return function (i, o) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === i) throw o;
              return C()
            }
            for (r.method = i, r.arg = o; ;) {
              var a = r.delegate;
              if (a) {
                var s = b(a, r);
                if (s) {
                  if (s === u) continue;
                  return s
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw n = "completed", r.arg;
                r.dispatchException(r.arg)
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = h(t, e, r);
              if ("normal" === l.type) {
                if (n = r.done ? "completed" : "suspendedYield", l.arg === u) continue;
                return {value: l.arg, done: r.done}
              }
              "throw" === l.type && (n = "completed", r.method = "throw", r.arg = l.arg)
            }
          }
        }(t, r, a), o
      }

      function h(t, e, r) {
        try {
          return {type: "normal", arg: t.call(e, r)}
        } catch (t) {
          return {type: "throw", arg: t}
        }
      }

      t.wrap = l;
      var u = {};

      function c() {
      }

      function f() {
      }

      function d() {
      }

      var p = {};
      p[i] = function () {
        return this
      };
      var g = Object.getPrototypeOf, m = g && g(g(B([])));
      m && m !== e && r.call(m, i) && (p = m);
      var v = d.prototype = c.prototype = Object.create(p);

      function y(t) {
        ["next", "throw", "return"].forEach((function (e) {
          s(t, e, (function (t) {
            return this._invoke(e, t)
          }))
        }))
      }

      function w(t, e) {
        var n;
        this._invoke = function (i, o) {
          function a() {
            return new e((function (n, a) {
              !function n(i, o, a, s) {
                var l = h(t[i], t, o);
                if ("throw" !== l.type) {
                  var u = l.arg, c = u.value;
                  return c && "object" == typeof c && r.call(c, "__await") ? e.resolve(c.__await).then((function (t) {
                    n("next", t, a, s)
                  }), (function (t) {
                    n("throw", t, a, s)
                  })) : e.resolve(c).then((function (t) {
                    u.value = t, a(u)
                  }), (function (t) {
                    return n("throw", t, a, s)
                  }))
                }
                s(l.arg)
              }(i, o, n, a)
            }))
          }

          return n = n ? n.then(a, a) : a()
        }
      }

      function b(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return u;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return u
        }
        var n = h(r, t.iterator, e.arg);
        if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
        var i = n.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
      }

      function _(t) {
        var e = {tryLoc: t[0]};
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function x(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function k(t) {
        this.tryEntries = [{tryLoc: "root"}], t.forEach(_, this), this.reset(!0)
      }

      function B(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1, o = function e() {
              for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
              return e.value = void 0, e.done = !0, e
            };
            return o.next = o
          }
        }
        return {next: C}
      }

      function C() {
        return {value: void 0, done: !0}
      }

      return f.prototype = v.constructor = d, d.constructor = f, f.displayName = s(d, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
      }, t.awrap = function (t) {
        return {__await: t}
      }, y(w.prototype), w.prototype[o] = function () {
        return this
      }, t.AsyncIterator = w, t.async = function (e, r, n, i, o) {
        void 0 === o && (o = Promise);
        var a = new w(l(e, r, n, i), o);
        return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
          return t.done ? t.value : a.next()
        }))
      }, y(v), s(v, a, "Generator"), v[i] = function () {
        return this
      }, v.toString = function () {
        return "[object Generator]"
      }, t.keys = function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e.reverse(), function r() {
          for (; e.length;) {
            var n = e.pop();
            if (n in t) return r.value = n, r.done = !1, r
          }
          return r.done = !0, r
        }
      }, t.values = B, k.prototype = {
        constructor: k, reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
        }, stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval
        }, dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;

          function n(r, n) {
            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var o = this.tryEntries[i], a = o.completion;
            if ("root" === o.tryLoc) return n("end");
            if (o.tryLoc <= this.prev) {
              var s = r.call(o, "catchLoc"), l = r.call(o, "finallyLoc");
              if (s && l) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              } else if (s) {
                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
              } else {
                if (!l) throw new Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
              }
            }
          }
        }, abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var o = i;
              break
            }
          }
          o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(a)
        }, complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
        }, finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
          }
        }, catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var i = n.arg;
                x(r)
              }
              return i
            }
          }
          throw new Error("illegal catch attempt")
        }, delegateYield: function (t, e, r) {
          return this.delegate = {
            iterator: B(t),
            resultName: e,
            nextLoc: r
          }, "next" === this.method && (this.arg = void 0), u
        }
      }, t
    }(t.exports);
    try {
      regeneratorRuntime = n
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n)
    }
  }, function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0), i = r.n(n), o = r(1), a = r.n(o),
      s = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
      l = new Uint8Array(16);

    function h() {
      if (!s) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return s(l)
    }

    var u = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var c = function (t) {
      return "string" == typeof t && u.test(t)
    }, f = [], d = 0; d < 256; ++d) f.push((d + 256).toString(16).substr(1));
    var p = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (f[t[e + 0]] + f[t[e + 1]] + f[t[e + 2]] + f[t[e + 3]] + "-" + f[t[e + 4]] + f[t[e + 5]] + "-" + f[t[e + 6]] + f[t[e + 7]] + "-" + f[t[e + 8]] + f[t[e + 9]] + "-" + f[t[e + 10]] + f[t[e + 11]] + f[t[e + 12]] + f[t[e + 13]] + f[t[e + 14]] + f[t[e + 15]]).toLowerCase();
      if (!c(r)) throw TypeError("Stringified UUID is invalid");
      return r
    };
    var g = function (t, e, r) {
      var n = (t = t || {}).random || (t.rng || h)();
      if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
        r = r || 0;
        for (var i = 0; i < 16; ++i) e[r + i] = n[i];
        return e
      }
      return p(n)
    };

    function m(t) {
      return "" === t ? t : "true" === t || "1" == t
    }

    var v = function (t) {
      if (t) return new Promise((function (e, r) {
        if ("data" == t.slice(0, 4)) {
          var n = new Image;
          return n.onload = function () {
            e(n)
          }, n.onerror = function () {
            r("Image load error")
          }, void (n.src = t)
        }
        var i = new Image;
        i.setAttribute("crossOrigin", "Anonymous"), i.onload = function () {
          e(i)
        }, i.onerror = function () {
          r("Image load error")
        }, i.src = t
      }))
    };
    var y = function (t, e) {
      return new Promise((function (e, r) {
        var n = new XMLHttpRequest;
        n.responseType = "blob", n.onload = function () {
          var t = new FileReader;
          t.onloadend = function () {
            e(t.result)
          }, t.readAsArrayBuffer(n.response)
        }, n.open("GET", t), n.send()
      }))
    };
    var w = function (t, e, r, n, i, o, a, s) {
      var l, h = "function" == typeof t ? t.options : t;
      if (e && (h.render = e, h.staticRenderFns = r, h._compiled = !0), n && (h.functional = !0), o && (h._scopeId = "data-v-" + o), a ? (l = function (t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
      }, h._ssrRegister = l) : i && (l = s ? function () {
        i.call(this, (h.functional ? this.parent : this).$root.$options.shadowRoot)
      } : i), l) if (h.functional) {
        h._injectStyles = l;
        var u = h.render;
        h.render = function (t, e) {
          return l.call(e), u(t, e)
        }
      } else {
        var c = h.beforeCreate;
        h.beforeCreate = c ? [].concat(c, l) : [l]
      }
      return {exports: t, options: h}
    }({
      props: {
        text: {type: String, required: !0},
        qid: {type: String},
        correctLevel: {type: Number, default: 1},
        size: {type: Number, default: 200},
        margin: {type: Number, default: 20},
        colorDark: {type: String, default: "#000000"},
        colorLight: {type: String, default: "#FFFFFF"},
        bgSrc: {type: String, default: void 0},
        background: {type: String, default: "rgba(0,0,0,0)"},
        backgroundDimming: {type: String, default: "rgba(0,0,0,0)"},
        logoSrc: {type: String, default: void 0},
        logoBackgroundColor: {type: String, default: "rgba(255,255,255,1)"},
        gifBgSrc: {type: String, default: void 0},
        logoScale: {type: Number, default: .2},
        logoMargin: {type: Number, default: 0},
        logoCornerRadius: {type: Number, default: 8},
        whiteMargin: {type: [Boolean, String], default: !0},
        dotScale: {type: Number, default: 1},
        autoColor: {type: [Boolean, String], default: !0},
        binarize: {type: [Boolean, String], default: !1},
        binarizeThreshold: {type: Number, default: 128},
        callback: {
          type: Function, default: function () {
          }
        },
        bindElement: {type: Boolean, default: !0},
        backgroundColor: {type: String, default: "#FFFFFF"}
      }, name: "vue-qr", data: function () {
        return {uuid: "", AwesomeQRCode: null}
      }, watch: {
        $props: {
          deep: !0, handler: function () {
            this.main()
          }
        }
      }, mounted: function () {
        this.uuid = g(), this.main()
      }, methods: {
        main: function () {
          var t = this;
          return a()(i.a.mark((function e() {
            var r, n, o, a;
            return i.a.wrap((function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  if (t, !t.gifBgSrc) {
                    e.next = 10;
                    break
                  }
                  return e.next = 4, y(t.gifBgSrc);
                case 4:
                  return r = e.sent, e.next = 7, v(t.logoSrc);
                case 7:
                  return n = e.sent, t.render(void 0, n, r), e.abrupt("return");
                case 10:
                  return e.next = 12, v(t.bgSrc);
                case 12:
                  return o = e.sent, e.next = 15, v(t.logoSrc);
                case 15:
                  a = e.sent, t.render(o, a);
                case 17:
                case"end":
                  return e.stop()
              }
            }), e)
          })))()
        }, render: function (t, e, n) {
          var o = this;
          return a()(i.a.mark((function a() {
            var s;
            return i.a.wrap((function (i) {
              for (; ;) switch (i.prev = i.next) {
                case 0:
                  if (s = o, !o.$isServer) {
                    i.next = 3;
                    break
                  }
                  return i.abrupt("return");
                case 3:
                  o.AwesomeQRCode || (o.AwesomeQRCode = r(8).default), (new o.AwesomeQRCode).create({
                    gifBackground: n,
                    text: s.text,
                    size: s.size,
                    margin: s.margin,
                    colorDark: s.colorDark,
                    colorLight: s.colorLight,
                    backgroundColor: s.backgroundColor,
                    backgroundImage: t,
                    backgroundDimming: s.backgroundDimming,
                    logoImage: e,
                    logoScale: s.logoScale,
                    logoBackgroundColor: s.logoBackgroundColor,
                    correctLevel: s.correctLevel,
                    logoMargin: s.logoMargin,
                    logoCornerRadius: s.logoCornerRadius,
                    whiteMargin: m(s.whiteMargin),
                    dotScale: s.dotScale,
                    autoColor: m(s.autoColor),
                    binarize: m(s.binarize),
                    binarizeThreshold: s.binarizeThreshold,
                    callback: function (t) {
                      s.callback && s.callback(t, s.qid)
                    },
                    bindElement: s.bindElement ? s.uuid : void 0
                  });
                case 5:
                case"end":
                  return i.stop()
              }
            }), a)
          })))()
        }
      }
    }, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return this.bindElement ? e("img", this._b({staticStyle: {display: "inline-block"}}, "img", {id: this.uuid}, !1)) : this._e()
    }), [], !1, null, null, null).exports;
    w.install = function (t) {
      return t.component(w.name, w)
    };
    var b = w, _ = [b];
    "undefined" != typeof window && window.Vue && function (t) {
      _.map((function (e) {
        t.component(e.name, e)
      }))
    }(window.Vue);
    e.default = b
  }, function (t, e, r) {
    "use strict";

    function n(t) {
      this.data = t, this.pos = 0
    }

    r.r(e), n.prototype.readByte = function () {
      return this.data[this.pos++]
    }, n.prototype.peekByte = function () {
      return this.data[this.pos]
    }, n.prototype.readBytes = function (t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = this.readByte();
      return e
    }, n.prototype.peekBytes = function (t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = this.data[this.pos + r];
      return e
    }, n.prototype.readString = function (t) {
      for (var e = "", r = 0; r < t; r++) e += String.fromCharCode(this.readByte());
      return e
    }, n.prototype.readBitArray = function () {
      for (var t = [], e = this.readByte(), r = 7; r >= 0; r--) t.push(!!(e & 1 << r));
      return t
    }, n.prototype.readUnsigned = function (t) {
      var e = this.readBytes(2);
      return t ? (e[1] << 8) + e[0] : (e[0] << 8) + e[1]
    };
    var i = n;

    function o(t) {
      this.stream = new i(t), this.output = {}
    }

    o.prototype.parse = function (t) {
      return this.parseParts(this.output, t), this.output
    }, o.prototype.parseParts = function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        this.parsePart(t, n)
      }
    }, o.prototype.parsePart = function (t, e) {
      var r, n = e.label;
      if (!e.requires || e.requires(this.stream, this.output, t)) if (e.loop) {
        for (var i = []; e.loop(this.stream);) {
          var o = {};
          this.parseParts(o, e.parts), i.push(o)
        }
        t[n] = i
      } else e.parts ? (r = {}, this.parseParts(r, e.parts), t[n] = r) : e.parser ? (r = e.parser(this.stream, this.output, t), e.skip || (t[n] = r)) : e.bits && (t[n] = this.parseBits(e.bits))
    }, o.prototype.parseBits = function (t) {
      var e = {}, r = this.stream.readBitArray();
      for (var n in t) {
        var i = t[n];
        i.length ? e[n] = r.slice(i.index, i.index + i.length).reduce((function (t, e) {
          return 2 * t + e
        }), 0) : e[n] = r[i.index]
      }
      return e
    };
    var a = o, s = {
      readByte: function () {
        return function (t) {
          return t.readByte()
        }
      }, readBytes: function (t) {
        return function (e) {
          return e.readBytes(t)
        }
      }, readString: function (t) {
        return function (e) {
          return e.readString(t)
        }
      }, readUnsigned: function (t) {
        return function (e) {
          return e.readUnsigned(t)
        }
      }, readArray: function (t, e) {
        return function (r, n, i) {
          for (var o = e(r, n, i), a = new Array(o), s = 0; s < o; s++) a[s] = r.readBytes(t);
          return a
        }
      }
    }, l = {
      label: "blocks", parser: function (t) {
        for (var e = [], r = t.readByte(); 0 !== r; r = t.readByte()) e = e.concat(t.readBytes(r));
        return e
      }
    }, h = {
      label: "gce",
      requires: function (t) {
        var e = t.peekBytes(2);
        return 33 === e[0] && 249 === e[1]
      },
      parts: [{label: "codes", parser: s.readBytes(2), skip: !0}, {
        label: "byteSize",
        parser: s.readByte()
      }, {
        label: "extras",
        bits: {
          future: {index: 0, length: 3},
          disposal: {index: 3, length: 3},
          userInput: {index: 6},
          transparentColorGiven: {index: 7}
        }
      }, {label: "delay", parser: s.readUnsigned(!0)}, {
        label: "transparentColorIndex",
        parser: s.readByte()
      }, {label: "terminator", parser: s.readByte(), skip: !0}]
    }, u = {
      label: "image",
      requires: function (t) {
        return 44 === t.peekByte()
      },
      parts: [{label: "code", parser: s.readByte(), skip: !0}, {
        label: "descriptor",
        parts: [{label: "left", parser: s.readUnsigned(!0)}, {
          label: "top",
          parser: s.readUnsigned(!0)
        }, {label: "width", parser: s.readUnsigned(!0)}, {label: "height", parser: s.readUnsigned(!0)}, {
          label: "lct",
          bits: {
            exists: {index: 0},
            interlaced: {index: 1},
            sort: {index: 2},
            future: {index: 3, length: 2},
            size: {index: 5, length: 3}
          }
        }]
      }, {
        label: "lct", requires: function (t, e, r) {
          return r.descriptor.lct.exists
        }, parser: s.readArray(3, (function (t, e, r) {
          return Math.pow(2, r.descriptor.lct.size + 1)
        }))
      }, {label: "data", parts: [{label: "minCodeSize", parser: s.readByte()}, l]}]
    }, c = {
      label: "text",
      requires: function (t) {
        var e = t.peekBytes(2);
        return 33 === e[0] && 1 === e[1]
      },
      parts: [{label: "codes", parser: s.readBytes(2), skip: !0}, {
        label: "blockSize",
        parser: s.readByte()
      }, {
        label: "preData", parser: function (t, e, r) {
          return t.readBytes(r.text.blockSize)
        }
      }, l]
    }, f = {
      label: "frames", parts: [h, {
        label: "application",
        requires: function (t, e, r) {
          var n = t.peekBytes(2);
          return 33 === n[0] && 255 === n[1]
        },
        parts: [{label: "codes", parser: s.readBytes(2), skip: !0}, {
          label: "blockSize",
          parser: s.readByte()
        }, {
          label: "id", parser: function (t, e, r) {
            return t.readString(r.blockSize)
          }
        }, l]
      }, {
        label: "comment", requires: function (t, e, r) {
          var n = t.peekBytes(2);
          return 33 === n[0] && 254 === n[1]
        }, parts: [{label: "codes", parser: s.readBytes(2), skip: !0}, l]
      }, u, c], loop: function (t) {
        var e = t.peekByte();
        return 33 === e || 44 === e
      }
    }, d = [{
      label: "header",
      parts: [{label: "signature", parser: s.readString(3)}, {label: "version", parser: s.readString(3)}]
    }, {
      label: "lsd",
      parts: [{label: "width", parser: s.readUnsigned(!0)}, {
        label: "height",
        parser: s.readUnsigned(!0)
      }, {
        label: "gct",
        bits: {exists: {index: 0}, resolution: {index: 1, length: 3}, sort: {index: 4}, size: {index: 5, length: 3}}
      }, {label: "backgroundColorIndex", parser: s.readByte()}, {label: "pixelAspectRatio", parser: s.readByte()}]
    }, {
      label: "gct", requires: function (t, e) {
        return e.lsd.gct.exists
      }, parser: s.readArray(3, (function (t, e) {
        return Math.pow(2, e.lsd.gct.size + 1)
      }))
    }, f];

    function p(t) {
      var e = new Uint8Array(t), r = new a(e);
      this.raw = r.parse(d), this.raw.hasImages = !1;
      for (var n = 0; n < this.raw.frames.length; n++) if (this.raw.frames[n].image) {
        this.raw.hasImages = !0;
        break
      }
    }

    p.prototype.decompressFrame = function (t, e) {
      if (t >= this.raw.frames.length) return null;
      var r = this.raw.frames[t];
      if (r.image) {
        var n = r.image.descriptor.width * r.image.descriptor.height, i = function (t, e, r) {
          var n, i, o, a, s, l, h, u, c, f, d, p, g, m, v, y, w = r, b = new Array(r), _ = new Array(4096),
            x = new Array(4096), k = new Array(4097);
          for (s = (i = 1 << (p = t)) + 1, n = i + 2, h = -1, o = (1 << (a = p + 1)) - 1, c = 0; c < i; c++) _[c] = 0, x[c] = c;
          for (d = u = g = m = y = v = 0, f = 0; f < w;) {
            if (0 === m) {
              if (u < a) {
                d += e[v] << u, u += 8, v++;
                continue
              }
              if (c = d & o, d >>= a, u -= a, c > n || c == s) break;
              if (c == i) {
                o = (1 << (a = p + 1)) - 1, n = i + 2, h = -1;
                continue
              }
              if (-1 == h) {
                k[m++] = x[c], h = c, g = c;
                continue
              }
              for (l = c, c == n && (k[m++] = g, c = h); c > i;) k[m++] = x[c], c = _[c];
              g = 255 & x[c], k[m++] = g, n < 4096 && (_[n] = h, x[n] = g, 0 == (++n & o) && n < 4096 && (a++, o += n)), h = l
            }
            m--, b[y++] = k[m], f++
          }
          for (f = y; f < w; f++) b[f] = 0;
          return b
        }(r.image.data.minCodeSize, r.image.data.blocks, n);
        r.image.descriptor.lct.interlaced && (i = function (t, e) {
          for (var r = new Array(t.length), n = t.length / e, i = function (n, i) {
            var o = t.slice(i * e, (i + 1) * e);
            r.splice.apply(r, [n * e, e].concat(o))
          }, o = [0, 4, 2, 1], a = [8, 8, 4, 2], s = 0, l = 0; l < 4; l++) for (var h = o[l]; h < n; h += a[l]) i(h, s), s++;
          return r
        }(i, r.image.descriptor.width));
        var o = {
          pixels: i,
          dims: {
            top: r.image.descriptor.top,
            left: r.image.descriptor.left,
            width: r.image.descriptor.width,
            height: r.image.descriptor.height
          }
        };
        return r.image.descriptor.lct && r.image.descriptor.lct.exists ? o.colorTable = r.image.lct : o.colorTable = this.raw.gct, r.gce && (o.delay = 10 * (r.gce.delay || 10), o.disposalType = r.gce.extras.disposal, r.gce.extras.transparentColorGiven && (o.transparentIndex = r.gce.transparentColorIndex)), e && (o.patch = function (t) {
          for (var e = t.pixels.length, r = new Uint8ClampedArray(4 * e), n = 0; n < e; n++) {
            var i = 4 * n, o = t.pixels[n], a = t.colorTable[o];
            r[i] = a[0], r[i + 1] = a[1], r[i + 2] = a[2], r[i + 3] = o !== t.transparentIndex ? 255 : 0
          }
          return r
        }(o)), o
      }
      return null
    }, p.prototype.decompressFrames = function (t) {
      for (var e = [], r = 0; r < this.raw.frames.length; r++) {
        this.raw.frames[r].image && e.push(this.decompressFrame(r, t))
      }
      return e
    };
    var g, m, v, y, w, b = p, _ = r(3), x = r.n(_);

    function k() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function B(t) {
      return "function" == typeof t
    }

    function C(t) {
      return "object" === x()(t) && null !== t
    }

    function E(t) {
      return void 0 === t
    }

    k.EventEmitter = k, k.prototype._events = void 0, k.prototype._maxListeners = void 0, k.defaultMaxListeners = 10, k.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
      return this._maxListeners = t, this
    }, k.prototype.emit = function (t) {
      var e, r, n, i, o, a;
      if (this._events || (this._events = {}), "error" === t && (!this._events.error || C(this._events.error) && !this._events.error.length)) {
        if ((e = arguments[1]) instanceof Error) throw e;
        var s = new Error('Uncaught, unspecified "error" event. (' + e + ")");
        throw s.context = e, s
      }
      if (E(r = this._events[t])) return !1;
      if (B(r)) switch (arguments.length) {
        case 1:
          r.call(this);
          break;
        case 2:
          r.call(this, arguments[1]);
          break;
        case 3:
          r.call(this, arguments[1], arguments[2]);
          break;
        default:
          i = Array.prototype.slice.call(arguments, 1), r.apply(this, i)
      } else if (C(r)) for (i = Array.prototype.slice.call(arguments, 1), n = (a = r.slice()).length, o = 0; o < n; o++) a[o].apply(this, i);
      return !0
    }, k.prototype.addListener = function (t, e) {
      var r;
      if (!B(e)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, B(e.listener) ? e.listener : e), this._events[t] ? C(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, C(this._events[t]) && !this._events[t].warned && (r = E(this._maxListeners) ? k.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
    }, k.prototype.on = k.prototype.addListener, k.prototype.once = function (t, e) {
      if (!B(e)) throw TypeError("listener must be a function");
      var r = !1;

      function n() {
        this.removeListener(t, n), r || (r = !0, e.apply(this, arguments))
      }

      return n.listener = e, this.on(t, n), this
    }, k.prototype.removeListener = function (t, e) {
      var r, n, i, o;
      if (!B(e)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[t]) return this;
      if (i = (r = this._events[t]).length, n = -1, r === e || B(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (C(r)) {
        for (o = i; o-- > 0;) if (r[o] === e || r[o].listener && r[o].listener === e) {
          n = o;
          break
        }
        if (n < 0) return this;
        1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
      }
      return this
    }, k.prototype.removeAllListeners = function (t) {
      var e, r;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
      if (0 === arguments.length) {
        for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
        return this.removeAllListeners("removeListener"), this._events = {}, this
      }
      if (B(r = this._events[t])) this.removeListener(t, r); else if (r) for (; r.length;) this.removeListener(t, r[r.length - 1]);
      return delete this._events[t], this
    }, k.prototype.listeners = function (t) {
      return this._events && this._events[t] ? B(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, k.prototype.listenerCount = function (t) {
      if (this._events) {
        var e = this._events[t];
        if (B(e)) return 1;
        if (e) return e.length
      }
      return 0
    }, k.listenerCount = function (t, e) {
      return t.listenerCount(e)
    }, w = navigator.userAgent.toLowerCase(), y = navigator.platform.toLowerCase(), v = "ie" === (g = w.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0])[1] && document.documentMode, (m = {
      name: "version" === g[1] ? g[3] : g[1],
      version: v || parseFloat("opera" === g[1] && g[4] ? g[4] : g[2]),
      platform: {name: w.match(/ip(?:ad|od|hone)/) ? "ios" : (w.match(/(?:webos|android)/) || y.match(/mac|win|linux/) || ["other"])[0]}
    })[m.name] = !0, m[m.name + parseInt(m.version, 10)] = !0, m.platform[m.platform.name] = !0;
    var L, S = {}.hasOwnProperty, P = [].indexOf || function (t) {
      for (var e = 0, r = this.length; e < r; e++) if (e in this && this[e] === t) return e;
      return -1
    }, I = [].slice, D = function (t) {
      var e, n;
      !function (t, e) {
        for (var r in e) S.call(e, r) && (t[r] = e[r]);

        function n() {
          this.constructor = t
        }

        n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype
      }(o, t);
      var i = r(2);

      function o(t) {
        var r, n, i;
        for (n in this.running = !1, this.options = {}, this.frames = [], this.freeWorkers = [], this.activeWorkers = [], this.setOptions(t), e) i = e[n], null == (r = this.options)[n] && (r[n] = i)
      }

      return e = {
        workerScript: i,
        workers: 2,
        repeat: 0,
        background: "#fff",
        quality: 10,
        width: null,
        height: null,
        transparent: null,
        debug: !1,
        dither: !1
      }, n = {delay: 500, copy: !1}, o.prototype.setOption = function (t, e) {
        if (this.options[t] = e, null != this._canvas && ("width" === t || "height" === t)) return this._canvas[t] = e
      }, o.prototype.setOptions = function (t) {
        var e, r, n;
        for (e in r = [], t) S.call(t, e) && (n = t[e], r.push(this.setOption(e, n)));
        return r
      }, o.prototype.addFrame = function (t, e) {
        var r, i;
        for (i in null == e && (e = {}), (r = {}).transparent = this.options.transparent, n) r[i] = e[i] || n[i];
        if (null == this.options.width && this.setOption("width", t.width), null == this.options.height && this.setOption("height", t.height), "undefined" != typeof ImageData && null !== ImageData && t instanceof ImageData) r.data = t.data; else if ("undefined" != typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && t instanceof CanvasRenderingContext2D || "undefined" != typeof WebGLRenderingContext && null !== WebGLRenderingContext && t instanceof WebGLRenderingContext) e.copy ? r.data = this.getContextData(t) : r.context = t; else {
          if (null == t.childNodes) throw new Error("Invalid image");
          e.copy ? r.data = this.getImageData(t) : r.image = t
        }
        return this.frames.push(r)
      }, o.prototype.render = function () {
        var t, e, r;
        if (this.running) throw new Error("Already running");
        if (null == this.options.width || null == this.options.height) throw new Error("Width and height must be set prior to rendering");
        if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function () {
          var t, e, r;
          for (r = [], t = 0, e = this.frames.length; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) r.push(null);
          return r
        }.call(this), e = this.spawnWorkers(), !0 === this.options.globalPalette) this.renderNextFrame(); else for (t = 0, r = e; 0 <= r ? t < r : t > r; 0 <= r ? ++t : --t) this.renderNextFrame();
        return this.emit("start"), this.emit("progress", 0)
      }, o.prototype.abort = function () {
        for (var t; null != (t = this.activeWorkers.shift());) this.log("killing active worker"), t.terminate();
        return this.running = !1, this.emit("abort")
      }, o.prototype.spawnWorkers = function () {
        var t, e, n, i;
        return t = Math.min(this.options.workers, this.frames.length), function () {
          n = [];
          for (var r = e = this.freeWorkers.length; e <= t ? r < t : r > t; e <= t ? r++ : r--) n.push(r);
          return n
        }.apply(this).forEach((i = this, function (t) {
          var e;
          i.log("spawning worker " + t);
          var n = r(2);
          return (e = new n.default).onmessage = function (t) {
            return i.activeWorkers.splice(i.activeWorkers.indexOf(e), 1), i.freeWorkers.push(e), i.frameFinished(t.data)
          }, i.freeWorkers.push(e)
        })), t
      }, o.prototype.frameFinished = function (t) {
        var e, r;
        if (this.log("frame " + t.index + " finished - " + this.activeWorkers.length + " active"), this.finishedFrames++, this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[t.index] = t, !0 === this.options.globalPalette && (this.options.globalPalette = t.globalPalette, this.log("global palette analyzed"), this.frames.length > 2)) for (e = 1, r = this.freeWorkers.length; 1 <= r ? e < r : e > r; 1 <= r ? ++e : --e) this.renderNextFrame();
        return P.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering()
      }, o.prototype.finishRendering = function () {
        var t, e, r, n, i, o, a, s, l, h, u, c, f, d, p, g;
        for (s = 0, i = 0, l = (d = this.imageParts).length; i < l; i++) s += ((e = d[i]).data.length - 1) * e.pageSize + e.cursor;
        for (s += e.pageSize - e.cursor, this.log("rendering finished - filesize " + Math.round(s / 1e3) + "kb"), t = new Uint8Array(s), c = 0, o = 0, h = (p = this.imageParts).length; o < h; o++) for (r = a = 0, u = (g = (e = p[o]).data).length; a < u; r = ++a) f = g[r], t.set(f, c), r === e.data.length - 1 ? c += e.cursor : c += e.pageSize;
        return n = new Blob([t], {type: "image/gif"}), this.emit("finished", n, t)
      }, o.prototype.renderNextFrame = function () {
        var t, e, r;
        if (0 === this.freeWorkers.length) throw new Error("No free workers");
        if (!(this.nextFrame >= this.frames.length)) return t = this.frames[this.nextFrame++], r = this.freeWorkers.shift(), e = this.getTask(t), this.log("starting frame " + (e.index + 1) + " of " + this.frames.length), this.activeWorkers.push(r), r.postMessage(e)
      }, o.prototype.getContextData = function (t) {
        return t.getImageData(0, 0, this.options.width, this.options.height).data
      }, o.prototype.getImageData = function (t) {
        var e;
        return null == this._canvas && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), (e = this._canvas.getContext("2d")).setFill = this.options.background, e.fillRect(0, 0, this.options.width, this.options.height), e.drawImage(t, 0, 0), this.getContextData(e)
      }, o.prototype.getTask = function (t) {
        var e, r;
        if (r = {
          index: e = this.frames.indexOf(t),
          last: e === this.frames.length - 1,
          delay: t.delay,
          transparent: t.transparent,
          width: this.options.width,
          height: this.options.height,
          quality: this.options.quality,
          dither: this.options.dither,
          globalPalette: this.options.globalPalette,
          repeat: this.options.repeat,
          canTransfer: "chrome" === m.name
        }, null != t.data) r.data = t.data; else if (null != t.context) r.data = this.getContextData(t.context); else {
          if (null == t.image) throw new Error("Invalid frame");
          r.data = this.getImageData(t.image)
        }
        return r
      }, o.prototype.log = function () {
        var t;
        if (t = 1 <= arguments.length ? I.call(arguments, 0) : [], this.options.debug) return console.log.apply(console, t)
      }, o
    }(k);

    function A(t) {
      this.mode = R.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
      for (var e = 0, r = this.data.length; e < r; e++) {
        var n = [], i = this.data.charCodeAt(e);
        i > 65536 ? (n[0] = 240 | (1835008 & i) >>> 18, n[1] = 128 | (258048 & i) >>> 12, n[2] = 128 | (4032 & i) >>> 6, n[3] = 128 | 63 & i) : i > 2048 ? (n[0] = 224 | (61440 & i) >>> 12, n[1] = 128 | (4032 & i) >>> 6, n[2] = 128 | 63 & i) : i > 128 ? (n[0] = 192 | (1984 & i) >>> 6, n[1] = 128 | 63 & i) : n[0] = i, this.parsedData.push(n)
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function T(t, e) {
      this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    A.prototype = {
      getLength: function (t) {
        return this.parsedData.length
      }, write: function (t) {
        for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8)
      }
    }, T.prototype = {
      addData: function (t) {
        var e = new A(t);
        this.dataList.push(e), this.dataCache = null
      }, isDark: function (t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
        return this.modules[t][e]
      }, getModuleCount: function () {
        return this.moduleCount
      }, make: function () {
        if (this.typeNumber < 1) {
          var t = 1;
          for (t = 1; t < 40; t++) {
            for (var e = X.getRSBlocks(t, this.errorCorrectLevel), r = new V, n = 0, i = 0; i < e.length; i++) n += e[i].dataCount;
            for (i = 0; i < this.dataList.length; i++) {
              var o = this.dataList[i];
              r.put(o.mode, 4), r.put(o.getLength(), W.getLengthInBits(o.mode, t)), o.write(r)
            }
            if (r.getLengthInBits() <= 8 * n) break
          }
          this.typeNumber = t
        }
        this.makeImpl(!1, this.getBestMaskPattern())
      }, makeImpl: function (t, e) {
        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
          this.modules[r] = new Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = T.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
      }, setupPositionProbePattern: function (t, e) {
        for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4)
      }, getBestMaskPattern: function () {
        for (var t = 0, e = 0, r = 0; r < 8; r++) {
          this.makeImpl(!0, r);
          var n = W.getLostPoint(this);
          (0 == r || t > n) && (t = n, e = r)
        }
        return e
      }, createMovieClip: function (t, e, r) {
        var n = t.createEmptyMovieClip(e, r);
        this.make();
        for (var i = 0; i < this.modules.length; i++) for (var o = 1 * i, a = 0; a < this.modules[i].length; a++) {
          var s = 1 * a;
          this.modules[i][a] && (n.beginFill(0, 100), n.moveTo(s, o), n.lineTo(s + 1, o), n.lineTo(s + 1, o + 1), n.lineTo(s, o + 1), n.endFill())
        }
        return n
      }, setupTimingPattern: function () {
        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
      }, setupPositionAdjustPattern: function () {
        for (var t = W.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
          var n = t[e], i = t[r];
          if (null == this.modules[n][i]) for (var o = -2; o <= 2; o++) for (var a = -2; a <= 2; a++) this.modules[n + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
        }
      }, setupTypeNumber: function (t) {
        for (var e = W.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
          var n = !t && 1 == (e >> r & 1);
          this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (r = 0; r < 18; r++) {
          n = !t && 1 == (e >> r & 1);
          this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
        }
      }, setupTypeInfo: function (t, e) {
        for (var r = this.errorCorrectLevel << 3 | e, n = W.getBCHTypeInfo(r), i = 0; i < 15; i++) {
          var o = !t && 1 == (n >> i & 1);
          i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
        }
        for (i = 0; i < 15; i++) {
          o = !t && 1 == (n >> i & 1);
          i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
        }
        this.modules[this.moduleCount - 8][8] = !t
      }, mapData: function (t, e) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
          for (var s = 0; s < 2; s++) if (null == this.modules[n][a - s]) {
            var l = !1;
            o < t.length && (l = 1 == (t[o] >>> i & 1)), W.getMask(e, n, a - s) && (l = !l), this.modules[n][a - s] = l, -1 == --i && (o++, i = 7)
          }
          if ((n += r) < 0 || this.moduleCount <= n) {
            n -= r, r = -r;
            break
          }
        }
      }
    }, T.PAD0 = 236, T.PAD1 = 17, T.createData = function (t, e, r) {
      for (var n = X.getRSBlocks(t, e), i = new V, o = 0; o < r.length; o++) {
        var a = r[o];
        i.put(a.mode, 4), i.put(a.getLength(), W.getLengthInBits(a.mode, t)), a.write(i)
      }
      var s = 0;
      for (o = 0; o < n.length; o++) s += n[o].dataCount;
      if (i.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * s + ")");
      for (i.getLengthInBits() + 4 <= 8 * s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
      for (; !(i.getLengthInBits() >= 8 * s || (i.put(T.PAD0, 8), i.getLengthInBits() >= 8 * s));) i.put(T.PAD1, 8);
      return T.createBytes(i, n)
    }, T.createBytes = function (t, e) {
      for (var r = 0, n = 0, i = 0, o = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
        var l = e[s].dataCount, h = e[s].totalCount - l;
        n = Math.max(n, l), i = Math.max(i, h), o[s] = new Array(l);
        for (var u = 0; u < o[s].length; u++) o[s][u] = 255 & t.buffer[u + r];
        r += l;
        var c = W.getErrorCorrectPolynomial(h), f = new K(o[s], c.getLength() - 1).mod(c);
        a[s] = new Array(c.getLength() - 1);
        for (u = 0; u < a[s].length; u++) {
          var d = u + f.getLength() - a[s].length;
          a[s][u] = d >= 0 ? f.get(d) : 0
        }
      }
      var p = 0;
      for (u = 0; u < e.length; u++) p += e[u].totalCount;
      var g = new Array(p), m = 0;
      for (u = 0; u < n; u++) for (s = 0; s < e.length; s++) u < o[s].length && (g[m++] = o[s][u]);
      for (u = 0; u < i; u++) for (s = 0; s < e.length; s++) u < a[s].length && (g[m++] = a[s][u]);
      return g
    };
    for (var R = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, M = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, F = 0, O = 1, N = 2, U = 3, z = 4, G = 5, j = 6, H = 7, W = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (t) {
        for (var e = t << 10; W.getBCHDigit(e) - W.getBCHDigit(W.G15) >= 0;) e ^= W.G15 << W.getBCHDigit(e) - W.getBCHDigit(W.G15);
        return (t << 10 | e) ^ W.G15_MASK
      },
      getBCHTypeNumber: function (t) {
        for (var e = t << 12; W.getBCHDigit(e) - W.getBCHDigit(W.G18) >= 0;) e ^= W.G18 << W.getBCHDigit(e) - W.getBCHDigit(W.G18);
        return t << 12 | e
      },
      getBCHDigit: function (t) {
        for (var e = 0; 0 != t;) e++, t >>>= 1;
        return e
      },
      getPatternPosition: function (t) {
        return W.PATTERN_POSITION_TABLE[t - 1]
      },
      getMask: function (t, e, r) {
        switch (t) {
          case F:
            return (e + r) % 2 == 0;
          case O:
            return e % 2 == 0;
          case N:
            return r % 3 == 0;
          case U:
            return (e + r) % 3 == 0;
          case z:
            return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
          case G:
            return e * r % 2 + e * r % 3 == 0;
          case j:
            return (e * r % 2 + e * r % 3) % 2 == 0;
          case H:
            return (e * r % 3 + (e + r) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + t)
        }
      },
      getErrorCorrectPolynomial: function (t) {
        for (var e = new K([1], 0), r = 0; r < t; r++) e = e.multiply(new K([1, q.gexp(r)], 0));
        return e
      },
      getLengthInBits: function (t, e) {
        if (1 <= e && e < 10) switch (t) {
          case R.MODE_NUMBER:
            return 10;
          case R.MODE_ALPHA_NUM:
            return 9;
          case R.MODE_8BIT_BYTE:
          case R.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + t)
        } else if (e < 27) switch (t) {
          case R.MODE_NUMBER:
            return 12;
          case R.MODE_ALPHA_NUM:
            return 11;
          case R.MODE_8BIT_BYTE:
            return 16;
          case R.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + t)
        } else {
          if (!(e < 41)) throw new Error("type:" + e);
          switch (t) {
            case R.MODE_NUMBER:
              return 14;
            case R.MODE_ALPHA_NUM:
              return 13;
            case R.MODE_8BIT_BYTE:
              return 16;
            case R.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + t)
          }
        }
      },
      getLostPoint: function (t) {
        for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++) for (var i = 0; i < e; i++) {
          for (var o = 0, a = t.isDark(n, i), s = -1; s <= 1; s++) if (!(n + s < 0 || e <= n + s)) for (var l = -1; l <= 1; l++) i + l < 0 || e <= i + l || 0 == s && 0 == l || a == t.isDark(n + s, i + l) && o++;
          o > 5 && (r += 3 + o - 5)
        }
        for (n = 0; n < e - 1; n++) for (i = 0; i < e - 1; i++) {
          var h = 0;
          t.isDark(n, i) && h++, t.isDark(n + 1, i) && h++, t.isDark(n, i + 1) && h++, t.isDark(n + 1, i + 1) && h++, 0 != h && 4 != h || (r += 3)
        }
        for (n = 0; n < e; n++) for (i = 0; i < e - 6; i++) t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
        for (i = 0; i < e; i++) for (n = 0; n < e - 6; n++) t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
        var u = 0;
        for (i = 0; i < e; i++) for (n = 0; n < e; n++) t.isDark(n, i) && u++;
        return r += 10 * (Math.abs(100 * u / e / e - 50) / 5)
      }
    }, q = {
      glog: function (t) {
        if (t < 1) throw new Error("glog(" + t + ")");
        return q.LOG_TABLE[t]
      }, gexp: function (t) {
        for (; t < 0;) t += 255;
        for (; t >= 256;) t -= 255;
        return q.EXP_TABLE[t]
      }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
    }, Q = 0; Q < 8; Q++) q.EXP_TABLE[Q] = 1 << Q;
    for (Q = 8; Q < 256; Q++) q.EXP_TABLE[Q] = q.EXP_TABLE[Q - 4] ^ q.EXP_TABLE[Q - 5] ^ q.EXP_TABLE[Q - 6] ^ q.EXP_TABLE[Q - 8];
    for (Q = 0; Q < 255; Q++) q.LOG_TABLE[q.EXP_TABLE[Q]] = Q;

    function K(t, e) {
      if (null == t.length) throw new Error(t.length + "/" + e);
      for (var r = 0; r < t.length && 0 == t[r];) r++;
      this.num = new Array(t.length - r + e);
      for (var n = 0; n < t.length - r; n++) this.num[n] = t[n + r]
    }

    function X(t, e) {
      this.totalCount = t, this.dataCount = e
    }

    function V() {
      this.buffer = [], this.length = 0
    }

    K.prototype = {
      get: function (t) {
        return this.num[t]
      }, getLength: function () {
        return this.num.length
      }, multiply: function (t) {
        for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var n = 0; n < t.getLength(); n++) e[r + n] ^= q.gexp(q.glog(this.get(r)) + q.glog(t.get(n)));
        return new K(e, 0)
      }, mod: function (t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var e = q.glog(this.get(0)) - q.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
        for (n = 0; n < t.getLength(); n++) r[n] ^= q.gexp(q.glog(t.get(n)) + e);
        return new K(r, 0).mod(t)
      }
    }, X.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], X.getRSBlocks = function (t, e) {
      var r = X.getRsBlockTable(t, e);
      if (null == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
      for (var n = r.length / 3, i = [], o = 0; o < n; o++) for (var a = r[3 * o + 0], s = r[3 * o + 1], l = r[3 * o + 2], h = 0; h < a; h++) i.push(new X(s, l));
      return i
    }, X.getRsBlockTable = function (t, e) {
      switch (e) {
        case M.L:
          return X.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case M.M:
          return X.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case M.Q:
          return X.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case M.H:
          return X.RS_BLOCK_TABLE[4 * (t - 1) + 3];
        default:
          return
      }
    }, V.prototype = {
      get: function (t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
      }, put: function (t, e) {
        for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
      }, getLengthInBits: function () {
        return this.length
      }, putBit: function (t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
      }
    };
    var $ = function () {
      function t() {
        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
      }

      function e(t, e) {
        var r = this;
        if (r._fFail = e, r._fSuccess = t, null === r._bSupportDataURI) {
          var n = document.createElement("img"), i = function () {
            r._bSupportDataURI = !1, r._fFail && r._fFail.call(r)
          };
          return n.onabort = i, n.onerror = i, n.onload = function () {
            r._bSupportDataURI = !0, r._fSuccess && r._fSuccess.call(r)
          }, void (n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
        }
        !0 === r._bSupportDataURI && r._fSuccess ? r._fSuccess.call(r) : !1 === r._bSupportDataURI && r._fFail && r._fFail.call(r)
      }

      var r = function (t) {
        this._bIsPainted = !1, this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.size, this._elCanvas.height = t.size, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._bSupportDataURI = null, this._callback = t.callback, this._bindElement = t.bindElement
      };
      return r.prototype.draw = function (t) {
        var e = this._elImage, r = document.createElement("canvas"), n = r.getContext("2d"), i = this._htOption,
          o = t.getModuleCount(), a = i.size, s = i.margin;
        (s < 0 || 2 * s >= a) && (s = 0);
        var l = Math.ceil(s), h = a - 2 * s, u = i.whiteMargin, c = i.backgroundDimming, f = Math.ceil(h / o),
          d = f * o, p = d + 2 * l, g = void 0, m = void 0;
        r.width = p, r.height = p;
        var v = i.dotScale;
        if (e.style.display = "none", this.clear(), v <= 0 || v > 1) throw new Error("Scale should be in range (0, 1).");
        n.save(), n.translate(l, l);
        var y = document.createElement("canvas");
        y.width = p, y.height = p;
        var w = y.getContext("2d"), _ = void 0;
        if (void 0 !== i.gifBackground) {
          var x = new b(i.gifBackground);
          if (!x.raw.hasImages) throw new Error("An invalid gif has been selected as the background.");
          if (g = x, m = x.decompressFrames(!0), i.autoColor) {
            for (var k = 0, B = 0, C = 0, E = 0, L = 0; L < m[0].colorTable.length; L++) {
              var S = m[0].colorTable[L];
              S[0] > 200 || S[1] > 200 || S[2] > 200 || (0 === S[0] && 0 === S[1] && 0 === S[2] || (E++, k += S[0], B += S[1], C += S[2]))
            }
            k = ~~(k / E), B = ~~(B / E), C = ~~(C / E), i.colorDark = "rgb(" + k + ", " + B + ", " + C + ")"
          }
        } else if (void 0 !== i.backgroundImage) {
          if (i.autoColor) {
            var P = function (t) {
              var e, r, n, i, o = {r: 0, g: 0, b: 0}, a = document.createElement("canvas"),
                s = a.getContext && a.getContext("2d"), l = -4, h = {r: 0, g: 0, b: 0}, u = 0;
              if (!s) return o;
              n = a.height = t.naturalHeight || t.offsetHeight || t.height, r = a.width = t.naturalWidth || t.offsetWidth || t.width, s.drawImage(t, 0, 0);
              try {
                e = s.getImageData(0, 0, r, n)
              } catch (t) {
                return o
              }
              i = e.data.length;
              for (; (l += 20) < i;) e.data[l] > 200 || e.data[l + 1] > 200 || e.data[l + 2] > 200 || (++u, h.r += e.data[l], h.g += e.data[l + 1], h.b += e.data[l + 2]);
              return h.r = ~~(h.r / u), h.g = ~~(h.g / u), h.b = ~~(h.b / u), h
            }(i.backgroundImage);
            i.colorDark = "rgb(" + P.r + ", " + P.g + ", " + P.b + ")"
          }
          i.maskedDots ? ((_ = document.createElement("canvas")).width = p, _.height = p, _.getContext("2d").drawImage(i.backgroundImage, 0, 0, i.backgroundImage.width, i.backgroundImage.height, 0, 0, p, p), w.rect(0, 0, p, p), w.fillStyle = "#ffffff", w.fill()) : (w.drawImage(i.backgroundImage, 0, 0, i.backgroundImage.width, i.backgroundImage.height, 0, 0, p, p), w.rect(0, 0, p, p), w.fillStyle = c, w.fill())
        } else w.rect(0, 0, p, p), w.fillStyle = i.backgroundColor, w.fill();
        i.binarize && (i.colorDark = "#000000", i.colorLight = "#FFFFFF");
        for (var I = W.getPatternPosition(t.typeNumber), A = .5 * (1 - v), T = 0; T < o; T++) for (var R = 0; R < o; R++) {
          var M = t.isDark(T, R), F = R < 8 && (T < 8 || T >= o - 8) || R >= o - 8 && T < 8,
            O = 6 === T || 6 === R || F;
          for (L = 0; L < I.length - 1; L++) O = O || T >= I[L] - 2 && T <= I[L] + 2 && R >= I[L] - 2 && R <= I[L] + 2;
          var N = R * f + (O ? 0 : A * f), U = T * f + (O ? 0 : A * f);
          if (n.strokeStyle = M ? i.colorDark : i.colorLight, n.lineWidth = .5, n.fillStyle = M ? i.colorDark : "rgba(255, 255, 255, 0.6)", 0 === I.length) O || Z(n, N, U, (O ? 1 : v) * f, (O ? 1 : v) * f, _, M); else O || R < o - 4 && R >= o - 4 - 5 && T < o - 4 && T >= o - 4 - 5 || Z(n, N, U, (O ? 1 : v) * f, (O ? 1 : v) * f, _, M)
        }
        var z = i.colorLight;
        n.fillStyle = z, n.fillRect(0, 0, 8 * f, 8 * f), n.fillRect(0, (o - 8) * f, 8 * f, 8 * f), n.fillRect((o - 8) * f, 0, 8 * f, 8 * f), n.fillRect(8 * f, 6 * f, (o - 8 - 8) * f, f), n.fillRect(6 * f, 8 * f, f, (o - 8 - 8) * f);
        var G = I[I.length - 1];
        for (L = 0; L < I.length; L++) for (var j = 0; j < I.length; j++) {
          var H = I[j], q = I[L];
          (6 !== H || 6 !== q && q !== G) && ((6 !== q || 6 !== H && H !== G) && tt(n, H, q, f, f))
        }
        n.fillStyle = i.colorDark, n.fillRect(0, 0, 7 * f, f), n.fillRect((o - 7) * f, 0, 7 * f, f), n.fillRect(0, 6 * f, 7 * f, f), n.fillRect((o - 7) * f, 6 * f, 7 * f, f), n.fillRect(0, (o - 7) * f, 7 * f, f), n.fillRect(0, (o - 7 + 6) * f, 7 * f, f), n.fillRect(0, 0, f, 7 * f), n.fillRect(6 * f, 0, f, 7 * f), n.fillRect((o - 7) * f, 0, f, 7 * f), n.fillRect((o - 7 + 6) * f, 0, f, 7 * f), n.fillRect(0, (o - 7) * f, f, 7 * f), n.fillRect(6 * f, (o - 7) * f, f, 7 * f), n.fillRect(2 * f, 2 * f, 3 * f, 3 * f), n.fillRect((o - 7 + 2) * f, 2 * f, 3 * f, 3 * f), n.fillRect(2 * f, (o - 7 + 2) * f, 3 * f, 3 * f);
        for (L = 0; L < o - 8; L += 2) n.fillRect((8 + L) * f, 6 * f, f, f), n.fillRect(6 * f, (8 + L) * f, f, f);
        for (L = 0; L < I.length; L++) for (j = 0; j < I.length; j++) {
          H = I[j], q = I[L];
          (6 !== H || 6 !== q && q !== G) && ((6 !== q || 6 !== H && H !== G) && (6 !== H && H !== G && 6 !== q && q !== G ? (n.fillStyle = i.colorLight, et(n, H, q, f, f)) : (n.fillStyle = i.colorDark, et(n, H, q, f, f))))
        }
        if (u && (n.fillStyle = i.backgroundColor, n.fillRect(-l, -l, p, l), n.fillRect(-l, d, p, l), n.fillRect(d, -l, l, p), n.fillRect(-l, -l, l, p)), void 0 !== i.logoImage) {
          var Q = i.logoScale, K = i.logoMargin, X = i.logoCornerRadius;
          (Q <= 0 || Q >= 1) && (Q = .2), K < 0 && (K = 0), X < 0 && (X = 0), n.restore(), n.translate(l, l);
          var V = d * Q, $ = .5 * (d - V), rt = $;
          n.fillStyle = i.logoBackgroundColor, n.save(), Y(n, $ - K, rt - K, V + 2 * K, V + 2 * K, X), n.clip(), n.fill(), n.restore(), n.save(), Y(n, $, rt, V, V, X), n.clip(), n.drawImage(i.logoImage, $, rt, V, V), n.restore()
        }
        if (void 0 === g) {
          if (w.drawImage(r, 0, 0, p, p), n.drawImage(y, -l, -l, p, p), i.binarize) {
            var nt = n.getImageData(0, 0, p, p), it = 128;
            parseInt(i.binarizeThreshold) > 0 && parseInt(i.binarizeThreshold) < 255 && (it = parseInt(i.binarizeThreshold));
            for (L = 0; L < nt.data.length; L += 4) {
              J(nt.data[L], nt.data[L + 1], nt.data[L + 2]) > it ? (nt.data[L] = 255, nt.data[L + 1] = 255, nt.data[L + 2] = 255) : (nt.data[L] = 0, nt.data[L + 1] = 0, nt.data[L + 2] = 0)
            }
            n.putImageData(nt, 0, 0)
          }
          var ot = document.createElement("canvas"), at = ot.getContext("2d");
          if (ot.width = a, ot.height = a, at.drawImage(r, 0, 0, a, a), this._elCanvas = ot, this._bIsPainted = !0, void 0 !== this._callback && this._callback(this._elCanvas.toDataURL()), void 0 !== this._bindElement) try {
            var st = document.getElementById(this._bindElement);
            if ("IMG" === st.nodeName) st.src = this._elCanvas.toDataURL(); else {
              var lt = st.style;
              lt["background-image"] = "url(" + this._elCanvas.toDataURL() + ")", lt["background-size"] = "contain", lt["background-repeat"] = "no-repeat"
            }
          } catch (t) {
            console.error(t)
          }
        } else {
          var ht, ut, ct, ft, dt = document.createElement("canvas"), pt = dt.getContext("2d");
          if (m.forEach((function (t) {
            void 0 === ht && (ht = new D({
              workers: 4,
              quality: 10,
              width: a,
              height: a
            })), void 0 === ut && (ut = document.createElement("canvas"), ct = ut.getContext("2d"), ut.width = t.dims.width, ut.height = t.dims.height, ct.rect(0, 0, ut.width, ut.height), ct.fillStyle = "#ffffff", ct.fill()), ft && t.dims.width === dt.width && t.dims.height === dt.height || (dt.width = t.dims.width, dt.height = t.dims.height, ft = pt.createImageData(t.dims.width, t.dims.height)), ft.data.set(t.patch), pt.putImageData(ft, 0, 0), ct.drawImage(dt, t.dims.left, t.dims.top);
            var e = document.createElement("canvas");
            e.width = p, e.height = p;
            var n = e.getContext("2d");
            n.drawImage(ut, 0, 0, p, p), n.drawImage(r, 0, 0, p, p);
            var i = document.createElement("canvas"), o = i.getContext("2d");
            i.width = a, i.height = a, o.drawImage(e, 0, 0, a, a), ht.addFrame(o, {copy: !0, delay: t.delay})
          })), void 0 === ht) throw new Error("No frames.");
          var gt = this;
          ht.on("finished", (function (t) {
            var e = new FileReader;
            e.onload = function (t) {
              var e = t.target.result;
              if (gt._bIsPainted = !0, void 0 !== gt._callback && gt._callback(e), void 0 !== gt._bindElement) try {
                var r = document.getElementById(gt._bindElement);
                if ("IMG" === r.nodeName) r.src = e; else {
                  var n = r.style;
                  n["background-image"] = "url(" + e + ")", n["background-size"] = "contain", n["background-repeat"] = "no-repeat"
                }
              } catch (t) {
                console.error(t)
              }
            }, e.readAsDataURL(t)
          })), ht.render()
        }
      }, r.prototype.makeImage = function () {
        this._bIsPainted && e.call(this, t)
      }, r.prototype.isPainted = function () {
        return this._bIsPainted
      }, r.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
      }, r.prototype.round = function (t) {
        return t ? Math.floor(1e3 * t) / 1e3 : t
      }, r
    }();

    function Y(t, e, r, n, i, o) {
      t.beginPath(), t.moveTo(e, r), t.arcTo(e + n, r, e + n, r + i, o), t.arcTo(e + n, r + i, e, r + i, o), t.arcTo(e, r + i, e, r, o), t.arcTo(e, r, e + n, r, o), t.closePath()
    }

    function J(t, e, r) {
      return .3 * t + .59 * r + .11 * r
    }

    function Z(t, e, r, n, i, o, a) {
      if (void 0 === o) t.fillRect(e, r, n, i); else {
        t.drawImage(o, e, r, n, i, e, r, n, i);
        var s = t.fillStyle;
        t.fillStyle = a ? "rgba(0, 0, 0, .5)" : "rgba(255, 255, 255, .7)", t.fillRect(e, r, n, i), t.fillStyle = s
      }
    }

    function tt(t, e, r, n, i) {
      t.clearRect((e - 2) * n, (r - 2) * i, 5 * n, 5 * i), t.fillRect((e - 2) * n, (r - 2) * i, 5 * n, 5 * i)
    }

    function et(t, e, r, n, i) {
      t.fillRect((e - 2) * n, (r - 2) * i, n, 4 * i), t.fillRect((e + 2) * n, (r - 2 + 1) * i, n, 4 * i), t.fillRect((e - 2 + 1) * n, (r - 2) * i, 4 * n, i), t.fillRect((e - 2) * n, (r + 2) * i, 4 * n, i), t.fillRect(e * n, r * i, n, i)
    }

    (L = function () {
    }).prototype.create = function (t) {
      if (this._htOption = {
        size: 800,
        margin: 20,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "rgba(255, 255, 255, 0.6)",
        logoBackgroundColor: "#ffffff",
        correctLevel: M.M,
        backgroundImage: void 0,
        backgroundDimming: "rgba(0,0,0,0)",
        logoImage: void 0,
        logoScale: .2,
        logoMargin: 6,
        logoCornerRadius: 8,
        whiteMargin: !0,
        dotScale: .35,
        maskedDots: !1,
        autoColor: !0,
        binarize: !1,
        binarizeThreshold: 128,
        gifBackground: void 0,
        callback: void 0,
        bindElement: void 0,
        backgroundColor: "#ffffff"
      }, "string" == typeof t && (t = {text: t}), t) for (var e in t) this._htOption[e] = t[e];
      this._oQRCode = null, this._oDrawing = new $(this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, L.prototype.makeCode = function (t) {
      this._oQRCode = new T(-1, this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, L.prototype.makeImage = function () {
      "function" == typeof this._oDrawing.makeImage && this._oDrawing.makeImage()
    }, L.prototype.clear = function () {
      this._oDrawing.clear()
    }, L.CorrectLevel = M;
    e.default = L
  }])
}));
//# sourceMappingURL=vue-qr.js.map
