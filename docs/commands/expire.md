---
id: expire
title: EXPIRE
sidebar_label: __no_label
---

## Full Syntax

**EXPIRE  key id seconds**

---

## Description

Set a timeout on an id.

## Examples

```tile38-cli
EXPIRE fleet truck 10
```

This will remove the `truck` object from the `fleet` key after 10 seconds have elapsed.

## Related Commands

[BOUNDS](bounds.html)<br>
[DEL](del.html)<br>
[DROP](drop.html)<br>
**[EXPIRE](expire.html)**<br>
[FSET](fset.html)<br>
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