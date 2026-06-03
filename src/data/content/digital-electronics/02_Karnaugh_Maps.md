# Karnaugh Maps

## Purpose

Systematic graphical method for Boolean minimisation. Minimises SOP or POS by grouping adjacent minterms.

## Structure

Cells arranged so adjacent cells differ by exactly one variable (Gray code ordering).

**2-variable (4 cells)**: trivial.  
**3-variable (8 cells)**: 2×4 grid.  
**4-variable (16 cells)**: 4×4 grid. Edges wrap around (torus topology).

## Grouping Rules

- Groups must be powers of 2: 1, 2, 4, 8, 16
- Groups must be rectangular (including wrap-around)
- Larger groups = fewer literals
- **Prime implicant**: largest possible group
- **Essential prime implicant**: covers a minterm not covered by any other prime implicant

## Minimisation Procedure

1. Mark all minterms (1-cells)
2. Find all prime implicants
3. Identify essential prime implicants (must include)
4. Cover remaining minterms with fewest additional prime implicants
5. Write SOP: one AND term per group, omit variables that change within the group

## Don't Care Conditions

Cells marked X can be grouped or not — choose to maximise group sizes.

## Example: 4-variable

$f(A,B,C,D) = \sum m(0,1,3,7,8,9,11,15)$

Groups: $\{0,1,8,9\}$ → $\bar{B}\bar{C}$; $\{1,3,9,11\}$ → $\bar{B}D$; $\{3,7,11,15\}$ → $CD$

Minimal SOP: $f = \bar{B}\bar{C} + \bar{B}D + CD$