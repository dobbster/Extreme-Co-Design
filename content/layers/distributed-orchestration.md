---
title: Distributed Orchestration
description: Replicas, sharding, and pipelines across nodes.
tags:
  - layer/distributed
---

**How do replicas, shards, and pipelines span nodes?**

Orchestration decides tensor parallel width, pipeline stages, disaggregated prefill/decode, and failover—constrained by [[data-center|data center]] networking and [[scheduling|scheduling]] policy.

## Neighbors

- Engine surface: [[inference-engines|Inference engines]]
- GPU allocation: [[scheduling|Scheduling]]
- Thesis: [[index|Extreme Co-Design]]
