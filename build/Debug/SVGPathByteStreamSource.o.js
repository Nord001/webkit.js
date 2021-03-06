// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23SVGPathByteStreamSourceC1EPNS_17SVGPathByteStreamE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23SVGPathByteStreamSourceE=(H_BASE+8)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore23SVGPathByteStreamSource24parseCurveToCubicSegmentERNS_10FloatPointES2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = HEAPU8[i1] | 0;
 i7 = i1 + 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i8 = (HEAPU8[i7] | 0) << 8 | i6;
 i6 = i1 + 2 | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = i8 | (HEAPU8[i6] | 0) << 16;
 i6 = i1 + 3 | 0;
 HEAP32[i5 >> 2] = i6;
 i8 = i7 | (HEAPU8[i6] | 0) << 24;
 i6 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = HEAPU8[i6] | 0;
 i6 = i1 + 5 | 0;
 HEAP32[i5 >> 2] = i6;
 i9 = (HEAPU8[i6] | 0) << 8 | i7;
 i7 = i1 + 6 | 0;
 HEAP32[i5 >> 2] = i7;
 i6 = i9 | (HEAPU8[i7] | 0) << 16;
 i7 = i1 + 7 | 0;
 HEAP32[i5 >> 2] = i7;
 i9 = i6 | (HEAPU8[i7] | 0) << 24;
 HEAP32[i5 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i9;
 i9 = HEAP32[i5 >> 2] | 0;
 i1 = HEAPU8[i9] | 0;
 i8 = i9 + 1 | 0;
 HEAP32[i5 >> 2] = i8;
 i2 = (HEAPU8[i8] | 0) << 8 | i1;
 i1 = i9 + 2 | 0;
 HEAP32[i5 >> 2] = i1;
 i8 = i2 | (HEAPU8[i1] | 0) << 16;
 i1 = i9 + 3 | 0;
 HEAP32[i5 >> 2] = i1;
 i2 = i8 | (HEAPU8[i1] | 0) << 24;
 i1 = i9 + 4 | 0;
 HEAP32[i5 >> 2] = i1;
 i8 = HEAPU8[i1] | 0;
 i1 = i9 + 5 | 0;
 HEAP32[i5 >> 2] = i1;
 i7 = (HEAPU8[i1] | 0) << 8 | i8;
 i8 = i9 + 6 | 0;
 HEAP32[i5 >> 2] = i8;
 i1 = i7 | (HEAPU8[i8] | 0) << 16;
 i8 = i9 + 7 | 0;
 HEAP32[i5 >> 2] = i8;
 i7 = i1 | (HEAPU8[i8] | 0) << 24;
 HEAP32[i5 >> 2] = i9 + 8;
 i9 = i3;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i9 + 4 >> 2] = i7;
 i7 = HEAP32[i5 >> 2] | 0;
 i9 = HEAPU8[i7] | 0;
 i2 = i7 + 1 | 0;
 HEAP32[i5 >> 2] = i2;
 i3 = (HEAPU8[i2] | 0) << 8 | i9;
 i9 = i7 + 2 | 0;
 HEAP32[i5 >> 2] = i9;
 i2 = i3 | (HEAPU8[i9] | 0) << 16;
 i9 = i7 + 3 | 0;
 HEAP32[i5 >> 2] = i9;
 i3 = i2 | (HEAPU8[i9] | 0) << 24;
 i9 = i7 + 4 | 0;
 HEAP32[i5 >> 2] = i9;
 i2 = HEAPU8[i9] | 0;
 i9 = i7 + 5 | 0;
 HEAP32[i5 >> 2] = i9;
 i8 = (HEAPU8[i9] | 0) << 8 | i2;
 i2 = i7 + 6 | 0;
 HEAP32[i5 >> 2] = i2;
 i9 = i8 | (HEAPU8[i2] | 0) << 16;
 i2 = i7 + 7 | 0;
 HEAP32[i5 >> 2] = i2;
 i8 = i9 | (HEAPU8[i2] | 0) << 24;
 HEAP32[i5 >> 2] = i7 + 8;
 i7 = i4;
 HEAP32[i7 >> 2] = i3;
 HEAP32[i7 + 4 >> 2] = i8;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource17parseArcToSegmentERfS1_S1_RbS2_RNS_10FloatPointE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i9 = HEAPU8[i1] | 0;
 i10 = i1 + 1 | 0;
 HEAP32[i8 >> 2] = i10;
 i11 = (HEAPU8[i10] | 0) << 8 | i9;
 i9 = i1 + 2 | 0;
 HEAP32[i8 >> 2] = i9;
 i10 = i11 | (HEAPU8[i9] | 0) << 16;
 i9 = i1 + 3 | 0;
 HEAP32[i8 >> 2] = i9;
 i11 = i10 | (HEAPU8[i9] | 0) << 24 | 0;
 HEAP32[i8 >> 2] = i1 + 4;
 HEAP32[i2 >> 2] = i11;
 i11 = HEAP32[i8 >> 2] | 0;
 i2 = HEAPU8[i11] | 0;
 i1 = i11 + 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i9 = (HEAPU8[i1] | 0) << 8 | i2;
 i2 = i11 + 2 | 0;
 HEAP32[i8 >> 2] = i2;
 i1 = i9 | (HEAPU8[i2] | 0) << 16;
 i2 = i11 + 3 | 0;
 HEAP32[i8 >> 2] = i2;
 i9 = i1 | (HEAPU8[i2] | 0) << 24 | 0;
 HEAP32[i8 >> 2] = i11 + 4;
 HEAP32[i3 >> 2] = i9;
 i9 = HEAP32[i8 >> 2] | 0;
 i3 = HEAPU8[i9] | 0;
 i11 = i9 + 1 | 0;
 HEAP32[i8 >> 2] = i11;
 i2 = (HEAPU8[i11] | 0) << 8 | i3;
 i3 = i9 + 2 | 0;
 HEAP32[i8 >> 2] = i3;
 i11 = i2 | (HEAPU8[i3] | 0) << 16;
 i3 = i9 + 3 | 0;
 HEAP32[i8 >> 2] = i3;
 i2 = i11 | (HEAPU8[i3] | 0) << 24 | 0;
 HEAP32[i8 >> 2] = i9 + 4;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP8[i2] | 0;
 HEAP32[i8 >> 2] = i2 + 1;
 HEAP8[i5] = i4 & 1;
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP8[i4] | 0;
 HEAP32[i8 >> 2] = i4 + 1;
 HEAP8[i6] = i5 & 1;
 i5 = HEAP32[i8 >> 2] | 0;
 i6 = HEAPU8[i5] | 0;
 i4 = i5 + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i2 = (HEAPU8[i4] | 0) << 8 | i6;
 i6 = i5 + 2 | 0;
 HEAP32[i8 >> 2] = i6;
 i4 = i2 | (HEAPU8[i6] | 0) << 16;
 i6 = i5 + 3 | 0;
 HEAP32[i8 >> 2] = i6;
 i2 = i4 | (HEAPU8[i6] | 0) << 24;
 i6 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = i6;
 i4 = HEAPU8[i6] | 0;
 i6 = i5 + 5 | 0;
 HEAP32[i8 >> 2] = i6;
 i9 = (HEAPU8[i6] | 0) << 8 | i4;
 i4 = i5 + 6 | 0;
 HEAP32[i8 >> 2] = i4;
 i6 = i9 | (HEAPU8[i4] | 0) << 16;
 i4 = i5 + 7 | 0;
 HEAP32[i8 >> 2] = i4;
 i9 = i6 | (HEAPU8[i4] | 0) << 24;
 HEAP32[i8 >> 2] = i5 + 8;
 i5 = i7;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i9;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource30parseCurveToCubicSmoothSegmentERNS_10FloatPointES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAPU8[i1] | 0;
 i6 = i1 + 1 | 0;
 HEAP32[i4 >> 2] = i6;
 i7 = (HEAPU8[i6] | 0) << 8 | i5;
 i5 = i1 + 2 | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = i7 | (HEAPU8[i5] | 0) << 16;
 i5 = i1 + 3 | 0;
 HEAP32[i4 >> 2] = i5;
 i7 = i6 | (HEAPU8[i5] | 0) << 24;
 i5 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = HEAPU8[i5] | 0;
 i5 = i1 + 5 | 0;
 HEAP32[i4 >> 2] = i5;
 i8 = (HEAPU8[i5] | 0) << 8 | i6;
 i6 = i1 + 6 | 0;
 HEAP32[i4 >> 2] = i6;
 i5 = i8 | (HEAPU8[i6] | 0) << 16;
 i6 = i1 + 7 | 0;
 HEAP32[i4 >> 2] = i6;
 i8 = i5 | (HEAPU8[i6] | 0) << 24;
 HEAP32[i4 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = i8;
 i8 = HEAP32[i4 >> 2] | 0;
 i1 = HEAPU8[i8] | 0;
 i7 = i8 + 1 | 0;
 HEAP32[i4 >> 2] = i7;
 i2 = (HEAPU8[i7] | 0) << 8 | i1;
 i1 = i8 + 2 | 0;
 HEAP32[i4 >> 2] = i1;
 i7 = i2 | (HEAPU8[i1] | 0) << 16;
 i1 = i8 + 3 | 0;
 HEAP32[i4 >> 2] = i1;
 i2 = i7 | (HEAPU8[i1] | 0) << 24;
 i1 = i8 + 4 | 0;
 HEAP32[i4 >> 2] = i1;
 i7 = HEAPU8[i1] | 0;
 i1 = i8 + 5 | 0;
 HEAP32[i4 >> 2] = i1;
 i6 = (HEAPU8[i1] | 0) << 8 | i7;
 i7 = i8 + 6 | 0;
 HEAP32[i4 >> 2] = i7;
 i1 = i6 | (HEAPU8[i7] | 0) << 16;
 i7 = i8 + 7 | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | (HEAPU8[i7] | 0) << 24;
 HEAP32[i4 >> 2] = i8 + 8;
 i8 = i3;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i6;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource28parseCurveToQuadraticSegmentERNS_10FloatPointES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAPU8[i1] | 0;
 i6 = i1 + 1 | 0;
 HEAP32[i4 >> 2] = i6;
 i7 = (HEAPU8[i6] | 0) << 8 | i5;
 i5 = i1 + 2 | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = i7 | (HEAPU8[i5] | 0) << 16;
 i5 = i1 + 3 | 0;
 HEAP32[i4 >> 2] = i5;
 i7 = i6 | (HEAPU8[i5] | 0) << 24;
 i5 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = HEAPU8[i5] | 0;
 i5 = i1 + 5 | 0;
 HEAP32[i4 >> 2] = i5;
 i8 = (HEAPU8[i5] | 0) << 8 | i6;
 i6 = i1 + 6 | 0;
 HEAP32[i4 >> 2] = i6;
 i5 = i8 | (HEAPU8[i6] | 0) << 16;
 i6 = i1 + 7 | 0;
 HEAP32[i4 >> 2] = i6;
 i8 = i5 | (HEAPU8[i6] | 0) << 24;
 HEAP32[i4 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = i8;
 i8 = HEAP32[i4 >> 2] | 0;
 i1 = HEAPU8[i8] | 0;
 i7 = i8 + 1 | 0;
 HEAP32[i4 >> 2] = i7;
 i2 = (HEAPU8[i7] | 0) << 8 | i1;
 i1 = i8 + 2 | 0;
 HEAP32[i4 >> 2] = i1;
 i7 = i2 | (HEAPU8[i1] | 0) << 16;
 i1 = i8 + 3 | 0;
 HEAP32[i4 >> 2] = i1;
 i2 = i7 | (HEAPU8[i1] | 0) << 24;
 i1 = i8 + 4 | 0;
 HEAP32[i4 >> 2] = i1;
 i7 = HEAPU8[i1] | 0;
 i1 = i8 + 5 | 0;
 HEAP32[i4 >> 2] = i1;
 i6 = (HEAPU8[i1] | 0) << 8 | i7;
 i7 = i8 + 6 | 0;
 HEAP32[i4 >> 2] = i7;
 i1 = i6 | (HEAPU8[i7] | 0) << 16;
 i7 = i8 + 7 | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | (HEAPU8[i7] | 0) << 24;
 HEAP32[i4 >> 2] = i8 + 8;
 i8 = i3;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i6;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource34parseCurveToQuadraticSmoothSegmentERNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAPU8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = (HEAPU8[i5] | 0) << 8 | i4;
 i4 = i1 + 2 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i6 | (HEAPU8[i4] | 0) << 16;
 i4 = i1 + 3 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 | (HEAPU8[i4] | 0) << 24;
 i4 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = HEAPU8[i4] | 0;
 i4 = i1 + 5 | 0;
 HEAP32[i3 >> 2] = i4;
 i7 = (HEAPU8[i4] | 0) << 8 | i5;
 i5 = i1 + 6 | 0;
 HEAP32[i3 >> 2] = i5;
 i4 = i7 | (HEAPU8[i5] | 0) << 16;
 i5 = i1 + 7 | 0;
 HEAP32[i3 >> 2] = i5;
 i7 = i4 | (HEAPU8[i5] | 0) << 24;
 HEAP32[i3 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = i7;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource18parseMoveToSegmentERNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAPU8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = (HEAPU8[i5] | 0) << 8 | i4;
 i4 = i1 + 2 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i6 | (HEAPU8[i4] | 0) << 16;
 i4 = i1 + 3 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 | (HEAPU8[i4] | 0) << 24;
 i4 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = HEAPU8[i4] | 0;
 i4 = i1 + 5 | 0;
 HEAP32[i3 >> 2] = i4;
 i7 = (HEAPU8[i4] | 0) << 8 | i5;
 i5 = i1 + 6 | 0;
 HEAP32[i3 >> 2] = i5;
 i4 = i7 | (HEAPU8[i5] | 0) << 16;
 i5 = i1 + 7 | 0;
 HEAP32[i3 >> 2] = i5;
 i7 = i4 | (HEAPU8[i5] | 0) << 24;
 HEAP32[i3 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = i7;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource18parseLineToSegmentERNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAPU8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = (HEAPU8[i5] | 0) << 8 | i4;
 i4 = i1 + 2 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i6 | (HEAPU8[i4] | 0) << 16;
 i4 = i1 + 3 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 | (HEAPU8[i4] | 0) << 24;
 i4 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = HEAPU8[i4] | 0;
 i4 = i1 + 5 | 0;
 HEAP32[i3 >> 2] = i4;
 i7 = (HEAPU8[i4] | 0) << 8 | i5;
 i5 = i1 + 6 | 0;
 HEAP32[i3 >> 2] = i5;
 i4 = i7 | (HEAPU8[i5] | 0) << 16;
 i5 = i1 + 7 | 0;
 HEAP32[i3 >> 2] = i5;
 i7 = i4 | (HEAPU8[i5] | 0) << 24;
 HEAP32[i3 >> 2] = i1 + 8;
 i1 = i2;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = i7;
 return 1;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iiiiiiii + 2;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore23SVGPathByteStreamSource28parseLineToHorizontalSegmentERf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAPU8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = (HEAPU8[i5] | 0) << 8 | i4;
 i4 = i1 + 2 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i6 | (HEAPU8[i4] | 0) << 16;
 i4 = i1 + 3 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 | (HEAPU8[i4] | 0) << 24 | 0;
 HEAP32[i3 >> 2] = i1 + 4;
 HEAP32[i2 >> 2] = i6;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource26parseLineToVerticalSegmentERf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAPU8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = (HEAPU8[i5] | 0) << 8 | i4;
 i4 = i1 + 2 | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i6 | (HEAPU8[i4] | 0) << 16;
 i4 = i1 + 3 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 | (HEAPU8[i4] | 0) << 24 | 0;
 HEAP32[i3 >> 2] = i1 + 4;
 HEAP32[i2 >> 2] = i6;
 return 1;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore23SVGPathByteStreamSource19parseSVGSegmentTypeERNS_14SVGPathSegTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP8[i1] | 0;
 i5 = i1 + 1 | 0;
 HEAP32[i3 >> 2] = i5;
 i6 = HEAP8[i5] | 0;
 HEAP32[i3 >> 2] = i1 + 2;
 HEAP32[i2 >> 2] = ((i6 & 255) << 8 | i4 & 255) & 65535;
 return 1;
}
function __ZN7WebCore23SVGPathByteStreamSource11nextCommandENS_14SVGPathSegTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP8[i1] | 0;
 i4 = i1 + 1 | 0;
 HEAP32[i2 >> 2] = i4;
 i5 = HEAP8[i4] | 0;
 HEAP32[i2 >> 2] = i1 + 2;
 return ((i5 & 255) << 8 | i3 & 255) & 65535 | 0;
}
function __ZN7WebCore23SVGPathByteStreamSourceC2EPNS_17SVGPathByteStreamE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 8 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore23SVGPathByteStreamSourceC1EPNS_17SVGPathByteStreamE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 8 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 8 >> 2] | 0);
 return;
}
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore23SVGPathByteStreamSource11hasMoreDataEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) >>> 0 < (HEAP32[i1 + 8 >> 2] | 0) >>> 0 | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore23SVGPathByteStreamSourceD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore23SVGPathByteStreamSource15moveToNextTokenEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZN7WebCore23SVGPathByteStreamSourceD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0,__ZN7WebCore23SVGPathByteStreamSource17parseArcToSegmentERfS1_S1_RbS2_RNS_10FloatPointE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore23SVGPathByteStreamSourceD1Ev,b1,__ZN7WebCore23SVGPathByteStreamSourceD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore23SVGPathByteStreamSourceC2EPNS_17SVGPathByteStreamE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore23SVGPathByteStreamSource15moveToNextTokenEv,b3,__ZNK7WebCore23SVGPathByteStreamSource11hasMoreDataEv,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZN7WebCore23SVGPathByteStreamSource30parseCurveToCubicSmoothSegmentERNS_10FloatPointES2_,b4,__ZN7WebCore23SVGPathByteStreamSource28parseCurveToQuadraticSegmentERNS_10FloatPointES2_,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iiiii = [b6,b6,__ZN7WebCore23SVGPathByteStreamSource24parseCurveToCubicSegmentERNS_10FloatPointES2_S2_,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore23SVGPathByteStreamSource19parseSVGSegmentTypeERNS_14SVGPathSegTypeE,b7,__ZN7WebCore23SVGPathByteStreamSource28parseLineToHorizontalSegmentERf,b7,__ZN7WebCore23SVGPathByteStreamSource34parseCurveToQuadraticSmoothSegmentERNS_10FloatPointE,b7,__ZN7WebCore23SVGPathByteStreamSource26parseLineToVerticalSegmentERf,b7,__ZN7WebCore23SVGPathByteStreamSource11nextCommandENS_14SVGPathSegTypeE,b7,__ZN7WebCore23SVGPathByteStreamSource18parseMoveToSegmentERNS_10FloatPointE,b7,__ZN7WebCore23SVGPathByteStreamSource18parseLineToSegmentERNS_10FloatPointE,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore23SVGPathByteStreamSource17parseArcToSegmentERfS1_S1_RbS2_RNS_10FloatPointE","__ZN7WebCore23SVGPathByteStreamSource30parseCurveToCubicSmoothSegmentERNS_10FloatPointES2_","__ZN7WebCore23SVGPathByteStreamSource15moveToNextTokenEv","__ZN7WebCore23SVGPathByteStreamSource28parseCurveToQuadraticSegmentERNS_10FloatPointES2_","__ZN7WebCore23SVGPathByteStreamSourceD1Ev","__ZN7WebCore23SVGPathByteStreamSource19parseSVGSegmentTypeERNS_14SVGPathSegTypeE","__ZN7WebCore23SVGPathByteStreamSource28parseLineToHorizontalSegmentERf","__ZN7WebCore23SVGPathByteStreamSource34parseCurveToQuadraticSmoothSegmentERNS_10FloatPointE","__ZN7WebCore23SVGPathByteStreamSource26parseLineToVerticalSegmentERf","__ZN7WebCore23SVGPathByteStreamSource24parseCurveToCubicSegmentERNS_10FloatPointES2_S2_","_memset","_memcpy","_strlen","__ZN7WebCore23SVGPathByteStreamSource11nextCommandENS_14SVGPathSegTypeE","__ZN7WebCore23SVGPathByteStreamSourceD0Ev","__ZNK7WebCore23SVGPathByteStreamSource11hasMoreDataEv","__ZN7WebCore23SVGPathByteStreamSource18parseMoveToSegmentERNS_10FloatPointE","__ZN7WebCore23SVGPathByteStreamSourceC2EPNS_17SVGPathByteStreamE","__ZN7WebCore23SVGPathByteStreamSource18parseLineToSegmentERNS_10FloatPointE"]
