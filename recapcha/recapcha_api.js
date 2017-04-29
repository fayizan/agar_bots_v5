(function() {
  /**
   * @param {string} data
   * @return {?}
   */
  function parseUrl(data) {
    if ("*" == data) {
      return data;
    }
    data = match(split(new extend(data), ""), sanitize(data));
    if (!(null != data.Tb)) {
      if ("https" == data.Ha) {
        indexOf(data, 443);
      } else {
        if ("http" == data.Ha) {
          indexOf(data, 80);
        }
      }
    }
    return data.toString();
  }
  /**
   * @param {?} b
   * @param {?} a
   * @return {?}
   */
  function matrix(b, a) {
    /** @type {number} */
    var tX = a.y - b.y;
    /** @type {number} */
    var tY = b.x - a.x;
    return[tX, tY, tX * b.x + tY * b.y];
  }
  /**
   * @param {?} ev
   * @param {?} pos
   * @return {?}
   */
  function sendEvent(ev, pos) {
    return 1E-5 >= Math.abs(ev.x - pos.x) && 1E-5 >= Math.abs(ev.y - pos.y);
  }
  var c;
  /**
   * @param {Object} object
   * @param {Function} target
   * @return {undefined}
   */
  var mixin = function(object, target) {
    /**
     * @return {undefined}
     */
    function Empty() {
    }
    Empty.prototype = target.prototype;
    object.b = target.prototype;
    object.prototype = new Empty;
    /** @type {Object} */
    object.prototype.constructor = object;
    var key;
    for (key in target) {
      if (Object.defineProperties) {
        /** @type {(ObjectPropertyDescriptor|undefined)} */
        var desc = Object.getOwnPropertyDescriptor(target, key);
        if (desc) {
          Object.defineProperty(object, key, desc);
        }
      } else {
        object[key] = target[key];
      }
    }
  };
  /** @type {Function} */
  var defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(obj, keyName, desc) {
    if (desc.get || desc.set) {
      throw new TypeError("ES3 does not support getters and setters.");
    }
    if (obj != Array.prototype) {
      if (obj != Object.prototype) {
        obj[keyName] = desc.value;
      }
    }
  };
  var arr = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  /**
   * @return {undefined}
   */
  var learn = function() {
    /**
     * @return {undefined}
     */
    learn = function() {
    };
    if (!arr.Symbol) {
      /** @type {function (string): ?} */
      arr.Symbol = isPlainObject;
    }
  };
  /** @type {number} */
  var ga = 0;
  /**
   * @param {string} value
   * @return {?}
   */
  var isPlainObject = function(value) {
    return "jscomp_symbol_" + (value || "") + ga++;
  };
  /**
   * @return {undefined}
   */
  var isArguments = function() {
    learn();
    var property = arr.Symbol.iterator;
    if (!property) {
      property = arr.Symbol.iterator = arr.Symbol("iterator");
    }
    if ("function" != typeof Array.prototype[property]) {
      defineProperty(Array.prototype, property, {
        configurable : true,
        writable : true,
        /**
         * @return {?}
         */
        value : function() {
          return array(this);
        }
      });
    }
    /**
     * @return {undefined}
     */
    isArguments = function() {
    };
  };
  /**
   * @param {(Array|number)} b
   * @return {?}
   */
  var array = function(b) {
    /** @type {number} */
    var bi = 0;
    return freeze(function() {
      return bi < b.length ? {
        done : false,
        value : b[bi++]
      } : {
        done : true
      };
    });
  };
  /**
   * @param {string} object
   * @return {?}
   */
  var freeze = function(object) {
    isArguments();
    object = {
      next : object
    };
    /**
     * @return {?}
     */
    object[arr.Symbol.iterator] = function() {
      return this;
    };
    return object;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var lookupIterator = function(value) {
    isArguments();
    var index = value[Symbol.iterator];
    return index ? index.call(value) : array(value);
  };
  var instance = arr;
  /** @type {Array} */
  var keyNames = ["Array", "prototype", "fill"];
  /** @type {number} */
  var kI = 0;
  for (;kI < keyNames.length - 1;kI++) {
    var camelCaseValue = keyNames[kI];
    if (!(camelCaseValue in instance)) {
      instance[camelCaseValue] = {};
    }
    instance = instance[camelCaseValue];
  }
  var keyName = keyNames[keyNames.length - 1];
  var opt_locale = instance[keyName];
  var locale = opt_locale ? opt_locale : function(o, i, from) {
    var len = this.length || 0;
    if (0 > i) {
      /** @type {number} */
      i = Math.max(0, len + i);
    }
    if (null == from || from > len) {
      from = len;
    }
    /** @type {number} */
    from = Number(from);
    if (0 > from) {
      /** @type {number} */
      from = Math.max(0, len + from);
    }
    /** @type {number} */
    i = Number(i || 0);
    for (;i < from;i++) {
      /** @type {string} */
      this[i] = o;
    }
    return this;
  };
  if (locale != opt_locale) {
    if (null != locale) {
      defineProperty(instance, keyName, {
        configurable : true,
        writable : true,
        value : locale
      });
    }
  }
  var io = io || {};
  var win = this;
  /**
   * @param {Object} str
   * @return {?}
   */
  var isNaN = function(str) {
    return void 0 !== str;
  };
  /**
   * @param {string} selector
   * @return {?}
   */
  var on = function(selector) {
    selector = selector.split(".");
    var cur = win;
    var dir;
    for (;dir = selector.shift();) {
      if (null != cur[dir]) {
        cur = cur[dir];
      } else {
        return null;
      }
    }
    return cur;
  };
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  /**
   * @param {Function} value
   * @return {undefined}
   */
  var isUndefinedOrNull = function(value) {
    value.Sg = void 0;
    /**
     * @return {?}
     */
    value.ub = function() {
      return value.Sg ? value.Sg : value.Sg = new value;
    };
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var isArray = function(value) {
    /** @type {string} */
    var $s = typeof value;
    if ("object" == $s) {
      if (value) {
        if (value instanceof Array) {
          return "array";
        }
        if (value instanceof Object) {
          return $s;
        }
        /** @type {string} */
        var isFunction = Object.prototype.toString.call(value);
        if ("[object Window]" == isFunction) {
          return "object";
        }
        if ("[object Array]" == isFunction || "number" == typeof value.length && ("undefined" != typeof value.splice && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")))) {
          return "array";
        }
        if ("[object Function]" == isFunction || "undefined" != typeof value.call && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call"))) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == $s && "undefined" == typeof value.call) {
        return "object";
      }
    }
    return $s;
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var join = function(object) {
    return "array" == isArray(object);
  };
  /**
   * @param {?} target
   * @return {?}
   */
  var append = function(target) {
    var type = isArray(target);
    return "array" == type || "object" == type && "number" == typeof target.length;
  };
  /**
   * @param {string} val
   * @return {?}
   */
  var isString = function(val) {
    return "string" == typeof val;
  };
  /**
   * @param {number} val
   * @return {?}
   */
  var scale = function(val) {
    return "number" == typeof val;
  };
  /**
   * @param {Function} type
   * @return {?}
   */
  var then = function(type) {
    return "function" == isArray(type);
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  var replace = function(value) {
    /** @type {string} */
    var type = typeof value;
    return "object" == type && null != value || "function" == type;
  };
  /**
   * @param {Object} error
   * @return {?}
   */
  var errorCallback = function(error) {
    return error[wc] || (error[wc] = ++dictSize);
  };
  /** @type {string} */
  var wc = "closure_uid_" + (1E9 * Math.random() >>> 0);
  /** @type {number} */
  var dictSize = 0;
  /**
   * @param {Function} fn
   * @param {Object} b
   * @param {Object} recurring
   * @return {?}
   */
  var nextTick = function(fn, b, recurring) {
    return fn.call.apply(fn.bind, arguments);
  };
  /**
   * @param {Function} fn
   * @param {Object} b
   * @param {Object} recurring
   * @return {?}
   */
  var $goog$bindJs_$ = function(fn, b, recurring) {
    if (!fn) {
      throw Error();
    }
    if (2 < arguments.length) {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments, 2);
      return function() {
        /** @type {Array.<?>} */
        var newArgs = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(newArgs, args);
        return fn.apply(b, newArgs);
      };
    }
    return function() {
      return fn.apply(b, arguments);
    };
  };
  /**
   * @param {Function} str
   * @param {Object} b
   * @param {Object} recurring
   * @return {?}
   */
  var log = function(str, b, recurring) {
    /** @type {function (Function, Object, Object): ?} */
    log = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? nextTick : $goog$bindJs_$;
    return log.apply(null, arguments);
  };
  /**
   * @param {Function} callback
   * @param {number} fn
   * @return {?}
   */
  var bind = function(callback, fn) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      /** @type {Array.<?>} */
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return callback.apply(this, newArgs);
    };
  };
  /** @type {function (): number} */
  var random = Date.now || function() {
    return+new Date;
  };
  /**
   * @param {string} text
   * @return {undefined}
   */
  var $goog$globalEval$ = function(text) {
    if (win.execScript) {
      win.execScript(text, "JavaScript");
    } else {
      if (win.eval) {
        if (null == Fa) {
          if (win.eval("var _evalTest_ = 1;"), "undefined" != typeof win._evalTest_) {
            try {
              delete win._evalTest_;
            } catch (d) {
            }
            /** @type {boolean} */
            Fa = true;
          } else {
            /** @type {boolean} */
            Fa = false;
          }
        }
        if (Fa) {
          win.eval(text);
        } else {
          var doc = win.document;
          var el = doc.createElement("SCRIPT");
          /** @type {string} */
          el.type = "text/javascript";
          /** @type {boolean} */
          el.defer = false;
          el.appendChild(doc.createTextNode(text));
          doc.body.appendChild(el);
          doc.body.removeChild(el);
        }
      } else {
        throw Error("goog.globalEval not available");
      }
    }
  };
  /** @type {null} */
  var Fa = null;
  /**
   * @param {string} $name$$
   * @param {Function} str
   * @return {undefined}
   */
  var $goog$exportPath_$ = function($name$$, str) {
    var names = $name$$.split(".");
    var obj = win;
    if (!(names[0] in obj)) {
      if (!!obj.execScript) {
        obj.execScript("var " + names[0]);
      }
    }
    var i;
    for (;names.length && (i = names.shift());) {
      if (!names.length && isNaN(str)) {
        /** @type {Function} */
        obj[i] = str;
      } else {
        obj = obj[i] && obj[i] !== Object.prototype[i] ? obj[i] : obj[i] = {};
      }
    }
  };
  /**
   * @param {Function} obj
   * @param {Function} name
   * @return {undefined}
   */
  var equal = function(obj, name) {
    /**
     * @return {undefined}
     */
    function parent() {
    }
    parent.prototype = name.prototype;
    obj.b = name.prototype;
    obj.prototype = new parent;
    /** @type {Function} */
    obj.prototype.constructor = obj;
    /**
     * @param {?} opt_context
     * @param {?} methodname
     * @param {?} dataAndEvents
     * @return {?}
     */
    obj.Ql = function(opt_context, methodname, dataAndEvents) {
      /** @type {Array} */
      var args = Array(arguments.length - 2);
      /** @type {number} */
      var i = 2;
      for (;i < arguments.length;i++) {
        args[i - 2] = arguments[i];
      }
      return name.prototype[methodname].apply(opt_context, args);
    };
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  var assert = function(message) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, assert);
    } else {
      /** @type {string} */
      var stack = Error().stack;
      if (stack) {
        /** @type {string} */
        this.stack = stack;
      }
    }
    if (message) {
      /** @type {string} */
      this.message = String(message);
    }
    /** @type {boolean} */
    this.$k = true;
  };
  equal(assert, Error);
  /** @type {string} */
  assert.prototype.name = "CustomError";
  var hasMembers;
  /**
   * @param {string} statement
   * @param {number} wrapper
   * @return {?}
   */
  var wrap = function(statement, wrapper) {
    var namespaces = statement.split("%s");
    /** @type {string} */
    var optsData = "";
    /** @type {Array.<?>} */
    var resolveValues = Array.prototype.slice.call(arguments, 1);
    for (;resolveValues.length && 1 < namespaces.length;) {
      optsData += namespaces.shift() + resolveValues.shift();
    }
    return optsData + namespaces.join("%s");
  };
  /** @type {function (string): ?} */
  var max = String.prototype.trim ? function(buf) {
    return buf.trim();
  } : function(lastLine) {
    return lastLine.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  };
  /**
   * @param {string} selector
   * @return {?}
   */
  var $ = function(selector) {
    if (!isSimple.test(selector)) {
      return selector;
    }
    if (-1 != selector.indexOf("&")) {
      selector = selector.replace(jqmDataRE, "&amp;");
    }
    if (-1 != selector.indexOf("<")) {
      selector = selector.replace(selectorRE, "&lt;");
    }
    if (-1 != selector.indexOf(">")) {
      selector = selector.replace(comboFinderRx, "&gt;");
    }
    if (-1 != selector.indexOf('"')) {
      selector = selector.replace(normalizr, "&quot;");
    }
    if (-1 != selector.indexOf("'")) {
      selector = selector.replace(attrFinderRx, "&#39;");
    }
    if (-1 != selector.indexOf("\x00")) {
      selector = selector.replace(rclass, "&#0;");
    }
    return selector;
  };
  /** @type {RegExp} */
  var jqmDataRE = /&/g;
  /** @type {RegExp} */
  var selectorRE = /</g;
  /** @type {RegExp} */
  var comboFinderRx = />/g;
  /** @type {RegExp} */
  var normalizr = /"/g;
  /** @type {RegExp} */
  var attrFinderRx = /'/g;
  /** @type {RegExp} */
  var rclass = /\x00/g;
  /** @type {RegExp} */
  var isSimple = /[\x00&<>"']/;
  /** @type {function ((Object|string), number): ?} */
  var strRepeat = String.prototype.repeat ? function(opts, match) {
    return opts.repeat(match);
  } : function(delimit2, l) {
    return Array(l + 1).join(delimit2);
  };
  /**
   * @return {?}
   */
  var randomColor = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ random()).toString(36);
  };
  /**
   * @param {?} num
   * @param {(number|string)} opt_attributes
   * @return {?}
   */
  var parseColor = function(num, opt_attributes) {
    /** @type {number} */
    var out = 0;
    var v1Subs = max(String(num)).split(".");
    var v2Subs = max(String(opt_attributes)).split(".");
    /** @type {number} */
    var subCount = Math.max(v1Subs.length, v2Subs.length);
    /** @type {number} */
    var subIdx = 0;
    for (;0 == out && subIdx < subCount;subIdx++) {
      var value = v1Subs[subIdx] || "";
      var elem = v2Subs[subIdx] || "";
      do {
        /** @type {Array} */
        value = /(\d*)(\D*)(.*)/.exec(value) || ["", "", "", ""];
        /** @type {Array} */
        elem = /(\d*)(\D*)(.*)/.exec(elem) || ["", "", "", ""];
        if (0 == value[0].length && 0 == elem[0].length) {
          break;
        }
        out = posLess(0 == value[1].length ? 0 : parseInt(value[1], 10), 0 == elem[1].length ? 0 : parseInt(elem[1], 10)) || (posLess(0 == value[2].length, 0 == elem[2].length) || posLess(value[2], elem[2]));
        value = value[3];
        elem = elem[3];
      } while (0 == out);
    }
    return out;
  };
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  var posLess = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  /**
   * @param {string} str
   * @return {?}
   */
  var toCamelCase = function(str) {
    return String(str).replace(/\-([a-z])/g, function(dataAndEvents, letter) {
      return letter.toUpperCase();
    });
  };
  /**
   * @param {string} str
   * @return {?}
   */
  var camelize = function(str) {
    /** @type {string} */
    var charset = isString(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return str.replace(new RegExp("(^" + (charset ? "|[" + charset + "]+" : "") + ")([a-z])", "g"), function(dataAndEvents, deepDataAndEvents, letter) {
      return deepDataAndEvents + letter.toUpperCase();
    });
  };
  /** @type {function (?, string, ?): ?} */
  var isUndefined = Array.prototype.indexOf ? function(object, obj, graphics) {
    return Array.prototype.indexOf.call(object, obj, graphics);
  } : function(arr, obj, fromIndex) {
    fromIndex = null == fromIndex ? 0 : 0 > fromIndex ? Math.max(0, arr.length + fromIndex) : fromIndex;
    if (isString(arr)) {
      return isString(obj) && 1 == obj.length ? arr.indexOf(obj, fromIndex) : -1;
    }
    for (;fromIndex < arr.length;fromIndex++) {
      if (fromIndex in arr && arr[fromIndex] === obj) {
        return fromIndex;
      }
    }
    return-1;
  };
  /** @type {function (Array, string, number): ?} */
  var off = Array.prototype.lastIndexOf ? function(checkSet, dataName, value) {
    return Array.prototype.lastIndexOf.call(checkSet, dataName, null == value ? checkSet.length - 1 : value);
  } : function(array, value, from) {
    from = null == from ? array.length - 1 : from;
    if (0 > from) {
      /** @type {number} */
      from = Math.max(0, array.length + from);
    }
    if (isString(array)) {
      return isString(value) && 1 == value.length ? array.lastIndexOf(value, from) : -1;
    }
    for (;0 <= from;from--) {
      if (from in array && array[from] === value) {
        return from;
      }
    }
    return-1;
  };
  /** @type {function (?, Function, ?): undefined} */
  var slice = Array.prototype.forEach ? function(a, f, obj) {
    Array.prototype.forEach.call(a, f, obj);
  } : function(arr, f, obj) {
    var e = arr.length;
    var arr2 = isString(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        f.call(obj, arr2[i], i, arr);
      }
    }
  };
  /** @type {function (?, Function, ?): ?} */
  var toArray = Array.prototype.filter ? function(next_scope, mapper, graphics) {
    return Array.prototype.filter.call(next_scope, mapper, graphics);
  } : function(arr, f, opt_this) {
    var e = arr.length;
    /** @type {Array} */
    var res = [];
    /** @type {number} */
    var resLength = 0;
    var arr2 = isString(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        var val = arr2[i];
        if (f.call(opt_this, val, i, arr)) {
          res[resLength++] = val;
        }
      }
    }
    return res;
  };
  /** @type {function (string, Function, ?): ?} */
  var repeat = Array.prototype.map ? function(bind, mapper, graphics) {
    return Array.prototype.map.call(bind, mapper, graphics);
  } : function(arr, f, opt_obj) {
    var e = arr.length;
    /** @type {Array} */
    var res = Array(e);
    var arr2 = isString(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        res[i] = f.call(opt_obj, arr2[i], i, arr);
      }
    }
    return res;
  };
  /** @type {function (Array, Function, ?): ?} */
  var rgb = Array.prototype.some ? function(checkSet, mapper, graphics) {
    return Array.prototype.some.call(checkSet, mapper, graphics);
  } : function(arr, f, opt_obj) {
    var e = arr.length;
    var arr2 = isString(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  /** @type {function (string, ?, ?): ?} */
  var hasKey = Array.prototype.every ? function(elems, mapper, graphics) {
    return Array.prototype.every.call(elems, mapper, graphics);
  } : function(arr, f, opt_this) {
    var e = arr.length;
    var arr2 = isString(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2 && !f.call(opt_this, arr2[i], i, arr)) {
        return false;
      }
    }
    return true;
  };
  /**
   * @param {string} arr
   * @return {?}
   */
  var print = function(arr) {
    a: {
      /** @type {function (Object): ?} */
      var f = ajax;
      var e = arr.length;
      var arr2 = isString(arr) ? arr.split("") : arr;
      /** @type {number} */
      var i = 0;
      for (;i < e;i++) {
        if (i in arr2 && f.call(void 0, arr2[i], i, arr)) {
          /** @type {number} */
          f = i;
          break a;
        }
      }
      /** @type {number} */
      f = -1;
    }
    return 0 > f ? null : isString(arr) ? arr.charAt(f) : arr[f];
  };
  /**
   * @param {?} object
   * @param {string} obj
   * @return {?}
   */
  var push = function(object, obj) {
    return 0 <= isUndefined(object, obj);
  };
  /**
   * @param {Array} name
   * @return {undefined}
   */
  var removeRule = function(name) {
    if (!join(name)) {
      /** @type {number} */
      var unlock = name.length - 1;
      for (;0 <= unlock;unlock--) {
        delete name[unlock];
      }
    }
    /** @type {number} */
    name.length = 0;
  };
  /**
   * @param {?} obj
   * @param {string} item
   * @return {?}
   */
  var fetch = function(obj, item) {
    var idx = isUndefined(obj, item);
    var request;
    if (request = 0 <= idx) {
      Array.prototype.splice.call(obj, idx, 1);
    }
    return request;
  };
  /**
   * @param {number} name
   * @return {?}
   */
  var getElementsByTagName = function(name) {
    return Array.prototype.concat.apply([], arguments);
  };
  /**
   * @param {Array} object
   * @return {?}
   */
  var map = function(object) {
    var length = object.length;
    if (0 < length) {
      /** @type {Array} */
      var result = Array(length);
      /** @type {number} */
      var i = 0;
      for (;i < length;i++) {
        result[i] = object[i];
      }
      return result;
    }
    return[];
  };
  /**
   * @param {Array} arr
   * @param {Array} vec
   * @return {undefined}
   */
  var flattenTo = function(arr, vec) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var arg = arguments[i];
      if (append(arg)) {
        var orgLen = arr.length || 0;
        var addLen = arg.length || 0;
        arr.length = orgLen + addLen;
        /** @type {number} */
        var j = 0;
        for (;j < addLen;j++) {
          arr[orgLen + j] = arg[j];
        }
      } else {
        arr.push(arg);
      }
    }
  };
  /**
   * @param {?} arr
   * @param {?} v11
   * @param {number} cmp
   * @param {Object} array
   * @return {undefined}
   */
  var mergeSort = function(arr, v11, cmp, array) {
    Array.prototype.splice.apply(arr, argsToArray(arguments, 1));
  };
  /**
   * @param {Object} args
   * @param {number} f
   * @param {number} wrapper
   * @return {?}
   */
  var argsToArray = function(args, f, wrapper) {
    return 2 >= arguments.length ? Array.prototype.slice.call(args, f) : Array.prototype.slice.call(args, f, wrapper);
  };
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  var selector_sortOrder = function(a, b) {
    return a === b;
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var whitespace = function(opt_attributes) {
    /** @type {Array} */
    var string = [];
    /** @type {number} */
    var index_in_string = 0;
    for (;index_in_string < opt_attributes;index_in_string++) {
      /** @type {number} */
      string[index_in_string] = 0;
    }
    return string;
  };
  /**
   * @param {string} x
   * @return {?}
   */
  var setter = function(x) {
    if (8192 >= x.length) {
      return String.fromCharCode.apply(null, x);
    }
    /** @type {string} */
    var returnVal = "";
    /** @type {number} */
    var i = 0;
    for (;i < x.length;i += 8192) {
      returnVal += String.fromCharCode.apply(null, argsToArray(x, i, i + 8192));
    }
    return returnVal;
  };
  /**
   * @param {string} fn
   * @return {?}
   */
  var compose = function(fn) {
    return repeat(fn, function(sorted) {
      sorted = sorted.toString(16);
      return 1 < sorted.length ? sorted : "0" + sorted;
    }).join("");
  };
  var txt;
  a: {
    var nav = win.navigator;
    if (nav) {
      var userAgent = nav.userAgent;
      if (userAgent) {
        txt = userAgent;
        break a;
      }
    }
    /** @type {string} */
    txt = "";
  }
  /**
   * @param {string} str
   * @return {?}
   */
  var agent_contains = function(str) {
    return-1 != txt.indexOf(str);
  };
  /**
   * @param {Object} obj
   * @param {Function} f
   * @param {?} context
   * @return {undefined}
   */
  var group = function(obj, f, context) {
    var key;
    for (key in obj) {
      f.call(context, obj[key], key, obj);
    }
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  var ref = function(value) {
    /** @type {Array} */
    var obj = [];
    /** @type {number} */
    var c = 0;
    var k;
    for (k in value) {
      obj[c++] = value[k];
    }
    return obj;
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var forIn = function(obj) {
    /** @type {Array} */
    var object = [];
    /** @type {number} */
    var i = 0;
    var prop;
    for (prop in obj) {
      /** @type {string} */
      object[i++] = prop;
    }
    return object;
  };
  /**
   * @param {?} pattern
   * @return {?}
   */
  var containsMatch = function(pattern) {
    var attr;
    for (attr in pattern) {
      return false;
    }
    return true;
  };
  /**
   * @param {Object} obj
   * @param {string} key
   * @param {Object} val
   * @return {undefined}
   */
  var groupBy = function(obj, key, val) {
    if (null !== obj && key in obj) {
      throw Error('The object already contains the key "' + key + '"');
    }
    /** @type {Object} */
    obj[key] = val;
  };
  /**
   * @param {Object} obj
   * @param {?} name
   * @return {?}
   */
  var getName = function(obj, name) {
    return null !== obj && name in obj ? obj[name] : void 0;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  var MAP = function(a) {
    var old = {};
    var name;
    for (name in a) {
      old[name] = a[name];
    }
    return old;
  };
  /** @type {Array.<string>} */
  var desc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  /**
   * @param {Object} object
   * @param {?} obj
   * @return {undefined}
   */
  var iterator = function(object, obj) {
    var key;
    var iterable;
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      iterable = arguments[i];
      for (key in iterable) {
        object[key] = iterable[key];
      }
      /** @type {number} */
      var j = 0;
      for (;j < desc.length;j++) {
        /** @type {string} */
        key = desc[j];
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
  };
  /**
   * @param {Array} silent
   * @return {?}
   */
  var view = function(silent) {
    /** @type {number} */
    var argLength = arguments.length;
    if (1 == argLength && join(arguments[0])) {
      return view.apply(null, arguments[0]);
    }
    var result = {};
    /** @type {number} */
    var i = 0;
    for (;i < argLength;i++) {
      /** @type {boolean} */
      result[arguments[i]] = true;
    }
    return result;
  };
  /**
   * @return {?}
   */
  var appendModelPrefix = function() {
    return(agent_contains("Chrome") || agent_contains("CriOS")) && !agent_contains("Edge");
  };
  /**
   * @return {?}
   */
  var fixedPosition = function() {
    return agent_contains("iPhone") && (!agent_contains("iPod") && !agent_contains("iPad"));
  };
  /**
   * @return {?}
   */
  var toVLQSigned = function() {
    return fixedPosition() || (agent_contains("iPad") || agent_contains("iPod"));
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var defineProperties = function(object) {
    defineProperties[" "](object);
    return object;
  };
  /** @type {function (): undefined} */
  defineProperties[" "] = noop;
  /**
   * @param {string} name
   * @param {Function} definition
   * @return {?}
   */
  var hasOwn = function(name, definition) {
    var context = buffer_canvas_ctx;
    return Object.prototype.hasOwnProperty.call(context, name) ? context[name] : context[name] = definition(name);
  };
  var err2 = agent_contains("Opera");
  var ms = agent_contains("Trident") || agent_contains("MSIE");
  var err = agent_contains("Edge");
  var useKeyPress = agent_contains("Gecko") && (!(-1 != txt.toLowerCase().indexOf("webkit") && !agent_contains("Edge")) && (!(agent_contains("Trident") || agent_contains("MSIE")) && !agent_contains("Edge")));
  /** @type {boolean} */
  var member = -1 != txt.toLowerCase().indexOf("webkit") && !agent_contains("Edge");
  var tx = member && agent_contains("Mobile");
  var mac = agent_contains("Macintosh");
  var ty = agent_contains("Android");
  var targetSplit = fixedPosition();
  var sourceSplit = agent_contains("iPad");
  var vlq = toVLQSigned();
  /**
   * @return {?}
   */
  var iframeCssFixes = function() {
    var doc = win.document;
    return doc ? doc.documentMode : void 0;
  };
  var strValue;
  a: {
    /** @type {string} */
    var version = "";
    var namespaceMatch = function() {
      var expectedArgs = txt;
      if (useKeyPress) {
        return/rv\:([^\);]+)(\)|;)/.exec(expectedArgs);
      }
      if (err) {
        return/Edge\/([\d\.]+)/.exec(expectedArgs);
      }
      if (ms) {
        return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(expectedArgs);
      }
      if (member) {
        return/WebKit\/(\S+)/.exec(expectedArgs);
      }
      if (err2) {
        return/(?:Version)[ \/]?(\S+)/.exec(expectedArgs);
      }
    }();
    if (namespaceMatch) {
      version = namespaceMatch ? namespaceMatch[1] : "";
    }
    if (ms) {
      var docMode = iframeCssFixes();
      if (null != docMode && docMode > parseFloat(version)) {
        /** @type {string} */
        strValue = String(docMode);
        break a;
      }
    }
    strValue = version;
  }
  var cDigit = strValue;
  var buffer_canvas_ctx = {};
  /**
   * @param {string} opt_attributes
   * @return {?}
   */
  var apply = function(opt_attributes) {
    return hasOwn(opt_attributes, function() {
      return 0 <= parseColor(cDigit, opt_attributes);
    });
  };
  var sizeAsString;
  var newDoc = win.document;
  sizeAsString = newDoc && ms ? iframeCssFixes() || ("CSS1Compat" == newDoc.compatMode ? parseInt(cDigit, 10) : 5) : void 0;
  var Firefox = agent_contains("Firefox");
  var program = fixedPosition() || agent_contains("iPod");
  var inverse = agent_contains("iPad");
  var gc = agent_contains("Android") && !(appendModelPrefix() || (agent_contains("Firefox") || (agent_contains("Opera") || agent_contains("Silk"))));
  var fullOtherName = appendModelPrefix();
  var ic = agent_contains("Safari") && (!(appendModelPrefix() || (agent_contains("Coast") || (agent_contains("Opera") || (agent_contains("Edge") || (agent_contains("Silk") || agent_contains("Android")))))) && !toVLQSigned());
  /** @type {null} */
  var bits = null;
  /** @type {null} */
  var testSource = null;
  /** @type {null} */
  var employees = null;
  /**
   * @param {Array} data
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var report = function(data, dataAndEvents) {
    append(data);
    sortFn();
    var o = dataAndEvents ? employees : bits;
    /** @type {Array} */
    var f = [];
    /** @type {number} */
    var i = 0;
    for (;i < data.length;i += 3) {
      var key = data[i];
      /** @type {boolean} */
      var forward = i + 1 < data.length;
      var e = forward ? data[i + 1] : 0;
      /** @type {boolean} */
      var name = i + 2 < data.length;
      var index = name ? data[i + 2] : 0;
      /** @type {number} */
      var prop = key >> 2;
      /** @type {number} */
      key = (key & 3) << 4 | e >> 4;
      /** @type {number} */
      e = (e & 15) << 2 | index >> 6;
      /** @type {number} */
      index = index & 63;
      if (!name) {
        /** @type {number} */
        index = 64;
        if (!forward) {
          /** @type {number} */
          e = 64;
        }
      }
      f.push(o[prop], o[key], o[e], o[index]);
    }
    return f.join("");
  };
  /**
   * @param {string} a
   * @return {?}
   */
  var perform = function(a) {
    /** @type {Array} */
    var result = [];
    /** @type {number} */
    var ri = 0;
    /** @type {number} */
    var i = 0;
    for (;i < a.length;i++) {
      var n = a.charCodeAt(i);
      for (;255 < n;) {
        /** @type {number} */
        result[ri++] = n & 255;
        n >>= 8;
      }
      result[ri++] = n;
    }
    return report(result, true);
  };
  /**
   * @param {?} array
   * @return {?}
   */
  var unique = function(array) {
    /** @type {Array} */
    var arr = [];
    sort(array, function(chunk) {
      arr.push(chunk);
    });
    return arr;
  };
  /**
   * @param {string} input
   * @param {Function} compareFn
   * @return {undefined}
   */
  var sort = function(input, compareFn) {
    /**
     * @param {number} outstandingDataSize
     * @return {?}
     */
    function parse(outstandingDataSize) {
      for (;i < input.length;) {
        var name = input.charAt(i++);
        var ref = testSource[name];
        if (null != ref) {
          return ref;
        }
        if (!/^[\s\xa0]*$/.test(name)) {
          throw Error("Unknown base64 encoding at char: " + name);
        }
      }
      return outstandingDataSize;
    }
    sortFn();
    /** @type {number} */
    var i = 0;
    for (;;) {
      var func = parse(-1);
      var url = parse(0);
      var originalUrl = parse(64);
      var obj = parse(64);
      if (64 === obj && -1 === func) {
        break;
      }
      compareFn(func << 2 | url >> 4);
      if (64 != originalUrl) {
        compareFn(url << 4 & 240 | originalUrl >> 2);
        if (64 != obj) {
          compareFn(originalUrl << 6 & 192 | obj);
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  var sortFn = function() {
    if (!bits) {
      bits = {};
      testSource = {};
      employees = {};
      /** @type {number} */
      var i = 0;
      for (;65 > i;i++) {
        /** @type {string} */
        bits[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i);
        /** @type {number} */
        testSource[bits[i]] = i;
        /** @type {string} */
        employees[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(i);
        if (62 <= i) {
          /** @type {number} */
          testSource["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(i)] = i;
        }
      }
    }
  };
  /**
   * @param {string} s
   * @return {?}
   */
  var quote = function(s) {
    return/^\s*$/.test(s) ? false : /^[\],:{}\s\u2028\u2029]*$/.test(s.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  };
  /**
   * @param {string} obj
   * @return {?}
   */
  var HOP = function(obj) {
    /** @type {string} */
    obj = String(obj);
    if (quote(obj)) {
      try {
        return eval("(" + obj + ")");
      } catch (b) {
      }
    }
    throw Error("Invalid JSON string: " + obj);
  };
  /**
   * @param {string} number
   * @return {?}
   */
  var worker = function(number) {
    return eval("(" + number + ")");
  };
  /**
   * @param {?} thisObj
   * @return {?}
   */
  var unescape = function(thisObj) {
    return(new Type(void 0)).Cf(thisObj);
  };
  /**
   * @param {?} o
   * @return {undefined}
   */
  var Type = function(o) {
    this.xf = o;
  };
  /**
   * @param {?} until
   * @return {?}
   */
  Type.prototype.Cf = function(until) {
    /** @type {Array} */
    var sb = [];
    l(this, until, sb);
    return sb.join("");
  };
  /**
   * @param {?} args
   * @param {?} arg
   * @param {Array} sb
   * @return {undefined}
   */
  var l = function(args, arg, sb) {
    if (null == arg) {
      sb.push("null");
    } else {
      if ("object" == typeof arg) {
        if (join(arg)) {
          var argLen = arg.length;
          sb.push("[");
          /** @type {string} */
          var value = "";
          /** @type {number} */
          var j = 0;
          for (;j < argLen;j++) {
            sb.push(value);
            value = arg[j];
            l(args, args.xf ? args.xf.call(arg, String(j), value) : value, sb);
            /** @type {string} */
            value = ",";
          }
          sb.push("]");
          return;
        }
        if (arg instanceof String || (arg instanceof Number || arg instanceof Boolean)) {
          /** @type {*} */
          arg = arg.valueOf();
        } else {
          args.nh(arg, sb);
          return;
        }
      }
      switch(typeof arg) {
        case "string":
          inspect(arg, sb);
          break;
        case "number":
          sb.push(isFinite(arg) && !isNaN(arg) ? String(arg) : "null");
          break;
        case "boolean":
          sb.push(String(arg));
          break;
        case "function":
          sb.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof arg);;
      }
    }
  };
  var builtInOps = {
    '"' : '\\"',
    "\\" : "\\\\",
    "/" : "\\/",
    "\b" : "\\b",
    "\f" : "\\f",
    "\n" : "\\n",
    "\r" : "\\r",
    "\t" : "\\t",
    "\x0B" : "\\u000b"
  };
  /** @type {RegExp} */
  var rSlash = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  /**
   * @param {string} s
   * @param {Array} o
   * @return {undefined}
   */
  var inspect = function(s, o) {
    o.push('"', s.replace(rSlash, function(ch) {
      var channel = builtInOps[ch];
      if (!channel) {
        /** @type {string} */
        channel = "\\u" + (ch.charCodeAt(0) | 65536).toString(16).substr(1);
        /** @type {string} */
        builtInOps[ch] = channel;
      }
      return channel;
    }), '"');
  };
  /**
   * @param {Object} params
   * @param {Array} sb
   * @return {undefined}
   */
  Type.prototype.nh = function(params, sb) {
    sb.push("{");
    /** @type {string} */
    var parsedAnchor = "";
    var key;
    for (key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        var fn = params[key];
        if ("function" != typeof fn) {
          sb.push(parsedAnchor);
          inspect(key, sb);
          sb.push(":");
          l(this, this.xf ? this.xf.call(params, key, fn) : fn, sb);
          /** @type {string} */
          parsedAnchor = ",";
        }
      }
    }
    sb.push("}");
  };
  /**
   * @return {undefined}
   */
  var date = function() {
  };
  /** @type {boolean} */
  var storeFilesInFileSystem = "function" == typeof Uint8Array;
  /**
   * @param {?} scope
   * @param {number} b
   * @param {Object} mayParseLabeledStatementInstead
   * @param {Array} recurring
   * @return {undefined}
   */
  var __extends = function(scope, b, mayParseLabeledStatementInstead, recurring) {
    /** @type {null} */
    scope.ka = null;
    if (!b) {
      /** @type {Array} */
      b = mayParseLabeledStatementInstead ? [mayParseLabeledStatementInstead] : [];
    }
    /** @type {(string|undefined)} */
    scope.rm = mayParseLabeledStatementInstead ? String(mayParseLabeledStatementInstead) : void 0;
    /** @type {number} */
    scope.se = 0 === mayParseLabeledStatementInstead ? -1 : 0;
    /** @type {number} */
    scope.bb = b;
    a: {
      if (scope.bb.length && (b = scope.bb.length - 1, (mayParseLabeledStatementInstead = scope.bb[b]) && ("object" == typeof mayParseLabeledStatementInstead && (!join(mayParseLabeledStatementInstead) && !(storeFilesInFileSystem && mayParseLabeledStatementInstead instanceof Uint8Array))))) {
        /** @type {number} */
        scope.tf = b - scope.se;
        /** @type {Object} */
        scope.Cd = mayParseLabeledStatementInstead;
        break a;
      }
      /** @type {number} */
      scope.tf = Number.MAX_VALUE;
    }
    scope.Yl = {};
    if (recurring) {
      /** @type {number} */
      b = 0;
      for (;b < recurring.length;b++) {
        mayParseLabeledStatementInstead = recurring[b];
        if (mayParseLabeledStatementInstead < scope.tf) {
          mayParseLabeledStatementInstead += scope.se;
          scope.bb[mayParseLabeledStatementInstead] = scope.bb[mayParseLabeledStatementInstead] || originalModel;
        } else {
          scope.Cd[mayParseLabeledStatementInstead] = scope.Cd[mayParseLabeledStatementInstead] || originalModel;
        }
      }
    }
  };
  /** @type {Array} */
  var originalModel = [];
  /**
   * @param {Array} o
   * @param {Function} f
   * @param {?} name
   * @return {?}
   */
  var camelCase = function(o, f, name) {
    /** @type {Array} */
    var self = [];
    /** @type {number} */
    var i = 0;
    for (;i < o.length;i++) {
      self[i] = f.call(o[i], name, o[i]);
    }
    return self;
  };
  /**
   * @param {?} now
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  var require = function(now, expectedNumberOfNonCommentArgs) {
    if (expectedNumberOfNonCommentArgs < now.tf) {
      var cc = expectedNumberOfNonCommentArgs + now.se;
      var model = now.bb[cc];
      return model === originalModel ? now.bb[cc] = [] : model;
    }
    model = now.Cd[expectedNumberOfNonCommentArgs];
    return model === originalModel ? now.Cd[expectedNumberOfNonCommentArgs] = [] : model;
  };
  /**
   * @param {?} e
   * @param {number} desiredNonCommentArgIndex
   * @param {Function} opt_attributes
   * @return {undefined}
   */
  var _log = function(e, desiredNonCommentArgIndex, opt_attributes) {
    if (desiredNonCommentArgIndex < e.tf) {
      /** @type {Function} */
      e.bb[desiredNonCommentArgIndex + e.se] = opt_attributes;
    } else {
      /** @type {Function} */
      e.Cd[desiredNonCommentArgIndex] = opt_attributes;
    }
  };
  /**
   * @param {?} object
   * @param {Function} value
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  var cb = function(object, value, expectedNumberOfNonCommentArgs) {
    if (!object.ka) {
      object.ka = {};
    }
    if (!object.ka[expectedNumberOfNonCommentArgs]) {
      var promise = require(object, expectedNumberOfNonCommentArgs);
      if (promise) {
        object.ka[expectedNumberOfNonCommentArgs] = new value(promise);
      }
    }
    return object.ka[expectedNumberOfNonCommentArgs];
  };
  /**
   * @param {?} key
   * @param {Function} name
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  var promote = function(key, name, expectedNumberOfNonCommentArgs) {
    if (!key.ka) {
      key.ka = {};
    }
    if (!key.ka[expectedNumberOfNonCommentArgs]) {
      var codeSegments = require(key, expectedNumberOfNonCommentArgs);
      /** @type {Array} */
      var prevSources = [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        prevSources[i] = new name(codeSegments[i]);
      }
      /** @type {Array} */
      key.ka[expectedNumberOfNonCommentArgs] = prevSources;
    }
    name = key.ka[expectedNumberOfNonCommentArgs];
    if (name == originalModel) {
      /** @type {Array} */
      name = key.ka[expectedNumberOfNonCommentArgs] = [];
    }
    return name;
  };
  /**
   * @param {?} collection
   * @return {undefined}
   */
  var doit = function(collection) {
    if (collection.ka) {
      var name;
      for (name in collection.ka) {
        var which = collection.ka[name];
        if (join(which)) {
          /** @type {number} */
          var i = 0;
          for (;i < which.length;i++) {
            if (which[i]) {
              mergeObjects(which[i]);
            }
          }
        } else {
          if (which) {
            mergeObjects(which);
          }
        }
      }
    }
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var mergeObjects = function(object) {
    doit(object);
    return object.bb;
  };
  /** @type {function (): ?} */
  date.prototype.Cf = storeFilesInFileSystem ? function() {
    /** @type {function (this:Uint8Array, string=): *} */
    var toJSON = Uint8Array.prototype.toJSON;
    /**
     * @return {*}
     */
    Uint8Array.prototype.toJSON = function() {
      return report(this);
    };
    try {
      /** @type {string} */
      var body = JSON.stringify(mergeObjects(this), replacer);
    } finally {
      /** @type {function (this:Uint8Array, string=): *} */
      Uint8Array.prototype.toJSON = toJSON;
    }
    return body;
  } : function() {
    return JSON.stringify(mergeObjects(this), replacer);
  };
  /**
   * @param {?} ampm
   * @param {number} s
   * @return {?}
   */
  var replacer = function(ampm, s) {
    if (scale(s)) {
      if (isNaN(s)) {
        return "NaN";
      }
      if (Infinity === s) {
        return "Infinity";
      }
      if (-Infinity === s) {
        return "-Infinity";
      }
    }
    return s;
  };
  /**
   * @return {?}
   */
  date.prototype.toString = function() {
    doit(this);
    return this.bb.toString();
  };
  /**
   * @return {?}
   */
  date.prototype.clone = function() {
    return new this.constructor(clean(mergeObjects(this)));
  };
  /**
   * @param {?} source
   * @return {?}
   */
  var clean = function(source) {
    var val;
    if (join(source)) {
      /** @type {Array} */
      var ret = Array(source.length);
      /** @type {number} */
      var i = 0;
      for (;i < source.length;i++) {
        if (null != (val = source[i])) {
          ret[i] = "object" == typeof val ? clean(val) : val;
        }
      }
      return ret;
    }
    if (storeFilesInFileSystem && source instanceof Uint8Array) {
      return new Uint8Array(source);
    }
    ret = {};
    for (i in source) {
      if (null != (val = source[i])) {
        ret[i] = "object" == typeof val ? clean(val) : val;
      }
    }
    return ret;
  };
  /** @type {Array} */
  var buf = [];
  /** @type {Array} */
  var codeSegments = [];
  /** @type {boolean} */
  var Lc = false;
  /**
   * @param {Function} fun
   * @return {undefined}
   */
  var traverseNode = function(fun) {
    /** @type {Function} */
    buf[buf.length] = fun;
    if (Lc) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        fun(log(codeSegments[i].oj, codeSegments[i]));
      }
    }
  };
  /** @type {boolean} */
  var Nc = !ms || 9 <= Number(sizeAsString);
  /** @type {boolean} */
  var named = !ms || 9 <= Number(sizeAsString);
  var Pc = ms && !apply("9");
  if (!!member) {
    apply("528");
  }
  if (!(useKeyPress && apply("1.9b"))) {
    if (!(ms && apply("8"))) {
      if (!(err2 && apply("9.5"))) {
        if (member) {
          apply("528");
        }
      }
    }
  }
  if (!(useKeyPress && !apply("8"))) {
    if (ms) {
      apply("9");
    }
  }
  /**
   * @return {undefined}
   */
  var props = function() {
    this.Kc = this.Kc;
    this.qc = this.qc;
  };
  /** @type {boolean} */
  props.prototype.Kc = false;
  /**
   * @return {?}
   */
  props.prototype.isDisposed = function() {
    return this.Kc;
  };
  /**
   * @return {undefined}
   */
  props.prototype.qa = function() {
    if (!this.Kc) {
      /** @type {boolean} */
      this.Kc = true;
      this.l();
    }
  };
  /**
   * @param {Object} properties
   * @param {?} value
   * @return {undefined}
   */
  var set = function(properties, value) {
    var val = bind(end, value);
    if (properties.Kc) {
      if (isNaN(void 0)) {
        val.call(void 0);
      } else {
        val();
      }
    } else {
      if (!properties.qc) {
        /** @type {Array} */
        properties.qc = [];
      }
      properties.qc.push(isNaN(void 0) ? log(val, void 0) : val);
    }
  };
  /**
   * @return {undefined}
   */
  props.prototype.l = function() {
    if (this.qc) {
      for (;this.qc.length;) {
        this.qc.shift()();
      }
    }
  };
  /**
   * @param {?} encoding
   * @return {undefined}
   */
  var end = function(encoding) {
    if (encoding) {
      if ("function" == typeof encoding.qa) {
        encoding.qa();
      }
    }
  };
  /**
   * @param {?} type
   * @param {Object} opt_target
   * @return {undefined}
   */
  var Event = function(type, opt_target) {
    this.type = type;
    this.currentTarget = this.target = opt_target;
    /** @type {boolean} */
    this.defaultPrevented = this.sc = false;
    /** @type {boolean} */
    this.Yi = true;
  };
  /**
   * @return {undefined}
   */
  Event.prototype.stopPropagation = function() {
    /** @type {boolean} */
    this.sc = true;
  };
  /**
   * @return {undefined}
   */
  Event.prototype.preventDefault = function() {
    /** @type {boolean} */
    this.defaultPrevented = true;
    /** @type {boolean} */
    this.Yi = false;
  };
  /**
   * @param {boolean} event
   * @param {Object} element
   * @return {undefined}
   */
  var update = function(event, element) {
    Event.call(this, event ? event.type : "");
    /** @type {null} */
    this.relatedTarget = this.currentTarget = this.target = null;
    /** @type {number} */
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    /** @type {string} */
    this.key = "";
    /** @type {number} */
    this.charCode = this.keyCode = 0;
    /** @type {boolean} */
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    /** @type {null} */
    this.state = null;
    /** @type {boolean} */
    this.uf = false;
    /** @type {null} */
    this.Aa = null;
    if (event) {
      this.init(event, element);
    }
  };
  equal(update, Event);
  /** @type {Array} */
  var Uc = [1, 4, 2];
  /**
   * @param {Object} e
   * @param {Array} element
   * @return {undefined}
   */
  update.prototype.init = function(e, element) {
    var $type$$52 = this.type = e.type;
    var touch = e.changedTouches ? e.changedTouches[0] : null;
    this.target = e.target || e.srcElement;
    /** @type {Array} */
    this.currentTarget = element;
    var relatedTarget = e.relatedTarget;
    if (relatedTarget) {
      if (useKeyPress) {
        a: {
          try {
            defineProperties(relatedTarget.nodeName);
            /** @type {boolean} */
            var g = true;
            break a;
          } catch (h) {
          }
          /** @type {boolean} */
          g = false;
        }
        if (!g) {
          /** @type {null} */
          relatedTarget = null;
        }
      }
    } else {
      if ("mouseover" == $type$$52) {
        relatedTarget = e.fromElement;
      } else {
        if ("mouseout" == $type$$52) {
          relatedTarget = e.toElement;
        }
      }
    }
    this.relatedTarget = relatedTarget;
    if (null === touch) {
      this.offsetX = member || void 0 !== e.offsetX ? e.offsetX : e.layerX;
      this.offsetY = member || void 0 !== e.offsetY ? e.offsetY : e.layerY;
      this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX;
      this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY;
      this.screenX = e.screenX || 0;
      this.screenY = e.screenY || 0;
    } else {
      this.clientX = void 0 !== touch.clientX ? touch.clientX : touch.pageX;
      this.clientY = void 0 !== touch.clientY ? touch.clientY : touch.pageY;
      this.screenX = touch.screenX || 0;
      this.screenY = touch.screenY || 0;
    }
    this.button = e.button;
    this.keyCode = e.keyCode || 0;
    this.key = e.key || "";
    this.charCode = e.charCode || ("keypress" == $type$$52 ? e.keyCode : 0);
    this.ctrlKey = e.ctrlKey;
    this.altKey = e.altKey;
    this.shiftKey = e.shiftKey;
    this.metaKey = e.metaKey;
    this.uf = mac ? e.metaKey : e.ctrlKey;
    this.state = e.state;
    /** @type {Object} */
    this.Aa = e;
    if (e.defaultPrevented) {
      this.preventDefault();
    }
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  var onclick = function(e) {
    return Nc ? 0 == e.Aa.button : "click" == e.type ? true : !!(e.Aa.button & Uc[0]);
  };
  /**
   * @return {undefined}
   */
  update.prototype.stopPropagation = function() {
    update.b.stopPropagation.call(this);
    if (this.Aa.stopPropagation) {
      this.Aa.stopPropagation();
    } else {
      /** @type {boolean} */
      this.Aa.cancelBubble = true;
    }
  };
  /**
   * @return {undefined}
   */
  update.prototype.preventDefault = function() {
    update.b.preventDefault.call(this);
    var ev = this.Aa;
    if (ev.preventDefault) {
      ev.preventDefault();
    } else {
      if (ev.returnValue = false, Pc) {
        try {
          if (ev.ctrlKey || 112 <= ev.keyCode && 123 >= ev.keyCode) {
            /** @type {number} */
            ev.keyCode = -1;
          }
        } catch (b) {
        }
      }
    }
  };
  /** @type {string} */
  var propertyName = "closure_listenable_" + (1E6 * Math.random() | 0);
  /**
   * @param {Object} obj
   * @return {?}
   */
  var _each = function(obj) {
    return!(!obj || !obj[propertyName]);
  };
  /** @type {number} */
  var nextKey = 0;
  /**
   * @param {Function} listener
   * @param {?} url
   * @param {?} type
   * @param {?} opt_size
   * @param {?} opt_vars
   * @return {undefined}
   */
  var Player = function(listener, url, type, opt_size, opt_vars) {
    /** @type {Function} */
    this.listener = listener;
    /** @type {null} */
    this.wf = null;
    this.src = url;
    this.type = type;
    /** @type {boolean} */
    this.capture = !!opt_size;
    this.cf = opt_vars;
    /** @type {number} */
    this.key = ++nextKey;
    /** @type {boolean} */
    this.dd = this.we = false;
  };
  /**
   * @param {Object} listener
   * @return {undefined}
   */
  var removeEventListener = function(listener) {
    /** @type {boolean} */
    listener.dd = true;
    /** @type {null} */
    listener.listener = null;
    /** @type {null} */
    listener.wf = null;
    /** @type {null} */
    listener.src = null;
    /** @type {null} */
    listener.cf = null;
  };
  /**
   * @param {?} src
   * @return {undefined}
   */
  var ctor = function(src) {
    this.src = src;
    this.ra = {};
    /** @type {number} */
    this.ke = 0;
  };
  /**
   * @param {string} x
   * @param {string} object
   * @param {boolean} c
   * @param {boolean} listener
   * @param {boolean} selector
   * @return {?}
   */
  ctor.prototype.add = function(x, object, c, listener, selector) {
    var y = x.toString();
    x = this.ra[y];
    if (!x) {
      /** @type {Array} */
      x = this.ra[y] = [];
      this.ke++;
    }
    var index = equals(x, object, listener, selector);
    if (-1 < index) {
      object = x[index];
      if (!c) {
        /** @type {boolean} */
        object.we = false;
      }
    } else {
      object = new Player(object, this.src, y, !!listener, selector);
      /** @type {boolean} */
      object.we = c;
      x.push(object);
    }
    return object;
  };
  /**
   * @param {?} name
   * @param {number} type
   * @param {boolean} node
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  ctor.prototype.remove = function(name, type, node, deepDataAndEvents) {
    name = name.toString();
    if (!(name in this.ra)) {
      return false;
    }
    var value = this.ra[name];
    type = equals(value, type, node, deepDataAndEvents);
    return-1 < type ? (removeEventListener(value[type]), Array.prototype.splice.call(value, type, 1), 0 == value.length && (delete this.ra[name], this.ke--), true) : false;
  };
  /**
   * @param {?} data
   * @param {Object} item
   * @return {undefined}
   */
  var completed = function(data, item) {
    var name = item.type;
    if (name in data.ra) {
      if (fetch(data.ra[name], item)) {
        removeEventListener(item);
        if (0 == data.ra[name].length) {
          delete data.ra[name];
          data.ke--;
        }
      }
    }
  };
  /**
   * @param {Object} dest
   * @return {?}
   */
  ctor.prototype.cd = function(dest) {
    dest = dest && dest.toString();
    /** @type {number} */
    var currentPath = 0;
    var mat;
    for (mat in this.ra) {
      if (!dest || mat == dest) {
        var codeSegments = this.ra[mat];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          ++currentPath;
          removeEventListener(codeSegments[i]);
        }
        delete this.ra[mat];
        this.ke--;
      }
    }
    return currentPath;
  };
  /**
   * @param {Object} elem
   * @param {string} value
   * @param {boolean} dataAndEvents
   * @param {Element} deepDataAndEvents
   * @return {?}
   */
  ctor.prototype.Gd = function(elem, value, dataAndEvents, deepDataAndEvents) {
    elem = this.ra[elem.toString()];
    /** @type {number} */
    var ret = -1;
    if (elem) {
      ret = equals(elem, value, dataAndEvents, deepDataAndEvents);
    }
    return-1 < ret ? elem[ret] : null;
  };
  /**
   * @param {Array} a
   * @param {?} object
   * @param {boolean} dataAndEvents
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  var equals = function(a, object, dataAndEvents, deepDataAndEvents) {
    /** @type {number} */
    var i = 0;
    for (;i < a.length;++i) {
      var node = a[i];
      if (!node.dd && (node.listener == object && (node.capture == !!dataAndEvents && node.cf == deepDataAndEvents))) {
        return i;
      }
    }
    return-1;
  };
  /** @type {string} */
  var prop = "closure_lm_" + (1E6 * Math.random() | 0);
  var appenderMap = {};
  /** @type {number} */
  var fd = 0;
  /**
   * @param {Object} obj
   * @param {?} type
   * @param {Function} fn
   * @param {boolean} recurring
   * @param {boolean} callback
   * @return {?}
   */
  var addEvent = function(obj, type, fn, recurring, callback) {
    if (join(type)) {
      /** @type {number} */
      var i = 0;
      for (;i < type.length;i++) {
        addEvent(obj, type[i], fn, recurring, callback);
      }
      return null;
    }
    fn = (0,eval)(fn);
    return _each(obj) ? obj.listen(type, fn, recurring, callback) : addEventListener(obj, type, fn, false, recurring, callback);
  };
  /**
   * @param {Object} obj
   * @param {Object} str
   * @param {Object} fn
   * @param {Object} f
   * @param {boolean} type
   * @param {boolean} t
   * @return {?}
   */
  var addEventListener = function(obj, str, fn, f, type, t) {
    if (!str) {
      throw Error("Invalid event type");
    }
    /** @type {boolean} */
    var recurring = !!type;
    var self = encodeURIComponent(obj);
    if (!self) {
      obj[prop] = self = new ctor(obj);
    }
    fn = self.add(str, fn, f, type, t);
    if (fn.wf) {
      return fn;
    }
    f = delegate();
    /** @type {Object} */
    fn.wf = f;
    /** @type {Object} */
    f.src = obj;
    /** @type {Object} */
    f.listener = fn;
    if (obj.addEventListener) {
      obj.addEventListener(str.toString(), f, recurring);
    } else {
      if (obj.attachEvent) {
        obj.attachEvent(detachEvent(str.toString()), f);
      } else {
        throw Error("addEventListener and attachEvent are unavailable.");
      }
    }
    fd++;
    return fn;
  };
  /**
   * @return {?}
   */
  var delegate = function() {
    /** @type {function (Object, string): ?} */
    var proxyCallbackFunction = reset;
    /** @type {function (?): ?} */
    var f = named ? function(eventObject) {
      return proxyCallbackFunction.call(f.src, f.listener, eventObject);
    } : function(index) {
      index = proxyCallbackFunction.call(f.src, f.listener, index);
      if (!index) {
        return index;
      }
    };
    return f;
  };
  /**
   * @param {Object} el
   * @param {?} type
   * @param {Object} fn
   * @param {boolean} callback
   * @param {boolean} color
   * @return {?}
   */
  var getData = function(el, type, fn, callback, color) {
    if (join(type)) {
      /** @type {number} */
      var i = 0;
      for (;i < type.length;i++) {
        getData(el, type[i], fn, callback, color);
      }
      return null;
    }
    fn = (0,eval)(fn);
    return _each(el) ? el.Ea(type, fn, callback, color) : addEventListener(el, type, fn, true, callback, color);
  };
  /**
   * @param {Object} value
   * @param {?} type
   * @param {string} index
   * @param {boolean} recurring
   * @param {Element} dataAndEvents
   * @return {undefined}
   */
  var splice = function(value, type, index, recurring, dataAndEvents) {
    if (join(type)) {
      /** @type {number} */
      var i = 0;
      for (;i < type.length;i++) {
        splice(value, type[i], index, recurring, dataAndEvents);
      }
    } else {
      index = (0,eval)(index);
      if (_each(value)) {
        value.Ta(type, index, recurring, dataAndEvents);
      } else {
        if (value) {
          if (value = encodeURIComponent(value)) {
            if (type = value.Gd(type, index, !!recurring, dataAndEvents)) {
              unbind(type);
            }
          }
        }
      }
    }
  };
  /**
   * @param {Object} listener
   * @return {undefined}
   */
  var unbind = function(listener) {
    if (!scale(listener) && (listener && !listener.dd)) {
      var src = listener.src;
      if (_each(src)) {
        completed(src.tb, listener);
      } else {
        var type = listener.type;
        var proxy = listener.wf;
        if (src.removeEventListener) {
          src.removeEventListener(type, proxy, listener.capture);
        } else {
          if (src.detachEvent) {
            src.detachEvent(detachEvent(type), proxy);
          }
        }
        fd--;
        if (type = encodeURIComponent(src)) {
          completed(type, listener);
          if (0 == type.ke) {
            /** @type {null} */
            type.src = null;
            /** @type {null} */
            src[prop] = null;
          }
        } else {
          removeEventListener(listener);
        }
      }
    }
  };
  /**
   * @param {string} type
   * @return {?}
   */
  var detachEvent = function(type) {
    return type in appenderMap ? appenderMap[type] : appenderMap[type] = "on" + type;
  };
  /**
   * @param {?} key
   * @param {Object} parent
   * @param {boolean} tagName
   * @param {?} id
   * @return {?}
   */
  var make = function(key, parent, tagName, id) {
    /** @type {boolean} */
    var ret = true;
    if (key = encodeURIComponent(key)) {
      if (parent = key.ra[parent.toString()]) {
        parent = parent.concat();
        /** @type {number} */
        key = 0;
        for (;key < parent.length;key++) {
          var node = parent[key];
          if (node) {
            if (node.capture == tagName) {
              if (!node.dd) {
                node = errorHandler(node, id);
                /** @type {boolean} */
                ret = ret && false !== node;
              }
            }
          }
        }
      }
    }
    return ret;
  };
  /**
   * @param {Object} event
   * @param {?} id
   * @return {?}
   */
  var errorHandler = function(event, id) {
    var l = event.listener;
    var who = event.cf || event.src;
    if (event.we) {
      unbind(event);
    }
    return l.call(who, id);
  };
  /**
   * @param {Object} e
   * @param {string} models
   * @return {?}
   */
  var reset = function(e, models) {
    if (e.dd) {
      return true;
    }
    if (!named) {
      var data = models || on("window.event");
      var config = new update(data, this);
      /** @type {boolean} */
      var doCallBack = true;
      if (!(0 > data.keyCode || void 0 != data.returnValue)) {
        a: {
          /** @type {boolean} */
          var node = false;
          if (0 == data.keyCode) {
            try {
              /** @type {number} */
              data.keyCode = -1;
              break a;
            } catch (n) {
              /** @type {boolean} */
              node = true;
            }
          }
          if (node || void 0 == data.returnValue) {
            /** @type {boolean} */
            data.returnValue = true;
          }
        }
        /** @type {Array} */
        data = [];
        node = config.currentTarget;
        for (;node;node = node.parentNode) {
          data.push(node);
        }
        node = e.type;
        /** @type {number} */
        var i = data.length - 1;
        for (;!config.sc && 0 <= i;i--) {
          config.currentTarget = data[i];
          var val = make(data[i], node, true, config);
          doCallBack = doCallBack && val;
        }
        /** @type {number} */
        i = 0;
        for (;!config.sc && i < data.length;i++) {
          config.currentTarget = data[i];
          val = make(data[i], node, false, config);
          doCallBack = doCallBack && val;
        }
      }
      return doCallBack;
    }
    return errorHandler(e, new update(models, this));
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var encodeURIComponent = function(obj) {
    obj = obj[prop];
    return obj instanceof ctor ? obj : null;
  };
  /** @type {string} */
  var protectedFnName = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  /**
   * @param {Object} fn
   * @return {?}
   */
  var eval = function(fn) {
    if (then(fn)) {
      return fn;
    }
    if (!fn[protectedFnName]) {
      /**
       * @param {Object} e
       * @return {?}
       */
      fn[protectedFnName] = function(e) {
        return fn.handleEvent(e);
      };
    }
    return fn[protectedFnName];
  };
  traverseNode(function($timeout) {
    reset = $timeout(reset);
  });
  /**
   * @param {?} v
   * @param {string} ml
   * @return {undefined}
   */
  var p = function(v, ml) {
    this.Nk = v;
    /** @type {string} */
    this.ml = ml;
    if (!this.constructor.Ih) {
      this.constructor.Ih = {};
    }
    this.constructor.Ih[this.toString()] = this;
  };
  /**
   * @return {?}
   */
  p.prototype.Cf = function() {
    return this.toString();
  };
  /**
   * @return {?}
   */
  p.prototype.toString = function() {
    if (!this.jj) {
      /** @type {string} */
      this.jj = this.Nk.Qd + ":" + this.ml;
    }
    return this.jj;
  };
  /**
   * @param {?} handler
   * @param {?} value
   * @return {undefined}
   */
  var wrapped = function(handler, value) {
    p.call(this, handler, value);
  };
  equal(wrapped, p);
  /**
   * @param {?} name
   * @return {undefined}
   */
  var assertOwnProperty = function(name) {
    nameToAliasesMap.hasOwnProperty(name);
    this.Qd = name;
    nameToAliasesMap[name] = this;
  };
  var nameToAliasesMap;
  nameToAliasesMap = {};
  new assertOwnProperty("lib");
  /**
   * @param {Object} array
   * @return {?}
   */
  var uniq = function(array) {
    return function() {
      return array;
    };
  };
  var taskComplete = uniq(true);
  var v1 = uniq(null);
  /**
   * @param {?} value
   * @param {number} t
   * @param {number} dy
   * @return {?}
   */
  var transform = function(value, t, dy) {
    return Math.min(Math.max(value, t), dy);
  };
  var delimiterCode = "StopIteration" in win ? win.StopIteration : {
    message : "StopIteration",
    stack : ""
  };
  /**
   * @return {undefined}
   */
  var Stream = function() {
  };
  /**
   * @return {?}
   */
  Stream.prototype.next = function() {
    throw delimiterCode;
  };
  /**
   * @return {?}
   */
  Stream.prototype.pd = function() {
    return this;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var flush = function(data) {
    if (data instanceof Stream) {
      return data;
    }
    if ("function" == typeof data.pd) {
      return data.pd(false);
    }
    if (append(data)) {
      /** @type {number} */
      var pos = 0;
      var stream = new Stream;
      /**
       * @return {?}
       */
      stream.next = function() {
        for (;;) {
          if (pos >= data.length) {
            throw delimiterCode;
          }
          if (pos in data) {
            return data[pos++];
          }
          pos++;
        }
      };
      return stream;
    }
    throw Error("Not implemented");
  };
  /**
   * @param {?} results
   * @param {Function} opt_obj2
   * @return {undefined}
   */
  var populate = function(results, opt_obj2) {
    if (append(results)) {
      try {
        slice(results, opt_obj2, void 0);
      } catch (c) {
        if (c !== delimiterCode) {
          throw c;
        }
      }
    } else {
      results = flush(results);
      try {
        for (;;) {
          opt_obj2.call(void 0, results.next(), void 0, results);
        }
      } catch (c) {
        if (c !== delimiterCode) {
          throw c;
        }
      }
    }
  };
  /**
   * @param {Object} value
   * @param {?} m43
   * @return {undefined}
   */
  var Mat4 = function(value, m43) {
    this.U = {};
    /** @type {Array} */
    this.K = [];
    /** @type {number} */
    this.ne = this.O = 0;
    /** @type {number} */
    var argLength = arguments.length;
    if (1 < argLength) {
      if (argLength % 2) {
        throw Error("Uneven number of arguments");
      }
      /** @type {number} */
      var i = 0;
      for (;i < argLength;i += 2) {
        this.set(arguments[i], arguments[i + 1]);
      }
    } else {
      if (value) {
        this.addAll(value);
      }
    }
  };
  c = Mat4.prototype;
  /**
   * @return {?}
   */
  c.$ = function() {
    return this.O;
  };
  /**
   * @return {?}
   */
  c.na = function() {
    inject(this);
    /** @type {Array} */
    var eventPath = [];
    /** @type {number} */
    var conditionIndex = 0;
    for (;conditionIndex < this.K.length;conditionIndex++) {
      eventPath.push(this.U[this.K[conditionIndex]]);
    }
    return eventPath;
  };
  /**
   * @return {?}
   */
  c.Ca = function() {
    inject(this);
    return this.K.concat();
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.cc = function(name) {
    return hasOwnProperty(this.U, name);
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return 0 == this.O;
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    this.U = {};
    /** @type {number} */
    this.ne = this.O = this.K.length = 0;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.remove = function(name) {
    return hasOwnProperty(this.U, name) ? (delete this.U[name], this.O--, this.ne++, this.K.length > 2 * this.O && inject(this), true) : false;
  };
  /**
   * @param {?} self
   * @return {undefined}
   */
  var inject = function(self) {
    var len;
    var i;
    if (self.O != self.K.length) {
      /** @type {number} */
      len = i = 0;
      for (;i < self.K.length;) {
        var type = self.K[i];
        if (hasOwnProperty(self.U, type)) {
          self.K[len++] = type;
        }
        i++;
      }
      /** @type {number} */
      self.K.length = len;
    }
    if (self.O != self.K.length) {
      var special = {};
      /** @type {number} */
      len = i = 0;
      for (;i < self.K.length;) {
        type = self.K[i];
        if (!hasOwnProperty(special, type)) {
          self.K[len++] = type;
          /** @type {number} */
          special[type] = 1;
        }
        i++;
      }
      /** @type {number} */
      self.K.length = len;
    }
  };
  c = Mat4.prototype;
  /**
   * @param {string} name
   * @param {?} attr
   * @return {?}
   */
  c.get = function(name, attr) {
    return hasOwnProperty(this.U, name) ? this.U[name] : attr;
  };
  /**
   * @param {string} name
   * @param {?} attr
   * @return {undefined}
   */
  c.set = function(name, attr) {
    if (!hasOwnProperty(this.U, name)) {
      this.O++;
      this.K.push(name);
      this.ne++;
    }
    this.U[name] = attr;
  };
  /**
   * @param {Object} values
   * @return {undefined}
   */
  c.addAll = function(values) {
    if (values instanceof Mat4) {
      var codeSegments = values.Ca();
      values = values.na();
    } else {
      codeSegments = forIn(values);
      values = ref(values);
    }
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      this.set(codeSegments[i], values[i]);
    }
  };
  /**
   * @param {Function} callback
   * @param {?} scope
   * @return {undefined}
   */
  c.forEach = function(callback, scope) {
    var codeSegments = this.Ca();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var res = codeSegments[i];
      var err = this.get(res);
      callback.call(scope, err, res, this);
    }
  };
  /**
   * @return {?}
   */
  c.clone = function() {
    return new Mat4(this);
  };
  /**
   * @return {?}
   */
  c.N = function() {
    inject(this);
    var old = {};
    /** @type {number} */
    var ev = 0;
    for (;ev < this.K.length;ev++) {
      var name = this.K[ev];
      old[name] = this.U[name];
    }
    return old;
  };
  /**
   * @param {boolean} opt_keys
   * @return {?}
   */
  c.pd = function(opt_keys) {
    inject(this);
    /** @type {number} */
    var completed = 0;
    var ne = this.ne;
    var node = this;
    var stream = new Stream;
    /**
     * @return {?}
     */
    stream.next = function() {
      if (ne != node.ne) {
        throw Error("The map has changed since the iterator was created");
      }
      if (completed >= node.K.length) {
        throw delimiterCode;
      }
      var key = node.K[completed++];
      return opt_keys ? key : node.U[key];
    };
    return stream;
  };
  /**
   * @param {?} obj
   * @param {string} keepData
   * @return {?}
   */
  var hasOwnProperty = function(obj, keepData) {
    return Object.prototype.hasOwnProperty.call(obj, keepData);
  };
  /**
   * @param {string} arg
   * @return {?}
   */
  var forEach = function(arg) {
    if (arg.na && "function" == typeof arg.na) {
      return arg.na();
    }
    if (isString(arg)) {
      return arg.split("");
    }
    if (append(arg)) {
      /** @type {Array} */
      var ret = [];
      var valuesLen = arg.length;
      /** @type {number} */
      var i = 0;
      for (;i < valuesLen;i++) {
        ret.push(arg[i]);
      }
      return ret;
    }
    return ref(arg);
  };
  /**
   * @param {?} obj
   * @param {Function} iterator
   * @param {?} context
   * @return {undefined}
   */
  var each = function(obj, iterator, context) {
    if (obj.forEach && "function" == typeof obj.forEach) {
      obj.forEach(iterator, context);
    } else {
      if (append(obj) || isString(obj)) {
        slice(obj, iterator, context);
      } else {
        if (obj.Ca && "function" == typeof obj.Ca) {
          var keys = obj.Ca()
        } else {
          if (obj.na && "function" == typeof obj.na) {
            keys = void 0;
          } else {
            if (append(obj) || isString(obj)) {
              /** @type {Array} */
              keys = [];
              var c = obj.length;
              /** @type {number} */
              var i = 0;
              for (;i < c;i++) {
                keys.push(i);
              }
            } else {
              keys = forIn(obj);
            }
          }
        }
        c = forEach(obj);
        i = c.length;
        /** @type {number} */
        var mid = 0;
        for (;mid < i;mid++) {
          iterator.call(context, c[mid], keys && keys[mid], obj);
        }
      }
    }
  };
  /**
   * @param {Object} matrix
   * @return {undefined}
   */
  var Transform = function(matrix) {
    this.U = new Mat4;
    if (matrix) {
      this.addAll(matrix);
    }
  };
  /**
   * @param {string} val
   * @return {?}
   */
  var _isArray = function(val) {
    /** @type {string} */
    var type = typeof val;
    return "object" == type && val || "function" == type ? "o" + errorCallback(val) : type.substr(0, 1) + val;
  };
  c = Transform.prototype;
  /**
   * @return {?}
   */
  c.$ = function() {
    return this.U.$();
  };
  /**
   * @param {string} val
   * @return {undefined}
   */
  c.add = function(val) {
    this.U.set(_isArray(val), val);
  };
  /**
   * @param {(Array|string)} values
   * @return {undefined}
   */
  c.addAll = function(values) {
    values = forEach(values);
    var valuesLen = values.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      this.add(values[i]);
    }
  };
  /**
   * @param {Object} values
   * @return {undefined}
   */
  c.cd = function(values) {
    values = forEach(values);
    var valuesLen = values.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      this.remove(values[i]);
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.remove = function(name) {
    return this.U.remove(_isArray(name));
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    this.U.clear();
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return this.U.jb();
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.contains = function(name) {
    return this.U.cc(_isArray(name));
  };
  /**
   * @return {?}
   */
  c.na = function() {
    return this.U.na();
  };
  /**
   * @return {?}
   */
  c.clone = function() {
    return new Transform(this);
  };
  /**
   * @return {?}
   */
  c.pd = function() {
    return this.U.pd(false);
  };
  /**
   * @param {?} logFunc
   * @return {undefined}
   */
  var onerror = function(logFunc) {
    /** @type {function (Object, Object, boolean, number, Function): ?} */
    var oldErrorHandler = win.onerror;
    /** @type {boolean} */
    var retVal = false;
    if (member) {
      if (!apply("535.3")) {
        /** @type {boolean} */
        retVal = !retVal;
      }
    }
    /**
     * @param {Object} obj
     * @param {Object} expectedNumberOfNonCommentArgs
     * @param {boolean} deepDataAndEvents
     * @param {number} linerNr
     * @param {Function} opt_error
     * @return {?}
     */
    win.onerror = function(obj, expectedNumberOfNonCommentArgs, deepDataAndEvents, linerNr, opt_error) {
      if (oldErrorHandler) {
        oldErrorHandler(obj, expectedNumberOfNonCommentArgs, deepDataAndEvents, linerNr, opt_error);
      }
      logFunc({
        message : obj,
        fileName : expectedNumberOfNonCommentArgs,
        Jk : deepDataAndEvents,
        pg : linerNr,
        /** @type {Function} */
        error : opt_error
      });
      return retVal;
    };
  };
  /**
   * @param {string} opt_depth
   * @return {?}
   */
  var stringify = function(opt_depth) {
    /** @type {function (string): ?} */
    var s = stringify;
    /** @type {Error} */
    var error = Error();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, s);
      /** @type {string} */
      s = String(error.stack);
    } else {
      try {
        throw error;
      } catch (err) {
        error = err;
      }
      /** @type {(null|string)} */
      s = (s = error.stack) ? String(s) : null;
    }
    if (s) {
      return s;
    }
    /** @type {Array} */
    s = [];
    /** @type {(Function|null)} */
    error = arguments.callee.caller;
    /** @type {number} */
    var depth = 0;
    for (;error && (!opt_depth || depth < opt_depth);) {
      s.push(encode(error));
      s.push("()\n");
      try {
        /** @type {(Function|null)} */
        error = error.caller;
      } catch (e) {
        s.push("[exception trying to get caller]\n");
        break;
      }
      depth++;
      if (50 <= depth) {
        s.push("[...long stack...]");
        break;
      }
    }
    if (opt_depth && depth >= opt_depth) {
      s.push("[...reached max depth limit...]");
    } else {
      s.push("[end]");
    }
    return s.join("");
  };
  /**
   * @param {string} name
   * @return {?}
   */
  var encode = function(name) {
    if (header[name]) {
      return header[name];
    }
    /** @type {string} */
    name = String(name);
    if (!header[name]) {
      /** @type {(Array.<string>|null)} */
      var value = /function ([^\(]+)/.exec(name);
      /** @type {string} */
      header[name] = value ? value[1] : "[Anonymous]";
    }
    return header[name];
  };
  var header = {};
  /**
   * @return {undefined}
   */
  var model = function() {
    props.call(this);
    this.tb = new ctor(this);
    this.wj = this;
    /** @type {null} */
    this.rf = null;
  };
  equal(model, props);
  /** @type {boolean} */
  model.prototype[propertyName] = true;
  c = model.prototype;
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  c.rh = function(dataAndEvents) {
    this.rf = dataAndEvents;
  };
  /**
   * @param {string} type
   * @param {Function} fn
   * @param {boolean} recurring
   * @param {boolean} which
   * @return {undefined}
   */
  c.addEventListener = function(type, fn, recurring, which) {
    addEvent(this, type, fn, recurring, which);
  };
  /**
   * @param {?} type
   * @param {string} callback
   * @param {boolean} recurring
   * @param {Element} dataAndEvents
   * @return {undefined}
   */
  c.removeEventListener = function(type, callback, recurring, dataAndEvents) {
    splice(this, type, callback, recurring, dataAndEvents);
  };
  /**
   * @param {string} event
   * @return {?}
   */
  c.dispatchEvent = function(event) {
    var element = this.rf;
    if (element) {
      /** @type {Array} */
      var ancestors = [];
      /** @type {number} */
      var evt = 1;
      for (;element;element = element.rf) {
        ancestors.push(element);
        ++evt;
      }
    }
    element = this.wj;
    evt = event.type || event;
    if (isString(event)) {
      event = new Event(event, element);
    } else {
      if (event instanceof Event) {
        event.target = event.target || element;
      } else {
        /** @type {string} */
        var rv = event;
        event = new Event(evt, element);
        iterator(event, rv);
      }
    }
    /** @type {boolean} */
    rv = true;
    if (ancestors) {
      /** @type {number} */
      var i = ancestors.length - 1;
      for (;!event.sc && 0 <= i;i--) {
        var typePattern = event.currentTarget = ancestors[i];
        rv = handleEvent(typePattern, evt, true, event) && rv;
      }
    }
    if (!event.sc) {
      typePattern = event.currentTarget = element;
      rv = handleEvent(typePattern, evt, true, event) && rv;
      if (!event.sc) {
        rv = handleEvent(typePattern, evt, false, event) && rv;
      }
    }
    if (ancestors) {
      /** @type {number} */
      i = 0;
      for (;!event.sc && i < ancestors.length;i++) {
        typePattern = event.currentTarget = ancestors[i];
        rv = handleEvent(typePattern, evt, false, event) && rv;
      }
    }
    return rv;
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    model.b.l.call(this);
    if (this.tb) {
      this.tb.cd(void 0);
    }
    /** @type {null} */
    this.rf = null;
  };
  /**
   * @param {?} src
   * @param {string} type
   * @param {Function} opt_capt
   * @param {boolean} selector
   * @return {?}
   */
  c.listen = function(src, type, opt_capt, selector) {
    return this.tb.add(String(src), type, false, opt_capt, selector);
  };
  /**
   * @param {(boolean|number|string)} value
   * @param {string} type
   * @param {?} result
   * @param {boolean} dest
   * @return {?}
   */
  c.Ea = function(value, type, result, dest) {
    return this.tb.add(String(value), type, true, result, dest);
  };
  /**
   * @param {Object} data
   * @param {string} type
   * @param {?} handler
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  c.Ta = function(data, type, handler, dataAndEvents) {
    return this.tb.remove(String(data), type, handler, dataAndEvents);
  };
  /**
   * @param {?} args
   * @param {(Array|number)} a
   * @param {boolean} recurring
   * @param {string} e
   * @return {?}
   */
  var handleEvent = function(args, a, recurring, e) {
    a = args.tb.ra[String(a)];
    if (!a) {
      return true;
    }
    a = a.concat();
    /** @type {boolean} */
    var rv = true;
    /** @type {number} */
    var i = 0;
    for (;i < a.length;++i) {
      var listener = a[i];
      if (listener && (!listener.dd && listener.capture == recurring)) {
        var listenerFn = listener.listener;
        var listenerHandler = listener.cf || listener.src;
        if (listener.we) {
          completed(args.tb, listener);
        }
        /** @type {boolean} */
        rv = false !== listenerFn.call(listenerHandler, e) && rv;
      }
    }
    return rv && 0 != e.Yi;
  };
  /**
   * @param {?} string
   * @param {string} property
   * @param {boolean} dataAndEvents
   * @param {Element} deepDataAndEvents
   * @return {?}
   */
  model.prototype.Gd = function(string, property, dataAndEvents, deepDataAndEvents) {
    return this.tb.Gd(String(string), property, dataAndEvents, deepDataAndEvents);
  };
  /**
   * @param {?} entityType
   * @param {(RegExp|string)} _args
   * @param {?} db_opts
   * @return {undefined}
   */
  var db = function(entityType, _args, db_opts) {
    this.Ik = db_opts;
    this.Mj = entityType;
    /** @type {(RegExp|string)} */
    this.Af = _args;
    /** @type {number} */
    this.pf = 0;
    /** @type {null} */
    this.df = null;
  };
  /**
   * @return {?}
   */
  db.prototype.get = function() {
    if (0 < this.pf) {
      this.pf--;
      var source = this.df;
      this.df = source.next;
      /** @type {null} */
      source.next = null;
    } else {
      source = this.Mj();
    }
    return source;
  };
  /**
   * @param {string} source
   * @return {undefined}
   */
  db.prototype.put = function(source) {
    this.Af(source);
    if (this.pf < this.Ik) {
      this.pf++;
      source.next = this.df;
      /** @type {string} */
      this.df = source;
    }
  };
  /**
   * @param {?} reason
   * @return {undefined}
   */
  var rethrow = function(reason) {
    win.setTimeout(function() {
      throw reason;
    }, 0);
  };
  /**
   * @param {Function} data
   * @param {Object} properties
   * @return {undefined}
   */
  var instantiate = function(data, properties) {
    /** @type {Function} */
    var source = data;
    if (properties) {
      source = log(data, properties);
    }
    source = valueOf(source);
    if (!then(win.setImmediate) || win.Window && (win.Window.prototype && (!agent_contains("Edge") && win.Window.prototype.setImmediate == win.setImmediate))) {
      if (!eachProp) {
        eachProp = create();
      }
      eachProp(source);
    } else {
      win.setImmediate(source);
    }
  };
  var eachProp;
  /**
   * @return {?}
   */
  var create = function() {
    var Channel = win.MessageChannel;
    if ("undefined" === typeof Channel) {
      if ("undefined" !== typeof window) {
        if (window.postMessage) {
          if (window.addEventListener) {
            if (!agent_contains("Presto")) {
              /**
               * @return {undefined}
               */
              Channel = function() {
                /** @type {Element} */
                var el = document.createElement("IFRAME");
                /** @type {string} */
                el.style.display = "none";
                /** @type {string} */
                el.src = "";
                document.documentElement.appendChild(el);
                var win = el.contentWindow;
                el = win.document;
                el.open();
                el.write("");
                el.close();
                /** @type {string} */
                var messageName = "callImmediate" + Math.random();
                /** @type {string} */
                var url = "file:" == win.location.protocol ? "*" : win.location.protocol + "//" + win.location.host;
                el = log(function(event) {
                  if (("*" == url || event.origin == url) && event.data == messageName) {
                    this.port1.onmessage();
                  }
                }, this);
                win.addEventListener("message", el, false);
                this.port1 = {};
                this.port2 = {
                  /**
                   * @return {undefined}
                   */
                  postMessage : function() {
                    win.postMessage(messageName, url);
                  }
                };
              };
            }
          }
        }
      }
    }
    if ("undefined" !== typeof Channel && (!agent_contains("Trident") && !agent_contains("MSIE"))) {
      var channel = new Channel;
      var node = {};
      var current = node;
      /**
       * @return {undefined}
       */
      channel.port1.onmessage = function() {
        if (isNaN(node.next)) {
          node = node.next;
          var len = node.Oh;
          /** @type {null} */
          node.Oh = null;
          len();
        }
      };
      return function(dataAndEvents) {
        current.next = {
          Oh : dataAndEvents
        };
        current = current.next;
        channel.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(fetchOnlyFunction) {
      /** @type {Element} */
      var s = document.createElement("SCRIPT");
      /**
       * @return {undefined}
       */
      s.onreadystatechange = function() {
        /** @type {null} */
        s.onreadystatechange = null;
        s.parentNode.removeChild(s);
        /** @type {null} */
        s = null;
        fetchOnlyFunction();
        /** @type {null} */
        fetchOnlyFunction = null;
      };
      document.documentElement.appendChild(s);
    } : function(funcToCall) {
      win.setTimeout(funcToCall, 0);
    };
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var valueOf = function(object) {
    return object;
  };
  traverseNode(function(dataAndEvents) {
    /** @type {Function} */
    valueOf = dataAndEvents;
  });
  /**
   * @return {undefined}
   */
  var dialog = function() {
    /** @type {null} */
    this.Uf = this.nd = null;
  };
  var $templateCache = new db(function() {
    return new grid;
  }, function(record) {
    record.reset();
  }, 100);
  /**
   * @param {string} name
   * @param {string} now
   * @return {undefined}
   */
  dialog.prototype.add = function(name, now) {
    var record = $templateCache.get();
    record.set(name, now);
    if (this.Uf) {
      this.Uf.next = record;
    } else {
      this.nd = record;
    }
    this.Uf = record;
  };
  /**
   * @return {?}
   */
  dialog.prototype.remove = function() {
    /** @type {null} */
    var removed = null;
    if (this.nd) {
      removed = this.nd;
      this.nd = this.nd.next;
      if (!this.nd) {
        /** @type {null} */
        this.Uf = null;
      }
      /** @type {null} */
      removed.next = null;
    }
    return removed;
  };
  /**
   * @return {undefined}
   */
  var grid = function() {
    /** @type {null} */
    this.next = this.scope = this.vg = null;
  };
  /**
   * @param {string} name
   * @param {?} attr
   * @return {undefined}
   */
  grid.prototype.set = function(name, attr) {
    /** @type {string} */
    this.vg = name;
    this.scope = attr;
    /** @type {null} */
    this.next = null;
  };
  /**
   * @return {undefined}
   */
  grid.prototype.reset = function() {
    /** @type {null} */
    this.next = this.scope = this.vg = null;
  };
  /**
   * @param {string} elem
   * @param {string} type
   * @return {undefined}
   */
  var enter = function(elem, type) {
    if (!invocationChain) {
      handleStackObject();
    }
    if (!be) {
      invocationChain();
      /** @type {boolean} */
      be = true;
    }
    data_priv.add(elem, type);
  };
  var invocationChain;
  /**
   * @return {undefined}
   */
  var handleStackObject = function() {
    if (-1 != String(win.Promise).indexOf("[native code]")) {
      var promise = win.Promise.resolve(void 0);
      /**
       * @return {undefined}
       */
      invocationChain = function() {
        promise.then(resolved);
      };
    } else {
      /**
       * @return {undefined}
       */
      invocationChain = function() {
        instantiate(resolved);
      };
    }
  };
  /** @type {boolean} */
  var be = false;
  var data_priv = new dialog;
  /**
   * @return {undefined}
   */
  var resolved = function() {
    var value;
    for (;value = data_priv.remove();) {
      try {
        value.vg.call(value.scope);
      } catch (err) {
        rethrow(err);
      }
      $templateCache.put(value);
    }
    /** @type {boolean} */
    be = false;
  };
  /**
   * @param {Function} Promise
   * @return {undefined}
   */
  var deactivate = function(Promise) {
    Promise.prototype.then = Promise.prototype.then;
    /** @type {boolean} */
    Promise.prototype.$goog_Thenable = true;
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var isExtensible = function(object) {
    if (!object) {
      return false;
    }
    try {
      return!!object.$goog_Thenable;
    } catch (b) {
      return false;
    }
  };
  /**
   * @param {Function} next_callback
   * @param {?} next_scope
   * @return {undefined}
   */
  var controller = function(next_callback, next_scope) {
    /** @type {number} */
    this.g = 0;
    this.Y = void 0;
    /** @type {null} */
    this.Dc = this.Gb = this.H = null;
    /** @type {boolean} */
    this.Ue = this.ug = false;
    if (next_callback != noop) {
      try {
        var parentItem = this;
        next_callback.call(next_scope, function(errors) {
          build(parentItem, 2, errors);
        }, function(errors) {
          build(parentItem, 3, errors);
        });
      } catch (errors) {
        build(this, 3, errors);
      }
    }
  };
  /**
   * @return {undefined}
   */
  var sprite = function() {
    /** @type {null} */
    this.next = this.context = this.Xc = this.Td = this.bc = null;
    /** @type {boolean} */
    this.re = false;
  };
  /**
   * @return {undefined}
   */
  sprite.prototype.reset = function() {
    /** @type {null} */
    this.context = this.Xc = this.Td = this.bc = null;
    /** @type {boolean} */
    this.re = false;
  };
  var api = new db(function() {
    return new sprite;
  }, function(record) {
    record.reset();
  }, 100);
  /**
   * @param {?} root
   * @param {?} b
   * @param {Object} a
   * @return {?}
   */
  var insertBefore = function(root, b, a) {
    var that = api.get();
    that.Td = root;
    that.Xc = b;
    /** @type {Object} */
    that.context = a;
    return that;
  };
  /**
   * @param {?} evt
   * @return {?}
   */
  var dispatchEvent = function(evt) {
    if (evt instanceof controller) {
      return evt;
    }
    var result = new controller(noop);
    build(result, 2, evt);
    return result;
  };
  /**
   * @return {?}
   */
  var every = function() {
    return new controller(function(dataAndEvents, iterator) {
      iterator(void 0);
    });
  };
  /**
   * @param {number} value
   * @param {Function} elems
   * @param {Function} fn
   * @return {undefined}
   */
  var access = function(value, elems, fn) {
    if (!unwrap(value, elems, fn, null)) {
      enter(bind(elems, value));
    }
  };
  /**
   * @param {Array} value
   * @return {?}
   */
  var when = function(value) {
    return new controller(function(text, fail) {
      var len = value.length;
      /** @type {Array} */
      var passes = [];
      if (len) {
        /**
         * @param {number} i
         * @param {?} o
         * @return {undefined}
         */
        var callback = function(i, o) {
          len--;
          passes[i] = o;
          if (0 == len) {
            text(passes);
          }
        };
        /**
         * @param {?} value
         * @return {undefined}
         */
        var ok = function(value) {
          fail(value);
        };
        /** @type {number} */
        var fn = 0;
        var obj;
        for (;fn < value.length;fn++) {
          obj = value[fn];
          access(obj, bind(callback, fn), ok);
        }
      } else {
        text(passes);
      }
    });
  };
  /**
   * @return {?}
   */
  var proxy = function() {
    var text;
    var result;
    var app = new controller(function(textAlt, subKey) {
      text = textAlt;
      result = subKey;
    });
    return new Handler(app, text, result);
  };
  /**
   * @param {Function} resolved
   * @param {Function} rejected
   * @param {Object} callback
   * @return {?}
   */
  controller.prototype.then = function(resolved, rejected, callback) {
    return swap(this, then(resolved) ? resolved : null, then(rejected) ? rejected : null, callback);
  };
  deactivate(controller);
  /**
   * @param {string} opt_deepCancel
   * @return {undefined}
   */
  controller.prototype.cancel = function(opt_deepCancel) {
    if (0 == this.g) {
      enter(function() {
        var restoreScript = new A(opt_deepCancel);
        unary(this, restoreScript);
      }, this);
    }
  };
  /**
   * @param {Object} start
   * @param {Object} callback
   * @return {undefined}
   */
  var unary = function(start, callback) {
    if (0 == start.g) {
      if (start.H) {
        var c = start.H;
        if (c.Gb) {
          /** @type {number} */
          var node = 0;
          /** @type {null} */
          var cb = null;
          /** @type {null} */
          var obj = null;
          var o = c.Gb;
          for (;o && (o.re || (node++, o.bc == start && (cb = o), !(cb && 1 < node)));o = o.next) {
            if (!cb) {
              obj = o;
            }
          }
          if (cb) {
            if (0 == c.g && 1 == node) {
              unary(c, callback);
            } else {
              if (obj) {
                node = obj;
                if (node.next == c.Dc) {
                  c.Dc = node;
                }
                node.next = node.next.next;
              } else {
                enqueue(c);
              }
              createEditor(c, cb, 3, callback);
            }
          }
        }
        /** @type {null} */
        start.H = null;
      } else {
        build(start, 3, callback);
      }
    }
  };
  /**
   * @param {Object} data
   * @param {string} key
   * @return {undefined}
   */
  var dataAttr = function(data, key) {
    if (!data.Gb) {
      if (!(2 != data.g && 3 != data.g)) {
        commit(data);
      }
    }
    if (data.Dc) {
      /** @type {string} */
      data.Dc.next = key;
    } else {
      /** @type {string} */
      data.Gb = key;
    }
    /** @type {string} */
    data.Dc = key;
  };
  /**
   * @param {?} elem
   * @param {Function} callback
   * @param {boolean} target
   * @param {Object} that
   * @return {?}
   */
  var swap = function(elem, callback, target, that) {
    var camelKey = insertBefore(null, null, null);
    camelKey.bc = new controller(function(merge, eq) {
      camelKey.Td = callback ? function(elems) {
        try {
          var ret = callback.call(that, elems);
          merge(ret);
        } catch (loose) {
          eq(loose);
        }
      } : merge;
      camelKey.Xc = target ? function(a) {
        try {
          var ret = target.call(that, a);
          if (!isNaN(ret) && a instanceof A) {
            eq(a);
          } else {
            merge(ret);
          }
        } catch (loose) {
          eq(loose);
        }
      } : eq;
    });
    camelKey.bc.H = elem;
    dataAttr(elem, camelKey);
    return camelKey.bc;
  };
  /**
   * @param {Object} errors
   * @return {undefined}
   */
  controller.prototype.nl = function(errors) {
    /** @type {number} */
    this.g = 0;
    build(this, 2, errors);
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  controller.prototype.ol = function(e) {
    /** @type {number} */
    this.g = 0;
    build(this, 3, e);
  };
  /**
   * @param {Object} e
   * @param {number} opt_attributes
   * @param {Object} err
   * @return {undefined}
   */
  var build = function(e, opt_attributes, err) {
    if (0 == e.g) {
      if (e === err) {
        /** @type {number} */
        opt_attributes = 3;
        /** @type {TypeError} */
        err = new TypeError("Promise cannot resolve to itself");
      }
      /** @type {number} */
      e.g = 1;
      if (!unwrap(err, e.nl, e.ol, e)) {
        /** @type {Object} */
        e.Y = err;
        /** @type {number} */
        e.g = opt_attributes;
        /** @type {null} */
        e.H = null;
        commit(e);
        if (!(3 != opt_attributes)) {
          if (!(err instanceof A)) {
            handleError(e, err);
          }
        }
      }
    }
  };
  /**
   * @param {?} value
   * @param {Function} callback
   * @param {Function} reject
   * @param {Object} fn
   * @return {?}
   */
  var unwrap = function(value, callback, reject, fn) {
    if (value instanceof controller) {
      return dataAttr(value, insertBefore(callback || noop, reject || null, fn)), true;
    }
    if (isExtensible(value)) {
      return value.then(callback, reject, fn), true;
    }
    if (replace(value)) {
      try {
        var resolved = value.then;
        if (then(resolved)) {
          return fulfill(value, resolved, callback, reject, fn), true;
        }
      } catch (prevTag) {
        return reject.call(fn, prevTag), true;
      }
    }
    return false;
  };
  /**
   * @param {?} promise
   * @param {Function} resolved
   * @param {Function} value
   * @param {Function} method
   * @param {Object} object
   * @return {undefined}
   */
  var fulfill = function(promise, resolved, value, method, object) {
    /** @type {boolean} */
    var g = false;
    /**
     * @param {?} _
     * @return {undefined}
     */
    var keys = function(_) {
      if (!g) {
        /** @type {boolean} */
        g = true;
        value.call(object, _);
      }
    };
    /**
     * @param {?} args
     * @return {undefined}
     */
    var post = function(args) {
      if (!g) {
        /** @type {boolean} */
        g = true;
        method.call(object, args);
      }
    };
    try {
      resolved.call(promise, keys, post);
    } catch (typePattern) {
      post(typePattern);
    }
  };
  /**
   * @param {Object} head
   * @return {undefined}
   */
  var commit = function(head) {
    if (!head.ug) {
      /** @type {boolean} */
      head.ug = true;
      enter(head.Vj, head);
    }
  };
  /**
   * @param {?} event
   * @return {?}
   */
  var enqueue = function(event) {
    /** @type {null} */
    var orig = null;
    if (event.Gb) {
      orig = event.Gb;
      event.Gb = orig.next;
      /** @type {null} */
      orig.next = null;
    }
    if (!event.Gb) {
      /** @type {null} */
      event.Dc = null;
    }
    return orig;
  };
  /**
   * @return {undefined}
   */
  controller.prototype.Vj = function() {
    var memory;
    for (;memory = enqueue(this);) {
      createEditor(this, memory, this.g, this.Y);
    }
    /** @type {boolean} */
    this.ug = false;
  };
  /**
   * @param {string} path
   * @param {Object} options
   * @param {number} walkers
   * @param {Object} callback
   * @return {undefined}
   */
  var createEditor = function(path, options, walkers, callback) {
    if (3 == walkers && (options.Xc && !options.re)) {
      for (;path && path.Ue;path = path.H) {
        /** @type {boolean} */
        path.Ue = false;
      }
    }
    if (options.bc) {
      /** @type {null} */
      options.bc.H = null;
      connect(options, walkers, callback);
    } else {
      try {
        if (options.re) {
          options.Td.call(options.context);
        } else {
          connect(options, walkers, callback);
        }
      } catch (contentCtr) {
        transition.call(null, contentCtr);
      }
    }
    api.put(options);
  };
  /**
   * @param {Object} options
   * @param {number} obj
   * @param {Object} local
   * @return {undefined}
   */
  var connect = function(options, obj, local) {
    if (2 == obj) {
      options.Td.call(options.context, local);
    } else {
      if (options.Xc) {
        options.Xc.call(options.context, local);
      }
    }
  };
  /**
   * @param {Object} status
   * @param {Object} evt
   * @return {undefined}
   */
  var handleError = function(status, evt) {
    /** @type {boolean} */
    status.Ue = true;
    enter(function() {
      if (status.Ue) {
        transition.call(null, evt);
      }
    });
  };
  /** @type {function (?): undefined} */
  var transition = rethrow;
  /**
   * @param {?} name
   * @return {undefined}
   */
  var A = function(name) {
    assert.call(this, name);
  };
  equal(A, assert);
  /** @type {string} */
  A.prototype.name = "cancel";
  /**
   * @param {?} event
   * @param {Function} resolve
   * @param {Function} reject
   * @return {undefined}
   */
  var Handler = function(event, resolve, reject) {
    this.ad = event;
    /** @type {Function} */
    this.resolve = resolve;
    /** @type {Function} */
    this.reject = reject;
  };
  /**
   * @param {?} descriptor
   * @param {Array} resolver
   * @return {undefined}
   */
  var Promise = function(descriptor, resolver) {
    /** @type {Array} */
    this.Bf = [];
    this.Ii = descriptor;
    this.Zh = resolver || null;
    /** @type {boolean} */
    this.Hd = this.Mc = false;
    this.Y = void 0;
    /** @type {boolean} */
    this.th = this.Bj = this.jg = false;
    /** @type {number} */
    this.Of = 0;
    /** @type {null} */
    this.H = null;
    /** @type {number} */
    this.kg = 0;
  };
  /**
   * @param {string} opt_deepCancel
   * @return {undefined}
   */
  Promise.prototype.cancel = function(opt_deepCancel) {
    if (this.Mc) {
      if (this.Y instanceof Promise) {
        this.Y.cancel();
      }
    } else {
      if (this.H) {
        var parent = this.H;
        delete this.H;
        if (opt_deepCancel) {
          parent.cancel(opt_deepCancel);
        } else {
          parent.kg--;
          if (0 >= parent.kg) {
            parent.cancel();
          }
        }
      }
      if (this.Ii) {
        this.Ii.call(this.Zh, this);
      } else {
        /** @type {boolean} */
        this.th = true;
      }
      if (!this.Mc) {
        opt_deepCancel = new plugin;
        this.fb();
        compute(this, false, opt_deepCancel);
      }
    }
  };
  /**
   * @param {boolean} recurring
   * @param {string} delta
   * @return {undefined}
   */
  Promise.prototype.Xh = function(recurring, delta) {
    /** @type {boolean} */
    this.jg = false;
    compute(this, recurring, delta);
  };
  /**
   * @param {Object} obj
   * @param {boolean} recurring
   * @param {string} delta
   * @return {undefined}
   */
  var compute = function(obj, recurring, delta) {
    /** @type {boolean} */
    obj.Mc = true;
    /** @type {string} */
    obj.Y = delta;
    /** @type {boolean} */
    obj.Hd = !recurring;
    helper(obj);
  };
  /**
   * @return {undefined}
   */
  Promise.prototype.fb = function() {
    if (this.Mc) {
      if (!this.th) {
        throw new module;
      }
      /** @type {boolean} */
      this.th = false;
    }
  };
  /**
   * @param {Object} obj
   * @param {?} func
   * @param {boolean} fn
   * @return {undefined}
   */
  var defer = function(obj, func, fn) {
    obj.Bf.push([func, fn, void 0]);
    if (obj.Mc) {
      helper(obj);
    }
  };
  /**
   * @param {Function} resolved
   * @param {Function} rejected
   * @param {Object} fn
   * @return {?}
   */
  Promise.prototype.then = function(resolved, rejected, fn) {
    var result;
    var cb;
    var promise = new controller(function(subKey, chunk) {
      result = subKey;
      cb = chunk;
    });
    defer(this, result, function(outErr) {
      if (outErr instanceof plugin) {
        promise.cancel();
      } else {
        cb(outErr);
      }
    });
    return promise.then(resolved, rejected, fn);
  };
  deactivate(Promise);
  /**
   * @param {Object} val
   * @return {?}
   */
  var isNull = function(val) {
    return rgb(val.Bf, function(dataAndEvents) {
      return then(dataAndEvents[1]);
    });
  };
  /**
   * @param {Object} elem
   * @return {undefined}
   */
  var helper = function(elem) {
    if (elem.Of && (elem.Mc && isNull(elem))) {
      var value = elem.Of;
      var self = values[value];
      if (self) {
        win.clearTimeout(self.ha);
        delete values[value];
      }
      /** @type {number} */
      elem.Of = 0;
    }
    if (elem.H) {
      elem.H.kg--;
      delete elem.H;
    }
    value = elem.Y;
    /** @type {boolean} */
    var reject = self = false;
    for (;elem.Bf.length && !elem.jg;) {
      var context = elem.Bf.shift();
      var iterator = context[0];
      var tail = context[1];
      context = context[2];
      if (iterator = elem.Hd ? tail : iterator) {
        try {
          var result = iterator.call(context || elem.Zh, value);
          if (isNaN(result)) {
            elem.Hd = elem.Hd && (result == value || result instanceof Error);
            elem.Y = value = result;
          }
          if (isExtensible(value) || "function" === typeof win.Promise && value instanceof win.Promise) {
            /** @type {boolean} */
            reject = true;
            /** @type {boolean} */
            elem.jg = true;
          }
        } catch (config) {
          value = config;
          /** @type {boolean} */
          elem.Hd = true;
          if (!isNull(elem)) {
            /** @type {boolean} */
            self = true;
          }
        }
      }
    }
    elem.Y = value;
    if (reject) {
      result = log(elem.Xh, elem, true);
      reject = log(elem.Xh, elem, false);
      if (value instanceof Promise) {
        defer(value, result, reject);
        /** @type {boolean} */
        value.Bj = true;
      } else {
        value.then(result, reject);
      }
    }
    if (self) {
      value = new Set(value);
      values[value.ha] = value;
      elem.Of = value.ha;
    }
  };
  /**
   * @return {undefined}
   */
  var module = function() {
    assert.call(this);
  };
  equal(module, assert);
  /** @type {string} */
  module.prototype.message = "Deferred has already fired";
  /** @type {string} */
  module.prototype.name = "AlreadyCalledError";
  /**
   * @return {undefined}
   */
  var plugin = function() {
    assert.call(this);
  };
  equal(plugin, assert);
  /** @type {string} */
  plugin.prototype.message = "Deferred was canceled";
  /** @type {string} */
  plugin.prototype.name = "CanceledError";
  /**
   * @param {(RegExp|string)} opt_values
   * @return {undefined}
   */
  var Set = function(opt_values) {
    this.ha = win.setTimeout(log(this.kl, this), 0);
    /** @type {(RegExp|string)} */
    this.Ke = opt_values;
  };
  /**
   * @return {undefined}
   */
  Set.prototype.kl = function() {
    delete values[this.ha];
    throw this.Ke;
  };
  var values = {};
  var fva = new assertOwnProperty("fva");
  new wrapped(fva, 1);
  var pkgName;
  /** @type {boolean} */
  var Pe = !ms || 9 <= Number(sizeAsString);
  var __GCC__INCLUDE_EXTRAS__ = !useKeyPress && !ms || (ms && 9 <= Number(sizeAsString) || useKeyPress && apply("1.9.1"));
  var Re = ms && !apply("9");
  var speed = ms || (err2 || member);
  /**
   * @return {undefined}
   */
  var Test = function() {
    /** @type {string} */
    this.Gf = "";
    this.uj = nodeType;
  };
  /** @type {boolean} */
  Test.prototype.lc = true;
  /**
   * @return {?}
   */
  Test.prototype.kc = function() {
    return this.Gf;
  };
  /**
   * @return {?}
   */
  Test.prototype.toString = function() {
    return "Const{" + this.Gf + "}";
  };
  var nodeType = {};
  /**
   * @param {string} description
   * @return {?}
   */
  var it = function(description) {
    var spec = new Test;
    /** @type {string} */
    spec.Gf = description;
    return spec;
  };
  it("");
  /**
   * @return {undefined}
   */
  var NodeList = function() {
    /** @type {string} */
    this.jh = "";
    this.sj = preferredDoc;
  };
  /** @type {boolean} */
  NodeList.prototype.lc = true;
  var preferredDoc = {};
  /**
   * @return {?}
   */
  NodeList.prototype.kc = function() {
    return this.jh;
  };
  /**
   * @param {string} expected
   * @return {?}
   */
  NodeList.prototype.Ld = function(expected) {
    /** @type {string} */
    this.jh = expected;
    return this;
  };
  /**
   * @return {undefined}
   */
  var Range = function() {
    /** @type {string} */
    this.ih = "";
    this.rj = ObjectExpression;
  };
  /** @type {boolean} */
  Range.prototype.lc = true;
  var ObjectExpression = {};
  /**
   * @param {(Object|string)} test
   * @return {?}
   */
  var some = function(test) {
    test = test instanceof Test && (test.constructor === Test && test.uj === nodeType) ? test.Gf : "type_error:Const";
    return 0 === test.length ? segs : (new Range).Ld(test);
  };
  /**
   * @return {?}
   */
  Range.prototype.kc = function() {
    return this.ih;
  };
  /**
   * @param {?} arg
   * @return {?}
   */
  var isObject = function(arg) {
    if (arg instanceof Range && (arg.constructor === Range && arg.rj === ObjectExpression)) {
      return arg.ih;
    }
    isArray(arg);
    return "type_error:SafeStyleSheet";
  };
  /**
   * @param {string} expected
   * @return {?}
   */
  Range.prototype.Ld = function(expected) {
    /** @type {string} */
    this.ih = expected;
    return this;
  };
  var segs = (new Range).Ld("");
  /**
   * @return {undefined}
   */
  var Buffer = function() {
    /** @type {string} */
    this.kh = "";
    this.vj = radio;
  };
  /** @type {boolean} */
  Buffer.prototype.lc = true;
  /**
   * @return {?}
   */
  Buffer.prototype.kc = function() {
    return this.kh;
  };
  /** @type {boolean} */
  Buffer.prototype.Ng = true;
  /**
   * @return {?}
   */
  Buffer.prototype.Ed = function() {
    return 1;
  };
  /**
   * @param {?} input
   * @return {?}
   */
  var decode = function(input) {
    if (input instanceof Buffer && (input.constructor === Buffer && input.vj === radio)) {
      return input.kh;
    }
    isArray(input);
    return "type_error:TrustedResourceUrl";
  };
  var radio = {};
  /**
   * @return {undefined}
   */
  var Value = function() {
    /** @type {string} */
    this.$c = "";
    this.tj = nativeMap;
  };
  /** @type {boolean} */
  Value.prototype.lc = true;
  /**
   * @return {?}
   */
  Value.prototype.kc = function() {
    return this.$c;
  };
  /** @type {boolean} */
  Value.prototype.Ng = true;
  /**
   * @return {?}
   */
  Value.prototype.Ed = function() {
    return 1;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var register = function(obj) {
    if (obj instanceof Value && (obj.constructor === Value && obj.tj === nativeMap)) {
      return obj.$c;
    }
    isArray(obj);
    return "type_error:SafeUrl";
  };
  var nativeMap = {};
  /**
   * @return {undefined}
   */
  var type = function() {
    /** @type {string} */
    this.$c = "";
    this.qj = nativeIndexOf;
    /** @type {null} */
    this.bi = null;
  };
  /** @type {boolean} */
  type.prototype.Ng = true;
  /**
   * @return {?}
   */
  type.prototype.Ed = function() {
    return this.bi;
  };
  /** @type {boolean} */
  type.prototype.lc = true;
  /**
   * @return {?}
   */
  type.prototype.kc = function() {
    return this.$c;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var _fn = function(obj) {
    if (obj instanceof type && (obj.constructor === type && obj.qj === nativeIndexOf)) {
      return obj.$c;
    }
    isArray(obj);
    return "type_error:SafeHtml";
  };
  /**
   * @param {number} obj
   * @return {?}
   */
  var cloneNode = function(obj) {
    if (obj instanceof type) {
      return obj;
    }
    /** @type {null} */
    var recurring = null;
    if (obj.Ng) {
      recurring = obj.Ed();
    }
    return search($(obj.lc ? obj.kc() : String(obj)), recurring);
  };
  /**
   * @param {?} method
   * @return {?}
   */
  var sync = function(method) {
    /** @type {number} */
    var recurring = 0;
    /** @type {string} */
    var name = "";
    /**
     * @param {number} node
     * @return {undefined}
     */
    var compile = function(node) {
      if (join(node)) {
        slice(node, compile);
      } else {
        node = cloneNode(node);
        name += _fn(node);
        node = node.Ed();
        if (0 == recurring) {
          /** @type {number} */
          recurring = node;
        } else {
          if (0 != node) {
            if (recurring != node) {
              /** @type {null} */
              recurring = null;
            }
          }
        }
      }
    };
    slice(arguments, compile);
    return search(name, recurring);
  };
  var nativeIndexOf = {};
  /**
   * @param {string} expected
   * @param {number} recurring
   * @return {?}
   */
  var search = function(expected, recurring) {
    return(new type).Ld(expected, recurring);
  };
  /**
   * @param {string} expected
   * @param {string} recurring
   * @return {?}
   */
  type.prototype.Ld = function(expected, recurring) {
    /** @type {string} */
    this.$c = expected;
    /** @type {string} */
    this.bi = recurring;
    return this;
  };
  search("<!DOCTYPE html>", 0);
  search("", 0);
  var field = search("<br>", 0);
  /**
   * @param {number} x
   * @param {?} y
   * @return {undefined}
   */
  var Rect = function(x, y) {
    this.x = isNaN(x) ? x : 0;
    this.y = isNaN(y) ? y : 0;
  };
  c = Rect.prototype;
  /**
   * @return {?}
   */
  c.clone = function() {
    return new Rect(this.x, this.y);
  };
  /**
   * @return {?}
   */
  c.floor = function() {
    /** @type {number} */
    this.x = Math.floor(this.x);
    /** @type {number} */
    this.y = Math.floor(this.y);
    return this;
  };
  /**
   * @return {?}
   */
  c.round = function() {
    /** @type {number} */
    this.x = Math.round(this.x);
    /** @type {number} */
    this.y = Math.round(this.y);
    return this;
  };
  /**
   * @param {Object} v
   * @param {number} d
   * @return {?}
   */
  c.translate = function(v, d) {
    if (v instanceof Rect) {
      this.x += v.x;
      this.y += v.y;
    } else {
      this.x += Number(v);
      if (scale(d)) {
        this.y += d;
      }
    }
    return this;
  };
  /**
   * @param {number} x
   * @param {number} d
   * @return {?}
   */
  c.scale = function(x, d) {
    var result = scale(d) ? d : x;
    this.x *= x;
    this.y *= result;
    return this;
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  var clone = function(dataAndEvents, deepDataAndEvents) {
    this.width = dataAndEvents;
    this.height = deepDataAndEvents;
  };
  c = clone.prototype;
  /**
   * @return {?}
   */
  c.clone = function() {
    return new clone(this.width, this.height);
  };
  /**
   * @return {?}
   */
  c.zj = function() {
    return this.width * this.height;
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return!this.zj();
  };
  /**
   * @return {?}
   */
  c.floor = function() {
    /** @type {number} */
    this.width = Math.floor(this.width);
    /** @type {number} */
    this.height = Math.floor(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  c.round = function() {
    /** @type {number} */
    this.width = Math.round(this.width);
    /** @type {number} */
    this.height = Math.round(this.height);
    return this;
  };
  /**
   * @param {number} sx
   * @param {number} opt_sy
   * @return {?}
   */
  c.scale = function(sx, opt_sy) {
    var sy = scale(opt_sy) ? opt_sy : sx;
    this.width *= sx;
    this.height *= sy;
    return this;
  };
  /**
   * @param {string} obj
   * @return {?}
   */
  var dealoc = function(obj) {
    return obj ? new CustomEvent(isElement(obj)) : hasMembers || (hasMembers = new CustomEvent);
  };
  /**
   * @param {string} name
   * @return {?}
   */
  var getEl = function(name) {
    return isString(name) ? document.getElementById(name) : name;
  };
  /**
   * @param {string} className
   * @param {Object} selector
   * @return {?}
   */
  var find = function(className, selector) {
    var parent = selector || document;
    return parent.querySelectorAll && parent.querySelector ? parent.querySelectorAll("." + className) : remove(document, "*", className, selector);
  };
  /**
   * @param {string} id
   * @param {?} opt_attributes
   * @return {?}
   */
  var getById = function(id, opt_attributes) {
    var parent = opt_attributes || document;
    return(parent.getElementsByClassName ? parent.getElementsByClassName(id)[0] : parent.querySelectorAll && parent.querySelector ? parent.querySelector("." + id) : remove(document, "*", id, opt_attributes)[0]) || null;
  };
  /**
   * @param {Object} element
   * @param {Object} value
   * @param {Object} selector
   * @param {Object} sel
   * @return {?}
   */
  var remove = function(element, value, selector, sel) {
    element = sel || element;
    /** @type {string} */
    var tagName = value && "*" != value ? String(value).toUpperCase() : "";
    if (element.querySelectorAll && (element.querySelector && (tagName || selector))) {
      return element.querySelectorAll(tagName + (selector ? "." + selector : ""));
    }
    if (selector && element.getElementsByClassName) {
      sel = element.getElementsByClassName(selector);
      if (tagName) {
        element = {};
        /** @type {number} */
        var i = value = 0;
        var el;
        for (;el = sel[i];i++) {
          if (tagName == el.nodeName) {
            element[value++] = el;
          }
        }
        /** @type {Object} */
        element.length = value;
        return element;
      }
      return sel;
    }
    sel = element.getElementsByTagName(tagName || "*");
    if (selector) {
      element = {};
      /** @type {number} */
      i = value = 0;
      for (;el = sel[i];i++) {
        tagName = el.className;
        if ("function" == typeof tagName.split) {
          if (push(tagName.split(/\s+/), selector)) {
            element[value++] = el;
          }
        }
      }
      /** @type {Object} */
      element.length = value;
      return element;
    }
    return sel;
  };
  /**
   * @param {Element} node
   * @param {Object} obj
   * @return {undefined}
   */
  var setNodeAttributes = function(node, obj) {
    group(obj, function(val, name) {
      if (val) {
        if (val.lc) {
          val = val.kc();
        }
      }
      if ("style" == name) {
        /** @type {Object} */
        node.style.cssText = val;
      } else {
        if ("class" == name) {
          /** @type {Object} */
          node.className = val;
        } else {
          if ("for" == name) {
            /** @type {Object} */
            node.htmlFor = val;
          } else {
            if (names.hasOwnProperty(name)) {
              node.setAttribute(names[name], val);
            } else {
              if (0 == name.lastIndexOf("aria-", 0) || 0 == name.lastIndexOf("data-", 0)) {
                node.setAttribute(name, val);
              } else {
                /** @type {Object} */
                node[name] = val;
              }
            }
          }
        }
      }
    });
  };
  var names = {
    cellpadding : "cellPadding",
    cellspacing : "cellSpacing",
    colspan : "colSpan",
    frameborder : "frameBorder",
    height : "height",
    maxlength : "maxLength",
    nonce : "nonce",
    role : "role",
    rowspan : "rowSpan",
    type : "type",
    usemap : "useMap",
    valign : "vAlign",
    width : "width"
  };
  /**
   * @param {Object} doc
   * @return {?}
   */
  var getWindowSize = function(doc) {
    doc = doc.document;
    doc = has(doc) ? doc.documentElement : doc.body;
    return new clone(doc.clientWidth, doc.clientHeight);
  };
  /**
   * @param {Object} doc
   * @return {?}
   */
  var stop = function(doc) {
    var el = doc.scrollingElement ? doc.scrollingElement : !member && has(doc) ? doc.documentElement : doc.body || doc.documentElement;
    doc = doc.parentWindow || doc.defaultView;
    return ms && (apply("10") && doc.pageYOffset != el.scrollTop) ? new Rect(el.scrollLeft, el.scrollTop) : new Rect(doc.pageXOffset || el.scrollLeft, doc.pageYOffset || el.scrollTop);
  };
  /**
   * @param {boolean} doc
   * @return {?}
   */
  var offset = function(doc) {
    return doc ? doc.parentWindow || doc.defaultView : window;
  };
  /**
   * @param {string} item
   * @param {?} v00
   * @param {?} arr
   * @return {?}
   */
  var _indexOf = function(item, v00, arr) {
    return tick(document, arguments);
  };
  /**
   * @param {Document} t
   * @param {Object} callback
   * @return {?}
   */
  var tick = function(t, callback) {
    /** @type {string} */
    var ret = String(callback[0]);
    var s = callback[1];
    if (!Pe && (s && (s.name || s.type))) {
      /** @type {Array} */
      ret = ["<", ret];
      if (s.name) {
        ret.push(' name="', $(s.name), '"');
      }
      if (s.type) {
        ret.push(' type="', $(s.type), '"');
        var x = {};
        iterator(x, s);
        delete x.type;
        s = x;
      }
      ret.push(">");
      /** @type {string} */
      ret = ret.join("");
    }
    ret = t.createElement(ret);
    if (s) {
      if (isString(s)) {
        ret.className = s;
      } else {
        if (join(s)) {
          ret.className = s.join(" ");
        } else {
          setNodeAttributes(ret, s);
        }
      }
    }
    if (2 < callback.length) {
      iterate(t, ret, callback);
    }
    return ret;
  };
  /**
   * @param {Document} context
   * @param {Node} parent
   * @param {Array} args
   * @return {undefined}
   */
  var iterate = function(context, parent, args) {
    /**
     * @param {string} v
     * @return {undefined}
     */
    function iterator(v) {
      if (v) {
        parent.appendChild(isString(v) ? context.createTextNode(v) : v);
      }
    }
    /** @type {number} */
    var i = 2;
    for (;i < args.length;i++) {
      var value = args[i];
      if (!append(value) || replace(value) && 0 < value.nodeType) {
        iterator(value);
      } else {
        slice(makeArray(value) ? map(value) : value, iterator);
      }
    }
  };
  /**
   * @param {Document} state
   * @return {?}
   */
  var has = function(state) {
    return "CSS1Compat" == state.compatMode;
  };
  /**
   * @param {?} element
   * @return {undefined}
   */
  var removeEvent = function(element) {
    var child;
    for (;child = element.firstChild;) {
      element.removeChild(child);
    }
  };
  /**
   * @param {?} child
   * @return {undefined}
   */
  var removeChild = function(child) {
    if (child) {
      if (child.parentNode) {
        child.parentNode.removeChild(child);
      }
    }
  };
  /**
   * @param {Element} element
   * @return {?}
   */
  var matches = function(element) {
    return __GCC__INCLUDE_EXTRAS__ && void 0 != element.children ? element.children : toArray(element.childNodes, function(dest) {
      return 1 == dest.nodeType;
    });
  };
  /**
   * @param {Node} element
   * @return {?}
   */
  var select = function(element) {
    return isNaN(element.firstElementChild) ? element.firstElementChild : skipEmptyTextNodes(element.firstChild, true);
  };
  /**
   * @param {Node} element
   * @return {?}
   */
  var focus = function(element) {
    return isNaN(element.lastElementChild) ? element.lastElementChild : skipEmptyTextNodes(element.lastChild, false);
  };
  /**
   * @param {Object} node
   * @param {boolean} forwards
   * @return {?}
   */
  var skipEmptyTextNodes = function(node, forwards) {
    for (;node && 1 != node.nodeType;) {
      node = forwards ? node.nextSibling : node.previousSibling;
    }
    return node;
  };
  /**
   * @param {string} parent
   * @param {Object} descendant
   * @return {?}
   */
  var contains = function(parent, descendant) {
    if (!parent || !descendant) {
      return false;
    }
    if (parent.contains && 1 == descendant.nodeType) {
      return parent == descendant || parent.contains(descendant);
    }
    if ("undefined" != typeof parent.compareDocumentPosition) {
      return parent == descendant || !!(parent.compareDocumentPosition(descendant) & 16);
    }
    for (;descendant && parent != descendant;) {
      descendant = descendant.parentNode;
    }
    return descendant == parent;
  };
  /**
   * @param {HTMLElement} obj
   * @return {?}
   */
  var isElement = function(obj) {
    return 9 == obj.nodeType ? obj : obj.ownerDocument || obj.document;
  };
  /**
   * @param {Element} f
   * @return {?}
   */
  var isFunction = function(f) {
    try {
      return f.contentWindow || (f.contentDocument ? offset(f.contentDocument) : null);
    } catch (b) {
    }
    return null;
  };
  /**
   * @param {Node} element
   * @param {string} value
   * @return {undefined}
   */
  var walk = function(element, value) {
    if ("textContent" in element) {
      /** @type {string} */
      element.textContent = value;
    } else {
      if (3 == element.nodeType) {
        /** @type {string} */
        element.data = value;
      } else {
        if (element.firstChild && 3 == element.firstChild.nodeType) {
          for (;element.lastChild != element.firstChild;) {
            element.removeChild(element.lastChild);
          }
          /** @type {string} */
          element.firstChild.data = value;
        } else {
          removeEvent(element);
          element.appendChild(isElement(element).createTextNode(String(value)));
        }
      }
    }
  };
  /**
   * @param {Object} child
   * @return {?}
   */
  var appendChild = function(child) {
    /** @type {Array} */
    var visited = [];
    visit(child, taskComplete, visited, false);
    return visited;
  };
  /**
   * @param {Object} node
   * @param {?} fn
   * @param {Array} visited
   * @param {boolean} emptyGet
   * @return {?}
   */
  var visit = function(node, fn, visited, emptyGet) {
    if (null != node) {
      node = node.firstChild;
      for (;node;) {
        if (fn(node) && (visited.push(node), emptyGet) || visit(node, fn, visited, emptyGet)) {
          return true;
        }
        node = node.nextSibling;
      }
    }
    return false;
  };
  var condition = {
    SCRIPT : 1,
    STYLE : 1,
    HEAD : 1,
    IFRAME : 1,
    OBJECT : 1
  };
  var indices = {
    IMG : " ",
    BR : "\n"
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var size = function(obj) {
    return attr(obj) && inArray(obj);
  };
  /**
   * @param {Element} element
   * @param {boolean} recurring
   * @return {undefined}
   */
  var setAttributes = function(element, recurring) {
    if (recurring) {
      /** @type {number} */
      element.tabIndex = 0;
    } else {
      /** @type {number} */
      element.tabIndex = -1;
      element.removeAttribute("tabIndex");
    }
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var postLink = function(obj) {
    var formatter;
    if ((formatter = "A" == obj.tagName || ("INPUT" == obj.tagName || ("TEXTAREA" == obj.tagName || ("SELECT" == obj.tagName || "BUTTON" == obj.tagName))) ? !obj.disabled && (!attr(obj) || inArray(obj)) : size(obj)) && ms) {
      obj = !then(obj.getBoundingClientRect) || ms && null == obj.parentElement ? {
        height : obj.offsetHeight,
        width : obj.offsetWidth
      } : obj.getBoundingClientRect();
      /** @type {boolean} */
      obj = null != obj && (0 < obj.height && 0 < obj.width);
    } else {
      obj = formatter;
    }
    return obj;
  };
  /**
   * @param {Object} elem
   * @return {?}
   */
  var attr = function(elem) {
    return ms && !apply("9") ? (elem = elem.getAttributeNode("tabindex"), null != elem && elem.specified) : elem.hasAttribute("tabindex");
  };
  /**
   * @param {number} elem
   * @return {?}
   */
  var inArray = function(elem) {
    elem = elem.tabIndex;
    return scale(elem) && (0 <= elem && 32768 > elem);
  };
  /**
   * @param {string} el
   * @return {?}
   */
  var getElement = function(el) {
    if (Re && (null !== el && "innerText" in el)) {
      el = el.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    } else {
      /** @type {Array} */
      var UNICODE_SPACES = [];
      replaceElement(el, UNICODE_SPACES, true);
      /** @type {string} */
      el = UNICODE_SPACES.join("");
    }
    el = el.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    el = el.replace(/\u200B/g, "");
    if (!Re) {
      el = el.replace(/ +/g, " ");
    }
    if (" " != el) {
      el = el.replace(/^\s*/, "");
    }
    return el;
  };
  /**
   * @param {Node} el
   * @return {?}
   */
  var spaces = function(el) {
    /** @type {Array} */
    var UNICODE_SPACES = [];
    replaceElement(el, UNICODE_SPACES, false);
    return UNICODE_SPACES.join("");
  };
  /**
   * @param {Node} el
   * @param {Array} S
   * @param {boolean} recurring
   * @return {undefined}
   */
  var replaceElement = function(el, S, recurring) {
    if (!(el.nodeName in condition)) {
      if (3 == el.nodeType) {
        if (recurring) {
          S.push(String(el.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
        } else {
          S.push(el.nodeValue);
        }
      } else {
        if (el.nodeName in indices) {
          S.push(indices[el.nodeName]);
        } else {
          el = el.firstChild;
          for (;el;) {
            replaceElement(el, S, recurring);
            el = el.nextSibling;
          }
        }
      }
    }
  };
  /**
   * @param {Object} results
   * @return {?}
   */
  var makeArray = function(results) {
    if (results && "number" == typeof results.length) {
      if (replace(results)) {
        return "function" == typeof results.item || "string" == typeof results.item;
      }
      if (then(results)) {
        return "function" == typeof results.item;
      }
    }
    return false;
  };
  /**
   * @param {(number|string)} context
   * @return {undefined}
   */
  var CustomEvent = function(context) {
    this.ca = context || (win.document || document);
  };
  c = CustomEvent.prototype;
  /** @type {function (string): ?} */
  c.hc = dealoc;
  /**
   * @param {string} val
   * @return {?}
   */
  c.a = function(val) {
    return isString(val) ? this.ca.getElementById(val) : val;
  };
  /**
   * @param {string} cmd
   * @param {boolean} el
   * @return {?}
   */
  c.getElementsByTagName = function(cmd, el) {
    return(el || this.ca).getElementsByTagName(String(cmd));
  };
  /**
   * @param {string} deepDataAndEvents
   * @param {(number|string)} dataAndEvents
   * @return {?}
   */
  c.Ne = function(deepDataAndEvents, dataAndEvents) {
    return find(deepDataAndEvents, dataAndEvents || this.ca);
  };
  /**
   * @param {string} deepDataAndEvents
   * @param {(number|string)} dataAndEvents
   * @return {?}
   */
  c.Fd = function(deepDataAndEvents, dataAndEvents) {
    return getById(deepDataAndEvents, dataAndEvents || this.ca);
  };
  /**
   * @param {string} m
   * @param {(number|string)} err
   * @return {?}
   */
  c.B = function(m, err) {
    return getById(m, err || this.ca);
  };
  /**
   * @param {boolean} opt_window
   * @return {?}
   */
  c.wb = function(opt_window) {
    opt_window = opt_window || this.getWindow();
    return getWindowSize(opt_window || window);
  };
  /**
   * @param {string} elementName
   * @param {?} opt_attributes
   * @param {?} config
   * @return {?}
   */
  c.C = function(elementName, opt_attributes, config) {
    return tick(this.ca, arguments);
  };
  /**
   * @param {string} el
   * @return {?}
   */
  c.createElement = function(el) {
    return this.ca.createElement(String(el));
  };
  /**
   * @param {string} text
   * @return {?}
   */
  c.createTextNode = function(text) {
    return this.ca.createTextNode(String(text));
  };
  /**
   * @return {?}
   */
  c.getWindow = function() {
    var doc = this.ca;
    return doc.parentWindow || doc.defaultView;
  };
  /**
   * @param {Node} parent
   * @param {Node} child
   * @return {undefined}
   */
  c.appendChild = function(parent, child) {
    parent.appendChild(child);
  };
  /** @type {function (string, Object): ?} */
  c.contains = contains;
  /** @type {function (Object): ?} */
  c.Ug = postLink;
  view("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
  /**
   * @param {Element} elem
   * @param {string} key
   * @param {Object} name
   * @return {undefined}
   */
  var removeClass = function(elem, key, name) {
    if (join(name)) {
      name = name.join(" ");
    }
    /** @type {string} */
    var k = "aria-" + key;
    if ("" === name || void 0 == name) {
      if (!pkgName) {
        pkgName = {
          atomic : false,
          autocomplete : "none",
          dropeffect : "none",
          haspopup : false,
          live : "off",
          multiline : false,
          multiselectable : false,
          orientation : "vertical",
          readonly : false,
          relevant : "additions text",
          required : false,
          sort : "none",
          busy : false,
          disabled : false,
          hidden : false,
          invalid : "false"
        };
      }
      name = pkgName;
      if (key in name) {
        elem.setAttribute(k, name[key]);
      } else {
        elem.removeAttribute(k);
      }
    } else {
      elem.setAttribute(k, name);
    }
  };
  /**
   * @param {Function} fn
   * @param {number} opt_attributes
   * @param {Object} key
   * @return {?}
   */
  var process = function(fn, opt_attributes, key) {
    if (then(fn)) {
      if (key) {
        fn = log(fn, key);
      }
    } else {
      if (fn && "function" == typeof fn.handleEvent) {
        fn = log(fn.handleEvent, fn);
      } else {
        throw Error("Invalid listener argument");
      }
    }
    return 2147483647 < Number(opt_attributes) ? -1 : win.setTimeout(fn, opt_attributes || 0);
  };
  /**
   * @param {?} callback
   * @return {undefined}
   */
  var blur = function(callback) {
    win.clearTimeout(callback);
  };
  /**
   * @param {?} arg1
   * @param {number} arg2
   * @param {?} arg5
   * @return {undefined}
   */
  var foo = function(arg1, arg2, arg5) {
    props.call(this);
    this.ah = arg1;
    this.Ak = arg2 || 0;
    this.yb = arg5;
    this.$b = log(this.Pj, this);
  };
  equal(foo, props);
  c = foo.prototype;
  /** @type {number} */
  c.ha = 0;
  /**
   * @return {undefined}
   */
  c.l = function() {
    foo.b.l.call(this);
    this.stop();
    delete this.ah;
    delete this.yb;
  };
  /**
   * @param {number} id
   * @return {undefined}
   */
  c.start = function(id) {
    this.stop();
    this.ha = process(this.$b, isNaN(id) ? id : this.Ak);
  };
  /**
   * @return {undefined}
   */
  c.stop = function() {
    if (this.Sc()) {
      blur(this.ha);
    }
    /** @type {number} */
    this.ha = 0;
  };
  /**
   * @return {?}
   */
  c.Sc = function() {
    return 0 != this.ha;
  };
  /**
   * @return {undefined}
   */
  c.Pj = function() {
    /** @type {number} */
    this.ha = 0;
    if (this.ah) {
      this.ah.call(this.yb);
    }
  };
  /**
   * @return {undefined}
   */
  var viewName = function() {
    /** @type {number} */
    this.Cc = -1;
  };
  /**
   * @param {?} execResult
   * @param {(Object|boolean|number|string)} reviver
   * @return {undefined}
   */
  var parse = function(execResult, reviver) {
    /** @type {number} */
    this.Cc = 64;
    /** @type {(Array|Uint8Array)} */
    this.ye = win.Uint8Array ? new Uint8Array(this.Cc) : Array(this.Cc);
    /** @type {number} */
    this.Kf = this.Rc = 0;
    /** @type {Array} */
    this.M = [];
    this.Pk = execResult;
    /** @type {(Object|boolean|number|string)} */
    this.xi = reviver;
    /** @type {(Array|Int32Array)} */
    this.sl = win.Int32Array ? new Int32Array(64) : Array(64);
    if (!isNaN(ch)) {
      /** @type {(Array|Int32Array)} */
      ch = win.Int32Array ? new Int32Array(length) : length;
    }
    this.reset();
  };
  var ch;
  equal(parse, viewName);
  var toOverflow = getElementsByTagName(128, whitespace(63));
  /**
   * @return {undefined}
   */
  parse.prototype.reset = function() {
    /** @type {number} */
    this.Kf = this.Rc = 0;
    this.M = win.Int32Array ? new Int32Array(this.xi) : map(this.xi);
  };
  /**
   * @param {Date} first
   * @return {undefined}
   */
  var drawLine = function(first) {
    var x;
    var y;
    var i = first.ye;
    var pos = first.sl;
    /** @type {number} */
    y = x = 0;
    for (;y < i.length;) {
      /** @type {number} */
      pos[x++] = i[y] << 24 | i[y + 1] << 16 | i[y + 2] << 8 | i[y + 3];
      /** @type {number} */
      y = 4 * x;
    }
    /** @type {number} */
    i = 16;
    for (;64 > i;i++) {
      /** @type {number} */
      x = pos[i - 15] | 0;
      /** @type {number} */
      y = (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
      /** @type {number} */
      x = pos[i - 2] | 0;
      /** @type {number} */
      x = (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
      /** @type {number} */
      var type = (pos[i - 16] | 0) + y | 0;
      /** @type {number} */
      var t = (pos[i - 7] | 0) + x | 0;
      /** @type {number} */
      pos[i] = type + t | 0;
    }
    /** @type {number} */
    x = first.M[0] | 0;
    /** @type {number} */
    y = first.M[1] | 0;
    /** @type {number} */
    var z = first.M[2] | 0;
    /** @type {number} */
    var prefix = first.M[3] | 0;
    /** @type {number} */
    var e = first.M[4] | 0;
    /** @type {number} */
    var f = first.M[5] | 0;
    /** @type {number} */
    var g = first.M[6] | 0;
    /** @type {number} */
    type = first.M[7] | 0;
    /** @type {number} */
    i = 0;
    for (;64 > i;i++) {
      /** @type {number} */
      var content = ((x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)) + (x & y ^ x & z ^ y & z) | 0;
      /** @type {number} */
      var queueHooks = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
      /** @type {number} */
      t = e & f ^ ~e & g;
      /** @type {number} */
      type = type + queueHooks | 0;
      /** @type {number} */
      t = t + (ch[i] | 0) | 0;
      /** @type {number} */
      t = type + (t + (pos[i] | 0) | 0) | 0;
      /** @type {number} */
      type = g;
      /** @type {number} */
      g = f;
      /** @type {number} */
      f = e;
      /** @type {number} */
      e = prefix + t | 0;
      /** @type {number} */
      prefix = z;
      /** @type {number} */
      z = y;
      /** @type {number} */
      y = x;
      /** @type {number} */
      x = t + content | 0;
    }
    /** @type {number} */
    first.M[0] = first.M[0] + x | 0;
    /** @type {number} */
    first.M[1] = first.M[1] + y | 0;
    /** @type {number} */
    first.M[2] = first.M[2] + z | 0;
    /** @type {number} */
    first.M[3] = first.M[3] + prefix | 0;
    /** @type {number} */
    first.M[4] = first.M[4] + e | 0;
    /** @type {number} */
    first.M[5] = first.M[5] + f | 0;
    /** @type {number} */
    first.M[6] = first.M[6] + g | 0;
    /** @type {number} */
    first.M[7] = first.M[7] + type | 0;
  };
  /**
   * @param {string} data
   * @param {number} l
   * @return {undefined}
   */
  parse.prototype.update = function(data, l) {
    if (!isNaN(l)) {
      l = data.length;
    }
    /** @type {number} */
    var pos = 0;
    var Rc = this.Rc;
    if (isString(data)) {
      for (;pos < l;) {
        this.ye[Rc++] = data.charCodeAt(pos++);
        if (Rc == this.Cc) {
          drawLine(this);
          /** @type {number} */
          Rc = 0;
        }
      }
    } else {
      if (append(data)) {
        for (;pos < l;) {
          var b = data[pos++];
          if (!("number" == typeof b && (0 <= b && (255 >= b && b == (b | 0))))) {
            throw Error("message must be a byte array");
          }
          /** @type {number} */
          this.ye[Rc++] = b;
          if (Rc == this.Cc) {
            drawLine(this);
            /** @type {number} */
            Rc = 0;
          }
        }
      } else {
        throw Error("message must be string or array");
      }
    }
    this.Rc = Rc;
    this.Kf += l;
  };
  /**
   * @return {?}
   */
  parse.prototype.digest = function() {
    /** @type {Array} */
    var digest = [];
    /** @type {number} */
    var value = 8 * this.Kf;
    if (56 > this.Rc) {
      this.update(toOverflow, 56 - this.Rc);
    } else {
      this.update(toOverflow, this.Cc - (this.Rc - 56));
    }
    /** @type {number} */
    var index = 63;
    for (;56 <= index;index--) {
      /** @type {number} */
      this.ye[index] = value & 255;
      value /= 256;
    }
    drawLine(this);
    /** @type {number} */
    index = value = 0;
    for (;index < this.Pk;index++) {
      /** @type {number} */
      var TAG_CODE_OFFSET = 24;
      for (;0 <= TAG_CODE_OFFSET;TAG_CODE_OFFSET -= 8) {
        /** @type {number} */
        digest[value++] = this.M[index] >> TAG_CODE_OFFSET & 255;
      }
    }
    return digest;
  };
  /** @type {Array} */
  var length = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 
  3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  /**
   * @return {undefined}
   */
  var Matrix = function() {
    parse.call(this, 8, fromIndex);
  };
  equal(Matrix, parse);
  /** @type {Array} */
  var fromIndex = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  /**
   * @param {string} message
   * @return {undefined}
   */
  var logMessage = function(message) {
    if (win.console) {
      if (win.console.timeStamp) {
        win.console.timeStamp(message);
      } else {
        if (win.console.markTimeline) {
          win.console.markTimeline(message);
        }
      }
    }
    if (win.msWriteProfilerMark) {
      win.msWriteProfilerMark(message);
    }
  };
  /**
   * @param {number} b
   * @param {number} d
   * @return {undefined}
   */
  var b = function(b, d) {
    props.call(this);
    /** @type {null} */
    this.ci = this.Yh = null;
    /** @type {number} */
    this.pc = d;
    /** @type {Array} */
    this.da = [];
    if (b > this.pc) {
      throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    }
    /** @type {number} */
    var a = 0;
    for (;a < b;a++) {
      this.da.push(this.qb());
    }
  };
  equal(b, props);
  c = b.prototype;
  /**
   * @return {?}
   */
  c.vb = function() {
    return this.da.length ? this.da.pop() : this.qb();
  };
  /**
   * @param {Object} elem
   * @return {undefined}
   */
  c.zb = function(elem) {
    if (this.da.length < this.pc) {
      this.da.push(elem);
    } else {
      this.dc(elem);
    }
  };
  /**
   * @return {?}
   */
  c.qb = function() {
    return this.Yh ? this.Yh() : {};
  };
  /**
   * @param {Object} val
   * @return {undefined}
   */
  c.dc = function(val) {
    if (this.ci) {
      this.ci(val);
    } else {
      if (replace(val)) {
        if (then(val.qa)) {
          val.qa();
        } else {
          var subProp;
          for (subProp in val) {
            delete val[subProp];
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    b.b.l.call(this);
    var braceStack = this.da;
    for (;braceStack.length;) {
      this.dc(braceStack.pop());
    }
    delete this.da;
  };
  /**
   * @return {undefined}
   */
  var Node = function() {
    /** @type {Array} */
    this.Na = [];
    this.Rb = new Mat4;
    /** @type {number} */
    this.lj = this.Lf = this.Mf = this.Bb = 0;
    this.xc = new Mat4;
    /** @type {number} */
    this.Th = this.Ah = 0;
    /** @type {number} */
    this.Rd = 1;
    this.Ad = new b(0, 4E3);
    /**
     * @return {?}
     */
    this.Ad.qb = function() {
      return new SourceNodeMock;
    };
    this.vh = new b(0, 50);
    /**
     * @return {?}
     */
    this.vh.qb = function() {
      return new GameController;
    };
    var Rd = this;
    this.Jd = new b(0, 2E3);
    /**
     * @return {?}
     */
    this.Jd.qb = function() {
      return String(Rd.Rd++);
    };
    /**
     * @return {undefined}
     */
    this.Jd.dc = function() {
    };
    /** @type {number} */
    this.$h = 3;
  };
  /** @type {number} */
  Node.prototype.cg = 1E3;
  /**
   * @return {undefined}
   */
  var GameController = function() {
    /** @type {number} */
    this.me = this.time = this.count = 0;
  };
  /**
   * @return {?}
   */
  GameController.prototype.toString = function() {
    /** @type {Array} */
    var sb = [];
    sb.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    if (this.me) {
      sb.push(" [VarAlloc = ", this.me, "]");
    }
    return sb.join("");
  };
  /**
   * @return {undefined}
   */
  var SourceNodeMock = function() {
  };
  /**
   * @param {Object} me
   * @param {?} value
   * @param {number} x
   * @param {string} spaceName
   * @return {?}
   */
  var formatNumber = function(me, value, x, spaceName) {
    /** @type {Array} */
    var tagNameArr = [];
    if (-1 == x) {
      tagNameArr.push("    ");
    } else {
      tagNameArr.push(calc(me.Le - x));
    }
    tagNameArr.push(" ", toFixed(me.Le - value));
    if (0 == me.Bd) {
      tagNameArr.push(" Start        ");
    } else {
      if (1 == me.Bd) {
        tagNameArr.push(" Done ");
        tagNameArr.push(calc(me.jl - me.startTime), " ms ");
      } else {
        tagNameArr.push(" Comment      ");
      }
    }
    tagNameArr.push(spaceName, me);
    if (0 < me.je) {
      tagNameArr.push("[VarAlloc ", me.je, "] ");
    }
    return tagNameArr.join("");
  };
  /**
   * @return {?}
   */
  SourceNodeMock.prototype.toString = function() {
    return null == this.type ? this.vd : "[" + this.type + "] " + this.vd;
  };
  /**
   * @param {Object} codeSegments
   * @return {undefined}
   */
  Node.prototype.reset = function(codeSegments) {
    /** @type {Object} */
    this.$h = codeSegments;
    destroy(this);
    this.Rb.clear();
    /** @type {number} */
    this.Bb = random();
    /** @type {number} */
    this.Th = this.Ah = this.lj = this.Lf = this.Mf = 0;
    codeSegments = this.xc.Ca();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var self = this.xc.get(codeSegments[i]);
      /** @type {number} */
      self.count = 0;
      /** @type {number} */
      self.time = 0;
      /** @type {number} */
      self.me = 0;
      this.vh.zb(self);
    }
    this.xc.clear();
  };
  /**
   * @param {?} fn
   * @return {undefined}
   */
  var destroy = function(fn) {
    /** @type {number} */
    var i = 0;
    for (;i < fn.Na.length;i++) {
      var filter = fn.Na[i];
      if (filter.id) {
        fn.Jd.zb(filter.id);
      }
      fn.Ad.zb(filter);
    }
    /** @type {number} */
    fn.Na.length = 0;
  };
  /**
   * @return {?}
   */
  var time = function() {
    var e = that.jm;
    return e && e.isTracing() ? e.totalVarAlloc : -1;
  };
  /**
   * @return {?}
   */
  Node.prototype.toString = function() {
    /** @type {Array} */
    var sb = [];
    /** @type {number} */
    var resultItems = -1;
    /** @type {Array} */
    var b = [];
    /** @type {number} */
    var i = 0;
    for (;i < this.Na.length;i++) {
      var val = this.Na[i];
      if (1 == val.Bd) {
        b.pop();
      }
      sb.push(" ", formatNumber(val, this.Bb, resultItems, b.join("")));
      resultItems = val.Le;
      sb.push("\n");
      if (0 == val.Bd) {
        b.push("|  ");
      }
    }
    if (0 != this.Rb.$()) {
      /** @type {number} */
      var now = random();
      sb.push(" Unstopped timers:\n");
      populate(this.Rb, function(startEvent) {
        sb.push("  ", startEvent, " (", now - startEvent.startTime, " ms, started at ", toFixed(startEvent.startTime), ")\n");
      });
    }
    resultItems = this.xc.Ca();
    /** @type {number} */
    i = 0;
    for (;i < resultItems.length;i++) {
      b = this.xc.get(resultItems[i]);
      if (1 < b.count) {
        sb.push(" TOTAL ", b, "\n");
      }
    }
    sb.push("Total tracers created ", this.Ah, "\n", "Total comments created ", this.Th, "\n", "Overhead start: ", this.Mf, " ms\n", "Overhead end: ", this.Lf, " ms\n", "Overhead comment: ", this.lj, " ms\n");
    return sb.join("");
  };
  /**
   * @param {number} t
   * @return {?}
   */
  var calc = function(t) {
    /** @type {number} */
    t = Math.round(t);
    /** @type {string} */
    var prefix = "";
    if (1E3 > t) {
      /** @type {string} */
      prefix = " ";
    }
    if (100 > t) {
      /** @type {string} */
      prefix = "  ";
    }
    if (10 > t) {
      /** @type {string} */
      prefix = "   ";
    }
    return prefix + t;
  };
  /**
   * @param {number} value
   * @return {?}
   */
  var toFixed = function(value) {
    /** @type {number} */
    value = Math.round(value);
    return String(100 + value / 1E3 % 60).substring(1, 3) + "." + String(1E3 + value % 1E3).substring(1, 4);
  };
  var that = new Node;
  /**
   * @param {?} definition
   * @return {undefined}
   */
  var state = function(definition) {
    props.call(this);
    this.Uj = definition;
    /** @type {boolean} */
    this.ul = true;
    /** @type {boolean} */
    this.Xk = false;
  };
  equal(state, props);
  /** @type {boolean} */
  state.prototype.xj = false;
  /**
   * @param {string} fragment
   * @return {?}
   */
  state.prototype.oj = function(fragment) {
    return once(this, fragment);
  };
  /**
   * @param {?} type
   * @param {boolean} recurring
   * @return {?}
   */
  var requestFileSystem = function(type, recurring) {
    return(recurring ? "__wrapper_" : "__protected_") + errorCallback(type) + "__";
  };
  /**
   * @param {(Error|string)} type
   * @param {string} context
   * @return {?}
   */
  var once = function(type, context) {
    var name = requestFileSystem(type, true);
    if (!context[name]) {
      /** @type {string} */
      (context[name] = definition(type, context))[requestFileSystem(type, false)] = context;
    }
    return context[name];
  };
  /**
   * @param {?} type
   * @param {Function} matcherFunction
   * @return {?}
   */
  var definition = function(type, matcherFunction) {
    var actual;
    var l = type.xj;
    if (l) {
      actual = stringify(15);
    }
    /**
     * @return {?}
     */
    var start = function() {
      if (type.isDisposed()) {
        return matcherFunction.apply(this, arguments);
      }
      if (l) {
        var now = actual;
        /** @type {Array} */
        var buffer = [];
        buffer.push("##PE_STACK_START##");
        buffer.push(now.replace(/(\r\n|\r|\n)/g, "##STACK_BR##"));
        buffer.push("##PE_STACK_END##");
        /** @type {string} */
        buffer = "protectedEntryPoint: " + buffer.join("");
        /** @type {number} */
        now = random();
        var t = time();
        var n = that.Rb.$();
        if (that.Na.length + n > that.cg) {
          if (that.Na.length > that.cg / 2) {
            destroy(that);
          }
          if (n > that.cg / 2) {
            that.Rb.clear();
          }
        }
        logMessage("Start : " + buffer);
        n = that.Ad.vb();
        n.je = t;
        /** @type {number} */
        n.Bd = 0;
        /** @type {number} */
        n.id = Number(that.Jd.vb());
        /** @type {string} */
        n.vd = buffer;
        n.type = void 0;
        that.Na.push(n);
        that.Rb.set(String(n.id), n);
        that.Ah++;
        /** @type {number} */
        buffer = random();
        /** @type {number} */
        n.startTime = n.Le = buffer;
        that.Mf += buffer - now;
        /** @type {number} */
        now = n.id;
      }
      try {
        return matcherFunction.apply(this, arguments);
      } catch (obj) {
        if (!(obj && ("object" === typeof obj && (obj.message && 0 == obj.message.indexOf("Error in protected function: "))) || "string" === typeof obj && 0 == obj.indexOf("Error in protected function: "))) {
          type.Uj(obj);
          if (!type.ul) {
            throw type.Xk && ("object" === typeof obj && (obj && "message" in obj) ? obj.message = "Error in protected function: " + obj.message : obj = "Error in protected function: " + obj), obj;
          }
          throw new onError(obj);
        }
      } finally {
        if (l && (t = now, now = random(), n = that.$h, buffer = that.Rb.get(String(t)), null != buffer)) {
          that.Rb.remove(String(t));
          /** @type {number} */
          t = now - buffer.startTime;
          if (t < n) {
            /** @type {number} */
            n = that.Na.length - 1;
            for (;0 <= n;n--) {
              if (that.Na[n] == buffer) {
                that.Na.splice(n, 1);
                that.Jd.zb(buffer.id);
                that.Ad.zb(buffer);
                break;
              }
            }
          } else {
            var stopEvent = that.Ad.vb();
            /** @type {number} */
            stopEvent.Bd = 1;
            stopEvent.startTime = buffer.startTime;
            stopEvent.vd = buffer.vd;
            stopEvent.type = buffer.type;
            /** @type {number} */
            stopEvent.jl = stopEvent.Le = now;
            that.Na.push(stopEvent);
          }
          n = buffer.type;
          /** @type {null} */
          var ret = null;
          if (n) {
            ret = that;
            var v = ret.xc.get(n);
            if (!v) {
              v = ret.vh.vb();
              v.type = n;
              ret.xc.set(n, v);
            }
            ret = v;
            ret.count++;
            ret.time += t;
          }
          if (stopEvent) {
            logMessage("Stop : " + stopEvent.vd);
            stopEvent.je = time();
            if (ret) {
              ret.me += stopEvent.je - buffer.je;
            }
          }
          /** @type {number} */
          stopEvent = random();
          that.Lf += stopEvent - now;
        }
      }
    };
    /** @type {Function} */
    start[requestFileSystem(type, false)] = matcherFunction;
    return start;
  };
  /**
   * @param {(Error|string)} type
   * @param {string} fnName
   * @return {undefined}
   */
  var hijack = function(type, fnName) {
    var w = on("window");
    var originalFn = w[fnName];
    /**
     * @param {(number|string)} fn
     * @param {?} time
     * @return {?}
     */
    w[fnName] = function(fn, time) {
      if (isString(fn)) {
        fn = bind($goog$globalEval$, fn);
      }
      arguments[0] = fn = once(type, fn);
      if (originalFn.apply) {
        return originalFn.apply(this, arguments);
      }
      /** @type {(number|string)} */
      var _fn = fn;
      if (2 < arguments.length) {
        /** @type {Array.<?>} */
        var newArgs = Array.prototype.slice.call(arguments, 2);
        /**
         * @return {undefined}
         */
        _fn = function() {
          fn.apply(this, newArgs);
        };
      }
      return originalFn(_fn, time);
    };
    w[fnName][requestFileSystem(type, false)] = originalFn;
  };
  /**
   * @return {undefined}
   */
  state.prototype.l = function() {
    var obj = on("window");
    var context = obj.setTimeout;
    context = context[requestFileSystem(this, false)] || context;
    obj.setTimeout = context;
    context = obj.setInterval;
    context = context[requestFileSystem(this, false)] || context;
    obj.setInterval = context;
    state.b.l.call(this);
  };
  /**
   * @param {Object} cause
   * @return {undefined}
   */
  var onError = function(cause) {
    assert.call(this, "Error in protected function: " + (cause && cause.message ? String(cause.message) : String(cause)));
    if (cause = cause && cause.stack) {
      if (isString(cause)) {
        /** @type {Object} */
        this.stack = cause;
      }
    }
  };
  equal(onError, assert);
  /**
   * @return {undefined}
   */
  var exp = function() {
  };
  /** @type {null} */
  exp.prototype.Nh = null;
  /**
   * @param {(Error|string)} callback
   * @return {?}
   */
  var collect = function(callback) {
    var content;
    if (!(content = callback.Nh)) {
      content = {};
      if (makeIterator(callback)) {
        /** @type {boolean} */
        content[0] = true;
        /** @type {boolean} */
        content[1] = true;
      }
      content = callback.Nh = content;
    }
    return content;
  };
  var restoreScript;
  /**
   * @return {undefined}
   */
  var easing = function() {
  };
  equal(easing, exp);
  /**
   * @param {(Error|string)} callback
   * @return {?}
   */
  var _request = function(callback) {
    return(callback = makeIterator(callback)) ? new ActiveXObject(callback) : new XMLHttpRequest;
  };
  /**
   * @param {?} opt_capt
   * @return {?}
   */
  var makeIterator = function(opt_capt) {
    if (!opt_capt.wi && ("undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject)) {
      /** @type {Array} */
      var codeSegments = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        var $candidate = codeSegments[i];
        try {
          return new ActiveXObject($candidate), opt_capt.wi = $candidate;
        } catch (e) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return opt_capt.wi;
  };
  restoreScript = new easing;
  /** @type {RegExp} */
  var href = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  /**
   * @param {string} s
   * @return {?}
   */
  var sanitize = function(s) {
    s = s.match(href)[1] || null;
    if (!s) {
      if (win.self) {
        if (win.self.location) {
          s = win.self.location.protocol;
          s = s.substr(0, s.length - 1);
        }
      }
    }
    return s ? s.toLowerCase() : "";
  };
  /**
   * @param {string} href
   * @return {?}
   */
  var getBase = function(href) {
    var index = href.indexOf("#");
    return 0 > index ? href : href.substr(0, index);
  };
  /**
   * @param {string} qs
   * @param {Function} toString
   * @return {undefined}
   */
  var parseQuery = function(qs, toString) {
    if (qs) {
      var matches = qs.split("&");
      /** @type {number} */
      var i = 0;
      for (;i < matches.length;i++) {
        var indexOfEquals = matches[i].indexOf("=");
        /** @type {null} */
        var param = null;
        if (0 <= indexOfEquals) {
          var str = matches[i].substring(0, indexOfEquals);
          param = matches[i].substring(indexOfEquals + 1);
        } else {
          str = matches[i];
        }
        toString(str, param ? decodeURIComponent(param.replace(/\+/g, " ")) : "");
      }
    }
  };
  /**
   * @param {Array} buffer
   * @return {?}
   */
  var toString = function(buffer) {
    if (buffer[1]) {
      var baseUri = buffer[0];
      var hashIndex = baseUri.indexOf("#");
      if (0 <= hashIndex) {
        buffer.push(baseUri.substr(hashIndex));
        buffer[0] = baseUri = baseUri.substr(0, hashIndex);
      }
      hashIndex = baseUri.indexOf("?");
      if (0 > hashIndex) {
        /** @type {string} */
        buffer[1] = "?";
      } else {
        if (hashIndex == baseUri.length - 1) {
          buffer[1] = void 0;
        }
      }
    }
    return buffer.join("");
  };
  /**
   * @param {string} prefix
   * @param {Object} value
   * @param {Array} text
   * @return {undefined}
   */
  var buildParams = function(prefix, value, text) {
    if (join(value)) {
      /** @type {number} */
      var j = 0;
      for (;j < value.length;j++) {
        buildParams(prefix, String(value[j]), text);
      }
    } else {
      if (null != value) {
        text.push("&", prefix, "" === value ? "" : "=", encodeURIComponent(String(value)));
      }
    }
  };
  /**
   * @param {Array} cur
   * @param {Object} a
   * @param {number} offset
   * @return {?}
   */
  var sibling = function(cur, a, offset) {
    offset = offset || 0;
    for (;offset < a.length;offset += 2) {
      buildParams(a[offset], a[offset + 1], cur);
    }
    return cur;
  };
  /**
   * @param {Array} cur
   * @param {Object} a
   * @return {?}
   */
  var nth = function(cur, a) {
    var prefix;
    for (prefix in a) {
      buildParams(prefix, a[prefix], cur);
    }
    return cur;
  };
  /**
   * @param {?} str
   * @param {string} element
   * @return {?}
   */
  var string = function(str, element) {
    return toString(2 == arguments.length ? sibling([str], arguments[1], 0) : sibling([str], arguments, 1));
  };
  /**
   * @param {?} row_id
   * @return {undefined}
   */
  var item = function(row_id) {
    model.call(this);
    this.headers = new Mat4;
    this.Zf = row_id || null;
    /** @type {boolean} */
    this.Eb = false;
    /** @type {null} */
    this.Yf = this.o = null;
    /** @type {string} */
    this.$g = "";
    /** @type {number} */
    this.Tc = 0;
    /** @type {boolean} */
    this.mc = this.Pg = this.gf = this.tg = false;
    /** @type {number} */
    this.zc = 0;
    /** @type {null} */
    this.Jf = null;
    /** @type {string} */
    this.ae = "";
    /** @type {boolean} */
    this.Ch = this.Zk = this.nb = false;
  };
  equal(item, model);
  /** @type {RegExp} */
  var rchecked = /^https?$/i;
  /** @type {Array} */
  var which = ["POST", "PUT"];
  /** @type {Array} */
  var registry = [];
  /**
   * @return {undefined}
   */
  item.prototype.Ij = function() {
    this.qa();
    fetch(registry, this);
  };
  /**
   * @param {?} rh
   * @return {undefined}
   */
  item.prototype.dj = function(rh) {
    /** @type {number} */
    this.zc = Math.max(0, rh);
  };
  /**
   * @param {string} str
   * @param {string} method
   * @param {string} message
   * @param {(Error|string)} entry
   * @return {undefined}
   */
  item.prototype.send = function(str, method, message, entry) {
    if (this.o) {
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$g + "; newUri=" + str);
    }
    method = method ? method.toUpperCase() : "GET";
    /** @type {string} */
    this.$g = str;
    /** @type {number} */
    this.Tc = 0;
    /** @type {boolean} */
    this.tg = false;
    /** @type {boolean} */
    this.Eb = true;
    this.o = this.Zf ? _request(this.Zf) : _request(restoreScript);
    this.Yf = this.Zf ? collect(this.Zf) : collect(restoreScript);
    this.o.onreadystatechange = log(this.Li, this);
    if (this.Zk) {
      if ("onprogress" in this.o) {
        this.o.onprogress = log(function(walkers) {
          this.Ji(walkers, true);
        }, this);
        if (this.o.upload) {
          this.o.upload.onprogress = log(this.Ji, this);
        }
      }
    }
    try {
      /** @type {boolean} */
      this.Pg = true;
      this.o.open(method, String(str), true);
      /** @type {boolean} */
      this.Pg = false;
    } catch (r20) {
      this.Ke(5, r20);
      return;
    }
    str = message || "";
    var self = this.headers.clone();
    if (entry) {
      each(entry, function(protoProps, optgroup) {
        self.set(optgroup, protoProps);
      });
    }
    entry = print(self.Ca());
    message = win.FormData && str instanceof win.FormData;
    if (!!push(which, method)) {
      if (!entry) {
        if (!message) {
          self.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        }
      }
    }
    self.forEach(function(sValue, name) {
      this.o.setRequestHeader(name, sValue);
    }, this);
    if (this.ae) {
      this.o.responseType = this.ae;
    }
    if ("withCredentials" in this.o) {
      if (this.o.withCredentials !== this.nb) {
        this.o.withCredentials = this.nb;
      }
    }
    try {
      _draw(this);
      if (0 < this.zc) {
        if (this.Ch = sign(this.o)) {
          this.o.timeout = this.zc;
          this.o.ontimeout = log(this.Yb, this);
        } else {
          this.Jf = process(this.Yb, this.zc, this);
        }
      }
      /** @type {boolean} */
      this.gf = true;
      this.o.send(str);
      /** @type {boolean} */
      this.gf = false;
    } catch (rreturn) {
      this.Ke(5, rreturn);
    }
  };
  /**
   * @param {?} config
   * @return {?}
   */
  var sign = function(config) {
    return ms && (apply(9) && (scale(config.timeout) && isNaN(config.ontimeout)));
  };
  /**
   * @param {Object} url
   * @return {?}
   */
  var ajax = function(url) {
    return "content-type" == url.toLowerCase();
  };
  /**
   * @return {undefined}
   */
  item.prototype.Yb = function() {
    if ("undefined" != typeof io) {
      if (this.o) {
        /** @type {number} */
        this.Tc = 8;
        this.dispatchEvent("timeout");
        this.abort(8);
      }
    }
  };
  /**
   * @param {number} opt_attributes
   * @return {undefined}
   */
  item.prototype.Ke = function(opt_attributes) {
    /** @type {boolean} */
    this.Eb = false;
    if (this.o) {
      /** @type {boolean} */
      this.mc = true;
      this.o.abort();
      /** @type {boolean} */
      this.mc = false;
    }
    /** @type {number} */
    this.Tc = opt_attributes;
    respond(this);
    setState(this);
  };
  /**
   * @param {Object} req
   * @return {undefined}
   */
  var respond = function(req) {
    if (!req.tg) {
      /** @type {boolean} */
      req.tg = true;
      req.dispatchEvent("complete");
      req.dispatchEvent("error");
    }
  };
  /**
   * @param {number} opt_attributes
   * @return {undefined}
   */
  item.prototype.abort = function(opt_attributes) {
    if (this.o) {
      if (this.Eb) {
        /** @type {boolean} */
        this.Eb = false;
        /** @type {boolean} */
        this.mc = true;
        this.o.abort();
        /** @type {boolean} */
        this.mc = false;
        this.Tc = opt_attributes || 7;
        this.dispatchEvent("complete");
        this.dispatchEvent("abort");
        setState(this);
      }
    }
  };
  /**
   * @return {undefined}
   */
  item.prototype.l = function() {
    if (this.o) {
      if (this.Eb) {
        /** @type {boolean} */
        this.Eb = false;
        /** @type {boolean} */
        this.mc = true;
        this.o.abort();
        /** @type {boolean} */
        this.mc = false;
      }
      setState(this, true);
    }
    item.b.l.call(this);
  };
  /**
   * @return {undefined}
   */
  item.prototype.Li = function() {
    if (!this.isDisposed()) {
      if (this.Pg || (this.gf || this.mc)) {
        ready(this);
      } else {
        this.dh();
      }
    }
  };
  /**
   * @return {undefined}
   */
  item.prototype.dh = function() {
    ready(this);
  };
  /**
   * @param {Object} req
   * @return {undefined}
   */
  var ready = function(req) {
    if (req.Eb && ("undefined" != typeof io && (!req.Yf[1] || (4 != (req.o ? req.o.readyState : 0) || 2 != parser(req))))) {
      if (req.gf && 4 == (req.o ? req.o.readyState : 0)) {
        process(req.Li, 0, req);
      } else {
        if (req.dispatchEvent("readystatechange"), 4 == (req.o ? req.o.readyState : 0)) {
          /** @type {boolean} */
          req.Eb = false;
          try {
            if (typeOf(req)) {
              req.dispatchEvent("complete");
              req.dispatchEvent("success");
            } else {
              /** @type {number} */
              req.Tc = 6;
              respond(req);
            }
          } finally {
            setState(req);
          }
        }
      }
    }
  };
  /**
   * @param {?} obj
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  item.prototype.Ji = function(obj, dataAndEvents) {
    this.dispatchEvent(updateProgress(obj, "progress"));
    this.dispatchEvent(updateProgress(obj, dataAndEvents ? "downloadprogress" : "uploadprogress"));
  };
  /**
   * @param {Object} event
   * @param {string} evt
   * @return {?}
   */
  var updateProgress = function(event, evt) {
    return{
      type : evt,
      lengthComputable : event.lengthComputable,
      loaded : event.loaded,
      total : event.total
    };
  };
  /**
   * @param {Object} c
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var setState = function(c, dataAndEvents) {
    if (c.o) {
      _draw(c);
      var o = c.o;
      /** @type {(function (): undefined|null)} */
      var lvl = c.Yf[0] ? noop : null;
      /** @type {null} */
      c.o = null;
      /** @type {null} */
      c.Yf = null;
      if (!dataAndEvents) {
        c.dispatchEvent("ready");
      }
      try {
        /** @type {(function (): undefined|null)} */
        o.onreadystatechange = lvl;
      } catch (e) {
      }
    }
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  var _draw = function(c) {
    if (c.o) {
      if (c.Ch) {
        /** @type {null} */
        c.o.ontimeout = null;
      }
    }
    if (scale(c.Jf)) {
      blur(c.Jf);
      /** @type {null} */
      c.Jf = null;
    }
  };
  /**
   * @return {?}
   */
  item.prototype.Sc = function() {
    return!!this.o;
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  var typeOf = function(value) {
    var ret = parser(value);
    a: {
      switch(ret) {
        case 200:
        ;
        case 201:
        ;
        case 202:
        ;
        case 204:
        ;
        case 206:
        ;
        case 304:
        ;
        case 1223:
          /** @type {boolean} */
          var s = true;
          break a;
        default:
          /** @type {boolean} */
          s = false;
      }
    }
    if (!s) {
      if (ret = 0 === ret) {
        value = sanitize(String(value.$g));
        /** @type {boolean} */
        ret = !rchecked.test(value);
      }
      /** @type {boolean} */
      s = ret;
    }
    return s;
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var parser = function(data) {
    try {
      return 2 < (data.o ? data.o.readyState : 0) ? data.o.status : -1;
    } catch (b) {
      return-1;
    }
  };
  traverseNode(function($sanitize) {
    item.prototype.dh = $sanitize(item.prototype.dh);
  });
  /**
   * @param {Error} config
   * @param {(Element|string)} options
   * @param {Object} off
   * @return {undefined}
   */
  var Loader = function(config, options, off) {
    model.call(this);
    this.Wh = options || null;
    /** @type {string} */
    this.Lj = "context.";
    /** @type {null} */
    this.mj = null;
    this.Hh = {};
    /** @type {function (string, string, string, string): undefined} */
    this.vl = declare;
    /** @type {Error} */
    this.uk = config;
    if (!off) {
      if (this.Lc = null, ms && !apply("10")) {
        onerror(log(this.pi, this));
      } else {
        this.Lc = new state(log(this.pi, this));
        hijack(this.Lc, "setTimeout");
        hijack(this.Lc, "setInterval");
        config = this.Lc;
        options = on("window");
        /** @type {Array} */
        off = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
        /** @type {number} */
        var i = 0;
        for (;i < off.length;i++) {
          var fnName = off[i];
          if (off[i] in options) {
            hijack(config, fnName);
          }
        }
        config = this.Lc;
        /** @type {boolean} */
        Lc = true;
        options = log(config.oj, config);
        /** @type {number} */
        off = 0;
        for (;off < buf.length;off++) {
          buf[off](options);
        }
        codeSegments.push(config);
      }
    }
  };
  equal(Loader, model);
  /**
   * @param {Function} err
   * @param {Object} context
   * @return {undefined}
   */
  var after = function(err, context) {
    Event.call(this, "c");
    /** @type {Function} */
    this.error = err;
    /** @type {Object} */
    this.context = context;
  };
  equal(after, Event);
  /**
   * @return {undefined}
   */
  var splitPrefix = function() {
    new Loader("/recaptcha/api2/jserrorlogging", void 0, void 0);
  };
  /**
   * @param {string} value
   * @param {string} options
   * @param {string} name
   * @param {string} content
   * @return {undefined}
   */
  var declare = function(value, options, name, content) {
    var instance = new item;
    registry.push(instance);
    instance.Ea("ready", instance.Ij);
    instance.send(value, options, name, content);
  };
  /**
   * @param {Object} e
   * @param {boolean} elements
   * @return {undefined}
   */
  Loader.prototype.pi = function(e, elements) {
    var error = on("window.location.href");
    if (isString(e)) {
      error = {
        message : e,
        name : "Unknown error",
        lineNumber : "Not available",
        fileName : error,
        stack : "Not available"
      };
    } else {
      /** @type {boolean} */
      var result = false;
      try {
        var attrs = e.lineNumber || (e.Jk || "Not available");
      } catch (v) {
        /** @type {string} */
        attrs = "Not available";
        /** @type {boolean} */
        result = true;
      }
      try {
        var trace = e.fileName || (e.filename || (e.sourceURL || (win.$googDebugFname || error)));
      } catch (v) {
        /** @type {string} */
        trace = "Not available";
        /** @type {boolean} */
        result = true;
      }
      error = !result && (e.lineNumber && (e.fileName && (e.stack && (e.message && e.name)))) ? e : {
        message : e.message || "Not available",
        name : e.name || "UnknownError",
        lineNumber : attrs,
        fileName : trace,
        stack : e.stack || "Not available"
      };
    }
    attrs = elements ? MAP(elements) : {};
    if (this.Wh) {
      try {
        this.Wh(error, attrs);
      } catch (v) {
      }
    }
    result = error.message.substring(0, 1900);
    if (!(e instanceof assert) || e.$k) {
      /** @type {string} */
      trace = error.stack;
      try {
        var requestUrl = string(this.uk, "script", error.fileName, "error", result, "line", error.lineNumber);
        if (!containsMatch(this.Hh)) {
          requestUrl = toString(nth([requestUrl], this.Hh));
        }
        result = {};
        /** @type {string} */
        result.trace = trace;
        if (attrs) {
          var attr;
          for (attr in attrs) {
            result[this.Lj + attr] = attrs[attr];
          }
        }
        var parts = nth([], result);
        /** @type {string} */
        parts[0] = "";
        var name = parts.join("");
        if (scale(this.mj)) {
          name = name.substring(0, this.mj);
        }
        this.vl(requestUrl, "POST", name, this.em);
      } catch (v) {
      }
    }
    try {
      this.dispatchEvent(new after(error, attrs));
    } catch (v) {
    }
  };
  /**
   * @return {undefined}
   */
  Loader.prototype.l = function() {
    end(this.Lc);
    Loader.b.l.call(this);
  };
  /**
   * @param {Object} el
   * @return {?}
   */
  var classes = function(el) {
    if (el.classList) {
      return el.classList;
    }
    el = el.className;
    return isString(el) && el.match(/\S+/g) || [];
  };
  /**
   * @param {Element} el
   * @param {string} name
   * @return {?}
   */
  var hasClass = function(el, name) {
    return el.classList ? el.classList.contains(name) : push(classes(el), name);
  };
  /**
   * @param {Node} element
   * @param {string} className
   * @return {undefined}
   */
  var addClass = function(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!hasClass(element, className)) {
        element.className += 0 < element.className.length ? " " + className : className;
      }
    }
  };
  /**
   * @param {Element} element
   * @param {?} c
   * @return {undefined}
   */
  var toggleClass = function(element, c) {
    if (element.classList) {
      slice(c, function(newC) {
        addClass(element, newC);
      });
    } else {
      var classMap = {};
      slice(classes(element), function(className) {
        /** @type {boolean} */
        classMap[className] = true;
      });
      slice(c, function(className) {
        /** @type {boolean} */
        classMap[className] = true;
      });
      /** @type {string} */
      element.className = "";
      var className;
      for (className in classMap) {
        element.className += 0 < element.className.length ? " " + className : className;
      }
    }
  };
  /**
   * @param {Element} el
   * @param {string} className
   * @return {undefined}
   */
  var _hasClass = function(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      if (hasClass(el, className)) {
        el.className = toArray(classes(el), function(c) {
          return c != className;
        }).join(" ");
      }
    }
  };
  /**
   * @param {Element} el
   * @param {?} result
   * @return {undefined}
   */
  var highlight = function(el, result) {
    if (el.classList) {
      slice(result, function(clazz) {
        _hasClass(el, clazz);
      });
    } else {
      el.className = toArray(classes(el), function(walkers) {
        return!push(result, walkers);
      }).join(" ");
    }
  };
  /**
   * @param {Element} el
   * @param {string} until
   * @return {undefined}
   */
  var dir = function(el, until) {
    if ("FORM" == el.tagName) {
      var els = el.elements;
      /** @type {number} */
      var i = 0;
      for (;el = els[i];i++) {
        dir(el, until);
      }
    } else {
      if (1 == until) {
        el.blur();
      }
      /** @type {string} */
      el.disabled = until;
    }
  };
  /**
   * @param {number} a
   * @param {number} str
   * @param {boolean} b
   * @param {boolean} v
   * @param {string} displayed
   * @param {boolean} opts
   * @return {?}
   */
  var objEquiv = function(a, str, b, v, displayed, opts) {
    if (!(ms || (err || member && apply("525")))) {
      return true;
    }
    if (mac && displayed) {
      return eql(a);
    }
    if (displayed && !v) {
      return false;
    }
    if (scale(str)) {
      str = unCamelCase(str);
    }
    displayed = 17 == str || (18 == str || mac && 91 == str);
    if ((!b || mac) && displayed || mac && (16 == str && (v || opts))) {
      return false;
    }
    if ((member || err) && (v && b)) {
      switch(a) {
        case 220:
        ;
        case 219:
        ;
        case 221:
        ;
        case 192:
        ;
        case 186:
        ;
        case 189:
        ;
        case 187:
        ;
        case 188:
        ;
        case 190:
        ;
        case 191:
        ;
        case 192:
        ;
        case 222:
          return false;
      }
    }
    if (ms && (v && str == a)) {
      return false;
    }
    switch(a) {
      case 13:
        return true;
      case 27:
        return!(member || err);
    }
    return eql(a);
  };
  /**
   * @param {number} obj
   * @return {?}
   */
  var eql = function(obj) {
    if (48 <= obj && 57 >= obj || (96 <= obj && 106 >= obj || (65 <= obj && 90 >= obj || (member || err) && 0 == obj))) {
      return true;
    }
    switch(obj) {
      case 32:
      ;
      case 43:
      ;
      case 63:
      ;
      case 64:
      ;
      case 107:
      ;
      case 109:
      ;
      case 110:
      ;
      case 111:
      ;
      case 186:
      ;
      case 59:
      ;
      case 189:
      ;
      case 187:
      ;
      case 61:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
      ;
      case 219:
      ;
      case 220:
      ;
      case 221:
        return true;
      default:
        return false;
    }
  };
  /**
   * @param {number} str
   * @return {?}
   */
  var unCamelCase = function(str) {
    if (useKeyPress) {
      str = defaults(str);
    } else {
      if (mac && member) {
        switch(str) {
          case 93:
            /** @type {number} */
            str = 91;
        }
      }
    }
    return str;
  };
  /**
   * @param {number} object
   * @return {?}
   */
  var defaults = function(object) {
    switch(object) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return object;
    }
  };
  /**
   * @param {boolean} b
   * @return {undefined}
   */
  var initial = function(b) {
    model.call(this);
    /** @type {boolean} */
    this.j = b;
    addEvent(b, dblclick, this.Ye, false, this);
    addEvent(b, "click", this.Ve, false, this);
  };
  equal(initial, model);
  /** @type {string} */
  var dblclick = useKeyPress ? "keypress" : "keydown";
  /**
   * @param {Object} event
   * @return {undefined}
   */
  initial.prototype.Ye = function(event) {
    if (13 == event.keyCode || member && 3 == event.keyCode) {
      onTouchEnd(this, event);
    }
  };
  /**
   * @param {Object} qualifier
   * @return {undefined}
   */
  initial.prototype.Ve = function(qualifier) {
    onTouchEnd(this, qualifier);
  };
  /**
   * @param {EventTarget} el
   * @param {Object} event
   * @return {undefined}
   */
  var onTouchEnd = function(el, event) {
    var ev = new top(event);
    if (el.dispatchEvent(ev)) {
      ev = new DomEventObject(event);
      try {
        el.dispatchEvent(ev);
      } finally {
        event.stopPropagation();
      }
    }
  };
  /**
   * @return {undefined}
   */
  initial.prototype.l = function() {
    initial.b.l.call(this);
    splice(this.j, dblclick, this.Ye, false, this);
    splice(this.j, "click", this.Ve, false, this);
    delete this.j;
  };
  /**
   * @param {?} response
   * @return {undefined}
   */
  var DomEventObject = function(response) {
    update.call(this, response.Aa);
    /** @type {string} */
    this.type = "action";
  };
  equal(DomEventObject, update);
  /**
   * @param {?} element
   * @return {undefined}
   */
  var top = function(element) {
    update.call(this, element.Aa);
    /** @type {string} */
    this.type = "beforeaction";
  };
  equal(top, update);
  /**
   * @param {?} val
   * @return {undefined}
   */
  var expected = function(val) {
    props.call(this);
    this.yb = val;
    this.K = {};
  };
  equal(expected, props);
  /** @type {Array} */
  var fx = [];
  /**
   * @param {?} src
   * @param {?} type
   * @param {Function} recurring
   * @param {boolean} opt_capt
   * @return {?}
   */
  expected.prototype.listen = function(src, type, recurring, opt_capt) {
    if (!join(type)) {
      if (type) {
        fx[0] = type.toString();
      }
      /** @type {Array} */
      type = fx;
    }
    /** @type {number} */
    var i = 0;
    for (;i < type.length;i++) {
      var listener = addEvent(src, type[i], recurring || this.handleEvent, opt_capt || false, this.yb || this);
      if (!listener) {
        break;
      }
      this.K[listener.key] = listener;
    }
    return this;
  };
  /**
   * @param {Object} value
   * @param {string} event
   * @param {?} result
   * @param {boolean} rgb
   * @return {?}
   */
  expected.prototype.Ea = function(value, event, result, rgb) {
    return del(this, value, event, result, rgb);
  };
  /**
   * @param {Function} self
   * @param {Object} index
   * @param {?} name
   * @param {Object} key
   * @param {boolean} obj
   * @param {Node} deepDataAndEvents
   * @return {?}
   */
  var del = function(self, index, name, key, obj, deepDataAndEvents) {
    if (join(name)) {
      /** @type {number} */
      var c = 0;
      for (;c < name.length;c++) {
        del(self, index, name[c], key, obj, deepDataAndEvents);
      }
    } else {
      index = getData(index, name, key || self.handleEvent, obj, deepDataAndEvents || (self.yb || self));
      if (!index) {
        return self;
      }
      /** @type {Object} */
      self.K[index.key] = index;
    }
    return self;
  };
  /**
   * @param {Object} data
   * @param {string} type
   * @param {Object} value
   * @param {boolean} dataAndEvents
   * @param {Node} deepDataAndEvents
   * @return {?}
   */
  expected.prototype.Ta = function(data, type, value, dataAndEvents, deepDataAndEvents) {
    if (join(type)) {
      /** @type {number} */
      var i = 0;
      for (;i < type.length;i++) {
        this.Ta(data, type[i], value, dataAndEvents, deepDataAndEvents);
      }
    } else {
      value = value || this.handleEvent;
      deepDataAndEvents = deepDataAndEvents || (this.yb || this);
      value = (0,eval)(value);
      /** @type {boolean} */
      dataAndEvents = !!dataAndEvents;
      type = _each(data) ? data.Gd(type, value, dataAndEvents, deepDataAndEvents) : data ? (data = encodeURIComponent(data)) ? data.Gd(type, value, dataAndEvents, deepDataAndEvents) : null : null;
      if (type) {
        unbind(type);
        delete this.K[type.key];
      }
    }
    return this;
  };
  /**
   * @return {undefined}
   */
  expected.prototype.cd = function() {
    group(this.K, function(element, word) {
      if (this.K.hasOwnProperty(word)) {
        unbind(element);
      }
    }, this);
    this.K = {};
  };
  /**
   * @return {undefined}
   */
  expected.prototype.l = function() {
    expected.b.l.call(this);
    this.cd();
  };
  /**
   * @return {?}
   */
  expected.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  /**
   * @param {?} type
   * @param {boolean} recurring
   * @return {undefined}
   */
  var res = function(type, recurring) {
    model.call(this);
    if (type) {
      put(this, type, recurring);
    }
  };
  equal(res, model);
  c = res.prototype;
  /** @type {null} */
  c.j = null;
  /** @type {null} */
  c.jf = null;
  /** @type {null} */
  c.Wg = null;
  /** @type {null} */
  c.kf = null;
  /** @type {number} */
  c.Da = -1;
  /** @type {number} */
  c.Pb = -1;
  /** @type {boolean} */
  c.fg = false;
  var table = {
    3 : 13,
    12 : 144,
    63232 : 38,
    63233 : 40,
    63234 : 37,
    63235 : 39,
    63236 : 112,
    63237 : 113,
    63238 : 114,
    63239 : 115,
    63240 : 116,
    63241 : 117,
    63242 : 118,
    63243 : 119,
    63244 : 120,
    63245 : 121,
    63246 : 122,
    63247 : 123,
    63248 : 44,
    63272 : 46,
    63273 : 36,
    63275 : 35,
    63276 : 33,
    63277 : 34,
    63289 : 144,
    63302 : 45
  };
  var keys = {
    Up : 38,
    Down : 40,
    Left : 37,
    Right : 39,
    Enter : 13,
    F1 : 112,
    F2 : 113,
    F3 : 114,
    F4 : 115,
    F5 : 116,
    F6 : 117,
    F7 : 118,
    F8 : 119,
    F9 : 120,
    F10 : 121,
    F11 : 122,
    F12 : 123,
    "U+007F" : 46,
    Home : 36,
    End : 35,
    PageUp : 33,
    PageDown : 34,
    Insert : 45
  };
  var Bh = ms || (err || member && apply("525"));
  var callNow = mac && useKeyPress;
  /**
   * @param {Object} e
   * @return {undefined}
   */
  res.prototype.Ye = function(e) {
    if (member || err) {
      if (17 == this.Da && !e.ctrlKey || (18 == this.Da && !e.altKey || mac && (91 == this.Da && !e.metaKey))) {
        /** @type {number} */
        this.Pb = this.Da = -1;
      }
    }
    if (-1 == this.Da) {
      if (e.ctrlKey && 17 != e.keyCode) {
        /** @type {number} */
        this.Da = 17;
      } else {
        if (e.altKey && 18 != e.keyCode) {
          /** @type {number} */
          this.Da = 18;
        } else {
          if (e.metaKey) {
            if (91 != e.keyCode) {
              /** @type {number} */
              this.Da = 91;
            }
          }
        }
      }
    }
    if (Bh && !objEquiv(e.keyCode, this.Da, e.shiftKey, e.ctrlKey, e.altKey, e.metaKey)) {
      this.handleEvent(e);
    } else {
      this.Pb = unCamelCase(e.keyCode);
      if (callNow) {
        this.fg = e.altKey;
      }
    }
  };
  /**
   * @param {MouseEvent} keyEvent
   * @return {undefined}
   */
  res.prototype.hk = function(keyEvent) {
    /** @type {number} */
    this.Pb = this.Da = -1;
    this.fg = keyEvent.altKey;
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  res.prototype.handleEvent = function(e) {
    var event = e.Aa;
    var altKey = event.altKey;
    if (ms && "keypress" == e.type) {
      var str = this.Pb;
      var options = 13 != str && 27 != str ? event.keyCode : 0;
    } else {
      if ((member || err) && "keypress" == e.type) {
        str = this.Pb;
        options = 0 <= event.charCode && (63232 > event.charCode && eql(str)) ? event.charCode : 0;
      } else {
        if (err2 && !member) {
          str = this.Pb;
          options = eql(str) ? event.keyCode : 0;
        } else {
          str = event.keyCode || this.Pb;
          options = event.charCode || 0;
          if (callNow) {
            altKey = this.fg;
          }
          if (mac) {
            if (63 == options) {
              if (224 == str) {
                /** @type {number} */
                str = 191;
              }
            }
          }
        }
      }
    }
    var key = str = unCamelCase(str);
    if (str) {
      if (63232 <= str && str in table) {
        key = table[str];
      } else {
        if (25 == str) {
          if (e.shiftKey) {
            /** @type {number} */
            key = 9;
          }
        }
      }
    } else {
      if (event.keyIdentifier) {
        if (event.keyIdentifier in keys) {
          key = keys[event.keyIdentifier];
        }
      }
    }
    /** @type {boolean} */
    e = key == this.Da;
    this.Da = key;
    event = new onKeyDown(key, options, e, event);
    event.altKey = altKey;
    this.dispatchEvent(event);
  };
  /**
   * @return {?}
   */
  res.prototype.a = function() {
    return this.j;
  };
  /**
   * @param {Object} item
   * @param {?} object
   * @param {boolean} recurring
   * @return {undefined}
   */
  var put = function(item, object, recurring) {
    if (item.kf) {
      item.detach();
    }
    item.j = object;
    item.jf = addEvent(item.j, "keypress", item, recurring);
    item.Wg = addEvent(item.j, "keydown", item.Ye, recurring, item);
    item.kf = addEvent(item.j, "keyup", item.hk, recurring, item);
  };
  /**
   * @return {undefined}
   */
  res.prototype.detach = function() {
    if (this.jf) {
      unbind(this.jf);
      unbind(this.Wg);
      unbind(this.kf);
      /** @type {null} */
      this.kf = this.Wg = this.jf = null;
    }
    /** @type {null} */
    this.j = null;
    /** @type {number} */
    this.Pb = this.Da = -1;
  };
  /**
   * @return {undefined}
   */
  res.prototype.l = function() {
    res.b.l.call(this);
    this.detach();
  };
  /**
   * @param {number} keyCode
   * @param {number} charCode
   * @param {boolean} repeat
   * @param {?} e
   * @return {undefined}
   */
  var onKeyDown = function(keyCode, charCode, repeat, e) {
    update.call(this, e);
    /** @type {string} */
    this.type = "key";
    /** @type {number} */
    this.keyCode = keyCode;
    /** @type {number} */
    this.charCode = charCode;
    /** @type {boolean} */
    this.repeat = repeat;
  };
  equal(onKeyDown, update);
  if (ms) {
    apply(8);
  }
  var memory = {};
  /** @type {null} */
  var m1 = null;
  /**
   * @param {Object} e
   * @return {undefined}
   */
  var pause = function(e) {
    e = errorCallback(e);
    delete memory[e];
    if (containsMatch(memory)) {
      if (m1) {
        m1.stop();
      }
    }
  };
  /**
   * @return {undefined}
   */
  var restart = function() {
    if (!m1) {
      m1 = new foo(function() {
        doSelect();
      }, 20);
    }
    var whole_match = m1;
    if (!whole_match.Sc()) {
      whole_match.start();
    }
  };
  /**
   * @return {undefined}
   */
  var doSelect = function() {
    /** @type {number} */
    var startTime = random();
    group(memory, function(start) {
      change(start, startTime);
    });
    if (!containsMatch(memory)) {
      restart();
    }
  };
  /**
   * @return {undefined}
   */
  var klass = function() {
    model.call(this);
    /** @type {number} */
    this.g = 0;
    /** @type {null} */
    this.endTime = this.startTime = null;
  };
  equal(klass, model);
  /**
   * @return {undefined}
   */
  klass.prototype.Wc = function() {
    this.ta("begin");
  };
  /**
   * @return {undefined}
   */
  klass.prototype.Qb = function() {
    this.ta("end");
  };
  /**
   * @return {undefined}
   */
  klass.prototype.qf = function() {
    this.ta("finish");
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  klass.prototype.ta = function(type) {
    this.dispatchEvent(type);
  };
  /**
   * @param {Array} expression
   * @param {string} options
   * @param {number} time
   * @param {?} a
   * @return {undefined}
   */
  var t = function(expression, options, time, a) {
    klass.call(this);
    if (!join(expression) || !join(options)) {
      throw Error("Start and end parameters must be arrays");
    }
    if (expression.length != options.length) {
      throw Error("Start and end points must be the same length");
    }
    /** @type {Array} */
    this.he = expression;
    /** @type {string} */
    this.Sj = options;
    /** @type {number} */
    this.duration = time;
    this.Gh = a;
    /** @type {Array} */
    this.coords = [];
    /** @type {number} */
    this.Ra = 0;
  };
  equal(t, klass);
  /**
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  t.prototype.play = function(deepDataAndEvents) {
    if (deepDataAndEvents || 0 == this.g) {
      /** @type {number} */
      this.Ra = 0;
      this.coords = this.he;
    } else {
      if (1 == this.g) {
        return false;
      }
    }
    pause(this);
    /** @type {number} */
    this.startTime = deepDataAndEvents = random();
    if (-1 == this.g) {
      this.startTime -= this.duration * this.Ra;
    }
    this.endTime = this.startTime + this.duration;
    if (!this.Ra) {
      this.Wc();
    }
    this.ta("play");
    if (-1 == this.g) {
      this.ta("resume");
    }
    /** @type {number} */
    this.g = 1;
    var key = errorCallback(this);
    if (!(key in memory)) {
      memory[key] = this;
    }
    restart();
    change(this, deepDataAndEvents);
    return true;
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  t.prototype.stop = function(recurring) {
    pause(this);
    /** @type {number} */
    this.g = 0;
    if (recurring) {
      /** @type {number} */
      this.Ra = 1;
    }
    pad(this, this.Ra);
    this.ta("stop");
    this.Qb();
  };
  /**
   * @return {undefined}
   */
  t.prototype.pause = function() {
    if (1 == this.g) {
      pause(this);
      /** @type {number} */
      this.g = -1;
      this.ta("pause");
    }
  };
  /**
   * @return {undefined}
   */
  t.prototype.l = function() {
    if (!(0 == this.g)) {
      this.stop(false);
    }
    this.ta("destroy");
    t.b.l.call(this);
  };
  /**
   * @param {Object} event
   * @param {number} startTime
   * @return {undefined}
   */
  var change = function(event, startTime) {
    if (startTime < event.startTime) {
      /** @type {number} */
      event.endTime = startTime + event.endTime - event.startTime;
      /** @type {number} */
      event.startTime = startTime;
    }
    /** @type {number} */
    event.Ra = (startTime - event.startTime) / (event.endTime - event.startTime);
    if (1 < event.Ra) {
      /** @type {number} */
      event.Ra = 1;
    }
    pad(event, event.Ra);
    if (1 == event.Ra) {
      /** @type {number} */
      event.g = 0;
      pause(event);
      event.qf();
      event.Qb();
    } else {
      if (1 == event.g) {
        event.Sd();
      }
    }
  };
  /**
   * @param {HTMLElement} value
   * @param {number} size
   * @return {undefined}
   */
  var pad = function(value, size) {
    if (then(value.Gh)) {
      size = value.Gh(size);
    }
    /** @type {Array} */
    value.coords = Array(value.he.length);
    /** @type {number} */
    var i = 0;
    for (;i < value.he.length;i++) {
      value.coords[i] = (value.Sj[i] - value.he[i]) * size + value.he[i];
    }
  };
  /**
   * @return {undefined}
   */
  t.prototype.Sd = function() {
    this.ta("animate");
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  t.prototype.ta = function(type) {
    this.dispatchEvent(new Sprite(type, this));
  };
  /**
   * @param {?} element
   * @param {Object} params
   * @return {undefined}
   */
  var Sprite = function(element, params) {
    Event.call(this, element);
    this.coords = params.coords;
    this.x = params.coords[0];
    this.y = params.coords[1];
    this.z = params.coords[2];
    this.duration = params.duration;
    this.Ra = params.Ra;
    this.state = params.g;
  };
  equal(Sprite, Event);
  /**
   * @return {undefined}
   */
  var a = function() {
    klass.call(this);
    /** @type {Array} */
    this.ja = [];
  };
  equal(a, klass);
  /**
   * @param {string} x
   * @return {undefined}
   */
  a.prototype.add = function(x) {
    if (!push(this.ja, x)) {
      this.ja.push(x);
      addEvent(x, "finish", this.Hi, false, this);
    }
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  a.prototype.remove = function(name) {
    if (fetch(this.ja, name)) {
      splice(name, "finish", this.Hi, false, this);
    }
  };
  /**
   * @return {undefined}
   */
  a.prototype.l = function() {
    slice(this.ja, function(dataAndEvents) {
      dataAndEvents.qa();
    });
    /** @type {number} */
    this.ja.length = 0;
    a.b.l.call(this);
  };
  /**
   * @return {undefined}
   */
  var dom = function() {
    a.call(this);
    /** @type {number} */
    this.Ma = 0;
  };
  equal(dom, a);
  /**
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  dom.prototype.play = function(deepDataAndEvents) {
    if (0 == this.ja.length) {
      return false;
    }
    if (deepDataAndEvents || 0 == this.g) {
      if (this.Ma < this.ja.length) {
        if (0 != this.ja[this.Ma].g) {
          this.ja[this.Ma].stop(false);
        }
      }
      /** @type {number} */
      this.Ma = 0;
      this.Wc();
    } else {
      if (1 == this.g) {
        return false;
      }
    }
    this.ta("play");
    if (-1 == this.g) {
      this.ta("resume");
    }
    /** @type {number} */
    this.startTime = random();
    /** @type {null} */
    this.endTime = null;
    /** @type {number} */
    this.g = 1;
    this.ja[this.Ma].play(deepDataAndEvents);
    return true;
  };
  /**
   * @return {undefined}
   */
  dom.prototype.pause = function() {
    if (1 == this.g) {
      this.ja[this.Ma].pause();
      /** @type {number} */
      this.g = -1;
      this.ta("pause");
    }
  };
  /**
   * @param {Object} recurring
   * @return {undefined}
   */
  dom.prototype.stop = function(recurring) {
    /** @type {number} */
    this.g = 0;
    /** @type {number} */
    this.endTime = random();
    if (recurring) {
      recurring = this.Ma;
      for (;recurring < this.ja.length;++recurring) {
        var me = this.ja[recurring];
        if (0 == me.g) {
          me.play();
        }
        if (!(0 == me.g)) {
          me.stop(true);
        }
      }
    } else {
      if (this.Ma < this.ja.length) {
        this.ja[this.Ma].stop(false);
      }
    }
    this.ta("stop");
    this.Qb();
  };
  /**
   * @return {undefined}
   */
  dom.prototype.Hi = function() {
    if (1 == this.g) {
      this.Ma++;
      if (this.Ma < this.ja.length) {
        this.ja[this.Ma].play();
      } else {
        /** @type {number} */
        this.endTime = random();
        /** @type {number} */
        this.g = 0;
        this.qf();
        this.Qb();
      }
    }
  };
  /**
   * @param {?} tabCtrl
   * @param {number} attrs
   * @param {?} scope
   * @param {?} errorFn
   * @param {?} a
   * @param {?} $attrs
   * @return {undefined}
   */
  var link = function(tabCtrl, attrs, scope, errorFn, a, $attrs) {
    t.call(this, [scope.left, scope.top], [scope.right, scope.bottom], errorFn, a);
    this.j = tabCtrl;
    /** @type {number} */
    this.$a = attrs;
    /** @type {boolean} */
    this.Oj = !!$attrs;
  };
  equal(link, t);
  /**
   * @return {undefined}
   */
  link.prototype.Sd = function() {
    /** @type {string} */
    this.j.style.backgroundPosition = -Math.floor(this.coords[0] / this.$a.width) * this.$a.width + "px " + -Math.floor(this.coords[1] / this.$a.height) * this.$a.height + "px";
    link.b.Sd.call(this);
  };
  /**
   * @return {undefined}
   */
  link.prototype.qf = function() {
    if (!this.Oj) {
      this.play(true);
    }
    link.b.qf.call(this);
  };
  /**
   * @param {Object} style
   * @return {undefined}
   */
  var layout = function(style) {
    style = style.j.style;
    /** @type {string} */
    style.backgroundPosition = "";
    if ("undefined" != typeof style.backgroundPositionX) {
      /** @type {string} */
      style.backgroundPositionX = "";
      /** @type {string} */
      style.backgroundPositionY = "";
    }
  };
  /**
   * @return {undefined}
   */
  link.prototype.l = function() {
    link.b.l.call(this);
    /** @type {null} */
    this.j = null;
  };
  /**
   * @param {number} top
   * @param {?} right
   * @param {number} bottom
   * @param {?} left
   * @return {undefined}
   */
  var RectOffset = function(top, right, bottom, left) {
    /** @type {number} */
    this.top = top;
    this.right = right;
    /** @type {number} */
    this.bottom = bottom;
    this.left = left;
  };
  c = RectOffset.prototype;
  /**
   * @return {?}
   */
  c.clone = function() {
    return new RectOffset(this.top, this.right, this.bottom, this.left);
  };
  /**
   * @param {Object} region
   * @return {?}
   */
  c.contains = function(region) {
    return this && region ? region instanceof RectOffset ? region.left >= this.left && (region.right <= this.right && (region.top >= this.top && region.bottom <= this.bottom)) : region.x >= this.left && (region.x <= this.right && (region.y >= this.top && region.y <= this.bottom)) : false;
  };
  /**
   * @return {?}
   */
  c.floor = function() {
    /** @type {number} */
    this.top = Math.floor(this.top);
    /** @type {number} */
    this.right = Math.floor(this.right);
    /** @type {number} */
    this.bottom = Math.floor(this.bottom);
    /** @type {number} */
    this.left = Math.floor(this.left);
    return this;
  };
  /**
   * @return {?}
   */
  c.round = function() {
    /** @type {number} */
    this.top = Math.round(this.top);
    /** @type {number} */
    this.right = Math.round(this.right);
    /** @type {number} */
    this.bottom = Math.round(this.bottom);
    /** @type {number} */
    this.left = Math.round(this.left);
    return this;
  };
  /**
   * @param {Object} tx
   * @param {?} opt_ty
   * @return {?}
   */
  c.translate = function(tx, opt_ty) {
    if (tx instanceof Rect) {
      this.left += tx.x;
      this.right += tx.x;
      this.top += tx.y;
      this.bottom += tx.y;
    } else {
      this.left += tx;
      this.right += tx;
      if (scale(opt_ty)) {
        this.top += opt_ty;
        this.bottom += opt_ty;
      }
    }
    return this;
  };
  /**
   * @param {number} sx
   * @param {number} opt_sy
   * @return {?}
   */
  c.scale = function(sx, opt_sy) {
    var sy = scale(opt_sy) ? opt_sy : sx;
    this.left *= sx;
    this.right *= sx;
    this.top *= sy;
    this.bottom *= sy;
    return this;
  };
  /**
   * @param {?} left
   * @param {number} top
   * @param {?} width
   * @param {?} height
   * @return {undefined}
   */
  var Rectangle = function(left, top, width, height) {
    this.left = left;
    /** @type {number} */
    this.top = top;
    this.width = width;
    this.height = height;
  };
  c = Rectangle.prototype;
  /**
   * @return {?}
   */
  c.clone = function() {
    return new Rectangle(this.left, this.top, this.width, this.height);
  };
  /**
   * @param {Object} rect
   * @return {?}
   */
  c.contains = function(rect) {
    return rect instanceof Rect ? rect.x >= this.left && (rect.x <= this.left + this.width && (rect.y >= this.top && rect.y <= this.top + this.height)) : this.left <= rect.left && (this.left + this.width >= rect.left + rect.width && (this.top <= rect.top && this.top + this.height >= rect.top + rect.height));
  };
  /**
   * @return {?}
   */
  c.X = function() {
    return new clone(this.width, this.height);
  };
  /**
   * @return {?}
   */
  c.floor = function() {
    /** @type {number} */
    this.left = Math.floor(this.left);
    /** @type {number} */
    this.top = Math.floor(this.top);
    /** @type {number} */
    this.width = Math.floor(this.width);
    /** @type {number} */
    this.height = Math.floor(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  c.round = function() {
    /** @type {number} */
    this.left = Math.round(this.left);
    /** @type {number} */
    this.top = Math.round(this.top);
    /** @type {number} */
    this.width = Math.round(this.width);
    /** @type {number} */
    this.height = Math.round(this.height);
    return this;
  };
  /**
   * @param {Object} tx
   * @param {number} t
   * @return {?}
   */
  c.translate = function(tx, t) {
    if (tx instanceof Rect) {
      this.left += tx.x;
      this.top += tx.y;
    } else {
      this.left += tx;
      if (scale(t)) {
        this.top += t;
      }
    }
    return this;
  };
  /**
   * @param {number} sx
   * @param {number} opt_sy
   * @return {?}
   */
  c.scale = function(sx, opt_sy) {
    var sy = scale(opt_sy) ? opt_sy : sx;
    this.left *= sx;
    this.width *= sx;
    this.top *= sy;
    this.height *= sy;
    return this;
  };
  /**
   * @param {string} element
   * @param {string} prop
   * @param {string} el
   * @return {undefined}
   */
  var css = function(element, prop, el) {
    if (isString(prop)) {
      if (prop = getCSS(element, prop)) {
        /** @type {string} */
        element.style[prop] = el;
      }
    } else {
      var p;
      for (p in prop) {
        /** @type {string} */
        el = element;
        var n = prop[p];
        var t = getCSS(el, p);
        if (t) {
          el.style[t] = n;
        }
      }
    }
  };
  var attributes = {};
  /**
   * @param {Element} element
   * @param {string} property
   * @return {?}
   */
  var getCSS = function(element, property) {
    var value = attributes[property];
    if (!value) {
      var name = toCamelCase(property);
      value = name;
      if (void 0 === element.style[name]) {
        name = (member ? "Webkit" : useKeyPress ? "Moz" : ms ? "ms" : err2 ? "O" : null) + camelize(name);
        if (void 0 !== element.style[name]) {
          value = name;
        }
      }
      attributes[property] = value;
    }
    return value;
  };
  /**
   * @param {Element} element
   * @param {string} property
   * @return {?}
   */
  var setStyle = function(element, property) {
    var actual = element.style[toCamelCase(property)];
    return "undefined" !== typeof actual ? actual : element.style[getCSS(element, property)] || "";
  };
  /**
   * @param {Element} element
   * @param {string} prop
   * @return {?}
   */
  var style = function(element, prop) {
    var styles = isElement(element);
    return styles.defaultView && (styles.defaultView.getComputedStyle && (styles = styles.defaultView.getComputedStyle(element, null))) ? styles[prop] || (styles.getPropertyValue(prop) || "") : "";
  };
  /**
   * @param {Element} el
   * @param {string} prop
   * @return {?}
   */
  var _getStyle = function(el, prop) {
    return style(el, prop) || ((el.currentStyle ? el.currentStyle[prop] : null) || el.style && el.style[prop]);
  };
  /**
   * @param {Object} d
   * @return {?}
   */
  var getOffset = function(d) {
    try {
      var offset = d.getBoundingClientRect();
    } catch (c) {
      return{
        left : 0,
        top : 0,
        right : 0,
        bottom : 0
      };
    }
    if (ms) {
      if (d.ownerDocument.body) {
        d = d.ownerDocument;
        offset.left -= d.documentElement.clientLeft + d.body.clientLeft;
        offset.top -= d.documentElement.clientTop + d.body.clientTop;
      }
    }
    return offset;
  };
  /**
   * @param {Element} a
   * @return {?}
   */
  var scroll = function(a) {
    var b = isElement(a);
    var r = new Rect(0, 0);
    var doc = b ? isElement(b) : document;
    doc = !ms || (9 <= Number(sizeAsString) || has(dealoc(doc).ca)) ? doc.documentElement : doc.body;
    if (a == doc) {
      return r;
    }
    a = getOffset(a);
    b = stop(dealoc(b).ca);
    r.x = a.left + b.x;
    r.y = a.top + b.y;
    return r;
  };
  /**
   * @param {Node} list
   * @param {Element} width
   * @param {number} height
   * @return {undefined}
   */
  var redraw = function(list, width, height) {
    if (width instanceof clone) {
      height = width.height;
      width = width.width;
    } else {
      if (void 0 == height) {
        throw Error("missing height argument");
      }
    }
    list.style.width = px(width);
    list.style.height = px(height);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var px = function(value) {
    if ("number" == typeof value) {
      /** @type {string} */
      value = Math.round(value) + "px";
    }
    return value;
  };
  /**
   * @param {Element} p
   * @return {?}
   */
  var position = function(p) {
    /** @type {function (Object): ?} */
    var parent = _getDOMObjectPosition;
    if ("none" != _getStyle(p, "display")) {
      return parent(p);
    }
    var style = p.style;
    var originalDisplay = style.display;
    var originalVisibility = style.visibility;
    var originalPosition = style.position;
    /** @type {string} */
    style.visibility = "hidden";
    /** @type {string} */
    style.position = "absolute";
    /** @type {string} */
    style.display = "inline";
    p = parent(p);
    style.display = originalDisplay;
    style.position = originalPosition;
    style.visibility = originalVisibility;
    return p;
  };
  /**
   * @param {Object} box
   * @return {?}
   */
  var _getDOMObjectPosition = function(box) {
    var width = box.offsetWidth;
    var height = box.offsetHeight;
    /** @type {boolean} */
    var value = member && (!width && !height);
    return isNaN(width) && !value || !box.getBoundingClientRect ? new clone(width, height) : (box = getOffset(box), new clone(box.right - box.left, box.bottom - box.top));
  };
  /**
   * @param {Element} e
   * @return {?}
   */
  var step = function(e) {
    var v1 = scroll(e);
    e = position(e);
    return new Rectangle(v1.x, v1.y, e.width, e.height);
  };
  /**
   * @param {Element} el
   * @param {string} value
   * @return {undefined}
   */
  var setOpacity = function(el, value) {
    var style = el.style;
    if ("opacity" in style) {
      /** @type {string} */
      style.opacity = value;
    } else {
      if ("MozOpacity" in style) {
        /** @type {string} */
        style.MozOpacity = value;
      } else {
        if ("filter" in style) {
          /** @type {string} */
          style.filter = "" === value ? "" : "alpha(opacity=" + 100 * Number(value) + ")";
        }
      }
    }
  };
  /**
   * @param {Element} obj
   * @param {boolean} recurring
   * @return {undefined}
   */
  var cleanup = function(obj, recurring) {
    /** @type {string} */
    obj.style.display = recurring ? "" : "none";
  };
  /**
   * @param {Object} element
   * @return {?}
   */
  var isVisible = function(element) {
    return "none" != element.style.display;
  };
  /**
   * @param {?} callback
   * @return {undefined}
   */
  var removeNode = function(callback) {
    var node = dealoc(void 0);
    var child = node.ca;
    if (ms && child.createStyleSheet) {
      var s = child.createStyleSheet();
      processItem(s, callback);
    } else {
      child = remove(node.ca, "HEAD", void 0, void 0)[0];
      if (!child) {
        s = remove(node.ca, "BODY", void 0, void 0)[0];
        child = node.C("HEAD");
        s.parentNode.insertBefore(child, s);
      }
      s = node.C("STYLE");
      processItem(s, callback);
      node.appendChild(child, s);
    }
  };
  /**
   * @param {(Element|StyleSheet)} el
   * @param {?} data
   * @return {undefined}
   */
  var processItem = function(el, data) {
    var str = isObject(data);
    if (ms && isNaN(el.cssText)) {
      el.cssText = str;
    } else {
      el.innerHTML = str;
    }
  };
  /** @type {(null|string)} */
  var property = useKeyPress ? "MozUserSelect" : member || err ? "WebkitUserSelect" : null;
  /**
   * @param {Element} el
   * @param {string} property
   * @return {?}
   */
  var getPixelValue = function(el, property) {
    var value = el.currentStyle ? el.currentStyle[property] : null;
    if (value) {
      if (/^\d+px?$/.test(value)) {
        /** @type {number} */
        var current = parseInt(value, 10)
      } else {
        current = el.style.left;
        var rsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value;
        value = el.style.pixelLeft;
        el.style.left = current;
        el.runtimeStyle.left = rsLeft;
        /** @type {number} */
        current = +value;
      }
    } else {
      /** @type {number} */
      current = 0;
    }
    return current;
  };
  /**
   * @param {Element} elem
   * @return {?}
   */
  var GetIECSSPropertyValue = function(elem) {
    if (ms) {
      var ret = getPixelValue(elem, "marginLeft");
      var q = getPixelValue(elem, "marginRight");
      var data = getPixelValue(elem, "marginTop");
      elem = getPixelValue(elem, "marginBottom");
      return new RectOffset(data, q, elem, ret);
    }
    ret = style(elem, "marginLeft");
    q = style(elem, "marginRight");
    data = style(elem, "marginTop");
    elem = style(elem, "marginBottom");
    return new RectOffset(parseFloat(data), parseFloat(q), parseFloat(elem), parseFloat(ret));
  };
  /**
   * @param {Array} element
   * @param {?} node
   * @param {?} win
   * @param {?} errorFn
   * @param {?} a
   * @return {undefined}
   */
  var temp = function(element, node, win, errorFn, a) {
    t.call(this, node, win, errorFn, a);
    /** @type {Array} */
    this.element = element;
  };
  equal(temp, t);
  c = temp.prototype;
  /** @type {function (): undefined} */
  c.Qf = noop;
  /**
   * @return {?}
   */
  c.Ai = function() {
    if (!isNaN(this.uc)) {
      /** @type {boolean} */
      this.uc = "rtl" == _getStyle(this.element, "direction");
    }
    return this.uc;
  };
  /**
   * @return {undefined}
   */
  c.Sd = function() {
    this.Qf();
    temp.b.Sd.call(this);
  };
  /**
   * @return {undefined}
   */
  c.Qb = function() {
    this.Qf();
    temp.b.Qb.call(this);
  };
  /**
   * @return {undefined}
   */
  c.Wc = function() {
    this.Qf();
    temp.b.Wc.call(this);
  };
  /**
   * @param {?} index
   * @param {(Array|number)} d
   * @param {(Array|number)} values
   * @param {?} selector
   * @param {?} e
   * @return {undefined}
   */
  var prev = function(index, d, values, selector, e) {
    if (scale(d)) {
      /** @type {Array} */
      d = [d];
    }
    if (scale(values)) {
      /** @type {Array} */
      values = [values];
    }
    temp.call(this, index, d, values, selector, e);
    if (1 != d.length || 1 != values.length) {
      throw Error("Start and end points must be 1D");
    }
    /** @type {number} */
    this.lf = -1;
  };
  equal(prev, temp);
  /** @type {number} */
  var qi = 1 / 1024;
  /**
   * @return {undefined}
   */
  prev.prototype.Qf = function() {
    var val1 = this.coords[0];
    if (Math.abs(val1 - this.lf) >= qi) {
      setOpacity(this.element, val1);
      this.lf = val1;
    }
  };
  /**
   * @return {undefined}
   */
  prev.prototype.Wc = function() {
    /** @type {number} */
    this.lf = -1;
    prev.b.Wc.call(this);
  };
  /**
   * @return {undefined}
   */
  prev.prototype.Qb = function() {
    /** @type {number} */
    this.lf = -1;
    prev.b.Qb.call(this);
  };
  /**
   * @return {undefined}
   */
  prev.prototype.show = function() {
    /** @type {string} */
    this.element.style.display = "";
  };
  /**
   * @param {?} button
   * @param {?} n
   * @param {?} t
   * @return {undefined}
   */
  var times = function(button, n, t) {
    prev.call(this, button, 1, 0, n, t);
  };
  equal(times, prev);
  /**
   * @param {?} opt_y
   * @param {?} opt_x
   * @param {?} y
   * @param {?} x
   * @return {undefined}
   */
  var Vector = function(opt_y, opt_x, y, x) {
    this.Vf = opt_y;
    this.$f = opt_x;
    this.Wf = y;
    this.ag = x;
  };
  /**
   * @return {?}
   */
  Vector.prototype.clone = function() {
    return new Vector(this.Vf, this.$f, this.Wf, this.ag);
  };
  /**
   * @param {?} s
   * @param {number} x
   * @param {?} y
   * @return {?}
   */
  var categorize = function(s, x, y) {
    if (x instanceof Rect) {
      y = x.y;
      x = x.x;
    }
    var offset = s.Vf;
    var index = s.$f;
    /** @type {number} */
    var z0 = s.Wf - s.Vf;
    /** @type {number} */
    var z1 = s.ag - s.$f;
    return((Number(x) - offset) * (s.Wf - offset) + (Number(y) - index) * (s.ag - index)) / (z0 * z0 + z1 * z1);
  };
  /**
   * @param {?} pos
   * @param {number} x
   * @return {?}
   */
  var clipPos = function(pos, x) {
    var offset = pos.Vf;
    offset += x * (pos.Wf - offset);
    var a = pos.$f;
    return new Rect(offset, a + x * (pos.ag - a));
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var prep = function(obj) {
    var s = new Buffer;
    s.kh = obj;
    return loadScript(s);
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  var loadScript = function(value) {
    var elem = {};
    var container = elem.document || document;
    var val = decode(value);
    /** @type {Element} */
    var node = document.createElement("SCRIPT");
    value = {
      aj : node,
      Yb : void 0
    };
    var suiteView = new Promise(loadData, value);
    /** @type {null} */
    var restoreScript = null;
    var quietMillis = null != elem.timeout ? elem.timeout : 5E3;
    if (0 < quietMillis) {
      /** @type {number} */
      restoreScript = window.setTimeout(function() {
        onload(node, true);
        var delta = new save(1, "Timeout reached for loading script " + val);
        suiteView.fb();
        compute(suiteView, false, delta);
      }, quietMillis);
      /** @type {number} */
      value.Yb = restoreScript;
    }
    /** @type {function (): undefined} */
    node.onload = node.onreadystatechange = function() {
      if (!(node.readyState && ("loaded" != node.readyState && "complete" != node.readyState))) {
        onload(node, elem.Xl || false, restoreScript);
        suiteView.fb();
        compute(suiteView, true, null);
      }
    };
    /**
     * @return {undefined}
     */
    node.onerror = function() {
      onload(node, true, restoreScript);
      var delta = new save(0, "Error while loading script " + val);
      suiteView.fb();
      compute(suiteView, false, delta);
    };
    value = elem.attributes || {};
    iterator(value, {
      type : "text/javascript",
      charset : "UTF-8",
      src : val
    });
    setNodeAttributes(node, value);
    head(container).appendChild(node);
    return suiteView;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  var head = function(a) {
    var bodies = (a || document).getElementsByTagName("HEAD");
    return bodies && 0 != bodies.length ? bodies[0] : a.documentElement;
  };
  /**
   * @return {undefined}
   */
  var loadData = function() {
    if (this && this.aj) {
      var img = this.aj;
      if (img) {
        if ("SCRIPT" == img.tagName) {
          onload(img, true, this.Yb);
        }
      }
    }
  };
  /**
   * @param {Node} img
   * @param {boolean} dataAndEvents
   * @param {string} callback
   * @return {undefined}
   */
  var onload = function(img, dataAndEvents, callback) {
    if (null != callback) {
      win.clearTimeout(callback);
    }
    /** @type {function (): undefined} */
    img.onload = noop;
    /** @type {function (): undefined} */
    img.onerror = noop;
    /** @type {function (): undefined} */
    img.onreadystatechange = noop;
    if (dataAndEvents) {
      window.setTimeout(function() {
        removeChild(img);
      }, 0);
    }
  };
  /**
   * @param {number} code
   * @param {string} value
   * @return {undefined}
   */
  var save = function(code, value) {
    /** @type {string} */
    var rule = "Jsloader error (code #" + code + ")";
    if (value) {
      rule += ": " + value;
    }
    assert.call(this, rule);
    /** @type {number} */
    this.code = code;
  };
  equal(save, assert);
  /**
   * @return {undefined}
   */
  var LSS = function() {
    /** @type {Array} */
    this.Ua = [];
    /** @type {Array} */
    this.eb = [];
  };
  c = LSS.prototype;
  /**
   * @param {string} task
   * @return {undefined}
   */
  c.enqueue = function(task) {
    this.eb.push(task);
  };
  /**
   * @return {?}
   */
  c.xd = function() {
    if (0 == this.Ua.length) {
      this.Ua = this.eb;
      this.Ua.reverse();
      /** @type {Array} */
      this.eb = [];
    }
    return this.Ua.pop();
  };
  /**
   * @return {?}
   */
  c.$ = function() {
    return this.Ua.length + this.eb.length;
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return 0 == this.Ua.length && 0 == this.eb.length;
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    /** @type {Array} */
    this.Ua = [];
    /** @type {Array} */
    this.eb = [];
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.contains = function(name) {
    return push(this.Ua, name) || push(this.eb, name);
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.remove = function(name) {
    var checkSet = this.Ua;
    var tok = off(checkSet, name);
    if (0 <= tok) {
      Array.prototype.splice.call(checkSet, tok, 1);
      /** @type {boolean} */
      checkSet = true;
    } else {
      /** @type {boolean} */
      checkSet = false;
    }
    return checkSet || fetch(this.eb, name);
  };
  /**
   * @return {?}
   */
  c.na = function() {
    /** @type {Array} */
    var byteout = [];
    /** @type {number} */
    var value = this.Ua.length - 1;
    for (;0 <= value;--value) {
      byteout.push(this.Ua[value]);
    }
    var min = this.eb.length;
    /** @type {number} */
    value = 0;
    for (;value < min;++value) {
      byteout.push(this.eb[value]);
    }
    return byteout;
  };
  /**
   * @param {number} property
   * @param {number} object
   * @return {undefined}
   */
  var result = function(property, object) {
    props.call(this);
    this.Ci = property || 0;
    this.pc = object || 10;
    if (this.Ci > this.pc) {
      throw Error("[goog.structs.Pool] Min can not be greater than max");
    }
    this.da = new LSS;
    this.Ob = new Transform;
    /** @type {number} */
    this.sg = 0;
    /** @type {null} */
    this.Yg = null;
    this.pe();
  };
  equal(result, props);
  c = result.prototype;
  /**
   * @return {?}
   */
  c.vb = function() {
    /** @type {number} */
    var decay = random();
    if (!(null != this.Yg && decay - this.Yg < this.sg)) {
      var name;
      for (;0 < this.da.$() && (name = this.da.xd(), !this.bh(name));) {
        this.pe();
      }
      if (!name) {
        if (this.$() < this.pc) {
          name = this.qb();
        }
      }
      if (name) {
        /** @type {number} */
        this.Yg = decay;
        this.Ob.add(name);
      }
      return name;
    }
  };
  /**
   * @param {string} elem
   * @return {?}
   */
  c.zb = function(elem) {
    return this.Ob.remove(elem) ? (this.eg(elem), true) : false;
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  c.eg = function(name) {
    this.Ob.remove(name);
    if (this.bh(name) && this.$() < this.pc) {
      this.da.enqueue(name);
    } else {
      this.dc(name);
    }
  };
  /**
   * @return {undefined}
   */
  c.pe = function() {
    var job = this.da;
    for (;this.$() < this.Ci;) {
      job.enqueue(this.qb());
    }
    for (;this.$() > this.pc && 0 < this.da.$();) {
      this.dc(job.xd());
    }
  };
  /**
   * @return {?}
   */
  c.qb = function() {
    return{};
  };
  /**
   * @param {Object} a
   * @return {undefined}
   */
  c.dc = function(a) {
    if ("function" == typeof a.qa) {
      a.qa();
    } else {
      var prefix;
      for (prefix in a) {
        /** @type {null} */
        a[prefix] = null;
      }
    }
  };
  /**
   * @param {string} keepData
   * @return {?}
   */
  c.bh = function(keepData) {
    return "function" == typeof keepData.Ej ? keepData.Ej() : true;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.contains = function(name) {
    return this.da.contains(name) || this.Ob.contains(name);
  };
  /**
   * @return {?}
   */
  c.$ = function() {
    return this.da.$() + this.Ob.$();
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return this.da.jb() && this.Ob.jb();
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    result.b.l.call(this);
    if (0 < this.Ob.$()) {
      throw Error("[goog.structs.Pool] Objects not released");
    }
    delete this.Ob;
    var opts = this.da;
    for (;!opts.jb();) {
      this.dc(opts.xd());
    }
    delete this.da;
  };
  /**
   * @param {?} y
   * @param {?} x
   * @return {undefined}
   */
  var Point = function(y, x) {
    this.Bi = y;
    this.ld = x;
  };
  /**
   * @return {?}
   */
  Point.prototype.getKey = function() {
    return this.Bi;
  };
  /**
   * @return {?}
   */
  Point.prototype.ma = function() {
    return this.ld;
  };
  /**
   * @return {?}
   */
  Point.prototype.clone = function() {
    return new Point(this.Bi, this.ld);
  };
  /**
   * @param {Object} object
   * @return {undefined}
   */
  var def = function(object) {
    /** @type {Array} */
    this.Wa = [];
    if (object) {
      a: {
        if (object instanceof def) {
          var codeSegments = object.Ca();
          object = object.na();
          if (0 >= this.$()) {
            /** @type {Array} */
            var points = this.Wa;
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              points.push(new Point(codeSegments[i], object[i]));
            }
            break a;
          }
        } else {
          codeSegments = forIn(object);
          object = ref(object);
        }
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length;i++) {
          iter(this, codeSegments[i], object[i]);
        }
      }
    }
  };
  /**
   * @param {Object} target
   * @param {number} i
   * @param {number} s
   * @return {undefined}
   */
  var iter = function(target, i, s) {
    var j = target.Wa;
    j.push(new Point(i, s));
    /** @type {number} */
    i = j.length - 1;
    target = target.Wa;
    s = target[i];
    for (;0 < i;) {
      if (j = i - 1 >> 1, target[j].getKey() > s.getKey()) {
        target[i] = target[j];
        /** @type {number} */
        i = j;
      } else {
        break;
      }
    }
    /** @type {number} */
    target[i] = s;
  };
  c = def.prototype;
  /**
   * @return {?}
   */
  c.remove = function() {
    var index = this.Wa;
    var nodes = index.length;
    var digit = index[0];
    if (!(0 >= nodes)) {
      if (1 == nodes) {
        removeRule(index);
      } else {
        index[0] = index.pop();
        /** @type {number} */
        index = 0;
        nodes = this.Wa;
        var count = nodes.length;
        var node = nodes[index];
        for (;index < count >> 1;) {
          /** @type {number} */
          var smallerChildIndex = 2 * index + 1;
          /** @type {number} */
          var i = 2 * index + 2;
          /** @type {number} */
          smallerChildIndex = i < count && nodes[i].getKey() < nodes[smallerChildIndex].getKey() ? i : smallerChildIndex;
          if (nodes[smallerChildIndex].getKey() > node.getKey()) {
            break;
          }
          nodes[index] = nodes[smallerChildIndex];
          /** @type {number} */
          index = smallerChildIndex;
        }
        nodes[index] = node;
      }
      return digit.ma();
    }
  };
  /**
   * @return {?}
   */
  c.na = function() {
    var codeSegments = this.Wa;
    /** @type {Array} */
    var eventPath = [];
    var valuesLen = codeSegments.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      eventPath.push(codeSegments[i].ma());
    }
    return eventPath;
  };
  /**
   * @return {?}
   */
  c.Ca = function() {
    var codeSegments = this.Wa;
    /** @type {Array} */
    var eventPath = [];
    var valuesLen = codeSegments.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      eventPath.push(codeSegments[i].getKey());
    }
    return eventPath;
  };
  /**
   * @param {string} keepData
   * @return {?}
   */
  c.cc = function(keepData) {
    return rgb(this.Wa, function(node) {
      return node.getKey() == keepData;
    });
  };
  /**
   * @return {?}
   */
  c.clone = function() {
    return new def(this);
  };
  /**
   * @return {?}
   */
  c.$ = function() {
    return this.Wa.length;
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    return 0 == this.Wa.length;
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    removeRule(this.Wa);
  };
  /**
   * @return {undefined}
   */
  var str = function() {
    def.call(this);
  };
  equal(str, def);
  /**
   * @param {?} callback
   * @param {number} i
   * @return {undefined}
   */
  str.prototype.enqueue = function(callback, i) {
    iter(this, callback, i);
  };
  /**
   * @return {?}
   */
  str.prototype.xd = function() {
    return this.remove();
  };
  /**
   * @param {?} _
   * @param {?} ui
   * @return {undefined}
   */
  var x = function(_, ui) {
    this.ai = void 0;
    this.yf = new str;
    result.call(this, _, ui);
  };
  equal(x, result);
  c = x.prototype;
  /**
   * @param {?} dataName
   * @param {number} name
   * @return {?}
   */
  c.vb = function(dataName, name) {
    if (!dataName) {
      var vb = x.b.vb.call(this);
      if (vb) {
        if (this.sg) {
          this.ai = win.setTimeout(log(this.bf, this), this.sg);
        }
      }
      return vb;
    }
    this.yf.enqueue(isNaN(name) ? name : 100, dataName);
    this.bf();
  };
  /**
   * @return {undefined}
   */
  c.bf = function() {
    var thisView = this.yf;
    for (;0 < thisView.$();) {
      var itemId = this.vb();
      if (itemId) {
        thisView.xd().apply(this, [itemId]);
      } else {
        break;
      }
    }
  };
  /**
   * @param {string} content
   * @return {undefined}
   */
  c.eg = function(content) {
    x.b.eg.call(this, content);
    this.bf();
  };
  /**
   * @return {undefined}
   */
  c.pe = function() {
    x.b.pe.call(this);
    this.bf();
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    x.b.l.call(this);
    win.clearTimeout(this.ai);
    this.yf.clear();
    /** @type {null} */
    this.yf = null;
  };
  /**
   * @param {?} req
   * @param {?} callback
   * @param {?} opts
   * @param {?} view
   * @return {undefined}
   */
  var list = function(req, callback, opts, view) {
    this.Kg = req;
    /** @type {boolean} */
    this.nb = !!view;
    x.call(this, callback, opts);
  };
  equal(list, x);
  /**
   * @return {?}
   */
  list.prototype.qb = function() {
    var self = new item;
    var asserterNames = this.Kg;
    if (asserterNames) {
      asserterNames.forEach(function(protoProps, optgroup) {
        self.headers.set(optgroup, protoProps);
      });
    }
    if (this.nb) {
      /** @type {boolean} */
      self.nb = true;
    }
    return self;
  };
  /**
   * @param {?} keepData
   * @return {?}
   */
  list.prototype.bh = function(keepData) {
    return!keepData.isDisposed() && !keepData.Sc();
  };
  /**
   * @param {number} id
   * @param {string} elem
   * @param {string} returnDom
   * @param {string} arr
   * @param {Object} val
   * @param {boolean} array
   * @return {undefined}
   */
  var first = function(id, elem, returnDom, arr, val, array) {
    model.call(this);
    this.Pd = isNaN(id) ? id : 1;
    /** @type {number} */
    this.zc = isNaN(val) ? Math.max(0, val) : 0;
    /** @type {boolean} */
    this.nb = !!array;
    this.od = new list(elem, returnDom, arr, array);
    this.Ya = new Mat4;
    this.P = new expected(this);
  };
  equal(first, model);
  /** @type {Array.<string>} */
  var fix = "ready complete success error abort timeout".split(" ");
  c = first.prototype;
  /**
   * @param {?} rh
   * @return {undefined}
   */
  c.dj = function(rh) {
    /** @type {number} */
    this.zc = Math.max(0, rh);
  };
  /**
   * @param {string} name
   * @param {string} v
   * @param {string} event
   * @param {string} url
   * @param {number} b
   * @param {number} service
   * @param {Function} opt_noCache
   * @param {number} id
   * @param {string} serviceName
   * @param {boolean} number
   * @return {?}
   */
  c.send = function(name, v, event, url, b, service, opt_noCache, id, serviceName, number) {
    if (this.Ya.get(name)) {
      throw Error("[goog.net.XhrManager] ID in use");
    }
    v = new send(v, log(this.xb, this, name), event, url, b, opt_noCache, isNaN(id) ? id : this.Pd, serviceName, isNaN(number) ? number : this.nb);
    this.Ya.set(name, v);
    name = log(this.$j, this, name);
    this.od.vb(name, service);
    return v;
  };
  /**
   * @param {string} optgroup
   * @param {?} message
   * @return {undefined}
   */
  c.abort = function(optgroup, message) {
    var el = this.Ya.get(optgroup);
    if (el) {
      var c = el.Xf;
      /** @type {boolean} */
      el.Fh = true;
      if (message) {
        if (c) {
          this.P.Ta(c, fix, el.Eh);
          getData(c, "ready", function() {
            this.od.zb(c);
          }, false, this);
        }
        this.Ya.remove(optgroup);
      }
      if (c) {
        c.abort();
      }
    }
  };
  /**
   * @param {string} optgroup
   * @param {Object} src
   * @return {undefined}
   */
  c.$j = function(optgroup, src) {
    var item = this.Ya.get(optgroup);
    if (item && !item.Xf) {
      this.P.listen(src, fix, item.Eh);
      src.dj(this.zc);
      src.ae = item.ae;
      src.nb = item.nb;
      /** @type {Object} */
      item.Xf = src;
      this.dispatchEvent(new attach("ready", this, optgroup, src));
      addItem(this, optgroup, src);
      if (item.Fh) {
        src.abort();
      }
    } else {
      this.od.zb(src);
    }
  };
  /**
   * @param {string} elem
   * @param {Event} data
   * @return {?}
   */
  c.xb = function(elem, data) {
    var value = data.target;
    switch(data.type) {
      case "ready":
        addItem(this, elem, value);
        break;
      case "complete":
        a: {
          var queue = this.Ya.get(elem);
          if (7 == value.Tc || (typeOf(value) || queue.te > queue.Pd)) {
            if (this.dispatchEvent(new attach("complete", this, elem, value)), queue && (queue.Vh = true, queue.Uh)) {
              value = queue.Uh.call(value, data);
              break a;
            }
          }
          /** @type {null} */
          value = null;
        }
        return value;
      case "success":
        this.dispatchEvent(new attach("success", this, elem, value));
        break;
      case "timeout":
      ;
      case "error":
        queue = this.Ya.get(elem);
        if (queue.te > queue.Pd) {
          this.dispatchEvent(new attach("error", this, elem, value));
        }
        break;
      case "abort":
        this.dispatchEvent(new attach("abort", this, elem, value));
    }
    return null;
  };
  /**
   * @param {?} item
   * @param {string} optgroup
   * @param {Object} fn
   * @return {undefined}
   */
  var addItem = function(item, optgroup, fn) {
    var data = item.Ya.get(optgroup);
    if (!data || (data.Vh || data.te > data.Pd)) {
      if (data) {
        item.P.Ta(fn, fix, data.Eh);
        item.Ya.remove(optgroup);
      }
      item.od.zb(fn);
    } else {
      data.te++;
      fn.send(data.getUrl(), data.nf, data.Oa(), data.Kg);
    }
  };
  /**
   * @return {undefined}
   */
  first.prototype.l = function() {
    first.b.l.call(this);
    this.od.qa();
    /** @type {null} */
    this.od = null;
    this.P.qa();
    /** @type {null} */
    this.P = null;
    this.Ya.clear();
    /** @type {null} */
    this.Ya = null;
  };
  /**
   * @param {?} element
   * @param {?} fn
   * @param {string} id
   * @param {string} context
   * @return {undefined}
   */
  var attach = function(element, fn, id, context) {
    Event.call(this, element, fn);
    /** @type {string} */
    this.id = id;
    /** @type {string} */
    this.Xf = context;
  };
  equal(attach, Event);
  /**
   * @param {?} opt_noCache
   * @param {?} service
   * @param {string} opt_method
   * @param {string} opt_headers
   * @param {string} errorCallback
   * @param {?} opt_data
   * @param {number} id
   * @param {string} serviceName
   * @param {?} opt_callback
   * @return {undefined}
   */
  var send = function(opt_noCache, service, opt_method, opt_headers, errorCallback, opt_data, id, serviceName, opt_callback) {
    this.ql = opt_noCache;
    this.nf = opt_method || "GET";
    /** @type {string} */
    this.Hb = opt_headers;
    this.Kg = errorCallback || null;
    this.Pd = isNaN(id) ? id : 1;
    /** @type {number} */
    this.te = 0;
    /** @type {boolean} */
    this.Fh = this.Vh = false;
    this.Eh = service;
    this.Uh = opt_data;
    this.ae = serviceName || "";
    /** @type {boolean} */
    this.nb = !!opt_callback;
    /** @type {null} */
    this.Xf = null;
  };
  /**
   * @return {?}
   */
  send.prototype.getUrl = function() {
    return this.ql;
  };
  /**
   * @return {?}
   */
  send.prototype.Oa = function() {
    return this.Hb;
  };
  /**
   * @param {(number|string)} obj
   * @param {boolean} arg
   * @return {undefined}
   */
  var extend = function(obj, arg) {
    /** @type {string} */
    this.sb = this.le = this.Ha = "";
    /** @type {null} */
    this.Tb = null;
    /** @type {string} */
    this.ec = this.sf = "";
    /** @type {boolean} */
    this.Pa = this.Ek = false;
    if (obj instanceof extend) {
      this.Pa = isNaN(arg) ? arg : obj.Pa;
      match(this, obj.Ha);
      expect(this, obj.le);
      var path = obj.sb;
      isNumber(this);
      this.sb = path;
      indexOf(this, obj.Tb);
      split(this, obj.jc());
      concat(this, obj.Ga.clone());
      path = obj.ec;
      isNumber(this);
      this.ec = path;
    } else {
      if (obj && (path = String(obj).match(href))) {
        /** @type {boolean} */
        this.Pa = !!arg;
        match(this, path[1] || "", true);
        expect(this, path[2] || "", true);
        /** @type {string} */
        var str = path[3] || "";
        isNumber(this);
        this.sb = parseUri(str, true);
        indexOf(this, path[4]);
        split(this, path[5] || "", true);
        concat(this, path[6] || "", true);
        /** @type {string} */
        path = path[7] || "";
        isNumber(this);
        this.ec = parseUri(path);
      } else {
        /** @type {boolean} */
        this.Pa = !!arg;
        this.Ga = new _(null, 0, this.Pa);
      }
    }
  };
  /**
   * @return {?}
   */
  extend.prototype.toString = function() {
    /** @type {Array} */
    var html = [];
    var text = this.Ha;
    if (text) {
      html.push(escapeHTML(text, comment, true), ":");
    }
    var name = this.sb;
    if (name || "file" == text) {
      html.push("//");
      if (text = this.le) {
        html.push(escapeHTML(text, comment, true), "@");
      }
      html.push(encodeURIComponent(String(name)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
      name = this.Tb;
      if (null != name) {
        html.push(":", String(name));
      }
    }
    if (name = this.jc()) {
      if (this.sb) {
        if ("/" != name.charAt(0)) {
          html.push("/");
        }
      }
      html.push(escapeHTML(name, "/" == name.charAt(0) ? newlineRe : badChars, true));
    }
    if (name = this.Ga.toString()) {
      html.push("?", name);
    }
    if (name = this.ec) {
      html.push("#", escapeHTML(name, silentOptions));
    }
    return html.join("");
  };
  /**
   * @param {(Function|string)} node
   * @return {?}
   */
  extend.prototype.resolve = function(node) {
    var a = this.clone();
    /** @type {boolean} */
    var webm = !!node.Ha;
    if (webm) {
      match(a, node.Ha);
    } else {
      /** @type {boolean} */
      webm = !!node.le;
    }
    if (webm) {
      expect(a, node.le);
    } else {
      /** @type {boolean} */
      webm = !!node.sb;
    }
    if (webm) {
      var path = node.sb;
      isNumber(a);
      a.sb = path;
    } else {
      /** @type {boolean} */
      webm = null != node.Tb;
    }
    path = node.jc();
    if (webm) {
      indexOf(a, node.Tb);
    } else {
      if (webm = !!node.sf) {
        if ("/" != path.charAt(0)) {
          if (this.sb && !this.sf) {
            /** @type {string} */
            path = "/" + path;
          } else {
            var segments = a.jc().lastIndexOf("/");
            if (-1 != segments) {
              path = a.jc().substr(0, segments + 1) + path;
            }
          }
        }
        segments = path;
        if (".." == segments || "." == segments) {
          /** @type {string} */
          path = "";
        } else {
          if (-1 != segments.indexOf("./") || -1 != segments.indexOf("/.")) {
            /** @type {boolean} */
            path = 0 == segments.lastIndexOf("/", 0);
            segments = segments.split("/");
            /** @type {Array} */
            var out = [];
            /** @type {number} */
            var pos = 0;
            for (;pos < segments.length;) {
              var copies = segments[pos++];
              if ("." == copies) {
                if (path) {
                  if (pos == segments.length) {
                    out.push("");
                  }
                }
              } else {
                if (".." == copies) {
                  if (1 < out.length || 1 == out.length && "" != out[0]) {
                    out.pop();
                  }
                  if (path) {
                    if (pos == segments.length) {
                      out.push("");
                    }
                  }
                } else {
                  out.push(copies);
                  /** @type {boolean} */
                  path = true;
                }
              }
            }
            /** @type {string} */
            path = out.join("/");
          } else {
            path = segments;
          }
        }
      }
    }
    if (webm) {
      split(a, path);
    } else {
      /** @type {boolean} */
      webm = "" !== node.Ga.toString();
    }
    if (webm) {
      concat(a, node.Ga.clone());
    } else {
      /** @type {boolean} */
      webm = !!node.ec;
    }
    if (webm) {
      node = node.ec;
      isNumber(a);
      /** @type {(Function|string)} */
      a.ec = node;
    }
    return a;
  };
  /**
   * @return {?}
   */
  extend.prototype.clone = function() {
    return new extend(this);
  };
  /**
   * @param {?} a
   * @param {string} url
   * @param {boolean} isPath
   * @return {?}
   */
  var match = function(a, url, isPath) {
    isNumber(a);
    a.Ha = isPath ? parseUri(url, true) : url;
    if (a.Ha) {
      a.Ha = a.Ha.replace(/:$/, "");
    }
    return a;
  };
  /**
   * @param {?} a
   * @param {string} str
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var expect = function(a, str, dataAndEvents) {
    isNumber(a);
    a.le = dataAndEvents ? parseUri(str) : str;
  };
  /**
   * @param {?} obj
   * @param {number} end
   * @return {undefined}
   */
  var indexOf = function(obj, end) {
    isNumber(obj);
    if (end) {
      /** @type {number} */
      end = Number(end);
      if (isNaN(end) || 0 > end) {
        throw Error("Bad port number " + end);
      }
      /** @type {number} */
      obj.Tb = end;
    } else {
      /** @type {null} */
      obj.Tb = null;
    }
  };
  /**
   * @return {?}
   */
  extend.prototype.jc = function() {
    return this.sf;
  };
  /**
   * @param {?} str
   * @param {string} path
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var split = function(str, path, dataAndEvents) {
    isNumber(str);
    str.sf = dataAndEvents ? parseUri(path, true) : path;
    return str;
  };
  /**
   * @param {?} first
   * @param {string} obj
   * @param {boolean} var_args
   * @return {?}
   */
  var concat = function(first, obj, var_args) {
    isNumber(first);
    if (obj instanceof _) {
      /** @type {string} */
      first.Ga = obj;
      first.Ga.qh(first.Pa);
    } else {
      if (!var_args) {
        obj = escapeHTML(obj, parts);
      }
      first.Ga = new _(obj, 0, first.Pa);
    }
    return first;
  };
  /**
   * @param {?} object
   * @param {string} obj
   * @param {string} v
   * @return {undefined}
   */
  var serialize = function(object, obj, v) {
    isNumber(object);
    if (!join(v)) {
      /** @type {Array} */
      v = [String(v)];
    }
    activate(object.Ga, obj, v);
  };
  /**
   * @param {?} object
   * @return {undefined}
   */
  var isNumber = function(object) {
    if (object.Ek) {
      throw Error("Tried to modify a read-only Uri");
    }
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  extend.prototype.qh = function(deepDataAndEvents) {
    /** @type {boolean} */
    this.Pa = deepDataAndEvents;
    if (this.Ga) {
      this.Ga.qh(deepDataAndEvents);
    }
    return this;
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var restore = function(object) {
    return object instanceof extend ? object.clone() : new extend(object, void 0);
  };
  /**
   * @param {string} str
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var parseUri = function(str, dataAndEvents) {
    return str ? dataAndEvents ? decodeURI(str.replace(/%25/g, "%2525")) : decodeURIComponent(str) : "";
  };
  /**
   * @param {string} str
   * @param {RegExp} value
   * @param {Object} dataAndEvents
   * @return {?}
   */
  var escapeHTML = function(str, value, dataAndEvents) {
    return isString(str) ? (str = encodeURI(str).replace(value, _char), dataAndEvents && (str = str.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), str) : null;
  };
  /**
   * @param {string} n
   * @return {?}
   */
  var _char = function(n) {
    n = n.charCodeAt(0);
    return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
  };
  /** @type {RegExp} */
  var comment = /[#\/\?@]/g;
  /** @type {RegExp} */
  var badChars = /[\#\?:]/g;
  /** @type {RegExp} */
  var newlineRe = /[\#\?]/g;
  /** @type {RegExp} */
  var parts = /[\#\?@]/g;
  /** @type {RegExp} */
  var silentOptions = /#/g;
  /**
   * @param {string} obj
   * @param {?} list
   * @param {?} evt
   * @return {undefined}
   */
  var _ = function(obj, list, evt) {
    /** @type {null} */
    this.O = this.T = null;
    this.za = obj || null;
    /** @type {boolean} */
    this.Pa = !!evt;
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var success = function(item) {
    if (!item.T) {
      item.T = new Mat4;
      /** @type {number} */
      item.O = 0;
      if (item.za) {
        parseQuery(item.za, function(messageFormat, type) {
          item.add(decodeURIComponent(messageFormat.replace(/\+/g, " ")), type);
        });
      }
    }
  };
  c = _.prototype;
  /**
   * @return {?}
   */
  c.$ = function() {
    success(this);
    return this.O;
  };
  /**
   * @param {string} name
   * @param {string} now
   * @return {?}
   */
  c.add = function(name, now) {
    success(this);
    /** @type {null} */
    this.za = null;
    name = get(this, name);
    var cached = this.T.get(name);
    if (!cached) {
      this.T.set(name, cached = []);
    }
    cached.push(now);
    this.O += 1;
    return this;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.remove = function(name) {
    success(this);
    name = get(this, name);
    return this.T.cc(name) ? (this.za = null, this.O -= this.T.get(name).length, this.T.remove(name)) : false;
  };
  /**
   * @return {undefined}
   */
  c.clear = function() {
    /** @type {null} */
    this.T = this.za = null;
    /** @type {number} */
    this.O = 0;
  };
  /**
   * @return {?}
   */
  c.jb = function() {
    success(this);
    return 0 == this.O;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.cc = function(name) {
    success(this);
    name = get(this, name);
    return this.T.cc(name);
  };
  /**
   * @return {?}
   */
  c.Ca = function() {
    success(this);
    var segs = this.T.na();
    var codeSegments = this.T.Ca();
    /** @type {Array} */
    var arrayOfArgs = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var seg = segs[i];
      /** @type {number} */
      var k = 0;
      for (;k < seg.length;k++) {
        arrayOfArgs.push(codeSegments[i]);
      }
    }
    return arrayOfArgs;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.na = function(name) {
    success(this);
    /** @type {Array} */
    var tagName = [];
    if (isString(name)) {
      if (this.cc(name)) {
        tagName = getElementsByTagName(tagName, this.T.get(get(this, name)));
      }
    } else {
      name = this.T.na();
      /** @type {number} */
      var c = 0;
      for (;c < name.length;c++) {
        tagName = getElementsByTagName(tagName, name[c]);
      }
    }
    return tagName;
  };
  /**
   * @param {string} name
   * @param {?} attr
   * @return {?}
   */
  c.set = function(name, attr) {
    success(this);
    /** @type {null} */
    this.za = null;
    name = get(this, name);
    if (this.cc(name)) {
      this.O -= this.T.get(name).length;
    }
    this.T.set(name, [attr]);
    this.O += 1;
    return this;
  };
  /**
   * @param {string} name
   * @param {?} attr
   * @return {?}
   */
  c.get = function(name, attr) {
    var data = name ? this.na(name) : [];
    return 0 < data.length ? String(data[0]) : attr;
  };
  /**
   * @param {Node} item
   * @param {string} name
   * @param {?} value
   * @return {undefined}
   */
  var activate = function(item, name, value) {
    item.remove(name);
    if (0 < value.length) {
      /** @type {null} */
      item.za = null;
      item.T.set(get(item, name), map(value));
      item.O += value.length;
    }
  };
  /**
   * @return {?}
   */
  _.prototype.toString = function() {
    if (this.za) {
      return this.za;
    }
    if (!this.T) {
      return "";
    }
    /** @type {Array} */
    var assigns = [];
    var expected = this.T.Ca();
    /** @type {number} */
    var x = 0;
    for (;x < expected.length;x++) {
      var obj = expected[x];
      /** @type {string} */
      var redirect_uri = encodeURIComponent(String(obj));
      obj = this.na(obj);
      /** @type {number} */
      var i = 0;
      for (;i < obj.length;i++) {
        /** @type {string} */
        var vvar = redirect_uri;
        if ("" !== obj[i]) {
          vvar += "=" + encodeURIComponent(String(obj[i]));
        }
        assigns.push(vvar);
      }
    }
    return this.za = assigns.join("&");
  };
  /**
   * @return {?}
   */
  _.prototype.clone = function() {
    var item = new _;
    item.za = this.za;
    if (this.T) {
      item.T = this.T.clone();
      item.O = this.O;
    }
    return item;
  };
  /**
   * @param {(Node|string)} num
   * @param {string} keepData
   * @return {?}
   */
  var get = function(num, keepData) {
    /** @type {string} */
    var field = String(keepData);
    if (num.Pa) {
      /** @type {string} */
      field = field.toLowerCase();
    }
    return field;
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  _.prototype.qh = function(deepDataAndEvents) {
    if (deepDataAndEvents) {
      if (!this.Pa) {
        success(this);
        /** @type {null} */
        this.za = null;
        this.T.forEach(function(isXML, klass) {
          var rvar = klass.toLowerCase();
          if (klass != rvar) {
            this.remove(klass);
            activate(this, rvar, isXML);
          }
        }, this);
      }
    }
    /** @type {boolean} */
    this.Pa = deepDataAndEvents;
  };
  /**
   * @param {?} object
   * @return {undefined}
   */
  _.prototype.extend = function(object) {
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;i++) {
      each(arguments[i], function(config, elements) {
        this.add(elements, config);
      }, this);
    }
  };
  var exclude = {};
  var nextState = {};
  var excludeKeys = {};
  var reservedParams = {};
  var depExclude = {};
  var binary = {};
  /**
   * @return {?}
   */
  var url = function() {
    throw Error("Do not instantiate directly");
  };
  /** @type {null} */
  url.prototype.Ee = null;
  /**
   * @return {?}
   */
  url.prototype.Oa = function() {
    return this.content;
  };
  /**
   * @return {?}
   */
  url.prototype.toString = function() {
    return this.content;
  };
  /**
   * @return {undefined}
   */
  var parent = function() {
    url.call(this);
  };
  equal(parent, url);
  parent.prototype.Ic = exclude;
  /**
   * @param {?} selector
   * @param {Function} elem
   * @param {Function} opt_attributes
   * @return {undefined}
   */
  var suffixClasses = function(selector, elem, opt_attributes) {
    selector.innerHTML = jQuery(elem(opt_attributes || orig, void 0, void 0));
  };
  /**
   * @param {Object} node
   * @return {?}
   */
  var replaceWith = function(node) {
    /** @type {function (Element): ?} */
    var value = trigger;
    var dom = dealoc();
    node = value(node || orig, void 0, void 0);
    value = jQuery(node);
    if (node instanceof url) {
      if (node.Ic === binary) {
        node = cloneNode(node.toString());
      } else {
        if (node.Ic !== exclude) {
          throw Error("Sanitized content was not of kind TEXT or HTML.");
        }
        it("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
        node = search(node.toString(), node.Ee || null);
      }
    } else {
      node = search(value, null);
    }
    dom = dom.ca;
    /** @type {Object} */
    value = node;
    node = dom.createElement("DIV");
    if (ms) {
      value = sync(field, value);
      node.innerHTML = _fn(value);
      node.removeChild(node.firstChild);
    } else {
      node.innerHTML = _fn(value);
    }
    if (1 == node.childNodes.length) {
      dom = node.removeChild(node.firstChild);
    } else {
      dom = dom.createDocumentFragment();
      for (;node.firstChild;) {
        dom.appendChild(node.firstChild);
      }
    }
    return dom;
  };
  /**
   * @param {Function} value
   * @param {Function} opt_attributes
   * @param {number} elementDef
   * @param {Node} node
   * @return {?}
   */
  var createElement = function(value, opt_attributes, elementDef, node) {
    value = value(opt_attributes || orig, void 0, elementDef);
    node = (node || dealoc()).createElement("DIV");
    value = jQuery(value);
    /** @type {Function} */
    node.innerHTML = value;
    if (1 == node.childNodes.length) {
      value = node.firstChild;
      if (1 == value.nodeType) {
        /** @type {Function} */
        node = value;
      }
    }
    return node;
  };
  /**
   * @param {Object} context
   * @return {?}
   */
  var jQuery = function(context) {
    if (!replace(context)) {
      return String(context);
    }
    if (context instanceof url) {
      if (context.Ic === exclude) {
        return context.Oa();
      }
      if (context.Ic === binary) {
        return $(context.Oa());
      }
    }
    return "zSoyz";
  };
  var orig = {};
  /**
   * @param {string} formatString
   * @param {number} var_args
   * @return {?}
   */
  var format = function(formatString, var_args) {
    /** @type {Array.<?>} */
    var fns = Array.prototype.slice.call(arguments);
    var messageFormat = fns.shift();
    if ("undefined" == typeof messageFormat) {
      throw Error("[goog.string.format] Template required");
    }
    return messageFormat.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData, which, opt_attributes, matcherFunction) {
      if ("%" == which) {
        return "%";
      }
      var callback = fns.shift();
      if ("undefined" == typeof callback) {
        throw Error("[goog.string.format] Not enough arguments");
      }
      arguments[0] = callback;
      return args[which].apply(null, arguments);
    });
  };
  var args = {
    /**
     * @param {string} str
     * @param {string} c
     * @param {string} length
     * @return {?}
     */
    s : function(str, c, length) {
      return isNaN(length) || ("" == length || str.length >= Number(length)) ? str : str = -1 < c.indexOf("-", 0) ? str + strRepeat(" ", Number(length) - str.length) : strRepeat(" ", Number(length) - str.length) + str;
    },
    /**
     * @param {(number|string)} n
     * @param {string} key
     * @param {?} length
     * @param {string} s
     * @param {string} c
     * @return {?}
     */
    f : function(n, key, length, s, c) {
      s = n.toString();
      if (!isNaN(c)) {
        if (!("" == c)) {
          /** @type {string} */
          s = parseFloat(n).toFixed(c);
        }
      }
      /** @type {string} */
      var str = 0 > Number(n) ? "-" : 0 <= key.indexOf("+") ? "+" : 0 <= key.indexOf(" ") ? " " : "";
      if (0 <= Number(n)) {
        /** @type {string} */
        s = str + s;
      }
      if (isNaN(length) || s.length >= Number(length)) {
        return s;
      }
      /** @type {string} */
      s = isNaN(c) ? Math.abs(Number(n)).toString() : Math.abs(Number(n)).toFixed(c);
      /** @type {number} */
      n = Number(length) - s.length - str.length;
      return s = 0 <= key.indexOf("-", 0) ? str + s + strRepeat(" ", n) : str + strRepeat(0 <= key.indexOf("0", 0) ? "0" : " ", n) + s;
    },
    /**
     * @param {?} s
     * @param {string} path
     * @param {?} callback
     * @param {string} f
     * @param {?} substitution
     * @param {?} opts
     * @param {?} partials
     * @param {?} v
     * @return {?}
     */
    d : function(s, path, callback, f, substitution, opts, partials, v) {
      return args.f(parseInt(s, 10), path, callback, f, 0, opts, partials, v);
    }
  };
  /** @type {function (?, string, ?, string, ?, ?, ?, ?): ?} */
  args.i = args.d;
  /** @type {function (?, string, ?, string, ?, ?, ?, ?): ?} */
  args.u = args.d;
  /**
   * @param {RegExp} string
   * @return {?}
   */
  var interpolate = function(string) {
    return(string = string.exec(txt)) ? string[1] : "";
  };
  var originalValue = function() {
    if (Firefox) {
      return interpolate(/Firefox\/([0-9.]+)/);
    }
    if (ms || (err || err2)) {
      return cDigit;
    }
    if (fullOtherName) {
      return toVLQSigned() ? interpolate(/CriOS\/([0-9.]+)/) : interpolate(/Chrome\/([0-9.]+)/);
    }
    if (ic && !toVLQSigned()) {
      return interpolate(/Version\/([0-9.]+)/);
    }
    if (program || inverse) {
      /** @type {(Array.<string>|null)} */
      var res = /Version\/(\S+).*Mobile\/(\S+)/.exec(txt);
      if (res) {
        return res[1] + "." + res[2];
      }
    } else {
      if (gc) {
        return(res = interpolate(/Android\s+([0-9.]+)/)) ? res : interpolate(/Version\/([0-9.]+)/);
      }
    }
    return "";
  }();
  var D = function(makeIterator) {
    /** @type {boolean} */
    var b = false;
    var callback;
    return function() {
      if (!b) {
        callback = makeIterator();
        /** @type {boolean} */
        b = true;
      }
      return callback;
    };
  }(function() {
    var a;
    if (!(a = !ms)) {
      /** @type {boolean} */
      a = 0 <= parseColor(originalValue, 9);
    }
    return a;
  });
  /**
   * @return {undefined}
   */
  var left = function() {
  };
  isUndefinedOrNull(left);
  /** @type {number} */
  left.prototype.Rd = 0;
  /**
   * @param {string} dx
   * @return {undefined}
   */
  var s = function(dx) {
    model.call(this);
    this.rb = dx || dealoc();
    /** @type {null} */
    this.uc = I;
    /** @type {null} */
    this.ha = null;
    /** @type {boolean} */
    this.aa = false;
    /** @type {null} */
    this.j = null;
    this.Nb = void 0;
    /** @type {null} */
    this.xa = this.La = this.H = null;
    /** @type {boolean} */
    this.nj = false;
  };
  equal(s, model);
  s.prototype.wk = left.ub();
  /** @type {null} */
  var I = null;
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {boolean} value
   * @return {?}
   */
  var close = function(expectedNumberOfNonCommentArgs, value) {
    switch(expectedNumberOfNonCommentArgs) {
      case 1:
        return value ? "disable" : "enable";
      case 2:
        return value ? "highlight" : "unhighlight";
      case 4:
        return value ? "activate" : "deactivate";
      case 8:
        return value ? "select" : "unselect";
      case 16:
        return value ? "check" : "uncheck";
      case 32:
        return value ? "focus" : "blur";
      case 64:
        return value ? "open" : "close";
    }
    throw Error("Invalid component state");
  };
  /**
   * @return {?}
   */
  s.prototype.getId = function() {
    return this.ha || (this.ha = ":" + (this.wk.Rd++).toString(36));
  };
  /**
   * @param {Object} res
   * @param {string} props
   * @return {undefined}
   */
  var sendMessage = function(res, props) {
    if (res.H && res.H.xa) {
      var arr2 = res.H.xa;
      var i = res.ha;
      if (i in arr2) {
        delete arr2[i];
      }
      groupBy(res.H.xa, props, res);
    }
    /** @type {string} */
    res.ha = props;
  };
  /**
   * @return {?}
   */
  s.prototype.a = function() {
    return this.j;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  s.prototype.Ne = function(deepDataAndEvents) {
    return this.j ? this.rb.Ne(deepDataAndEvents, this.j) : [];
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  s.prototype.Fd = function(deepDataAndEvents) {
    return this.j ? this.rb.Fd(deepDataAndEvents, this.j) : null;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  s.prototype.B = function(deepDataAndEvents) {
    return this.Fd(deepDataAndEvents);
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var fire = function(obj) {
    if (!obj.Nb) {
      obj.Nb = new expected(obj);
    }
    return obj.Nb;
  };
  /**
   * @param {(Object|string)} val
   * @param {?} text
   * @return {undefined}
   */
  var formatValue = function(val, text) {
    if (val == text) {
      throw Error("Unable to set parent component");
    }
    var name;
    if (name = text && (val.H && val.ha)) {
      name = val.H;
      var dayNamesShort = val.ha;
      name = name.xa && dayNamesShort ? getName(name.xa, dayNamesShort) || null : null;
    }
    if (name && val.H != text) {
      throw Error("Unable to set parent component");
    }
    val.H = text;
    s.b.rh.call(val, text);
  };
  c = s.prototype;
  /**
   * @return {?}
   */
  c.getParent = function() {
    return this.H;
  };
  /**
   * @param {?} mapper
   * @return {undefined}
   */
  c.rh = function(mapper) {
    if (this.H && this.H != mapper) {
      throw Error("Method not supported");
    }
    s.b.rh.call(this, mapper);
  };
  /**
   * @return {?}
   */
  c.hc = function() {
    return this.rb;
  };
  /**
   * @return {undefined}
   */
  c.C = function() {
    this.j = this.rb.createElement("DIV");
  };
  /**
   * @param {Object} target
   * @return {undefined}
   */
  c.render = function(target) {
    if (this.aa) {
      throw Error("Component already rendered");
    }
    if (!this.j) {
      this.C();
    }
    if (target) {
      target.insertBefore(this.j, null);
    } else {
      this.rb.ca.body.appendChild(this.j);
    }
    if (!(this.H && !this.H.aa)) {
      this.D();
    }
  };
  /**
   * @param {string} b
   * @return {undefined}
   */
  c.Jc = function(b) {
    if (this.aa) {
      throw Error("Component already rendered");
    }
    if (b && this.Ec(b)) {
      /** @type {boolean} */
      this.nj = true;
      var rb = isElement(b);
      if (!(this.rb && this.rb.ca == rb)) {
        this.rb = dealoc(b);
      }
      this.L(b);
      this.D();
    } else {
      throw Error("Invalid element to decorate");
    }
  };
  /**
   * @return {?}
   */
  c.Ec = function() {
    return true;
  };
  /**
   * @param {?} v12
   * @return {undefined}
   */
  c.L = function(v12) {
    this.j = v12;
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    /** @type {boolean} */
    this.aa = true;
    C(this, function(d) {
      if (!d.aa) {
        if (d.a()) {
          d.D();
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  c.Kb = function() {
    C(this, function(templateAttr) {
      if (templateAttr.aa) {
        templateAttr.Kb();
      }
    });
    if (this.Nb) {
      this.Nb.cd();
    }
    /** @type {boolean} */
    this.aa = false;
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    if (this.aa) {
      this.Kb();
    }
    if (this.Nb) {
      this.Nb.qa();
      delete this.Nb;
    }
    C(this, function(dataAndEvents) {
      dataAndEvents.qa();
    });
    if (!this.nj) {
      if (this.j) {
        removeChild(this.j);
      }
    }
    /** @type {null} */
    this.H = this.j = this.xa = this.La = null;
    s.b.l.call(this);
  };
  /**
   * @param {?} obj
   * @param {Object} item
   * @return {undefined}
   */
  var getter = function(obj, item) {
    var y = obj.La ? obj.La.length : 0;
    if (item.aa && !obj.aa) {
      throw Error("Component already rendered");
    }
    if (0 > y || y > (obj.La ? obj.La.length : 0)) {
      throw Error("Child component index out of bounds");
    }
    if (!(obj.xa && obj.La)) {
      obj.xa = {};
      /** @type {Array} */
      obj.La = [];
    }
    if (item.getParent() == obj) {
      var n = item.getId();
      /** @type {Object} */
      obj.xa[n] = item;
      fetch(obj.La, item);
    } else {
      groupBy(obj.xa, item.getId(), item);
    }
    formatValue(item, obj);
    mergeSort(obj.La, y, 0, item);
    if (item.aa && (obj.aa && item.getParent() == obj)) {
      n = obj.Pc();
      y = n.childNodes[y] || null;
      if (y != item.a()) {
        n.insertBefore(item.a(), y);
      }
    } else {
      if (obj.aa) {
        if (!item.aa) {
          if (item.j) {
            if (item.j.parentNode) {
              if (1 == item.j.parentNode.nodeType) {
                item.D();
              }
            }
          }
        }
      }
    }
  };
  /**
   * @return {?}
   */
  s.prototype.Pc = function() {
    return this.j;
  };
  /**
   * @return {?}
   */
  s.prototype.Ai = function() {
    if (null == this.uc) {
      /** @type {boolean} */
      this.uc = "rtl" == _getStyle(this.aa ? this.j : this.rb.ca.body, "direction");
    }
    return this.uc;
  };
  /**
   * @param {boolean} obj
   * @return {undefined}
   */
  s.prototype.hd = function(obj) {
    if (this.aa) {
      throw Error("Component already rendered");
    }
    /** @type {boolean} */
    this.uc = obj;
  };
  /**
   * @param {?} dataAndEvents
   * @param {Function} opt_obj2
   * @return {undefined}
   */
  var C = function(dataAndEvents, opt_obj2) {
    if (dataAndEvents.La) {
      slice(dataAndEvents.La, opt_obj2, void 0);
    }
  };
  /**
   * @param {string} item
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  s.prototype.removeChild = function(item, dataAndEvents) {
    if (item) {
      var name = isString(item) ? item : item.getId();
      item = this.xa && name ? getName(this.xa, name) || null : null;
      if (name && item) {
        var timeMap = this.xa;
        if (name in timeMap) {
          delete timeMap[name];
        }
        fetch(this.La, item);
        if (dataAndEvents) {
          item.Kb();
          if (item.j) {
            removeChild(item.j);
          }
        }
        formatValue(item, null);
      }
    }
    if (!item) {
      throw Error("Child is not in parent component");
    }
    return item;
  };
  /**
   * @return {undefined}
   */
  var obj = function() {
  };
  var Ij;
  isUndefinedOrNull(obj);
  /**
   * @param {Function} object
   * @param {string} collection
   * @return {?}
   */
  var forOwn = function(object, collection) {
    var result = new object;
    /**
     * @return {?}
     */
    result.Lb = function() {
      return collection;
    };
    return result;
  };
  var tab = {
    button : "pressed",
    checkbox : "checked",
    menuitem : "selected",
    menuitemcheckbox : "checked",
    menuitemradio : "checked",
    radio : "checked",
    tab : "selected",
    treeitem : "selected"
  };
  c = obj.prototype;
  /**
   * @return {undefined}
   */
  c.xg = function() {
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.C = function(name) {
    return name.hc().C("DIV", expand(this, name).join(" "), name.Oa());
  };
  /**
   * @param {?} var_args
   * @return {?}
   */
  c.Pc = function(var_args) {
    return var_args;
  };
  /**
   * @param {Object} child
   * @param {string} f
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  c.zd = function(child, f, deepDataAndEvents) {
    if (child = child.a ? child.a() : child) {
      /** @type {Array} */
      var r = [f];
      if (ms) {
        if (!apply("7")) {
          r = read(classes(child), f);
          r.push(f);
        }
      }
      (deepDataAndEvents ? toggleClass : highlight)(child, r);
    }
  };
  /**
   * @return {?}
   */
  c.Ec = function() {
    return true;
  };
  /**
   * @param {Object} o
   * @param {Object} obj
   * @return {?}
   */
  c.Jc = function(o, obj) {
    if (obj.id) {
      sendMessage(o, obj.id);
    }
    var el = this.Pc(obj);
    if (el && el.firstChild) {
      unfoldSoak(o, el.firstChild.nextSibling ? map(el.childNodes) : el.firstChild);
    } else {
      /** @type {null} */
      o.Hb = null;
    }
    /** @type {number} */
    var lvl = 0;
    var i = this.Lb();
    var length = this.Lb();
    /** @type {boolean} */
    var htmlChanged = false;
    /** @type {boolean} */
    var capitalFirst = false;
    /** @type {boolean} */
    var b = false;
    var args = map(classes(obj));
    slice(args, function(index) {
      if (htmlChanged || index != i) {
        if (capitalFirst || index != length) {
          lvl |= hex_bytes(this, index);
        } else {
          /** @type {boolean} */
          capitalFirst = true;
        }
      } else {
        /** @type {boolean} */
        htmlChanged = true;
        if (length == i) {
          /** @type {boolean} */
          capitalFirst = true;
        }
      }
      if (1 == hex_bytes(this, index)) {
        if (size(el)) {
          setAttributes(el, false);
        }
      }
    }, this);
    o.g = lvl;
    if (!htmlChanged) {
      args.push(i);
      if (length == i) {
        /** @type {boolean} */
        capitalFirst = true;
      }
    }
    if (!capitalFirst) {
      args.push(length);
    }
    var a = o.Ba;
    if (a) {
      args.push.apply(args, a);
    }
    if (ms && !apply("7")) {
      var all = read(args);
      if (0 < all.length) {
        args.push.apply(args, all);
        /** @type {boolean} */
        b = true;
      }
    }
    if (!htmlChanged || (!capitalFirst || (a || b))) {
      obj.className = args.join(" ");
    }
    return obj;
  };
  /**
   * @param {Object} walkers
   * @return {undefined}
   */
  c.zi = function(walkers) {
    if (walkers.Ai()) {
      this.hd(walkers.a(), true);
    }
    if (walkers.isEnabled()) {
      this.de(walkers, walkers.mb);
    }
  };
  /**
   * @param {Element} max
   * @param {Element} obj
   * @param {Element} min
   * @return {undefined}
   */
  var title = function(max, obj, min) {
    if (max = min || max.xg()) {
      min = obj.getAttribute("role") || null;
      if (max != min) {
        if (max) {
          obj.setAttribute("role", max);
        } else {
          obj.removeAttribute("role");
        }
      }
    }
  };
  c = obj.prototype;
  /**
   * @param {Element} obj
   * @param {string} value
   * @return {undefined}
   */
  c.oh = function(obj, value) {
    removeClass(obj, "label", value);
  };
  /**
   * @param {Object} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  c.be = function(obj, expectedNumberOfNonCommentArgs) {
    /** @type {boolean} */
    var value = !expectedNumberOfNonCommentArgs;
    var descendants = ms || err2 ? obj.getElementsByTagName("*") : null;
    if (property) {
      if (value = value ? "none" : "", obj.style && (obj.style[property] = value), descendants) {
        /** @type {number} */
        var i = 0;
        var descendant;
        for (;descendant = descendants[i];i++) {
          if (descendant.style) {
            /** @type {string} */
            descendant.style[property] = value;
          }
        }
      }
    } else {
      if (ms || err2) {
        if (value = value ? "on" : "", obj.setAttribute("unselectable", value), descendants) {
          /** @type {number} */
          i = 0;
          for (;descendant = descendants[i];i++) {
            descendant.setAttribute("unselectable", value);
          }
        }
      }
    }
  };
  /**
   * @param {Object} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  c.hd = function(obj, expectedNumberOfNonCommentArgs) {
    this.zd(obj, this.Lb() + "-rtl", expectedNumberOfNonCommentArgs);
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  c.Ug = function(dataAndEvents) {
    var suiteView;
    return dataAndEvents.pa & 32 && (suiteView = dataAndEvents.ic()) ? size(suiteView) : false;
  };
  /**
   * @param {Object} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  c.de = function(obj, expectedNumberOfNonCommentArgs) {
    var el;
    if (obj.pa & 32 && (el = obj.ic())) {
      if (!expectedNumberOfNonCommentArgs && obj.oc()) {
        try {
          el.blur();
        } catch (d) {
        }
        if (obj.oc()) {
          obj.li();
        }
      }
      if (size(el) != expectedNumberOfNonCommentArgs) {
        setAttributes(el, expectedNumberOfNonCommentArgs);
      }
    }
  };
  /**
   * @param {Element} obj
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.sh = function(obj, recurring) {
    cleanup(obj, recurring);
    if (obj) {
      removeClass(obj, "hidden", !recurring);
    }
  };
  /**
   * @param {number} opt_attributes
   * @param {boolean} expectedNumberOfNonCommentArgs
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  c.Sa = function(opt_attributes, expectedNumberOfNonCommentArgs, deepDataAndEvents) {
    var suiteView = opt_attributes.a();
    if (suiteView) {
      var which = objectToString(this, expectedNumberOfNonCommentArgs);
      if (which) {
        this.zd(opt_attributes, which, deepDataAndEvents);
      }
      this.lb(suiteView, expectedNumberOfNonCommentArgs, deepDataAndEvents);
    }
  };
  /**
   * @param {Object} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  c.lb = function(obj, expectedNumberOfNonCommentArgs, deepDataAndEvents) {
    if (!Ij) {
      Ij = {
        1 : "disabled",
        8 : "selected",
        16 : "checked",
        64 : "expanded"
      };
    }
    expectedNumberOfNonCommentArgs = Ij[expectedNumberOfNonCommentArgs];
    var i = obj.getAttribute("role") || null;
    if (i) {
      i = tab[i] || expectedNumberOfNonCommentArgs;
      expectedNumberOfNonCommentArgs = "checked" == expectedNumberOfNonCommentArgs || "selected" == expectedNumberOfNonCommentArgs ? i : expectedNumberOfNonCommentArgs;
    }
    if (expectedNumberOfNonCommentArgs) {
      removeClass(obj, expectedNumberOfNonCommentArgs, deepDataAndEvents);
    }
  };
  /**
   * @param {?} $rootScope
   * @param {Object} value
   * @return {undefined}
   */
  c.ph = function($rootScope, value) {
    var element = this.Pc($rootScope);
    if (element && (removeEvent(element), value)) {
      if (isString(value)) {
        walk(element, value);
      } else {
        /**
         * @param {string} value
         * @return {undefined}
         */
        var iterator = function(value) {
          if (value) {
            var doc = isElement(element);
            element.appendChild(isString(value) ? doc.createTextNode(value) : value);
          }
        };
        if (join(value)) {
          slice(value, iterator);
        } else {
          if (!append(value) || "nodeType" in value) {
            iterator(value);
          } else {
            slice(map(value), iterator);
          }
        }
      }
    }
  };
  /**
   * @param {Node} dataAndEvents
   * @return {?}
   */
  c.ic = function(dataAndEvents) {
    return dataAndEvents.a();
  };
  /**
   * @return {?}
   */
  c.Lb = function() {
    return "goog-control";
  };
  /**
   * @param {?} e
   * @param {string} res
   * @return {?}
   */
  var expand = function(e, res) {
    var a = e.Lb();
    /** @type {Array} */
    var data = [a];
    var args = e.Lb();
    if (args != a) {
      data.push(args);
    }
    a = res.getState();
    /** @type {Array} */
    args = [];
    for (;a;) {
      /** @type {number} */
      var which = a & -a;
      args.push(objectToString(e, which));
      a &= ~which;
    }
    data.push.apply(data, args);
    if (a = res.Ba) {
      data.push.apply(data, a);
    }
    if (ms) {
      if (!apply("7")) {
        data.push.apply(data, read(data));
      }
    }
    return data;
  };
  /**
   * @param {number} data
   * @param {Object} a
   * @return {?}
   */
  var read = function(data, a) {
    /** @type {Array} */
    var toAdd = [];
    if (a) {
      data = getElementsByTagName(data, [a]);
    }
    slice([], function(result) {
      if (!!hasKey(result, bind(push, data))) {
        if (!(a && !push(result, a))) {
          toAdd.push(result.join("_"));
        }
      }
    });
    return toAdd;
  };
  /**
   * @param {?} parent
   * @param {number} object
   * @return {?}
   */
  var objectToString = function(parent, object) {
    if (!parent.ze) {
      cleanUp(parent);
    }
    return parent.ze[object];
  };
  /**
   * @param {?} parent
   * @param {?} n
   * @return {?}
   */
  var hex_bytes = function(parent, n) {
    if (!parent.gj) {
      if (!parent.ze) {
        cleanUp(parent);
      }
      var set = parent.ze;
      var t = {};
      var i;
      for (i in set) {
        /** @type {string} */
        t[set[i]] = i;
      }
      parent.gj = t;
    }
    /** @type {number} */
    set = parseInt(parent.gj[n], 10);
    return isNaN(set) ? 0 : set;
  };
  /**
   * @param {?} parentClass
   * @return {undefined}
   */
  var cleanUp = function(parentClass) {
    var className = parentClass.Lb();
    className.replace(/\xa0|\s/g, " ");
    parentClass.ze = {
      1 : className + "-disabled",
      2 : className + "-hover",
      4 : className + "-active",
      8 : className + "-selected",
      16 : className + "-checked",
      32 : className + "-focused",
      64 : className + "-open"
    };
  };
  /**
   * @return {undefined}
   */
  var el = function() {
  };
  equal(el, obj);
  isUndefinedOrNull(el);
  c = el.prototype;
  /**
   * @return {?}
   */
  c.xg = function() {
    return "button";
  };
  /**
   * @param {string} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  c.lb = function(obj, expectedNumberOfNonCommentArgs, deepDataAndEvents) {
    switch(expectedNumberOfNonCommentArgs) {
      case 8:
      ;
      case 16:
        removeClass(obj, "pressed", deepDataAndEvents);
        break;
      default:
      ;
      case 64:
      ;
      case 1:
        el.b.lb.call(this, obj, expectedNumberOfNonCommentArgs, deepDataAndEvents);
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.C = function(name) {
    var suiteView = el.b.C.call(this, name);
    this.Df(suiteView, name.Re());
    var expectedNumberOfNonCommentArgs = name.ma();
    if (expectedNumberOfNonCommentArgs) {
      this.ge(suiteView, expectedNumberOfNonCommentArgs);
    }
    if (name.pa & 16) {
      this.lb(suiteView, 16, name.ua());
    }
    return suiteView;
  };
  /**
   * @param {Object} exports
   * @param {Object} walkers
   * @return {?}
   */
  c.Jc = function(exports, walkers) {
    walkers = el.b.Jc.call(this, exports, walkers);
    var EventEmitter = this.ma(walkers);
    exports.ld = EventEmitter;
    exports.zh = this.Re(walkers);
    if (exports.pa & 16) {
      this.lb(walkers, 16, exports.ua());
    }
    return walkers;
  };
  /** @type {function (): undefined} */
  c.ma = noop;
  /** @type {function (): undefined} */
  c.ge = noop;
  /**
   * @param {Object} obj
   * @return {?}
   */
  c.Re = function(obj) {
    return obj.title;
  };
  /**
   * @param {Element} obj
   * @param {?} title
   * @return {undefined}
   */
  c.Df = function(obj, title) {
    if (obj) {
      if (title) {
        obj.title = title;
      } else {
        obj.removeAttribute("title");
      }
    }
  };
  /**
   * @return {?}
   */
  c.Lb = function() {
    return "goog-button";
  };
  /**
   * @param {string} name
   * @param {Function} p
   * @return {undefined}
   */
  var addFile = function(name, p) {
    if (!name) {
      throw Error("Invalid class name " + name);
    }
    if (!then(p)) {
      throw Error("Invalid decorator function " + p);
    }
  };
  var scope = {};
  /**
   * @param {string} id
   * @param {Object} e
   * @param {?} status
   * @return {undefined}
   */
  var error = function(id, e, status) {
    s.call(this, status);
    if (!e) {
      e = this.constructor;
      var error;
      for (;e;) {
        error = errorCallback(e);
        if (error = scope[error]) {
          break;
        }
        e = e.b ? e.b.constructor : null;
      }
      e = error ? then(error.ub) ? error.ub() : new error : null;
    }
    /** @type {Object} */
    this.J = e;
    this.Hb = isNaN(id) ? id : null;
    /** @type {null} */
    this.Kh = null;
  };
  equal(error, s);
  c = error.prototype;
  /** @type {null} */
  c.Hb = null;
  /** @type {number} */
  c.g = 0;
  /** @type {number} */
  c.pa = 39;
  /** @type {number} */
  c.rd = 255;
  /** @type {number} */
  c.il = 0;
  /** @type {boolean} */
  c.mb = true;
  /** @type {null} */
  c.Ba = null;
  /** @type {boolean} */
  c.$e = true;
  /** @type {boolean} */
  c.qe = false;
  /** @type {null} */
  c.Si = null;
  /**
   * @param {string} name
   * @return {undefined}
   */
  var make_name = function(name) {
    if (name.aa) {
      if (0 != name.$e) {
        onLoad(name, false);
      }
    }
    /** @type {boolean} */
    name.$e = false;
  };
  /**
   * @return {?}
   */
  error.prototype.ic = function() {
    return this.J.ic(this);
  };
  /**
   * @param {string} object
   * @param {string} a
   * @return {undefined}
   */
  var getEnumerableProperties = function(object, a) {
    if (a) {
      if (object.Ba) {
        if (!push(object.Ba, a)) {
          object.Ba.push(a);
        }
      } else {
        /** @type {Array} */
        object.Ba = [a];
      }
      object.J.zd(object, a, true);
    }
  };
  c = error.prototype;
  /**
   * @param {string} item
   * @param {string} object
   * @return {undefined}
   */
  c.zd = function(item, object) {
    if (object) {
      getEnumerableProperties(this, item);
    } else {
      if (item) {
        if (this.Ba) {
          if (fetch(this.Ba, item)) {
            if (0 == this.Ba.length) {
              /** @type {null} */
              this.Ba = null;
            }
            this.J.zd(this, item, false);
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.C = function() {
    var suiteView = this.J.C(this);
    this.j = suiteView;
    title(this.J, suiteView, this.Si);
    if (!this.qe) {
      this.J.be(suiteView, false);
    }
    if (!this.mb) {
      this.J.sh(suiteView, false);
    }
  };
  /**
   * @param {string} obj
   * @return {undefined}
   */
  c.oh = function(obj) {
    /** @type {string} */
    this.Kh = obj;
    var suiteView = this.a();
    if (suiteView) {
      this.J.oh(suiteView, obj);
    }
  };
  /**
   * @return {?}
   */
  c.Pc = function() {
    return this.J.Pc(this.a());
  };
  /**
   * @param {Element} v12
   * @return {?}
   */
  c.Ec = function(v12) {
    return this.J.Ec(v12);
  };
  /**
   * @param {Object} walkers
   * @return {undefined}
   */
  c.L = function(walkers) {
    this.j = walkers = this.J.Jc(this, walkers);
    title(this.J, walkers, this.Si);
    if (!this.qe) {
      this.J.be(walkers, false);
    }
    /** @type {boolean} */
    this.mb = "none" != walkers.style.display;
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    error.b.D.call(this);
    var elem = this.J;
    var suiteView = this.j;
    var udataCur = this.Kh;
    if (null != udataCur) {
      elem.oh(suiteView, udataCur);
    }
    if (!this.mb) {
      removeClass(suiteView, "hidden", !this.mb);
    }
    if (!this.isEnabled()) {
      elem.lb(suiteView, 1, !this.isEnabled());
    }
    if (this.pa & 8) {
      elem.lb(suiteView, 8, !!(this.g & 8));
    }
    if (this.pa & 16) {
      elem.lb(suiteView, 16, this.ua());
    }
    if (this.pa & 64) {
      elem.lb(suiteView, 64, !!(this.g & 64));
    }
    this.J.zi(this);
    if (this.pa & -2) {
      if (this.$e && onLoad(this, true), this.pa & 32 && (elem = this.ic())) {
        suiteView = this.va || (this.va = new res);
        put(suiteView, elem);
        fire(this).listen(suiteView, "key", this.gk).listen(elem, "focus", this.ek).listen(elem, "blur", this.li);
      }
    }
  };
  /**
   * @param {Object} x
   * @param {boolean} recurring
   * @return {undefined}
   */
  var onLoad = function(x, recurring) {
    var event = fire(x);
    var src = x.a();
    if (recurring) {
      event.listen(src, "mouseover", x.Ig).listen(src, "mousedown", x.Qc).listen(src, "mouseup", x.af).listen(src, "mouseout", x.Hg);
      if (x.Xe != noop) {
        event.listen(src, "contextmenu", x.Xe);
      }
      if (ms) {
        if (!apply(9)) {
          event.listen(src, "dblclick", x.ni);
        }
        if (!x.Kd) {
          x.Kd = new constructor(x);
          set(x, x.Kd);
        }
      }
    } else {
      event.Ta(src, "mouseover", x.Ig).Ta(src, "mousedown", x.Qc).Ta(src, "mouseup", x.af).Ta(src, "mouseout", x.Hg);
      if (x.Xe != noop) {
        event.Ta(src, "contextmenu", x.Xe);
      }
      if (ms) {
        if (!apply(9)) {
          event.Ta(src, "dblclick", x.ni);
        }
        end(x.Kd);
        /** @type {null} */
        x.Kd = null;
      }
    }
  };
  /**
   * @return {undefined}
   */
  error.prototype.Kb = function() {
    error.b.Kb.call(this);
    if (this.va) {
      this.va.detach();
    }
    if (this.mb) {
      if (this.isEnabled()) {
        this.J.de(this, false);
      }
    }
  };
  /**
   * @return {undefined}
   */
  error.prototype.l = function() {
    error.b.l.call(this);
    if (this.va) {
      this.va.qa();
      delete this.va;
    }
    delete this.J;
    /** @type {null} */
    this.Kd = this.Ba = this.Hb = null;
  };
  /**
   * @return {?}
   */
  error.prototype.Oa = function() {
    return this.Hb;
  };
  /**
   * @param {string} isXML
   * @return {undefined}
   */
  error.prototype.ph = function(isXML) {
    this.J.ph(this.a(), isXML);
    /** @type {string} */
    this.Hb = isXML;
  };
  /**
   * @param {Object} o
   * @param {string} lvl
   * @return {undefined}
   */
  var unfoldSoak = function(o, lvl) {
    /** @type {string} */
    o.Hb = lvl;
  };
  /**
   * @param {string} el
   * @return {?}
   */
  var query = function(el) {
    return(el = el.Oa()) ? (isString(el) ? el : join(el) ? repeat(el, spaces).join("") : getElement(el)).replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") : "";
  };
  c = error.prototype;
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  c.hd = function(obj) {
    error.b.hd.call(this, obj);
    var suiteView = this.a();
    if (suiteView) {
      this.J.hd(suiteView, obj);
    }
  };
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  c.be = function(obj) {
    /** @type {Object} */
    this.qe = obj;
    var suiteView = this.a();
    if (suiteView) {
      this.J.be(suiteView, obj);
    }
  };
  /**
   * @param {boolean} expectedNumberOfNonCommentArgs
   * @param {boolean} recurring
   * @return {?}
   */
  c.sh = function(expectedNumberOfNonCommentArgs, recurring) {
    if (recurring || this.mb != expectedNumberOfNonCommentArgs && this.dispatchEvent(expectedNumberOfNonCommentArgs ? "show" : "hide")) {
      var suiteView = this.a();
      if (suiteView) {
        this.J.sh(suiteView, expectedNumberOfNonCommentArgs);
      }
      if (this.isEnabled()) {
        this.J.de(this, expectedNumberOfNonCommentArgs);
      }
      /** @type {boolean} */
      this.mb = expectedNumberOfNonCommentArgs;
      return true;
    }
    return false;
  };
  /**
   * @return {?}
   */
  c.isEnabled = function() {
    return!(this.g & 1);
  };
  /**
   * @param {boolean} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  c.sa = function(expectedNumberOfNonCommentArgs) {
    var parent = this.getParent();
    if (!(parent && ("function" == typeof parent.isEnabled && !parent.isEnabled()))) {
      if (!!activeChangeEvent(this, 1, !expectedNumberOfNonCommentArgs)) {
        if (!expectedNumberOfNonCommentArgs) {
          this.setActive(false);
          isWindow(this, false);
        }
        if (this.mb) {
          this.J.de(this, expectedNumberOfNonCommentArgs);
        }
        this.Sa(1, !expectedNumberOfNonCommentArgs, true);
      }
    }
  };
  /**
   * @param {?} obj
   * @param {boolean} recurring
   * @return {undefined}
   */
  var isWindow = function(obj, recurring) {
    if (activeChangeEvent(obj, 2, recurring)) {
      obj.Sa(2, recurring);
    }
  };
  c = error.prototype;
  /**
   * @return {?}
   */
  c.Sc = function() {
    return!!(this.g & 4);
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.setActive = function(recurring) {
    if (activeChangeEvent(this, 4, recurring)) {
      this.Sa(4, recurring);
    }
  };
  /**
   * @return {?}
   */
  c.ua = function() {
    return!!(this.g & 16);
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.Ub = function(recurring) {
    if (activeChangeEvent(this, 16, recurring)) {
      this.Sa(16, recurring);
    }
  };
  /**
   * @return {?}
   */
  c.oc = function() {
    return!!(this.g & 32);
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.ee = function(recurring) {
    if (activeChangeEvent(this, 32, recurring)) {
      this.Sa(32, recurring);
    }
  };
  /**
   * @return {?}
   */
  c.getState = function() {
    return this.g;
  };
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {boolean} recurring
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  c.Sa = function(expectedNumberOfNonCommentArgs, recurring, dataAndEvents) {
    if (dataAndEvents || 1 != expectedNumberOfNonCommentArgs) {
      if (this.pa & expectedNumberOfNonCommentArgs) {
        if (recurring != !!(this.g & expectedNumberOfNonCommentArgs)) {
          this.J.Sa(this, expectedNumberOfNonCommentArgs, recurring);
          /** @type {number} */
          this.g = recurring ? this.g | expectedNumberOfNonCommentArgs : this.g & ~expectedNumberOfNonCommentArgs;
        }
      }
    } else {
      this.sa(!recurring);
    }
  };
  /**
   * @param {string} keepData
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {boolean} recurring
   * @return {undefined}
   */
  var ondata = function(keepData, expectedNumberOfNonCommentArgs, recurring) {
    if (keepData.aa && (keepData.g & expectedNumberOfNonCommentArgs && !recurring)) {
      throw Error("Component already rendered");
    }
    if (!recurring) {
      if (keepData.g & expectedNumberOfNonCommentArgs) {
        keepData.Sa(expectedNumberOfNonCommentArgs, false);
      }
    }
    /** @type {number} */
    keepData.pa = recurring ? keepData.pa | expectedNumberOfNonCommentArgs : keepData.pa & ~expectedNumberOfNonCommentArgs;
  };
  /**
   * @param {?} type
   * @param {number} opt_attributes
   * @return {?}
   */
  var createDom = function(type, opt_attributes) {
    return!!(type.rd & opt_attributes) && !!(type.pa & opt_attributes);
  };
  /**
   * @param {?} obj
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {boolean} recurring
   * @return {?}
   */
  var activeChangeEvent = function(obj, expectedNumberOfNonCommentArgs, recurring) {
    return!!(obj.pa & expectedNumberOfNonCommentArgs) && (!!(obj.g & expectedNumberOfNonCommentArgs) != recurring && ((!(obj.il & expectedNumberOfNonCommentArgs) || obj.dispatchEvent(close(expectedNumberOfNonCommentArgs, recurring))) && !obj.isDisposed()));
  };
  c = error.prototype;
  /**
   * @param {Object} e
   * @return {undefined}
   */
  c.Ig = function(e) {
    if (!e.relatedTarget || !contains(this.a(), e.relatedTarget)) {
      if (this.dispatchEvent("enter")) {
        if (this.isEnabled()) {
          if (createDom(this, 2)) {
            isWindow(this, true);
          }
        }
      }
    }
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  c.Hg = function(e) {
    if (!(e.relatedTarget && contains(this.a(), e.relatedTarget))) {
      if (!!this.dispatchEvent("leave")) {
        if (createDom(this, 4)) {
          this.setActive(false);
        }
        if (createDom(this, 2)) {
          isWindow(this, false);
        }
      }
    }
  };
  /** @type {function (): undefined} */
  c.Xe = noop;
  /**
   * @param {Event} evt
   * @return {undefined}
   */
  c.Qc = function(evt) {
    if (this.isEnabled()) {
      if (createDom(this, 2)) {
        isWindow(this, true);
      }
      if (!!onclick(evt)) {
        if (!(member && (mac && evt.ctrlKey))) {
          if (createDom(this, 4)) {
            this.setActive(true);
          }
          if (this.J) {
            if (this.J.Ug(this)) {
              this.ic().focus();
            }
          }
        }
      }
    }
    if (!this.qe) {
      if (!!onclick(evt)) {
        if (!(member && (mac && evt.ctrlKey))) {
          evt.preventDefault();
        }
      }
    }
  };
  /**
   * @param {Event} completeEvent
   * @return {undefined}
   */
  c.af = function(completeEvent) {
    if (this.isEnabled()) {
      if (createDom(this, 2)) {
        isWindow(this, true);
      }
      if (this.Sc()) {
        if (this.Zc(completeEvent)) {
          if (createDom(this, 4)) {
            this.setActive(false);
          }
        }
      }
    }
  };
  /**
   * @param {Event} completeEvent
   * @return {undefined}
   */
  c.ni = function(completeEvent) {
    if (this.isEnabled()) {
      this.Zc(completeEvent);
    }
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  c.Zc = function(e) {
    if (createDom(this, 16)) {
      this.Ub(!this.ua());
    }
    if (createDom(this, 8)) {
      if (activeChangeEvent(this, 8, true)) {
        this.Sa(8, true);
      }
    }
    if (createDom(this, 64)) {
      /** @type {boolean} */
      var event = !(this.g & 64);
      if (activeChangeEvent(this, 64, event)) {
        this.Sa(64, event);
      }
    }
    event = new Event("action", this);
    if (e) {
      event.altKey = e.altKey;
      event.ctrlKey = e.ctrlKey;
      event.metaKey = e.metaKey;
      event.shiftKey = e.shiftKey;
      event.uf = e.uf;
    }
    return this.dispatchEvent(event);
  };
  /**
   * @return {undefined}
   */
  c.ek = function() {
    if (createDom(this, 32)) {
      this.ee(true);
    }
  };
  /**
   * @return {undefined}
   */
  c.li = function() {
    if (createDom(this, 4)) {
      this.setActive(false);
    }
    if (createDom(this, 32)) {
      this.ee(false);
    }
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  c.gk = function(e) {
    return this.mb && (this.isEnabled() && this.Ze(e)) ? (e.preventDefault(), e.stopPropagation(), true) : false;
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  c.Ze = function(e) {
    return 13 == e.keyCode && this.Zc(e);
  };
  if (!then(error)) {
    throw Error("Invalid component class " + error);
  }
  if (!then(obj)) {
    throw Error("Invalid renderer class " + obj);
  }
  var aliasKey = errorCallback(error);
  /** @type {function (): undefined} */
  scope[aliasKey] = obj;
  addFile("goog-control", function() {
    return new error(null);
  });
  /**
   * @param {Element} src
   * @return {undefined}
   */
  var constructor = function(src) {
    props.call(this);
    /** @type {Element} */
    this.Fe = src;
    /** @type {boolean} */
    this.Be = false;
    this.yb = new expected(this);
    set(this, this.yb);
    src = this.Fe.j;
    this.yb.listen(src, "mousedown", this.kk).listen(src, "mouseup", this.lk).listen(src, "click", this.Ve);
  };
  equal(constructor, props);
  /** @type {boolean} */
  var fk = !ms || 9 <= Number(sizeAsString);
  /**
   * @return {undefined}
   */
  constructor.prototype.kk = function() {
    /** @type {boolean} */
    this.Be = false;
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.lk = function() {
    /** @type {boolean} */
    this.Be = true;
  };
  /**
   * @param {Object} e
   * @param {string} type
   * @return {?}
   */
  var createEvent = function(e, type) {
    if (!fk) {
      return e.button = 0, e.type = type, e;
    }
    /** @type {(Event|null)} */
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(type, e.bubbles, e.cancelable, e.view || null, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, e.relatedTarget || null);
    return event;
  };
  /**
   * @param {Event} jqEvent
   * @return {undefined}
   */
  constructor.prototype.Ve = function(jqEvent) {
    if (this.Be) {
      /** @type {boolean} */
      this.Be = false;
    } else {
      var event = jqEvent.Aa;
      var old = event.button;
      var originalType = event.type;
      var evt = createEvent(event, "mousedown");
      this.Fe.Qc(new update(evt, jqEvent.currentTarget));
      evt = createEvent(event, "mouseup");
      this.Fe.af(new update(evt, jqEvent.currentTarget));
      if (!fk) {
        event.button = old;
        event.type = originalType;
      }
    }
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.l = function() {
    /** @type {null} */
    this.Fe = null;
    constructor.b.l.call(this);
  };
  /**
   * @return {undefined}
   */
  var right = function() {
  };
  equal(right, el);
  isUndefinedOrNull(right);
  c = right.prototype;
  /**
   * @return {undefined}
   */
  c.xg = function() {
  };
  /**
   * @param {string} name
   * @return {?}
   */
  c.C = function(name) {
    make_name(name);
    name.rd &= -256;
    ondata(name, 32, false);
    return name.hc().C("BUTTON", {
      "class" : expand(this, name).join(" "),
      disabled : !name.isEnabled(),
      title : name.Re() || "",
      value : name.ma() || ""
    }, query(name) || "");
  };
  /**
   * @param {Element} a
   * @return {?}
   */
  c.Ec = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || ("submit" == a.type || "reset" == a.type));
  };
  /**
   * @param {string} name
   * @param {Object} obj
   * @return {?}
   */
  c.Jc = function(name, obj) {
    make_name(name);
    name.rd &= -256;
    ondata(name, 32, false);
    if (obj.disabled) {
      var newC = objectToString(this, 1);
      addClass(obj, newC);
    }
    return right.b.Jc.call(this, name, obj);
  };
  /**
   * @param {Object} args
   * @return {undefined}
   */
  c.zi = function(args) {
    fire(args).listen(args.a(), "click", args.Zc);
  };
  /** @type {function (): undefined} */
  c.be = noop;
  /** @type {function (): undefined} */
  c.hd = noop;
  /**
   * @param {?} parent
   * @return {?}
   */
  c.Ug = function(parent) {
    return parent.isEnabled();
  };
  /** @type {function (): undefined} */
  c.de = noop;
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {boolean} recurring
   * @param {boolean} enable
   * @return {undefined}
   */
  c.Sa = function(expectedNumberOfNonCommentArgs, recurring, enable) {
    right.b.Sa.call(this, expectedNumberOfNonCommentArgs, recurring, enable);
    if (expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs.a()) {
      if (1 == recurring) {
        /** @type {boolean} */
        expectedNumberOfNonCommentArgs.disabled = enable;
      }
    }
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  c.ma = function(obj) {
    return obj.value;
  };
  /**
   * @param {Object} obj
   * @param {Object} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  c.ge = function(obj, expectedNumberOfNonCommentArgs) {
    if (obj) {
      /** @type {Object} */
      obj.value = expectedNumberOfNonCommentArgs;
    }
  };
  /** @type {function (): undefined} */
  c.lb = noop;
  /**
   * @param {?} e
   * @param {(Object|boolean|number|string)} args
   * @param {?} options
   * @return {undefined}
   */
  var context = function(e, args, options) {
    error.call(this, e, args || right.ub(), options);
  };
  equal(context, error);
  c = context.prototype;
  /**
   * @return {?}
   */
  c.ma = function() {
    return this.ld;
  };
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  c.ge = function(obj) {
    /** @type {Object} */
    this.ld = obj;
    this.J.ge(this.a(), obj);
  };
  /**
   * @return {?}
   */
  c.Re = function() {
    return this.zh;
  };
  /**
   * @param {?} obj
   * @return {undefined}
   */
  c.Df = function(obj) {
    this.zh = obj;
    this.J.Df(this.a(), obj);
  };
  /**
   * @return {undefined}
   */
  c.l = function() {
    context.b.l.call(this);
    delete this.ld;
    delete this.zh;
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    context.b.D.call(this);
    if (this.pa & 32) {
      var src = this.ic();
      if (src) {
        fire(this).listen(src, "keyup", this.Ze);
      }
    }
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  c.Ze = function(e) {
    return 13 == e.keyCode && "key" == e.type || 32 == e.keyCode && "keyup" == e.type ? this.Zc(e) : 32 == e.keyCode;
  };
  addFile("goog-button", function() {
    return new context(null);
  });
  /**
   * @param {string} h
   * @param {?} req
   * @return {undefined}
   */
  var html = function(h, req) {
    s.call(this, req);
    this.F = h || "";
  };
  var ary;
  equal(html, s);
  /** @type {null} */
  html.prototype.hb = null;
  /** @type {number} */
  html.prototype.Hk = 10;
  /**
   * @return {?}
   */
  var w = function() {
    if (!(null != ary)) {
      /** @type {boolean} */
      ary = "placeholder" in document.createElement("INPUT");
    }
    return ary;
  };
  c = html.prototype;
  /** @type {boolean} */
  c.Id = false;
  /**
   * @return {undefined}
   */
  c.C = function() {
    this.j = this.hc().C("INPUT", {
      type : "text"
    });
  };
  /**
   * @param {Node} el
   * @return {undefined}
   */
  c.L = function(el) {
    html.b.L.call(this, el);
    if (!this.F) {
      this.F = el.getAttribute("label") || "";
    }
    a: {
      var doc = isElement(el);
      try {
        var node = doc && doc.activeElement;
        break a;
      } catch (d) {
      }
      /** @type {null} */
      node = null;
    }
    if (node == el) {
      /** @type {boolean} */
      this.Id = true;
      _hasClass(this.a(), this.Md);
    }
    if (w()) {
      this.a().placeholder = this.F;
    }
    removeClass(this.a(), "label", this.F);
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    html.b.D.call(this);
    var Event = new expected(this);
    Event.listen(this.a(), "focus", this.Eg);
    Event.listen(this.a(), "blur", this.ak);
    if (w()) {
      this.P = Event;
    } else {
      if (useKeyPress) {
        Event.listen(this.a(), ["keypress", "keydown", "keyup"], this.ck);
      }
      Event.listen(offset(isElement(this.a())), "load", this.tk);
      this.P = Event;
      addListeners(this);
    }
    this.fb();
    this.a().Gk = this;
  };
  /**
   * @return {undefined}
   */
  c.Kb = function() {
    html.b.Kb.call(this);
    if (this.P) {
      this.P.qa();
      /** @type {null} */
      this.P = null;
    }
    /** @type {null} */
    this.a().Gk = null;
  };
  /**
   * @param {Node} item
   * @return {undefined}
   */
  var addListeners = function(item) {
    if (!item.Xj) {
      if (item.P) {
        if (item.a().form) {
          item.P.listen(item.a().form, "submit", item.fk);
          /** @type {boolean} */
          item.Xj = true;
        }
      }
    }
  };
  c = html.prototype;
  /**
   * @return {undefined}
   */
  c.l = function() {
    html.b.l.call(this);
    if (this.P) {
      this.P.qa();
      /** @type {null} */
      this.P = null;
    }
  };
  /** @type {string} */
  c.Md = "label-input-label";
  /**
   * @return {undefined}
   */
  c.Eg = function() {
    /** @type {boolean} */
    this.Id = true;
    _hasClass(this.a(), this.Md);
    if (!w() && (!clear(this) && !this.Og)) {
      var object = this;
      /**
       * @return {undefined}
       */
      var val = function() {
        if (object.a()) {
          /** @type {string} */
          object.a().value = "";
        }
      };
      if (ms) {
        process(val, 10);
      } else {
        val();
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.ak = function() {
    if (!w()) {
      this.P.Ta(this.a(), "click", this.Eg);
      /** @type {null} */
      this.hb = null;
    }
    /** @type {boolean} */
    this.Id = false;
    this.fb();
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  c.ck = function(event) {
    if (27 == event.keyCode) {
      if ("keydown" == event.type) {
        this.hb = this.a().value;
      } else {
        if ("keypress" == event.type) {
          this.a().value = this.hb;
        } else {
          if ("keyup" == event.type) {
            /** @type {null} */
            this.hb = null;
          }
        }
      }
      event.preventDefault();
    }
  };
  /**
   * @return {undefined}
   */
  c.fk = function() {
    if (!clear(this)) {
      /** @type {string} */
      this.a().value = "";
      process(this.Zj, 10, this);
    }
  };
  /**
   * @return {undefined}
   */
  c.Zj = function() {
    if (!clear(this)) {
      this.a().value = this.F;
    }
  };
  /**
   * @return {undefined}
   */
  c.tk = function() {
    this.fb();
  };
  /**
   * @param {Object} node
   * @return {?}
   */
  var clear = function(node) {
    return!!node.a() && ("" != node.a().value && node.a().value != node.F);
  };
  c = html.prototype;
  /**
   * @return {undefined}
   */
  c.clear = function() {
    /** @type {string} */
    this.a().value = "";
    if (null != this.hb) {
      /** @type {string} */
      this.hb = "";
    }
  };
  /**
   * @return {undefined}
   */
  c.reset = function() {
    if (clear(this)) {
      this.clear();
      this.fb();
    }
  };
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  c.ge = function(obj) {
    if (null != this.hb) {
      /** @type {Object} */
      this.hb = obj;
    }
    /** @type {Object} */
    this.a().value = obj;
    this.fb();
  };
  /**
   * @return {?}
   */
  c.ma = function() {
    return null != this.hb ? this.hb : clear(this) ? this.a().value : "";
  };
  /**
   * @param {string} value
   * @return {undefined}
   */
  c.fe = function(value) {
    var elem = this.a();
    if (w()) {
      if (elem) {
        /** @type {string} */
        elem.placeholder = value;
      }
      /** @type {string} */
      this.F = value;
    } else {
      if (!clear(this)) {
        if (elem) {
          /** @type {string} */
          elem.value = "";
        }
        /** @type {string} */
        this.F = value;
        this.Xi();
      }
    }
    if (elem) {
      removeClass(elem, "label", this.F);
    }
  };
  /**
   * @return {?}
   */
  c.Oe = function() {
    return this.F;
  };
  /**
   * @return {undefined}
   */
  c.fb = function() {
    var el = this.a();
    if (w()) {
      if (this.a().placeholder != this.F) {
        this.a().placeholder = this.F;
      }
    } else {
      addListeners(this);
    }
    removeClass(el, "label", this.F);
    if (clear(this)) {
      el = this.a();
      _hasClass(el, this.Md);
    } else {
      if (!this.Og) {
        if (!this.Id) {
          el = this.a();
          addClass(el, this.Md);
        }
      }
      if (!w()) {
        process(this.Xi, this.Hk, this);
      }
    }
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var setText = function(item) {
    var $item = clear(item);
    /** @type {boolean} */
    item.Og = true;
    item.a().focus();
    if (!$item) {
      if (!w()) {
        item.a().value = item.F;
      }
    }
    item.a().select();
    if (!w()) {
      if (item.P) {
        item.P.Ea(item.a(), "click", item.Eg);
      }
      process(item.Wj, 10, item);
    }
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  html.prototype.sa = function(recurring) {
    /** @type {boolean} */
    this.a().disabled = !recurring;
    var el = this.a();
    /** @type {string} */
    var className = this.Md + "-disabled";
    if (recurring) {
      _hasClass(el, className);
    } else {
      addClass(el, className);
    }
  };
  /**
   * @return {?}
   */
  html.prototype.isEnabled = function() {
    return!this.a().disabled;
  };
  /**
   * @return {undefined}
   */
  html.prototype.Wj = function() {
    /** @type {boolean} */
    this.Og = false;
  };
  /**
   * @return {undefined}
   */
  html.prototype.Xi = function() {
    if (!!this.a()) {
      if (!clear(this)) {
        if (!this.Id) {
          this.a().value = this.F;
        }
      }
    }
  };
  /**
   * @param {string} value
   * @param {?} exclude
   * @return {?}
   */
  var isClassOf = function(value, exclude) {
    return null != value && value.Ic === exclude;
  };
  /**
   * @param {string} b
   * @return {?}
   */
  var sorter = function(b) {
    if (null != b) {
      switch(b.Ee) {
        case 1:
          return 1;
        case -1:
          return-1;
        case 0:
          return 0;
      }
    }
    return null;
  };
  /**
   * @param {(Object|string)} value
   * @return {?}
   */
  var reject = function(value) {
    return null != value && value.Ic === exclude ? value : value instanceof type ? callback(_fn(value), value.Ed()) : callback($(String(String(value))), sorter(value));
  };
  var callback = function(parentClass) {
    /**
     * @param {?} count
     * @return {undefined}
     */
    function fn(count) {
      this.content = count;
    }
    fn.prototype = parentClass.prototype;
    return function(opt_message, id) {
      var obj = new fn(String(opt_message));
      if (void 0 !== id) {
        /** @type {string} */
        obj.Ee = id;
      }
      return obj;
    };
  }(parent);
  (function(parentClass) {
    /**
     * @param {?} count
     * @return {undefined}
     */
    function fn(count) {
      this.content = count;
    }
    fn.prototype = parentClass.prototype;
    return function(obj, lvl) {
      /** @type {string} */
      var o = String(obj);
      if (!o) {
        return "";
      }
      o = new fn(o);
      if (void 0 !== lvl) {
        /** @type {string} */
        o.Ee = lvl;
      }
      return o;
    };
  })(parent);
  /**
   * @param {string} s
   * @return {?}
   */
  var h = function(s) {
    return s.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var escape = function(value) {
    return isClassOf(value, exclude) ? String(String(value.Oa()).replace(rLt, "").replace(rQuot, "&lt;")).replace(r20, boundary) : $(String(value));
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var complete = function(value) {
    if (isClassOf(value, nextState) || isClassOf(value, excludeKeys)) {
      value = trim(value);
    } else {
      if (value instanceof Value) {
        value = trim(register(value));
      } else {
        if (value instanceof Buffer) {
          value = trim(decode(value));
        } else {
          /** @type {string} */
          value = String(value);
          /** @type {string} */
          value = rLinear.test(value) ? value.replace(rreturn, index) : "about:invalid#zSoyz";
        }
      }
    }
    return value;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var write = function(value) {
    if (isClassOf(value, nextState) || isClassOf(value, excludeKeys)) {
      value = trim(value);
    } else {
      if (value instanceof Value) {
        value = trim(register(value));
      } else {
        if (value instanceof Buffer) {
          value = trim(decode(value));
        } else {
          /** @type {string} */
          value = String(value);
          /** @type {string} */
          value = rRadial.test(value) ? value.replace(rreturn, index) : "about:invalid#zSoyz";
        }
      }
    }
    return value;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  var val = function(a) {
    if (isClassOf(a, depExclude)) {
      a = h(a.Oa());
    } else {
      if (null == a) {
        /** @type {string} */
        a = "";
      } else {
        if (a instanceof NodeList) {
          if (a instanceof NodeList && (a.constructor === NodeList && a.sj === preferredDoc)) {
            a = a.jh;
          } else {
            isArray(a);
            /** @type {string} */
            a = "type_error:SafeStyle";
          }
          a = h(a);
        } else {
          if (a instanceof Range) {
            a = h(isObject(a));
          } else {
            /** @type {string} */
            a = String(a);
            /** @type {string} */
            a = supportedTransforms.test(a) ? a : "zSoyz";
          }
        }
      }
    }
    return a;
  };
  var _entryCharToButtonIdMap = {
    "\x00" : "&#0;",
    "\t" : "&#9;",
    "\n" : "&#10;",
    "\x0B" : "&#11;",
    "\f" : "&#12;",
    "\r" : "&#13;",
    " " : "&#32;",
    '"' : "&quot;",
    "&" : "&amp;",
    "'" : "&#39;",
    "-" : "&#45;",
    "/" : "&#47;",
    "<" : "&lt;",
    "=" : "&#61;",
    ">" : "&gt;",
    "`" : "&#96;",
    "\u0085" : "&#133;",
    "\u00a0" : "&#160;",
    "\u2028" : "&#8232;",
    "\u2029" : "&#8233;"
  };
  /**
   * @param {?} timeoutKey
   * @return {?}
   */
  var boundary = function(timeoutKey) {
    return _entryCharToButtonIdMap[timeoutKey];
  };
  var config = {
    "\x00" : "%00",
    "\u0001" : "%01",
    "\u0002" : "%02",
    "\u0003" : "%03",
    "\u0004" : "%04",
    "\u0005" : "%05",
    "\u0006" : "%06",
    "\u0007" : "%07",
    "\b" : "%08",
    "\t" : "%09",
    "\n" : "%0A",
    "\x0B" : "%0B",
    "\f" : "%0C",
    "\r" : "%0D",
    "\u000e" : "%0E",
    "\u000f" : "%0F",
    "\u0010" : "%10",
    "\u0011" : "%11",
    "\u0012" : "%12",
    "\u0013" : "%13",
    "\u0014" : "%14",
    "\u0015" : "%15",
    "\u0016" : "%16",
    "\u0017" : "%17",
    "\u0018" : "%18",
    "\u0019" : "%19",
    "\u001a" : "%1A",
    "\u001b" : "%1B",
    "\u001c" : "%1C",
    "\u001d" : "%1D",
    "\u001e" : "%1E",
    "\u001f" : "%1F",
    " " : "%20",
    '"' : "%22",
    "'" : "%27",
    "(" : "%28",
    ")" : "%29",
    "<" : "%3C",
    ">" : "%3E",
    "\\" : "%5C",
    "{" : "%7B",
    "}" : "%7D",
    "\u007f" : "%7F",
    "\u0085" : "%C2%85",
    "\u00a0" : "%C2%A0",
    "\u2028" : "%E2%80%A8",
    "\u2029" : "%E2%80%A9",
    "\uff01" : "%EF%BC%81",
    "\uff03" : "%EF%BC%83",
    "\uff04" : "%EF%BC%84",
    "\uff06" : "%EF%BC%86",
    "\uff07" : "%EF%BC%87",
    "\uff08" : "%EF%BC%88",
    "\uff09" : "%EF%BC%89",
    "\uff0a" : "%EF%BC%8A",
    "\uff0b" : "%EF%BC%8B",
    "\uff0c" : "%EF%BC%8C",
    "\uff0f" : "%EF%BC%8F",
    "\uff1a" : "%EF%BC%9A",
    "\uff1b" : "%EF%BC%9B",
    "\uff1d" : "%EF%BC%9D",
    "\uff1f" : "%EF%BC%9F",
    "\uff20" : "%EF%BC%A0",
    "\uff3b" : "%EF%BC%BB",
    "\uff3d" : "%EF%BC%BD"
  };
  /**
   * @param {?} req
   * @return {?}
   */
  var index = function(req) {
    return config[req];
  };
  /** @type {RegExp} */
  var r20 = /[\x00\x22\x27\x3c\x3e]/g;
  /** @type {RegExp} */
  var rreturn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
  /** @type {RegExp} */
  var supportedTransforms = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i;
  /** @type {RegExp} */
  var rLinear = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
  /** @type {RegExp} */
  var rRadial = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
  /** @type {RegExp} */
  var cx = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;
  /**
   * @param {string} str
   * @return {?}
   */
  var trim = function(str) {
    return String(str).replace(rreturn, index);
  };
  /** @type {RegExp} */
  var rLt = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
  /** @type {RegExp} */
  var rQuot = /</g;
  /**
   * @param {Object} options
   * @return {?}
   */
  var add = function(options) {
    options = options || {};
    var cb = callback;
    /** @type {string} */
    var $ = '<span class="recaptcha-checkbox goog-inline-block' + (options.checked ? " recaptcha-checkbox-checked" : " recaptcha-checkbox-unchecked") + (options.disabled ? " recaptcha-checkbox-disabled" : "") + (options.og ? " " + escape(options.og) : "") + '" role="checkbox" aria-checked="' + (options.checked ? "true" : "false") + '"' + (options.Aj ? 'aria-labelledby="' + escape(options.Aj) + '"' : "") + (options.id ? 'id="' + escape(options.id) + '"' : "") + (options.disabled ? 'aria-disabled="true" tabindex="-1"' : 
    'tabindex="' + (options.wh ? escape(options.wh) : "0") + '"');
    if (options.attributes) {
      var text = options.attributes;
      if (isClassOf(text, reservedParams)) {
        text = text.Oa().replace(/([^"'\s])$/, "$1 ");
      } else {
        /** @type {string} */
        text = String(text);
        /** @type {string} */
        text = cx.test(text) ? text : "zSoyz";
      }
      /** @type {string} */
      text = " " + text;
    } else {
      /** @type {string} */
      text = "";
    }
    /** @type {string} */
    $ = $ + text + 'dir="ltr">';
    options = options = {
      hg : options.hg,
      Vc : options.Vc
    };
    options = callback((options.hg ? '<div class="' + (options.Vc ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-border" role="presentation"></div><div class="' + (options.Vc ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-borderAnimation" role="presentation"></div><div class="' + (options.Vc ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-spinner" role="presentation"></div><div class="' + (options.Vc ? "recaptcha-checkbox-nodatauri " : "") + 'recaptcha-checkbox-spinnerAnimation" role="presentation"></div>' : 
    '<div class="recaptcha-checkbox-spinner-gif" role="presentation"></div>') + '<div class="recaptcha-checkbox-checkmark" role="presentation"></div>');
    return cb($ + options + "</span>");
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var n = function(_super) {
    __extends(this, _super, "asconf", null);
  };
  equal(n, date);
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  n.prototype.N = function(deepDataAndEvents) {
    return token(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} value
   * @return {?}
   */
  var token = function(deepDataAndEvents, value) {
    var pair = {
      Ml : require(value, 1),
      Ll : require(value, 2)
    };
    if (deepDataAndEvents) {
      pair.R = value;
    }
    return pair;
  };
  /** @type {string} */
  n.Va = "asconf";
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var actual = function(_super) {
    __extends(this, _super, "conf", recurring);
  };
  equal(actual, date);
  /** @type {Array} */
  var recurring = [5];
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  actual.prototype.N = function(deepDataAndEvents) {
    return computed(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} p
   * @return {?}
   */
  var computed = function(deepDataAndEvents, p) {
    var ret;
    var pair = {
      Nl : (ret = cb(p, n, 1)) && token(deepDataAndEvents, ret),
      Cm : require(p, 2),
      bm : require(p, 3),
      fm : require(p, 5)
    };
    if (deepDataAndEvents) {
      pair.R = p;
    }
    return pair;
  };
  /** @type {string} */
  actual.Va = "conf";
  /**
   * @return {?}
   */
  var formatter = function() {
    var p = _this.ub().get();
    return require(p, 2);
  };
  /**
   * @return {undefined}
   */
  var _this = function() {
    /** @type {null} */
    this.Ce = null;
  };
  isUndefinedOrNull(_this);
  /**
   * @return {?}
   */
  _this.prototype.get = function() {
    return this.Ce;
  };
  /**
   * @param {string} attr
   * @return {undefined}
   */
  _this.prototype.init = function(attr) {
    this.Ce = attr || new actual;
  };
  /**
   * @param {string} error
   * @return {?}
   */
  var loop = function(error) {
    var opts = _this.ub();
    return opts.Ce ? push(require(opts.Ce, 5), error) : false;
  };
  /**
   * @param {?} event
   * @param {?} startT
   * @return {undefined}
   */
  var touchstart = function(event, startT) {
    model.call(this);
    this.j = event;
    /** @type {number} */
    this.Bb = -1;
    this.dg = new initial(this.j);
    set(this, this.dg);
    if (loop("JS_FASTCLICK")) {
      if (ty && fullOtherName || (sourceSplit || targetSplit)) {
        addEvent(this.j, ["touchstart", "touchend"], this.kj, false, this);
      }
    }
    if (!startT) {
      addEvent(this.dg, "action", this.oe, false, this);
      addEvent(this.j, "keyup", this.Fk, false, this);
    }
  };
  equal(touchstart, model);
  /**
   * @param {Object} event
   * @return {?}
   */
  touchstart.prototype.kj = function(event) {
    if ("touchstart" == event.type) {
      /** @type {number} */
      this.Bb = random();
      event.stopPropagation();
    } else {
      if ("touchend" == event.type) {
        /** @type {number} */
        var Bb = random() - this.Bb;
        if (0 != event.Aa.cancelable && 500 > Bb) {
          return this.oe(event, true);
        }
      }
    }
    return true;
  };
  /**
   * @param {Object} event
   * @return {?}
   */
  touchstart.prototype.Fk = function(event) {
    return 32 == event.keyCode && "keyup" == event.type ? this.oe(event) : true;
  };
  /**
   * @param {Object} event
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  touchstart.prototype.oe = function(event, dataAndEvents) {
    /** @type {number} */
    var Bb = random() - this.Bb;
    if (dataAndEvents || 1E3 < Bb) {
      /** @type {string} */
      event.type = "action";
      this.dispatchEvent(event);
      event.stopPropagation();
      event.preventDefault();
    }
    return false;
  };
  /**
   * @return {undefined}
   */
  touchstart.prototype.l = function() {
    splice(this.dg, "action", this.oe, false, this);
    splice(this.j, ["touchstart", "touchend"], this.kj, false, this);
    touchstart.b.l.call(this);
  };
  /**
   * @param {number} v
   * @param {?} e
   * @return {undefined}
   */
  var d = function(v, e) {
    var res = forOwn(obj, "recaptcha-checkbox");
    error.call(this, null, res, e);
    /** @type {number} */
    this.ba = 1;
    /** @type {null} */
    this.F = null;
    this.tabIndex = v && (isFinite(v) && (0 == v % 1 && 0 < v)) ? v : 0;
  };
  equal(d, error);
  c = d.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    this.j = createElement(add, {
      id : this.getId(),
      og : this.Ba,
      checked : this.ua(),
      disabled : !this.isEnabled(),
      wh : this.tabIndex
    }, void 0, this.hc());
  };
  /**
   * @return {?}
   */
  c.Ec = function() {
    return false;
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    d.b.D.call(this);
    if (this.$e) {
      var self = fire(this);
      if (this.F) {
        self.listen(new touchstart(this.F), "action", this.Ag).listen(this.F, "mouseover", this.Ig).listen(this.F, "mouseout", this.Hg).listen(this.F, "mousedown", this.Qc).listen(this.F, "mouseup", this.af);
      }
      self.listen(new touchstart(this.a()), "action", this.Ag);
    }
    if (this.F) {
      if (!this.F.id) {
        self = this.F;
        var originalId = this.getId() + ".lbl";
        self.id = originalId;
      }
      removeClass(this.a(), "labelledby", this.F.id);
    }
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.sa = function(recurring) {
    d.b.sa.call(this, recurring);
    if (recurring) {
      this.a().tabIndex = this.tabIndex;
    }
  };
  /**
   * @param {Event} e
   * @return {?}
   */
  c.Ze = function(e) {
    return 32 == e.keyCode || 13 == e.keyCode ? (this.Ag(e), true) : false;
  };
  /**
   * @param {Event} e
   * @return {undefined}
   */
  c.Ag = function(e) {
    e.stopPropagation();
    if (this.isEnabled() && (3 != this.ba && !e.target.href)) {
      /** @type {boolean} */
      var recurring = !this.ua();
      if (this.dispatchEvent(recurring ? "before_checked" : "before_unchecked")) {
        e.preventDefault();
        this.Ub(recurring);
      }
    }
  };
  /**
   * @return {?}
   */
  c.oc = function() {
    return d.b.oc.call(this) && !(this.isEnabled() && (this.a() && hasClass(this.a(), "recaptcha-checkbox-clearOutline")));
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.ee = function(recurring) {
    d.b.ee.call(this, recurring);
    _toggleClass(this, false);
  };
  /**
   * @param {?} mapper
   * @return {undefined}
   */
  c.Qc = function(mapper) {
    d.b.Qc.call(this, mapper);
    _toggleClass(this, true);
  };
  /**
   * @param {Node} obj
   * @param {boolean} recurring
   * @return {undefined}
   */
  var _toggleClass = function(obj, recurring) {
    if (obj.isEnabled()) {
      toggle(obj, "recaptcha-checkbox-clearOutline", recurring);
    }
  };
  c = d.prototype;
  /**
   * @param {?} edge
   * @return {undefined}
   */
  c.fe = function(edge) {
    if (this.aa) {
      this.Kb();
      this.F = edge;
      this.D();
    } else {
      this.F = edge;
    }
  };
  /**
   * @return {?}
   */
  c.ua = function() {
    return 0 == this.ba;
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.Ub = function(recurring) {
    if (!(recurring && this.ua())) {
      if (!(!recurring && 1 == this.ba)) {
        click(this, recurring ? 0 : 1);
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.cj = function() {
    if (!(2 == this.ba)) {
      click(this, 2);
    }
  };
  /**
   * @return {?}
   */
  c.wc = function() {
    return 3 == this.ba ? every() : click(this, 3);
  };
  /**
   * @param {Object} obj
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  var click = function(obj, expectedNumberOfNonCommentArgs) {
    if (0 == expectedNumberOfNonCommentArgs && obj.ua() || (1 == expectedNumberOfNonCommentArgs && 1 == obj.ba || (2 == expectedNumberOfNonCommentArgs && 2 == obj.ba || 3 == expectedNumberOfNonCommentArgs && 3 == obj.ba))) {
      return dispatchEvent();
    }
    if (2 == expectedNumberOfNonCommentArgs) {
      obj.ee(false);
    }
    /** @type {number} */
    obj.ba = expectedNumberOfNonCommentArgs;
    toggle(obj, "recaptcha-checkbox-checked", 0 == expectedNumberOfNonCommentArgs);
    toggle(obj, "recaptcha-checkbox-expired", 2 == expectedNumberOfNonCommentArgs);
    toggle(obj, "recaptcha-checkbox-loading", 3 == expectedNumberOfNonCommentArgs);
    var later = obj.a();
    if (later) {
      removeClass(later, "checked", 0 == expectedNumberOfNonCommentArgs ? "true" : "false");
    }
    obj.dispatchEvent("change");
    return dispatchEvent();
  };
  /**
   * @param {Node} obj
   * @param {string} className
   * @param {boolean} recurring
   * @return {undefined}
   */
  var toggle = function(obj, className, recurring) {
    if (obj.a()) {
      obj = obj.a();
      if (recurring) {
        addClass(obj, className);
      } else {
        _hasClass(obj, className);
      }
    }
  };
  /**
   * @return {?}
   */
  var setAttribute = function() {
    return tx || (ty || (sourceSplit || targetSplit));
  };
  /**
   * @param {?} options
   * @param {?} b
   * @return {undefined}
   */
  var o = function(options, b) {
    d.call(this, options, b);
    /** @type {null} */
    this.Ff = this.Xb = null;
    /** @type {boolean} */
    this.kd = false;
  };
  equal(o, d);
  /**
   * @param {?} opt_interval
   * @param {number} s
   * @param {?} delay
   * @param {number} time
   * @param {?} reps
   * @return {undefined}
   */
  var Timer = function(opt_interval, s, delay, time, reps) {
    this.Nj = opt_interval;
    /** @type {number} */
    this.size = s;
    this.Cj = delay;
    /** @type {number} */
    this.time = 17 * time;
    /** @type {boolean} */
    this.loop = !!reps;
  };
  var okay = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(0, 28, 560, 0), 20);
  var timeout2 = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(560, 28, 840, 0), 10);
  var failed = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(0, 56, 560, 28), 20);
  var timeout = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(560, 56, 840, 28), 10);
  var timer = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(0, 84, 560, 56), 20);
  var tmr = new Timer("recaptcha-checkbox-borderAnimation", new clone(28, 28), new RectOffset(560, 84, 840, 56), 10);
  var second = new Timer("recaptcha-checkbox-spinner", new clone(36, 36), new RectOffset(0, 36, 2844, 0), 79, true);
  var originalEvent = new Timer("recaptcha-checkbox-spinnerAnimation", new clone(38, 38), new RectOffset(0, 38, 3686, 0), 97);
  var recaptcha_checkbox_checkmark = new Timer("recaptcha-checkbox-checkmark", new clone(38, 30), new RectOffset(0, 30, 600, 0), 20);
  var hl = new Timer("recaptcha-checkbox-checkmark", new clone(38, 30), new RectOffset(600, 30, 1200, 0), 20);
  c = o.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    this.j = createElement(add, {
      id : this.getId(),
      og : this.Ba,
      checked : this.ua(),
      disabled : !this.isEnabled(),
      wh : this.tabIndex,
      hg : true,
      Vc : !(ms ? apply("9.0") : 1)
    }, void 0, this.hc());
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    o.b.D.call(this);
    if (!this.Xb) {
      var activeClassName = this.B("recaptcha-checkbox-spinner");
      this.Xb = onComplete(this, second);
      this.Ff = new times(activeClassName, 340);
      if (D()) {
        fire(this).listen(this.Xb, "finish", log(function() {
          D();
          var value = (setStyle(activeClassName, "transform") || "rotate(0deg)").replace(/^rotate\(([-0-9]+)deg\)$/, "$1");
          if (isFinite(value)) {
            /** @type {string} */
            value = String(value);
          }
          /** @type {number} */
          value = isString(value) ? /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10) : NaN;
          if (!isNaN(value)) {
            css(activeClassName, "transform", wrap("rotate(%sdeg)", (value + 180) % 360));
          }
        }, this));
      }
    }
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.Ub = function(recurring) {
    if (!(recurring && this.ua() || (!recurring && 1 == this.ba || this.kd))) {
      var lastError = this.ba;
      /** @type {number} */
      var e = recurring ? 0 : 1;
      var expectationResult = this.oc();
      var resolved = log(function() {
        click(this, e);
      }, this);
      var context = dispatch(this, true);
      if (3 == this.ba) {
        var result = listener(this, false, void 0, !recurring)
      } else {
        result = dispatchEvent();
        context.add(this.ua() ? finish(this, false) : message(this, false, lastError, expectationResult));
      }
      if (recurring) {
        context.add(finish(this, true, resolved));
      } else {
        result.then(resolved);
        context.add(message(this, true, e, expectationResult));
      }
      result.then(function() {
        context.play();
      }, noop);
    }
  };
  /**
   * @return {undefined}
   */
  c.cj = function() {
    if (2 != this.ba && !this.kd) {
      var lastError = this.ba;
      var expectationResult = this.oc();
      var resolved = log(function() {
        click(this, 2);
      }, this);
      var params = dispatch(this, true);
      if (3 == this.ba) {
        var result = listener(this, false, void 0, true)
      } else {
        result = dispatchEvent();
        params.add(this.ua() ? finish(this, false) : message(this, false, lastError, expectationResult));
      }
      result.then(resolved);
      params.add(message(this, true, 2, false));
      result.then(function() {
        params.play();
      }, noop);
    }
  };
  /**
   * @return {?}
   */
  c.wc = function() {
    if (3 == this.ba || this.kd) {
      return every();
    }
    var attributes = proxy();
    listener(this, true, attributes);
    return attributes.ad;
  };
  /**
   * @param {Object} params
   * @param {Function} recurring
   * @param {?} opt_attributes
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  var listener = function(params, recurring, opt_attributes, deepDataAndEvents) {
    if (recurring == (3 == params.ba)) {
      return dispatchEvent();
    }
    if (params.kd) {
      return every();
    }
    if (recurring) {
      recurring = params.ba;
      deepDataAndEvents = params.oc();
      var data = dispatch(params);
      if (params.ua()) {
        data.add(finish(params, false));
      } else {
        data.add(message(params, false, recurring, deepDataAndEvents));
      }
      data.add(onClick(params, opt_attributes));
      var require = proxy();
      fire(params).Ea(data, "end", log(function() {
        require.resolve();
      }, params));
      click(params, 3);
      data.play();
      return require.ad;
    }
    play(params, deepDataAndEvents);
    click(params, 1);
    return dispatchEvent();
  };
  /**
   * @param {Object} options
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  var play = function(options, deepDataAndEvents) {
    if (0 != options.Xb.g && 1 != options.Ff.g) {
      var info = log(function() {
        this.Xb.stop(true);
        layout(this.Xb);
        setOpacity(this.B("recaptcha-checkbox-spinner"), "");
        this.sa(true);
      }, options);
      if (deepDataAndEvents) {
        fire(options).Ea(options.Ff, "end", info);
        options.Ff.play(true);
      } else {
        info();
      }
    }
  };
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  o.prototype.Ef = function(recurring) {
    if (this.kd == recurring) {
      throw Error("Invalid state.");
    }
    /** @type {boolean} */
    this.kd = recurring;
  };
  /**
   * @param {Object} args
   * @param {boolean} recurring
   * @param {number} error
   * @param {boolean} result
   * @return {?}
   */
  var message = function(args, recurring, error, result) {
    /** @type {boolean} */
    error = 2 == error;
    result = onComplete(args, recurring ? error ? timer : result ? okay : failed : error ? tmr : result ? timeout2 : timeout);
    var suiteView = args.Fd("recaptcha-checkbox-border");
    fire(args).Ea(result, "play", log(function() {
      cleanup(suiteView, false);
    }, args));
    fire(args).Ea(result, "finish", log(function() {
      if (recurring) {
        cleanup(suiteView, true);
      }
    }, args));
    return result;
  };
  /**
   * @param {Object} key
   * @param {boolean} recurring
   * @param {?} callback
   * @return {?}
   */
  var finish = function(key, recurring, callback) {
    var camelKey = onComplete(key, recurring ? recaptcha_checkbox_checkmark : hl);
    fire(key).Ea(camelKey, "play", log(function() {
      css(this.a(), "overflow", "visible");
    }, key));
    fire(key).Ea(camelKey, "finish", log(function() {
      if (!recurring) {
        css(this.a(), "overflow", "");
      }
      if (callback) {
        callback();
      }
    }, key));
    return camelKey;
  };
  /**
   * @param {Object} key
   * @param {?} opt_attributes
   * @return {?}
   */
  var onClick = function(key, opt_attributes) {
    var expectationResult = log(function() {
      this.Ef(true);
      process(log(function() {
        if (1 != this.Xb.g) {
          this.sa(false);
          this.Xb.play(true);
        }
        this.Ef(false);
        if (opt_attributes) {
          opt_attributes.resolve();
        }
      }, this), 472);
    }, key);
    var camelKey = onComplete(key, originalEvent);
    fire(key).Ea(camelKey, "play", expectationResult);
    return camelKey;
  };
  /**
   * @param {Object} args
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var dispatch = function(args, dataAndEvents) {
    var pdataOld = new dom;
    if (dataAndEvents) {
      fire(args).Ea(pdataOld, "play", log(args.Ef, args, true));
      fire(args).Ea(pdataOld, "end", log(args.Ef, args, false));
    }
    return pdataOld;
  };
  /**
   * @param {Object} event
   * @param {Object} params
   * @return {?}
   */
  var onComplete = function(event, params) {
    var elem = new link(event.Fd(params.Nj), params.size, params.Cj, params.time, void 0, !params.loop);
    if (!params.loop) {
      getData(elem, "end", log(function() {
        layout(this);
      }, elem));
    }
    return elem;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var json = function(_super) {
    __extends(this, _super, "bgdata", null);
  };
  equal(json, date);
  /**
   * @param {?} isXML
   * @return {?}
   */
  json.prototype.N = function(isXML) {
    return Q(isXML, this);
  };
  /**
   * @param {?} value
   * @param {?} p
   * @return {?}
   */
  var Q = function(value, p) {
    var pair = {
      Lm : require(p, 1),
      Km : require(p, 2),
      Rl : require(p, 3)
    };
    if (value) {
      pair.R = p;
    }
    return pair;
  };
  /** @type {string} */
  json.Va = "bgdata";
  /**
   * @return {undefined}
   */
  var Model = function() {
    /** @type {null} */
    this.bd = this.pb = null;
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  Model.prototype.set = function(name) {
    require(name, 3);
    if (!require(name, 1)) {
      require(name, 2);
    }
    /** @type {string} */
    this.pb = name;
    /** @type {null} */
    this.bd = null;
  };
  /**
   * @return {undefined}
   */
  Model.prototype.load = function() {
    if (window.botguard) {
      /** @type {null} */
      window.botguard = null;
    }
    if (require(this.pb, 3) && (require(this.pb, 1) || require(this.pb, 2))) {
      var set = setter(unique(require(this.pb, 3)));
      if (require(this.pb, 1)) {
        this.bd = new controller(function($sanitize, reject) {
          var suiteView = setter(unique(require(this.pb, 1)));
          prep(suiteView).then(function() {
            try {
              if (window.botguard && window.botguard.bg) {
                $sanitize(new window.botguard.bg(set));
              } else {
                reject(null);
              }
            } catch (g) {
              reject(null);
            }
          }, reject);
        }, this);
      } else {
        if (require(this.pb, 2)) {
          var later = setter(unique(require(this.pb, 2)));
          try {
            if ($goog$globalEval$(later), window.botguard && window.botguard.bg) {
              this.bd = dispatchEvent(new window.botguard.bg(set));
              return;
            }
          } catch (c) {
          }
        }
        this.bd = every();
      }
    } else {
      this.bd = every();
    }
  };
  /**
   * @param {?} obj
   * @param {string} cb
   * @param {string} fn
   * @return {undefined}
   */
  var invoke = function(obj, cb, fn) {
    obj.bd.then(function($injector) {
      $injector.invoke(function(outErr) {
        cb(outErr);
      });
    }, function() {
      fn();
    });
  };
  /**
   * @return {undefined}
   */
  var Client = function() {
    props.call(this);
    this.pj = new first(0, oldconfig, 1, 10, 5E3);
    set(this, this.pj);
    /** @type {number} */
    this.Rd = 0;
  };
  equal(Client, props);
  var oldconfig = new Mat4;
  /**
   * @param {string} message
   * @return {?}
   */
  Client.prototype.send = function(message) {
    return new controller(function(send, formatter) {
      /** @type {string} */
      var str = String(this.Rd++);
      this.pj.send(str, message.Rf.toString(), message.nf, message.Oa(), oldconfig, void 0, log(function(value, ev) {
        var result = ev.target;
        if (typeOf(result)) {
          var ctor = value.cl;
          if (result.o) {
            result = result.o.responseText;
            if (0 == result.indexOf(")]}'\n")) {
              result = result.substring(5);
            }
            result = HOP(result);
          } else {
            result = void 0;
          }
          send(new ctor(result));
        } else {
          formatter(new event(value));
        }
      }, this, message));
    }, this);
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  var event = function(data) {
    assert.call(this);
    /** @type {Object} */
    this.request = data;
  };
  equal(event, assert);
  /** @type {string} */
  event.prototype.name = "XhrError";
  /**
   * @param {?} key
   * @param {number} value
   * @return {undefined}
   */
  var store = function(key, value) {
    props.call(this);
    this.zf = key;
    set(this, this.zf);
    /** @type {number} */
    this.sd = value;
  };
  equal(store, props);
  /**
   * @param {string} query
   * @param {?} $p1
   * @param {?} m
   * @param {?} mod
   * @param {?} defaultValue
   * @param {string} url
   * @param {Node} n
   * @return {undefined}
   */
  var q = function(query, $p1, m, mod, defaultValue, url, n) {
    /** @type {string} */
    this.Fc = query;
    this.Uk = $p1;
    this.Ud = m;
    this.yj = mod;
    this.Dj = defaultValue;
    /** @type {string} */
    this.url = url;
    /** @type {Node} */
    this.el = n;
  };
  /**
   * @param {?} response
   * @param {number} errorFn
   * @return {undefined}
   */
  var handleSuccess = function(response, errorFn) {
    this.response = response;
    /** @type {number} */
    this.Tk = errorFn;
  };
  /**
   * @param {?} bits
   * @param {?} depth
   * @param {?} $el
   * @return {undefined}
   */
  var Form = function(bits, depth, $el) {
    this.Hj = bits;
    this.gi = depth;
    this.fh = $el;
  };
  /**
   * @param {boolean} state
   * @param {string} element
   * @param {boolean} hidden_corners
   * @param {?} resize
   * @param {?} a
   * @return {undefined}
   */
  var visible = function(state, element, hidden_corners, resize, a) {
    /** @type {boolean} */
    this.visible = state;
    /** @type {string} */
    this.Fc = element;
    /** @type {boolean} */
    this.xe = hidden_corners;
    this.resize = resize;
    this.Kk = a;
  };
  /**
   * @param {?} response
   * @return {undefined}
   */
  var parseJSON = function(response) {
    this.response = response;
  };
  /**
   * @param {?} a
   * @return {undefined}
   */
  var array_to_hash = function(a) {
    this.fh = a;
  };
  /**
   * @param {Function} event
   * @return {undefined}
   */
  var opendb_onerror = function(event) {
    /** @type {Function} */
    this.errorCode = event;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var game = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(game, date);
  /**
   * @param {?} name
   * @return {?}
   */
  game.prototype.N = function(name) {
    return factory(name, this);
  };
  /**
   * @param {?} name
   * @param {?} p
   * @return {?}
   */
  var factory = function(name, p) {
    var data = {
      size : require(p, 1),
      Cb : require(p, 2),
      Pl : require(p, 3)
    };
    if (name) {
      data.R = p;
    }
    return data;
  };
  /**
   * @return {?}
   */
  game.prototype.X = function() {
    return require(this, 1);
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var events = function(_super) {
    __extends(this, _super, "hctask", null);
  };
  equal(events, date);
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  events.prototype.N = function(deepDataAndEvents) {
    return f2(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} p
   * @return {?}
   */
  var f2 = function(deepDataAndEvents, p) {
    var data = {
      source : require(p, 1),
      Bm : require(p, 2),
      lower : require(p, 3),
      upper : require(p, 4)
    };
    if (deepDataAndEvents) {
      data.R = p;
    }
    return data;
  };
  /** @type {string} */
  events.Va = "hctask";
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var two = function(_super) {
    __extends(this, _super, "ctask", progressValues);
  };
  equal(two, date);
  /** @type {Array} */
  var progressValues = [1];
  /**
   * @param {?} walkers
   * @return {?}
   */
  two.prototype.N = function(walkers) {
    return getStyle(walkers, this);
  };
  /**
   * @param {?} obj
   * @param {?} p
   * @return {?}
   */
  var getStyle = function(obj, p) {
    var pair = {
      km : camelCase(promote(p, events, 1), f2, obj),
      Mm : require(p, 2)
    };
    if (obj) {
      pair.R = p;
    }
    return pair;
  };
  /** @type {string} */
  two.Va = "ctask";
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var msg = function(_super) {
    __extends(this, _super, "ftask", newMillis);
  };
  equal(msg, date);
  /** @type {Array} */
  var newMillis = [1];
  /**
   * @param {?} walkers
   * @return {?}
   */
  msg.prototype.N = function(walkers) {
    return debug(walkers, this);
  };
  /**
   * @param {?} obj
   * @param {?} object
   * @return {?}
   */
  var debug = function(obj, object) {
    var proxy = {
      Gj : require(object, 1)
    };
    if (obj) {
      proxy.R = object;
    }
    return proxy;
  };
  /** @type {string} */
  msg.Va = "ftask";
  /**
   * @return {?}
   */
  msg.prototype.Nc = function() {
    return require(this, 1);
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var g = function(_super) {
    __extends(this, _super, "ainput", null);
  };
  equal(g, date);
  /**
   * @param {?} el
   * @return {?}
   */
  g.prototype.N = function(el) {
    var prop;
    var item = {
      Mh : (prop = this.fc()) && Q(el, prop),
      Cb : require(this, 2),
      config : (prop = this.Oc()) && computed(el, prop),
      Jm : require(this, 4),
      Kj : (prop = this.gc()) && getStyle(el, prop),
      style : (prop = this.getStyle()) && factory(el, prop),
      Ib : require(this, 7),
      errorCode : require(this, 8),
      um : (prop = this.Qe()) && debug(el, prop)
    };
    if (el) {
      item.R = this;
    }
    return item;
  };
  /** @type {string} */
  g.Va = "ainput";
  c = g.prototype;
  /**
   * @return {?}
   */
  c.fc = function() {
    return cb(this, json, 1);
  };
  /**
   * @return {?}
   */
  c.Oc = function() {
    return cb(this, actual, 3);
  };
  /**
   * @return {?}
   */
  c.gc = function() {
    return cb(this, two, 5);
  };
  /**
   * @return {?}
   */
  c.getStyle = function() {
    return cb(this, game, 6);
  };
  /**
   * @return {?}
   */
  c.ib = function() {
    return require(this, 8);
  };
  /**
   * @return {?}
   */
  c.Qe = function() {
    return cb(this, msg, 9);
  };
  /**
   * @param {?} id
   * @param {Element} config
   * @param {?} data
   * @return {undefined}
   */
  var Map = function(id, config, data) {
    store.call(this, id, data);
    /** @type {string} */
    this.Fb = "";
    this.rg = config.gc();
    /** @type {string} */
    this.Gc = "";
    this.Jj = require(config, 4);
    /** @type {boolean} */
    this.hh = 3 == config.getStyle().X();
    this.Vk = config.Qe().Nc();
    /** @type {null} */
    this.ud = null;
  };
  equal(Map, store);
  /**
   * @return {?}
   */
  Map.prototype.gc = function() {
    return this.rg;
  };
  /**
   * @return {?}
   */
  Map.prototype.Qe = function() {
    return this.Vk;
  };
  /**
   * @param {?} x
   * @return {undefined}
   */
  var arg = function(x) {
    s.call(this, x);
    this.Ui = getEl("recaptcha-token");
  };
  equal(arg, s);
  var hooks = {
    0 : "Une erreur inconnue s'est produite. Essayez d'actualiser la page.",
    1 : "Erreur\u00a0: Un ou plusieurs param\u00e8tres de l'API ne sont pas valides. Essayez d'actualiser la page.",
    2 : "La session a expir\u00e9. Actualisez la page."
  };
  /**
   * @return {undefined}
   */
  arg.prototype.D = function() {
    arg.b.D.call(this);
    this.qd = getEl("recaptcha-accessible-status");
  };
  /**
   * @param {?} item
   * @param {string} isXML
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var emit = function(item, isXML, dataAndEvents) {
    if (item.qd) {
      if (dataAndEvents) {
        window.focus();
      }
      removeEvent(item.qd);
      walk(item.qd, isXML);
    }
  };
  c = arg.prototype;
  /**
   * @return {undefined}
   */
  c.Tg = function() {
    this.jd(true, "La validation a expir\u00e9. Cochez \u00e0 nouveau la case.");
    emit(this, "La validation a expir\u00e9. Veuillez cocher la case \u00e0 nouveau pour effectuer un autre test.");
  };
  /**
   * @return {undefined}
   */
  c.si = function() {
  };
  /**
   * @return {undefined}
   */
  c.ri = function() {
  };
  /**
   * @return {undefined}
   */
  c.Jg = function() {
    emit(this, "Validation termin\u00e9e", true);
  };
  /**
   * @return {undefined}
   */
  c.Cg = function() {
  };
  /**
   * @return {?}
   */
  c.wc = function() {
    emit(this, "Ouverture du test de validation en cours...");
    return dispatchEvent();
  };
  /**
   * @return {undefined}
   */
  c.Dg = function() {
    emit(this, "Le test de validation a expir\u00e9. Veuillez cocher la case \u00e0 nouveau pour effectuer un autre test.", true);
    this.Cg();
  };
  /**
   * @param {string} str
   * @return {?}
   */
  var call = function(str) {
    var m = win.__recaptcha_api || "https://www.google.com/recaptcha/";
    return(restore(m).Ha ? "" : "//") + m + str;
  };
  /**
   * @param {?} s
   * @return {?}
   */
  var Template = function(s) {
    s.cb = randomColor();
    var r = new extend(call("api2/anchor"));
    var b = new _;
    b.extend(s);
    return concat(r, b).toString();
  };
  /**
   * @param {Element} el
   * @return {?}
   */
  var getOptions = function(el) {
    var options = el.getAttribute("data-sitekey");
    var fn = el.getAttribute("data-type");
    var theme = el.getAttribute("data-theme");
    var size = el.getAttribute("data-size");
    var tabindex = el.getAttribute("data-tabindex");
    var stoken = el.getAttribute("data-stoken");
    var bind = el.getAttribute("data-bind");
    var preload = el.getAttribute("data-preload");
    var badge = el.getAttribute("data-badge");
    var scale = el.getAttribute("data-s");
    options = {
      sitekey : options,
      type : fn,
      theme : theme,
      size : size,
      tabindex : tabindex,
      stoken : stoken,
      bind : bind,
      preload : preload,
      badge : badge,
      s : scale
    };
    if (fn = el.getAttribute("data-callback")) {
      options.callback = fn;
    }
    if (el = el.getAttribute("data-expired-callback")) {
      /** @type {Element} */
      options["expired-callback"] = el;
    }
    return options;
  };
  /**
   * @return {undefined}
   */
  var outputMessage = function() {
    alert("Impossible de contacter le service reCAPTCHA. Veuillez v\u00e9rifier votre connexion avant de r\u00e9essayer.");
  };
  /**
   * @return {undefined}
   */
  var Collection = function() {
    /** @type {Array} */
    this.Y = [];
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  var flatten = function(object) {
    var c = new Collection;
    parseNode(c, object);
    return round(compare(c.Y));
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  var normalize = function(object) {
    var c = new Collection;
    parseNode(c, object, true);
    return round(compare(c.Y));
  };
  /**
   * @param {?} v23
   * @param {Object} node
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  var parseNode = function(v23, node, deepDataAndEvents) {
    if (deepDataAndEvents) {
      if (node && (node.attributes && (warn(v23, node.tagName), "INPUT" != node.tagName))) {
        /** @type {number} */
        var b = 0;
        for (;b < node.attributes.length;b++) {
          warn(v23, node.attributes[b].name + ":" + node.attributes[b].value);
        }
      }
    } else {
      for (b in node) {
        warn(v23, b);
      }
    }
    if (3 == node.nodeType) {
      if (node.wholeText) {
        warn(v23, node.wholeText);
      }
    }
    if (1 == node.nodeType) {
      node = node.firstChild;
      for (;node;) {
        parseNode(v23, node, deepDataAndEvents);
        node = node.nextSibling;
      }
    }
  };
  /**
   * @param {?} data
   * @param {(number|string)} msg
   * @return {undefined}
   */
  var warn = function(data, msg) {
    if (100 <= data.Y.length) {
      /** @type {Array} */
      data.Y = [round(compare(data.Y)).toString()];
    }
    data.Y.push(msg);
  };
  /**
   * @param {string} x
   * @return {?}
   */
  var round = function(x) {
    /** @type {number} */
    var _round = 0;
    if (!x) {
      return _round;
    }
    /** @type {number} */
    var i = 0;
    for (;i < x.length;i++) {
      _round = (_round << 5) - _round + x.charCodeAt(i);
      _round &= _round;
    }
    return _round;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  var compare = function(a) {
    /** @type {string} */
    var qs = "";
    /** @type {string} */
    var type = typeof a;
    if ("object" === type) {
      var prefix;
      for (prefix in a) {
        qs += "[" + type + ":" + prefix + compare(a[prefix]) + "]";
      }
    } else {
      /** @type {string} */
      qs = "function" === type ? qs + ("[" + type + ":" + a.toString() + "]") : qs + ("[" + type + ":" + a + "]");
    }
    return qs.replace(/\s/g, "");
  };
  /**
   * @return {?}
   */
  var children = function() {
    /** @type {Array} */
    var flattened = [];
    try {
      var element = (0, win.gd_.gd_)().firstChild;
      for (;element;) {
        flattened.push(flatten(element));
        element = element.nextSibling;
      }
    } catch (c) {
    }
    return unescape(flattened);
  };
  /**
   * @param {?} name
   * @return {undefined}
   */
  var getDeps = function(name) {
    promote(name, events, 1);
    /** @type {number} */
    var type = 0;
    for (;type < promote(name, events, 1).length;type++) {
      var p = promote(name, events, 1)[type];
      require(p, 3);
      require(p, 4);
    }
    this.rg = name;
    /** @type {Array} */
    this.Y = [];
  };
  /**
   * @param {?} type
   * @return {?}
   */
  var range = function(type) {
    var node = require(type, 3);
    for (;node <= require(type, 4);node++) {
      var source = node;
      var name = type;
      source = format("%s_%d", require(name, 1), source);
      var hash = new Matrix;
      hash.update(source);
      if (compose(hash.digest()) == require(name, 2)) {
        return node;
      }
    }
    return-1;
  };
  /**
   * @param {Date} data
   * @param {Function} callback
   * @param {Function} fn
   * @return {undefined}
   */
  var wrapper = function(data, callback, fn) {
    /** @type {number} */
    data.Bb = (new Date).getTime();
    if (!ms || apply("8")) {
      var codeSegments = promote(data.rg, events, 1);
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        data.Y.push(range(codeSegments[i]));
        fn.call(void 0, unescape(data.Y), (new Date).getTime() - data.Bb);
      }
    }
    callback.call(void 0, unescape(data.Y), (new Date).getTime() - data.Bb);
  };
  /**
   * @param {?} config
   * @return {undefined}
   */
  var Log = function(config) {
    /** @type {null} */
    this.$b = this.Ac = null;
    /** @type {(Worker|null)} */
    this.Zb = window.Worker && config ? new Worker(config) : null;
  };
  equal(Log, props);
  /**
   * @return {?}
   */
  Log.prototype.isEnabled = function() {
    return!!this.Zb;
  };
  /**
   * @param {Object} assert
   * @param {string} beforeExit
   * @return {undefined}
   */
  var graph = function(assert, beforeExit) {
    if (assert.Zb) {
      /** @type {string} */
      assert.$b = beforeExit;
      assert.Zb.onmessage = log(assert.jk, assert);
    }
  };
  /**
   * @param {MessageEvent} messageEvent
   * @return {undefined}
   */
  Log.prototype.jk = function(messageEvent) {
    blur(this.Ac);
    if (this.$b) {
      this.$b(messageEvent.data);
    }
  };
  /**
   * @return {undefined}
   */
  Log.prototype.Qj = function() {
    if (this.$b) {
      this.$b(ok("error"));
    }
  };
  /**
   * @param {Object} channel
   * @param {?} xdomain
   * @return {undefined}
   */
  var request = function(channel, xdomain) {
    if (channel.Zb) {
      channel.Ac = process(channel.Qj, 1E3, channel);
      channel.Zb.postMessage(ok("start", xdomain.Cf()));
    }
  };
  /**
   * @return {undefined}
   */
  Log.prototype.l = function() {
    if (this.Zb) {
      this.Zb.terminate();
    }
    /** @type {null} */
    this.Zb = null;
  };
  /**
   * @param {string} value
   * @param {Node} data
   * @return {?}
   */
  var ok = function(value, data) {
    return{
      type : value,
      data : data || null
    };
  };
  /**
   * @param {Element} i
   * @return {undefined}
   */
  var action = function(i) {
    if ("start" == i.data.type) {
      i = new two(worker(i.data.data));
      wrapper(new getDeps(i), bind(function(process, message) {
        process.postMessage(ok("finish", message));
      }, self), bind(function(that, value) {
        that.postMessage(ok("progress", value));
      }, self));
    }
  };
  if (!win.document) {
    if (!win.window) {
      /** @type {function (Element): undefined} */
      self.onmessage = action;
    }
  }
  /**
   * @return {undefined}
   */
  var m = function() {
    props.call(this);
    this.Je = {};
    this.P = new expected(this);
    set(this, this.P);
  };
  mixin(m, props);
  /**
   * @param {Object} config
   * @param {string} name
   * @param {?} expr
   * @param {Function} fn
   * @param {Node} scope
   * @return {?}
   */
  var init = function(config, name, expr, fn, scope) {
    var o = config.Je[name];
    expr = join(expr) ? expr : [expr];
    config.P.listen(offset(), "message", log(function(e) {
      e = e.Aa;
      try {
        /** @type {*} */
        var hit = JSON.parse(e.data);
      } catch (v) {
        return;
      }
      var source;
      if (!(source = "*" == o.path)) {
        var target = parseUrl(o.path);
        source = parseUrl(e.origin);
        target = target.match(href);
        source = source.match(href);
        /** @type {boolean} */
        source = target[3] == source[3] && (target[1] == source[1] && target[4] == source[4]);
      }
      /** @type {boolean} */
      target = (!o.window || o.window == e.source) && (!o.Lg || isFunction(o.Lg) == e.source);
      if (source) {
        if (target) {
          if (-1 != isUndefined(expr, hit.messageType)) {
            fn.call(scope || this, hit.message, hit.messageType, e.source);
          }
        }
      }
    }, config));
    return config;
  };
  /**
   * @param {?} context
   * @param {Object} obj
   * @param {Node} options
   * @return {undefined}
   */
  var detect = function(context, obj, options) {
    group(obj, function(sqlt, selector) {
      init(this, "anchor", selector, sqlt, options);
    }, context);
  };
  /**
   * @param {?} errors
   * @param {string} str
   * @param {Object} recurring
   * @param {string} data
   * @return {?}
   */
  var done = function(errors, str, recurring, data) {
    errors.Je[str] = {
      window : recurring,
      path : data
    };
    return errors;
  };
  /**
   * @param {?} text
   * @param {?} jumpToNext
   * @return {?}
   */
  var exec = function(text, jumpToNext) {
    var ret = call("anchor");
    text.Je.anchor = {
      Lg : jumpToNext,
      path : ret
    };
    return text;
  };
  /**
   * @param {string} proto
   * @param {string} object
   * @param {Node} message
   * @return {?}
   */
  m.prototype.send = function(proto, object, message) {
    proto = this.Je[proto];
    try {
      (proto.window || isFunction(proto.Lg)).postMessage(JSON.stringify({
        message : message || null,
        messageType : object
      }), parseUrl(proto.path));
    } catch (d) {
    }
    return this;
  };
  /**
   * @param {string} initialState
   * @param {number} host
   * @param {Object} m
   * @param {?} debugMode
   * @return {undefined}
   */
  var Game = function(initialState, host, m, debugMode) {
    expected.call(this);
    /** @type {string} */
    this.A = initialState;
    /** @type {number} */
    this.h = host;
    this.Dh = debugMode;
    /** @type {string} */
    this.g = "closed";
    /** @type {Object} */
    this.m = m;
    /** @type {null} */
    this.ya = null;
    this.Yc = randomColor();
    this.Sh = proxy();
    this.Od = proxy();
    this.ll = {
      closed : {
        client_data : this.Pf,
        ready_challenge : this.Qg,
        show_challenge : this.Wb,
        show_event : this.Wb,
        preload_event : this.Yk,
        error_event : this.lh
      },
      open : {
        challenge_shown : this.ti,
        challenge_iframe_shown : this.mi,
        expiry : this.fi,
        token : this.pl,
        error : this.Bg
      },
      preloading : {
        client_data : this.Pf,
        ready_challenge : this.Qg,
        timeout_event : this.Yb,
        show_challenge : this.Wb,
        show_event : this.Wb,
        challenge_shown : this.Fg,
        error : this.Bg
      },
      loading : {
        client_data : this.Pf,
        ready_challenge : this.Qg,
        timeout_event : this.Yb,
        challenge_shown : this.Fg,
        error : this.Bg
      },
      loaded : {
        show_challenge : this.Wb,
        show_event : this.Wb,
        challenge_shown : this.Fg,
        challenge_iframe_shown : this.mi,
        expiry : this.fi
      },
      expired : {
        show_challenge : this.Wb,
        show_event : this.Wb
      },
      checked : {
        challenge_shown : this.ti,
        token_expiry_event : this.Bk
      },
      error : {}
    };
  };
  mixin(Game, expected);
  /**
   * @return {undefined}
   */
  Game.prototype.Rg = function() {
    this.listen(this.A, "d", log(this.xb, this, null, "show_event"));
  };
  /**
   * @param {Array} argument
   * @param {Function} fn
   * @param {?} index
   * @return {undefined}
   */
  Game.prototype.xb = function(argument, fn, index) {
    if (fn = this.ll[this.g][fn]) {
      fn.call(this, argument, index);
    }
  };
  /**
   * @return {undefined}
   */
  Game.prototype.init = function() {
    var pdataCur = this.h.Jj;
    if (pdataCur) {
      init(done(init(done(this.m, "client", offset().parent, pdataCur), "client", ["client_data", "challenge_shown", "show_challenge", "challenge_iframe_shown"], this.xb, this), "challenge", null, call("challenge")), "challenge", "ready_challenge", this.xb, this).send("client", "ready_anchor");
      if (this.h.hh) {
        this.xb(null, "preload_event");
      }
      this.Rg();
      if (loop("JS_BFRAME")) {
        resume(this);
      }
    } else {
      this.lh();
    }
  };
  /**
   * @param {Date} e
   * @return {undefined}
   */
  var resume = function(e) {
    e.m.send("client", "load_challenge", cycle(e));
  };
  c = Game.prototype;
  /**
   * @param {?} dataAndEvents
   * @param {Object} recurring
   * @return {undefined}
   */
  c.Qg = function(dataAndEvents, recurring) {
    if (this.Yc == dataAndEvents.fh) {
      if (recurring) {
        done(this.m, "challenge", recurring, call("challenge"));
        init(this.m, "challenge", ["challenge_shown", "token", "error", "expiry"], this.xb, this);
        this.Od.resolve();
      } else {
        this.lh();
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.lh = function() {
    /** @type {string} */
    this.g = "error";
    done(this.m, "unauthenticated_client", offset().parent, "*").send("unauthenticated_client", "error");
  };
  /**
   * @param {(Array|string)} from
   * @return {undefined}
   */
  c.Pf = function(from) {
    if (from.Fc) {
      this.ya = from.Fc;
    }
    if (from.Ud) {
      this.Sh.resolve(from);
    }
  };
  /**
   * @param {string} node
   * @return {undefined}
   */
  c.mi = function(node) {
    this.Pf(node);
    if (node.visible) {
      /** @type {string} */
      this.g = "open";
      this.A.si();
      this.m.send("challenge", "challenge_shown", node);
    } else {
      /** @type {string} */
      this.g = "loaded";
      this.A.ri();
    }
  };
  /**
   * @param {string} m
   * @return {undefined}
   */
  c.Fg = function(m) {
    if (m.resize) {
      this.m.send("challenge", "challenge_shown", new visible(m.visible));
    } else {
      if ("preloading" == this.g) {
        /** @type {string} */
        this.g = "loaded";
      } else {
        if (m.xe && (0 >= m.xe.width && 0 >= m.xe.height)) {
          /** @type {string} */
          this.g = "open";
          this.m.send("challenge", "challenge_shown", new visible(m.visible));
        } else {
          /** @type {string} */
          this.g = "loaded";
          this.m.send("client", "show_challenge", m);
        }
      }
    }
  };
  /**
   * @param {string} payload
   * @return {undefined}
   */
  c.ti = function(payload) {
    this.m.send("client", "show_challenge", payload);
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  c.pl = function(e) {
    this.A.Jg();
    /** @type {string} */
    this.g = "checked";
    this.m.send("client", "token", e);
    process(log(this.xb, this, e.response, "token_expiry_event"), 1E3 * e.Tk);
  };
  /**
   * @param {IDBRequest} e
   * @return {undefined}
   */
  c.Bg = function(e) {
    this.A.handleError(e.errorCode);
    /** @type {string} */
    this.g = "closed";
    if (2 != e.errorCode) {
      this.m.send("client", "error");
    } else {
      outputMessage();
      this.m.send("client", "show_challenge", new visible(false));
    }
  };
  /**
   * @return {undefined}
   */
  c.fi = function() {
    this.A.Dg();
    /** @type {string} */
    this.g = "expired";
    this.m.send("client", "show_challenge", new visible(false));
  };
  /**
   * @return {undefined}
   */
  c.Wb = function() {
    var resolve = log(function() {
      this.m.send("challenge", "show_challenge", new visible(true));
    }, this);
    this.A.jd(false);
    if ("loaded" == this.g) {
      resolve();
    } else {
      if ("closed" == this.g) {
        /** @type {string} */
        this.g = "loading";
        start(this, this.A.wc());
      } else {
        if ("loaded" == this.g) {
          resolve();
        } else {
          if ("expired" == this.g) {
            /** @type {string} */
            this.g = "loading";
            this.A.wc().then(resolve);
          } else {
            if ("preloading" == this.g) {
              /** @type {string} */
              this.g = "loading";
            }
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.Yb = function() {
    var obj = offset().parent.frames[this.Yc];
    try {
      if (obj.document) {
        start(this, every());
      }
    } catch (b) {
      this.A.Cg();
      this.Od.reject();
      this.Od = proxy();
      /** @type {string} */
      this.g = "closed";
      if (loop("JS_BFRAME")) {
        resume(this);
      }
      outputMessage();
    }
  };
  /**
   * @return {undefined}
   */
  c.Yk = function() {
    /** @type {string} */
    this.g = "preloading";
    start(this, dispatchEvent());
  };
  /**
   * @param {Object} config
   * @param {?} ui
   * @return {undefined}
   */
  var start = function(config, ui) {
    process(log(config.xb, config, null, "timeout_event"), 15E3);
    when([config.Od.ad, ui]).then(function() {
      if (!loop("JS_BFRAME")) {
        this.Od = proxy();
      }
      load(this).then(function() {
        this.m.send("challenge", "show_challenge", new visible(true, this.ya, null, null, setup(this)));
        /** @type {string} */
        this.h.Fb = "";
      }, null, this);
    }, function() {
    }, config);
    if (!loop("JS_BFRAME")) {
      load(config).then(function() {
        this.m.send("client", "load_challenge", run(this));
        /** @type {string} */
        this.h.Fb = "";
      }, null, config);
    }
  };
  /**
   * @param {Object} config
   * @return {?}
   */
  var load = function(config) {
    /** @type {string} */
    config.h.Fb = "";
    /** @type {Array} */
    var promise = [];
    var deferred = config.Sh.ad.then(function(val) {
      win.recaptcha.anchor.gl = val.Ud;
      /** @type {string} */
      win.recaptcha.anchor.gg = JSON.stringify([val.url, "", val.el, val.Dj, val.yj]);
      config.h.ud = new q(val.Fc, null, round(val.Ud) + "");
    });
    promise.push(deferred);
    config.m.send("client", "client_data", new q(null, config.h.Qe()));
    var reporter = new controller(function($sanitize) {
      var value = log(function(dataAndEvents) {
        this.h.Fb = dataAndEvents;
        delete win.recaptcha.anchor.gl;
        delete win.recaptcha.anchor.gg;
        $sanitize();
      }, config);
      deferred.then(function() {
        invoke(config.h.sd, value, value);
      });
    });
    promise.push(reporter);
    if (config.Dh.isEnabled()) {
      reporter = new controller(function($sanitize) {
        graph(config.Dh, function(e) {
          if ("error" == e.type) {
            /** @type {string} */
            config.h.Gc = "";
            $sanitize();
          } else {
            config.h.Gc = e.data;
            if ("finish" == e.type) {
              $sanitize();
            }
          }
        });
        request(config.Dh, config.h.gc());
      });
      promise.push(reporter);
    }
    return when(promise);
  };
  /**
   * @param {Date} root
   * @return {?}
   */
  var run = function(root) {
    var self = {};
    self.c = root.A.Ui.value;
    /** @type {string} */
    self.hl = "fr";
    self.k = round(formatter());
    /** @type {string} */
    self.v = "r20170425155801";
    self.bcr = children();
    if (root.h.Gc) {
      self.chr = root.h.Gc;
    }
    if (root.h.ud) {
      self.hr = root.h.ud.Ud;
    }
    if (root.h.Fb) {
      self.bg = root.h.Fb;
    }
    var r = new extend(call("api2/frame"));
    var options = new _;
    options.extend(self);
    return new Form(root.A.zg(), {
      src : concat(r, options).toString(),
      title : "Test recaptcha"
    }, root.Yc);
  };
  /**
   * @param {Date} o
   * @return {?}
   */
  var cycle = function(o) {
    var a = {
      hl : "fr",
      v : "r20170425155801"
    };
    a.k = formatter();
    var r = new extend(call("api2/bframe"));
    var options = new _;
    options.extend(a);
    return new Form(o.A.zg(), {
      src : concat(r, options).toString(),
      title : "Test recaptcha"
    }, o.Yc);
  };
  /**
   * @param {Date} obj
   * @return {?}
   */
  var setup = function(obj) {
    var data = {};
    data.bcr = children();
    data.c = obj.A.Ui.value;
    if (obj.h.Gc) {
      data.chr = obj.h.Gc;
    }
    if (obj.h.ud) {
      data.hr = obj.h.ud.Ud;
    }
    if (obj.h.Fb) {
      data.bg = obj.h.Fb;
    }
    return data;
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  Game.prototype.Bk = function(dataAndEvents) {
    this.A.Tg();
    /** @type {string} */
    this.g = "expired";
    this.m.send("client", "expiry");
    this.m.send("challenge", "expiry", new parseJSON(dataAndEvents));
  };
  /**
   * @param {Object} args
   * @return {?}
   */
  var text = function(args) {
    if (1 == args.size) {
      args = {
        yh : args.Cb,
        wa : args.wa,
        locale : args.locale,
        Ib : args.Ib,
        errorCode : args.errorCode
      };
      args = callback('<div class="rc-anchor rc-anchor-normal ' + escape(args.yh) + '">' + internalCallback({
        wa : args.wa
      }) + replenish() + '<div class="rc-anchor-content">' + (args.Ib || 0 < args.errorCode ? fail(args) : _asyncEverySeries()) + '</div><div class="rc-anchor-normal-footer">' + callback('<div class="rc-anchor-logo-portrait" aria-hidden="true" role="presentation">' + (ms && "8.0" == cDigit ? '<div class="rc-anchor-logo-img-ie8 rc-anchor-logo-img-portrait"></div>' : '<div class="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>') + '<div class="rc-anchor-logo-text">reCAPTCHA</div></div>') + getId({
        locale : args.locale
      }) + "</div></div>");
    } else {
      if (2 == args.size) {
        args = {
          yh : args.Cb,
          wa : args.wa,
          locale : args.locale,
          Ib : args.Ib,
          errorCode : args.errorCode
        };
        args = callback('<div class="rc-anchor rc-anchor-compact ' + escape(args.yh) + '">' + internalCallback({
          wa : args.wa
        }) + replenish() + '<div class="rc-anchor-content">' + (args.Ib ? fail(args) : _asyncEverySeries()) + '</div><div class="rc-anchor-compact-footer">' + callback('<div class="rc-anchor-logo-landscape" aria-hidden="true" role="presentation" dir="ltr">' + (ms && "8.0" == cDigit ? '<div class="rc-anchor-logo-img-ie8 rc-anchor-logo-img-landscape"></div>' : '<div class="rc-anchor-logo-img rc-anchor-logo-img-landscape"></div>') + '<div class="rc-anchor-logo-landscape-text-holder"><div class="rc-anchor-center-container"><div class="rc-anchor-center-item rc-anchor-logo-text">reCAPTCHA</div></div></div></div>') + 
        getId({
          locale : args.locale
        }) + "</div></div>");
      } else {
        /** @type {string} */
        args = "";
      }
    }
    return callback(args);
  };
  /**
   * @param {Object} language
   * @return {?}
   */
  var content = function(language) {
    return callback('<div class="rc-anchor rc-anchor-invisible  ' + (1 == language.Cb || 2 == language.Cb ? "rc-anchor-invisible-hover" : "rc-anchor-invisible-nohover") + '">' + internalCallback({
      wa : language.wa
    }) + replenish() + (1 == language.Cb != language.dl ? verify({
      locale : language.locale
    }) + translate({
      locale : language.locale
    }) : translate({
      locale : language.locale
    }) + verify({
      locale : language.locale
    })) + "</div>");
  };
  /**
   * @param {Text} obj
   * @return {?}
   */
  var translate = function(obj) {
    /** @type {string} */
    obj = "" + ('<div class="rc-anchor-invisible-text"><span>protection par <strong>reCAPTCHA</strong></span>' + getId({
      locale : obj.locale
    }) + "</div>");
    return callback(obj);
  };
  /**
   * @param {?} options
   * @return {?}
   */
  var verify = function(options) {
    return callback('<div class="rc-anchor-normal-footer">' + callback('<div class="rc-anchor-logo-large" role="presentation">' + (ms && "8.0" == cDigit ? '<div class="rc-anchor-logo-img-ie8 rc-anchor-logo-img-large"></div>' : '<div class="rc-anchor-logo-img rc-anchor-logo-img-large"></div>') + "</div>") + getId({
      locale : options.locale
    }) + "</div>");
  };
  /**
   * @param {?} opt_attributes
   * @return {?}
   */
  var internalCallback = function(opt_attributes) {
    return callback('<div class="rc-anchor-aria-status"><section><span id="recaptcha-accessible-status" aria-live="assertive" aria-atomic="true">' + reject(opt_attributes.wa) + "</span></section></div>");
  };
  /**
   * @return {?}
   */
  var _asyncEverySeries = function() {
    return callback('<div class="rc-inline-block"><div class="rc-anchor-center-container"><div class="rc-anchor-center-item rc-anchor-checkbox-holder"></div></div></div><div class="rc-inline-block"><div class="rc-anchor-center-container"><label class="rc-anchor-center-item rc-anchor-checkbox-label" aria-hidden="true" role="presentation">Je ne suis pas un robot</label></div></div>');
  };
  /**
   * @return {?}
   */
  var replenish = function() {
    return callback('<div class="rc-anchor-error-msg-container" style="display:none"><span class="rc-anchor-error-msg"></span></div>');
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var fail = function(data) {
    /** @type {string} */
    var currTime = '<div class="rc-inline-block"><div class="rc-anchor-center-container"><div class="rc-anchor-center-item rc-anchor-error-message">';
    var val = data.errorCode;
    switch(replace(val) ? val.toString() : val) {
      case 1:
        currTime += "Argument non valide.";
        break;
      case 2:
        currTime += "Votre session a expir\u00e9.";
        break;
      case 3:
        currTime += "La cl\u00e9 de ce site n'est pas activ\u00e9e pour le captcha invisible.";
        break;
      case 4:
        currTime += "Impossible d'\u00e9tablir une connexion avec le service reCAPTCHA. Veuillez v\u00e9rifier votre connexion Internet, puis actualisez la page.";
        break;
      case 5:
        currTime += 'L\'h\u00f4te local ne figure pas dans la liste des <a href="https://developers.google.com/recaptcha/docs/faq#localhost_support">domaines accept\u00e9s</a> pour la cl\u00e9 de ce site.';
        break;
      case 6:
        currTime += "ERREUR pour le propri\u00e9taire du site\u00a0:<br>Domaine non valide pour la cl\u00e9 de site";
        break;
      case 7:
        currTime += "ERREUR pour le propri\u00e9taire du site\u00a0: Cl\u00e9 de site non valide";
        break;
      default:
        currTime += "ERREUR importante pour le propri\u00e9taire du site\u00a0:<br>" + reject(data.Ib);
    }
    return callback(currTime + "</div></div></div>");
  };
  /**
   * @param {Text} obj
   * @return {?}
   */
  var getId = function(obj) {
    /** @type {string} */
    obj = "" + ('<div class="rc-anchor-pt"><a href="https://www.google.com/intl/' + escape(obj.locale) + '/policies/privacy/" target="_blank">Confidentialit\u00e9</a><span aria-hidden="true" role="presentation"> - </span><a href="https://www.google.com/intl/' + escape(obj.locale) + '/policies/terms/" target="_blank">Conditions</a></div>');
    return callback(obj);
  };
  /**
   * @param {number} opt_rightAlign
   * @param {?} cond
   * @param {?} args
   * @return {undefined}
   */
  var Renderer = function(opt_rightAlign, cond, args) {
    arg.call(this, args);
    this.la = new o;
    sendMessage(this.la, "recaptcha-anchor");
    getEnumerableProperties(this.la, "rc-anchor-checkbox");
    getter(this, this.la);
    /** @type {null} */
    this.qd = null;
    this.ie = elem[cond] || elem[1];
    /** @type {number} */
    this.$a = opt_rightAlign;
  };
  equal(Renderer, arg);
  var elem = {
    2 : "rc-anchor-dark",
    1 : "rc-anchor-light"
  };
  c = Renderer.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    this.j = createElement(text, {
      size : this.$a,
      Cb : this.ie,
      wa : "Veuillez valider le test reCAPTCHA.",
      locale : "fr"
    });
    this.L(this.a());
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  c.L = function(e) {
    Renderer.b.L.call(this, e);
    e = this.B("rc-anchor-checkbox-label");
    e.setAttribute("id", "recaptcha-anchor-label");
    this.la.fe(e);
    this.la.render(this.B("rc-anchor-checkbox-holder"));
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    Renderer.b.D.call(this);
    fire(this).listen(this.la, ["before_checked", "before_unchecked"], log(function(types) {
      if ("before_checked" == types.type) {
        this.dispatchEvent("d");
      }
      types.preventDefault();
    }, this));
  };
  /**
   * @param {boolean} recurring
   * @param {string} isXML
   * @return {undefined}
   */
  c.jd = function(recurring, isXML) {
    var el = this.a();
    if (recurring) {
      addClass(el, "rc-anchor-error");
    } else {
      _hasClass(el, "rc-anchor-error");
    }
    if (recurring) {
      walk(this.B("rc-anchor-error-msg"), isXML);
    }
    cleanup(this.B("rc-anchor-error-msg-container"), recurring);
  };
  /**
   * @return {undefined}
   */
  c.si = function() {
    this.la.Ub(false);
  };
  /**
   * @return {undefined}
   */
  c.ri = function() {
    this.la.a().focus();
  };
  /**
   * @return {undefined}
   */
  c.Dg = function() {
    Renderer.b.Dg.call(this);
    this.la.a().focus();
  };
  /**
   * @return {undefined}
   */
  c.Jg = function() {
    this.la.a().focus();
    this.la.Ub(true);
    Renderer.b.Jg.call(this);
    this.jd(false);
  };
  /**
   * @return {?}
   */
  c.zg = function() {
    return step(getById("recaptcha-checkbox", void 0));
  };
  /**
   * @return {undefined}
   */
  c.Cg = function() {
    this.la.Ub(false);
  };
  /**
   * @return {?}
   */
  c.wc = function() {
    Renderer.b.wc.call(this);
    return this.la.wc();
  };
  /**
   * @param {number} status
   * @return {undefined}
   */
  c.handleError = function(status) {
    var tmpSet = hooks[status] || hooks[0];
    this.la.Ub(false);
    if (2 != status) {
      this.la.sa(false);
      this.jd(true, tmpSet);
      emit(this, tmpSet, true);
    }
  };
  /**
   * @return {undefined}
   */
  c.Tg = function() {
    Renderer.b.Tg.call(this);
    this.la.cj();
  };
  /**
   * @param {number} Pos
   * @param {?} cond
   * @param {?} makeMasterEditor
   * @param {Function} container
   * @param {?} id
   * @return {undefined}
   */
  var Editor = function(Pos, cond, makeMasterEditor, container, id) {
    s.call(this, id);
    this.ie = elem[cond] || elem[1];
    /** @type {number} */
    this.$a = Pos;
    this.ei = makeMasterEditor;
    /** @type {Function} */
    this.Tj = container;
  };
  equal(Editor, s);
  /**
   * @return {undefined}
   */
  Editor.prototype.C = function() {
    this.j = createElement(text, {
      size : this.$a,
      Cb : this.ie,
      wa : this.ei,
      locale : "fr",
      Ib : this.ei,
      errorCode : this.Tj
    });
    this.L(this.a());
  };
  /**
   * @param {Element} el
   * @return {undefined}
   */
  var scrollTo = function(el) {
    (new Editor(el.getStyle().X(), require(el.getStyle(), 2), require(el, 7), el.ib() || 0)).render(document.body);
  };
  $goog$exportPath_$("recaptcha.anchor.ErrorMain.init", function(walkers) {
    walkers = new g(HOP(walkers));
    done(new m, "unauthenticated_client", offset().parent, "*").send("unauthenticated_client", "error", new opendb_onerror(walkers.ib()));
    new scrollTo(walkers);
  });
  /**
   * @param {Function} str
   * @param {?} _super
   * @return {undefined}
   */
  var method = function(str, _super) {
    arg.call(this, _super);
    /** @type {Function} */
    this.ie = str;
    /** @type {null} */
    this.qd = null;
  };
  equal(method, arg);
  /**
   * @return {undefined}
   */
  method.prototype.C = function() {
    var container = createElement(content, {
      wa : "Veuillez valider le test reCAPTCHA.",
      locale : "fr",
      Cb : this.ie,
      dl : false
    });
    this.j = container;
    instantiate(function() {
      var b = container.querySelectorAll(".rc-anchor-invisible-text .rc-anchor-pt a");
      var e = container.querySelector(".rc-anchor-invisible-text span");
      if (160 < position(b[0]).width + position(b[1]).width || 160 < position(e).width) {
        addClass(getById("rc-anchor-invisible-text", void 0), "smalltext");
      }
      b = container.querySelectorAll(".rc-anchor-normal-footer .rc-anchor-pt a");
      if (65 < position(b[0]).width + position(b[1]).width) {
        addClass(getById("rc-anchor-normal-footer", void 0), "smalltext");
      }
    }, this);
    this.L(this.a());
  };
  /**
   * @return {undefined}
   */
  method.prototype.jd = function() {
  };
  /**
   * @return {?}
   */
  method.prototype.zg = function() {
    return step(getById("rc-anchor-invisible", void 0));
  };
  /**
   * @param {number} status
   * @return {undefined}
   */
  method.prototype.handleError = function(status) {
    var tmpSet = hooks[status] || hooks[0];
    if (2 != status) {
      this.jd(true, tmpSet);
      emit(this, tmpSet, true);
    }
  };
  /**
   * @param {(Function|string)} o
   * @return {undefined}
   */
  var main = function(o) {
    _this.ub().init(o.Oc());
    if (loop("JS_THIRDEYE")) {
      splitPrefix();
    }
    var game = o.getStyle().X();
    game = 3 == game ? new method(require(o.getStyle(), 3)) : new Renderer(game, require(o.getStyle(), 2));
    game.render(document.body);
    var client = new Client;
    var model = new Model;
    model.set(o.fc());
    model.load();
    client = new Map(client, o, model);
    /** @type {string} */
    model = "";
    if (o.gc()) {
      o = restore(call("api2/webworker.js"));
      serialize(o, "hl", "fr");
      serialize(o, "v", "r20170425155801");
      model = o.toString();
    }
    o = new Log(model);
    model = new m;
    this.wd = new Game(game, client, model, o);
  };
  $goog$exportPath_$("recaptcha.anchor.Main.init", function(walkers) {
    walkers = new g(HOP(walkers));
    (new main(walkers)).wd.init();
  });
  /**
   * @return {?}
   */
  var authenticate = function() {
    return callback('<div class="rc-footer"><div class="rc-separator"></div><div class="rc-controls"><div class="primary-controls"><div class="rc-buttons"><div class="button-holder reload-button-holder"></div><div class="button-holder audio-button-holder"></div><div class="button-holder image-button-holder"></div><div class="button-holder help-button-holder"></div><div class="button-holder undo-button-holder"></div></div><div class="verify-button-holder"></div></div><div class="rc-challenge-help" style="display:none" tabIndex="0"></div></div>');
  };
  /**
   * @param {?} err
   * @return {?}
   */
  var udataCur = function(err) {
    return callback('<span class="rc-audiochallenge-tabloop-begin" tabIndex="0"></span><div class="rc-audiochallenge-error-message" style="display:none" tabIndex="0"></div><div class="rc-audiochallenge-instructions" id="' + escape(err.zk) + '" tabIndex="0"></div><div class="rc-audiochallenge-control"></div><div class="rc-audiochallenge-response-field"></div><div class="rc-audiochallenge-download"></div>' + reject(authenticate()) + '<span class="rc-audiochallenge-tabloop-end" tabIndex="0"></span>');
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var cdata = function(data) {
    return callback('<div class="rc-audiochallenge-play-button"></div><audio id="audio-source" style="display: none"><source src="' + escape(complete(data.gh)) + '" type="audio/mpeg"></audio>');
  };
  /**
   * @return {?}
   */
  var ol = function() {
    return callback("<center>Votre navigateur n'est pas compatible avec la lecture audio. Veuillez le mettre \u00e0 jour.</center>");
  };
  /**
   * @param {Text} path
   * @return {?}
   */
  var lookup = function(path) {
    /** @type {string} */
    path = "" + ('<a class="rc-audiochallenge-download-link" target="_blank" href="' + escape(complete(path.gh)) + '" title="' + "Ou t\u00e9l\u00e9chargez le fichier audio au format\u00a0MP3".replace(r20, boundary) + '"></a>');
    return callback(path);
  };
  /**
   * @param {Object} buf
   * @return {?}
   */
  var chunk = function(buf) {
    buf = buf || {};
    /** @type {string} */
    var slarge = "";
    if (!buf.Dk) {
      slarge += "Appuyez sur la touche\u00a0R pour recommencer le m\u00eame test. ";
    }
    return callback(slarge + 'Pour obtenir un autre test, appuyez sur le bouton d\'actualisation. <a href="https://support.google.com/recaptcha/#6175971" target="_blank">En savoir plus sur la r\u00e9solution de ce test</a>');
  };
  /**
   * @param {string} length
   * @param {?} tx
   * @param {number} dataAndEvents
   * @param {?} capture
   * @return {undefined}
   */
  var obj2 = function(length, tx, dataAndEvents, capture) {
    length = forOwn(right, length || "rc-button-default");
    context.call(this, tx, length, capture);
    this.Hf = dataAndEvents || 0;
    getEnumerableProperties(this, "goog-inline-block");
  };
  equal(obj2, context);
  /**
   * @return {undefined}
   */
  obj2.prototype.D = function() {
    obj2.b.D.call(this);
    this.a().setAttribute("id", this.getId());
    this.a().tabIndex = this.Hf;
    fire(this).listen(new touchstart(this.a(), true), "action", function() {
      if (this.isEnabled()) {
        this.Zc.apply(this, arguments);
      }
    });
  };
  /**
   * @param {number} recurring
   * @return {undefined}
   */
  obj2.prototype.sa = function(recurring) {
    obj2.b.sa.call(this, recurring);
    if (recurring) {
      this.Hf = recurring = this.Hf;
      var element = this.a();
      if (element) {
        if (0 <= recurring) {
          element.tabIndex = this.Hf;
        } else {
          setAttributes(element, false);
        }
      }
    } else {
      if (recurring = this.a()) {
        setAttributes(recurring, false);
      }
    }
  };
  /**
   * @param {Array} i
   * @param {Array} name
   * @param {?} key
   * @param {boolean} triggerChange
   * @return {undefined}
   */
  var data = function(i, name, key, triggerChange) {
    s.call(this);
    this.Qd = key;
    this.gb = this.$a = new clone(i, name);
    /** @type {null} */
    this.ya = null;
    this.Ck = triggerChange || false;
    this.response = {};
    /** @type {Array} */
    this.vf = [];
    this.Wd = exports(this, "rc-button", void 0, "recaptcha-reload-button", "Changer d'image", "rc-button-reload");
    this.ue = exports(this, "rc-button", void 0, "recaptcha-audio-button", "Changer de son", "rc-button-audio");
    this.ef = exports(this, "rc-button", void 0, "recaptcha-image-button", "Passer le test visuel", "rc-button-image");
    this.vi = exports(this, "rc-button", void 0, "recaptcha-help-button", "Aide", "rc-button-help", true);
    this.Nf = exports(this, "rc-button", void 0, "recaptcha-undo-button", "Annuler", "rc-button-undo", true);
    this.Sf = exports(this, void 0, "Valider", "recaptcha-verify-button", void 0, void 0, void 0);
  };
  equal(data, s);
  /**
   * @param {string} e
   * @return {undefined}
   */
  data.prototype.L = function(e) {
    data.b.L.call(this, e);
    this.Wd.render(this.B("reload-button-holder"));
    this.ue.render(this.B("audio-button-holder"));
    this.ef.render(this.B("image-button-holder"));
    this.vi.render(this.B("help-button-holder"));
    this.Nf.render(this.B("undo-button-holder"));
    cleanup(this.Nf.a(), false);
    this.Sf.render(this.B("verify-button-holder"));
    if (this.Ck) {
      cleanup(this.ue.a(), false);
    } else {
      cleanup(this.ef.a(), false);
    }
  };
  /**
   * @return {undefined}
   */
  data.prototype.D = function() {
    data.b.D.call(this);
    fire(this).listen(this.Wd, "action", function() {
      prepareSandboxFromConfig(this, false);
      mouseover(this, false);
      this.dispatchEvent("i");
    });
    fire(this).listen(this.ue, "action", function() {
      prepareSandboxFromConfig(this, false);
      this.dispatchEvent("j");
    });
    fire(this).listen(this.ef, "action", function() {
      prepareSandboxFromConfig(this, false);
      this.dispatchEvent("k");
    });
    fire(this).listen(this.vi, "action", function() {
      initialize(this);
      this.dispatchEvent("l");
    });
    fire(this).listen(this.Nf, "action", this.di);
    fire(this).listen(this.a(), "keyup", function(event) {
      if (27 == event.keyCode) {
        this.dispatchEvent("g");
      }
    });
    fire(this).listen(this.Sf, "action", this.He);
  };
  /**
   * @return {?}
   */
  data.prototype.getName = function() {
    return this.Qd;
  };
  /**
   * @return {?}
   */
  data.prototype.X = function() {
    return this.$a.clone();
  };
  /**
   * @param {Object} a
   * @param {?} r2
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var loaded = function(a, r2, dataAndEvents) {
    if (a.gb.width != r2.width || a.gb.height != r2.height) {
      a.gb = r2;
      if (dataAndEvents) {
        eq(a, v1);
      }
      a.dispatchEvent("f");
    }
  };
  /**
   * @return {undefined}
   */
  data.prototype.di = function() {
  };
  /**
   * @return {undefined}
   */
  data.prototype.He = function() {
    if (!this.Za()) {
      prepareSandboxFromConfig(this, false);
      this.dispatchEvent("m");
    }
  };
  /**
   * @param {Object} config
   * @param {Object} k
   * @param {?} id
   * @param {boolean} args
   * @return {undefined}
   */
  var _init = function(config, k, id, args) {
    config.response = {};
    prepareSandboxFromConfig(config, true);
    var resolve = log(function() {
      this.Fa(k, id, args).then(log(function() {
        this.dispatchEvent("e");
      }, this));
    }, config);
    if (config.gb.clone().width != config.X().width || config.gb.clone().height != config.X().height) {
      eq(config, resolve);
      loaded(config, config.X());
    } else {
      resolve();
    }
  };
  /**
   * @param {Object} callback
   * @return {undefined}
   */
  var synchronize = function(callback) {
    process(function() {
      try {
        this.vc();
      } catch (b) {
        if (!ms) {
          throw b;
        }
      }
    }, ms ? 300 : 100, callback);
  };
  /**
   * @param {?} target
   * @return {?}
   */
  data.prototype.nh = function(target) {
    if (containsMatch(target)) {
      return "";
    }
    target = unescape(target);
    return perform(target);
  };
  /**
   * @param {?} value
   * @param {(Error|string)} v
   * @param {string} content
   * @return {?}
   */
  data.prototype.Sb = function(value, v, content) {
    content = content || "";
    content = new extend(call("api2/payload") + content);
    isNumber(content);
    content.Ga.set("c", value);
    value = formatter();
    isNumber(content);
    content.Ga.set("k", value);
    if (v) {
      isNumber(content);
      content.Ga.set("id", v);
    }
    return content.toString();
  };
  /**
   * @return {?}
   */
  data.prototype.Za = function() {
    return false;
  };
  /**
   * @param {Object} b
   * @param {?} elem
   * @return {undefined}
   */
  var eq = function(b, elem) {
    b.vf.push(elem);
  };
  /**
   * @return {undefined}
   */
  data.prototype.Mi = function() {
    if (0 == this.vf.length) {
      synchronize(this);
    } else {
      var ok = this.vf.slice(0);
      /** @type {Array} */
      this.vf = [];
      slice(ok, function($sanitize) {
        $sanitize();
      });
    }
  };
  /**
   * @param {Object} config
   * @param {boolean} recurring
   * @param {boolean} e
   * @return {undefined}
   */
  var mouseover = function(config, recurring, e) {
    var r;
    if (recurring || (!e || isVisible(e))) {
      if (recurring) {
        r = config.Ja(true, e);
      }
      if (!!e) {
        if (!(recurring && !r)) {
          r = config.gb.clone();
          r.height += (recurring ? 1 : -1) * (position(e).height + GetIECSSPropertyValue(e).top + GetIECSSPropertyValue(e).bottom);
          loaded(config, r, !recurring);
        }
      }
      if (!recurring) {
        config.Ja(false, e);
      }
    }
  };
  /**
   * @param {boolean} recurring
   * @param {string} element
   * @return {?}
   */
  data.prototype.Ja = function(recurring, element) {
    if (isVisible(element) == recurring) {
      return false;
    }
    cleanup(element, recurring);
    return true;
  };
  /**
   * @param {Object} config
   * @param {boolean} method
   * @return {undefined}
   */
  var initialize = function(config, method) {
    var element = getById("rc-challenge-help", void 0);
    /** @type {boolean} */
    var all = !isVisible(element);
    if (null == method || method == all) {
      if (all) {
        config.Vb(element);
        if (!matches(element)) {
          return;
        }
        cleanup(element, true);
        all = position(element).height;
        eq(config, log(function() {
          if (!(vlq && apply("10"))) {
            element.focus();
          }
        }, config));
      } else {
        /** @type {number} */
        all = -1 * position(element).height;
        removeEvent(element);
        cleanup(element, false);
      }
      var r2 = config.gb.clone();
      r2.height += all;
      loaded(config, r2);
    }
  };
  /**
   * @param {?} list
   * @param {string} name
   * @param {?} opt_attributes
   * @param {string} args
   * @param {string} walkers
   * @param {string} config
   * @param {boolean} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  var exports = function(list, name, opt_attributes, args, walkers, config, expectedNumberOfNonCommentArgs) {
    name = new obj2(name, opt_attributes, void 0, list.hc());
    if (args) {
      sendMessage(name, args);
    }
    if (walkers) {
      name.Df(walkers);
    }
    if (config) {
      getEnumerableProperties(name, config);
    }
    if (expectedNumberOfNonCommentArgs) {
      ondata(name, 16, true);
    }
    getter(list, name);
    return name;
  };
  /**
   * @param {Object} config
   * @param {boolean} recurring
   * @return {undefined}
   */
  var prepareSandboxFromConfig = function(config, recurring) {
    config.Wd.sa(recurring);
    config.ue.sa(recurring);
    config.ef.sa(recurring);
    config.Sf.sa(recurring);
    initialize(config, false);
  };
  /**
   * @param {Object} event
   * @param {string} dontFix
   * @return {undefined}
   */
  var _connect = function(event, dontFix) {
    event.Sf.ph(dontFix || "Valider");
  };
  /**
   * @return {?}
   */
  var screenSize = function() {
    if (targetSplit || sourceSplit) {
      var screenWidth = screen.availWidth;
      var screenHeight = screen.availHeight;
    } else {
      if (tx || ty) {
        screenWidth = window.outerWidth || (screen.availWidth || screen.width);
        screenHeight = window.outerHeight || (screen.availHeight || screen.height);
        if (!fullOtherName) {
          screenHeight -= 20;
        }
      } else {
        /** @type {number} */
        screenWidth = window.outerWidth || (window.innerWidth || document.body.clientWidth);
        /** @type {number} */
        screenHeight = window.outerHeight || (window.innerHeight || document.body.clientHeight);
      }
    }
    return new clone(screenWidth || 0, screenHeight || 0);
  };
  /**
   * @return {undefined}
   */
  data.prototype.onShow = function() {
  };
  /**
   * @return {undefined}
   */
  data.prototype.vc = function() {
    this.Wd.a().focus();
  };
  /**
   * @return {undefined}
   */
  data.prototype.Xa = function() {
  };
  /**
   * @param {Array} opt_attributes
   * @return {undefined}
   */
  var getTarget = function(opt_attributes) {
    opt_attributes = opt_attributes || ["rc-challenge-help"];
    /** @type {number} */
    var conditionIndex = 0;
    for (;conditionIndex < opt_attributes.length;conditionIndex++) {
      var element = getById(opt_attributes[conditionIndex]);
      var node;
      if (node = element && isVisible(element)) {
        a: {
          var el = element;
          if (speed && (!(ms && (apply("9") && (!apply("10") && (win.SVGElement && el instanceof win.SVGElement)))) && (node = el.parentElement))) {
            break a;
          }
          node = el.parentNode;
          node = replace(node) && 1 == node.nodeType ? node : null;
        }
        node = isVisible(node);
      }
      if (node) {
        if (postLink(element)) {
          element.focus();
        } else {
          select(element).focus();
        }
        break;
      }
    }
  };
  /**
   * @return {undefined}
   */
  data.prototype.Vb = function() {
  };
  /**
   * @param {(number|string)} key
   * @param {?} attr
   * @return {undefined}
   */
  var to = function(key, attr) {
    html.call(this, isString(key) ? key : "Veuillez saisir le texte affich\u00e9.", attr);
  };
  equal(to, html);
  /**
   * @return {undefined}
   */
  to.prototype.C = function() {
    to.b.C.call(this);
    this.a().setAttribute("id", this.getId());
    this.a().setAttribute("autocomplete", "off");
    this.a().setAttribute("autocorrect", "off");
    this.a().setAttribute("autocapitalize", "off");
    this.a().setAttribute("spellcheck", "false");
    this.a().setAttribute("dir", "ltr");
    addClass(this.a(), "rc-response-input-field");
  };
  /**
   * @param {?} value
   * @param {boolean} recurring
   * @return {undefined}
   */
  var _addClass = function(value, recurring) {
    var el = value.a();
    if (recurring) {
      addClass(el, "rc-response-input-field-error");
    } else {
      _hasClass(el, "rc-response-input-field-error");
    }
  };
  /**
   * @param {Node} value
   * @return {undefined}
   */
  var convert = function(value) {
    if (targetSplit || sourceSplit) {
      value.a().setAttribute("pattern", "[0-9]*");
    } else {
      if (setAttribute()) {
        value.a().setAttribute("type", "number");
      }
    }
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var file = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(file, date);
  /**
   * @param {?} opt_obj2
   * @return {?}
   */
  file.prototype.N = function(opt_obj2) {
    return basename(opt_obj2, this);
  };
  /**
   * @param {?} f
   * @param {?} p
   * @return {?}
   */
  var basename = function(f, p) {
    var e = {
      format : require(p, 1)
    };
    if (f) {
      e.R = p;
    }
    return e;
  };
  var rect = new clone(280, 275);
  var hit = new clone(280, 235);
  /**
   * @return {undefined}
   */
  var Sound = function() {
    if (setAttribute) {
      data.call(this, hit.width, hit.height, "audio", true);
    } else {
      data.call(this, rect.width, rect.height, "audio", true);
    }
    this.Vg = setAttribute();
    /** @type {null} */
    this.Jb = this.ig = null;
    this.G = new to("");
    sendMessage(this.G, "audio-response");
    set(this, this.G);
    this.va = new res;
    set(this, this.va);
    /** @type {null} */
    this.wg = this.Bc = null;
  };
  mixin(Sound, data);
  c = Sound.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    data.prototype.C.call(this);
    this.j = createElement(udataCur, {
      zk : "audio-instructions"
    });
    this.L(this.a());
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    data.prototype.D.call(this);
    this.ig = this.B("rc-audiochallenge-control");
    this.G.render(this.B("rc-audiochallenge-response-field"));
    convert(this.G);
    fire(this).listen(this.G.a(), "focus", this.bl);
    fire(this).listen(getById("rc-audiochallenge-tabloop-begin"), "focus", function() {
      getTarget();
    }).listen(getById("rc-audiochallenge-tabloop-end"), "focus", function() {
      getTarget(["rc-audiochallenge-error-message", "rc-audiochallenge-instructions"]);
    });
    this.Jb = this.B("rc-audiochallenge-error-message");
    put(this.va, document);
    fire(this).listen(this.va, "key", this.Xg);
  };
  /**
   * @return {undefined}
   */
  c.bl = function() {
    removeClass(this.G.a(), "label", 1 == this.wg ? "Saisissez les mots que vous entendez" : "Saisissez les chiffres que vous entendez");
  };
  /**
   * @return {undefined}
   */
  c.Qi = function() {
    if (!targetSplit) {
      if (!sourceSplit) {
        if (this.G.ma()) {
          this.G.a().focus();
        } else {
          setText(this.G);
        }
      }
    }
    if (this.Bc) {
      /** @type {number} */
      this.Bc.currentTime = 0;
      this.Bc.play();
    }
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  c.Xg = function(event) {
    if (13 == event.keyCode) {
      this.He();
    } else {
      if (this.Vg) {
        if (makeKeywords(this)) {
          mouseover(this, false);
        }
      } else {
        if (eql(event.keyCode) && !event.uf) {
          if (82 == event.keyCode) {
            this.Qi();
          } else {
            var lastKeyPressCode;
            if (!(lastKeyPressCode = 32 == event.keyCode)) {
              lastKeyPressCode = event.keyCode;
              /** @type {boolean} */
              lastKeyPressCode = 48 <= lastKeyPressCode && 57 >= lastKeyPressCode || 96 <= lastKeyPressCode && 105 >= lastKeyPressCode;
            }
            if (lastKeyPressCode) {
              if (makeKeywords(this)) {
                mouseover(this, false);
              }
              return;
            }
          }
          event.preventDefault();
        }
      }
    }
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    if (this.Bc) {
      this.Bc.pause();
    }
    return/^[\s\xa0]*$/.test(this.G.ma()) ? (getEl("audio-instructions").focus(), true) : false;
  };
  /**
   * @param {Object} data
   * @param {?} root
   * @param {boolean} var_args
   * @return {?}
   */
  c.Fa = function(data, root, var_args) {
    mouseover(this, !!var_args);
    this.G.clear();
    this.G.sa(true);
    if (!this.Vg) {
      suffixClasses(this.B("rc-audiochallenge-download"), lookup, {
        gh : this.Sb(data, void 0, "/audio.mp3")
      });
    }
    if (document.createElement("audio").play) {
      if (root) {
        if (cb(root, file, 8)) {
          this.wg = require(cb(root, file, 8), 1);
        }
      }
      root = this.B("rc-audiochallenge-instructions");
      if (1 == this.wg) {
        walk(root, "Appuyez sur LIRE et saisissez les mots que vous entendez");
      } else {
        walk(root, "Appuyez sur LIRE et saisissez les chiffres que vous entendez");
      }
      data = this.Sb(data, "");
      suffixClasses(this.ig, cdata, {
        gh : data
      });
      /** @type {(HTMLElement|null|string)} */
      this.Bc = isString("audio-source") ? document.getElementById("audio-source") : "audio-source";
      data = this.B("rc-audiochallenge-play-button");
      root = exports(this, void 0, "LIRE", void 0, void 0, void 0, void 0);
      set(this, root);
      root.render(data);
      fire(this).listen(root, "action", this.Qi);
    } else {
      suffixClasses(this.ig, ol);
    }
    return dispatchEvent();
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} edge
   * @return {?}
   */
  c.Ja = function(recurring, edge) {
    if (edge) {
      var indentKeys = makeKeywords(this);
      cleanup(this.Jb, recurring);
      _addClass(this.G, recurring);
      removeEvent(this.Jb);
      if (recurring) {
        walk(this.Jb, "Veuillez effectuer d'autres tests (vous devez fournir plusieurs solutions correctes).");
      }
      return recurring != indentKeys;
    }
    mouseover(this, recurring, this.Jb);
    return false;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  var makeKeywords = function(dataAndEvents) {
    return!!dataAndEvents.Jb && 0 < getElement(dataAndEvents.Jb).length;
  };
  /**
   * @return {undefined}
   */
  Sound.prototype.vc = function() {
    if (!makeKeywords(this) || vlq && apply("10")) {
      getById("rc-audiochallenge-play-button", void 0).children[0].focus();
    } else {
      this.Jb.focus();
    }
  };
  /**
   * @return {undefined}
   */
  Sound.prototype.Xa = function() {
    this.response.response = this.G.ma();
    this.G.sa(false);
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  Sound.prototype.Vb = function(className) {
    suffixClasses(className, chunk, {
      Dk : this.Vg
    });
  };
  /**
   * @param {?} src
   * @return {?}
   */
  var output = function(src) {
    return callback('<div id="rc-canvas"><canvas class="rc-canvas-canvas"></canvas><img class="rc-canvas-image" src="' + escape(write(src.ff)) + '"></img></div>');
  };
  /**
   * @return {?}
   */
  var classNames = function() {
    return callback('Dessinez un cadre autour de l\'objet en cliquant sur ses coins comme dans l\'animation ci-dessus. Actualisez le test si vous souhaitez en g\u00e9n\u00e9rer un nouveau ou si les instructions ne sont pas claires.<a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>');
  };
  /**
   * @param {string} data
   * @return {?}
   */
  var resolve = function(data) {
    /** @type {string} */
    var content = "";
    var val = data.label;
    switch(replace(val) ? val.toString() : val) {
      case "stop_sign":
        content += '<div id="rc-imageselect-candidate" class="rc-imageselect-candidates"><img src="//www.gstatic.com/recaptcha/api2/stop_sign.jpg"/></div><div class="rc-imageselect-desc">';
        break;
      case "vehicle":
      ;
      case "/m/07yv9":
      ;
      case "/m/0k4j":
        content += '<div id="rc-imageselect-candidate" class="rc-imageselect-candidates"><img src="//www.gstatic.com/recaptcha/api2/canonical_car.png"/></div><div class="rc-imageselect-desc">';
        break;
      case "road":
        content += '<div id="rc-imageselect-candidate" class="rc-imageselect-candidates"><img src="//www.gstatic.com/recaptcha/api2/canonical_road.png"/></div><div class="rc-imageselect-desc">';
        break;
      default:
        content += '<div class="rc-imageselect-desc-no-canonical">';
    }
    content = "" + callback(content);
    val = data.Vd;
    switch(replace(val) ? val.toString() : val) {
      case "tileselect":
      ;
      case "multicaptcha":
        /** @type {string} */
        val = "";
        var value = data.label;
        switch(replace(value) ? value.toString() : value) {
          case "Turkeys":
            val += "Select all squares with <strong>Turkeys</strong>.";
            break;
          case "GiftBoxes":
            val += "S\u00e9lectionnez toutes les cases montrant des <strong>cadeaux</strong>.";
            break;
          case "Fireworks":
            val += "S\u00e9lectionnez toutes les cases montrant un <strong>feu d'artifice</strong>.";
            break;
          case "TileSelectionStreetSign":
            val += "S\u00e9lectionnez toutes les tuiles affichant des <strong>panneaux de signalisation</strong>.";
            break;
          case "TileSelectionBizView":
            val += "S\u00e9lectionnez toutes les tuiles affichant des <strong>noms d'entreprise</strong>.";
            break;
          case "stop_sign":
            val += "S\u00e9lectionnez toutes les cases montrant des <strong>panneaux stop</strong>.";
            break;
          case "vehicle":
          ;
          case "/m/07yv9":
          ;
          case "/m/0k4j":
            val += "S\u00e9lectionnez toutes les cases montrant un <strong>v\u00e9hicule</strong>.";
            break;
          case "road":
          ;
          case "/m/06gfj":
            val += "S\u00e9lectionnez toutes les cases montrant une <strong>route</strong>.";
            break;
          case "house":
          ;
          case "/m/03jm5":
            val += "S\u00e9lectionnez toutes les cases montrant une <strong>maison</strong>.";
            break;
          case "USER_DEFINED_STRONGLABEL":
            val += "Select all squares that match the label: <strong>" + reject(data.yd) + "</strong>.";
            break;
          default:
            val += "Veuillez s\u00e9lectionner ci-dessous toutes les images correspondant \u00e0 celle affich\u00e9e \u00e0 droite.";
        }
        if ("multicaptcha" == data.Vd) {
          val += '<br/><span class="rc-imageselect-carousel-instructions">S\'il n\'y en a aucune, cliquez sur "Ignorer".</span>';
        }
        data = callback(val);
        content += data;
        break;
      default:
        /** @type {string} */
        val = "";
        value = data.label;
        switch(replace(value) ? value.toString() : value) {
          case "romantic":
            val += "S\u00e9lectionnez toutes les images qui vous semblent <strong>romantiques pour le d\u00eener</strong>.";
            break;
          case "outdoor_seating_area":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>places assises \u00e0 l'ext\u00e9rieur</strong>.";
            break;
          case "indoor_seating_area":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>places assises \u00e0 l'int\u00e9rieur</strong>.";
            break;
          case "streetname":
          ;
          case "1000E_sign_type_US_street_name":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>noms de rue</strong>.";
            break;
          case "1000E_sign_type_US_no_left_turn":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>panneaux d'interdiction de tourner \u00e0 gauche</strong>.";
            break;
          case "1000E_sign_type_US_no_right_turn":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>panneaux d'interdiction de tourner \u00e0 droite</strong>.";
            break;
          case "1000E_sign_type_US_stop":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>panneaux de stop</strong>.";
            break;
          case "1000E_sign_type_US_speed_limit":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>panneaux de limitation de vitesse</strong>.";
            break;
          case "signs":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>panneaux de signalisation</strong>.";
            break;
          case "street_num":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>num\u00e9ros de rue</strong>.";
            break;
          case "ImageSelectStoreFront":
          ;
          case "storefront":
          ;
          case "ImageSelectBizFront":
          ;
          case "ImageSelectStoreFront_inconsistent":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>devanture de magasin</strong>.";
            break;
          case "gcid:atm":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>distributeur de billets</strong>.";
            break;
          case "gcid:auto_parts_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de pi\u00e8ces automobiles</strong>.";
            break;
          case "gcid:auto_repair_shop":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>atelier de r\u00e9paration automobile</strong>.";
            break;
          case "gcid:bakery":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>boulangerie</strong>.";
            break;
          case "gcid:bank":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>banque</strong>.";
            break;
          case "gcid:bar":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>bar</strong>.";
            break;
          case "gcid:beauty_salon":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>salon de beaut\u00e9</strong>.";
            break;
          case "gcid:cafe":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>caf\u00e9</strong>.";
            break;
          case "gcid:car_dealer":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>concessionnaire automobile</strong>.";
            break;
          case "gcid:cell_phone_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de t\u00e9l\u00e9phonie mobile</strong>.";
            break;
          case "gcid:clothing_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de v\u00eatements</strong>.";
            break;
          case "gcid:convenience_store":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>sup\u00e9rette</strong>.";
            break;
          case "gcid:department_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>grand magasin</strong>.";
            break;
          case "gcid:furniture_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de meubles</strong>.";
            break;
          case "gcid:gas_station":
          ;
          case "gas_station":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>station-service</strong>.";
            break;
          case "gcid:grocery_store":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>\u00e9picerie</strong>.";
            break;
          case "gcid:hair_salon":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>salon de coiffure</strong>.";
            break;
          case "gcid:hotel":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>h\u00f4tel</strong>.";
            break;
          case "gcid:pharmacy":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>pharmacie</strong>.";
            break;
          case "gcid:real_estate_agency":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>agence immobili\u00e8re</strong>.";
            break;
          case "gcid:restaurant":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>restaurant</strong>.";
            break;
          case "gcid:shoe_store":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de chaussures</strong>.";
            break;
          case "gcid:shopping_center":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>centre commercial</strong>.";
            break;
          case "gcid:supermarket":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>supermarch\u00e9</strong>.";
            break;
          case "gcid:tire_shop":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>magasin de pneus</strong>.";
            break;
          case "/m/02wbm":
          ;
          case "food":
            val += "S\u00e9lectionnez tous les <strong>aliments</strong>.";
            break;
          case "/m/0270h":
            val += "S\u00e9lectionnez tous les <strong>desserts</strong>.";
            break;
          case "/m/0hz4q":
            val += "S\u00e9lectionnez toutes les images montrant des aliments typiques du petit-d\u00e9jeuner.";
            break;
          case "/m/0fszt":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>g\u00e2teaux</strong>.";
            break;
          case "/m/03p1r4":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>cupcakes</strong>.";
            break;
          case "/m/022p83":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>g\u00e2teaux de mariage</strong>.";
            break;
          case "/m/02czv8":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>g\u00e2teaux d'anniversaire</strong>.";
            break;
          case "/m/09728":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>pain</strong>.";
            break;
          case "/m/0l515":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>sandwichs</strong>.";
            break;
          case "/m/0cdn1":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>hamburgers</strong>.";
            break;
          case "/m/01j3zr":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>burritos</strong>.";
            break;
          case "/m/07pbfj":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>poisson</strong>.";
            break;
          case "/m/0cxn2":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>glaces</strong>.";
            break;
          case "/m/05z55":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>p\u00e2tes ou des nouilles</strong>.";
            break;
          case "/m/0grtl":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>steak</strong>.";
            break;
          case "/m/0663v":
          ;
          case "pizza":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>pizza</strong>.";
            break;
          case "/m/01z1m1x":
            val += "S\u00e9lectionnez toutes les images montrant de la <strong>soupe</strong>.";
            break;
          case "/m/07030":
          ;
          case "sushi":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>sushis</strong>.";
            break;
          case "/m/09759":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>riz</strong>.";
            break;
          case "/m/02y6n":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>frites</strong>.";
            break;
          case "/m/0mjqn":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>tartes</strong>.";
            break;
          case "/m/0jy4k":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>beignets</strong>.";
            break;
          case "/m/033cnk":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>\u0153ufs</strong>.";
            break;
          case "/m/0gm28":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bonbons</strong>.";
            break;
          case "/m/0grw1":
            val += "S\u00e9lectionnez toutes les images montrant de la <strong>salade</strong>.";
            break;
          case "/m/0pmbh":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>dim sums</strong>.";
            break;
          case "/m/021mn":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>cookies</strong>.";
            break;
          case "/m/01dwwc":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>pancakes</strong>.";
            break;
          case "/m/01dwsz":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>gaufres</strong>.";
            break;
          case "/m/0fbw6":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>chou</strong>.";
            break;
          case "/m/09qck":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bananes</strong>.";
            break;
          case "/m/047v4b":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>artichauts</strong>.";
            break;
          case "/m/01b9xk":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>hot dogs</strong>.";
            break;
          case "/m/0h0xm":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>bacon</strong>.";
            break;
          case "/m/0cyhj_":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>orange</strong>.";
            break;
          case "/m/0fg0m":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>cacahu\u00e8tes</strong>.";
            break;
          case "/m/04rx8j":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>salade de fruits</strong>.";
            break;
          case "/m/01hrv5":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>pop-corn</strong>.";
            break;
          case "/m/05zsy":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>citrouilles</strong>.";
            break;
          case "/m/0271t":
            val += "S\u00e9lectionnez toutes les <strong>boissons</strong>.";
            break;
          case "/m/01599":
            val += "S\u00e9lectionnez toutes les images montrant de la <strong>bi\u00e8re</strong>.";
            break;
          case "/m/081qc":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>vin</strong>.";
            break;
          case "/m/02vqfm":
          ;
          case "coffee":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>caf\u00e9</strong>.";
            break;
          case "/m/07clx":
          ;
          case "tea":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>th\u00e9</strong>.";
            break;
          case "/m/01z1kdw":
            val += "S\u00e9lectionnez toutes les images montrant du <strong>jus</strong>.";
            break;
          case "/m/01k17j":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>milk-shake</strong>.";
            break;
          case "/m/05s2s":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>plantes</strong>.";
            break;
          case "/m/0c9ph5":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>fleurs</strong>.";
            break;
          case "/m/07j7r":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>arbres</strong>.";
            break;
          case "/m/08t9c_":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>pelouse</strong>.";
            break;
          case "/m/0gqbt":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>arbrisseaux</strong>.";
            break;
          case "/m/025_v":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>cactus</strong>.";
            break;
          case "/m/0cdl1":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>palmiers</strong>.";
            break;
          case "/m/05h0n":
            val += "S\u00e9lectionnez toutes les images illustrant la <strong>nature</strong>.";
            break;
          case "/m/0j2kx":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>chutes d'eau</strong>.";
            break;
          case "/m/09d_r":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>montagnes</strong>.";
            break;
          case "/m/03ktm1":
            val += "S\u00e9lectionnez toutes les images illustrant des <strong>\u00e9tendues d'eau</strong>, telles que des lacs ou des oc\u00e9ans.";
            break;
          case "/m/06cnp":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>rivi\u00e8res</strong>.";
            break;
          case "/m/0b3yr":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>plages</strong>.";
            break;
          case "/m/06m_p":
            val += "S\u00e9lectionnez toutes les images illustrant le <strong>Soleil</strong>.";
            break;
          case "/m/04wv_":
            val += "S\u00e9lectionnez toutes les images montrant <strong>la Lune</strong>.";
            break;
          case "/m/01bqvp":
            val += "S\u00e9lectionnez toutes les images illustrant le <strong>ciel</strong>.";
            break;
          case "/m/07yv9":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>v\u00e9hicules</strong>";
            break;
          case "/m/0k4j":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>voitures</strong>.";
            break;
          case "/m/0199g":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>v\u00e9los</strong>.";
            break;
          case "/m/04_sv":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>motos</strong>.";
            break;
          case "/m/0cvq3":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>pick-up</strong>.";
            break;
          case "/m/0fkwjg":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>camions de transport</strong>.";
            break;
          case "/m/019jd":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bateaux</strong>.";
            break;
          case "/m/0cmf2":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>avions</strong>.";
            break;
          case "/m/01786t":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>tricycles</strong>.";
            break;
          case "/m/06_fw":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>skateboard</strong>.";
            break;
          case "/m/019w40":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>planches de surf</strong>.";
            break;
          case "/m/04fdw":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>kayaks</strong>.";
            break;
          case "/m/03ylns":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>landaus</strong>.";
            break;
          case "/m/0qmmr":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>fauteuils roulants</strong>.";
            break;
          case "/m/09vl64":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>remorque de v\u00e9lo</strong>.";
            break;
          case "/m/01lcw4":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>limousines</strong>.";
            break;
          case "/m/0pg52":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>taxis</strong>.";
            break;
          case "/m/02yvhj":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>bus scolaire</strong>.";
            break;
          case "/m/01bjv":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>bus</strong>.";
            break;
          case "/m/07jdr":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>trains</strong>.";
            break;
          case "/m/01lgkm":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>camping-car</strong>.";
            break;
          case "m/0323sq":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>voiturette de golf</strong>.";
            break;
          case "/m/02gx17":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>v\u00e9hicule de chantier</strong>.";
            break;
          case "/m/0b_rs":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>piscine</strong>.";
            break;
          case "/m/01h_1n":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>terrain de jeu</strong>.";
            break;
          case "/m/010jjr":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>parc d'attractions</strong>.";
            break;
          case "/m/01wt5r":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>parc aquatique</strong>.";
            break;
          case "pool_indoor":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>piscine int\u00e9rieure</strong>.";
            break;
          case "pool_outdoor":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>piscine ext\u00e9rieure</strong>.";
            break;
          case "/m/065h6l":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>jacuzzi</strong>.";
            break;
          case "/m/0hnnb":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>parasol</strong>.";
            break;
          case "/m/056zd5":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>transats</strong>.";
            break;
          case "/m/04p0xr":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>table de billard</strong>.";
            break;
          case "/m/02p8qh":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>cour</strong>.";
            break;
          case "/m/07gcy":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>terrain de tennis</strong>.";
            break;
          case "/m/019cfy":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>stade</strong>.";
            break;
          case "/m/03d2wd":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>salle \u00e0 manger</strong>.";
            break;
          case "/m/039l3v":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>auditorium</strong>.";
            break;
          case "/m/07cwnp":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>tables de pique-nique</strong>.";
            break;
          case "/m/0c06p":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bougies</strong>.";
            break;
          case "/m/06vwgw":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>chaise haute</strong>.";
            break;
          case "/m/01m3v":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>ordinateurs</strong>.";
            break;
          case "/m/07c52":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>t\u00e9l\u00e9visions</strong>.";
            break;
          case "/m/07cx4":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>t\u00e9l\u00e9phones</strong>.";
            break;
          case "/m/0n5v01m":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>sacs</strong>.";
            break;
          case "/m/0bt_c3":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>livres</strong>.";
            break;
          case "/m/06rrc":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>chaussures</strong>.";
            break;
          case "/m/0404d":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bijoux</strong>.";
            break;
          case "/m/0dv5r":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>appareils photo</strong>.";
            break;
          case "/m/0c_jw":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>meubles</strong>.";
            break;
          case "/m/01j51":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>ballons</strong>.";
            break;
          case "/m/05r5c":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>pianos</strong>.";
            break;
          case "/m/01n4qj":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>chemises</strong>.";
            break;
          case "/m/02crq1":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>canap\u00e9s</strong>.";
            break;
          case "/m/03ssj5":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>lits</strong>.";
            break;
          case "/m/01y9k5":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>bureaux</strong>.";
            break;
          case "/m/01mzpv":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>chaise</strong>.";
            break;
          case "/m/01s105":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>armoire</strong>.";
            break;
          case "/m/04bcr3":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>table</strong>.";
            break;
          case "/m/09j2d":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>v\u00eatements</strong>.";
            break;
          case "/m/01xygc":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>manteaux</strong>.";
            break;
          case "/m/07mhn":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>pantalons</strong>.";
            break;
          case "/m/01xyhv":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>costumes</strong>.";
            break;
          case "/m/0342h":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>guitare</strong>.";
            break;
          case "/m/04szw":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>instrument de musique</strong>.";
            break;
          case "/m/05148p4":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>instrument \u00e0 clavier</strong>.";
            break;
          case "/m/026t6":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>tambour</strong>.";
            break;
          case "/m/0cfpc":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>haut-parleurs</strong>.";
            break;
          case "/m/04w67_":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>bo\u00eete \u00e0 lettres</strong>.";
            break;
          case "/m/017ftj":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>lunettes de soleil</strong>.";
            break;
          case "/m/0jyfg":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>lunettes de vue</strong>.";
            break;
          case "/m/03ldnb":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>ventilateur de plafond</strong>.";
            break;
          case "/m/013_1c":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>statues</strong>.";
            break;
          case "/m/0h8lhkg":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>fontaines</strong>.";
            break;
          case "/m/015kr":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>ponts</strong>.";
            break;
          case "/m/01phq4":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>jet\u00e9e</strong>.";
            break;
          case "/m/079cl":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>gratte-ciel</strong>.";
            break;
          case "/m/01_m7":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>piliers ou colonnes</strong>.";
            break;
          case "/m/011y23":
            val += "S\u00e9lectionnez toutes les images montrant des <strong>vitraux</strong>.";
            break;
          case "/m/03jm5":
            val += "S\u00e9lectionnez toutes les images montrant <strong>une maison</strong>.";
            break;
          case "/m/01nblt":
            val += "S\u00e9lectionnez toutes les images montrant <strong>un bloc d'appartements</strong>.";
            break;
          case "/m/04h7h":
            val += "S\u00e9lectionnez toutes les images montrant <strong>un phare</strong>.";
            break;
          case "/m/0py27":
            val += "S\u00e9lectionnez toutes les images montrant <strong>une gare ferroviaire</strong>.";
            break;
          case "/m/01n6fd":
            val += "S\u00e9lectionnez toutes les images montrant <strong>un cabanon</strong>.";
            break;
          case "/m/01pns0":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>borne d'incendie</strong>.";
            break;
          case "/m/01knjb":
          ;
          case "billboard":
            val += "S\u00e9lectionnez toutes les images montrant un <strong>panneau d'affichage</strong>.";
            break;
          case "/m/06gfj":
            val += "S\u00e9lectionnez toutes les images montrant une <strong>route</strong>.";
            break;
          default:
            /** @type {string} */
            value = "S\u00e9lectionnez toutes les images correspondant au libell\u00e9 suivant\u00a0: <strong>" + (reject(data.yd) + "</strong>.");
            val += value;
        }
        if ("dynamic" == data.Vd) {
          val += "<br/><span>Lorsque vous avez termin\u00e9, cliquez sur le bouton de validation.</span>";
        }
        data = callback(val);
        content += data;
    }
    return callback(content);
  };
  /**
   * @return {?}
   */
  var pdataOld = function() {
    return callback('<div id="rc-imageselect"><div class="rc-imageselect-response-field"></div><div class="rc-imageselect-payload"></div>' + reject(authenticate()) + "</div>");
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var check = function(value) {
    if ("canvas" == value.Vd) {
      /** @type {string} */
      var at = '<div id="rc-imageselect-candidate" class="rc-imageselect-candidates"><img src="//www.gstatic.com/recaptcha/api2/boundingbox2.gif"/></div><div class="rc-imageselect-desc">';
      var result = value.label;
      switch(replace(result) ? result.toString() : result) {
        case "TileSelectionStreetSign":
          at += "Tracez un trait autour des <strong>plaques de rue</strong>";
          break;
        case "USER_DEFINED_STRONGLABEL":
          at += "Select around the <strong>" + reject(value.yd) + "s</strong>";
          break;
        default:
          at += "Tracez un trait autour de l'objet";
      }
      value = callback(at);
      value = reject(value);
    } else {
      value = reject(resolve(value));
    }
    return callback("" + ('<div class="rc-imageselect-instructions"><div class="rc-imageselect-desc-wrapper" tabindex="0">' + value + '</div><div class="rc-imageselect-clear"></div></div></div><div class="rc-imageselect-challenge"><div id="rc-imageselect-target" class="rc-imageselect-target" dir="ltr" role="presentation" aria-hidden="true"></div></div><div class="rc-imageselect-incorrect-response" style="display:none">Veuillez r\u00e9essayer.</div><div class="rc-imageselect-error-select-more" style="display:none">Veuillez s\u00e9lectionner toutes les images correspondantes.</div><div class="rc-imageselect-error-dynamic-more" style="display:none">Veuillez \u00e9galement v\u00e9rifier les nouvelles images.</div><div class="rc-imageselect-error-select-something" style="display:none">Veuillez tracer un trait autour de l\'objet ou actualiser s\'il n\'y en a pas.</div>'));
  };
  /**
   * @param {Element} obj
   * @return {?}
   */
  var merge = function(obj) {
    /** @type {string} */
    var currentTime = '<table class="rc-imageselect-table-' + escape(obj.rowSpan) + escape(obj.colSpan) + '"><tbody>';
    var k = obj.rowSpan;
    /** @type {number} */
    var j = 0;
    for (;j < k;j++) {
      /** @type {string} */
      currentTime = currentTime + "<tr>";
      var l = obj.colSpan;
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        var key = void 0;
        var original = {
          Zi : j,
          pg : i
        };
        /** @type {Element} */
        var extended = obj;
        for (key in extended) {
          if (!(key in original)) {
            original[key] = extended[key];
          }
        }
        currentTime += "<td>" + trigger(original) + "</td>";
      }
      currentTime += "</tr>";
    }
    return callback(currentTime + "</tbody></table>");
  };
  /**
   * @param {Element} obj
   * @return {?}
   */
  var trigger = function(obj) {
    return callback('<div class="rc-image-tile-target"><div class="rc-image-tile-wrapper" style="width: ' + escape(val(obj.qg)) + "; height: " + escape(val(obj.mh)) + '"><img class="rc-image-tile-' + escape(obj.rowSpan) + escape(obj.colSpan) + "\" src='" + escape(write(obj.ff)) + "' style=\"top:" + escape(val(-100 * obj.Zi)) + "%; left: " + escape(val(-100 * obj.pg)) + '%"><div class="rc-image-tile-overlay"></div></div><div class="rc-imageselect-checkbox"></div></div>');
  };
  /**
   * @param {?} settings
   * @return {?}
   */
  var element = function(settings) {
    /** @type {string} */
    var currTime = '<div class="rc-imageselect-followup-text">S\u00e9lectionnez le type du panneau ci-dessus.</div><table class="rc-imageselect-table-44 followup"><tbody><tr>';
    var values = settings.xk;
    var valuesLen = values.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      var value = values[i];
      currTime += '<td><div class="rc-image-tile-target"><div class="rc-image-tile-wrapper" style="width: ' + escape(val(settings.qg)) + "; height: " + escape(val(settings.mh)) + '"><img class="rc-image-followup-tile" style="width: ' + escape(val(settings.qg)) + "; height: " + escape(val(settings.mh)) + "\" src='" + escape(write(value)) + '\'><div class="rc-image-tile-overlay"></div></div><div class="rc-imageselect-checkbox"></div></div></td>';
    }
    return callback(currTime + "</tr></tbody></table>");
  };
  /**
   * @param {?} when
   * @return {?}
   */
  var later = function(when) {
    /** @type {string} */
    var lastError = "";
    /** @type {string} */
    lastError = "imageselect" == when.Ri ? lastError + 'S\u00e9lectionnez chaque image comportant l\'objet d\u00e9crit dans le texte ou l\'image en haut de l\'interface. Ensuite, cliquez sur "Valider". Pour g\u00e9n\u00e9rer un nouveau test, cliquez sur l\'ic\u00f4ne d\'actualisation. <a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>' : lastError + "Cliquez sur les tuiles repr\u00e9sentant l'objet d\u00e9crit dans le texte. Si de nouvelles images contenant ce m\u00eame objet s'affichent, s\u00e9lectionnez-les \u00e9galement. Lorsque vous avez termin\u00e9, cliquez sur \"Valider\". ";
    return callback(lastError);
  };
  /**
   * @param {string} v
   * @return {undefined}
   */
  var f = function(v) {
    var query = this.X();
    data.call(this, query.width, query.height, v || "imageselect");
    /** @type {null} */
    this.ia = null;
    this.config = {
      candidate : {
        rowSpan : 1,
        colSpan : 1
      },
      w : {
        rowSpan : 3,
        colSpan : 3,
        tl : "31%"
      }
    };
    this.S = {
      w : {
        Z : null,
        element : null
      }
    };
    /** @type {number} */
    this.Ei = 1;
    /** @type {null} */
    this.F = null;
  };
  equal(f, data);
  /**
   * @return {undefined}
   */
  f.prototype.C = function() {
    f.b.C.call(this);
    this.j = createElement(pdataOld);
    this.L(this.a());
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  f.prototype.L = function(e) {
    f.b.L.call(this, e);
    this.ia = this.B("rc-imageselect-payload");
  };
  /**
   * @param {Object} _this
   * @param {number} err
   * @param {number} err2
   * @return {undefined}
   */
  var mergeCells = function(_this, err, err2) {
    if (err2) {
      _this.config.w.rowSpan = err || err2;
      /** @type {number} */
      _this.config.w.colSpan = err2;
    } else {
      /** @type {number} */
      _this.config.w.rowSpan = 3;
      /** @type {number} */
      _this.config.w.colSpan = 3;
    }
    _this.config.w.tl = format("%d%%", parseInt(100 / _this.config.w.colSpan, 10) - 2);
  };
  /**
   * @param {?} header
   * @param {?} p
   * @param {boolean} var_args
   * @return {?}
   */
  f.prototype.Fa = function(header, p, var_args) {
    p = cb(p, options, 1);
    mergeCells(this, p.ii(), p.hi());
    this.F = p.Oe();
    this.Ei = p.Pe() || 1;
    /** @type {string} */
    var mimetype = "image/png";
    if (1 == require(p, 6)) {
      /** @type {string} */
      mimetype = "image/jpeg";
    }
    var path = require(p, 7);
    if (null != path) {
      path = path.toLowerCase();
    }
    suffixClasses(this.ia, check, {
      label : this.F,
      Tl : require(p, 2),
      Ul : mimetype,
      Vd : this.getName(),
      yd : path
    });
    /** @type {(HTMLElement|null)} */
    this.S.w.element = document.getElementById("rc-imageselect-target");
    proxy();
    loaded(this, this.X(), true);
    return loadFile(this.Ab(this.Sb(header), this.config.w.rowSpan, this.config.w.colSpan)).then(log(function() {
      if (var_args) {
        mouseover(this, true, getById("rc-imageselect-incorrect-response", void 0));
      }
    }, this));
  };
  /**
   * @param {Element} selector
   * @param {number} i
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  f.prototype.Ab = function(selector, i, deepDataAndEvents) {
    _hasClass(this.S.w.element, "rc-imageselect-table-shrink");
    var context = animate(this, i, deepDataAndEvents);
    /** @type {Element} */
    context.ff = selector;
    selector = createElement(merge, context);
    this.B("rc-imageselect-target").appendChild(selector);
    /** @type {Array} */
    var eventPath = [];
    slice(remove(document, "td", null, selector), function(child) {
      var recurring = {
        selected : false,
        element : child,
        ng : false
      };
      eventPath.push(recurring);
      fire(this).listen(new touchstart(select(child)), "action", log(this.ab, this, recurring));
    }, this);
    /** @type {Array} */
    var content = [];
    if ("tileselect" == this.getName()) {
      if ("TileSelectionStreetSign" == this.F) {
        if (loop("JS_TILESELECT_CLASS")) {
          /** @type {Array} */
          context.xk = ["//www.gstatic.com/recaptcha/api2/stop_sign.jpg", "//www.gstatic.com/recaptcha/api2/canonical_speed_limit.png", "//www.gstatic.com/recaptcha/api2/canonical_street_name.png", "//www.gstatic.com/recaptcha/api2/canonical_other.png"];
          context = createElement(element, context);
          this.B("rc-imageselect-target").appendChild(context);
          slice(remove(document, "td", null, context), function(child) {
            var recurring = {
              selected : false,
              element : child,
              ng : true
            };
            content.push(recurring);
            fire(this).listen(new touchstart(select(child)), "action", log(this.ab, this, recurring));
          }, this);
        }
      }
    }
    this.S.w.Z = {
      rowSpan : i,
      colSpan : deepDataAndEvents,
      Db : eventPath,
      gd : 0,
      Ae : content
    };
    return selector;
  };
  /**
   * @param {HTMLElement} selector
   * @return {?}
   */
  var loadFile = function(selector) {
    return new controller(function(done) {
      var links = remove(document, "img", null, selector);
      if (0 == links.length) {
        done();
      } else {
        addEvent(links[0], "load", function() {
          done();
        });
      }
    });
  };
  /**
   * @param {number} t
   * @param {number} prop
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  var animate = function(t, prop, deepDataAndEvents) {
    /** @type {number} */
    t = t.gb.clone().width - 14;
    /** @type {number} */
    var opts = 4 == prop && 4 == deepDataAndEvents ? 1 : 2;
    opts = new clone((deepDataAndEvents - 1) * opts * 2, (prop - 1) * opts * 2);
    t = new clone(t - opts.width, t - opts.height);
    t.scale(1 / deepDataAndEvents, 1 / prop).floor();
    return{
      mh : t.height + "px",
      qg : t.width + "px",
      rowSpan : prop,
      colSpan : deepDataAndEvents
    };
  };
  /**
   * @param {Object} p
   * @return {undefined}
   */
  f.prototype.ab = function(p) {
    mouseover(this, false);
    /** @type {boolean} */
    var recurring = !p.selected;
    if (p.ng) {
      /** @type {boolean} */
      p.selected = false;
      var codeSegments = getValue(this);
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        this.ab(this.S.w.Z.Ae[codeSegments[i]]);
      }
    }
    if (recurring) {
      addClass(p.element, "rc-imageselect-tileselected");
    } else {
      _hasClass(p.element, "rc-imageselect-tileselected");
    }
    /** @type {boolean} */
    p.selected = recurring;
    if (!p.ng) {
      this.S.w.Z.gd += recurring ? 1 : -1;
    }
    cleanup(getById("rc-imageselect-checkbox", p.element), recurring);
  };
  /**
   * @return {undefined}
   */
  f.prototype.Xa = function() {
    this.response.response = move(this);
    var codeSegments = getValue(this);
    if (codeSegments.length) {
      this.response.plugin = "class" + codeSegments[0];
    } else {
      if (0 < this.S.w.Z.Ae.length) {
        /** @type {string} */
        this.response.plugin = "class";
      }
    }
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var move = function(obj) {
    /** @type {Array} */
    var assigns = [];
    slice(obj.S.w.Z.Db, function(pane, vvar) {
      if (pane.selected) {
        assigns.push(vvar);
      }
    });
    return assigns;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var getValue = function(obj) {
    /** @type {Array} */
    var arr = [];
    slice(obj.S.w.Z.Ae, function(pane, chunk) {
      if (pane.selected) {
        arr.push(chunk);
      }
    });
    return arr;
  };
  c = f.prototype;
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, later, {
      Ri : this.getName()
    });
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    var gd = this.S.w.Z.gd;
    if (0 == gd || gd < this.Ei) {
      return mouseover(this, true, getById("rc-imageselect-error-select-more", void 0)), true;
    }
    if (this.S.w.Z.Ae.length) {
      if (hasClass(this.S.w.element, "rc-imageselect-table-shrink")) {
        return false;
      }
      addClass(this.S.w.element, "rc-imageselect-table-shrink");
      return true;
    }
    return false;
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} speed
   * @return {?}
   */
  c.Ja = function(recurring, speed) {
    /** @type {Array} */
    var ok = ["rc-imageselect-error-select-more", "rc-imageselect-incorrect-response", "rc-imageselect-error-dynamic-more"];
    if (!(!recurring && speed)) {
      slice(ok, function(datum) {
        datum = getById(datum, void 0);
        if (datum != speed) {
          mouseover(this, false, datum);
        }
      }, this);
    }
    return speed ? f.b.Ja.call(this, recurring, speed) : false;
  };
  /**
   * @return {?}
   */
  c.X = function() {
    var rect = this.ya || screenSize();
    /** @type {number} */
    rect = Math.max(Math.min(rect.height - 194, 400, rect.width), 280);
    return new clone(rect, 180 + rect);
  };
  /**
   * @return {undefined}
   */
  c.vc = function() {
    this.Wd.a().focus();
  };
  /**
   * @return {undefined}
   */
  var Overlay = function() {
    f.call(this, "canvas");
    /** @type {Array} */
    this.I = [[]];
    /** @type {number} */
    this.$i = 1;
  };
  mixin(Overlay, f);
  c = Overlay.prototype;
  /**
   * @param {Element} node
   * @return {?}
   */
  c.Ab = function(node) {
    /** @type {Array} */
    this.I = [[]];
    node = createElement(output, {
      ff : node
    });
    getById("rc-imageselect-target", void 0).appendChild(node);
    var canvas = getById("rc-canvas-canvas", void 0);
    /** @type {number} */
    canvas.width = this.gb.clone().width - 14;
    /** @type {number} */
    canvas.height = canvas.width;
    node.style.height = px(canvas.height);
    /** @type {number} */
    this.$i = canvas.width / 386;
    var ctx = canvas.getContext("2d");
    var element = getById("rc-canvas-image", void 0);
    addEvent(element, "load", function() {
      ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
    });
    fire(this).listen(new touchstart(canvas), "action", log(function(end) {
      cleanup(this.Nf.a(), true);
      var start = getById("rc-canvas-canvas", void 0);
      if (1 == start.nodeType) {
        start = getOffset(start);
        start = new Rect(start.left, start.top);
      } else {
        start = start.changedTouches ? start.changedTouches[0] : start;
        start = new Rect(start.clientX, start.clientY);
      }
      end = new Rect(end.clientX - start.x, end.clientY - start.y);
      start = this.I[this.I.length - 1];
      var x;
      if (x = 3 <= start.length) {
        var y = start[0];
        /** @type {number} */
        x = end.x - y.x;
        /** @type {number} */
        y = end.y - y.y;
        /** @type {boolean} */
        x = 15 > Math.sqrt(x * x + y * y);
      }
      a: {
        if (2 <= start.length) {
          /** @type {number} */
          y = start.length - 1;
          for (;0 < y;y--) {
            var p = start[y - 1];
            var r = start[y];
            var pos = start[start.length - 1];
            /** @type {Object} */
            var e = end;
            var a = matrix(p, r);
            var b = matrix(pos, e);
            if (a == b) {
              /** @type {boolean} */
              p = true;
            } else {
              /** @type {number} */
              var scale = a[0] * b[1] - b[0] * a[1];
              if (1E-5 >= Math.abs(scale - 0)) {
                /** @type {boolean} */
                p = false;
              } else {
                a = (new Rect(b[1] * a[2] - a[1] * b[2], a[0] * b[2] - b[0] * a[2])).scale(1 / scale);
                if (sendEvent(a, p) || (sendEvent(a, r) || (sendEvent(a, pos) || sendEvent(a, e)))) {
                  /** @type {boolean} */
                  p = false;
                } else {
                  pos = new Vector(pos.x, pos.y, e.x, e.y);
                  pos = clipPos(pos, transform(categorize(pos, a.x, a.y), 0, 1));
                  p = new Vector(p.x, p.y, r.x, r.y);
                  p = sendEvent(a, clipPos(p, transform(categorize(p, a.x, a.y), 0, 1))) && sendEvent(a, pos);
                }
              }
            }
            if (p) {
              /** @type {boolean} */
              y = x && 1 == y;
              break a;
            }
          }
        }
        /** @type {boolean} */
        y = true;
      }
      if (y) {
        if (x) {
          start.push(start[0]);
          this.I.push([]);
        } else {
          start.push(end);
        }
        this.Ie();
      } else {
        this.Ie(end);
        process(this.Ie, 250, this);
      }
    }, this));
    return node;
  };
  /**
   * @return {undefined}
   */
  c.di = function() {
    /** @type {number} */
    var verb = this.I.length - 1;
    if (0 == this.I[verb].length) {
      if (0 != verb) {
        this.I.pop();
      }
    }
    /** @type {number} */
    verb = this.I.length - 1;
    if (0 != this.I[verb].length) {
      this.I[verb].pop();
    }
    this.Ie();
  };
  /**
   * @param {Object} endPoint
   * @return {undefined}
   */
  c.Ie = function(endPoint) {
    var a = getById("rc-canvas-canvas", void 0);
    var ctx = a.getContext("2d");
    ctx.drawImage(getById("rc-canvas-image", void 0), 0, 0, a.width, a.height);
    /** @type {string} */
    ctx.strokeStyle = "rgba(100, 200, 100, 1)";
    /** @type {number} */
    ctx.lineWidth = 2;
    if (ms) {
      /**
       * @return {undefined}
       */
      ctx.setLineDash = function() {
      };
    }
    /** @type {number} */
    a = 0;
    for (;a < this.I.length;a++) {
      var valuesLen = this.I[a].length;
      if (0 != valuesLen) {
        if (a == this.I.length - 1) {
          if (endPoint) {
            ctx.beginPath();
            /** @type {string} */
            ctx.strokeStyle = "rgba(255, 50, 50, 1)";
            ctx.moveTo(this.I[a][valuesLen - 1].x, this.I[a][valuesLen - 1].y);
            ctx.lineTo(endPoint.x, endPoint.y);
            ctx.setLineDash([0]);
            ctx.stroke();
            ctx.closePath();
          }
          /** @type {string} */
          ctx.strokeStyle = "rgba(255, 255, 255, 1)";
          ctx.beginPath();
          /** @type {string} */
          ctx.fillStyle = "rgba(255, 255, 255, 1)";
          ctx.arc(this.I[a][valuesLen - 1].x, this.I[a][valuesLen - 1].y, 3, 0, 2 * Math.PI);
          ctx.fill();
          ctx.closePath();
        }
        ctx.beginPath();
        ctx.moveTo(this.I[a][0].x, this.I[a][0].y);
        /** @type {number} */
        var i = 1;
        for (;i < valuesLen;i++) {
          ctx.lineTo(this.I[a][i].x, this.I[a][i].y);
        }
        /** @type {string} */
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
        ctx.setLineDash([0]);
        ctx.stroke();
        ctx.lineTo(this.I[a][0].x, this.I[a][0].y);
        ctx.setLineDash([10]);
        ctx.stroke();
        ctx.closePath();
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.Xa = function() {
    /** @type {Array} */
    var out = [];
    /** @type {number} */
    var i = 0;
    for (;i < this.I.length;i++) {
      /** @type {Array} */
      var copies = [];
      /** @type {number} */
      var j = 0;
      for (;j < this.I[i].length;j++) {
        copies.push(this.I[i][j].clone().scale(1 / this.$i).round());
      }
      out.push(copies);
    }
    /** @type {Array} */
    this.response.response = out;
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    var b;
    if (!(b = 2 >= this.I[0].length)) {
      /** @type {number} */
      var a = b = 0;
      for (;a < this.I.length;a++) {
        var c = this.I[a];
        /** @type {number} */
        var i2 = c.length - 1;
        /** @type {number} */
        var i = 0;
        for (;i < c.length;i++) {
          b += (c[i2].x + c[i].x) * (c[i2].y - c[i].y);
          /** @type {number} */
          i2 = i;
        }
      }
      /** @type {boolean} */
      b = 500 > Math.abs(0.5 * b);
    }
    return b ? (mouseover(this, true, getById("rc-imageselect-error-select-something", void 0)), true) : false;
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, classNames);
  };
  /**
   * @return {?}
   */
  var camelKey = function() {
    /** @type {string} */
    var STOP = '<div tabindex="0"></div><div class="rc-defaultchallenge-response-field"></div><div class="rc-defaultchallenge-payload"></div><div class="rc-defaultchallenge-incorrect-response" style="display:none">Veuillez effectuer d\'autres tests (vous devez fournir plusieurs solutions correctes).</div>' + reject(authenticate());
    return callback(STOP);
  };
  /**
   * @param {Text} err
   * @return {?}
   */
  var onLine = function(err) {
    /** @type {string} */
    err = "" + ('<img src="' + escape(write(err.Sb)) + '" alt="' + "Image de validation reCAPTCHA".replace(r20, boundary) + '" />');
    return callback(err);
  };
  /**
   * @return {?}
   */
  var banner = function() {
    return callback('Saisissez le texte qui vous semble \u00eatre affich\u00e9 \u00e0 l\'\u00e9cran. Pour obtenir un nouveau test, cliquez sur le bouton d\'actualisation. <a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>');
  };
  /**
   * @return {undefined}
   */
  var ret = function() {
    data.call(this, info.width, info.height, "default");
    /** @type {null} */
    this.ia = null;
    this.G = new to;
    this.G.fe("Saisissez le texte.");
    set(this, this.G);
    this.va = new res;
    set(this, this.va);
  };
  equal(ret, data);
  var info = new clone(300, 185);
  c = ret.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    ret.b.C.call(this);
    this.j = createElement(camelKey);
    this.L(this.a());
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    ret.b.D.call(this);
    this.ia = this.B("rc-defaultchallenge-payload");
    this.G.render(this.B("rc-defaultchallenge-response-field"));
    this.G.a().setAttribute("id", "default-response");
    put(this.va, this.G.a());
    fire(this).listen(this.va, "key", this.Xg);
    fire(this).listen(this.G.a(), "keyup", this.rl);
  };
  /**
   * @param {?} event
   * @return {undefined}
   */
  c.Xg = function(event) {
    if (13 == event.keyCode) {
      this.He();
    }
  };
  /**
   * @return {undefined}
   */
  c.rl = function() {
    if (0 < this.G.ma().length) {
      mouseover(this, false);
    }
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    return/^[\s\xa0]*$/.test(this.G.ma());
  };
  /**
   * @param {?} header
   * @param {?} timer
   * @param {boolean} var_args
   * @return {?}
   */
  c.Fa = function(header, timer, var_args) {
    mouseover(this, !!var_args);
    this.G.clear();
    suffixClasses(this.ia, onLine, {
      Sb : this.Sb(header)
    });
    return dispatchEvent();
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} opt_e
   * @return {?}
   */
  c.Ja = function(recurring, opt_e) {
    if (opt_e) {
      return _addClass(this.G, recurring), ret.b.Ja.call(this, recurring, opt_e);
    }
    mouseover(this, recurring, getById("rc-defaultchallenge-incorrect-response", void 0));
    return false;
  };
  /**
   * @return {undefined}
   */
  c.vc = function() {
    if (!targetSplit) {
      if (!sourceSplit) {
        if (!ty) {
          if (this.G.ma()) {
            this.G.a().focus();
          } else {
            setText(this.G);
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.Xa = function() {
    this.response.response = this.G.ma();
    this.G.clear();
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, banner);
  };
  /**
   * @param {?} val
   * @return {undefined}
   */
  var value = function(val) {
    f.call(this, val);
    /** @type {Array} */
    this.ed = [];
    /** @type {Array} */
    this.fd = [];
    /** @type {boolean} */
    this.Yd = false;
  };
  mixin(value, f);
  /**
   * @return {undefined}
   */
  value.prototype.reset = function() {
    /** @type {Array} */
    this.ed = [];
    /** @type {Array} */
    this.fd = [];
    /** @type {boolean} */
    this.Yd = false;
  };
  /**
   * @param {Object} data
   * @param {?} local
   * @param {boolean} collection
   * @return {?}
   */
  value.prototype.Fa = function(data, local, collection) {
    this.reset();
    return f.prototype.Fa.call(this, data, local, collection);
  };
  /**
   * @param {?} self
   * @return {undefined}
   */
  var handleMessage = function(self) {
    if (self.fd.length) {
      if (!self.Yd) {
        /** @type {boolean} */
        self.Yd = true;
        self.dispatchEvent("h");
      }
    }
  };
  /**
   * @param {Date} c
   * @return {?}
   */
  var setupConnection = function(c) {
    var cl = c.fd;
    /** @type {Array} */
    c.fd = [];
    return cl;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var options = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(options, date);
  /**
   * @param {?} name
   * @return {?}
   */
  options.prototype.N = function(name) {
    return define(name, this);
  };
  /**
   * @param {?} keepData
   * @param {?} type
   * @return {?}
   */
  var define = function(keepData, type) {
    var data = require(type, 1);
    var val = require(type, 2);
    if (!(null == val)) {
      if (!isString(val)) {
        if (storeFilesInFileSystem && val instanceof Uint8Array) {
          val = report(val);
        } else {
          isArray(val);
          /** @type {null} */
          val = null;
        }
      }
    }
    data = {
      label : data,
      om : val,
      Mk : require(type, 3),
      rows : require(type, 4),
      cols : require(type, 5),
      pm : require(type, 6),
      yd : require(type, 7)
    };
    if (keepData) {
      data.R = type;
    }
    return data;
  };
  c = options.prototype;
  /**
   * @return {?}
   */
  c.Oe = function() {
    return require(this, 1);
  };
  /**
   * @param {?} opt_attributes
   * @return {undefined}
   */
  c.fe = function(opt_attributes) {
    _log(this, 1, opt_attributes);
  };
  /**
   * @return {?}
   */
  c.Pe = function() {
    return require(this, 3);
  };
  /**
   * @return {?}
   */
  c.ii = function() {
    return require(this, 4);
  };
  /**
   * @return {?}
   */
  c.hi = function() {
    return require(this, 5);
  };
  /**
   * @return {undefined}
   */
  var Velocity = function() {
    value.call(this, "multicaptcha");
    /** @type {number} */
    this.Uc = 0;
    /** @type {Array} */
    this.rc = [];
    /** @type {boolean} */
    this.Nd = false;
    /** @type {Array} */
    this.tc = [];
    /** @type {Array} */
    this.mf = [];
  };
  mixin(Velocity, value);
  /**
   * @return {undefined}
   */
  Velocity.prototype.reset = function() {
    value.prototype.reset.call(this);
    /** @type {number} */
    this.Uc = 0;
    /** @type {Array} */
    this.rc = [];
    /** @type {boolean} */
    this.Nd = false;
    /** @type {Array} */
    this.tc = [];
    /** @type {Array} */
    this.mf = [];
  };
  /**
   * @return {undefined}
   */
  Velocity.prototype.Xa = function() {
    this.response.response = this.tc;
  };
  /**
   * @param {?} i
   * @param {?} id
   * @param {boolean} output
   * @return {?}
   */
  Velocity.prototype.Fa = function(i, id, output) {
    var v = promote(cb(id, base, 5), options, 1)[0];
    if (!id.ka) {
      id.ka = {};
    }
    var attributes = v ? mergeObjects(v) : v;
    id.ka[1] = v;
    _log(id, 1, attributes);
    output = value.prototype.Fa.call(this, i, id, output);
    this.mf = promote(cb(id, base, 5), options, 1);
    this.rc.push(this.Sb(i, "2"));
    flattenTo(this.rc, require(cb(id, base, 5), 2));
    _connect(this, "Ignorer");
    return output;
  };
  /**
   * @param {Array} vec1
   * @param {Array} vec0
   * @return {?}
   */
  Velocity.prototype.Gg = function(vec1, vec0) {
    if (0 == vec1.length) {
      /** @type {boolean} */
      this.Nd = true;
    }
    flattenTo(this.rc, vec1);
    flattenTo(this.mf, vec0);
    if (this.tc.length == this.rc.length + 1 - vec1.length) {
      if (this.Nd) {
        this.dispatchEvent("m");
      } else {
        createForm(this);
      }
    }
    return true;
  };
  /**
   * @param {Object} self
   * @return {undefined}
   */
  var createForm = function(self) {
    addClass(focus(self.B("rc-imageselect-target")), "rc-imageselect-carousel-leaving-left");
    if (!(self.Uc >= self.rc.length)) {
      var failuresLink = self.Ab(self.rc[self.Uc], self.config.w.rowSpan, self.config.w.colSpan);
      self.Uc += 1;
      var p = self.mf[self.Uc];
      compile(self, failuresLink).then(function() {
        var className = getById("rc-imageselect-desc-wrapper", void 0);
        removeEvent(className);
        suffixClasses(className, resolve, {
          label : p.Oe(),
          Vd : "multicaptcha",
          yd : require(p, 7)
        });
      });
      _connect(self, "Ignorer");
      _hasClass(getById("rc-imageselect-carousel-instructions", void 0), "rc-imageselect-carousel-instructions-hidden");
    }
  };
  /**
   * @param {Object} config
   * @param {Node} el
   * @return {?}
   */
  var compile = function(config, el) {
    prepareSandboxFromConfig(config, false);
    var container = isNaN(el.previousElementSibling) ? el.previousElementSibling : skipEmptyTextNodes(el.previousSibling, false);
    addClass(el, "rc-imageselect-carousel-offscreen-right");
    addClass(container, "rc-imageselect-carousel-leaving-left");
    addClass(el, 4 == config.config.w.rowSpan && 4 == config.config.w.rowSpan ? "rc-imageselect-carousel-mock-margin-1" : "rc-imageselect-carousel-mock-margin-2");
    return loadFile(el).then(log(function() {
      process(function() {
        _hasClass(el, "rc-imageselect-carousel-offscreen-right");
        _hasClass(container, "rc-imageselect-carousel-leaving-left");
        addClass(el, "rc-imageselect-carousel-entering-right");
        addClass(container, "rc-imageselect-carousel-offscreen-left");
        process(function() {
          _hasClass(el, "rc-imageselect-carousel-entering-right");
          _hasClass(el, 4 == this.config.w.rowSpan && 4 == this.config.w.rowSpan ? "rc-imageselect-carousel-mock-margin-1" : "rc-imageselect-carousel-mock-margin-2");
          removeChild(container);
          prepareSandboxFromConfig(this, true);
          var codeSegments = this.S.w.Z;
          /** @type {number} */
          codeSegments.gd = 0;
          codeSegments = codeSegments.Db;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            /** @type {boolean} */
            codeSegments[i].selected = false;
            _hasClass(codeSegments[i].element, "rc-imageselect-tileselected");
          }
        }, 600, this);
      }, 100, this);
    }, config));
  };
  /**
   * @param {?} mapper
   * @return {undefined}
   */
  Velocity.prototype.ab = function(mapper) {
    value.prototype.ab.call(this, mapper);
    if (0 < this.S.w.Z.gd) {
      addClass(getById("rc-imageselect-carousel-instructions", void 0), "rc-imageselect-carousel-instructions-hidden");
      if (this.Nd) {
        _connect(this);
      } else {
        _connect(this, "Suivant");
      }
    } else {
      _hasClass(getById("rc-imageselect-carousel-instructions", void 0), "rc-imageselect-carousel-instructions-hidden");
      _connect(this, "Ignorer");
    }
  };
  /**
   * @return {?}
   */
  Velocity.prototype.Za = function() {
    mouseover(this, false);
    this.tc.push([]);
    slice(this.S.w.Z.Db, function(pane, spaceName) {
      if (pane.selected) {
        this.tc[this.tc.length - 1].push(spaceName);
      }
    }, this);
    if (this.Nd) {
      return false;
    }
    if (loop("JS_MC_FETCH")) {
      this.fd = map(this.tc);
      handleMessage(this);
    } else {
      this.Gg([], []);
    }
    createForm(this);
    return true;
  };
  /**
   * @return {undefined}
   */
  var lodash = function() {
    value.call(this, "dynamic");
    this.If = {};
    /** @type {number} */
    this.Dd = 0;
  };
  mixin(lodash, value);
  /**
   * @return {undefined}
   */
  lodash.prototype.reset = function() {
    value.prototype.reset.call(this);
    this.If = {};
    /** @type {number} */
    this.Dd = 0;
  };
  /**
   * @param {(Array|string)} e
   * @param {?} name
   * @param {boolean} parent
   * @return {?}
   */
  lodash.prototype.Fa = function(e, name, parent) {
    e = value.prototype.Fa.call(this, e, name, parent);
    this.Dd = require(cb(name, rows, 3), 2) || 0;
    return e;
  };
  /**
   * @param {Array} strings
   * @return {?}
   */
  lodash.prototype.Gg = function(strings) {
    var _this = {};
    var stream = lookupIterator(pluck(this));
    var recurring = stream.next();
    for (;!recurring.done;_this = {
      Se : _this.Se,
      kb : _this.kb,
      Mg : _this.Mg
    }, recurring = stream.next()) {
      recurring = recurring.value;
      if (0 == strings.length) {
        return false;
      }
      this.ed.push(recurring);
      var x = animate(this, this.config.w.rowSpan, this.config.w.colSpan);
      iterator(x, {
        Zi : 0,
        pg : 0,
        rowSpan : 1,
        colSpan : 1,
        ff : strings.shift()
      });
      _this.Mg = replaceWith(x);
      _this.Se = this.If[recurring] || recurring;
      _this.kb = {
        selected : true,
        element : this.S.w.Z.Db[_this.Se].element
      };
      recurring = this.S.w.Z.Db.length;
      this.S.w.Z.Db.push(_this.kb);
      process(log(function(_this) {
        return function(timeoutKey) {
          this.If[timeoutKey] = _this.Se;
          removeEvent(_this.kb.element);
          _this.kb.element.appendChild(_this.Mg);
          goMix(_this.kb);
          /** @type {boolean} */
          _this.kb.selected = false;
          _hasClass(_this.kb.element, "rc-imageselect-dynamic-selected");
          fire(this).listen(new touchstart(_this.kb.element), "action", bind(this.ab, _this.kb));
        };
      }(_this), this, recurring), this.Dd + 1E3);
    }
    return true;
  };
  /**
   * @param {Object} filter
   * @return {undefined}
   */
  var goMix = function(filter) {
    css(getById("rc-image-tile-overlay", filter.element), {
      opacity : "0.5",
      display : "block",
      top : "0px"
    });
    process(function() {
      css(getById("rc-image-tile-overlay", filter.element), "opacity", "0");
    }, 100);
  };
  /**
   * @return {undefined}
   */
  lodash.prototype.Xa = function() {
    this.response.response = this.ed;
  };
  /**
   * @return {?}
   */
  lodash.prototype.Za = function() {
    if (!value.prototype.Za.call(this)) {
      if (!this.Yd) {
        var iterator = lookupIterator(this.ed);
        var item = iterator.next();
        for (;!item.done;item = iterator.next()) {
          var data = this.If;
          if (null !== data && item.value in data) {
            return false;
          }
        }
      }
      mouseover(this, true, getById("rc-imageselect-error-dynamic-more", void 0));
    }
    return true;
  };
  /**
   * @param {Object} self
   * @return {undefined}
   */
  lodash.prototype.ab = function(self) {
    if (-1 == isUndefined(this.ed, isUndefined(this.S.w.Z.Db, self))) {
      mouseover(this, false);
      if (!self.selected) {
        ++this.S.w.Z.gd;
        /** @type {boolean} */
        self.selected = true;
        if (this.Dd) {
          css(self.element, "transition", "opacity " + (this.Dd + 1E3) / 1E3 + "s ease");
        }
        addClass(self.element, "rc-imageselect-dynamic-selected");
        flattenTo(this.fd, isUndefined(this.S.w.Z.Db, self));
        handleMessage(this);
      }
    }
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var pluck = function(obj) {
    /** @type {Array} */
    var ret = [];
    slice(obj.S.w.Z.Db, function(pane, extra) {
      if (pane.selected) {
        if (-1 == isUndefined(this.ed, extra)) {
          ret.push(extra);
        }
      }
    }, obj);
    return ret;
  };
  /**
   * @return {?}
   */
  var auth = function() {
    /** @type {string} */
    var e = "" + ('<div id="rc-coref"><span class="rc-coref-tabloop-begin" tabIndex="0"></span><div class="rc-coref-select-more" style="display:none" tabindex="0">Veuillez r\u00e9pondre pour continuer</div><div class="rc-coref-verify-failed" style="display:none" tabindex="0">Veuillez r\u00e9essayer</div><div class="rc-coref-payload"></div>' + reject(authenticate()) + '<span class="rc-coref-tabloop-end" tabIndex="0"></span></div>');
    return callback(e);
  };
  /**
   * @param {Array} results
   * @return {?}
   */
  var handler = function(results) {
    /** @type {string} */
    var stderr = "";
    var l = results.Rh.length;
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      /** @type {string} */
      var data = "\u00c9coutez le texte et cochez toutes les cases faisant r\u00e9f\u00e9rence \u00e0\u00a0: " + reject(results.xh[i]);
      /** @type {string} */
      stderr = stderr + ('<div tabIndex="0" class="rc-coref-first">' + data + '</div><div class="rc-coref-sentence"><div tabindex="0">...');
      data = results.Rh[i];
      var i_max = data.length;
      /** @type {number} */
      var uid = 0;
      for (;uid < i_max;uid++) {
        var attrs = data[uid];
        /** @type {string} */
        stderr = stderr + reject(attrs[0]);
        if (attrs[1]) {
          /** @type {string} */
          var html = 'Cochez la case si "' + (escape(attrs[0]) + ('" fait r\u00e9f\u00e9rence \u00e0 "' + (escape(results.xh[i]) + '"')));
          /** @type {string} */
          stderr = stderr + ("</div><input " + (-1 != ("" + results.xh[i]).indexOf("" + attrs[0]) ? " checked disabled " : "") + ' class="rc-coref-checkbox" type="checkbox" aria-label=\'' + String(html).replace(r20, boundary) + '\'></input><div tabindex="0">');
        }
      }
      stderr += "...</div></div>";
    }
    /** @type {string} */
    stderr = '<div class="rc-coref-challenge"><div id="rc-coref-target" class="rc-coref-target" dir="ltr">' + callback(stderr) + '</div></div><div class="rc-coref-attribution">';
    results = results.uh;
    l = results.length;
    /** @type {number} */
    i = 0;
    for (;i < l;i++) {
      stderr += '<a target="_blank" href="' + escape(complete(results[i])) + '">source</a> ';
    }
    return callback(stderr + "(CC BY-SA)</div>");
  };
  /**
   * @return {?}
   */
  var oldtitle = function() {
    return callback('Certains des mots utilis\u00e9s dans les phrases font r\u00e9f\u00e9rence \u00e0 une ou plusieurs personnes. S\u00e9lectionnez ceux qui correspondent \u00e0 l\'invite. <a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>');
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var count = function(_super) {
    __extends(this, _super, 0, failuresLink);
  };
  equal(count, date);
  /** @type {Array} */
  var failuresLink = [1];
  /**
   * @param {?} walkers
   * @return {?}
   */
  count.prototype.N = function(walkers) {
    return isNumeric(walkers, this);
  };
  /**
   * @param {?} obj
   * @param {?} str
   * @return {?}
   */
  var isNumeric = function(obj, str) {
    var p = {
      Gj : camelCase(str.Nc(), i, obj)
    };
    if (obj) {
      p.R = str;
    }
    return p;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var from = function(_super) {
    __extends(this, _super, 0, progressContexts);
  };
  equal(from, date);
  /** @type {Array} */
  var progressContexts = [1];
  /**
   * @param {?} key
   * @return {?}
   */
  from.prototype.N = function(key) {
    return i(key, this);
  };
  /**
   * @param {?} obj
   * @param {?} p
   * @return {?}
   */
  var i = function(obj, p) {
    var pair = {
      Im : camelCase(getChildren(p), startup, obj),
      Dm : require(p, 2)
    };
    if (obj) {
      pair.R = p;
    }
    return pair;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var newState = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(newState, date);
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  newState.prototype.N = function(deepDataAndEvents) {
    return startup(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} p
   * @return {?}
   */
  var startup = function(deepDataAndEvents, p) {
    var item = {
      text : require(p, 1),
      Am : require(p, 2),
      Sl : require(p, 3),
      zm : require(p, 4)
    };
    if (deepDataAndEvents) {
      item.R = p;
    }
    return item;
  };
  /**
   * @param {?} parent
   * @return {?}
   */
  var getChildren = function(parent) {
    return promote(parent, newState, 1);
  };
  /**
   * @return {?}
   */
  count.prototype.Nc = function() {
    return promote(this, from, 1);
  };
  var entry = new clone(350, 410);
  /**
   * @return {undefined}
   */
  var impl = function() {
    data.call(this, entry.width, entry.height, "coref", true);
    /** @type {null} */
    this.ia = this.oa = null;
  };
  mixin(impl, data);
  c = impl.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    data.prototype.C.call(this);
    this.j = createElement(auth);
    this.L(this.a());
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  c.L = function(e) {
    data.prototype.L.call(this, e);
    this.ia = this.B("rc-coref-payload");
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    data.prototype.D.call(this);
    fire(this).listen(this.B("rc-coref-tabloop-begin"), "focus", function() {
      getTarget();
    }).listen(this.B("rc-coref-tabloop-end"), "focus", function() {
      getTarget(["rc-coref-select-more", "rc-coref-verify-failed", "rc-coref-instructions"]);
    });
  };
  /**
   * @return {undefined}
   */
  c.vc = function() {
    this.Ne("rc-coref-first")[0].focus();
  };
  /**
   * @param {Object} data
   * @param {?} prop
   * @param {boolean} var_args
   * @return {?}
   */
  c.Fa = function(data, prop, var_args) {
    this.oa = cb(prop, count, 6);
    suffixClasses(this.ia, handler, {
      Rh : parseArgs(this.oa.Nc()),
      xh : getFiles(this.oa.Nc()),
      uh : recurse(this.oa.Nc())
    });
    mouseover(this, false);
    eq(this, log(function() {
      loaded(this, this.X());
      if (var_args) {
        mouseover(this, true, this.B("rc-coref-verify-failed"));
      }
    }, this));
    return dispatchEvent();
  };
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  var parseArgs = function(codeSegments) {
    /** @type {Array} */
    var args = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {boolean} */
      var type = false;
      /** @type {number} */
      var a = 0;
      var index = getChildren(codeSegments[i]).length;
      args.push([]);
      /** @type {number} */
      var d = 0;
      for (;d < getChildren(codeSegments[i]).length;d++) {
        /** @type {boolean} */
        var fx = 0 != require(getChildren(codeSegments[i])[d], 4) && (d == getChildren(codeSegments[i]).length - 1 || 0 == require(getChildren(codeSegments[i])[d + 1], 4));
        /** @type {boolean} */
        type = type || fx;
        var ret = require(getChildren(codeSegments[i])[d], 1);
        if (0 != require(getChildren(codeSegments[i])[d], 3)) {
          /** @type {string} */
          ret = " " + ret;
        }
        args[args.length - 1].push([ret, fx]);
        if (fx) {
          index = getChildren(codeSegments[i]).length;
        }
        if ("." == require(getChildren(codeSegments[i])[d], 1)) {
          if (type) {
            /** @type {number} */
            index = d;
            /** @type {boolean} */
            type = false;
          } else {
            if (0 == a) {
              /** @type {number} */
              a = d + 1;
            }
          }
        }
      }
      args[args.length - 1] = args[args.length - 1].slice(a, index);
    }
    return args;
  };
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  var getFiles = function(codeSegments) {
    /** @type {Array} */
    var out = [];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {boolean} */
      var d = false;
      /** @type {number} */
      var number = 0;
      for (;number < getChildren(codeSegments[i]).length;number++) {
        if (2 == require(getChildren(codeSegments[i])[number], 4)) {
          /** @type {string} */
          var copies = " " + require(getChildren(codeSegments[i])[number], 1);
          if (d) {
            out[out.length - 1] += copies;
          } else {
            out.push(copies);
            /** @type {boolean} */
            d = true;
          }
        } else {
          if (d) {
            break;
          }
        }
      }
    }
    return out;
  };
  /**
   * @param {Array} ignore
   * @return {?}
   */
  var recurse = function(ignore) {
    return ignore.map(function(p) {
      return require(p, 2);
    });
  };
  c = impl.prototype;
  /**
   * @return {?}
   */
  c.X = function() {
    var innerSize = this.ya || screenSize();
    var r = position(this.ia);
    return new clone(Math.max(Math.min(innerSize.width - 10, entry.width), 280), r.height + 60);
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} speed
   * @return {?}
   */
  c.Ja = function(recurring, speed) {
    /** @type {Array} */
    var ok = ["rc-coref-select-more", "rc-coref-verify-failed"];
    if (!(!recurring && speed)) {
      slice(ok, function(def) {
        def = this.B(def);
        if (def != speed) {
          mouseover(this, false, def);
        }
      }, this);
    }
    return speed ? data.prototype.Ja.call(this, recurring, speed) : false;
  };
  /**
   * @return {undefined}
   */
  c.Xa = function() {
    /** @type {Array} */
    var response = [];
    slice(this.Ne("rc-coref-checkbox"), function(radio, file) {
      if (radio.checked) {
        response.push(file);
      }
    });
    /** @type {Array} */
    this.response.response = response;
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    return false;
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, oldtitle);
  };
  /**
   * @return {?}
   */
  var pdataCur = function() {
    /** @type {string} */
    var e = "" + ('<div id="rc-prepositional"><span class="rc-prepositional-tabloop-begin" tabIndex="0"></span><div class="rc-prepositional-select-more" style="display:none" tabindex="0">Veuillez r\u00e9pondre pour continuer</div><div class="rc-prepositional-verify-failed" style="display:none" tabindex="0">Veuillez r\u00e9essayer</div><div class="rc-prepositional-payload"></div>' + reject(authenticate()) + '<span class="rc-prepositional-tabloop-end" tabIndex="0"></span></div>');
    return callback(e);
  };
  /**
   * @param {Object} format
   * @return {?}
   */
  var fn = function(format) {
    /** @type {string} */
    var currTime = '<div class="rc-prepositional-challenge"><div id="rc-prepositional-target" class="rc-prepositional-target" dir="ltr"><div tabIndex="0" class="rc-prepositional-instructions"></div><table class="rc-prepositional-table" role="region">';
    var valuesLen = format.text.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      currTime += '<tr role="presentation"><td role="checkbox" tabIndex="0">' + reject(format.text[i]) + "</td></tr>";
    }
    return callback(currTime + "</table></div></div>");
  };
  /**
   * @param {Array} template
   * @return {?}
   */
  var open = function(template) {
    /** @type {string} */
    var currTime = '<div class="rc-prepositional-attribution">Sources\u00a0: ';
    template = template.uh;
    var len = template.length;
    /** @type {number} */
    var i = 0;
    for (;i < len;i++) {
      currTime += '<a target="_blank" href="' + escape(complete(template[i])) + '">' + reject(i + 1) + "</a>" + (i != len - 1 ? "," : "") + " ";
    }
    return callback(currTime + '(CC BY-SA)</div>Indiquez si chaque expression ci-dessus vous semble incorrecte. Ne s\u00e9lectionnez pas celles qui comportent des erreurs grammaticales ou qui semblent n\'avoir aucun sens sans contexte. <a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>');
  };
  var response = new clone(350, 410);
  /**
   * @return {undefined}
   */
  var child = function() {
    data.call(this, response.width, response.height, "prepositional", true);
    /** @type {null} */
    this.ia = this.oa = null;
    /** @type {Array} */
    this.Ia = [];
    /** @type {null} */
    this.Bh = null;
    /** @type {number} */
    this.Di = 0;
  };
  mixin(child, data);
  c = child.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    data.prototype.C.call(this);
    this.j = createElement(pdataCur);
    this.L(this.a());
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  c.L = function(e) {
    data.prototype.L.call(this, e);
    this.ia = this.B("rc-prepositional-payload");
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    data.prototype.D.call(this);
    fire(this).listen(this.B("rc-prepositional-tabloop-begin"), "focus", function() {
      getTarget();
    }).listen(this.B("rc-prepositional-tabloop-end"), "focus", function() {
      getTarget(["rc-prepositional-select-more", "rc-prepositional-verify-failed", "rc-prepositional-instructions"]);
    });
  };
  /**
   * @return {undefined}
   */
  c.vc = function() {
    this.B("rc-prepositional-instructions").focus();
  };
  /**
   * @param {Node} child
   * @param {?} value
   * @param {boolean} var_args
   * @return {?}
   */
  c.Fa = function(child, value, var_args) {
    /** @type {Array} */
    this.Ia = [];
    this.oa = cb(value, cache, 7);
    if (child = cb(value, options, 1)) {
      if (child.Pe()) {
        this.Di = child.Pe();
      }
    }
    suffixClasses(this.ia, fn, {
      text : require(this.oa, 1)
    });
    child = getById("rc-prepositional-instructions", void 0);
    /** @type {boolean} */
    this.Bh = 0.5 > Math.random();
    walk(child, this.Bh ? "S\u00e9lectionnez les expressions dont la formulation est incorrecte\u00a0:" : "S\u00e9lectionnez les expressions qui vous semblent incorrectes\u00a0:");
    mouseover(this, false);
    eq(this, log(function() {
      loaded(this, this.X());
      this.Ab();
      if (var_args) {
        mouseover(this, true, this.B("rc-prepositional-verify-failed"));
      }
    }, this));
    return dispatchEvent();
  };
  /**
   * @return {undefined}
   */
  c.Ab = function() {
    /** @type {Array} */
    var eventPath = [];
    slice(remove(document, "td", null, getById("rc-prepositional-target", void 0)), function(elem, idx) {
      this.Ia.push(idx);
      var recurring = {
        selected : false,
        element : elem,
        index : idx
      };
      eventPath.push(recurring);
      fire(this).listen(new touchstart(elem), "action", log(this.ab, this, recurring));
      removeClass(elem, "checked", "false");
    }, this);
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  c.ab = function(e) {
    mouseover(this, false);
    /** @type {boolean} */
    var state = !e.selected;
    if (state) {
      addClass(e.element, "rc-prepositional-selected");
      fetch(this.Ia, e.index);
    } else {
      _hasClass(e.element, "rc-prepositional-selected");
      this.Ia.push(e.index);
    }
    /** @type {boolean} */
    e.selected = state;
    removeClass(e.element, "checked", e.selected ? "true" : "false");
  };
  /**
   * @return {?}
   */
  c.X = function() {
    var innerSize = this.ya || screenSize();
    var r = position(this.ia);
    return new clone(Math.max(Math.min(innerSize.width - 10, response.width), 280), r.height + 60);
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} speed
   * @return {?}
   */
  c.Ja = function(recurring, speed) {
    /** @type {Array} */
    var ok = ["rc-prepositional-select-more", "rc-prepositional-verify-failed"];
    if (!(!recurring && speed)) {
      slice(ok, function(def) {
        def = this.B(def);
        if (def != speed) {
          mouseover(this, false, def);
        }
      }, this);
    }
    return speed ? data.prototype.Ja.call(this, recurring, speed) : false;
  };
  /**
   * @return {undefined}
   */
  c.Xa = function() {
    this.response.response = this.Ia;
    /** @type {string} */
    this.response.plugin = this.Bh ? "if" : "si";
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    return require(this.oa, 1).length - this.Ia.length < this.Di ? (mouseover(this, true, this.B("rc-prepositional-select-more")), true) : false;
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, open, {
      uh : require(this.oa, 2)
    });
  };
  /**
   * @return {?}
   */
  var bytenew = function() {
    return callback(reject(authenticate()));
  };
  /**
   * @return {undefined}
   */
  var one = function() {
    data.call(this, 0, 0, "nocaptcha");
  };
  equal(one, data);
  /**
   * @return {undefined}
   */
  one.prototype.C = function() {
    one.b.C.call(this);
    this.j = createElement(bytenew);
    this.L(this.a());
  };
  /**
   * @return {undefined}
   */
  one.prototype.Mi = function() {
    this.He();
  };
  /**
   * @return {?}
   */
  one.prototype.Fa = function() {
    return dispatchEvent();
  };
  /**
   * @return {undefined}
   */
  one.prototype.Xa = function() {
    /** @type {string} */
    this.response.response = "";
  };
  /**
   * @return {?}
   */
  var progress = function() {
    /** @type {string} */
    var e = "" + ('<div id="rc-text"><span class="rc-text-tabloop-begin" tabIndex="0"></span><div class="rc-text-select-more" style="display:none" tabindex="0">Veuillez s\u00e9lectionner toutes les options correspondantes.</div><div class="rc-text-select-fewer" style="display:none" tabindex="0">Veuillez ne s\u00e9lectionner que les options correspondantes. Si vous avez un doute, cliquez sur le bouton d\'actualisation disponible sous le test.</div><div class="rc-text-verify-failed" style="display:none" tabindex="0">Veuillez effectuer d\'autres tests (vous devez fournir plusieurs solutions correctes).</div><div class="rc-text-payload"></div>' + 
    reject(authenticate()) + '<span class="rc-text-tabloop-end" tabIndex="0"></span></div>');
    return callback(e);
  };
  /**
   * @param {(number|string)} value
   * @return {?}
   */
  var execute = function(value) {
    /** @type {string} */
    var sum = '<div class="rc-text-instructions"><div class="rc-text-desc-wrapper" tabIndex="0">Veuillez s\u00e9lectionner les expressions qui correspondent le mieux \u00e0 la cat\u00e9gorie\u00a0:<span>' + reject(value.hj) + '</span><div class="rc-text-clear"></div></div></div><div class="rc-text-challenge"><div id="rc-text-target" class="rc-text-target" dir="ltr">';
    /** @type {number} */
    var d = 10 > value.mg.length ? 1 : 2;
    /** @type {number} */
    var y = value.mg.length / d;
    /** @type {string} */
    var currTime = '<table class="rc-text-choices" role="region">';
    /** @type {number} */
    var x = 0;
    for (;x < y;x++) {
      currTime += '<tr role="presentation">';
      /** @type {number} */
      var b = d;
      /** @type {number} */
      var a = 0;
      for (;a < b;a++) {
        currTime += '<td role="checkbox" tabIndex="0">' + reject(value.mg[a + x * d]) + "</td>";
      }
      currTime += "</tr>";
    }
    value = callback(currTime + "</table>");
    return callback("" + (sum + value + "</div></div>"));
  };
  /**
   * @return {?}
   */
  var oid = function() {
    return callback('S\u00e9lectionnez chaque option associ\u00e9e \u00e0 la cat\u00e9gorie donn\u00e9e. Ensuite, validez votre choix. Actualisez le test si vous souhaitez en g\u00e9n\u00e9rer un nouveau ou si les instructions ne sont pas claires. <a href="https://support.google.com/recaptcha" target="_blank">En savoir plus</a>');
  };
  /**
   * @return {undefined}
   */
  var e = function() {
    data.call(this, input.width, input.height, "text", true);
    /** @type {null} */
    this.oa = null;
    /** @type {Array} */
    this.Ia = [];
    /** @type {null} */
    this.ia = null;
  };
  equal(e, data);
  var input = new clone(350, 410);
  c = e.prototype;
  /**
   * @return {undefined}
   */
  c.C = function() {
    e.b.C.call(this);
    this.j = createElement(progress);
    this.L(this.a());
  };
  /**
   * @param {string} d
   * @return {undefined}
   */
  c.L = function(d) {
    e.b.L.call(this, d);
    this.ia = this.B("rc-text-payload");
  };
  /**
   * @return {undefined}
   */
  c.D = function() {
    e.b.D.call(this);
    fire(this).listen(getById("rc-text-tabloop-begin"), "focus", function() {
      getTarget();
    }).listen(getById("rc-text-tabloop-end"), "focus", function() {
      getTarget(["rc-text-select-more", "rc-text-select-fewer", "rc-text-verify-failed", "rc-text-instructions"]);
    });
  };
  /**
   * @param {Object} data
   * @param {?} prop
   * @param {boolean} var_args
   * @return {?}
   */
  c.Fa = function(data, prop, var_args) {
    /** @type {Array} */
    this.Ia = [];
    this.oa = cb(prop, files, 4);
    suffixClasses(this.ia, execute, {
      hj : require(this.oa, 2),
      mg : require(this.oa, 3)
    });
    mouseover(this, false);
    eq(this, log(function() {
      loaded(this, this.X());
      this.Ab();
      if (var_args) {
        mouseover(this, true, getById("rc-text-verify-failed", void 0));
      }
    }, this));
    return dispatchEvent();
  };
  /**
   * @return {undefined}
   */
  c.Ab = function() {
    /** @type {Array} */
    var eventPath = [];
    slice(remove(document, "td", null, getById("rc-text-target", void 0)), function(elem, idx) {
      var recurring = {
        selected : false,
        element : elem,
        index : idx
      };
      eventPath.push(recurring);
      fire(this).listen(new touchstart(elem), "action", log(this.ab, this, recurring));
      removeClass(elem, "checked", "false");
    }, this);
  };
  /**
   * @return {?}
   */
  c.X = function() {
    var innerSize = this.ya || screenSize();
    var r = position(this.ia);
    return new clone(Math.max(Math.min(innerSize.width - 10, input.width), 280), r.height + 60);
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  c.ab = function(e) {
    mouseover(this, false);
    /** @type {boolean} */
    var state = !e.selected;
    if (state) {
      addClass(e.element, "rc-text-choice-selected");
      this.Ia.push(e.index);
    } else {
      _hasClass(e.element, "rc-text-choice-selected");
      fetch(this.Ia, e.index);
    }
    /** @type {boolean} */
    e.selected = state;
    removeClass(e.element, "checked", e.selected ? "true" : "false");
  };
  /**
   * @return {?}
   */
  c.Za = function() {
    return this.Ia.length < require(this.oa, 4) ? (mouseover(this, true, getById("rc-text-select-more", void 0)), true) : require(this.oa, 5) && this.Ia.length > require(this.oa, 5) ? (mouseover(this, true, getById("rc-text-select-fewer", void 0)), true) : false;
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} speed
   * @return {?}
   */
  c.Ja = function(recurring, speed) {
    /** @type {Array} */
    var ok = ["rc-text-select-more", "rc-text-select-fewer", "rc-text-verify-failed"];
    if (!(!recurring && speed)) {
      slice(ok, function(datum) {
        datum = getById(datum, void 0);
        if (datum != speed) {
          mouseover(this, false, datum);
        }
      }, this);
    }
    return speed ? e.b.Ja.call(this, recurring, speed) : false;
  };
  /**
   * @return {undefined}
   */
  c.vc = function() {
    if (!rgb(["rc-text-select-more", "rc-text-select-fewer", "rc-text-verify-failed"], function(elem) {
      return isVisible(getById(elem, void 0)) ? (getById(elem, void 0).focus(), true) : false;
    }, this)) {
      select(getById("rc-text-instructions", void 0)).focus();
    }
  };
  /**
   * @return {undefined}
   */
  c.Xa = function() {
    this.response.response = this.Ia;
  };
  /**
   * @param {?} className
   * @return {undefined}
   */
  c.Vb = function(className) {
    suffixClasses(className, oid);
  };
  /**
   * @param {?} selector
   * @return {?}
   */
  var _next = function(selector) {
    switch(selector) {
      case "default":
        return new ret;
      case "nocaptcha":
        return new one;
      case "imageselect":
        return new f;
      case "tileselect":
        return new f("tileselect");
      case "dynamic":
        return new lodash;
      case "audio":
        return new Sound;
      case "text":
        return new e;
      case "multicaptcha":
        return new Velocity;
      case "canvas":
        return new Overlay;
      case "coref":
        return new impl;
      case "prepositional":
        return new child;
    }
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var setMessage = function(obj) {
    return callback('<textarea id="' + escape(obj.id) + '" name="' + escape(obj.name) + '" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none; ' + (obj.display ? "" : " display: none; ") + '"></textarea>');
  };
  /**
   * @param {?} w
   * @return {?}
   */
  var evaluate = function(w) {
    return callback('<div style="background-color: #fff; border: 1px solid #ccc; box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); position: absolute; left: ' + escape(val(w.left)) + "px; top: " + escape(val(w.top)) + 'px; transition: visibility 0s linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: #fff; opacity: 0.05;  filter: alpha(opacity=5)"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0; height: 0; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0; height: 0; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"></div></div>');
  };
  /**
   * @param {?} animation
   * @return {?}
   */
  var navigate = function(animation) {
    return callback('<div style="visibility: hidden; position: absolute; width:100%; top: ' + escape(val(animation.top)) + 'px; left: 0px; right: 0px; transition: visibility 0s linear 0.3s, opacity 0.3s linear; opacity: 0;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: #fff; opacity: 0.5;  filter: alpha(opacity=50)"></div><div style="margin: 0 auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid #ccc; z-index: 2000000000; background-color: #fff; overflow: hidden;"></div></div>');
  };
  /**
   * @param {?} a
   * @return {?}
   */
  var activeClassName = function(a) {
    return callback("<div><div></div>" + reject(setMessage({
      id : a.Zd,
      name : a.$d,
      display : false
    })) + "</div>");
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var onreadystatechange = function(data) {
    return callback('<div style="width: ' + escape(val(data.width)) + "; height: " + escape(val(data.height)) + '; position: relative;"><div style="width: ' + escape(val(data.width)) + "; height: " + escape(val(data.height)) + '; position: absolute;"><iframe src="' + escape(complete(data.Ti)) + '" frameborder="0" scrolling="no" style="width: ' + escape(val(data.width)) + "; height: " + escape(val(data.height)) + '; border-style: none;"></iframe></div></div><div style="border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px; height: 60px; width: 300px;">' + 
    reject(setMessage({
      id : data.Zd,
      name : data.$d,
      display : true
    })) + "</div>");
  };
  /**
   * @param {?} a
   * @return {?}
   */
  var post = function(a) {
    return callback('<div class="grecaptcha-badge"><div class="grecaptcha-logo"></div><div class="grecaptcha-error"></div>' + reject(setMessage({
      id : a.Zd,
      name : a.$d,
      display : false
    })) + "</div>");
  };
  /**
   * @return {?}
   */
  var ul = function() {
    return callback('<noscript>Pour g\u00e9n\u00e9rer un test reCAPTCHA, veuillez activer JavaScript.<br></noscript><div class="if-js-enabled">Pour g\u00e9n\u00e9rer un test reCAPTCHA, veuillez utiliser un <a href="https://support.google.com/recaptcha/?hl=en#6223828">navigateur compatible</a>.</div><br>En revanche, si vous pensez que cette page s\'est affich\u00e9e par erreur, veuillez v\u00e9rifier votre connexion Internet, puis actualisez la page.<br><br><a href="https://support.google.com/recaptcha#6262736" target="_blank">Qu\'est-ce qui se passe\u00a0?</a>');
  };
  /**
   * @param {Object} error
   * @return {?}
   */
  var filter = function(error) {
    /** @type {string} */
    var currTime = '<div class="grecaptcha-user-facing-error" style="color: #AF0000; padding: 16px; font-size: 10px; font-family: Roboto,helvetica,arial,sans-serif; line-height: 14px">';
    error = error.errorCode;
    switch(replace(error) ? error.toString() : error) {
      case 3:
        currTime += "ERREUR pour le propri\u00e9taire du site\u00a0: La cl\u00e9 enregistr\u00e9e ne fonctionne pas avec cette interface.";
        break;
      case 4:
        currTime += "Impossible d'\u00e9tablir une connexion avec le service reCAPTCHA. Veuillez v\u00e9rifier votre connexion Internet, puis actualisez la page.";
        break;
      case 5:
        currTime += "L'h\u00f4te local ne figure pas dans la liste des domaines valides pour la cl\u00e9 de ce site.";
        break;
      case 6:
        currTime += "ERREUR pour le propri\u00e9taire du site\u00a0: Domaine non valide pour la cl\u00e9 de site";
        break;
      case 7:
        currTime += "ERREUR pour le propri\u00e9taire du site\u00a0: Cl\u00e9 de site non valide";
        break;
      default:
        currTime += "Impossible d'initialiser le service reCAPTCHA. Veuillez v\u00e9rifier votre connexion Internet, puis actualisez la page.";
    }
    return callback(currTime + "</div>");
  };
  /**
   * @param {?} component
   * @return {undefined}
   */
  var test = function(component) {
    this.De = component;
    /** @type {null} */
    this.type = this.yc = this.ea = this.td = this.Ka = null;
    /** @type {number} */
    this.Zg = random();
    /** @type {null} */
    this.Gi = this.Ac = null;
    this.P = new expected(this);
    set(this, this.P);
  };
  equal(test, props);
  var params = {
    normal : new clone(304, 78),
    compact : new clone(164, 144),
    invisible : new clone(256, 60)
  };
  /**
   * @param {?} draggable
   * @param {boolean} e
   * @return {?}
   */
  var onDragStart = function(draggable, e) {
    var x = e ? draggable.yc.left - 10 : draggable.yc.left + draggable.yc.width + 10;
    return scroll(draggable.ji()).translate(x, draggable.yc.top + 0.5 * draggable.yc.height);
  };
  /**
   * @return {?}
   */
  test.prototype.wb = function() {
    return new clone(Math.max(getWindowSize(window).width, offset().innerWidth || 0), Math.max(getWindowSize(window).height, offset().innerHeight || 0));
  };
  /**
   * @param {?} x
   * @param {string} name
   * @return {?}
   */
  var template = function(x, name) {
    iterator(x, {
      frameborder : "0",
      scrolling : "no",
      name : name
    });
    return _indexOf("IFRAME", x);
  };
  /**
   * @param {?} w
   * @param {Object} element
   * @param {string} event
   * @param {string} readBuffer
   * @param {string} b
   * @param {Element} h
   * @return {?}
   */
  var onResize = function(w, element, event, readBuffer, b, h) {
    h = params[h];
    element = createElement(element, {
      Zd : readBuffer,
      $d : "g-recaptcha-response"
    });
    redraw(element, h);
    w.De.appendChild(element);
    w.Ka = template({
      src : event,
      title : "widget recaptcha",
      tabindex : b,
      width : "" + h.width,
      height : "" + h.height
    });
    select(element).appendChild(w.Ka);
    return element;
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  test.prototype.Xd = function(type) {
    this.type = type || "fullscreen";
    this.ea = createElement("fullscreen" == this.type ? navigate : evaluate, {
      left : 0,
      top : -1E4
    });
    document.body.appendChild(this.ea);
  };
  /**
   * @param {Object} config
   * @param {Element} context
   * @param {string} path
   * @param {string} user
   * @return {undefined}
   */
  var show = function(config, context, path, user) {
    config.yc = user || new Rectangle(0, 0, 0, 0);
    /** @type {string} */
    context.style = "width: 100%; height: 100%;";
    /** @type {string} */
    context.src = getBase(context.src) + (path ? "#" + path : "");
    context = template(context, path);
    if (!config.ea) {
      config.Xd();
    }
    /** @type {Element} */
    config.td = context;
    focus(config.ea).appendChild(context);
    if ("bubble" == config.type) {
      config.P.listen(offset(), ["scroll", "resize"], log(function() {
        this.ij();
      }, config));
    }
  };
  /**
   * @param {boolean} event
   * @param {?} walkers
   * @return {undefined}
   */
  test.prototype.Ab = function(event, walkers) {
    hide(this, event, walkers);
    if (event) {
      resize(this);
      this.td.focus();
    } else {
      this.Ka.focus();
    }
    /** @type {number} */
    this.Zg = random();
  };
  /**
   * @param {Object} self
   * @param {boolean} show
   * @param {?} obj
   * @return {undefined}
   */
  var hide = function(self, show, obj) {
    /** @type {boolean} */
    var visibilityChanged = "visible" == setStyle(self.ea, "visibility");
    css(self.ea, {
      visibility : show ? "visible" : "hidden",
      opacity : show ? "1" : "0",
      transition : show ? "visibility 0s linear 0s, opacity 0.3s linear" : "visibility 0s linear 0.3s, opacity 0.3s linear"
    });
    if (visibilityChanged && !show) {
      self.Gi = process(function() {
        css(this.ea, "top", "-10000px");
      }, 500, self);
    } else {
      if (show) {
        blur(self.Gi);
        css(self.ea, "top", "0px");
      }
    }
    if (obj) {
      redraw(focus(self.ea), obj.width, obj.height);
    }
  };
  /**
   * @return {undefined}
   */
  test.prototype.ij = function() {
    if (25 < random() - this.Zg) {
      resize(this);
      /** @type {number} */
      this.Zg = random();
    } else {
      blur(this.Ac);
      this.Ac = process(this.ij, 25, this);
    }
  };
  /**
   * @param {?} self
   * @return {undefined}
   */
  var resize = function(self) {
    if ("visible" == setStyle(self.ea, "visibility")) {
      var opts = position(focus(self.ea));
      /** @type {Window} */
      var target = window;
      /** @type {Document} */
      var doc = target.document;
      /** @type {number} */
      var e = 0;
      if (doc) {
        /** @type {(HTMLBodyElement|null)} */
        e = doc.body;
        /** @type {Element} */
        var t = doc.documentElement;
        if (t && e) {
          if (target = getWindowSize(target).height, has(doc) && t.scrollHeight) {
            e = t.scrollHeight != target ? t.scrollHeight : t.offsetHeight;
          } else {
            /** @type {number} */
            doc = t.scrollHeight;
            var w = t.offsetHeight;
            if (t.clientHeight != w) {
              /** @type {number} */
              doc = e.scrollHeight;
              /** @type {number} */
              w = e.offsetHeight;
            }
            e = doc > target ? doc > w ? doc : w : doc < w ? doc : w;
          }
        } else {
          /** @type {number} */
          e = 0;
        }
      }
      /** @type {number} */
      t = Math.max(e, self.wb().height);
      e = onDragStart(self);
      doc = transform(e.y - 0.5 * opts.height, stop(document).y + 10, stop(document).y + self.wb().height - opts.height - 10);
      t = transform(transform(doc, e.y - 0.9 * opts.height, e.y - 0.1 * opts.height), 10, Math.max(10, t - opts.height - 10));
      if ("bubble" == self.type) {
        /** @type {boolean} */
        e = e.x > 0.5 * self.wb().width;
        css(self.ea, {
          left : onDragStart(self, e).x + (e ? -opts.width : 0) + "px",
          top : t + "px"
        });
        runTest(self, t, e);
      } else {
        css(self.ea, {
          left : stop(document).x + "px",
          top : t + "px",
          width : self.wb().width + "px"
        });
      }
    }
  };
  /**
   * @param {?} fun
   * @param {Element} t
   * @param {Object} pos
   * @return {undefined}
   */
  var runTest = function(fun, t, pos) {
    slice(find("g-recaptcha-bubble-arrow", fun.ea), function(clone, dataAndEvents) {
      css(clone, "top", onDragStart(this).y - t + "px");
      /** @type {string} */
      var border = 0 == dataAndEvents ? "#ccc" : "#fff";
      css(clone, pos ? {
        left : "100%",
        right : "",
        "border-left-color" : border,
        "border-right-color" : "transparent"
      } : {
        left : "",
        right : "100%",
        "border-right-color" : border,
        "border-left-color" : "transparent"
      });
    }, fun);
  };
  /**
   * @param {?} item
   * @return {undefined}
   */
  var cancel = function(item) {
    if (item.td) {
      removeChild(item.td);
      /** @type {null} */
      item.td = null;
    }
    if (item.ea) {
      /** @type {null} */
      item.type = null;
      blur(item.Ac);
      /** @type {null} */
      item.Ac = null;
      item.P.cd();
      removeChild(item.ea);
      /** @type {null} */
      item.ea = null;
    }
  };
  /**
   * @return {undefined}
   */
  test.prototype.l = function() {
    cancel(this);
    if (this.Ka) {
      removeChild(this.Ka);
      /** @type {null} */
      this.Ka = null;
    }
    test.b.l.call(this);
  };
  /**
   * @return {undefined}
   */
  test.prototype.oi = function() {
  };
  /**
   * @param {?} tokenizer
   * @param {?} parent
   * @param {?} type
   * @param {boolean} value
   * @return {undefined}
   */
  var Context = function(tokenizer, parent, type, value) {
    this.Qd = tokenizer;
    this.Ge = void 0 === parent ? null : parent;
    this.bj = void 0 === type ? null : type;
    this.al = void 0 === value ? false : value;
  };
  /**
   * @return {?}
   */
  Context.prototype.getName = function() {
    return this.Qd;
  };
  var tr = new Context("sitekey", null, "k", true);
  var out;
  if (win.window) {
    var body = new extend(window.location);
    expect(body, "");
    if (!(null != body.Tb)) {
      if ("https" == body.Ha) {
        indexOf(body, 443);
      } else {
        if ("http" == body.Ha) {
          indexOf(body, 80);
        }
      }
    }
    var owner = body.toString().match(href);
    var nation_id = owner[1];
    var unlock = owner[2];
    var parens = owner[3];
    var dp = owner[4];
    /** @type {string} */
    var target = "";
    if (nation_id) {
      target += nation_id + ":";
    }
    if (parens) {
      target += "//";
      if (unlock) {
        target += unlock + "@";
      }
      target += parens;
      if (dp) {
        target += ":" + dp;
      }
    }
    out = perform(target);
  } else {
    /** @type {null} */
    out = null;
  }
  var rvar = new Context("size", function(element) {
    return element.has(optgroup) ? "invisible" : "normal";
  }, "size");
  var name = new Context("stoken", null, "stoken");
  var modId = new Context("badge", null, "badge");
  var normalizedName = new Context("callback");
  var attributeName = new Context("expired-callback");
  var nonStripName = new Context("tabindex", "0");
  var optgroup = new Context("bind");
  var cookieName = new Context("preload", function(str) {
    return tmpl(str);
  });
  var selectors = {
    El : tr,
    Cl : new Context("origin", out, "co"),
    Bl : new Context("hl", "fr", "hl"),
    Jl : new Context("type", null, "type"),
    VERSION : new Context("version", "r20170425155801", "v"),
    Il : new Context("theme", null, "theme"),
    Fl : rvar,
    Gl : name,
    wl : modId,
    yl : normalizedName,
    Al : attributeName,
    Hl : nonStripName,
    xl : optgroup,
    Dl : cookieName,
    zl : new Context("s", null, "s")
  };
  /**
   * @param {Array} args
   * @return {undefined}
   */
  var Tag = function(args) {
    args = MAP(args);
    var i = rvar.getName();
    if (!params.hasOwnProperty(args[i])) {
      /** @type {null} */
      args[i] = null;
    }
    /** @type {Array} */
    this.Wk = args;
    args = diff(this);
    if (0 < args.length) {
      throw Error("Missing required parameters: " + args.join());
    }
  };
  /**
   * @param {?} original
   * @return {?}
   */
  var diff = function(original) {
    /** @type {Array} */
    var result = [];
    slice(forIn(selectors), function(i) {
      if (selectors[i].al) {
        if (!this.has(selectors[i])) {
          result.push(selectors[i].getName());
        }
      }
    }, original);
    return result;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  Tag.prototype.get = function(name) {
    var entries;
    if (!(entries = this.Wk[name.getName()])) {
      entries = name.Ge ? then(name.Ge) ? name.Ge(this) : name.Ge : null;
    }
    return entries;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  Tag.prototype.has = function(name) {
    return!!this.get(name);
  };
  /**
   * @param {(number|string)} name
   * @return {?}
   */
  Tag.prototype.getAsString = function(name) {
    return(name = this.get(name)) ? name.toString() : null;
  };
  /**
   * @param {Object} value
   * @return {?}
   */
  var go = function(value) {
    return(value = value.get(cookieName)) ? !("0" === value || (0 === value || (false === value || "false" === value))) : false;
  };
  /**
   * @param {(Node|string)} text
   * @return {?}
   */
  var getTextWidth = function(text) {
    text = text.get(nonStripName);
    return parseInt(text, 10);
  };
  /**
   * @param {string} event
   * @param {string} name
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  var onSuccess = function(event, name, deepDataAndEvents) {
    deepDataAndEvents = void 0 === deepDataAndEvents ? false : deepDataAndEvents;
    if (event = event.get(name)) {
      if (then(event)) {
        return event;
      }
      if (then(window[event])) {
        return window[event];
      }
      if (deepDataAndEvents) {
        console.log("ReCAPTCHA couldn't find user-provided function: " + event);
      }
    }
    return function() {
    };
  };
  /**
   * @param {?} body
   * @return {?}
   */
  var tmpl = function(body) {
    return "invisible" == body.get(rvar);
  };
  /**
   * @param {?} walkers
   * @return {?}
   */
  var pick = function(walkers) {
    var result = {};
    slice(forIn(selectors), function(klass) {
      klass = selectors[klass];
      if (klass.bj) {
        if (this.has(klass)) {
          result[klass.bj] = this.get(klass);
        }
      }
    }, walkers);
    return result;
  };
  /**
   * @param {?} type
   * @return {undefined}
   */
  var object = function(type) {
    test.call(this, type);
  };
  equal(object, test);
  var viewportSize = new clone(302, 422);
  /**
   * @param {Object} sub
   * @param {string} writeBuffer
   * @param {string} _super
   * @param {Element} rows
   * @return {undefined}
   */
  object.prototype.render = function(sub, writeBuffer, _super, rows) {
    onResize(this, activeClassName, sub, writeBuffer, _super, rows);
  };
  /**
   * @param {?} dataAndEvents
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  object.prototype.Vi = function(dataAndEvents, deepDataAndEvents) {
    /** @type {string} */
    this.type = "fallback";
    var frag = createElement(onreadystatechange, {
      Ti : dataAndEvents,
      height : viewportSize.height + "px",
      width : viewportSize.width + "px",
      Zd : deepDataAndEvents,
      $d : "g-recaptcha-response"
    });
    this.De.appendChild(frag);
  };
  /**
   * @param {?} mapper
   * @return {undefined}
   */
  object.prototype.Xd = function(mapper) {
    if (mapper) {
      object.b.Xd.call(this, mapper);
    } else {
      if (this.wb().width > 1.5 * params.normal.width) {
        object.b.Xd.call(this, "bubble");
      } else {
        object.b.Xd.call(this);
      }
    }
  };
  /**
   * @return {?}
   */
  object.prototype.ji = function() {
    return this.Ka;
  };
  /**
   * @param {?} index
   * @param {(number|string)} opt_autoSize
   * @return {undefined}
   */
  var Shape = function(index, opt_autoSize) {
    /** @type {null} */
    this.Me = null;
    /** @type {(number|string)} */
    this.Lh = opt_autoSize;
    test.call(this, index);
  };
  equal(Shape, test);
  var contentSize = new clone(302, 422);
  var calls = {
    bottomright : {
      transition : "right 0.3s ease",
      position : "fixed",
      bottom : "14px",
      right : "-186px",
      "box-shadow" : "0px 0px 5px gray"
    },
    bottomleft : {
      transition : "left 0.3s ease",
      position : "fixed",
      bottom : "14px",
      left : "-186px",
      "box-shadow" : "0px 0px 5px gray"
    },
    inline : {
      "box-shadow" : "0px 0px 5px gray"
    }
  };
  var prefix = it(".grecaptcha-badge:hover { right: 4px !important }");
  var arrs = it(".grecaptcha-badge:hover { left: 4px !important }");
  /**
   * @param {string} event
   * @param {string} writeBuffer
   * @param {string} _super
   * @param {Element} rows
   * @return {undefined}
   */
  Shape.prototype.render = function(event, writeBuffer, _super, rows) {
    this.Me = onResize(this, post, event, writeBuffer, _super, rows);
    event = calls.hasOwnProperty(this.Lh) ? this.Lh : "bottomright";
    if ("bottomright" == event) {
      removeNode(some(prefix));
    } else {
      if ("bottomleft" == event) {
        removeNode(some(arrs));
      }
    }
    css(this.Me, calls[event]);
  };
  /**
   * @param {?} dataAndEvents
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  Shape.prototype.Vi = function(dataAndEvents, deepDataAndEvents) {
    /** @type {string} */
    this.type = "fallback";
    var li = createElement(ul, {
      Ti : dataAndEvents,
      height : contentSize.height + "px",
      width : contentSize.width + "px",
      Zd : deepDataAndEvents,
      $d : "g-recaptcha-response"
    });
    this.De.appendChild(li);
  };
  /**
   * @param {Object} s
   * @return {undefined}
   */
  Shape.prototype.oi = function(s) {
    if (s) {
      if (s.disable) {
        if (this.Ka) {
          removeChild(this.Ka);
          /** @type {null} */
          this.Ka = null;
        }
      }
      s = createElement(filter, {
        errorCode : s.errorCode
      });
      this.Me.appendChild(s);
      css(this.Me, "width", "250px");
    }
  };
  /**
   * @return {?}
   */
  Shape.prototype.ji = function() {
    return this.De;
  };
  /**
   * @return {undefined}
   */
  var color = function() {
    /** @type {number} */
    this.ve = 240;
    /** @type {number} */
    this.Te = 6;
    /** @type {number} */
    this.ki = Math.floor(this.ve / this.Te);
    /** @type {number} */
    this.vk = 7;
    /** @type {Array} */
    this.lg = [];
    /** @type {number} */
    var ki = 0;
    for (;ki < this.ki;ki++) {
      this.lg.push(whitespace(this.Te));
    }
  };
  /**
   * @param {string} x
   * @return {undefined}
   */
  color.prototype.add = function(x) {
    /** @type {number} */
    var vk = 0;
    for (;vk < this.vk;vk++) {
      x = round(x);
      /** @type {number} */
      var sectionLength = (x % this.ve + this.ve) % this.ve;
      /** @type {number} */
      this.lg[Math.floor(sectionLength / this.Te)][sectionLength % this.Te] = 1;
      /** @type {string} */
      x = "" + x;
    }
  };
  /**
   * @return {?}
   */
  color.prototype.toString = function() {
    /** @type {Array} */
    var uniqs = [];
    /** @type {number} */
    var shortest = 0;
    for (;shortest < this.ki;shortest++) {
      var a = map(this.lg[shortest]).reverse();
      uniqs.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(parseInt(Array.prototype.join.call(a, ""), 2)));
    }
    return Array.prototype.join.call(uniqs, "");
  };
  /**
   * @param {Node} index
   * @return {?}
   */
  var insert = function(index) {
    /** @type {Array} */
    var diffs = [document.getElementsByTagName("HEAD")[0], document.getElementsByTagName("BODY")[0]];
    /** @type {number} */
    var k = 0;
    for (;k < index.length;k++) {
      diffs.push(appendChild(diffs[1])[index[k]]);
    }
    /** @type {Array} */
    k = [];
    /** @type {number} */
    var x = 0;
    for (;x < diffs.length;x++) {
      var codeSegments = argsToArray(appendChild(diffs[x]), 0, 25);
      var result = new color;
      a: {
        /** @type {Node} */
        var i = index;
        /** @type {Array} */
        var results = [0, 0];
        if (append(i) && (append(results) && i.length == results.length)) {
          var itl = i.length;
          /** @type {function (?, ?): ?} */
          var callback = selector_sortOrder;
          /** @type {number} */
          var key = 0;
          for (;key < itl;key++) {
            if (!callback(i[key], results[key])) {
              /** @type {boolean} */
              i = false;
              break a;
            }
          }
          /** @type {boolean} */
          i = true;
        } else {
          /** @type {boolean} */
          i = false;
        }
      }
      if (!i) {
        result.add(Array.prototype.join.call(index, ""));
      }
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        result.add("" + normalize(codeSegments[i]));
      }
      k.push(result.toString());
    }
    return JSON.stringify(k);
  };
  /** @type {RegExp} */
  var delegateEventSplitter = /[^\{]*\{([\s\S]*)\}$/;
  /**
   * @return {?}
   */
  var include = function() {
    var codeSegments = appendChild(document.getElementsByTagName("HEAD")[0]);
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      if (codeSegments[i].src && -1 != codeSegments[i].src.indexOf("recaptcha/api.js")) {
        return i;
      }
    }
    return-1;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var hash = function(value) {
    if (value = (value + "").match(delegateEventSplitter)) {
      var a = new Matrix;
      a.update(value[1].replace(/\s/g, ""));
      return compose(a.digest());
    }
    return "";
  };
  /**
   * @return {?}
   */
  var inScope = function() {
    try {
      if (offset().parent != offset() || null != offset().frameElement) {
        return true;
      }
    } catch (a) {
      return true;
    }
    return false;
  };
  /**
   * @return {?}
   */
  var domReady = function() {
    return "complete" == document.readyState || "interactive" == document.readyState && !ms;
  };
  /**
   * @param {Function} init
   * @return {undefined}
   */
  var bindReady = function(init) {
    if (domReady()) {
      init();
    } else {
      /** @type {boolean} */
      var b = false;
      /**
       * @return {undefined}
       */
      var ready = function() {
        if (!b) {
          /** @type {boolean} */
          b = true;
          init();
        }
      };
      if (window.addEventListener) {
        window.addEventListener("load", ready, false);
        window.addEventListener("DOMContentLoaded", ready, false);
      } else {
        if (window.attachEvent) {
          window.attachEvent("onreadystatechange", function() {
            if (domReady()) {
              ready();
            }
          });
          window.attachEvent("onload", ready);
        }
      }
    }
  };
  /**
   * @param {(Object|boolean|number|string)} index
   * @param {?} map
   * @return {undefined}
   */
  var Element = function(index, map) {
    /** @type {number} */
    this.id = window.___grecaptcha_cfg.count++;
    /** @type {(Object|boolean|number|string)} */
    this.Hc = index;
    /** @type {null} */
    this.fa = null;
    /** @type {boolean} */
    this.md = false;
    /** @type {number} */
    this.Tf = 0;
    /** @type {null} */
    this.nc = null;
    /** @type {number} */
    this.yi = 0;
    /** @type {null} */
    this.m = null;
    this.hf = proxy();
    this.W = new Tag(map);
  };
  /**
   * @param {boolean} name
   * @return {?}
   */
  var id = function(name) {
    return "g-recaptcha-response" + (name ? "-" + name : "");
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var isArraylike = function(obj) {
    return obj.W.has(nonStripName) ? Math.max(0, getTextWidth(obj.W)) : 0;
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  var draw = function(options) {
    var d = new _;
    d.add("k", options.W.getAsString(tr));
    if (options.W.has(name)) {
      d.add("stoken", options.W.getAsString(name));
    }
    d.add("hl", "fr");
    d.add("v", "r20170425155801");
    d.add("t", random() - options.yi);
    if (setData()) {
      d.add("ff", true);
    }
    return call("api/fallback") + "?" + d.toString();
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var removeItem = function(item) {
    if (!item.md) {
      removeEvent(item.Hc);
      item.fa.Vi(draw(item), id(item.id));
      /** @type {boolean} */
      item.md = true;
    }
  };
  /**
   * @param {Object} options
   * @return {undefined}
   */
  var render = function(options) {
    if (select(options.Hc)) {
      options.Af();
    }
    var el = Template(pick(options.W));
    options.fa.render(el, id(options.id), String(isArraylike(options)), options.W.getAsString(rvar));
    detect(exec(options.m, options.fa.Ka), {
      ready_anchor : options.mk,
      error : options.bk,
      show_challenge : options.ui,
      token : options.rk,
      expiry : options.dk,
      client_data : options.nk,
      load_challenge : options.ik
    }, options);
    if (options.W.has(optgroup)) {
      el = isEmpty(options.W.get(optgroup));
      if (!el) {
        throw Error("The bind parameter must be an element or id");
      }
      options.fa.yc = step(el);
      addEvent(el, ["click", "submit"], function(types) {
        types.preventDefault();
        _render(this);
      }, false, options);
      dir(el, false);
    }
    if (tmpl(options.W)) {
      if (go(options.W)) {
        options.hh();
      }
    }
    options.nc = process(log(options.yk, options), 2E4);
  };
  /**
   * @return {undefined}
   */
  Element.prototype.yk = function() {
    if (!this.md) {
      this.Tf++;
      if (2 <= this.Tf) {
        removeItem(this);
      } else {
        render(this);
      }
    }
  };
  /**
   * @param {Object} elems
   * @param {Image} fn
   * @return {undefined}
   */
  var addEvents = function(elems, fn) {
    /** @type {string} */
    fn.gi.tabindex = String(isArraylike(elems));
    show(elems.fa, fn.gi, fn.fh, fn.Hj);
    addEvent(select(elems.fa.ea), "click", function() {
      this.ui(new visible(false));
    }, false, elems);
  };
  c = Element.prototype;
  /**
   * @return {undefined}
   */
  c.mk = function() {
    /** @type {boolean} */
    this.md = true;
    /** @type {number} */
    this.Tf = 0;
    blur(this.nc);
    /** @type {null} */
    this.nc = null;
    cancel(this.fa);
    exec(this.m, this.fa.Ka);
    this.hf.resolve();
  };
  /**
   * @param {Object} jsonString
   * @return {undefined}
   */
  c.bk = function(jsonString) {
    /** @type {boolean} */
    this.md = true;
    blur(this.nc);
    /** @type {null} */
    this.nc = null;
    this.fa.oi(jsonString);
  };
  /**
   * @param {Function} err
   * @return {undefined}
   */
  c.rk = function(err) {
    if (getEl(id(this.id)).value = err.response) {
      if (this.W.has(normalizedName)) {
        onSuccess(this.W, normalizedName, true)(err.response);
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.dk = function() {
    /** @type {string} */
    getEl(id(this.id)).value = "";
    if (this.W.has(attributeName)) {
      onSuccess(this.W, attributeName, true)();
    }
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  c.ui = function(c) {
    this.fa.Ab(c.visible, c.xe);
    var innerSize = this.fa.wb();
    innerSize.width -= 20;
    this.m.send("anchor", "challenge_iframe_shown", new visible(c.visible, innerSize));
  };
  /**
   * @param {Image} a
   * @return {undefined}
   */
  c.ik = function(a) {
    cancel(this.fa);
    addEvents(this, a);
    a = this.fa.wb();
    a.width -= 20;
    this.m.send("anchor", "client_data", new q(a));
  };
  /**
   * @param {string} dataAndEvents
   * @return {undefined}
   */
  c.nk = function(dataAndEvents) {
    var a = this.fa.wb();
    a.width -= 20;
    this.m.send("anchor", "client_data", new q(a, null, insert(dataAndEvents.Uk), include(), hash(onSuccess(this.W, normalizedName)), offset().location.toString().slice(0, 100), inScope()));
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  var removeListener = function(data) {
    /** @type {number} */
    data.yi = random();
    data.m = new m;
    data.fa = tmpl(data.W) ? new Shape(data.Hc, data.W.getAsString(modId)) : new object(data.Hc);
    if (setData()) {
      removeItem(data);
    } else {
      render(data);
    }
  };
  /**
   * @param {Object} value
   * @param {Object} node
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var handle = function(value, node, dataAndEvents) {
    var el = isEmpty(value);
    if (!el) {
      throw Error("ReCAPTCHA placeholder element must be an element or id");
    }
    if (dataAndEvents) {
      value = getOptions(el);
      if (node) {
        iterator(value, node);
      }
    } else {
      /** @type {Object} */
      value = node;
    }
    if ("BUTTON" == el.tagName || "INPUT" == el.tagName && "submit" == el.type) {
      value.bind = el;
      /** @type {Element} */
      node = document.createElement("DIV");
      el.parentNode.insertBefore(node, el);
      /** @type {Object} */
      el = node;
    }
    if (0 != matches(el).length) {
      throw Error("ReCAPTCHA placeholder element must be empty");
    }
    group(window.___grecaptcha_cfg.clients, function(dataAndEvents) {
      if (dataAndEvents.Hc == el) {
        throw Error("ReCAPTCHA has already been rendered in this element");
      }
    });
    if (!value || !replace(value)) {
      throw Error("Widget parameters should be an object");
    }
    node = new Element(el, value);
    removeListener(node);
    /** @type {Object} */
    window.___grecaptcha_cfg.clients[node.id] = node;
    return node.id;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var isEmpty = function(obj) {
    /** @type {null} */
    var el = null;
    if ("string" === typeof obj) {
      el = getEl(obj);
    } else {
      if (replace(obj)) {
        if (1 == obj.nodeType) {
          el = obj;
        }
      }
    }
    return el;
  };
  /**
   * @param {number} obj
   * @return {undefined}
   */
  var refresh = function(obj) {
    var data = window.___grecaptcha_cfg.clients[obj || 0];
    if (!data) {
      throw Error("Invalid ReCAPTCHA client id: " + obj);
    }
    if (!tmpl(data.W)) {
      throw Error("grecaptcha.execute only works with invisible captcha.");
    }
    _render(data);
  };
  /**
   * @param {?} config
   * @return {undefined}
   */
  var _render = function(config) {
    var resolved = log(config.m.send, config.m, "anchor", "show_challenge");
    config.hf.ad.then(resolved);
  };
  /**
   * @return {undefined}
   */
  Element.prototype.hh = function() {
    var resolved = log(this.m.send, this.m, "anchor", "load_challenge");
    this.hf.ad.then(resolved);
  };
  /**
   * @param {number} error
   * @param {?} head
   * @return {undefined}
   */
  var onConnect = function(error, head) {
    var pdataCur = window.___grecaptcha_cfg.clients[error || 0];
    if (!pdataCur) {
      throw Error("Invalid ReCAPTCHA client id: " + error);
    }
    if (head) {
      pdataCur.W = new Tag(head);
    }
    end(pdataCur.m);
    /** @type {null} */
    pdataCur.m = null;
    end(pdataCur.fa);
    /** @type {null} */
    pdataCur.fa = null;
    /** @type {number} */
    pdataCur.Tf = 0;
    pdataCur.Af();
    removeListener(pdataCur);
  };
  /**
   * @return {undefined}
   */
  Element.prototype.Af = function() {
    blur(this.nc);
    /** @type {null} */
    this.nc = null;
    /** @type {boolean} */
    this.md = false;
    removeEvent(this.Hc);
    this.hf = proxy();
  };
  /**
   * @param {number} name
   * @return {?}
   */
  var simple = function(name) {
    var pluginMap = window.___grecaptcha_cfg.clients[name || 0];
    if (!pluginMap) {
      throw Error("Invalid ReCAPTCHA client id: " + name);
    }
    return getEl(id(pluginMap.id)).value;
  };
  /**
   * @return {?}
   */
  var setData = function() {
    return!!window.___grecaptcha_cfg.fallback;
  };
  if (win.window && win.window.__google_recaptcha_client) {
    if (window.___grecaptcha_cfg || $goog$exportPath_$("___grecaptcha_cfg", {}), window.___grecaptcha_cfg.count = 0, window.___grecaptcha_cfg.clients = {}, $goog$exportPath_$("grecaptcha.render", handle), $goog$exportPath_$("grecaptcha.reset", onConnect), $goog$exportPath_$("grecaptcha.getResponse", simple), $goog$exportPath_$("grecaptcha.execute", refresh), "explicit" == window.___grecaptcha_cfg.render) {
      var testName = window.___grecaptcha_cfg.onload;
      if (then(window[testName])) {
        bindReady(window[testName]);
      } else {
        if (testName) {
          console.log("ReCAPTCHA couldn't find user-provided function: " + testName);
        }
      }
    } else {
      bindReady(function() {
        var udataCur = getById("g-recaptcha");
        if (udataCur) {
          handle(udataCur, {}, true);
        }
      });
    }
  }
  if (win.window && win.window.test_signature) {
    var s2 = win.window.document.getElementById("recaptcha-widget-signature");
    if (s2) {
      var div2 = win.window.document.createElement("div");
      div2.setAttribute("id", "result-holder");
      var span = win.window.document.createTextNode(children());
      s2.appendChild(div2);
      div2.appendChild(span);
    }
  }
  /**
   * @param {number} store
   * @return {undefined}
   */
  var HomeView = function(store) {
    /** @type {null} */
    this.m = null;
    /** @type {number} */
    this.Yc = store;
    /** @type {null} */
    this.Jh = null;
  };
  c = HomeView.prototype;
  /**
   * @param {?} recurring
   * @param {(RegExp|string)} dataAndEvents
   * @param {number} expiry
   * @return {undefined}
   */
  c.Ki = function(recurring, dataAndEvents, expiry) {
    this.m = new m;
    detect(done(this.m, "anchor", null, call("anchor")), {
      show_challenge : log(this.pk, this, recurring),
      challenge_shown : dataAndEvents,
      expiry : expiry
    });
    /** @type {number} */
    recurring = 0;
    for (;recurring < offset().parent.frames.length;recurring++) {
      done(this.m, "anchor_" + recurring, offset().parent.frames[recurring], "*").send("anchor_" + recurring, "ready_challenge", new array_to_hash(this.Yc));
    }
  };
  /**
   * @param {?} cb
   * @param {?} outErr
   * @param {?} pk
   * @param {Error} recurring
   * @return {undefined}
   */
  c.pk = function(cb, outErr, pk, recurring) {
    if (!this.Jh) {
      /** @type {Error} */
      this.Jh = recurring;
      done(this.m, "anchor", recurring, call("anchor"));
    }
    cb(outErr);
  };
  /**
   * @param {Object} opt_attributes
   * @param {boolean} dataAndEvents
   * @param {?} b
   * @return {undefined}
   */
  c.onShow = function(opt_attributes, dataAndEvents, b) {
    this.m.send("anchor", "challenge_shown", new visible(opt_attributes, null, dataAndEvents));
    if (b) {
      b();
    }
  };
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  c.onResize = function(opt_attributes) {
    this.m.send("anchor", "challenge_shown", new visible(true, null, opt_attributes, true));
  };
  /**
   * @param {string} v02
   * @param {string} v12
   * @return {undefined}
   */
  c.Ni = function(v02, v12) {
    this.m.send("anchor", "token", new handleSuccess(v02, v12));
  };
  /**
   * @return {undefined}
   */
  c.onChallengeExpired = function() {
    this.m.send("anchor", "expiry");
  };
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  c.onError = function(opt_attributes) {
    this.m.send("anchor", "error", new opendb_onerror(opt_attributes));
  };
  /**
   * @return {undefined}
   */
  c.eh = function() {
  };
  /**
   * @return {?}
   */
  c.yg = function() {
    return "anchor";
  };
  /**
   * @param {?} obj
   * @param {?} from_instance
   * @param {?} dir
   * @param {Object} dstUri
   * @return {undefined}
   */
  var copy = function(obj, from_instance, dir, dstUri) {
    store.call(this, obj, dir);
    /** @type {Object} */
    this.Qa = dstUri;
    /** @type {null} */
    this.Qh = null;
    /** @type {string} */
    this.ac = "uninitialized";
    /** @type {number} */
    this.Pi = this.Wi = 0;
    this.Yj = from_instance.Mb();
  };
  equal(copy, store);
  /**
   * @return {?}
   */
  copy.prototype.ga = function() {
    return this.Qh;
  };
  /**
   * @param {string} opt_attributes
   * @return {undefined}
   */
  copy.prototype.ce = function(opt_attributes) {
    /** @type {string} */
    this.Qh = opt_attributes;
  };
  /**
   * @return {?}
   */
  copy.prototype.Mb = function() {
    return this.Yj;
  };
  /**
   * @param {Text} v
   * @param {?} scope
   * @param {string} opt_method
   * @return {undefined}
   */
  var v = function(v, scope, opt_method) {
    this.nf = opt_method || "GET";
    this.cl = scope;
    this.Rf = new extend;
    split(this.Rf, v);
    this.ob = new _;
    v = formatter();
    serialize(this.Rf, "k", v);
    this.ob.add("v", "r20170425155801");
  };
  /**
   * @return {?}
   */
  v.prototype.jc = function() {
    return this.Rf.jc();
  };
  /**
   * @return {?}
   */
  v.prototype.Oa = function() {
    if (push(which, this.nf)) {
      return this.ob.toString();
    }
  };
  /**
   * @param {?} el
   * @param {string} x
   * @param {?} obj
   * @return {undefined}
   */
  var is = function(el, x, obj) {
    if (null != obj) {
      el.ob.add(x, obj);
    }
  };
  /**
   * @param {?} context
   * @param {?} obj
   * @return {undefined}
   */
  var sortedIndex = function(context, obj) {
    group(obj, function(type, elements) {
      this.ob.add(elements, type);
    }, context);
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var rows = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(rows, date);
  /**
   * @param {?} name
   * @return {?}
   */
  rows.prototype.N = function(name) {
    return get_mangled(name, this);
  };
  /**
   * @param {?} keepData
   * @param {?} p
   * @return {?}
   */
  var get_mangled = function(keepData, p) {
    var pair = {
      $l : require(p, 1),
      dm : require(p, 2)
    };
    if (keepData) {
      pair.R = p;
    }
    return pair;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var files = function(_super) {
    __extends(this, _super, 0, typePattern);
  };
  equal(files, date);
  /** @type {Array} */
  var typePattern = [3];
  /**
   * @param {?} input
   * @return {?}
   */
  files.prototype.N = function(input) {
    return capitalize(input, this);
  };
  /**
   * @param {?} s
   * @param {?} p
   * @return {?}
   */
  var capitalize = function(s, p) {
    var pair = {
      im : require(p, 1),
      hj : require(p, 2),
      Wl : require(p, 3),
      sm : require(p, 4),
      qm : require(p, 5)
    };
    if (s) {
      pair.R = p;
    }
    return pair;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var base = function(_super) {
    __extends(this, _super, 0, dontCloseTags);
  };
  equal(base, date);
  /** @type {Array} */
  var dontCloseTags = [1, 2];
  /**
   * @param {?} events
   * @return {?}
   */
  base.prototype.N = function(events) {
    return eachEvent(events, this);
  };
  /**
   * @param {?} events
   * @param {?} p
   * @return {?}
   */
  var eachEvent = function(events, p) {
    var pair = {
      nm : camelCase(promote(p, options, 1), define, events),
      Oi : require(p, 2)
    };
    if (events) {
      pair.R = p;
    }
    return pair;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var cache = function(_super) {
    __extends(this, _super, 0, expectationResult);
  };
  equal(cache, date);
  /** @type {Array} */
  var expectationResult = [1, 2];
  /**
   * @param {?} name
   * @return {?}
   */
  cache.prototype.N = function(name) {
    return Benchmark(name, this);
  };
  /**
   * @param {?} keepData
   * @param {?} p
   * @return {?}
   */
  var Benchmark = function(keepData, p) {
    var pair = {
      Gm : require(p, 1),
      Em : require(p, 2)
    };
    if (keepData) {
      pair.R = p;
    }
    return pair;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var results = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(results, date);
  /**
   * @param {?} name
   * @return {?}
   */
  results.prototype.N = function(name) {
    return describe(name, this);
  };
  /**
   * @param {?} keepData
   * @param {?} object
   * @return {?}
   */
  var describe = function(keepData, object) {
    var node = {
      label : require(object, 1),
      Mk : require(object, 2),
      rows : require(object, 3),
      cols : require(object, 4)
    };
    if (keepData) {
      node.R = object;
    }
    return node;
  };
  c = results.prototype;
  /**
   * @return {?}
   */
  c.Oe = function() {
    return require(this, 1);
  };
  /**
   * @param {?} opt_attributes
   * @return {undefined}
   */
  c.fe = function(opt_attributes) {
    _log(this, 1, opt_attributes);
  };
  /**
   * @return {?}
   */
  c.Pe = function() {
    return require(this, 2);
  };
  /**
   * @return {?}
   */
  c.ii = function() {
    return require(this, 3);
  };
  /**
   * @return {?}
   */
  c.hi = function() {
    return require(this, 4);
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var key = function(_super) {
    __extends(this, _super, "pmeta", null);
  };
  equal(key, date);
  /**
   * @param {?} name
   * @return {?}
   */
  key.prototype.N = function(name) {
    return label(name, this);
  };
  /**
   * @param {?} name
   * @param {?} str
   * @return {?}
   */
  var label = function(name, str) {
    var fn;
    var self = {
      mm : (fn = cb(str, options, 1)) && define(name, fn),
      Hm : (fn = cb(str, results, 2)) && describe(name, fn),
      am : (fn = cb(str, rows, 3)) && get_mangled(name, fn),
      lm : (fn = cb(str, files, 4)) && capitalize(name, fn),
      tm : (fn = cb(str, base, 5)) && eachEvent(name, fn),
      Zl : (fn = cb(str, count, 6)) && isNumeric(name, fn),
      ym : (fn = cb(str, cache, 7)) && Benchmark(name, fn),
      Ol : (fn = cb(str, file, 8)) && basename(name, fn)
    };
    if (name) {
      self.R = str;
    }
    return self;
  };
  /** @type {string} */
  key.Va = "pmeta";
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var k = function(_super) {
    __extends(this, _super, "dresp", radixToPower);
  };
  equal(k, date);
  /** @type {Array} */
  var radixToPower = [2, 4];
  /**
   * @param {?} name
   * @return {?}
   */
  k.prototype.N = function(name) {
    var sandboxIn = {
      Fj : require(this, 1),
      Oi : require(this, 2),
      errorCode : require(this, 3),
      wm : camelCase(promote(this, key, 4), label, name)
    };
    if (name) {
      sandboxIn.R = this;
    }
    return sandboxIn;
  };
  /** @type {string} */
  k.Va = "dresp";
  /**
   * @return {?}
   */
  k.prototype.ga = function() {
    return require(this, 1);
  };
  /**
   * @param {Function} opt_attributes
   * @return {undefined}
   */
  k.prototype.ce = function(opt_attributes) {
    _log(this, 1, opt_attributes);
  };
  /**
   * @return {?}
   */
  k.prototype.ib = function() {
    return require(this, 3);
  };
  /**
   * @param {string} fn
   * @param {?} a
   * @return {undefined}
   */
  var param = function(fn, a) {
    v.call(this, "/recaptcha/api2/replaceimage", k, "POST");
    this.ob.add("c", fn);
    var type = unescape(a);
    this.ob.add("ds", type);
  };
  equal(param, v);
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var node = function(_super) {
    __extends(this, _super, "rresp", null);
  };
  equal(node, date);
  /**
   * @param {?} opt_obj2
   * @return {?}
   */
  node.prototype.N = function(opt_obj2) {
    return delay(opt_obj2, this);
  };
  /**
   * @param {?} f
   * @param {?} type
   * @return {?}
   */
  var delay = function(f, type) {
    var value;
    var data = {
      Fj : require(type, 1),
      type : require(type, 2),
      timeout : require(type, 3),
      vm : (value = cb(type, key, 4)) && label(f, value),
      Ri : require(type, 5),
      errorCode : require(type, 6),
      Mh : (value = type.fc()) && Q(f, value)
    };
    if (f) {
      data.R = type;
    }
    return data;
  };
  /** @type {string} */
  node.Va = "rresp";
  c = node.prototype;
  /**
   * @return {?}
   */
  c.ga = function() {
    return require(this, 1);
  };
  /**
   * @param {Function} opt_attributes
   * @return {undefined}
   */
  c.ce = function(opt_attributes) {
    _log(this, 1, opt_attributes);
  };
  /**
   * @param {Function} funcToCall
   * @return {undefined}
   */
  c.setTimeout = function(funcToCall) {
    _log(this, 3, funcToCall);
  };
  /**
   * @return {undefined}
   */
  c.clearTimeout = function() {
    _log(this, 3, void 0);
  };
  /**
   * @return {?}
   */
  c.ib = function() {
    return require(this, 6);
  };
  /**
   * @return {?}
   */
  c.fc = function() {
    return cb(this, json, 7);
  };
  /**
   * @param {string} type
   * @param {?} context
   * @param {?} x
   * @param {?} value
   * @param {?} base
   * @return {undefined}
   */
  var block = function(type, context, x, value, base) {
    context = void 0 === context ? null : context;
    x = void 0 === x ? null : x;
    value = void 0 === value ? null : value;
    base = void 0 === base ? null : base;
    v.call(this, "/recaptcha/api2/reload", node, "POST");
    this.ob.add("reason", type);
    is(this, "c", context);
    is(this, "bg", x);
    if (value) {
      sortedIndex(this, value);
    }
    is(this, "dg", base);
  };
  mixin(block, v);
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var doc = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(doc, date);
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  doc.prototype.N = function(deepDataAndEvents) {
    return isAncestor(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} node
   * @return {?}
   */
  var isAncestor = function(deepDataAndEvents, node) {
    var result;
    var c = {
      Kl : (result = cb(node, collection, 1)) && hue2rgb(deepDataAndEvents, result)
    };
    if (deepDataAndEvents) {
      c.R = node;
    }
    return c;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var collection = function(_super) {
    __extends(this, _super, 0, null);
  };
  equal(collection, date);
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  collection.prototype.N = function(deepDataAndEvents) {
    return hue2rgb(deepDataAndEvents, this);
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} p
   * @return {?}
   */
  var hue2rgb = function(deepDataAndEvents, p) {
    var q = {
      cm : require(p, 1)
    };
    if (deepDataAndEvents) {
      q.R = p;
    }
    return q;
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var div = function(_super) {
    __extends(this, _super, "uvresp", null);
  };
  equal(div, date);
  /**
   * @param {?} callback
   * @return {?}
   */
  div.prototype.N = function(callback) {
    var el;
    var opt = {
      Vl : require(this, 1),
      Fm : require(this, 2),
      timeout : require(this, 3),
      errorCode : require(this, 4),
      Mh : (el = this.fc()) && Q(callback, el),
      xm : (el = cb(this, doc, 6)) && isAncestor(callback, el),
      Ok : (el = this.Mb()) && delay(callback, el)
    };
    if (callback) {
      opt.R = this;
    }
    return opt;
  };
  /** @type {string} */
  div.Va = "uvresp";
  c = div.prototype;
  /**
   * @param {Function} funcToCall
   * @return {undefined}
   */
  c.setTimeout = function(funcToCall) {
    _log(this, 3, funcToCall);
  };
  /**
   * @return {undefined}
   */
  c.clearTimeout = function() {
    _log(this, 3, void 0);
  };
  /**
   * @return {?}
   */
  c.ib = function() {
    return require(this, 4);
  };
  /**
   * @return {?}
   */
  c.fc = function() {
    return cb(this, json, 5);
  };
  /**
   * @return {?}
   */
  c.Mb = function() {
    return cb(this, node, 7);
  };
  /**
   * @param {string} method
   * @param {string} config
   * @param {?} opt_obj2
   * @param {?} deps
   * @param {?} walkers
   * @param {?} isSorted
   * @param {?} ret
   * @return {undefined}
   */
  var req = function(method, config, opt_obj2, deps, walkers, isSorted, ret) {
    v.call(this, "/recaptcha/api2/userverify", div, "POST");
    this.ob.add("c", method);
    this.ob.add("response", config);
    is(this, "t", opt_obj2);
    is(this, "ct", deps);
    is(this, "bg", walkers);
    is(this, "dg", isSorted);
    is(this, "mp", ret);
  };
  equal(req, v);
  /**
   * @param {string} var_args
   * @param {number} value
   * @return {undefined}
   */
  var Class = function(var_args, value) {
    expected.call(this);
    /** @type {string} */
    this.A = var_args;
    set(this, this.A);
    /** @type {number} */
    this.h = value;
    set(this, this.h);
    /** @type {null} */
    this.ya = null;
    this.Rg();
  };
  equal(Class, expected);
  c = Class.prototype;
  /**
   * @return {undefined}
   */
  c.Rg = function() {
    this.listen(this.A, "e", function() {
      createTable(this, true);
    });
    this.listen(this.A, "f", function() {
      var attributes = this.A.X();
      if (0 >= attributes.width && 0 >= attributes.height) {
        createTable(this, false);
      } else {
        this.h.Qa.onResize(attributes);
      }
    });
    this.listen(this.A, "g", function() {
      createTable(this, false);
    });
    this.listen(this.A, "i", function() {
      func(this, "r");
    });
    this.listen(this.A, "k", function() {
      func(this, "i");
    });
    this.listen(this.A, "j", function() {
      func(this, "a");
    });
    this.listen(this.A, "h", function() {
      exists(this, new param(this.h.ga(), setupConnection(this.A.V)), log(function(parent) {
        if (null != parent.ib()) {
          this.We();
        } else {
          if (parent.ga()) {
            listen(this, parent.ga());
          }
          var self = this.A.V;
          /** @type {boolean} */
          self.Yd = false;
          /** @type {Array} */
          var queue = [];
          var iterator = parent.N().Oi;
          iterator = lookupIterator(iterator);
          var x = iterator.next();
          for (;!x.done;x = iterator.next()) {
            x = x.value;
            queue.push(self.Sb(parent.ga(), x));
          }
          self.Gg(queue, promote(parent, key, 4));
          handleMessage(self);
        }
      }, this));
    });
    this.listen(this.A, "m", this.verify);
  };
  /**
   * @param {boolean} type
   * @return {undefined}
   */
  c.init = function(type) {
    if (type) {
      listen(this, type);
    }
    this.h.Qa.Ki(log(this.Qk, this), log(this.Rk, this), log(this.Sk, this));
  };
  /**
   * @param {Object} value
   * @return {undefined}
   */
  c.Qk = function(value) {
    if (value.Fc) {
      this.ya = value.Fc;
    }
    switch(this.h.ac) {
      case "uninitialized":
        func(this, "fi", value.Kk);
        break;
      case "timed-out":
        func(this, "t");
        break;
      default:
        createTable(this, value.visible);
    }
  };
  /**
   * @param {Object} v3
   * @return {undefined}
   */
  c.Rk = function(v3) {
    if (v3) {
      if (v3.visible) {
        this.A.V.Mi();
      }
    }
  };
  /**
   * @param {Function} operation
   * @return {undefined}
   */
  c.Sk = function(operation) {
    if (this.h.ga() == operation.response) {
      /** @type {string} */
      this.h.ac = "timed-out";
    }
  };
  /**
   * @param {Object} config
   * @param {Object} attributes
   * @return {undefined}
   */
  var createTable = function(config, attributes) {
    var oldconfig = log(function() {
      if (this.A.V) {
        this.A.V.ya = this.ya;
        this.A.V.onShow();
      }
    }, config);
    config.h.Qa.onShow(attributes, config.A.X(), oldconfig);
  };
  /**
   * @param {Object} elem
   * @param {string} val
   * @param {string} value
   * @return {undefined}
   */
  var func = function(elem, val, value) {
    if ("fi" == val || "t" == val) {
      /** @type {number} */
      elem.h.Wi = random();
    }
    /** @type {number} */
    elem.h.Pi = random();
    if ("uninitialized" == elem.h.ac && null != elem.h.Mb()) {
      next(elem, elem.h.Mb());
    } else {
      var target = log(function(str) {
        this.h.zf.send(str).then(function(result) {
          next(this, result, false);
        }, this.We, this);
      }, elem);
      if (value) {
        target(new block(val, null, null, value));
      } else {
        if ("embeddable" == elem.h.Qa.yg()) {
          elem.h.Qa.eh(log(function(dataAndEvents, deepDataAndEvents) {
            target(new block(val, this.h.ga(), null, {
              mp : deepDataAndEvents
            }, dataAndEvents));
          }, elem), elem.h.ga(), false);
        } else {
          value = log(function(dataAndEvents) {
            target(new block(val, this.h.ga(), dataAndEvents));
          }, elem);
          invoke(elem.h.sd, value, value);
        }
      }
    }
  };
  /**
   * @param {Object} elem
   * @param {?} p
   * @param {string} optgroup
   * @return {undefined}
   */
  var next = function(elem, p, optgroup) {
    if (null != p.ib()) {
      elem.h.Qa.onError(p.ib());
    } else {
      listen(elem, p.ga());
      /** @type {string} */
      elem.h.ac = "active";
      var that = elem.A;
      var nodes = require(p, 5);
      if (!!that.a()) {
        if (!(that.V && that.V.getName() == nodes)) {
          if (that.V) {
            that.removeChild(that.V, true);
            end(that.V);
          }
          that.V = _next(nodes);
          getter(that, that.V);
          that.V.render(that.a());
        }
      }
      elem.A.V.ya = elem.ya;
      _init(elem.A.V, elem.h.ga(), cb(p, key, 4), !!optgroup);
      optgroup = p.fc();
      elem.h.sd.set(optgroup);
      elem.h.sd.load();
      process(log(elem.qk, elem, elem.h.ga()), 1E3 * require(p, 3), elem);
    }
  };
  /**
   * @param {Object} next
   * @param {string} str
   * @param {Function} callback
   * @return {undefined}
   */
  var exists = function(next, str, callback) {
    next.h.zf.send(str).then(callback, next.We, next);
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  Class.prototype.qk = function(dataAndEvents) {
    if ("timed-out" != this.h.ac) {
      if (this.h.ga() == dataAndEvents) {
        /** @type {string} */
        this.h.ac = "timed-out";
        this.h.Qa.onChallengeExpired();
      }
    }
  };
  /**
   * @return {undefined}
   */
  Class.prototype.verify = function() {
    var next = log(this.Lk, this);
    if ("embeddable" == this.h.Qa.yg()) {
      this.h.Qa.eh(log(bind(next, null), this), this.h.ga(), true);
    } else {
      invoke(this.h.sd, next, next);
    }
  };
  /**
   * @param {string} str
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  Class.prototype.Lk = function(str, dataAndEvents, deepDataAndEvents) {
    var results = this.h.ga();
    var context = this.A.V;
    context.Xa();
    context = context.nh(context.response);
    var Wi = this.h;
    /** @type {number} */
    Wi = random() - Wi.Wi;
    var h = this.h;
    /** @type {number} */
    h = random() - h.Pi;
    str = new req(results, context, Wi, h, str, dataAndEvents, deepDataAndEvents);
    this.h.zf.send(str).then(this.sk, this.We, this);
  };
  /**
   * @param {Text} b
   * @return {undefined}
   */
  Class.prototype.sk = function(b) {
    if (null != b.ib()) {
      this.h.Qa.onError(b.ib());
    } else {
      var a = require(b, 1);
      listen(this, a);
      if (require(b, 2)) {
        b = require(b, 3);
        this.h.Qa.Ni(a, b);
        createTable(this, false);
      } else {
        next(this, b.Mb(), "nocaptcha" != this.A.V.getName());
      }
    }
  };
  /**
   * @param {Object} src
   * @param {Object} attributes
   * @return {undefined}
   */
  var listen = function(src, attributes) {
    src.h.ce(attributes);
    src.A.ce(attributes);
  };
  /**
   * @return {undefined}
   */
  Class.prototype.We = function() {
    /** @type {string} */
    this.h.ac = "uninitialized";
    this.h.Qa.onError(2);
  };
  $goog$exportPath_$("recaptcha.frame.embeddable.ErrorRender.errorRender", function(attributes, dataAndEvents) {
    if (window.RecaptchaEmbedder) {
      RecaptchaEmbedder.onError(attributes, dataAndEvents);
    }
  });
  /**
   * @return {undefined}
   */
  var Parent = function() {
    /** @type {null} */
    this.Fi = this.fj = this.ej = null;
    $goog$exportPath_$("RecaptchaMFrame.show", log(this.show, this));
    $goog$exportPath_$("RecaptchaMFrame.shown", log(this.fl, this));
    $goog$exportPath_$("RecaptchaMFrame.token", log(this.Rj, this));
  };
  c = Parent.prototype;
  /**
   * @param {number} success
   * @param {number} positions
   * @return {undefined}
   */
  c.show = function(success, positions) {
    this.ej(new visible(true, new clone(success - 20, positions)));
  };
  /**
   * @param {Array} dataAndEvents
   * @param {Array} deepDataAndEvents
   * @param {number} id
   * @return {undefined}
   */
  c.fl = function(dataAndEvents, deepDataAndEvents, id) {
    this.fj(new visible(isNaN(id) ? id : true, new clone(dataAndEvents, deepDataAndEvents)));
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} opt_obj2
   * @return {undefined}
   */
  c.Rj = function(deepDataAndEvents, opt_obj2) {
    this.Fi(deepDataAndEvents, opt_obj2);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  c.Ki = function(dataAndEvents, deepDataAndEvents) {
    this.ej = dataAndEvents;
    this.fj = deepDataAndEvents;
    if (window.RecaptchaEmbedder) {
      if (RecaptchaEmbedder.challengeReady) {
        RecaptchaEmbedder.challengeReady();
      }
    }
  };
  /**
   * @param {Object} opt_attributes
   * @param {Object} dataAndEvents
   * @return {undefined}
   */
  c.onShow = function(opt_attributes, dataAndEvents) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onShow) {
      RecaptchaEmbedder.onShow(opt_attributes, dataAndEvents.width, dataAndEvents.height);
    }
  };
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  c.onResize = function(opt_attributes) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onResize) {
      RecaptchaEmbedder.onResize(opt_attributes.width, opt_attributes.height);
    }
  };
  /**
   * @param {?} v02
   * @return {undefined}
   */
  c.Ni = function(v02) {
    if (window.RecaptchaEmbedder) {
      if (RecaptchaEmbedder.verifyCallback) {
        RecaptchaEmbedder.verifyCallback(v02);
      }
    }
  };
  /**
   * @return {undefined}
   */
  c.onChallengeExpired = function() {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onChallengeExpired) {
      RecaptchaEmbedder.onChallengeExpired();
    }
  };
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  c.onError = function(opt_attributes) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onError) {
      RecaptchaEmbedder.onError(opt_attributes, true);
    }
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} cl
   * @param {boolean} recurring
   * @return {undefined}
   */
  c.eh = function(dataAndEvents, cl, recurring) {
    this.Fi = dataAndEvents;
    if (window.RecaptchaEmbedder) {
      if (RecaptchaEmbedder.requestToken) {
        RecaptchaEmbedder.requestToken(cl, recurring);
      }
    }
  };
  /**
   * @return {?}
   */
  c.yg = function() {
    return "embeddable";
  };
  /**
   * @param {?} a
   * @return {undefined}
   */
  var ext = function(a) {
    s.call(this, a);
    /** @type {null} */
    this.V = null;
    this.Ph = getEl("recaptcha-token");
  };
  equal(ext, s);
  /**
   * @return {?}
   */
  ext.prototype.ga = function() {
    return this.Ph.value;
  };
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  ext.prototype.ce = function(opt_attributes) {
    /** @type {Object} */
    this.Ph.value = opt_attributes;
  };
  /**
   * @return {?}
   */
  ext.prototype.X = function() {
    return this.V ? this.V.gb.clone() : new clone(0, 0);
  };
  /**
   * @param {number} _super
   * @return {undefined}
   */
  var suiteView = function(_super) {
    __extends(this, _super, "finput", null);
  };
  equal(suiteView, date);
  /**
   * @param {?} opt_obj2
   * @return {?}
   */
  suiteView.prototype.N = function(opt_obj2) {
    var prop;
    var data = {
      hm : require(this, 1),
      config : (prop = this.Oc()) && computed(opt_obj2, prop),
      gm : require(this, 3),
      Kj : (prop = this.gc()) && getStyle(opt_obj2, prop),
      Ok : (prop = this.Mb()) && delay(opt_obj2, prop)
    };
    if (opt_obj2) {
      data.R = this;
    }
    return data;
  };
  /** @type {string} */
  suiteView.Va = "finput";
  /**
   * @return {?}
   */
  suiteView.prototype.Oc = function() {
    return cb(this, actual, 2);
  };
  /**
   * @return {?}
   */
  suiteView.prototype.gc = function() {
    return cb(this, two, 4);
  };
  /**
   * @return {?}
   */
  suiteView.prototype.Mb = function() {
    return cb(this, node, 5);
  };
  /**
   * @param {EventTarget} options
   * @return {undefined}
   */
  var edit = function(options) {
    _this.ub().init(options.Oc());
    var self = new ext;
    self.render(document.body);
    var view = new Client;
    view = new copy(view, options, new Model, new Parent);
    this.wd = new Class(self, view);
    this.wd.init(require(options, 1));
  };
  $goog$exportPath_$("recaptcha.frame.embeddable.Main.init", function(walkers) {
    walkers = new suiteView(HOP(walkers));
    new edit(walkers);
  });
  /**
   * @param {(RegExp|string)} name
   * @return {undefined}
   */
  var route = function(name) {
    _this.ub().init(name.Oc());
    if (loop("JS_THIRDEYE")) {
      splitPrefix();
    }
    var self = new ext;
    self.render(document.body);
    var client = new Client;
    name = new copy(client, name, new Model, new HomeView(offset().location.hash.slice(1)));
    this.wd = new Class(self, name);
  };
  $goog$exportPath_$("recaptcha.frame.Main.init", function(walkers) {
    walkers = new suiteView(HOP(walkers));
    (new route(walkers)).wd.init(require(walkers, 1));
  });
}).call(this);
