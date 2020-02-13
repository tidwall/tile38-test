---
id: rename
title: RENAME
sidebar_label: __no_label
---

## Full Syntax

RENAME key newkey

---

## Description

Renames collection `key` to `newkey`. If `newkey` already exists, it
will be deleted prior to renaming.

Returns "OK" for success or "ERR" when `key` or `newkey` are actively being
used by a geofence or webhook.

## Examples

```tile38
RENAME fleet fleet2
```

## Related Commands

[BOUNDS](bounds.html)<br>
[DEL](del.html)<br>
[DROP](drop.html)<br>
[EXPIRE](expire.html)<br>
[FSET](fset.html)<br>
[GET](get.html)<br>
[JDEL](jdel.html)<br>
[JGET](jget.html)<br>
[JSET](jset.html)<br>
[KEYS](keys.html)<br>
[PDEL](pdel.html)<br>
[PERSIST](persist.html)<br>
**[RENAME](rename.html)**<br>
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>