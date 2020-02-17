---
id: script-load
title: SCRIPT LOAD
sidebar_label: __no_label
---

## Full Syntax

**SCRIPT LOAD  script**

---

## Description

Loads the compiled version of a script into the server cache, without executing.

If the parsing and compilation is successful, the command returns the string value of the SHA1 digest of the script.  That value can be used for [EVALSHA](/commands/evalsha) and similar commands that execute scripts based on the SHA1 digest.

The script will stay in cache until either the tile38 is restarted or [SCRIPT FLUSH](/commands/script-flush) is called.

If either parsing or compilation fails, the command will return the error response with the detailed traceback of the Lua failure.

See [EVAL](/commands/eval) for more details on Lua scripting.

## Related Commands

[EVAL](eval.html)<br>
[EVALNA](evalna.html)<br>
[EVALNASHA](evalnasha.html)<br>
[EVALRO](evalro.html)<br>
[EVALROSHA](evalrosha.html)<br>
[EVALSHA](evalsha.html)<br>
[SCRIPT EXISTS](script-exists.html)<br>
[SCRIPT FLUSH](script-flush.html)<br>
**[SCRIPT LOAD](script-load.html)**<br>