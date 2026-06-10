# Electromagnetic Waves and the Poynting Vector

Maxwell's equations predicted that oscillating electric and magnetic fields can detach from the charges that created them and travel freely through the vacuum of space at the speed of light ($c$).

## 1. Properties of Electromagnetic Waves

By solving Maxwell's equations in a vacuum, we find the exact mathematical solutions for these waves. For a simple plane wave traveling in the positive x-direction:

$$ \mathbf{E}(x,t) = E_{\text{max}} \cos(kx - \omega t) \hat{\mathbf{y}} $$
$$ \mathbf{B}(x,t) = B_{\text{max}} \cos(kx - \omega t) \hat{\mathbf{z}} $$

From these equations, we extract several profound properties of light:
1.  **Transverse Waves:** Both the Electric field and the Magnetic field are perfectly perpendicular to the direction the wave is traveling (the x-axis).
2.  **Orthogonal Fields:** The Electric field and the Magnetic field are always perfectly perpendicular to each other ($\hat{\mathbf{y}}$ is perpendicular to $\hat{\mathbf{z}}$).
3.  **In Phase:** The $\mathbf{E}$ and $\mathbf{B}$ fields oscillate in perfect sync. They reach their maximums and hit zero at the exact same time.
4.  **Amplitude Ratio:** The strength of the fields are locked together by a simple ratio. The magnetic field is much weaker numerically than the electric field:
    $$ \frac{E}{B} = c $$

## 2. The Electromagnetic Spectrum

All electromagnetic waves travel at the exact same speed in a vacuum ($c = \lambda f = 3 \times 10^8 \text{ m/s}$). 
However, they can have any wavelength ($\lambda$) or frequency ($f$). The entire continuum of possible frequencies is called the **Electromagnetic Spectrum**.

Despite having different names, they are all exactly the same physical phenomenon (photons):
*   **Radio Waves ($\lambda > 1\text{m}$):** Created by macroscopic AC currents in massive antennas. Used for TV, radio, and telecommunications.
*   **Microwaves ($\sim 1\text{cm}$):** Used for radar, Wi-Fi, and cooking food (by hitting the resonant frequency of water molecules).
*   **Infrared ($\sim 10\mu\text{m}$):** Emitted by the thermal vibrations of atoms. You feel this as radiant heat from a fire.
*   **Visible Light ($400\text{nm} - 700\text{nm}$):** The tiny sliver of the spectrum that chemical receptors in the human retina are tuned to detect. It is emitted when electrons in atoms jump between specific energy levels.
*   **Ultraviolet, X-Rays, Gamma Rays ($\lambda < 100\text{nm}$):** Extremely high frequency, high energy waves. They are ionizing, meaning they pack enough punch to rip electrons off DNA molecules, causing cancer. Gamma rays are emitted by the crumbling nuclei of radioactive atoms.

## 3. Energy Transport: The Poynting Vector

As light from the sun travels 150 million kilometers to Earth, it carries massive amounts of energy (powering weather, photosynthesis, and solar panels). 

The rate at which energy flows through space (Power per unit Area, $\text{Watts}/\text{m}^2$) is described by the **Poynting Vector ($\mathbf{S}$)**.

$$ \mathbf{S} = \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B}) $$

*   The Poynting vector points in the exact direction the wave is traveling.
*   Because the $\mathbf{E}$ and $\mathbf{B}$ fields are rapidly oscillating (trillions of times a second for visible light), the instantaneous Poynting vector fluctuates wildly.
*   We usually care about the time-averaged energy flow, which is called the **Intensity ($I$)** of the light:
    $$ I = S_{\text{avg}} = \frac{E_{\text{max}} B_{\text{max}}}{2\mu_0} = \frac{E_{\text{max}}^2}{2\mu_0 c} $$

## 4. Radiation Pressure

Because electromagnetic waves carry energy, Einstein's relativity ($E = mc^2$) tells us they must also carry momentum, even though photons have zero mass.

When light strikes an object and is absorbed, it transfers this momentum, pushing physically on the object. This push is called **Radiation Pressure**.

$$ P_{\text{rad}} = \frac{I}{c} \text{ (If completely absorbed)} $$
$$ P_{\text{rad}} = \frac{2I}{c} \text{ (If perfectly reflected like a mirror)} $$

For a standard laser pointer or a flashlight, this pressure is astronomically weak—you cannot feel a flashlight pushing on your hand. 
However, in the vacuum of space, this pressure is significant. NASA has successfully deployed **Solar Sails**—massive sheets of reflective mylar that use the radiation pressure of sunlight as a continuous, fuel-free propulsion system to travel through the solar system.
