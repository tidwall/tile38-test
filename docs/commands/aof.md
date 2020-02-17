---
id: aof
title: AOF
sidebar_label: __no_label
---

## Full Syntax

**AOF  pos**

---

## Description

Downloads the AOF starting from pos and keeps the connection alive.  All data that is written to the AOF will also be written to the connection. This command is used for leader-follower replication.

## Examples

```tile38-cli
AOF 12236598
```

## Related Commands

**[AOF](aof.html)**<br>
[AOFMD5](aofmd5.html)<br>
[AOFSHRINK](aofshrink.html)<br>
[FOLLOW](follow.html)<br>