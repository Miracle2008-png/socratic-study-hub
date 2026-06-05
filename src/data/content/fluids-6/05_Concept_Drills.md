# Concept Drills: Non-Newtonian Fluids

Test your conceptual understanding of non-Newtonian behaviors, thixotropy, and viscoelasticity.

## Conceptual Questions

1.  **True or False:** If you double the force pushing a non-Newtonian fluid through a pipe, the fluid will flow exactly twice as fast.
2.  What is the microscopic physical reason that polymer solutions are usually shear-thinning?
3.  You are designing a pump to move a thick slurry of mud and rocks. Should you expect this fluid to be shear-thinning or shear-thickening? Why?
4.  Why is toothpaste classified as a Bingham Plastic rather than a shear-thinning fluid?
5.  What is the difference between a shear-thinning fluid and a thixotropic fluid?
6.  Explain why Silly Putty shatters like glass if you hit it with a hammer, but stretches like syrup if you pull it slowly. Use the Deborah Number in your explanation.

## Analytical Problems

1.  **Newtonian Verification:** A fluid is tested in a rheometer. At a shear rate of $50$ s⁻¹, the shear stress is $10$ Pa. At a shear rate of $100$ s⁻¹, the shear stress is $20$ Pa. Is this fluid Newtonian? What is its viscosity?
2.  **Power-Law Identification:** Another fluid is tested. At a shear rate of $10$ s⁻¹, the shear stress is $5$ Pa. At a shear rate of $100$ s⁻¹, the shear stress is $15$ Pa. Is this fluid shear-thinning or shear-thickening?
3.  **Apparent Viscosity:** For the fluid in Question 2, calculate the apparent viscosity ($\mu_{app}$) at the shear rate of $10$ s⁻¹, and the apparent viscosity at $100$ s⁻¹.
4.  **Bingham Plastic Calculation:** A drilling mud behaves as a Bingham Plastic with a yield stress $\tau_y = 15$ Pa and a plastic viscosity of $0.05$ Pa·s. If it is subjected to a shear rate of $200$ s⁻¹, what is the total shear stress generated?
5.  **Power Law Index:** For a specific brand of ketchup, the flow consistency index is $K = 10$ Pa·sⁿ, and the flow behavior index is $n = 0.4$. If the shear rate is $5$ s⁻¹, calculate the shear stress.

---

## Solutions

### Conceptual Solutions

1.  **False.** That is the definition of a Newtonian fluid. For a non-Newtonian fluid, the viscosity changes as you push harder. If it's shear-thinning, it will flow *more* than twice as fast. If it's shear-thickening, it will flow *less* than twice as fast.
2.  At rest, the long polymer chains are tangled up in a chaotic mess, creating massive resistance to flow (high viscosity). Under high shear stress, the chains stretch out, untangle, and align parallel to the flow. Once aligned, they slide past each other easily (low viscosity).
3.  **Shear-thickening (Dilatant).** Mud/rock slurries are highly concentrated suspensions of solid particles. At high shear rates (inside the fast-spinning impeller of a pump), the particles jam together into rigid clusters, locking up the flow and spiking the apparent viscosity. (This makes pumping slurries very difficult).
4.  Shear-thinning fluids will technically flow (very slowly) even under a microscopic amount of stress. A Bingham Plastic has a **Yield Stress**. It acts like a perfect solid and will absolutely not flow *at all* until a critical threshold of force is applied.
5.  Shear-thinning responds instantly to the *amount* of shear applied (Time-Independent). Thixotropic fluids respond to the *duration* of the shear (Time-Dependent). Ketchup is shear-thinning (thins instantly). Yogurt is thixotropic (thins out gradually the longer you stir it).
6.  Silly putty is viscoelastic. The hammer strike is an extremely fast interaction ($De \gg 1$); the polymer chains do not have time to untangle and flow, so they act like an elastic solid and snap (shatter). Pulling slowly is a very slow interaction ($De \ll 1$); the chains have plenty of time to uncoil and slide past each other, so the material acts like a viscous liquid.

### Analytical Solutions

1.  Let's check the ratio $\tau / \dot{\gamma}$.
    At 50 s⁻¹: $\mu = 10 / 50 = 0.2$ Pa·s.
    At 100 s⁻¹: $\mu = 20 / 100 = 0.2$ Pa·s.
    Yes, it is perfectly **Newtonian**. Its viscosity is $0.2$ Pa·s.
2.  Let's check the apparent viscosity $\mu_{app} = \tau / \dot{\gamma}$.
    At 10 s⁻¹: $\mu_{app} = 5 / 10 = 0.50$ Pa·s.
    At 100 s⁻¹: $\mu_{app} = 15 / 100 = 0.15$ Pa·s.
    Because the apparent viscosity *decreased* as the shear rate increased, the fluid is **shear-thinning (pseudoplastic)**.
3.  (Calculated in step 2): $\mu_{app}(10) = 0.50$ Pa·s, and $\mu_{app}(100) = 0.15$ Pa·s.
4.  The equation for a Bingham Plastic is $\tau = \tau_y + \mu_p \dot{\gamma}$.
    $\tau = 15 + (0.05)(200) = 15 + 10 = 25$ Pa.
5.  Using the Power-Law model: $\tau = K (\dot{\gamma})^n$.
    $\tau = 10 \cdot (5)^{0.4}$.
    $5^{0.4} \approx 1.903$.
    $\tau \approx 10 \cdot 1.903 = 19.03$ Pa.
