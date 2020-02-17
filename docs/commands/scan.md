---
id: scan
title: SCAN
sidebar_label: __no_label
---

## Full Syntax

**SCAN  key [CURSOR start] [LIMIT count] [MATCH pattern] [ASC|DESC] [WHERE field min max ...] [WHEREIN field count value [value...] ...] [WHEREEVAL script numargs arg [arg...] ...] [WHEREEVALSHA sha1 numargs arg [arg...] ...] [NOFIELDS] [COUNT|IDS|OBJECTS|POINTS|BOUNDS|(HASHES precision)]**

---

## Description

SCAN incrementally iterates though a key.

This command has many options, but at it’s most simplest it may appear like.

```tile38
SCAN fleet
```

Above is a scan for all object in the `fleet` key.

## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

*Please note that the [SCAN](/commands/scan) command does not allow `FENCE` and `SPARSE`.*

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.

## Related Commands

[INTERSECTS](intersects.html)<br>
[NEARBY](nearby.html)<br>
**[SCAN](scan.html)**<br>
[SEARCH](search.html)<br>
[WITHIN](within.html)<br>