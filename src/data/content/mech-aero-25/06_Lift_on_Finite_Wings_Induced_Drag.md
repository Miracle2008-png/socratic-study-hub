# Lift on Finite Wings (Induced Drag)

The 2D aerodynamic theory (Kutta-Joukowski theorem) assumes an airfoil stretches infinitely in both directions. In reality, airplane wings have a finite span. They have wingtips. This 3D reality creates a massive, unavoidable penalty known as **Induced Drag**.

## 1. The Wingtip Vortex

Recall the pressure distribution that creates lift: high pressure on the bottom of the wing, very low pressure on the top.
Fluids naturally want to flow from high pressure to low pressure. 

On an infinite wing, the air is blocked from going upward by the solid metal of the wing itself. 
However, at the very tips of a finite wing, the air has an escape route. The high-pressure air from the bottom spills outward, wraps around the wingtip, and rolls up onto the low-pressure top surface.

This continuous rolling motion creates a massive, swirling tornado of air trailing horizontally behind each wingtip: a **Wingtip Vortex**. 

## 2. Downwash and Effective Angle of Attack

The wingtip vortices don't just sit at the tips. They are massive swirling structures that induce a downward velocity field over the entire span of the wing between them. This uniform downward flow is called **Downwash ($w$)**.

Because the incoming horizontal free-stream air ($V_\infty$) is mixed with this induced downward flow ($w$), the *actual* local airflow approaching the wing is tilted slightly downward.

The wing "sees" a relative wind that is tilted downward by an **Induced Angle ($\alpha_i$)**.
Therefore, the **Effective Angle of Attack ($\alpha_{eff}$)** that the wing actually experiences is smaller than the geometric angle the pilot set:
$$\alpha_{eff} = \alpha_{geom} - \alpha_i$$

**Consequence:** A finite 3D wing generates less lift than a 2D infinite wing at the exact same geometric angle of attack, because the wingtip vortices are effectively pushing the air down before the wing even hits it.

## 3. Induced Drag ($C_{D,i}$)

Because the local relative wind is tilted downward, the aerodynamic lift force vector (which is defined as exactly perpendicular to the local relative wind) is also tilted slightly backward.

This backward-pointing component of the lift vector acts exactly like drag. It is pulling the aircraft backward. This is **Induced Drag** (or drag due to lift).

It is mathematically calculated as:
$$C_{D,i} = \frac{C_L^2}{\pi e AR}$$

Where:
- $C_L$: Lift coefficient (Induced drag increases with the *square* of the lift being generated!)
- $AR$: Aspect Ratio ($b^2 / S$, roughly wing span divided by wing chord).
- $e$: Oswald efficiency factor (accounts for non-ideal lift distribution, $e \le 1.0$).

## 4. Mitigating Induced Drag

Induced drag is a massive problem, especially at low speeds (takeoff and landing) where airplanes must fly at very high $C_L$ to stay airborne.

To reduce it, look at the denominator of the equation: we need a **High Aspect Ratio ($AR$)**.
- A long, skinny wing (like a glider, $AR = 30$) keeps the wingtip vortices incredibly far apart. Their downwash influence over the rest of the wing is minimized. Induced drag is very low.
- A short, stubby wing (like a fighter jet, $AR = 3$) suffers catastrophic induced drag at low speeds, requiring massive engine thrust to compensate.

Another modern solution is the **Winglet**. These vertical fins placed at the wingtips physically block the high-pressure air from rolling over the tip, weakening the vortex and reducing induced drag without having to make the physical wingspan too long to fit at an airport gate.
