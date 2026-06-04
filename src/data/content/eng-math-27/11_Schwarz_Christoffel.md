# 11. The Schwarz-Christoffel Formula

We have used Conformal Mappings to solve fluid flow around circles (Joukowsky) and fluid flow through a single corner ($z^2$).

But what if you are designing a complex microfluidic channel for a chemical plant, and the channel is shaped like a chaotic, multi-cornered polygon (like a zigzagging pipe with 5 different sharp corners)? 
Möbius transformations can only handle circles and single lines. They cannot map a 5-sided polygon into a flat line.

To solve this, Hermann Schwarz and Elwin Bruno Christoffel invented the ultimate geometric sledgehammer.

### The Formula
The Schwarz-Christoffel formula is an integral that mathematically forces ANY closed polygon in the $w$-plane to unfold and lay perfectly flat on the real x-axis of the $z$-plane!

If a polygon has interior angles $\alpha_1, \alpha_2 \dots \alpha_n$ located at vertices $w_1, w_2 \dots w_n$, the transformation that maps the real x-axis ($z$) into the boundary of that polygon is given by:

$$
w = f(z) = A \int (z - x_1)^{-k_1} (z - x_2)^{-k_2} \dots (z - x_n)^{-k_n} \, dz + B
$$

Where:
*   $x_i$ are the points on the real axis that correspond to the corners of the polygon.
*   $k_i = 1 - \frac{\alpha_i}{\pi}$ (The exterior turning angles of the corners).

### How it works geometrically
Think of a car driving along the straight real x-axis in the $z$-plane.
Every time the car hits one of the $x_i$ coordinates, the $(z - x_i)^{-k_i}$ term inside the integral forcefully rotates the car's steering wheel by the exact angle required to form the corner of the polygon! 

By carefully choosing the steering wheel angles ($k_i$) and the times to turn ($x_i$), the integral forces the straight line to bend, snap, and close into a perfect polygon in the $w$-plane.

### The Computational Power
Solving the Schwarz-Christoffel integral by hand is usually impossible. But because it is a rigorous algebraic formula, we can feed it into computers!
Software can use this formula to map the most complex, jagged, asymmetric polygonal boundaries on earth into a perfectly flat, trivial half-plane. 
This allows engineers to instantly simulate heat transfer, electromagnetics, and fluid flow inside any machine part, microchip, or pipe system imaginable, simply by defining its corners!
