---
id: chans
title: CHANS
sidebar_label: __no_label
---

## Full Syntax

**CHANS  pattern**

---

## Description

Returns all channels matching `pattern`.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Examples

```tile38-cli
CHANS *             # return all channels
CHANS warehouse:*   # return all channels that have the prefix with 'warehouse:'
```

## Related Commands

**[CHANS](chans.html)**<br>
[DELCHAN](delchan.html)<br>
[PDELCHAN](pdelchan.html)<br>
[PSUBSCRIBE](psubscribe.html)<br>
[SETCHAN](setchan.html)<br>
[SUBSCRIBE](subscribe.html)<br>