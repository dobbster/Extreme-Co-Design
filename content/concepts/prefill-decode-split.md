---
title: Prefill / Decode Split
description: Different compute and memory profiles for prompt vs token generation.
tags:
  - concept
---

**Prefill** (processing the prompt) is often compute-heavy and batch-friendly; **decode** (generating tokens) is memory-bandwidth sensitive with growing [[kv-cache|KV cache]]. Treating them as one workload hides co-design opportunities—disaggregation, separate [[scheduling|scheduling]], and distinct [[kernels|kernels]].

## Related

- [[layers/scheduling|Scheduling]]
- [[concepts/kv-cache|KV cache]]
