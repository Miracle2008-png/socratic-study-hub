# Design of Columns for Concentric Loading

The ultimate goal of studying column buckling is to design safe, reliable structural members. Because ideal mathematical columns do not exist in the real world (there are always residual stresses, slight bows, and accidental eccentricities), we cannot rely purely on Euler's equation.

Instead, we rely on **empirical design formulas** published by professional engineering organizations like the American Institute of Steel Construction (AISC) or the Aluminum Association. These formulas are heavily based on experimental laboratory data.

## 1. The Transition Slenderness Ratio ($C_c$)

Design codes divide all columns into two distinct categories: **Long (Elastic)** and **Intermediate/Short (Inelastic)**.

The boundary between these two categories is marked by a specific slenderness ratio, usually denoted as $C_c$.
For structural steel, this transition point is typically around an $KL/r$ ratio of $100$ to $120$.

*   If $KL/r > C_c$: The column is considered long. It will fail via elastic buckling.
*   If $KL/r < C_c$: The column is considered intermediate or short. It will fail via inelastic buckling or simple crushing.

## 2. AISC Allowable Stress Design (ASD) Formulas

The AISC provides specific formulas to calculate the maximum **Allowable Stress ($\sigma_{allow}$)** for a steel column. 
You calculate your effective slenderness ratio ($KL/r$) and choose the correct formula:

**For Long Columns ($KL/r \ge C_c$):**
The allowable stress is based directly on Euler's formula, divided by a heavy Factor of Safety ($FS \approx 1.92$).
$$ \sigma_{allow} = \frac{12 \pi^2 E}{23 (KL/r)^2} $$

**For Intermediate Columns ($KL/r < C_c$):**
The allowable stress is based on a parabolic equation that empirically models the effects of inelastic yielding and residual stresses left over from the steel rolling process.
The formula bridges the gap between pure yielding ($\sigma_Y$) at $L/r=0$ and the Euler curve at $L/r = C_c$. It also uses a sliding, variable Factor of Safety that increases as the column gets longer.

## 3. The Iterative Design Process

Designing a column is an inherently iterative process because you don't know the geometric properties ($A, r$) until you pick a cross-section, but you don't know which cross-section to pick until you know the required allowable stress.

1.  **Assume an Allowable Stress:** Make a completely blind guess for $\sigma_{allow}$ (e.g., guess 100 MPa).
2.  **Calculate Required Area:** $A_{req} = P_{applied} / \sigma_{guess}$.
3.  **Select a Section:** Go to an engineering handbook and pick a standard W-beam or steel tube that has an area at least as big as $A_{req}$.
4.  **Find Actual Properties:** Look up the exact Area ($A$) and Radius of Gyration ($r$) for the specific section you just chose. (Always use the *minimum* $r$, usually $r_y$, because a column will always buckle in its weakest direction).
5.  **Calculate True Allowable Stress:** Calculate the actual $KL/r$ for your chosen section. Use the AISC formulas to calculate the true $\sigma_{allow}$.
6.  **Verify:** Check if your applied stress ($P/A_{actual}$) is less than or equal to the true $\sigma_{allow}$.
    *   If $P/A > \sigma_{allow}$, the column will fail. You must pick a heavier section and repeat from Step 4.
    *   If $P/A \ll \sigma_{allow}$, the column is massively over-designed and too heavy/expensive. Pick a lighter section and repeat.
    *   If they are close ($P/A \approx \sigma_{allow}$), the design is optimal.
