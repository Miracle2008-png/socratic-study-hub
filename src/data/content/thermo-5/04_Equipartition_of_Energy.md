# Equipartition of Energy

One of the most useful and elegant theorems in classical statistical mechanics is the **Equipartition Theorem**. It provides a simple rule-of-thumb for calculating the internal energy and heat capacity of gases at high temperatures without needing to evaluate complex partition functions.

## 1. Degrees of Freedom

A "degree of freedom" is an independent way a molecule can possess energy. Specifically, in classical mechanics, it is any coordinate (position or momentum) that appears as a **squared term** in the energy equation of the molecule.

*   **Kinetic Energy (Translation):** $E_k = \frac{1}{2}mv_x^2 + \frac{1}{2}mv_y^2 + \frac{1}{2}mv_z^2$. Three squared terms ($v_x, v_y, v_z$). Thus, **3 translational degrees of freedom**.
*   **Rotational Energy:** $E_{rot} = \frac{1}{2}I_1\omega_1^2 + \frac{1}{2}I_2\omega_2^2 + \frac{1}{2}I_3\omega_3^2$.
    *   A monatomic gas (point mass) has moment of inertia $I \approx 0$, so **0 rotational DOF**.
    *   A linear molecule (e.g., N₂, CO₂) can rotate about two axes perpendicular to its bond, so **2 rotational DOF**.
    *   A non-linear molecule (e.g., H₂O) can rotate about all three axes, so **3 rotational DOF**.
*   **Vibrational Energy:** Modeled as a spring. $E_{vib} = \frac{1}{2}kx^2 + \frac{1}{2}mv_x^2$. One squared term for potential energy (position $x$) and one for kinetic energy (velocity $v_x$). Thus, each vibrational mode contributes **2 degrees of freedom**.

## 2. The Equipartition Theorem

The theorem states:
> **In thermal equilibrium at temperature $T$, every active quadratic degree of freedom contributes exactly $\frac{1}{2}k_B T$ to the average thermal energy of a molecule.**

Therefore, the total internal energy $U$ of an ideal gas of $N$ molecules is:
$$ U = N \cdot (f) \cdot \frac{1}{2}k_B T = \frac{f}{2} N k_B T = \frac{f}{2} n R T $$
Where $f$ is the total number of active degrees of freedom per molecule, $n$ is the number of moles, and $R$ is the universal gas constant.

## 3. Predicting Heat Capacity ($C_v$)

Since $C_v = \left(\frac{\partial U}{\partial T}\right)_V$, the molar heat capacity at constant volume is directly predicted by the degrees of freedom:
$$ \bar{c}_v = \frac{f}{2} R $$

Let's test this against reality:

**1. Monatomic Gas (He, Ne, Ar):**
*   Only translation is possible. $f = 3$.
*   Predicted $\bar{c}_v = \frac{3}{2} R$.
*   *Reality:* Experiments show exactly $\frac{3}{2} R$ for all monatomic gases from near absolute zero up to thousands of degrees. Perfect agreement.

**2. Diatomic Gas (N₂, O₂, CO):**
*   Translation (3) + Rotation (2). If vibration is inactive, $f = 5$.
*   Predicted $\bar{c}_v = \frac{5}{2} R$.
*   *Reality:* At room temperature, experiments show exactly $\frac{5}{2} R$. Equipartition works!

## 4. The Breakdown of Equipartition (Quantum Effects)

If Equipartition is completely true, a diatomic molecule should also have vibrational energy. A diatomic molecule has 1 vibrational mode (stretching). This should add 2 more degrees of freedom, bringing the total to $f = 7$, and $\bar{c}_v = \frac{7}{2} R$.

*   *Reality:* At room temperature, $N_2$ has $\bar{c}_v = \frac{5}{2} R$. The vibrational degrees of freedom are missing!

**Why? Quantum Mechanics.**
The Equipartition theorem assumes energy is continuous. However, quantum energy levels are discrete.
*   Translational levels are incredibly close together — they act continuously at any temperature.
*   Rotational levels are close enough that at room temperature, many levels are populated. They act classically.
*   Vibrational levels have large energy gaps ($\Delta E = h\nu$). For N₂, the gap to the first vibrational state is equivalent to a thermal energy of 3,390 K.
*   At 300 K, the thermal energy ($k_B T$) is far too small to bridge the gap. The molecules simply cannot vibrate; they are "frozen" in the ground state. The degree of freedom is inactive.

As temperature increases toward 2,000–3,000 K, collisions become energetic enough to excite vibrations, and the heat capacity smoothly rises from $\frac{5}{2} R$ toward $\frac{7}{2} R$. The failure of the classical equipartition theorem to explain the temperature dependence of heat capacity was one of the major anomalies that drove the development of quantum mechanics.
