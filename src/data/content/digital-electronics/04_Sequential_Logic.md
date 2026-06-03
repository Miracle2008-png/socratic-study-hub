# Sequential Logic

## Latches

**SR Latch** (NOR-based): Set=1,Reset=0 → Q=1; Set=0,Reset=1 → Q=0; Both 0 → hold; Both 1 → forbidden.

**D Latch** (transparent): When Enable=1, Q follows D. When Enable=0, holds last value.

## Flip-Flops (Edge-Triggered)

Captures input only at clock edge — eliminates transparency issues.

### D Flip-Flop
$Q^+ = D$ on rising clock edge. Most common. Characteristic equation: $Q^+(t+1) = D(t)$.

### JK Flip-Flop
$J=1,K=0$: Set. $J=0,K=1$: Reset. $J=K=0$: Hold. $J=K=1$: Toggle.
$$Q^+ = J\bar{Q} + \bar{K}Q$$

### T Flip-Flop
$T=0$: hold. $T=1$: toggle. $Q^+ = T \oplus Q$. Used in counters.

## Timing Parameters

**Setup time** $t_{su}$: D must be stable before clock edge.  
**Hold time** $t_h$: D must remain stable after clock edge.  
**Propagation delay** $t_{pQ}$: clock edge to output change.

**Maximum clock frequency**: $f_{max} = 1/(t_{pQ} + t_{su} + t_{slack})$

## State Machine Design

1. Define states and state diagram
2. Binary encoding of states
3. Derive next-state equations from excitation table
4. Implement with flip-flops and combinational logic
5. Handle reset/unused states