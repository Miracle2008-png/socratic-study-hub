# Heat transfer

Heat transfer is a discipline of thermal engineering that concerns the generation, use, conversion, and exchange of thermal energy (heat) between physical systems. Heat transfer is classified into various mechanisms, such as thermal conduction, thermal convection, thermal radiation, transfer of energy by phase changes, and evaporative cooling. Engineers also consider the transfer of mass of differing chemical species (mass transfer in the form of advection), either cold or hot, to achieve heat transfer. While these mechanisms have distinct characteristics, they often occur simultaneously in the same system.

## Mechanisms

The fundamental modes of heat transfer are:

Advection

Advection is the transport mechanism of a fluid from one location to another, and is dependent on motion and momentum of that fluid.

Conduction or diffusion

The transfer of energy between objects that are in physical contact. Thermal conductivity is the property of a material to conduct heat and is evaluated primarily in terms of Fourier's law for heat conduction.

Convection

The transfer of energy between an object and its environment, due to fluid motion. The average temperature is a reference for evaluating properties related to convective heat transfer.

Radiation

The transfer of energy by the emission of electromagnetic radiation.

### Advection

By transferring matter, energy—including thermal energy—is moved by the physical transfer of a hot or cold object from one place to another. This can be as simple as placing hot water in a bottle and heating a bed, or the movement of an iceberg in changing ocean currents. A practical example is thermal hydraulics. This can be described by the formula: $\phi _{q}=v\rho c_{p}\Delta T$ where $\phi _{q}$ is heat flux (W/m2), $\rho$ is density (kg/m3), $c_{p}$ is heat capacity at constant pressure (J/kg·K), $\Delta T$ is the difference in temperature (K), $v$ is velocity (m/s).

### Conduction

On a microscopic scale, heat conduction occurs as hot, rapidly moving or vibrating atoms and molecules interact with neighboring atoms and molecules, transferring some of their energy (heat) to these neighboring particles. In other words, heat is transferred by conduction when adjacent atoms vibrate against one another, or as electrons move from one atom to another. Conduction is the most significant means of heat transfer within a solid or between solid objects in thermal contact. Fluids—especially gases—are less conductive. Thermal contact conductance is the study of heat conduction between solid bodies in contact. The process of heat transfer from one place to another place without the movement of particles is called conduction, such as when placing a hand on a cold glass of water—heat is conducted from the warm skin to the cold glass, but if the hand is held a few inches from the glass, little conduction would occur since air is a poor conductor of heat. Steady-state conduction is an idealized model of conduction that happens when the temperature difference driving the conduction is constant so that after a time, the spatial distribution of temperatures in the conducting object does not change any further (see Fourier's law). In steady state conduction, the amount of heat entering a section is equal to amount of heat coming out, since the temperature change (a measure of heat energy) is zero. An example of steady state conduction is the heat flow through walls of a warm house on a cold day—inside the house is maintained at a high temperature and, outside, the temperature stays low, so the transfer of heat per unit time stays near a constant rate determined by the insulation in the wall and the spatial distribution of temperature in the walls will be approximately constant over time.

Transient conduction (see Heat equation) occurs when the temperature within an object changes as a function of time. Analysis of transient systems is more complex, and analytic solutions of the heat equation are only valid for idealized model systems. Practical applications are generally investigated using numerical methods, approximation techniques, or empirical study.

### Convection

The flow of fluid may be forced by external processes, or sometimes (in gravitational fields) by buoyancy forces caused when thermal energy expands the fluid (for example in a fire plume), thus influencing its own transfer. The latter process is often called "natural convection". All convective processes also move heat partly by diffusion, as well. Another form of convection is forced convection. In this case, the fluid is forced to flow by using a pump, fan, or other mechanical means.

Convective heat transfer, or simply, convection, is the transfer of heat from one place to another by the movement of fluids, a process that is essentially the transfer of heat via mass transfer. The bulk motion of fluid enhances heat transfer in many physical situations, such as between a solid surface and the fluid. Convection is usually the dominant form of heat transfer in liquids and gases. Although sometimes discussed as a third method of heat transfer, convection is usually used to describe the combined effects of heat conduction within the fluid (diffusion) and heat transference by bulk fluid flow streaming. The process of transport by fluid streaming is known as advection, but pure advection is a term that is generally associated only with mass transport in fluids, such as advection of pebbles in a river. In the case of heat transfer in fluids, where transport by advection in a fluid is always also accompanied by transport via heat diffusion (also known as heat conduction) the process of heat convection is understood to refer to the sum of heat transport by advection and diffusion/conduction.

Free, or natural, convection occurs when bulk fluid motions (streams and currents) are caused by buoyancy forces that result from density variations due to variations of temperature in the fluid. Forced convection is a term used when the streams and currents in the fluid are induced by external means—such as fans, stirrers, and pumps—creating an artificially induced convection current.

#### Convection-cooling

Convective cooling is sometimes described as Newton's law of cooling:

The rate of heat loss of a body is proportional to the temperature difference between the body and its surroundings. However, by definition, the validity of Newton's law of cooling requires that the rate of heat loss from convection be a linear function of ("proportional to") the temperature difference that drives heat transfer, and in convective cooling this is sometimes not the case. In general, convection is not linearly dependent on temperature gradients, and in some cases is strongly nonlinear. In these cases, Newton's law does not apply.

### Convection vs. conduction

In a body of fluid that is heated from underneath its container, conduction, and convection can be considered to compete for dominance. If heat conduction is too great, fluid moving down by convection is heated by conduction so fast that its downward movement will be stopped due to its buoyancy, while fluid moving up by convection is cooled by conduction so fast that its driving buoyancy will diminish. On the other hand, if heat conduction is very low, a large temperature gradient may be formed and convection might be very strong.

The Rayleigh number ( $\mathrm {Ra}$ ) is the product of the Grashof ( $\mathrm {Gr}$ ) and Prandtl ( $\mathrm {Pr}$ ) numbers. It is a measure that determines the relative strength of conduction and convection. $\mathrm {Ra} =\mathrm {Gr} \cdot \mathrm {Pr} ={\frac {g\Delta \rho L^{3}}{\mu \alpha }}={\frac {g\beta \Delta TL^{3}}{\nu \alpha }}$ where

g is the acceleration due to gravity,

ρ is the density with $\Delta \rho$ being the density difference between the lower and upper ends,

μ is the dynamic viscosity,

α is the Thermal diffusivity,

β is the volume thermal expansivity (sometimes denoted α elsewhere),

T is the temperature,

ν is the kinematic viscosity, and

L is characteristic length.

The Rayleigh number can be understood as the ratio between the rate of heat transfer by convection to the rate of heat transfer by conduction; or, equivalently, the ratio between the corresponding timescales (i.e. conduction timescale divided by convection timescale), up to a numerical factor. This can be seen as follows, where all calculations are up to numerical factors depending on the geometry of the system.

The buoyancy force driving the convection is roughly $g\Delta \rho L^{3}$ , so the corresponding pressure is roughly $g\Delta \rho L$
. In steady state, this is canceled by the shear stress due to viscosity, and therefore roughly equals $\mu V/L=\mu /T_{\text{conv}}$ , where V is the typical fluid velocity due to convection and $T_{\text{conv}}$ the order of its timescale. The conduction timescale, on the other hand, is of the order of $T_{\text{cond}}=L^{2}/\alpha$
.

Convection occurs when the Rayleigh number is above 1,000–2,000.

### Radiation

Radiative heat transfer is the transfer of energy via thermal radiation, i.e., electromagnetic waves. It occurs across vacuum or any transparent medium (solid or fluid or gas). Thermal radiation is emitted by all objects at temperatures above absolute zero, due to random movements of atoms and molecules in matter. Since these atoms and molecules are composed of charged particles (protons and electrons), their movement results in the emission of electromagnetic radiation which carries away energy. Radiation is typically only important in engineering applications for very hot objects, or for objects with a large temperature difference.

When the objects and distances separating them are large in size and compared to the wavelength of thermal radiation, the rate of transfer of radiant energy is best described by the Stefan-Boltzmann equation: $\phi _{q}=\epsilon \sigma T^{4}.$
For radiative transfer between two objects, the equation is as follows: $\phi _{q}=\epsilon \sigma F(T_{a}^{4}-T_{b}^{4}),$ where $\phi _{q}$ is the heat flux, $\epsilon$ is the emissivity (unity for a black body), $\sigma$ is the Stefan–Boltzmann constant, $F$ is the view factor between two surfaces a and b, and $T_{a}$ and $T_{b}$ are the absolute temperatures (in kelvins or degrees Rankine) for the two objects.

The blackbody limit established by the Stefan-Boltzmann equation can be exceeded when the objects exchanging thermal radiation or the distances separating them are comparable in scale or smaller than the dominant thermal wavelength. The study of these cases is called near-field radiative heat transfer.

Radiation from the sun, or solar radiation, can be harvested for heat and power. Unlike conductive and convective forms of heat transfer, thermal radiation – arriving within a narrow-angle i.e. coming from a source much smaller than its distance – can be concentrated in a small spot by using reflecting mirrors, which is exploited in concentrating solar power generation or a burning glass. For example, the sunlight reflected from mirrors heats the PS10 solar power tower and during the day it can heat water to 285 °C (545 °F).

The reachable temperature at the target is limited by the temperature of the hot source of radiation. (T4-law lets the reverse flow of radiation back to the source rise.) The (on its surface) somewhat 4000 K hot sun allows to reach coarsely 3000 K (or 3000 °C, which is about 3273 K) at a small probe in the focus spot of a big concave, concentrating mirror of the Mont-Louis Solar Furnace in France.

## Phase transition

Phase transition or phase change, takes place in a thermodynamic system from one phase or state of matter to another one by heat transfer. Phase change examples are the melting of ice or the boiling of water.

The Mason equation explains the growth of a water droplet based on the effects of heat transport on evaporation and condensation.

Phase transitions involve the four fundamental states of matter:

Solid – Deposition, freezing, and solid-to-solid transformation.

Liquid – Condensation and melting / fusion.

Gas – Boiling / evaporation, recombination/ deionization, and sublimation.

Plasma – Ionization.

### Boiling

The boiling point of a substance is the temperature at which the vapor pressure of the liquid equals the pressure surrounding the liquid and the liquid evaporates resulting in an abrupt change in vapor volume.

In a closed system, saturation temperature and boiling point mean the same thing. The saturation temperature is the temperature for a corresponding saturation pressure at which a liquid boils into its vapor phase. The liquid can be said to be saturated with thermal energy. Any addition of thermal energy results in a phase transition.

At standard atmospheric pressure and low temperatures, no boiling occurs and the heat transfer rate is controlled by the usual single-phase mechanisms. As the surface temperature is increased, local boiling occurs and vapor bubbles nucleate, grow into the surrounding cooler fluid, and collapse. This is sub-cooled nucleate boiling, and is a very efficient heat transfer mechanism. At high bubble generation rates, the bubbles begin to interfere and the heat flux no longer increases rapidly with surface temperature (this is the departure from nucleate boiling, or DNB).

At similar standard atmospheric pressure and high temperatures, the hydrodynamically quieter regime of film boiling is reached. Heat fluxes across the stable vapor layers are low but rise slowly with temperature. Any contact between the fluid and the surface that may be seen probably leads to the extremely rapid nucleation of a fresh vapor layer ("spontaneous nucleation"). At higher temperatures still, a maximum in the heat flux is reached (the critical heat flux, or CHF).

The Leidenfrost Effect demonstrates how nucleate boiling slows heat transfer due to gas bubbles on the heater's surface. As mentioned, gas-phase thermal conductivity is much lower than liquid-phase thermal conductivity, so the outcome is a kind of "gas thermal barrier".

### Condensation

Condensation occurs when a vapor is cooled and changes its phase to a liquid. During condensation, the latent heat of vaporization must be released. The amount of heat is the same as that absorbed during vaporization at the same fluid pressure.

There are several types of condensation:

Homogeneous condensation, as during the formation of fog.

Condensation in direct contact with subcooled liquid.

Condensation on direct contact with a cooling wall of a heat exchanger: This is the most common mode used in industry:  Dropwise condensation is difficult to sustain reliably; therefore, industrial equipment is normally designed to operate in filmwise condensation mode.

### Melting

Melting is a thermal process that results in the phase transition of a substance from a solid to a liquid. The internal energy of a substance is increased, typically through heat or pressure, resulting in a rise of its temperature to the melting point, at which the ordering of ionic or molecular entities in the solid breaks down to a less ordered state and the solid liquefies. Molten substances generally have reduced viscosity with elevated temperature; an exception to this maxim is the element sulfur, whose viscosity increases to a point due to polymerization and then decreases with higher temperatures in its molten state.

## Modeling approaches

Heat transfer can be modeled in various ways.

### Heat equation

The heat equation is an important partial differential equation that describes the distribution of heat (or temperature variation) in a given region over time. In some cases, exact solutions of the equation are available; in other cases the equation must be solved numerically using computational methods such as DEM-based models for thermal/reacting particulate systems (as critically reviewed by Peng et al.).

### Lumped system analysis

Lumped system analysis often reduces the complexity of the equations to one first-order linear differential equation, in which case heating and cooling are described by a simple exponential solution, often referred to as Newton's law of cooling.

System analysis by the lumped capacitance model is a common approximation in transient conduction that may be used whenever heat conduction within an object is much faster than heat conduction across the boundary of the object. This is a method of approximation that reduces one aspect of the transient conduction system—that within the object—to an equivalent steady-state system. That is, the method assumes that the temperature within the object is completely uniform, although its value may change over time.

In this method, the ratio of the conductive heat resistance within the object to the convective heat transfer resistance across the object's boundary, known as the Biot number, is calculated. For small Biot numbers, the approximation of spatially uniform temperature within the object can be used: it can be presumed that heat transferred into the object has time to uniformly distribute itself, due to the lower resistance to doing so, as compared with the resistance to heat entering the object.

### Climate models

Climate models study the radiant heat transfer by using quantitative methods to simulate the interactions of the atmosphere, oceans, land surface, and ice.

## Engineering

Heat transfer has broad application to the functioning of numerous devices and systems. Heat-transfer principles may be used to preserve, increase, or decrease temperature in a wide variety of circumstances. Heat transfer methods are used in numerous disciplines, such as automotive engineering, thermal management of electronic devices and systems, climate control, insulation, materials processing, chemical engineering and power station engineering.

### Insulation, radiance and resistance

Thermal insulators are materials specifically designed to reduce the flow of heat by limiting conduction, convection, or both. Thermal resistance is a heat property and the measurement by which an object or material resists to heat flow (heat per time unit or thermal resistance) to temperature difference.

Radiance, or spectral radiance, is a measure of the quantity of radiation that passes through or is emitted. Radiant barriers are materials that reflect radiation, and therefore reduce the flow of heat from radiation sources. Good insulators are not necessarily good radiant barriers, and vice versa. Metal, for instance, is an excellent reflector and a poor insulator.

The effectiveness of a radiant barrier is indicated by its reflectivity, which is the fraction of radiation reflected. A material with a high reflectivity (at a given wavelength) has a low emissivity (at that same wavelength), and vice versa. At any specific wavelength, reflectivity=1 - emissivity. An ideal radiant barrier would have a reflectivity of 1, and would therefore reflect 100 percent of incoming radiation. Vacuum flasks, or Dewars, are silvered to approach this ideal. In the vacuum of space, satellites use multi-layer insulation, which consists of many layers of aluminized (shiny) Mylar to greatly reduce radiation heat transfer and control satellite temperature.

### Devices

A heat engine is a system that performs the conversion of a flow of thermal energy (heat) to mechanical energy to perform mechanical work. A thermocouple is a temperature-measuring device and a widely used type of temperature sensor for measurement and control, and can also be used to convert heat into electric power. A thermoelectric cooler is a solid-state electronic device that pumps (transfers) heat from one side of the device to the other when an electric current is passed through it. It is based on the Peltier effect. A thermal diode or thermal rectifier is a device that causes heat to flow preferentially in one direction.

#### Heat exchangers

A heat exchanger is used for more efficient heat transfer or to dissipate heat. Heat exchangers are widely used in refrigeration, air conditioning, space heating, power generation, and chemical processing. One common example of a heat exchanger is a car's radiator, in which the hot coolant fluid is cooled by the flow of air over the radiator's surface.

Common types of heat exchanger flows include parallel flow, counter flow, and cross flow. In parallel flow, both fluids move in the same direction while transferring heat; in counter flow, the fluids move in opposite directions; and in cross flow, the fluids move at right angles to each other. Common types of heat exchangers include shell and tube, double pipe, extruded finned pipe, spiral fin pipe, u-tube, and stacked plate. Each type has certain advantages and disadvantages over other types.

A heat sink is a component that transfers heat generated within a solid material to a fluid medium, such as air or a liquid. Examples of heat sinks are the heat exchangers used in refrigeration and air conditioning systems or the radiator in a car. A heat pipe is another heat-transfer device that combines thermal conductivity and phase transition to efficiently transfer heat between two solid interfaces.
