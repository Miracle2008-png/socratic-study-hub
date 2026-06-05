# Deflection of Composite Beams

In Topic 5, we learned how to calculate the internal stresses in a beam made of two different materials (like steel and wood) by using the Transformed-Section Method to convert the beam into a single, fictitious homogeneous material.

We must now apply this same concept to calculate the deflection (sag) of these composite beams.

## 1. The Flexural Rigidity ($EI$) Issue

The fundamental equation for bending deflection is $v'' = M / EI$.
*   $M$ is the internal moment, which is independent of the material.
*   $E$ is the stiffness of the material.
*   $I$ is the geometric moment of inertia.

For a composite beam made of Material 1 ($E_1$) and Material 2 ($E_2$), what value of $E$ do you plug into the equation? 
The answer is neither. You cannot use the standard $EI$ term.

## 2. Using the Transformed Section

To calculate deflection, we must use the properties of the fictitious **transformed beam** that we created during our stress analysis.

Recall the procedure:
1.  Choose a "base material" (e.g., Material 1).
2.  Calculate the transformation factor $n = E_2 / E_1$.
3.  Widen the cross-section of Material 2 by the factor $n$ to create a single, continuous shape made entirely of the fictitious Material 1.
4.  Locate the new Neutral Axis of this transformed shape.
5.  Calculate the Moment of Inertia of this transformed shape ($I_{transformed}$) about the new Neutral Axis.

## 3. The Modified Deflection Equation

Because our entire mathematical model is now assumed to be made 100% out of the base material (Material 1), the flexural rigidity of the beam is defined entirely by Material 1's stiffness and the transformed geometry.

The governing differential equation for the elastic curve of a composite beam is:

$$ \frac{d^2v}{dx^2} = \frac{M(x)}{E_1 I_{transformed}} $$

Where:
*   $E_1$ is the modulus of elasticity of the base material you chose.
*   $I_{transformed}$ is the moment of inertia of the widened, fictitious cross-section.

## 4. Execution

From this point forward, the analysis is absolutely identical to a standard homogeneous beam.
You can use double integration, Macaulay's method, superposition formulas, or the moment-area theorems. You simply replace the standard "$EI$" term in all your formulas with "$E_1 I_{transformed}$".

**Critical Verification:** The calculated physical deflection $v(x)$ is the true, real-world deflection of the actual composite beam. Unlike the stress calculations (where we had to multiply the results back by $n$ to find the true stress in Material 2), the physical sag of the beam is a singular geometric reality. Both materials sag by the exact same distance. There is no need to "un-transform" the deflection result.
