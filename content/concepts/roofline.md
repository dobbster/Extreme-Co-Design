---
title: Roofline
description: Visual model of compute vs memory bandwidth limits.
tags:
  - concept
---

The **roofline model** ties peak FLOPs and [[memory-bandwidth|memory bandwidth]] to attainable performance for a given arithmetic intensity. It is the first sanity check when tuning [[kernels|kernels]] or explaining why a [[model|model]] is memory-bound at small batch sizes.

## Related

- [[layers/kernels|Kernels]]
- [[concepts/memory-bandwidth|Memory bandwidth]]
