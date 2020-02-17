---
id: readonly
title: READONLY
sidebar_label: __no_label
---

## Full Syntax

**READONLY  yes|no**

---

## Description

Puts the server into readonly mode. While in this mode all commands that change data will fail such as SET and DEL.

## Examples

```tile38-cli
READONLY yes    # turns on readonly mode
READONLY no     # turns off readonly mode
```

## Related Commands

[CONFIG GET](config-get.html)<br>
[CONFIG REWRITE](config-rewrite.html)<br>
[CONFIG SET](config-set.html)<br>
[FLUSHDB](flushdb.html)<br>
[GC](gc.html)<br>
**[READONLY](readonly.html)**<br>
[SERVER](server.html)<br>