---
id: within
title: WITHIN
sidebar_label: WITHIN
---

## Full Syntax

**WITHIN  key [CURSOR start] [LIMIT count] [SPARSE spread] [MATCH pattern] [WHERE field min max ...] [WHEREIN field count value [value...] ...] [WHEREEVAL script numargs arg [arg...] ...] [WHEREEVALSHA sha1 numargs arg [arg...] ...] [NOFIELDS] [FENCE] [DETECT what] [COMMANDS which] [COUNT|IDS|OBJECTS|POINTS|BOUNDS|(HASHES precision)] (GET key id)|(BOUNDS minlat minlon maxlat maxlon)|(OBJECT geojson)|(CIRCLE lat lon meters)|(TILE x y z)|(QUADKEY quadkey)|(HASH geohash)**

---

## Description

WITHIN searches a collection for objects that are fully contained inside of a specified bounding area. 

[WITHIN](/commands/within) and [INTERSECTS](/commands/intersects) have identical syntax. The only difference between the two is that WITHIN returns objects that are *contained* inside an area, and intersects returns objects that are *contained or intersects* an area.

This command has many options, but at it’s most simplest it may appear like.

```tile38-cli
WITHIN fleet BOUNDS 33.462 -112.268 33.491 -112.245
```

Above is a search around the rectangle with the southwestern point `33.462,-112.268` and the northeastern point `33.491,-112.245`. A list of all objects that are fully contained inside the rectangle are returned.

## Search Options

For a complete list of search options please see the [INTERSECTS](/commands/intersects#search-options) command.

## Output Formats

For a complete list of output formats please see the [INTERSECTS](/commands/intersects#output-formats) command.

## Area Formats

For a complete list of area formats please see the [INTERSECTS](/commands/intersects#area-formats) command.

## Related Commands

[INTERSECTS](intersects.html)<br>
[NEARBY](nearby.html)<br>
[SCAN](scan.html)<br>
[SEARCH](search.html)<br>
**[WITHIN](within.html)**<br>