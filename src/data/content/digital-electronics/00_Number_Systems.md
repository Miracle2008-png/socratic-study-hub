# Number Systems and Binary Arithmetic

## Positional Number Systems

$$N = \sum_k d_k \cdot b^k$$

where $b$ = base, $d_k$ = digit at position $k$.

| System | Base | Digits | Prefix |
|--------|------|--------|--------|
| Binary | 2 | 0,1 | 0b |
| Octal | 8 | 0–7 | 0o |
| Decimal | 10 | 0–9 | — |
| Hexadecimal | 16 | 0–9, A–F | 0x |

## Conversion

**Binary → Decimal**: $1011_2 = 1\cdot8 + 0\cdot4 + 1\cdot2 + 1\cdot1 = 11_{10}$

**Decimal → Binary**: Repeated division by 2, read remainders bottom-up.

**Hex ↔ Binary**: Each hex digit = exactly 4 bits.  
$\text{A3}_{16} = 1010\,0011_2$

## Binary Arithmetic

**Addition**: carry when sum $\geq 2$.

**Subtraction via 2's complement**:
1. Invert all bits (1's complement)
2. Add 1
3. Then add: $A - B = A + \overline{B} + 1$

Discard carry-out from MSB for correct result.

## Signed Representations

| Format | Range (8-bit) | $-1$ example |
|--------|--------------|-------------|
| Sign-magnitude | $-127$ to $+127$ | $1000\,0001$ |
| 1's complement | $-127$ to $+127$ | $1111\,1110$ |
| **2's complement** | $-128$ to $+127$ | $1111\,1111$ |

2's complement is universal: single zero, simple arithmetic, MSB weight = $-2^{n-1}$.

## Overflow Detection

In 2's complement addition: overflow occurs if carry into MSB ≠ carry out of MSB.