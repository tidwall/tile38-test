---
id: aofshrink
title: AOFSHRINK
sidebar_label: __no_label
---

## Full Syntax

AOFSHRINK

---

## Description

Shrinks the aof in the background. If AOFSHRINK fails, no data is lost as the original AOF will be untouched.
The shrink will only be triggered by Tile38 if there is not a shrink in process.

## Examples

```tile38
AOFSHRINK
```

## Related Commands

[AOF](aof.html)<br>
[AOFMD5](aofmd5.html)<br>
**[AOFSHRINK](aofshrink.html)**<br>
[FOLLOW](follow.html)<br>