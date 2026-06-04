# 6. Nonhomogeneous Equations

Until now, we have only looked at free, unforced systems ($g(x) = 0$). In reality, bridges experience turbulent wind, circuits are driven by alternating current, and shock absorbers hit potholes. These external forces are represented by the $g(x)$ term on the right side of the equation.

The standard linear nonhomogeneous second-order ODE is:
$$ y'' + p(x)y' + q(x)y = g(x) $$

### The Structure of the Solution
The general solution to a nonhomogeneous equation is *always* comprised of two completely separate parts added together:
$$ y(x) = y_h(x) + y_p(x) $$

#### 1. The Homogeneous Solution ($y_h$)
This is the "transient" solution. It is the solution to the associated homogeneous equation (pretending $g(x) = 0$). 
It represents how the system *naturally* wants to behave when left alone. Because of damping/friction, this part usually dies out to zero over time. 
You solve for $y_h$ using the characteristic equation from the previous sections.
$$ y_h = C_1 y_1 + C_2 y_2 $$

#### 2. The Particular Solution ($y_p$)
This is the "steady-state" solution. It is a specific solution driven entirely by the external forcing function $g(x)$. It represents the long-term behavior of the system after the transient vibrations have died out.
$y_p$ contains **no arbitrary constants**. 

### The Strategy
To solve any nonhomogeneous equation:
1.  Temporarily set $g(x) = 0$.
2.  Find the homogeneous solution $y_h = C_1 y_1 + C_2 y_2$.
3.  Use an advanced technique (Undetermined Coefficients or Variation of Parameters) to find one specific Particular Solution $y_p$.
4.  Add them together: $y = y_h + y_p$.
5.  If you have initial conditions, apply them to the **FULL** combined equation $y(x)$ to solve for $C_1$ and $C_2$. Do not apply them to $y_h$ alone!

We will explore the two primary methods for finding $y_p$ in the following sections.
