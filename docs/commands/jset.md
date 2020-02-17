---
id: jset
title: JSET
sidebar_label: __no_label
---

## Full Syntax

**JSET  key id path value [RAW|STR]**

---

## Description

Set a value in a JSON document.

## Examples

JGET, JSET, and JDEL allow for working with JSON strings, for example:

```tile38
JSET user 901 name Tom
JGET user 901
> {"name":"Tom"}

JSET user 901 name.first Tom
JSET user 901 name.last Anderson
JGET user 901
> {"name":{"first":"Tom","last":"Anderson"}}

JDEL user 901 name.last
JGET user 901
> {"name":{"first":"Tom"}}
```

## Options

JSET allows a set of options that modify its behavior:

`RAW` allows `value` to be interpreted as a serialized JSON object:

```tile38
SET linestrings 1 OBJECT {"type": "LineString", "coordinates": [[0, 0], [1, 1]]}
JSET linestrings 1 coordinates.-1 [2,2] RAW
JGET linestrings 1
> {"type":"LineString","coordinates":[[0,0],[1,1],[2,2]]}
```

`STR` allows `value` to be interpreted as a string:
```tile38
JSET test 1 properties.bool true
JGET test 1 properties.bool
> {"value":true}

JSET test 1 properties.bool true STR
JGET test 1 properties.bool
> {"value":"true"}
```

## Path syntax

All commands use the GJSON path syntax, for more information:

Setting JSON: https://github.com/tidwall/sjson  
Getting JSON: https://github.com/tidwall/gjson

## Related Commands

[BOUNDS](bounds.html)<br>
[DEL](del.html)<br>
[DROP](drop.html)<br>
[EXPIRE](expire.html)<br>
[FSET](fset.html)<br>
[GET](get.html)<br>
[JDEL](jdel.html)<br>
[JGET](jget.html)<br>
**[JSET](jset.html)**<br>
[KEYS](keys.html)<br>
[PDEL](pdel.html)<br>
[PERSIST](persist.html)<br>
[RENAME](rename.html)<br>
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>