# Partition Functions for Ideal Gases

To use the power of statistical mechanics, we must be able to calculate the partition function $Z$. We start with the simplest macroscopic system: a classical ideal gas composed of $N$ identical, non-interacting molecules.

## 1. Single-Particle vs. N-Particle Partition Function

If the molecules do not interact (the definition of an ideal gas), the energy of the whole system is simply the sum of the energies of the individual molecules.

Let $z$ be the partition function of a **single molecule** moving in a volume $V$.
To find the partition function of the entire $N$-molecule gas ($Z_N$), we might guess $Z_N = z^N$.

However, because the molecules are **indistinguishable** (you cannot tell one identical argon atom from another), we must avoid overcounting the microstates. Swapping two identical atoms does not create a new microstate. We must divide by $N!$ (the number of permutations of $N$ items).

$$ Z_N = \frac{z^N}{N!} $$
*(Note: This is valid only at high temperatures/low densities where quantum overlap effects are negligible — i.e., classical regime).*

## 2. Factoring the Single-Particle Partition Function

The energy of a single molecule is the sum of its independent modes of energy: translational, rotational, vibrational, and electronic.
$$ \varepsilon_{total} = \varepsilon_{trans} + \varepsilon_{rot} + \varepsilon_{vib} + \varepsilon_{elec} $$

Because the energies add, the exponential in the partition function factors into a product. Therefore, the single-particle partition function $z$ is the product of the partition functions for each mode:
$$ z = z_{trans} \cdot z_{rot} \cdot z_{vib} \cdot z_{elec} $$

We can evaluate these one by one using quantum mechanics.

## 3. Translational Partition Function ($z_{trans}$)

A molecule moving in a 3D box of volume $V$ is the classic "particle in a box" quantum problem. The energy levels are very closely spaced.
Replacing the sum over states with an integral over momentum, we get:
$$ z_{trans} = V \left( \frac{2\pi m k_B T}{h^2} \right)^{3/2} = \frac{V}{\Lambda^3} $$
Where:
*   $m$ is the mass of the molecule.
*   $h$ is Planck's constant.
*   $\Lambda = h / \sqrt{2\pi m k_B T}$ is the **thermal de Broglie wavelength**. It represents the quantum "smear" or wave-packet size of the particle. As long as the volume per particle ($V/N$) is much larger than $\Lambda^3$, the gas behaves classically.

## 4. Internal Partition Functions

**Rotational ($z_{rot}$):**
For a diatomic molecule (like N₂ or O₂), quantum mechanics models it as a rigid rotor. At room temperature, many rotational levels are excited.
$$ z_{rot} \approx \frac{k_B T}{\sigma B} $$
Where $B$ is the rotational constant (inversely proportional to moment of inertia) and $\sigma$ is a symmetry number ($\sigma=2$ for homonuclear like N₂, $\sigma=1$ for heteronuclear like CO). Note that $z_{rot}$ is proportional to $T$.

**Vibrational ($z_{vib}$):**
Modeled as a quantum harmonic oscillator. The energy levels are $E_v = (v + \frac{1}{2})h\nu$, where $\nu$ is the vibrational frequency.
$$ z_{vib} = \frac{e^{-\Theta_v / 2T}}{1 - e^{-\Theta_v / T}} $$
Where $\Theta_v = h\nu / k_B$ is the characteristic vibrational temperature. For most diatomic gases (N₂, O₂), $\Theta_v$ is thousands of Kelvin (e.g., N₂ is 3390 K). At room temperature ($T \ll \Theta_v$), the denominator is approx 1, and the molecule is "frozen" in its ground vibrational state.

**Electronic ($z_{elec}$):**
Electronic energy level gaps are huge. At standard temperatures, virtually all molecules are in their ground electronic state.
$$ z_{elec} \approx g_0 e^{-\varepsilon_0 / k_B T} $$
Where $g_0$ is the degeneracy of the ground state (often 1).

## 5. Bringing it Together

For a monatomic ideal gas (like Argon or Helium), there is no rotation or vibration.
$$ z = z_{trans} \cdot z_{elec} = \left(\frac{V}{\Lambda^3}\right) g_0 $$
$$ Z_N = \frac{1}{N!} \left( \frac{V g_0}{\Lambda^3} \right)^N $$

From this $Z_N$, we can use Stirling's approximation ($\ln N! \approx N\ln N - N$) and the formulas from the previous chapter to derive the Sackur-Tetrode equation for entropy, and prove that $PV = N k_B T$. Statistical mechanics mathematically proves the ideal gas law!
