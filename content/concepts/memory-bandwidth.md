---
title: Memory Bandwidth
description: HBM and cache bandwidth as the inference bottleneck.
tags:
  - concept
---

**Memory bandwidth** often caps transformer inference—especially decode with large [[kv-cache|KV cache]] footprints. Co-design spans [[hardware|hardware]] choices, [[kernels|kernel]] fusion, and [[model|model]] precision.

## Related

- [[concepts/roofline|Roofline]]
- [[layers/hardware|Hardware]]
