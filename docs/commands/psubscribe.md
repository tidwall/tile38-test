---
id: psubscribe
title: PSUBSCRIBE
sidebar_label: __no_label
---

## Full Syntax

PSUBSCRIBE pattern

---

## Description

Subscribes the client to the given patterns.

Supported [glob-style patterns](https://en.wikipedia.org/wiki/Glob_(programming)):

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

## Related Commands

[CHANS](chans.html)<br>
[DELCHAN](delchan.html)<br>
[PDELCHAN](pdelchan.html)<br>
**[PSUBSCRIBE](psubscribe.html)**<br>
[SETCHAN](setchan.html)<br>
[SUBSCRIBE](subscribe.html)<br>