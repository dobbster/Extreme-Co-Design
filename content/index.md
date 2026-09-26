---
title: Extreme Co-Design
description: Inferencing optimized across the full stack—from silicon to API.
tags:
  - thesis
---

**Extreme co-design** is the practice of optimizing inference by designing across boundaries: [[layers/hardware|hardware]] and the [[layers/data-center|data center]], [[layers/kernels|kernels]] and [[layers/compilers-and-runtimes|compilers/runtimes]], [[layers/inference-engines|inference engines]], [[layers/distributed-orchestration|distributed orchestration]], [[layers/scheduling|scheduling]], the [[layers/model|model]], and the [[layers/api|API]]. No layer is “done” in isolation; latency, throughput, and cost are properties of the whole system.

> [!note] Stack map
> Open the authored overview on [[extreme-co-design.canvas|the stack canvas]], then follow wikilinks into layer notes, [[concepts/roofline|concepts]], and [[references/jensen-huang-extreme-co-design|references]].

## Layers

| Layer | Question it answers |
| --- | --- |
| [[layers/hardware|Hardware]] | What compute, memory, and interconnect does inference actually run on? |
| [[layers/data-center|Data center]] | How is power, cooling, networking, and fleet topology shaped for GPU inference? |
| [[layers/kernels|Kernels]] | How are operators mapped to SMs, memory hierarchy, and collectives? |
| [[layers/compilers-and-runtimes|Compilers & runtimes]] | How does the stack lower graphs to kernels and manage memory lifetime? |
| [[layers/inference-engines|Inference engines]] | How are batches, KV cache, and backends composed at serving time? |
| [[layers/distributed-orchestration|Distributed orchestration]] | How do replicas, shards, and pipelines span nodes? |
| [[layers/scheduling|Scheduling]] | Who gets the GPU when, under which [[concepts/slo|SLOs]] and load shapes? |
| [[layers/model|Model]] | How do architecture and quantization change the hardware contract? |
| [[layers/api|API]] | What does the client see—and what constraints flow back down the stack? |

## Cross-cutting concepts

- [[concepts/roofline|Roofline]] · [[concepts/memory-bandwidth|Memory bandwidth]] · [[concepts/kv-cache|KV cache]]
- [[concepts/goodput|Goodput]] · [[concepts/slo|SLO]] · [[concepts/prefill-decode-split|Prefill / decode split]]
