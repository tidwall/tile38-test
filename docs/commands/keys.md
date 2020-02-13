---
id: keys
title: KEYS
sidebar_label: __no_label
---

## Full Syntax

KEYS pattern

---

## Description

Returns all keys matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38
KEYS *         # return all keys
KEYS fleet:*   # return all keys that have the prefix with 'fleet:'
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
**[KEYS](keys.html)**<br>
[PDEL](pdel.html)<br>
[PERSIST](persist.html)<br>
[RENAME](rename.html)<br>
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>