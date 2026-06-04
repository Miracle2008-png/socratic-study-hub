# 4. Fault Tree Analysis

**Fault Tree Analysis (FTA)** is a top-down deductive reliability method. Starting from an undesired **Top Event** (e.g., "Aircraft engine fails") it systematically identifies all combinations of lower-level component failures and events that can cause it. The result is a directed tree of logic gates.

### Fault Tree Gates

**AND Gate:** The output event (parent) occurs only if ALL input events (children) occur simultaneously. Symbolized by a flat-bottomed gate shape.

**OR Gate:** The output event occurs if ANY ONE of the input events occurs. Symbolized by a curved-bottomed gate shape.

**Basic Event:** A primary failure event at the bottom of the tree — requires no further decomposition. Usually a component-level failure with a known probability.

**Undeveloped Event:** An event that is not expanded further (usually because data is unavailable or the event is beyond scope).

### Fault Tree Probability Calculation
For statistically independent basic events:

**AND gate probability:**
$$P(\text{output}) = \prod_i P(\text{input}_i)$$

**OR gate probability (exact):**
$$P(\text{output}) = 1 - \prod_i [1 - P(\text{input}_i)]$$

**OR gate probability (rare-event approximation):** When all input probabilities are small ($p_i \ll 1$):
$$P(\text{output}) \approx \sum_i P(\text{input}_i)$$

This approximation is accurate to first order and avoids the compound product.

### Minimal Cut Sets
A **Minimal Cut Set (MCS)** is the smallest set of basic events whose simultaneous occurrence causes the top event. Finding all MCSs is the mathematical core of FTA.

The top event probability is approximated by the rare-event approximation summing over MCSs:
$$P(\text{Top}) \approx \sum_{\text{MCS}_j} P(\text{all events in MCS}_j \text{ occur})$$

### Worked Example: Pump Failure System
Top event: "Pump system fails to deliver water."
*   OR gate: (Pump A fails) OR (Power supply fails) OR (Both valve V1 AND valve V2 fail).
*   AND gate (valve subsystem): (V1 fails) AND (V2 fails).

Given: $P(\text{Pump A}) = 0.02$, $P(\text{Power}) = 0.005$, $P(\text{V1}) = P(\text{V2}) = 0.1$.

$P(\text{Valves}) = P(\text{V1}) \times P(\text{V2}) = 0.01$ (AND gate)

$P(\text{Top}) \approx 0.02 + 0.005 + 0.01 = \mathbf{0.035}$ (OR gate, rare-event approximation)

The pump failure contributes 57% of the total system failure probability — the highest-priority target for reliability improvement.
