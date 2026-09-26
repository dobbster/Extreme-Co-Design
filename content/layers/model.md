---
title: Model
description: Architecture, precision, and structure that set the inference workload.
tags:
  - layer/model
---

**How do architecture and quantization change the hardware contract?**

Model depth, attention patterns, MoE routing, and precision drive [[kernels|kernel]] choice and [[inference-engines|engine]] memory plans—co-design starts when architecture is chosen, not after deployment.

## Neighbors

- Operator mapping: [[kernels|Kernels]]
- Serving: [[inference-engines|Inference engines]]
- Thesis: [[index|Extreme Co-Design]]

## Concepts

- [[concepts/kv-cache|KV cache]]
