# Magnetic Fields and Forces

We have seen that stationary charges produce Electric Fields. 
But what happens when charges move? Moving charges (currents) produce an entirely new phenomenon: **The Magnetic Field ($\mathbf{B}$)**.

Historically, magnetism and electricity were thought to be completely separate forces. Magnetism was associated with permanent magnets (like lodestones and compass needles), while electricity was associated with static shocks and batteries. It wasn't until the 1800s that physicists realized they are two sides of the exact same coin.

## 1. Magnetic Poles and the B-Field

Unlike electric charges, which can exist in isolation as single protons or electrons, magnetic poles **always come in pairs**. Every magnet has a North pole and a South pole. 
*   Like poles repel; opposite poles attract.
*   If you snap a bar magnet exactly in half, you do not isolate the North pole. You instantly create two smaller, perfect magnets, each with its own North and South pole.
*   **Gauss's Law for Magnetism:** $\nabla \cdot \mathbf{B} = 0$. This Maxwell equation states mathematically that there is no such thing as a "Magnetic Monopole." Magnetic field lines never begin or end; they always form continuous closed loops.

The Magnetic Field vector is denoted by $\mathbf{B}$.
*   **Units:** The Tesla (T). $1 \text{ T} = 1 \text{ N} / (\text{C}\cdot\text{m/s})$.
*   The magnetic field of the Earth is very weak, about $5 \times 10^{-5}$ Tesla. A strong refrigerator magnet is about $0.01$ Tesla. A medical MRI machine is around $3$ Tesla.

## 2. The Magnetic Force on a Moving Charge

A magnetic field exerts a force on a charge *only* if two conditions are met:
1.  The charge must be **moving** ($v \neq 0$). A magnetic field exerts exactly zero force on a stationary electron.
2.  The charge's velocity must have a component that is **perpendicular** to the magnetic field. If the charge moves perfectly parallel to the field lines, it feels no force.

These rules are captured in the cross product of the **Lorentz Force Law**:
$$ \mathbf{F}_B = q(\mathbf{v} \times \mathbf{B}) $$

The magnitude of the force is $F = qvB \sin(\theta)$, where $\theta$ is the angle between the velocity and the magnetic field.

### The Right-Hand Rule
Because the force is a cross product, the resulting magnetic force is always perfectly perpendicular to *both* the velocity and the magnetic field. To find the direction, use the Right-Hand Rule:
1.  Point the fingers of your right hand in the direction of the velocity ($\mathbf{v}$).
2.  Curl your fingers in the direction of the magnetic field ($\mathbf{B}$).
3.  Your extended thumb points in the direction of the force on a *positive* charge. (If the charge is an electron, flip the direction 180 degrees).

## 3. Circular Motion in a Magnetic Field

Because the magnetic force is always perfectly perpendicular to the velocity, it acts as a **Centripetal Force**. It cannot speed the particle up or slow it down (it does zero work); it can only force the particle to turn.

If you shoot an electron perpendicular into a uniform magnetic field, it will get trapped in a perfect circular orbit.
We can set the magnetic force equal to the centripetal force formula from classical mechanics:
$$ qvB = \frac{m v^2}{r} $$

Solving for the radius of the orbit ($r$):
$$ r = \frac{mv}{qB} $$

This is the principle behind particle accelerators (Cyclotrons) and mass spectrometers. By measuring the radius of the circle, scientists can calculate the exact mass of unknown subatomic particles.

## 4. The Magnetic Force on a Current-Carrying Wire

A wire carrying a current is simply a tube filled with billions of moving electrons. Therefore, the entire wire experiences a bulk magnetic force when placed in an external magnetic field.

For a straight wire of length $L$ carrying current $I$:
$$ \mathbf{F}_B = I(\mathbf{L} \times \mathbf{B}) $$

### Torque on a Current Loop
If you take a wire, bend it into a rectangular loop, and place it in a magnetic field, the forces on the opposite sides of the loop will push in opposite directions. This creates a twisting force, or **Torque ($\tau$)**.

$$ \boldsymbol{\tau} = \mathbf{m} \times \mathbf{B} $$
*(Where $\mathbf{m}$ is the magnetic dipole moment of the loop: $\mathbf{m} = I \cdot \mathbf{A}$).*

This simple equation is arguably the most important in human history. It is the fundamental principle behind the **Electric Motor**. We run a current through a coil of wire inside a magnet, and the magnetic torque forces the coil to spin, powering everything from electric cars to household fans.
