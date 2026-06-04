# 1. Introduction to Systems of ODEs

So far, we have only looked at single, isolated equations. But in the real world, things are interconnected. 

If you have two water tanks connected by a pipe, the amount of salt leaving Tank A is exactly the amount of salt entering Tank B. The rate of change of Tank A ($dx/dt$) depends entirely on the current state of Tank B ($y$), and vice-versa.

When multiple unknown functions are linked together by their derivatives, we call it a **System of Differential Equations**.

### A Predator-Prey System
Consider an ecosystem with a population of rabbits ($R$) and foxes ($F$). 
*   Without foxes, rabbits reproduce exponentially: $dR/dt = aR$.
*   Without rabbits, foxes starve exponentially: $dF/dt = -bF$.

But they are in the same forest. Foxes eat rabbits. The rate at which rabbits are eaten depends on the probability of a fox bumping into a rabbit, which is proportional to $R \times F$.
*   Rabbits die from foxes: subtract $cRF$.
*   Foxes reproduce by eating rabbits: add $dRF$.

The coupled system of ODEs is:
$$ \frac{dR}{dt} = aR - cRF $$
$$ \frac{dF}{dt} = -bF + dRF $$

This is a famous non-linear system known as the **Lotka-Volterra Equations**. You cannot solve for $R(t)$ without simultaneously solving for $F(t)$.

### Linear vs. Non-linear Systems
Just as with single equations, systems can be linear or non-linear. 
*   The predator-prey model is **non-linear** because the unknown functions are multiplied together ($R \times F$). Non-linear systems are incredibly difficult to solve analytically and frequently exhibit Chaos theory (like weather modeling).
*   In this unit, we will focus exclusively on **Linear Systems**, where the unknown functions and their derivatives only appear to the first power and are never multiplied together.

### The Standard Form of a 2x2 Linear System
A first-order, linear system of two equations with two unknown functions $x(t)$ and $y(t)$ looks like this:
$$ \frac{dx}{dt} = a_{11}x + a_{12}y + g_1(t) $$
$$ \frac{dy}{dt} = a_{21}x + a_{22}y + g_2(t) $$

If the functions $g_1(t)$ and $g_2(t)$ are both zero, the system is **Homogeneous**. 
To solve these systems efficiently, we must borrow tools from Linear Algebra and translate them into matrices!
