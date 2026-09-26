---
title: Scheduling
description: Allocation, queuing, and SLO-aware placement of inference work.
tags:
  - layer/scheduling
---

**Who gets the GPU when, under which SLOs and load shapes?**

Scheduling connects [[api|API]]-level demand to [[inference-engines|engines]] and [[distributed-orchestration|orchestration]]: queueing disciplines, priority, autoscaling, and the [[prefill-decode-split|prefill/decode split]] all show up here as measurable [[goodput|goodput]].

## Neighbors

- Engines: [[inference-engines|Inference engines]]
- Fleet: [[distributed-orchestration|Distributed orchestration]]
- Client contract: [[api|API]]
- Thesis: [[index|Extreme Co-Design]]

## Concepts

- [[concepts/slo|SLO]]
- [[concepts/prefill-decode-split|Prefill / decode split]]
- [[concepts/goodput|Goodput]]
