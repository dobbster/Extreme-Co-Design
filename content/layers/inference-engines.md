---
title: Inference Engines
description: Backends, batching, and KV management at serving time.
tags:
  - layer/inference-engines
---

**How are batches, KV cache, and backends composed at serving time?**

Inference engines implement continuous batching, paged [[concepts/kv-cache|KV cache]], speculative paths, and backend plugins. They sit between [[compilers-and-runtimes|compiler/runtime]] output and [[distributed-orchestration|fleet-scale orchestration]].

## Neighbors

- Lowering: [[compilers-and-runtimes|Compilers & runtimes]]
- Fleet scale: [[distributed-orchestration|Distributed orchestration]]
- Time sharing: [[scheduling|Scheduling]]
- Model contract: [[model|Model]]
- Thesis: [[index|Extreme Co-Design]]
