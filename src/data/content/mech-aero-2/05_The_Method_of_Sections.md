# The Method of Sections

The Method of Joints is tedious if you only need to find the force in one or two specific members located deep in the middle of a large truss. You would have to calculate every joint from the support inward.

The **Method of Sections** is a powerful shortcut. It relies on the principle that if a body is in equilibrium, then *any portion* of the body must also be in equilibrium.

## 1. Analytical Procedure

1. **Find Global Reactions:** (Often required). Treat the entire truss as a rigid body and find the external support reactions.
2. **Make a Conceptual Cut:** Pass an imaginary section line completely through the truss, cutting the member(s) whose forces you wish to find. 
   - *Rule of thumb:* Try not to cut through more than three members with unknown forces, because you only have three equilibrium equations available for a 2D section.
3. **Isolate One Half:** Choose to analyze either the left portion or the right portion of the cut truss (whichever has fewer external loads). Draw a Free-Body Diagram of this isolated portion.
4. **Expose Internal Forces:** Where the conceptual cut sliced through the members, those internal forces are now exposed as *external forces* acting on the isolated portion. Draw them as vectors. (Again, assuming tension—pulling away from the cut—is best practice).
5. **Apply Equilibrium Equations:** You are now analyzing a rigid body, not a particle. You have three equations available:
   $$ \sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_O = 0 $$
   Apply these equations to solve for the unknown cut member forces.

## 2. Strategic Summation of Moments

The true power of the Method of Sections lies in the strategic choice of the moment center $O$. 

If you cut three members (let's call the unknowns $F_1, F_2, F_3$), the lines of action of two of those members will almost always intersect at some point $O$ (even if that point is off the physical structure).

If you sum moments about that intersection point $O$:
$$ \sum M_O = 0 $$
The moments of the two intersecting unknown forces are zero (their moment arms are zero). This leaves an equation with only *one unknown*—the third force. You can solve for it directly in one step, without solving a system of simultaneous equations.

## 3. Example

You need the force in the top chord member CD of a bridge truss. 
1. Cut through CD, the diagonal CE, and the bottom chord BE.
2. Isolate the left side of the truss.
3. The lines of action for CE and BE intersect at joint E.
4. Sum moments about point E: $\sum M_E = 0$. 
5. The only unknowns in this equation are $F_{CD}$ and the known external loads/reactions. Solve for $F_{CD}$ directly.
