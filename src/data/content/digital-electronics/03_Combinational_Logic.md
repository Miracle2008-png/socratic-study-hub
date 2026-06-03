# Combinational Logic Circuits

## Adders

**Half Adder**: inputs A, B; outputs Sum S = A⊕B, Carry C = AB

**Full Adder**: inputs A, B, Cin; outputs:
$$S = A \oplus B \oplus C_{in},\quad C_{out} = AB + C_{in}(A \oplus B)$$

**Ripple Carry Adder**: chain of $n$ full adders. Carry propagates serially → delay = $n \cdot t_{FA}$.

**Carry Lookahead Adder**: Generate $G_i = A_i B_i$, Propagate $P_i = A_i \oplus B_i$.
$$C_{i+1} = G_i + P_i C_i$$

Expand recursively — all carries computed in 2 gate levels, regardless of $n$.

## Multiplexer (MUX)

$2^n$-to-1 MUX with $n$ select lines. Output = input selected by select code.

**Implementing Boolean functions**: route minterms to a MUX.  
Any $n$-variable function using $2^n$-to-1 MUX (connect inputs to 0 or 1).  
Or use $2^{n-1}$-to-1 MUX with one variable on data inputs.

## Decoder

$n$-to-$2^n$ decoder: activates exactly one of $2^n$ outputs for each input code.

**Use as minterm generator**: connect outputs to OR gate to implement any SOP function.

## Encoder and Priority Encoder

Encoder: $2^n$ inputs → $n$-bit code (inverse of decoder). Only one input active at a time.

Priority encoder: multiple inputs may be active; outputs code of highest-priority active input. Also outputs valid-bit V.

## Comparator

1-bit: $A = B$ iff $A \odot B = 1$, $A > B$ iff $A\bar{B}=1$.

4-bit: $A = B$ when all bits equal. $A > B$ checked MSB first.