---
id: config-set
title: CONFIG SET
sidebar_label: __no_label
---

## Full Syntax

**CONFIG SET  parameter [value]**

---

## Description

The CONFIG SET command is used to set special configuration properties.  These properties will not persist until the [CONFIG REWRITE](/commands/config-rewrite) is called.

## Examples
```tile38
CONFIG SET requirepass mypass   # set a password for the AUTH command.
```

## Related Commands

[CONFIG GET](config-get.html)<br>
[CONFIG REWRITE](config-rewrite.html)<br>
**[CONFIG SET](config-set.html)**<br>
[FLUSHDB](flushdb.html)<br>
[GC](gc.html)<br>
[READONLY](readonly.html)<br>
[SERVER](server.html)<br>