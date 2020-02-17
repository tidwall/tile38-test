---
id: get
title: GET
sidebar_label: GET
---

## Full Syntax

**GET  key id [WITHFIELDS] [OBJECT|POINT|BOUNDS|(HASH geohash)]**

---

## Description

Get the object of an id. The default output format is a GeoJSON object.

Output formats:

- **OBJECT**: A [GeoJSON](http://geojson.org/) object.
- **POINT**: A standard latitude, longitude point.
- **BOUNDS**: A [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle). 
- **HASH**: A [Geohash](https://en.wikipedia.org/wiki/Geohash).

A Geohash requires a precision of 1 to 22.

The **WITHFIELDS** option will also return the [fields](/commands/set#fields) that belong to the object.
Field values that are equal to zero are omitted.

## Examples

```tile38-cli
GET fleet truck1          # get geojson object 'truck1' from 'fleet'
GET fleet truck1 OBJECT   # same as above
GET fleet truck1 POINT    # get latitude, longitude point
GET fleet truck1 BOUNDS   # get bounding rectangle
GET fleet truck1 HASH 5   # get geohash with precision of 5
```

## Related Commands

[BOUNDS](bounds.html)<br>
[DEL](del.html)<br>
[DROP](drop.html)<br>
[EXPIRE](expire.html)<br>
[FSET](fset.html)<br>
**[GET](get.html)**<br>
[JDEL](jdel.html)<br>
[JGET](jget.html)<br>
[JSET](jset.html)<br>
[KEYS](keys.html)<br>
[PDEL](pdel.html)<br>
[PERSIST](persist.html)<br>
[RENAME](rename.html)<br>
[RENAMENX](renamenx.html)<br>
[SET](set.html)<br>
[STATS](stats.html)<br>
[TTL](ttl.html)<br>