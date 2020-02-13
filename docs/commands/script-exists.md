---
id: script-exists
title: SCRIPT EXISTS
sidebar_label: __no_label
---

## Full Syntax

SCRIPT EXISTS sha1

---

## Description

Returns information about the existence of the scripts in server cache.

This command takes one or more SHA1 digests and returns a list of one/zero integer values to indicate whether or not each SHA1 exists in the server script cache.

Scripts are cached using the [SCRIPT LOAD](/commands/script-load) command.

See [EVAL](/commands/eval) for more details on Lua scripting.

## Related Commands

[EVAL](eval.html)<br>
[EVALNA](evalna.html)<br>
[EVALNASHA](evalnasha.html)<br>
[EVALRO](evalro.html)<br>
[EVALROSHA](evalrosha.html)<br>
[EVALSHA](evalsha.html)<br>
**[SCRIPT EXISTS](script-exists.html)**<br>
[SCRIPT FLUSH](script-flush.html)<br>
[SCRIPT LOAD](script-load.html)<br>