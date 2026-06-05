# Simple Trusses

A **truss** is one of the most common and efficient structural forms used in engineering, prevalent in bridges, roof supports, and cranes. It consists of straight, slender members connected at their extremities.

## 1. Assumptions for Truss Analysis

To simplify the mathematical modeling of a real-world truss into an ideal "simple truss," two fundamental assumptions are made:

1. **All loadings are applied at the joints.** 
   - We do not apply loads directly to the middle of a member. If a floor or deck rests on a truss, the structure is designed to transmit that weight strictly to the joint nodes. The weight of the truss members themselves is often neglected, or split equally and applied to the two joints the member connects.
2. **The members are joined together by smooth pins.**
   - Even though modern trusses are often welded or bolted together using large gusset plates (which restricts rotation), assuming smooth pins is a very accurate approximation provided the centerlines of the joining members intersect at a common point.

## 2. Two-Force Members

Because loads are only applied at the ends of the members (the pins), and the pins are frictionless, every single member in an ideal truss is a **two-force member**.

A two-force member must be in equilibrium under the action of only two forces (one at each end). Therefore, these forces must be equal, opposite, and collinear. This means the force is directed exactly along the axis of the member.

A truss member is either in:
- **Tension (T):** The forces pull outward on the member, stretching it. On the joint FBD, the force points *away* from the joint.
- **Compression (C):** The forces push inward on the member, squashing it. On the joint FBD, the force points *towards* the joint.

## 3. Formation of a Simple Truss

A stable geometric framework must not collapse under a load.
- Four members pinned in a square form a completely unstable mechanism; it will collapse into a parallelogram.
- Three members pinned in a triangle form a perfectly rigid, stable framework.

A **simple truss** is constructed by starting with a basic triangular element and adding two new members for every new joint. Because it is built entirely from rigid triangles, the entire structure is completely rigid.

### Determinacy and Stability
For a simple, fully triangulated planar truss, the relationship between the number of members $m$ and the number of joints $j$ is strictly:
$$ m = 2j - 3 $$
If $m = 2j - 3$, the truss is statically determinate internally. If $m > 2j - 3$, it is statically indeterminate (over-constrained). If $m < 2j - 3$, it is physically unstable.
