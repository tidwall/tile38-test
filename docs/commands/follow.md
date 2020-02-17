---
id: follow
title: FOLLOW
sidebar_label: __no_label
---

## Full Syntax

**FOLLOW  host port**

---

## Description

The FOLLOW command instructs the Tile38 server to follow a leader and replicated the leader's data.

## Examples

```tile38-cli
FOLLOW 10.0.1.15 9851     # Follow a leader at 10.0.1.15, port: 9851
FOLLOW no one             # Stop following
```

## Related Commands

[AOF](aof.html)<br>
[AOFMD5](aofmd5.html)<br>
[AOFSHRINK](aofshrink.html)<br>
**[FOLLOW](follow.html)**<br>