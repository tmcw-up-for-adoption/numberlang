## Numberlang

A small language for representing calculations.
Targeted at implementing map projections via code injection.

It's made to look like Javascript, and actually run as Javascript,
though the implementation has no official relation. It's a compact
language that should be easy to implement in C++ as well.

This is meant to be the endgame of the
[Project It Yourself](http://macwright.org/2012/03/12/project-it-yourself.html)
project - a way to represent arbitrary projections in a
code-as-configuration way that allows for autoconfiguration.

Goals

* Secure: no access to Javascript objects
* Only numbers allowed: no other types
* Tiny implementation
* Projections with parameters, like Albers, should be represented
  just like any other and must state default values: but they can be
  curried to provide those parameters.

Possible features:

## FAQ

Why not JavaScript?

Security, simplicity and guarantees. There is no good way to clean untrusted JavaScript.
It's easier to implement a simple language in other targets - like C++. And this will
only fail in one way.

Why not EPSG or proj4 strings?

Because they rely on everyone having shared dictionaries of implementations, and agreeing
on internal implementations.
