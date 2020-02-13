---
id: stats
title: STATS
sidebar_label: __no_label
---

## Full Syntax

STATS key

---

## Description

Return stats for one or more keys.

## Examples

```tile38
STATS fleet1 fleet2   # return key stats for 'fleet' and 'fleet2'
```


## Returns 

The `stats` array will contain one entry for each key requested. If the key is not found then the entry will be `null`.

- `in_memory_size`: The estimated memory size in bytes that the key is using.
- `num_objects`: The object count.
- `num_points`: The total number of latitude, longitude coordinates in the key. This will always be equal to or greater than `num_objects`.


```tile38-json
{
    "ok": true,
    "stats": [{
        "in_memory_size": 4823028,
        "num_objects": 26343,
        "num_points": 350929,
    },{
        "in_memory_size": 36552218,
        "num_objects": 162341,
        "num_points": 1029938
    }],
    "elapsed": "27.677µs"
}
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
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
**[STATS](stats.html)**<br>
[TTL](ttl.html)<br>