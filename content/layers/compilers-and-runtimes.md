---
title: Compilers and Runtimes
description: Graph lowering, memory planning, and runtime services.
tags:
  - layer/compilers
---

**How does the stack lower graphs to kernels and manage memory lifetime?**

Compilers and runtimes bridge framework graphs and hand-tuned [[kernels|kernels]]: fusion decisions, allocator behavior, and custom op dispatch directly affect [[inference-engines|inference engine]] latency.

## Neighbors

- Kernel target: [[kernels|Kernels]]
- Serving composition: [[inference-engines|Inference engines]]
- Thesis: [[index|Extreme Co-Design]]
