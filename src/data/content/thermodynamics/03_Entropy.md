# Entropy

Entropy is a thermodynamic state variable that quantifies the probabilistic distribution of accessible microstates in a system. The term and the concept are used in diverse fields, from classical thermodynamics (where it was first recognized), to the microscopic description of nature in statistical physics, and the principles of information theory. It has found far-ranging applications in chemistry and physics, in biological systems and their relation to life, in cosmology, economics, and information systems including the transmission of information in telecommunication.

## Definitions and descriptions

The concept of entropy is described by two principal approaches, the macroscopic perspective of classical thermodynamics, and the microscopic description central to statistical mechanics. The classical approach defines entropy in terms of macroscopically measurable physical properties, such as bulk mass, volume, pressure, and temperature. The statistical definition of entropy defines it in terms of the statistics of the motions of the microscopic constituents of a system — modelled at first classically, e.g. Newtonian particles constituting a gas, and later quantum-mechanically (photons, phonons, spins, etc.). The two approaches form a consistent, unified view of the same phenomenon as expressed in the second law of thermodynamics, which has found universal applicability to physical processes.

### State variables and functions of state
Many thermodynamic properties are defined by physical variables that define a state of thermodynamic equilibrium, which essentially are state variables. State variables depend only on the equilibrium condition, not on the path evolution to that state. State variables can be functions of state, also called state functions, in a sense that one state variable is a mathematical function of other state variables. Often, if some properties of a system are determined, they are sufficient to determine the state of the system and thus other properties' values. For example, temperature and pressure of a given quantity of gas determine its state, and thus also its volume via the ideal gas law. A system composed of a pure substance of a single phase at a particular uniform temperature and pressure is determined, and is thus a particular state, and has a particular volume.  The fact that entropy is a function of state makes it useful. In the Carnot cycle, the working fluid returns to the same state that it had at the start of the cycle, hence the change or line integral of any state function, such as entropy, over this reversible cycle is zero.

### Reversible process
The entropy change 
{\textstyle \mathrm {d} S}
 of a system can be well-defined as a small portion of heat 

{\textstyle \delta Q_{\mathsf {rev}}}
 transferred from the surroundings to the system during a reversible process divided by the temperature 
 of the system during this heat transfer:

{\displaystyle \mathrm {d} S={\frac {\delta Q_{\mathsf {rev}}}{T}}}
The reversible process is quasistatic (i.e., it occurs without any dissipation, deviating only infinitesimally from the thermodynamic equilibrium), and it may conserve total entropy. For example, in the Carnot cycle, while the heat flow from a hot reservoir to a cold reservoir represents the increase in the entropy in a cold reservoir, the work output, if reversibly and perfectly stored, represents the decrease in the entropy which could be used to operate the heat engine in reverse, returning to the initial state; thus the total entropy change may still be zero at all times if the entire process is reversible.

In contrast, an irreversible process increases the total entropy of the system and surroundings. Any process that happens quickly enough to deviate from the thermal equilibrium cannot be reversible; the total entropy increases, and the potential for maximum work to be done during the process is lost.

### Carnot cycle
The concept of entropy arose from Rudolf Clausius's study of the Carnot cycle which is a thermodynamic cycle performed by a Carnot heat engine as a reversible heat engine. In a Carnot cycle, the heat 
{\textstyle Q_{\mathsf {H}}}
 is transferred from a hot reservoir to a working gas at the constant temperature 
{\textstyle T_{\mathsf {H}}}
 during isothermal expansion stage and the heat 
{\textstyle Q_{\mathsf {C}}}
 is transferred from a working gas to a cold reservoir at the constant temperature 
{\textstyle T_{\mathsf {C}}}
 during isothermal compression stage. According to Carnot's theorem, a heat engine with two thermal reservoirs can produce a work 
 if and only if there is a temperature difference between reservoirs. Originally, Carnot did not distinguish between heats 
{\textstyle Q_{\mathsf {H}}}
 and 
{\textstyle Q_{\mathsf {C}}}
, as he assumed caloric theory to be valid and hence that the total heat in the system was conserved. But in fact, the magnitude of heat 
{\textstyle Q_{\mathsf {H}}}
 is greater than the magnitude of heat 
{\textstyle Q_{\mathsf {C}}}
. Through the efforts of Clausius and Kelvin, the work 
 done by a reversible heat engine was found to be the product of the Carnot efficiency (i.e., the efficiency of all reversible heat engines with the same pair of thermal reservoirs) and the heat 
{\textstyle Q_{\mathsf {H}}}
 absorbed by a working body of the engine during isothermal expansion:

{\displaystyle W={\frac {T_{\mathsf {H}}-T_{\mathsf {C}}}{T_{\mathsf {H}}}}\cdot Q_{\mathsf {H}}=\left(1-{\frac {T_{\mathsf {C}}}{T_{\mathsf {H}}}}\right)Q_{\mathsf {H}}}
To derive the Carnot efficiency Kelvin had to evaluate the ratio of the work output to the heat absorbed during the isothermal expansion with the help of the Carnot–Clapeyron equation, which contained an unknown function called the Carnot function. The possibility that the Carnot function could be the temperature as measured from a zero point of temperature was suggested by Joule in a letter to Kelvin. This allowed Kelvin to establish his absolute temperature scale.

It is known that a work 

 produced by an engine over a cycle equals to a net heat 
{\textstyle Q_{\Sigma }=\left\vert Q_{\mathsf {H}}\right\vert -\left\vert Q_{\mathsf {C}}\right\vert }
 absorbed over a cycle. Thus, with the sign convention for a heat 
 transferred in a thermodynamic process (

 for an absorption and 

 for a dissipation) we get:

{\displaystyle W-Q_{\Sigma }=W-\left\vert Q_{\mathsf {H}}\right\vert +\left\vert Q_{\mathsf {C}}\right\vert =W-Q_{\mathsf {H}}-Q_{\mathsf {C}}=0}
Since this equality holds over an entire Carnot cycle, it gave Clausius the hint that at each stage of the cycle the difference between a work and a net heat would be conserved, rather than a net heat itself. Which means there exists a state function 
 with a change of 

{\textstyle \mathrm {d} U=\delta Q-\mathrm {d} W}
. It is called an internal energy and forms a central concept for the first law of thermodynamics.

Finally, comparison for both the representations of a work output in a Carnot cycle gives us:

{\displaystyle {\frac {\left\vert Q_{\mathsf {H}}\right\vert }{T_{\mathsf {H}}}}-{\frac {\left\vert Q_{\mathsf {C}}\right\vert }{T_{\mathsf {C}}}}={\frac {Q_{\mathsf {H}}}{T_{\mathsf {H}}}}+{\frac {Q_{\mathsf {C}}}{T_{\mathsf {C}}}}=0}
Similarly to the derivation of internal energy, this equality implies existence of a state function 
 with a change of 

{\textstyle \mathrm {d} S=\delta Q/T}
 and which is conserved over an entire cycle. Clausius called this state function entropy.

In addition, the total change of entropy in both thermal reservoirs over Carnot cycle is zero too, since the inversion of a heat transfer direction means a sign inversion for the heat transferred during isothermal stages:

{\displaystyle -{\frac {Q_{\mathsf {H}}}{T_{\mathsf {H}}}}-{\frac {Q_{\mathsf {C}}}{T_{\mathsf {C}}}}=\Delta S_{\mathsf {r,H}}+\Delta S_{\mathsf {r,C}}=0}
Here we denote the entropy change for a thermal reservoir by 

{\textstyle \Delta S_{{\mathsf {r}},i}=-Q_{i}/T_{i}}
, where 
 is either 
{\textstyle {\mathsf {H}}}
 for a hot reservoir or 
{\textstyle {\mathsf {C}}}
 for a cold one.

If we consider a heat engine which is less effective than Carnot cycle (i.e., the work 
 produced by this engine is less than the maximum predicted by Carnot's theorem), its work output is capped by Carnot efficiency as:

{\displaystyle W<\left(1-{\frac {T_{\mathsf {C}}}{T_{\mathsf {H}}}}\right)Q_{\mathsf {H}}}
Substitution of the work 
 as the net heat into the inequality above gives us:

{\displaystyle {\frac {Q_{\mathsf {H}}}{T_{\mathsf {H}}}}+{\frac {Q_{\mathsf {C}}}{T_{\mathsf {C}}}}<0}
or in terms of the entropy change 

{\textstyle \Delta S_{{\mathsf {r}},i}}
:

{\displaystyle \Delta S_{\mathsf {r,H}}+\Delta S_{\mathsf {r,C}}>0}
A Carnot cycle and an entropy as shown above prove to be useful in the study of any classical thermodynamic heat engine: other cycles, such as an Otto, Diesel or Brayton cycle, could be analysed from the same standpoint. Notably, any machine or cyclic process converting heat into work (i.e., heat engine) that is claimed to produce an efficiency greater than the one of Carnot is not viable — due to violation of the second law of thermodynamics.

For further analysis of sufficiently discrete systems, such as an assembly of particles, statistical thermodynamics must be used. Additionally, descriptions of devices operating near the limit of de Broglie waves, e.g. photovoltaic cells, have to be consistent with quantum statistics.

### Classical thermodynamics

The thermodynamic definition of entropy was developed in the early 1850s by Rudolf Clausius and essentially describes how to measure the entropy of an isolated system in thermodynamic equilibrium with its parts. Clausius created the term entropy as an extensive thermodynamic variable that was shown to be useful in characterizing the Carnot cycle. Heat transfer in the isotherm steps (isothermal expansion and isothermal compression) of the Carnot cycle was found to be proportional to the temperature of a system (known as its absolute temperature). This relationship was expressed in an increment of entropy that is equal to incremental heat transfer divided by temperature. Entropy was found to vary in the thermodynamic cycle but eventually returned to the same value at the end of every cycle. Thus it was found to be a function of state, specifically a thermodynamic state of the system.

While Clausius based his definition on a reversible process, there are also irreversible processes that change entropy. Following the second law of thermodynamics, entropy of an isolated system always increases for irreversible processes. The difference between an isolated system and closed system is that energy may not flow to and from an isolated system, but energy flow to and from a closed system is possible. Nevertheless, for both closed and isolated systems, and indeed, also in open systems, irreversible thermodynamics processes may occur.

According to the Clausius equality, for a reversible cyclic thermodynamic process: 

{\displaystyle \oint {\frac {\delta Q_{\mathsf {rev}}}{T}}=0}
which means the line integral 

{\textstyle \int _{L}{\delta Q_{\mathsf {rev}}/T}}
 is path-independent. Thus we can define a state function 
, called entropy:

{\displaystyle \mathrm {d} S={\frac {\delta Q_{\mathsf {rev}}}{T}}}
Therefore, thermodynamic entropy has the dimension of energy divided by temperature, and the unit joule per kelvin (J/K) in the International System of Units (SI).

To find the entropy difference between any two states of the system, the integral must be evaluated for some reversible path between the initial and final states. Since an entropy is a state function, the entropy change of the system for an irreversible path is the same as for a reversible path between the same two states. However, the heat transferred to or from the surroundings is different as well as its entropy change.

We can calculate the change of entropy only by integrating the above formula. To obtain the absolute value of the entropy, we consider the third law of thermodynamics: perfect crystals at the absolute zero have an entropy 

.

From a macroscopic perspective, in classical thermodynamics the entropy is interpreted as a state function of a thermodynamic system: that is, a property depending only on the current state of the system, independent of how that state came to be achieved. In any process, where the system gives up 

{\displaystyle \Delta E}
 of energy to the surrounding at the temperature 
, its entropy falls by 

{\textstyle \Delta S}
 and at least 

{\textstyle T\cdot \Delta S}
 of that energy must be given up to the system's surroundings as a heat. Otherwise, this process cannot go forward. In classical thermodynamics, the entropy of a system is defined if and only if it is in a thermodynamic equilibrium (though a chemical equilibrium is not required: for example, the entropy of a mixture of two moles of hydrogen and one mole of oxygen in standard conditions is well-defined).

### Statistical mechanics

The statistical definition was developed by Ludwig Boltzmann in the 1870s by analysing the statistical behaviour of the microscopic components of the system. Boltzmann showed that this definition of entropy was equivalent to the thermodynamic entropy to within a constant factor—known as the Boltzmann constant. In short, the thermodynamic definition of entropy provides the experimental verification of entropy, while the statistical definition of entropy extends the concept, providing an explanation and a deeper understanding of its nature.

The interpretation of entropy in statistical mechanics is the measure of uncertainty, disorder, or mixedupness in the phrase of Gibbs, which remains about a system after its observable macroscopic properties, such as temperature, pressure and volume, have been taken into account. For a given set of macroscopic variables, the entropy measures the degree to which the probability of the system is spread out over different possible microstates. In contrast to the macrostate, which characterizes plainly observable average quantities, a microstate specifies all molecular details about the system including the position and momentum of every molecule. The more such states are available to the system with appreciable probability, the greater the entropy. In statistical mechanics, entropy is a measure of the number of ways a system can be arranged, often taken to be a measure of "disorder" (the higher the entropy, the higher the disorder). This definition describes the entropy as being proportional to the natural logarithm of the number of possible microscopic configurations of the individual atoms and molecules of the system (microstates) that could cause the observed macroscopic state (macrostate) of the system. The constant of proportionality is the Boltzmann constant.

The Boltzmann constant, and therefore entropy, have dimensions of energy divided by temperature, which has a unit of joules per kelvin (J⋅K−1) in the International System of Units (or kg⋅m2⋅s−2⋅K−1 in terms of base units). The entropy of a substance is usually given as an intensive property — either entropy per unit mass (SI unit: J⋅K−1⋅kg−1) or entropy per unit amount of substance (SI unit: J⋅K−1⋅mol−1).

Specifically, entropy is a logarithmic measure for the system with a number of states, each with a probability 
 of being occupied (usually given by the Boltzmann distribution):

{\displaystyle S=-k_{\mathsf {B}}\sum _{i}{p_{i}\ln {p_{i}}}}
where 
{\textstyle k_{\mathsf {B}}}
 is the Boltzmann constant and the summation is performed over all possible microstates of the system.

In case states are defined in a continuous manner, the summation is replaced by an integral over all possible states, or equivalently we can consider the expected value of the logarithm of the probability that a microstate is occupied:

{\displaystyle S=-k_{\mathsf {B}}\left\langle \ln {p}\right\rangle }
This definition assumes the basis states to be picked in a way that there is no information on their relative phases. In a general case the expression is:

{\displaystyle S=-k_{\mathsf {B}}\ \mathrm {tr} {\left({\hat {\rho }}\times \ln {\hat {\rho }}\right)}}
where 

{\textstyle {\hat {\rho }}}
 is a density matrix, 

{\displaystyle \mathrm {tr} }
 is a trace operator and 
{\displaystyle \ln }
 is a matrix logarithm. The density matrix formalism is not required if the system is in thermal equilibrium so long as the basis states are chosen to be eigenstates of the Hamiltonian. For most practical purposes it can be taken as the fundamental definition of entropy since all other formulae for 
 can be derived from it, but not vice versa.

In what has been called the fundamental postulate in statistical mechanics, among system microstates of the same energy (i.e., degenerate microstates) each microstate is assumed to be populated with equal probability 

{\textstyle p_{i}=1/\Omega }
, where 
{\textstyle \Omega }
 is the number of microstates whose energy equals that of the system. Usually, this assumption is justified for an isolated system in a thermodynamic equilibrium. Then in case of an isolated system the previous formula reduces to:

{\displaystyle S=k_{\mathsf {B}}\ln {\Omega }}
In thermodynamics, such a system is one with a fixed volume, number of molecules, and internal energy, called a microcanonical ensemble.

The most general interpretation of entropy is as a measure of the extent of uncertainty about a system. The equilibrium state of a system maximizes the entropy because it does not reflect all information about the initial conditions, except for the conserved variables. This uncertainty is not of the everyday subjective kind, but rather the uncertainty inherent to the experimental method and interpretative model.

The interpretative model has a central role in determining entropy. The qualifier "for a given set of macroscopic variables" above has deep implications when two observers use different sets of macroscopic variables. For example, consider observer A using variables 
, 
, 
 and observer B using variables 
, 
, 
, 
. If observer B changes variable 
, then observer A will see a violation of the second law of thermodynamics, since he does not possess information about variable 
 and its influence on the system. In other words, one must choose a complete set of macroscopic variables to describe the system, i.e. every independent parameter that may change during experiment.

Entropy can also be defined for any Markov processes with reversible dynamics and the detailed balance property.

In Boltzmann's 1896 Lectures on Gas Theory, he showed that this expression gives a measure of entropy for systems of atoms and molecules in the gas phase, thus providing a measure for the entropy of classical thermodynamics.

### Entropy of a system

In a thermodynamic system, pressure and temperature tend to become uniform over time because the equilibrium state has higher probability (more possible combinations of microstates) than any other state. As an example, for a glass of ice water in air at room temperature, the difference in temperature between the warm room (the surroundings) and the cold glass of ice and water (the system and not part of the room) decreases as portions of the thermal energy from the warm surroundings spread to the cooler system of ice and water. Over time the temperature of the glass and its contents and the temperature of the room become equal. In other words, the entropy of the room has decreased as some of its energy has been dispersed to the ice and water, of which the entropy has increased.

However, as calculated in the example, the entropy of the system of ice and water has increased more than the entropy of the surrounding room has decreased. In an isolated system such as the room and ice water taken together, the dispersal of energy from warmer to cooler always results in a net increase in entropy. Thus, when the "universe" of the room and ice water system has reached a temperature equilibrium, the entropy change from the initial state is at a maximum. The entropy of the thermodynamic system is a measure of how far the equalisation has progressed.

Thermodynamic entropy is a non-conserved state function that is of great importance in the sciences of physics and chemistry. Historically, the concept of entropy evolved to explain why some processes (permitted by conservation laws) occur spontaneously while their time reversals (also permitted by conservation laws) do not; systems tend to progress in the direction of increasing entropy. For isolated systems, entropy never decreases. This fact has several important consequences in science: first, it prohibits "perpetual motion" machines; and second, it implies the arrow of entropy has the same direction as the arrow of time. Increases in the total entropy of system and surroundings correspond to irreversible changes, because some energy is expended as waste heat, limiting the amount of work a system can do.

Unlike many other functions of state, entropy cannot be directly observed but must be calculated. Absolute standard molar entropy of a substance can be calculated from the measured temperature dependence of its heat capacity. The molar entropy of ions is obtained as a difference in entropy from a reference state defined as zero entropy. The second law of thermodynamics states that the entropy of an isolated system must increase or remain constant. Therefore, entropy is not a conserved quantity: for example, in an isolated system with non-uniform temperature, heat might irreversibly flow and the temperature become more uniform such that entropy increases. Chemical reactions cause changes in entropy and system entropy, in conjunction with enthalpy, plays an important role in determining in which direction a chemical reaction spontaneously proceeds.

Rice University's definition of entropy is that it is "a measurement of a system's disorder and its inability to do work in a system". For instance, a substance at uniform temperature is at maximum entropy and cannot drive a heat engine. A substance at non-uniform temperature is at a lower entropy (than if the heat distribution is allowed to even out) and some of the thermal energy can drive a heat engine.

A special case of entropy increase, the entropy of mixing, occurs when two or more different substances are mixed. If the substances are at the same temperature and pressure, there is no net exchange of heat or work – the entropy change is entirely due to the mixing of the different substances. At a statistical mechanical level, this results due to the change in available volume per particle with mixing.

### Equivalence of definitions
Proofs of equivalence between the entropy in statistical mechanics — the Gibbs entropy formula:

{\displaystyle S=-k_{\mathsf {B}}\sum _{i}{p_{i}\ln {p_{i}}}}
and the entropy in classical thermodynamics:

{\displaystyle \mathrm {d} S={\frac {\delta Q_{\mathsf {rev}}}{T}}}
together with the fundamental thermodynamic relation are known for the microcanonical ensemble, the canonical ensemble, the grand canonical ensemble, and the isothermal–isobaric ensemble. These proofs are based on the probability density of microstates of the generalised Boltzmann distribution and the identification of the thermodynamic internal energy as the ensemble average 

{\textstyle U=\left\langle E_{i}\right\rangle }
. Thermodynamic relations are then employed to derive the well-known Gibbs entropy formula. However, the equivalence between the Gibbs entropy formula and the thermodynamic definition of entropy is not a fundamental thermodynamic relation but rather a consequence of the form of the generalized Boltzmann distribution.

Furthermore, it has been shown that the definitions of entropy in statistical mechanics is the only entropy that is equivalent to the classical thermodynamics entropy under the following postulates:

## Second law of thermodynamics
The second law of thermodynamics requires that, in general, the total entropy of any system does not decrease other than by increasing the entropy of some other system. Hence, in a system isolated from its environment, the entropy of that system tends not to decrease. It follows that heat cannot flow from a colder body to a hotter body without the application of work to the colder body. Secondly, it is impossible for any device operating on a cycle to produce net work from a single temperature reservoir; the production of net work requires flow of heat from a hotter reservoir to a colder reservoir, or a single expanding reservoir undergoing adiabatic cooling, which performs adiabatic work. As a result, there is no possibility of a perpetual motion machine. It follows that a reduction in the increase of entropy in a specified process, such as a chemical reaction, means that it is energetically more efficient.

It follows from the second law of thermodynamics that the entropy of a system that is not isolated may decrease. An air conditioner, for example, may cool the air in a room, thus reducing the entropy of the air of that system. The heat expelled from the room (the system), which the air conditioner transports and discharges to the outside air, always makes a bigger contribution to the entropy of the environment than the decrease of the entropy of the air of that system. Thus, the total of entropy of the room plus the entropy of the environment increases, in agreement with the second law of thermodynamics.

In mechanics, the second law in conjunction with the fundamental thermodynamic relation places limits on a system's ability to do useful work. The entropy change of a system at temperature 
 absorbing an infinitesimal amount of heat 

{\textstyle \delta q}
 in a reversible way, is given by 

{\textstyle \delta q/T}
. More explicitly, an energy 
 is not available to do useful work, where 
 is the temperature of the coldest accessible reservoir or heat sink external to the system. For further discussion, see Exergy.

Statistical mechanics demonstrates that entropy is governed by probability, thus allowing for a decrease in disorder even in an isolated system. Although this is possible, such an event has a small probability of occurring, making it unlikely.

The applicability of a second law of thermodynamics is limited to systems in or sufficiently near equilibrium state, so that they have defined entropy. Some inhomogeneous systems out of thermodynamic equilibrium still satisfy the hypothesis of local thermodynamic equilibrium, so that entropy density is locally defined as an intensive quantity. For such systems, there may apply a principle of maximum time rate of entropy production. It states that such a system may evolve to a steady state that maximises its time rate of entropy production. This does not mean that such a system is necessarily always in a condition of maximum time rate of entropy production; it means that it may evolve to such a steady state.

## Entropy change formulas for simple processes
For certain simple transformations in systems of constant composition, the entropy changes are given by simple formulas.

### Isothermal expansion or compression of an ideal gas
For the expansion (or compression) of an ideal gas from an initial volume 
 and pressure 
 to a final volume 
 and pressure 
 at any constant temperature, the change in entropy is given by:

{\displaystyle \Delta S=nR\ln {\frac {V}{V_{0}}}=-nR\ln {\frac {P}{P_{0}}}}
Here 
 is the amount of gas (in moles) and 
 is the ideal gas constant. These equations also apply for expansion into a finite vacuum or a throttling process, where the temperature, internal energy and enthalpy for an ideal gas remain constant.

### Cooling and heating
For pure heating or cooling of any system (gas, liquid or solid) at constant pressure from an initial temperature 
 to a final temperature 
, the entropy change is:

{\textstyle \Delta S=nC_{\mathrm {P} }\ln {\frac {T}{T_{0}}}}

provided that the constant-pressure molar heat capacity (or specific heat) 
{\textstyle C_{\mathrm {P} }}
 is constant and that no phase transition occurs in this temperature interval.

Similarly at constant volume, the entropy change is:

{\displaystyle \Delta S=nC_{\mathrm {V} }\ln {\frac {T}{T_{0}}}}
where the constant-volume molar heat capacity 
{\textstyle C_{\mathrm {V} }}
 is constant and there is no phase change.

At low temperatures near absolute zero, heat capacities of solids quickly drop off to near zero, so the assumption of constant heat capacity does not apply.

Since entropy is a state function, the entropy change of any process in which temperature and volume both vary is the same as for a path divided into two steps – heating at constant volume and expansion at constant temperature. For an ideal gas, the total entropy change is:

{\displaystyle \Delta S=nC_{\mathrm {V} }\ln {\frac {T}{T_{0}}}+nR\ln {\frac {V}{V_{0}}}}
Similarly if the temperature and pressure of an ideal gas both vary:

{\displaystyle \Delta S=nC_{\mathrm {P} }\ln {\frac {T}{T_{0}}}-nR\ln {\frac {P}{P_{0}}}}

### Phase transitions
Reversible phase transitions occur at constant temperature and pressure. The reversible heat is the enthalpy change for the transition, and the entropy change is the enthalpy change divided by the thermodynamic temperature. For fusion (i.e., melting) of a solid to a liquid at the melting point 
{\textstyle T_{\mathsf {m}}}
, the entropy of fusion is:

{\displaystyle \Delta S_{\mathsf {fus}}={\frac {\Delta H_{\mathsf {fus}}}{T_{\mathsf {m}}}}.}
Similarly, for vaporisation of a liquid to a gas at the boiling point 
{\displaystyle T_{\mathsf {b}}}
, the entropy of vaporisation is:

{\displaystyle \Delta S_{\mathsf {vap}}={\frac {\Delta H_{\mathsf {vap}}}{T_{\mathsf {b}}}}}

## Approaches to understanding entropy
As a fundamental aspect of thermodynamics and physics, several different approaches to entropy beyond that of Clausius and Boltzmann are valid.

### Standard textbook definitions
The following is a list of additional definitions of entropy from a collection of textbooks:

a measure of energy dispersal at a specific temperature.

a measure of disorder in the universe or of the availability of the energy in a system to do work.

a measure of a system's thermal energy per unit temperature that is unavailable for doing useful work.

In Boltzmann's analysis in terms of constituent particles, entropy is a measure of the number of possible microscopic states (or microstates) of a system in thermodynamic equilibrium.

### Order and disorder

Entropy is often loosely associated with the amount of order or disorder, or of chaos, in a thermodynamic system. The traditional qualitative description of entropy is that it refers to changes in the state of the system and is a measure of "molecular disorder" and the amount of wasted energy in a dynamical energy transformation from one state or form to another. In this direction, several recent authors have derived exact entropy formulas to account for and measure disorder and order in atomic and molecular assemblies. One of the simpler entropy order/disorder formulas is that derived in 1984 by thermodynamic physicist Peter Landsberg, based on a combination of thermodynamics and information theory arguments. He argues that when constraints operate on a system, such that it is prevented from entering one or more of its possible or permitted states, as contrasted with its forbidden states, the measure of the total amount of "disorder" and "order" in the system are each given by:

{\displaystyle {\mathsf {Disorder}}={\frac {C_{\mathsf {D}}}{C_{\mathsf {I}}}}}

{\displaystyle {\mathsf {Order}}=1-{\frac {C_{\mathsf {O}}}{C_{\mathsf {I}}}}}

Here, 
{\textstyle C_{\mathsf {D}}}
 is the "disorder" capacity of the system, which is the entropy of the parts contained in the permitted ensemble, 
{\textstyle C_{\mathsf {I}}}
 is the "information" capacity of the system, an expression similar to Shannon's channel capacity, and 
{\textstyle C_{\mathsf {O}}}
 is the "order" capacity of the system.

### Energy dispersal

The concept of entropy can be described qualitatively as a measure of energy dispersal at a specific temperature. Similar terms have been in use from early in the history of classical thermodynamics, and with the development of statistical thermodynamics and quantum theory, entropy changes have been described in terms of the mixing or "spreading" of the total energy of each constituent of a system over its particular quantised energy levels.

Ambiguities in the terms disorder and chaos, which usually have meanings directly opposed to equilibrium, contribute to widespread confusion and hamper comprehension of entropy for most students. As the second law of thermodynamics shows, in an isolated system internal portions at different temperatures tend to adjust to a single uniform temperature and thus produce equilibrium. A recently developed educational approach avoids ambiguous terms and describes such spreading out of energy as dispersal, which leads to loss of the differentials required for work even though the total energy remains constant in accordance with the first law of thermodynamics (compare discussion in next section). Physical chemist Peter Atkins, in his textbook Physical Chemistry, introduces entropy with the statement that "spontaneous changes are always accompanied by a dispersal of energy or matter and often both".

### Relating entropy to energy usefulness
It is possible (in a thermal context) to regard lower entropy as a measure of the effectiveness or usefulness of a particular quantity of energy.  Energy supplied at a higher temperature (i.e. with low entropy) tends to be more useful than the same amount of energy available at a lower temperature. Mixing a hot parcel of a fluid with a cold one produces a parcel of intermediate temperature, in which the overall increase in entropy represents a "loss" that can never be replaced.

As the entropy of the universe is steadily increasing, its total energy is becoming less useful. Eventually, this is theorised to lead to the heat death of the universe.

### Entropy and adiabatic accessibility
A definition of entropy based entirely on the relation of adiabatic accessibility between equilibrium states was given by E. H. Lieb and J. Yngvason in 1999. This approach has several predecessors, including the pioneering work of Constantin Carathéodory from 1909 and the monograph by R. Giles. An equivalent approach that extends the operational definition of entropy to the entire nonequilibrium domain was derived from a rigorous formulation of the general axiomatic foundations of thermodynamics by J. H. Keenan, G. N. Hatsopoulos, E. P. Gyftopoulos, G. P. Beretta, and E. Zanchini between 1965 and 2014. In the setting of Lieb and Yngvason, one starts by picking, for a unit amount of the substance under consideration, two reference states 
 and 
 such that the latter is adiabatically accessible from the former but not conversely. Defining the entropies of the reference states to be 0 and 1 respectively, the entropy of a state 
 is defined as the largest number 
{\textstyle \lambda }
 such that 
 is adiabatically accessible from a composite state consisting of an amount 
{\textstyle \lambda }
 in the state 
 and a complementary amount, 

{\textstyle (1-\lambda )}
, in the state 
. A simple but important result within this setting is that entropy is uniquely determined, apart from a choice of unit and an additive constant for each chemical element, by the following properties: it is monotonic with respect to the relation of adiabatic accessibility, additive on composite systems, and extensive under scaling.

### Entropy in quantum mechanics

In quantum statistical mechanics, the concept of entropy was developed by John von Neumann and is generally referred to as "von Neumann entropy":

{\displaystyle S=-k_{\mathsf {B}}\ \mathrm {tr} {\left({\hat {\rho }}\times \ln {\hat {\rho }}\right)}}
where 

{\textstyle {\hat {\rho }}}
 is the density matrix, 

{\textstyle \mathrm {tr} }
 is the trace operator and 
{\textstyle k_{\mathsf {B}}}
 is the Boltzmann constant.

This upholds the correspondence principle, because in the classical limit, when the phases between the basis states are purely random, this expression is equivalent to the familiar classical definition of entropy for states with classical probabilities 
:

{\displaystyle S=-k_{\mathsf {B}}\sum _{i}{p_{i}\ln {p_{i}}}}
i.e. in such a basis the density matrix is diagonal.

Von Neumann established a rigorous mathematical framework for quantum mechanics with his work Mathematische Grundlagen der Quantenmechanik. He provided in this work a theory of measurement, where the usual notion of wave function collapse is described as an irreversible process (the so-called von Neumann or projective measurement). Using this concept, in conjunction with the density matrix he extended the classical concept of entropy into the quantum domain.

### Information theory

When viewed in terms of information theory, the entropy state function is the amount of information in the system that is needed to fully specify the microstate of the system. Entropy is the measure of the amount of missing information before reception. Often called Shannon entropy, it was originally devised by Claude Shannon in 1948 to study the size of information of a transmitted message. The definition of information entropy is expressed in terms of a discrete set of probabilities 
 so that:

{\displaystyle H(X)=-\sum _{i=1}^{n}{p(x_{i})\log {p(x_{i})}}}
where the base of the logarithm determines the units (for example, the binary logarithm corresponds to bits).

In the case of transmitted messages, these probabilities were the probabilities that a particular message was actually transmitted, and the entropy of the message system was a measure of the average size of information of a message. For the case of equal probabilities (i.e. each message is equally probable), the Shannon entropy (in bits) is just the number of binary questions needed to determine the content of the message.

Most researchers consider information entropy and thermodynamic entropy directly linked to the same concept, while others argue that they are distinct. Both expressions are mathematically similar. If 
 is the number of microstates that can yield a given macrostate, and each microstate has the same a priori probability, then that probability is 

. The Shannon entropy (in nats) is:

{\displaystyle H=-\sum _{i=1}^{W}{p_{i}\ln {p_{i}}}=\ln {W}}
and if entropy is measured in units of 
 per nat, then the entropy is given by:

{\displaystyle H=k\ln {W}}
which is the Boltzmann entropy formula, where 
 is the Boltzmann constant, which may be interpreted as the thermodynamic entropy per nat. Some authors argue for dropping the word entropy for the 
 function of information theory and using Shannon's other term, "uncertainty", instead.

### Measurement
The entropy of a substance can be measured, although in an indirect way. The measurement, known as entropymetry, is done on a closed system with constant number of particles 
 and constant volume 
, and it uses the definition of temperature in terms of entropy, while limiting energy exchange to heat 

{\textstyle \mathrm {d} U\rightarrow \mathrm {d} Q}
:

{\displaystyle T:={\left({\frac {\partial U}{\partial S}}\right)}_{V,N}\ \Rightarrow \ \cdots \ \Rightarrow \ \mathrm {d} S={\frac {\mathrm {d} Q}{T}}}
The resulting relation describes how entropy changes 
{\textstyle \mathrm {d} S}
 when a small amount of energy 
{\textstyle \mathrm {d} Q}
 is introduced into the system at a certain temperature 
.

The process of measurement goes as follows. First, a sample of the substance is cooled as close to absolute zero as possible. At such temperatures, the entropy approaches zero – due to the definition of temperature. Then, small amounts of heat are introduced into the sample and the change in temperature is recorded, until the temperature reaches a desired value (usually 25 °C). The obtained data allows the user to integrate the equation above, yielding the absolute value of entropy of the substance at the final temperature. This value of entropy is called calorimetric entropy.
