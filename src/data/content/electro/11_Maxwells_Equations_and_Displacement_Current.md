# Maxwell's Equations and Displacement Current

By the 1860s, humanity had discovered four foundational laws of electromagnetism:
1.  **Gauss's Law:** Charges create electric fields.
2.  **Gauss's Law for Magnetism:** Magnetic monopoles do not exist.
3.  **Faraday's Law:** A changing magnetic field creates an electric field.
4.  **Ampère's Law:** An electric current creates a magnetic field.

James Clerk Maxwell gathered these four equations to unify electricity and magnetism into a single theoretical framework. However, he realized there was a devastating mathematical flaw in Ampère's Law.

## 1. The Flaw in Ampère's Law

Ampère's Law states: $\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}}$.

Imagine a circuit with a battery and a capacitor. Current $I$ flows through the wire and stops at the capacitor plate, causing charge to build up.
If we draw an Amperian loop around the wire *before* the capacitor, there is a current $I$ piercing the loop, so there is a magnetic field.

But what if we draw an Amperian loop around the empty gap *between* the capacitor plates? No physical electrons are flowing across the empty gap. Therefore, $I_{\text{enc}} = 0$, which implies there is zero magnetic field between the plates.

Maxwell realized this violated the conservation of charge and basic topology. The magnetic field cannot just suddenly vanish in the gap and reappear on the other wire. Ampère's law was incomplete.

## 2. Maxwell's Displacement Current

Maxwell realized that while there are no physical electrons crossing the capacitor gap, the Electric Field ($\mathbf{E}$) inside the gap is rapidly increasing as the capacitor charges.

If Faraday proved that a changing *Magnetic* field creates an *Electric* field, Maxwell proposed the beautiful, symmetric reverse:
**A changing *Electric* field must create a *Magnetic* field.**

He added a brand new term to Ampère's Law, which he called the **Displacement Current ($I_D$)**:
$$ I_D = \varepsilon_0 \frac{d\Phi_E}{dt} $$

This is not a real current of moving electrons. It is a "fake" current caused by the changing electric flux ($\Phi_E$). 

## 3. The Completed Maxwell's Equations

With the addition of the Displacement Current to Ampère's Law, the unification of Electromagnetism was complete. These four equations (presented here in their elegant differential calculus form) are all that is needed to explain every classical electromagnetic phenomenon in the universe.

### 1. Gauss's Law for Electricity
$$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $$
*Meaning:* Electric field lines diverge from positive charge densities ($\rho$). Charges are the source of the electric field.

### 2. Gauss's Law for Magnetism
$$ \nabla \cdot \mathbf{B} = 0 $$
*Meaning:* Magnetic field lines have no divergence. They never begin or end. There are no magnetic monopoles.

### 3. Faraday's Law of Induction
$$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
*Meaning:* A magnetic field that changes over time creates a curling, circular electric field.

### 4. The Ampère-Maxwell Law
$$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} $$
*Meaning:* A curling magnetic field can be created by two things: a physical electric current density ($\mathbf{J}$), OR a changing electric field over time.

## 4. The Greatest Discovery in Physics

Look closely at the last two equations in a vacuum (empty space), where there are no charges ($\rho=0$) and no wires ($\mathbf{J}=0$).

*   Faraday: $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
*   Maxwell: $\nabla \times \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$

A changing electric field creates a changing magnetic field.
That changing magnetic field creates a changing electric field.
Which creates a magnetic field. Which creates an electric field.

Maxwell realized that if you vibrate a single electron, you create a ripple in the electric field. This ripple creates a ripple in the magnetic field, which creates a ripple in the electric field, and so on. The two fields will leapfrog over each other, sustaining each other, traveling outward through the empty vacuum of space forever as a self-propagating **Electromagnetic Wave**.

He calculated the speed of this wave using the constants from his equations:
$$ v = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} $$
When he plugged in the constants measured in a lab ($\mu_0$ from magnets, $\varepsilon_0$ from capacitors), the math spit out exactly $299,792,458 \text{ m/s}$. 

This was precisely the measured speed of Light.
Maxwell had proven that Light itself is an electromagnetic wave.
