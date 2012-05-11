## Numberlang

A small language for representing calculations.
Targeted at implementing map projections via code injection.

It's made to look like Javascript, and actually run as Javascript,
though the implementation has no official relation. It's a compact
language that should be easy to implement in C++ as well.

Goals

* Non-crazy syntax, somewhat familiar to Javascript programmers
* No side effects allowed
* Type annotations
* Compact syntax
* Secure: no access to Javascript objects
* Only numbers allowed: no other types
* Tiny implementation
* Projections with parameters, like Albers, should be represented
  just like any other and must state default values: but they can be
  curried to provide those parameters.

Possible features:

## Constants

```javascript
var HALFPI = 1.5707963267948966;
var FORTPI = 0.78539816339744833;
var PI = 3.14159265358979323846;
var TWOPI = 6.2831853071795864769;
var A = 6378137;
var D2R = Math.PI / 180;
```

## Base Math library

* Math.atan
* Math.log
* Math.fabs
* Math.cos
* Math.sin

## FAQ

Why not JavaScript?

Security, simplicity and guarantees. There is no good way to clean untrusted JavaScript.
It's easier to implement a simple language in other targets - like C++. And this will
only fail in one way.

Why not EPSG or proj4 strings?

Because they rely on everyone having shared dictionaries of implementations, and agreeing
on internal implementations.
