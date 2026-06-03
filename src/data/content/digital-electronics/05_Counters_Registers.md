# Counters and Registers

## Asynchronous (Ripple) Counter

T flip-flops chained: each FF triggered by output of previous.

4-bit binary up counter: $Q_0$ toggles every clock, $Q_1$ toggles every 2 clocks, etc.

**Problem**: propagation delay accumulates through chain → glitches at high frequencies.

## Synchronous Counter

All flip-flops clocked simultaneously. Next-state logic computed combinationally.

4-bit synchronous binary up counter:
- $T_0 = 1$ (always)
- $T_1 = Q_0$
- $T_2 = Q_0 Q_1$
- $T_3 = Q_0 Q_1 Q_2$

Carry-lookahead for large counters avoids delay accumulation.

## Modulo-N Counter

Count 0 to $N-1$, then reset. Use: detect when output = $N-1$, reset synchronously.

BCD counter: modulo-10 (counts 0–9).

## Shift Registers

| Type | Serial In | Serial Out | Parallel In | Parallel Out |
|------|-----------|-----------|------------|-------------|
| SISO | ✓ | ✓ | — | — |
| SIPO | ✓ | — | — | ✓ |
| PISO | — | ✓ | ✓ | — |
| PIPO | — | — | ✓ | ✓ |

**Ring counter**: output of last FF fed back to input. One-hot encoding: $n$-bit ring has $n$ states.

**Johnson counter**: inverted output of last FF fed back. $n$-bit Johnson = $2n$ states.

## Applications

Serial-to-parallel conversion (UART receiver), parallel-to-serial (UART transmitter), pseudo-random sequence generation (LFSR), digital delay lines.