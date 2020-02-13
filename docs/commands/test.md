---
id: test
title: TEST
sidebar_label: __no_label
---

## Full Syntax

TEST area1 test CLIP area2

---

## Description

The TEST command performs tests on given objects, without searching through the data.

```tile38
TEST a WITHIN b
```

returns 1 if `a` is within `b`, and 0 otherwise.

```tile38
TEST a INTERSECTS b
```

returns 1 if `a` intersects `b`, and 0 otherwise.

In the examples above, both `a` and `b` can be any of these types: `POINT`, `GET`, `BOUNDS`, `OBJECT`, `CIRCLE`, `TILE`, `QUADKEY`, `HASH`.

```tile38
TEST a INTERSECTS CLIP b
```

returns 1 if `a` intersects `b`, and 0 otherwise.  If the result is 1, then it also returns `a` clipped by `b`. This only works when `b` is one of these types: `BOUNDS`, `TILE`, `QUADKEY`, `HASH`.

## Related Commands

**[TEST](test.html)**<br>