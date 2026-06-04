# 9. Applications in Electrostatics

In electrostatics, the voltage (Electric Potential) in empty space perfectly obeys Laplace's equation ($\nabla^2 V = 0$). 
Because it is a Harmonic function, we can use Conformal Mappings to solve complex electrical engineering problems!

### The Two Parallel Plates (The Capacitor)
The absolute easiest electrostatic problem in the universe is the parallel plate capacitor.
You have two infinite, flat, perfectly parallel metal plates. 
*   The top plate ($v = \pi$) is held at a high voltage: $V = 100$ Volts.
*   The bottom plate ($v = 0$) is grounded: $V = 0$ Volts.

Because the plates are perfectly infinite and parallel, the voltage simply drops linearly between them.
The solution is trivial: $V(u,v) = \frac{100}{\pi} v$.
The Equipotential lines (lines of constant voltage) are perfectly straight horizontal lines. 
The Electric Field lines (the force vectors pushing the electrons) are perfectly straight vertical lines.

### The Warped Capacitor (The Two Cylinders)
What if an engineer needs to find the electric field between two long, parallel, un-centered cylindrical wires?
Solving Laplace's equation directly between two offset cylinders is a nightmare.

**The Solution:**
1.  We invent a Möbius transformation (a linear fractional map) that takes the two offset cylinders in the $z$-plane, and maps them into two perfectly parallel, flat horizontal lines in the $w$-plane! 
    *(This is always possible because Möbius transformations map circles to lines!).*
2.  Now our complicated cylinders have mathematically become a basic parallel plate capacitor!
3.  We use the trivial solution $V(u,v) = \frac{100}{\pi} v$.
4.  We take that trivial solution and substitute the Möbius transformation back into it.

The resulting equation perfectly models the warped, curved electrostatic field lines arcing between the two cylindrical wires!

### Capacitance 
Conformal mapping has an even more miraculous property. 
Not only does it preserve angles and Laplace's equation, it perfectly preserves **Capacitance**!
If you calculate the total electrical capacitance $C$ of the simple, flat parallel plates in the $w$-plane, it will be numerically identical to the true capacitance of the complex offset cylinders in the $z$-plane. 
Engineers use this fact to rapidly design custom capacitors without having to simulate complex boundary fields!
