# Third law of thermodynamics

The third law of thermodynamics states that the entropy of a closed system at thermodynamic equilibrium approaches a constant value when its temperature approaches absolute zero. This constant value cannot depend on any other parameters characterizing the system, such as pressure or applied magnetic field. At absolute zero (zero kelvin) the system must be in a state with the minimum possible energy.

## Formulations
The third law has many formulations, some more general than others, some equivalent, and some neither more general nor equivalent.

The Planck statement applies only to perfect crystalline substances:

As temperature falls to zero, the entropy of any pure crystalline substance tends to a universal constant.

That is, 

{\displaystyle \lim _{T\to 0}S=S_{0}}
, where 
{\displaystyle S_{0}}
 is a universal constant that applies for all possible crystals, of all possible sizes, in all possible external constraints. So it can be taken as zero, giving 

{\displaystyle \lim _{T\to 0}S=0}
.

The Nernst statement concerns thermodynamic processes at a fixed, low temperature, for condensed systems, which are liquids and solids:

The entropy change associated with any condensed system undergoing a reversible isothermal process approaches zero as the temperature at which it is performed approaches 0 K.

That is, 

{\displaystyle \lim _{T\to 0}S(T,X_{1})-S(T,X_{2})=0}
, or equivalently,

At absolute zero, the entropy change becomes independent of the process path.

That is,

{\displaystyle \forall x,\lim _{T\to 0}|S(T,x)-S(T,x+\Delta x)|\to 0}

where 

{\displaystyle \Delta x}
 represents a change in the state variable 
.

The unattainability principle of Nernst:

It is impossible for any process, no matter how idealized, to reduce the entropy of a system to its absolute-zero value in a finite number of operations.

This principle implies that cooling a system to absolute zero would require an infinite number of steps or an infinite amount of time.

The statement in adiabatic accessibility:

It is impossible to start from a state of positive temperature, and adiabatically reach a state with zero temperature.

The Einstein statement:

The entropy of any substance approaches a finite value as the temperature approaches absolute zero.

That is, 

{\textstyle \forall x,\lim _{T\to 0}S(T,x)\rightarrow S_{0}(x)}
 where 
 is the entropy, the zero-point entropy 

{\displaystyle S_{0}(x)}
is finite-valued, is the temperature, and
 represents other relevant state variables.

This implies that the heat capacity 

{\displaystyle C(T,x)}
 of a substance must (uniformly) vanish at absolute zero, as otherwise the entropy 

{\displaystyle S=\int _{0}^{T_{1}}{\frac {C(T,x)dT}{T}}}
 would diverge.

## Explanation
In simple terms, the third law states that the entropy of a perfect crystal of a pure substance approaches zero as the temperature approaches zero. The alignment of a perfect crystal leaves no ambiguity as to the location and orientation of each part of the crystal. As the energy of the crystal is reduced, the vibrations of the individual atoms are reduced to nothing, and the crystal becomes the same everywhere.

The third law provides an absolute reference point for the determination of entropy at any other temperature. The entropy of a closed system, determined relative to this zero point, is then the absolute entropy of that system. Mathematically, the absolute entropy of any system at zero temperature is the natural log of the number of ground states times the Boltzmann constant kB = 1.38×10−23 J K−1.

The entropy of a perfect crystal lattice as defined by Nernst's theorem is zero provided that its ground state is unique, because ln(1) = 0. If the system is composed of one-billion atoms that are all alike and lie within the matrix of a perfect crystal, the number of combinations of one billion identical things taken one billion at a time is Ω = 1. Hence:

{\displaystyle S-S_{0}=k_{\text{B}}\ln \Omega =k_{\text{B}}\ln {1}=0}

The difference is zero; hence the initial entropy S0 can be any selected value so long as all other such calculations include that as the initial entropy. As a result, the initial entropy value of zero is selected S0 = 0 is used for convenience.

{\displaystyle S-S_{0}=S-0=0}

### Example: Entropy change of a crystal lattice heated by an incoming photon
Suppose a system consisting of a crystal lattice with volume V of N identical atoms at T = 0 K, and an incoming photon of wavelength λ and energy ε.

Initially, there is only one accessible microstate:

        0.
{\displaystyle S_{0}=k_{\text{B}}\ln \Omega =k_{\text{B}}\ln {1}=0.}

Let us assume the crystal lattice absorbs the incoming photon. There is a unique atom in the lattice that interacts and absorbs this photon. So after absorption, there are N possible microstates accessible by the system, each corresponding to one excited atom, while the other atoms remain at ground state.

The entropy, energy, and temperature of the closed system rises and can be calculated. The entropy change is 

{\displaystyle \Delta S=S-S_{0}=k_{\text{B}}\ln {\Omega }}

From the second law of thermodynamics:

{\displaystyle \Delta S=S-S_{0}={\frac {\delta Q}{T}}}

Hence

{\displaystyle \Delta S=S-S_{0}=k_{\text{B}}\ln(\Omega )={\frac {\delta Q}{T}}}

Calculating entropy change:

        1.38

{\displaystyle S-0=k_{\text{B}}\ln {N}=1.38\times 10^{-23}\times \ln {\left(3\times 10^{22}\right)}=70\times 10^{-23}\,\mathrm {J\,K^{-1}} }

We assume N = 3 × 1022 and λ = 1 cm. The energy change of the system as a result of absorbing the single photon whose energy is ε:

              6.62

              0.01

{\displaystyle \delta Q=\varepsilon ={\frac {hc}{\lambda }}={\frac {6.62\times 10^{-34}\,\mathrm {J\cdot s} \times 3\times 10^{8}\,\mathrm {m\,s^{-1}} }{0.01\,\mathrm {m} }}=2\times 10^{-23}\,\mathrm {J} }

The temperature of the closed system rises by

        0.02857
{\displaystyle T={\frac {\varepsilon }{\Delta S}}={\frac {2\times 10^{-23}\,\mathrm {J} }{70\times 10^{-23}\,\mathrm {J\,K^{-1}} }}=0.02857\,\mathrm {K} }

This can be interpreted as the average temperature of the system over the range from 

{\displaystyle 0<S<70\times 10^{-23}\,\mathrm {J\,K^{-1}} }
. A single atom is assumed to absorb the photon, but the temperature and entropy change characterizes the entire system.

### Systems with non-zero entropy at absolute zero
An example of a system that does not have a unique ground state is one whose net spin is a half-integer, for which time-reversal symmetry gives two degenerate ground states. For such systems, the entropy at zero temperature is at least kB ln(2) (which is negligible on a macroscopic scale). Some crystalline systems exhibit geometrical frustration, where the structure of the crystal lattice prevents the emergence of a unique ground state. Ground-state helium (unless under pressure) remains liquid.

Glasses and solid solutions retain significant entropy at 0 K, because they are large collections of nearly degenerate states, in which they become trapped out of equilibrium. Another example of a solid with many nearly-degenerate ground states, trapped out of equilibrium, is ice Ih, which has "proton disorder".

For the entropy at absolute zero to be zero, the magnetic moments of a perfectly ordered crystal must themselves be perfectly ordered; from an entropic perspective, this can be considered to be part of the definition of a "perfect crystal". Only ferromagnetic, antiferromagnetic, and diamagnetic materials can satisfy this condition. However, ferromagnetic materials do not, in fact, have zero entropy at zero temperature, because the spins of the unpaired electrons are all aligned and this gives a ground-state spin degeneracy. Materials that remain paramagnetic at 0 K, by contrast, may have many nearly degenerate ground states (for example, in a spin glass), or may retain dynamic disorder (a quantum spin liquid).

## Consequences

### Absolute zero
The third law is equivalent to the statement that

It is impossible by any procedure, no matter how idealized, to reduce the temperature of any closed system to zero temperature in a finite number of finite operations.

The reason that T = 0 cannot be reached according to the third law is explained as follows: Suppose that the temperature of a substance can be reduced in an isentropic process by changing the parameter X from X2 to X1. One can think of a multistage nuclear demagnetization setup where a magnetic field is switched on and off in a controlled way. If there were an entropy difference at absolute zero, T = 0 could be reached in a finite number of steps. However, at T = 0 there is no entropy difference, so an infinite number of steps would be needed. The process is illustrated in Fig. 1.

#### Example: magnetic refrigeration

To be concrete, we imagine that we are refrigerating magnetic material. Suppose we have a large bulk of paramagnetic salt and an adjustable external magnetic field in the vertical direction.

Let the parameter 
 represent the external magnetic field. At the same temperature, if the external magnetic field is strong, then the internal atoms in the salt would strongly align with the field, so the disorder (entropy) would decrease. Therefore, in Fig. 1, the curve for 
{\displaystyle X_{1}}
 is the curve for lower magnetic field, and the curve for 
{\displaystyle X_{2}}
 is the curve for higher magnetic field.

The refrigeration process repeats the following two steps:

Isothermal process. Here, we have a chunk of salt in magnetic field 
{\displaystyle X_{1}}
 and temperature 
. We divide the chunk into two parts: a large part playing the role of "environment", and a small part playing the role of "system". We slowly increase the magnetic field on the system to 
{\displaystyle X_{2}}
, but keep the magnetic field constant on the environment. The atoms in the system would lose directional degrees of freedom (DOF), and the energy in the directional DOF would be squeezed out into the vibrational DOF. This makes it slightly hotter, and then it would lose thermal energy to the environment, to remain in the same temperature 
.

(The environment is now discarded.)

Isentropic cooling. Here, the system is wrapped in adiathermal covering, and the external magnetic field is slowly lowered to 
{\displaystyle X_{1}}
. This frees up the direction DOF, absorbing some energy from the vibrational DOF. The effect is that the system has the same entropy, but reaches a lower temperature 

{\displaystyle T'<T}
.

At every two-step of the process, the mass of the system decreases, as we discard more and more salt as the "environment". However, if the equations of state for this salt is as shown in Fig. 1 (left), then we can start with a large but finite amount of salt, and end up with a small piece of salt that has . ### Specific heat
A non-quantitative description of his third law that Nernst gave at the very beginning was simply that the specific heat of a material can always be made zero by cooling it down far enough. A modern, quantitative analysis follows.

Suppose that the heat capacity of a sample in the low temperature region has the form of a power law C(T,X) = C0Tα asymptotically as T → 0, and we wish to find which values of α are compatible with the third law. We have

By the discussion of third law above, this integral must be bounded as T0 → 0, which is only possible if α > 0. So the heat capacity must go to zero at absolute zero

if it has the form of a power law. The same argument shows that it cannot be bounded below by a positive constant, even if we drop the power-law assumption.

On the other hand, the molar specific heat at constant volume of a monatomic classical ideal gas, such as helium at room temperature, is given by CV = ⁠3/2⁠R with R the molar ideal gas constant. But clearly a constant heat capacity does not satisfy Eq. (12). That is, a gas with a constant heat capacity all the way to absolute zero violates the third law of thermodynamics. We can verify this more fundamentally by substituting CV in Eq. (14), which yields

In the limit T0 → 0 this expression diverges, again contradicting the third law of thermodynamics.

The conflict is resolved as follows: At a certain temperature the quantum nature of matter starts to dominate the behavior. Fermi particles follow Fermi–Dirac statistics and Bose particles follow Bose–Einstein statistics. In both cases the heat capacity at low temperatures is no longer temperature independent, even for ideal gases. For Fermi gases

with the Fermi temperature TF given by

Here NA is the Avogadro constant, Vm the molar volume, and M the molar mass.

For Bose gases

with TB given by

The specific heats given by Eq. (14) and (16) both satisfy Eq. (12). Indeed, they are power laws with α = 1 and α = ⁠3/2⁠ respectively.

Even within a purely classical setting, the density of a classical ideal gas at fixed particle number becomes arbitrarily high as T goes to zero, so the interparticle spacing goes to zero. The assumption of non-interacting particles presumably breaks down when they are sufficiently close together, so the value of CV gets modified away from its ideal constant value.

### Vapor pressure
The only liquids near absolute zero are 3He and 4He. Their heat of evaporation has a limiting value given by

with L0 and Cp constant. If we consider a container partly filled with liquid and partly gas, the entropy of the liquid–gas mixture is

where Sl(T) is the entropy of the liquid and x is the gas fraction. Clearly the entropy change during the liquid–gas transition (x from 0 to 1) diverges in the limit of T → 0. This violates Eq. (8). Nature solves this paradox as follows: at temperatures below about 100 mK, the vapor pressure 10×10−31 mmHg is so low that the gas density is lower than the best vacuum in the universe. In other words, below 100 mK there is simply no gas above the liquid.

### Miscibility
If liquid helium with mixed 3He and 4He were cooled to absolute zero, the liquid must have zero entropy. This either means they are ordered perfectly as a mixed liquid, which is impossible for a liquid, or that they fully separate out into two layers of pure liquid. This is precisely what happens.

For example, if a solution with 3 3He to 2 4He atoms were cooled, it would start the separation at 0.9 K, purifying more and more, until at absolute zero, when the upper layer becomes purely 3He, and the lower layer becomes purely 4He.

### Surface tension
Let 
{\displaystyle \sigma }
 be the surface tension of liquid, then the entropy per area is 

{\displaystyle -d\sigma /dT}
. So if a liquid can exist down to absolute zero, then since its entropy is constant no matter its shape at absolute zero, its entropy per area must converge to zero. That is, its surface tension would become constant at low temperatures. In particular, the surface tension of 3He is well-approximated by 

{\displaystyle \sigma =\sigma _{0}-bT^{2}}
 for some parameters 

{\displaystyle \sigma _{0},b}
.

### Latent heat of melting
The melting curves of 3He and 4He both extend down to absolute zero at finite pressure. At the melting pressure, liquid and solid are in equilibrium. The third law demands that the entropies of the solid and liquid are equal at T = 0. As a result, the latent heat of melting is zero, and the slope of the melting curve extrapolates to zero as a result of the Clausius–Clapeyron equation.

### Thermal expansion coefficient
The thermal expansion coefficient is defined as

With the Maxwell relation

and Eq. (8) with X = p it is shown that

So the thermal expansion coefficient of all materials must go to zero at 0 K.
