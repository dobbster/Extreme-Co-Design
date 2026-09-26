---
title: Hardware
description: Silicon, memory hierarchy, and interconnect for inference.
tags:
  - layer/hardware
---

**What compute, memory, and interconnect does inference actually run on?**

Hardware sets the hard limits: FLOPs, [[concepts/memory-bandwidth|memory bandwidth]], on-chip SRAM, NVLink/PCIe topology, and power envelopes. Kernel and engine choices that ignore these limits leave performance on the table.

## Neighbors

- Upstream fleet context: [[data-center|Data center]]
- Where operators land: [[kernels|Kernels]]
- Thesis: [[index|Extreme Co-Design]]

## References

- [[references/jensen-huang-extreme-co-design|Jensen Huang on extreme co-design]]
