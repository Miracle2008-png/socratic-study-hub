# Frames and Multi-Part Structures

While trusses are composed entirely of two-force members (carrying only tension and compression), most real-world structures must support loads applied perpendicularly to their members. These are **multi-force members**, and structures containing them are classified as **frames** or **machines**.

## 1. What is a Frame?

A **frame** is a stationary structure designed to support applied loads. Because it contains at least one multi-force member (a member acted upon by three or more forces, or forces that are not collinear), the members in a frame are subjected to bending and shear in addition to axial forces.

Because bending is involved, the line of action of the forces acting at the joints of a frame member are *not* known simply by looking at the geometry of the member. You cannot assume the forces act along the axis of the member as you do in a truss.

## 2. Multi-Force Members

A multi-force member has forces applied at more than two points, or has a combination of point loads, distributed loads, and couple moments applied to it.

When analyzing a pinned joint connecting a multi-force member, the pin exerts a force on the member of unknown magnitude and unknown direction. We represent this in a Free-Body Diagram by resolving it into two independent rectangular components: $A_x$ and $A_y$.

## 3. Disassembling a Frame

The analysis of a frame relies entirely on disassembling the structure and drawing free-body diagrams of the individual members.

1. **Newton's Third Law:** When two members are pinned together at a joint (e.g., joint B), and you disassemble them for analysis, the force that member 1 exerts on member 2 must be drawn as equal and opposite to the force member 2 exerts on member 1. 
   - On Member 1: Draw $B_x$ pointing right, $B_y$ pointing up.
   - On Member 2: You **must** draw $B_x$ pointing left, $B_y$ pointing down.
   - The choice of direction for the very first member is arbitrary, but the opposite direction on the connecting member is mathematically mandatory.

2. **Identifying Two-Force Members in a Frame:** Even in a frame, some members might happen to be two-force members. Recognizing them before starting the analysis is a massive shortcut. If a member is pinned at both ends and carries no loads or moments between the pins, it is a two-force member. Its force acts entirely along its axis. You can replace the $x$ and $y$ components at its pins with a single force vector aligned with the member.
