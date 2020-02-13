---
id: fset
title: FSET
sidebar_label: __no_label
---

## Full Syntax

FSET key id XX field,value field,value

---

## Description

Set the value for one or more fields of an id.
Fields are double precision floating points.

Return value is the integer count of how many fields actually changed their values.

## Examples

Set a field named `speed` to `16` and a field named `wheels` to 8 for `truck1`.

```tile38
FSET fleet truck1 speed 16 wheels 8
```

## Options

Normally, `FSET` will return an error if the field is being set on a non-existent id.  However, the option `XX` can alter this behavior.  Specifically, if called with `XX` option, `FSET` will return `0` when called on a non-existend id.

Note that the non-existent key will still cause an error!

## Related Commands

[BOUNDS](bounds.html)<br>
[DEL](del.html)<br>
[DROP](drop.html)<br>
[EXPIRE](expire.html)<br>
**[FSET](fset.html)**<br>
[GET](get.html)<br>
[JDEL](jdel.html)<br>
[JGET](jget.html)<br>
[JSET](jset.html)<br>
[KEYS](keys.html)<br>
[PDEL](pdel.html)<br>
[PERSIST](persist.html)<br>
[RENAME](rename.html)<br>
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>