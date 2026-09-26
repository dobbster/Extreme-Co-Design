---
title: Kernels
description: Operator implementations on the GPU memory hierarchy.
tags:
  - layer/kernels
---

**How are operators mapped to SMs, memory hierarchy, and collectives?**

Kernels are where the [[concepts/roofline|roofline]] meets reality: fusion, tiling, tensor cores, and communication overlap determine whether the [[model|model]] is compute- or memory-bound at a given batch shape.

## Neighbors

- Silicon: [[hardware|Hardware]]
- Lowering target: [[compilers-and-runtimes|Compilers & runtimes]]
- Architecture pressure: [[model|Model]]
- Thesis: [[index|Extreme Co-Design]]

## Concepts

- [[concepts/roofline|Roofline]]
- [[concepts/memory-bandwidth|Memory bandwidth]]
- [[concepts/kv-cache|KV cache]]
