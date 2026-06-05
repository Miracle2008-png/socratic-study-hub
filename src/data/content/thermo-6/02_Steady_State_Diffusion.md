# Steady-State Diffusion

Just as we studied steady-state 1D heat conduction through a wall, we can analyze steady-state 1D mass diffusion. However, mass transfer introduces a complication that heat transfer lacks: bulk fluid motion caused by the diffusion itself.

Recall the absolute flux equation:
$$ N_A = J_A^* + x_A (N_A + N_B) $$

Since $J_A^* = -C D_{AB} \frac{dx_A}{dz}$ (Fick's 1st Law in 1D):
$$ N_A = -C D_{AB} \frac{dx_A}{dz} + x_A (N_A + N_B) $$

To solve for the flux $N_A$, we must know what is happening to species B ($N_B$). There are two classic limiting cases.

## 1. Equimolar Counterdiffusion

**Physical scenario:** Imagine a tube connecting two tanks. Tank 1 has high concentration of A, Tank 2 has high concentration of B. Total pressure is constant.
As every mole of A diffuses to the right, exactly one mole of B must diffuse to the left to maintain constant total pressure.

Therefore: $N_B = -N_A$.
Substitute this into the flux equation:
$$ N_A = -C D_{AB} \frac{dx_A}{dz} + x_A (N_A - N_A) = -C D_{AB} \frac{dx_A}{dz} $$

In this special case, the bulk velocity term disappears. The absolute flux equals the diffusive flux.

Integrating across a layer of thickness $L$ with boundary mole fractions $x_{A,1}$ and $x_{A,2}$:
$$ N_A = \frac{C D_{AB}}{L} (x_{A,1} - x_{A,2}) $$

The concentration profile is perfectly **linear**, exactly like the temperature profile in steady 1D heat conduction. This models distillation columns and some catalytic reactions.

## 2. Diffusion Through a Stagnant Gas (Stefan Tube)

**Physical scenario:** Consider a beaker of liquid water (A) evaporating into an open tube filled with air (B). The water vapor (A) diffuses upward. The air (B) is essentially stationary; it is not dissolving into the water or being created.

Therefore: $N_B = 0$. (Species B is stagnant).
Substitute this into the flux equation:
$$ N_A = -C D_{AB} \frac{dx_A}{dz} + x_A (N_A + 0) $$

Rearranging to solve for $N_A$:
$$ N_A (1 - x_A) = -C D_{AB} \frac{dx_A}{dz} $$
$$ N_A = -\frac{C D_{AB}}{1 - x_A} \frac{dx_A}{dz} $$

Notice that the flux $N_A$ is higher than Fick's law predicts by a factor of $\frac{1}{1 - x_A}$.
Why? As A evaporates and moves upward, it acts like a pump, pushing the air (B) upward. But B must remain stagnant ($N_B = 0$). To counteract this upward push, B must diffuse downward due to a concentration gradient. This downward diffusion of B drags more A upward. This is called the **Stefan Flow** or bulk flow effect.

Integrating from the liquid surface ($z=0$, $x_A = x_{A,1}$) to the tube exit ($z=L$, $x_A = x_{A,2}$):
$$ N_A \int_0^L dz = -C D_{AB} \int_{x_{A,1}}^{x_{A,2}} \frac{dx_A}{1 - x_A} $$
$$ N_A = \frac{C D_{AB}}{L} \ln \left( \frac{1 - x_{A,2}}{1 - x_{A,1}} \right) $$

Using the fact that $1 - x_A = x_B$, we can introduce the **log-mean mole fraction of B** ($x_{B,lm}$):
$$ x_{B,lm} = \frac{x_{B,2} - x_{B,1}}{\ln(x_{B,2}/x_{B,1})} $$

This allows us to write the flux in a form that looks like a mass transfer coefficient:
$$ N_A = \frac{C D_{AB}}{L x_{B,lm}} (x_{A,1} - x_{A,2}) $$

Unlike equimolar counterdiffusion, the concentration profile here is **non-linear** (logarithmic) because of the bulk flow effect. This model describes evaporation, drying processes, and combustion of liquid droplets.

## 3. The Mass Transfer Resistance Analogy

Just like thermal resistance ($R_{th} = L/kA$), we can define a mass transfer resistance for steady 1D diffusion without bulk flow (or for dilute systems where $x_A \ll 1$):

$$ R_{mass} = \frac{L}{C D_{AB} A} $$

Then: $Rate = \frac{\text{Driving Force}}{\text{Resistance}} \Rightarrow N_A \cdot A = \frac{x_{A,1} - x_{A,2}}{R_{mass}}$

This allows complex, multi-layer diffusion problems (like oxygen diffusing through a contact lens into the cornea) to be solved using simple electrical circuit analogies.
