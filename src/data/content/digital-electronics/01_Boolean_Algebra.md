# Boolean Algebra

## Axioms

$$0 + 0 = 0,\quad 1 + 1 = 1,\quad 0 \cdot 1 = 0,\quad \bar{0} = 1,\quad \bar{1} = 0$$

## Key Theorems

| Identity law | $A + 0 = A$, $A \cdot 1 = A$ |
|---|---|
| Null law | $A + 1 = 1$, $A \cdot 0 = 0$ |
| Idempotent | $A + A = A$, $A \cdot A = A$ |
| Complement | $A + \bar{A} = 1$, $A \cdot \bar{A} = 0$ |
| Absorption | $A + AB = A$, $A(A+B) = A$ |
| Consensus | $AB + \bar{A}C + BC = AB + \bar{A}C$ |

## DeMorgan's Theorems

$$\overline{A + B} = \bar{A}\cdot\bar{B}\quad\text{(NOR = AND of complements)}$$
$$\overline{A \cdot B} = \bar{A} + \bar{B}\quad\text{(NAND = OR of complements)}$$

To apply: **break the bar, change the operation**.

## Canonical Forms

**Minterm** $m_i$: AND of all variables (complemented if 0). $f = 1$ for this input.

**Maxterm** $M_i$: OR of all variables (complemented if 1). $f = 0$ for this input.

$$f = \sum m(\text{minterms where } f=1) = \prod M(\text{maxterms where } f=0)$$

**SOP (Sum of Products)**: OR of AND terms. From minterms.  
**POS (Product of Sums)**: AND of OR terms. From maxterms.

## Duality

Swap AND↔OR and 0↔1: any theorem remains valid.