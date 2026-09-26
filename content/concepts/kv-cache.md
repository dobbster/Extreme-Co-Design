---
title: KV Cache
description: Stored keys and values for autoregressive attention.
tags:
  - concept
---

The **KV cache** grows with sequence length and batch size; it dominates memory for long contexts and drives paging, offloading, and disaggregated serving in [[inference-engines|inference engines]].

## Related

- [[layers/model|Model]]
- [[layers/inference-engines|Inference engines]]
- [[concepts/prefill-decode-split|Prefill / decode split]]
