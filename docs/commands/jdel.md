---
id: jdel
title: JDEL
sidebar_label: __no_label
---

## Full Syntax

**JDEL  key id path**

---

## Description

Delete a value from a JSON document.

JGET, JSET, and JDEL allow for working with JSON strings, for example:

```tile38-cli
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
**[JDEL](jdel.html)**<br>
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