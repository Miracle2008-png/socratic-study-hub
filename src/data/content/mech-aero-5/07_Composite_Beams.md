# Composite Beams

Beams constructed from two or more distinct materials are known as **composite beams**. A common example is a wooden beam reinforced with a steel plate bolted to its bottom. 

The standard flexure formula ($\sigma = -My/I$) relies on the assumption that the beam is made of a single, homogeneous material. If we attempt to apply it directly to a composite beam, the results will be completely invalid, because different materials have different stiffnesses ($E$) and will carry different amounts of stress for the exact same strain.

## 1. The Transformed-Section Method

To analyze a composite beam, we employ a clever mathematical trick: we transform the cross-section of one material into an equivalent cross-section of the other material. This creates a fictitious "transformed" beam made of a single homogeneous material, allowing us to use the standard flexure formula.

## 2. The Transformation Factor ($n$)

Assume a beam is composed of Material 1 (stiffness $E_1$) and Material 2 (stiffness $E_2$). Let's transform Material 2 to act like Material 1.

We define the transformation factor $n$:
$$ n = \frac{E_2}{E_1} $$

Because both materials are securely bonded together, they must deform together. The strain $\epsilon$ at the interface must be identical for both materials.
However, because of Hooke's Law ($\sigma = E\epsilon$), the stress in Material 2 is $n$ times larger than the stress in Material 1 at the exact same depth.

## 3. Transforming the Geometry

To account for Material 2 carrying $n$ times more force without changing the internal strain distribution, we mathematically alter the physical dimensions of Material 2's cross-section.

*   We multiply the **width** of Material 2 by the factor $n$.
*   We **do not alter the height (depth)** of Material 2, because doing so would ruin the linear strain distribution ($\epsilon = -y/\rho$).

We now have a single, homogeneous cross-section entirely composed of Material 1.

## 4. Analytical Procedure

1.  Calculate the transformation factor $n = E_2 / E_1$.
2.  Sketch the transformed cross-section, widening Material 2 by $n$.
3.  Calculate the location of the Neutral Axis ($\bar{y}$) for this new transformed shape.
4.  Calculate the Moment of Inertia ($I_{transformed}$) about this new Neutral Axis.
5.  Apply the flexure formula to find the stresses in the transformed beam:
    $$ \sigma' = - \frac{M y}{I_{transformed}} $$

**Crucial Final Step:**
The stress $\sigma'$ calculated above is exactly correct for any point located in the original Material 1. 
However, for points located in the original Material 2, the stress calculated is for the fictitious transformed material. To find the *true* stress in the real Material 2, you must multiply the result back by the transformation factor $n$:
$$ \sigma_{true,2} = n \sigma' $$
