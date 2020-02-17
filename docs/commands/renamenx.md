---
id: renamenx
title: RENAMENX
sidebar_label: __no_label
---

## Full Syntax

**RENAMENX  key newkey**

---

## Description

Renames collection `key` to `newkey`, if it does not exist yet. If 
`newkey` already exists, this command does nothing.

Returns 1 if `key` was renamed to `newkey`, 0 if `newkey` already existed, or 
"ERR" when `key` or `newkey` are actively being used by a geofence or webhook.

## Examples

```tile38-cli
RENAMENX fleet fleet2
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
[RENAME](rename.html)<br>
**[RENAMENX](renamenx.html)**<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>