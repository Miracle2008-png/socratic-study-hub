# Chemical thermodynamics

Chemical thermodynamics is the study of the interrelation of heat and work with chemical reactions or with physical changes of state within the confines of the laws of thermodynamics. Chemical thermodynamics involves not only laboratory measurements of various thermodynamic properties, but also the application of mathematical methods to the study of chemical questions and the spontaneity of processes.

## Chemical energy

Chemical energy is the energy that can be released when chemical substances undergo a transformation through a chemical reaction. Breaking and making chemical bonds involves energy release or uptake, often as heat that may be either absorbed by or evolved from the chemical system.

Energy released (or absorbed) because of a reaction between chemical substances ("reactants") is equal to the difference between the energy content of the products and the reactants. This change in energy is called the change in internal energy of a chemical system. It can be calculated from 

{\displaystyle \Delta _{\rm {f}}U_{\mathrm {reactants} }^{\rm {o}}}
, the internal energy of formation of the reactant molecules related to the bond energies of the molecules under consideration, and 

{\displaystyle \Delta _{\rm {f}}U_{\mathrm {products} }^{\rm {o}}}
, the internal energy of formation of the product molecules. The change in internal energy is equal to the heat change if it is measured under conditions of constant volume (at STP condition), as in a closed rigid container such as a bomb calorimeter. However, at constant pressure, as in reactions in vessels open to the atmosphere, the measured heat is usually not equal to the internal energy change, because pressure-volume work also releases or absorbs energy. (The heat change at constant pressure is called the enthalpy change; in this case the widely tabulated enthalpies of formation are used.)

A related term is the heat of combustion, which is the chemical energy released due to a combustion reaction and of interest in the study of fuels. Food is similar to hydrocarbon and carbohydrate fuels, and when it is oxidized, its energy release is similar (though assessed differently than for a hydrocarbon fuel — see food energy).

In chemical thermodynamics, the term used for the chemical potential energy is chemical potential, and sometimes the Gibbs-Duhem equation is used.

## Chemical reactions

In most cases of interest in chemical thermodynamics there are internal degrees of freedom and processes, such as chemical reactions and phase transitions, which create entropy in the universe unless they are at equilibrium or are maintained at a "running equilibrium" through "quasi-static" changes by being coupled to constraining devices, such as pistons or electrodes, to deliver and receive external work. Even for homogeneous "bulk" systems, the free-energy functions depend on the composition, as do all the extensive thermodynamic potentials, including the internal energy. If the quantities { Ni }, the number of chemical species, are omitted from the formulae, it is impossible to describe compositional changes.

### Gibbs function or Gibbs Energy
For an unstructured, homogeneous "bulk" system, there are still various extensive compositional variables { Ni } that G depends on, which specify the composition (the amounts of each chemical substance, expressed as the numbers of molecules present or the numbers of moles). Explicitly,

{\displaystyle G=G(T,P,\{N_{i}\})\,.}

For the case where only PV work is possible,

{\displaystyle \mathrm {d} G=-S\,\mathrm {d} T+V\,\mathrm {d} P+\sum _{i}\mu _{i}\,\mathrm {d} N_{i}\,}

a restatement of the fundamental thermodynamic relation, in which μi is the chemical potential for the i-th component in the system

{\displaystyle \mu _{i}=\left({\frac {\partial G}{\partial N_{i}}}\right)_{T,P,N_{j\neq i},etc.}\,.}

The expression for dG is especially useful at constant T and P, conditions, which are easy to achieve experimentally and which approximate the conditions in living creatures

{\displaystyle (\mathrm {d} G)_{T,P}=\sum _{i}\mu _{i}\,\mathrm {d} N_{i}\,.}

### Chemical affinity

While this formulation is mathematically defensible, it is not particularly transparent since one does not simply add or remove molecules from a system. There is always a process involved in changing the composition; e.g., a chemical reaction (or many), or movement of molecules from one phase (liquid) to another (gas or solid). We should find a notation which does not seem to imply that the amounts of the components ( Ni ) can be changed independently. All real processes obey conservation of mass, and in addition, conservation of the numbers of atoms of each kind.

Consequently, we introduce an explicit variable to represent the degree of advancement of a process, a progress variable ξ for the extent of reaction (Prigogine & Defay, p. 18; Prigogine, pp. 4–7; Guggenheim, p. 37.62), and to the use of the partial derivative ∂G/∂ξ (in place of the widely used "ΔG", since the quantity at issue is not a finite change). The result is an understandable expression for the dependence of dG on chemical reactions (or other processes). If there is just one reaction

{\displaystyle (\mathrm {d} G)_{T,P}=\left({\frac {\partial G}{\partial \xi }}\right)_{T,P}\,\mathrm {d} \xi .\,}

If we introduce the stoichiometric coefficient for the i-th component in the reaction

{\displaystyle \nu _{i}=\partial N_{i}/\partial \xi \,}

(negative for reactants), which tells how many molecules of i are produced or consumed, we obtain an algebraic expression for the partial derivative

{\displaystyle \left({\frac {\partial G}{\partial \xi }}\right)_{T,P}=\sum _{i}\mu _{i}\nu _{i}=-\mathbb {A} \,}

where we introduce a concise and historical name for this quantity, the "affinity", symbolized by A, as introduced by Théophile de Donder in 1923.(De Donder; Progogine & Defay, p. 69; Guggenheim, pp. 37, 240) The minus sign ensures that in a spontaneous change, when the change in the Gibbs free energy of the process is negative, the chemical species have a positive affinity for each other. The differential of G takes on a simple form that displays its dependence on composition change

{\displaystyle (\mathrm {d} G)_{T,P}=-\mathbb {A} \,d\xi \,.}

If there are a number of chemical reactions going on simultaneously, as is usually the case,

{\displaystyle (\mathrm {d} G)_{T,P}=-\sum _{k}\mathbb {A} _{k}\,d\xi _{k}\,.}

with a set of reaction coordinates { ξj }, avoiding the notion that the amounts of the components ( Ni ) can be changed independently. The expressions above are equal to zero at thermodynamic equilibrium, while they are negative when chemical reactions proceed at a finite rate, producing entropy. This can be made even more explicit by introducing the reaction rates dξj/dt. For every physically independent process (Prigogine & Defay, p. 38; Prigogine, p. 24)

{\displaystyle \mathbb {A} \ {\dot {\xi }}\leq 0\,.}

This is a remarkable result since the chemical potentials are intensive system variables, depending only on the local molecular milieu. They cannot "know" whether temperature and pressure (or any other system variables) are going to be held constant over time. It is a purely local criterion and must hold regardless of any such constraints. Of course, it could have been obtained by taking partial derivatives of any of the other fundamental state functions, but nonetheless is a general criterion for (−T times) the entropy production from that spontaneous process; or at least any part of it that is not captured as external work. (See Constraints below.)

We now relax the requirement of a homogeneous "bulk" system by letting the chemical potentials and the affinity apply to any locality in which a chemical reaction (or any other process) is occurring. By accounting for the entropy production due to irreversible processes, the equality for dG is now replaced by

{\displaystyle \mathrm {d} G=-S\,\mathrm {d} T+V\,\mathrm {d} P-\sum _{k}\mathbb {A} _{k}\,\mathrm {d} \xi _{k}+\mathrm {\delta } W'\,}

or

{\displaystyle \mathrm {d} G_{T,P}=-\sum _{k}\mathbb {A} _{k}\,\mathrm {d} \xi _{k}+\mathrm {\delta } W'.\,}

Any decrease in the Gibbs function of a system is the upper limit for any isothermal, isobaric work that can be captured in the surroundings, or it may simply be dissipated, appearing as T times a corresponding increase in the entropy of the system and its surrounding. Or it may go partly toward doing external work and partly toward creating entropy. The important point is that the extent of reaction for a chemical reaction may be coupled to the displacement of some external mechanical or electrical quantity in such a way that one can advance only if the other also does. The coupling may occasionally be rigid, but it is often flexible and variable.

### Solutions
In solution chemistry and biochemistry, the Gibbs free energy decrease (∂G/∂ξ, in molar units, denoted cryptically by ΔG) is commonly used as a surrogate for (−T times) the global entropy produced by spontaneous chemical reactions in situations where no work is being done; or at least no "useful" work; i.e., other than perhaps ± P dV. The assertion that all spontaneous reactions have a negative ΔG is merely a restatement of the second law of thermodynamics, giving it the physical dimensions of energy and somewhat obscuring its significance in terms of entropy. When no useful work is being done, it would be less misleading to use the Legendre transforms of the entropy appropriate for constant T, or for constant T and P, the Massieu functions  −F/T and −G/T, respectively.

## Non-equilibrium

Generally the systems treated with the conventional chemical thermodynamics are either at equilibrium or near equilibrium. Ilya Prigogine developed the thermodynamic treatment of open systems that are far from equilibrium. In doing so he has discovered phenomena and structures of completely new and completely unexpected types. His generalized, nonlinear and irreversible thermodynamics has found surprising applications in a wide variety of fields.

The non-equilibrium thermodynamics has been applied for explaining how ordered structures e.g. the biological systems, can develop from disorder. Even if Onsager's relations are utilized, the classical principles of equilibrium in thermodynamics still show that linear systems close to equilibrium always develop into states of disorder which are stable to perturbations and cannot explain the occurrence of ordered structures.

Prigogine called these systems dissipative systems, because they are formed and maintained by the dissipative processes which take place because of the exchange of energy between the system and its environment and because they disappear if that exchange ceases. They may be said to live in symbiosis with their environment.

The method which Prigogine used to study the stability of the dissipative structures to perturbations is of very great general interest. It makes it possible to study the most varied problems, such as city traffic problems, the stability of insect communities, the development of ordered biological structures and the growth of cancer cells to mention but a few examples.

### System constraints
In this regard, it is crucial to understand the role of walls and other constraints, and the distinction between independent processes and coupling. Contrary to the clear implications of many reference sources, the previous analysis is not restricted to homogeneous, isotropic bulk systems which can deliver only PdV work to the outside world, but applies even to the most structured systems. There are complex systems with many chemical "reactions" going on at the same time, some of which are really only parts of the same, overall process. An independent process is one that could proceed even if all others were unaccountably stopped in their tracks. Understanding this is perhaps a "thought experiment" in chemical kinetics, but actual examples exist.

A gas-phase reaction at constant temperature and pressure which results in an increase in the number of molecules will lead to an increase in volume. Inside a cylinder closed with a piston, it can proceed only by doing work on the piston. The extent variable for the reaction can increase only if the piston moves out, and conversely if the piston is pushed inward, the reaction is driven backwards.

Similarly, a redox reaction might occur in an electrochemical cell with the passage of current through a wire connecting the electrodes. The half-cell reactions at the electrodes are constrained if no current is allowed to flow. The current might be dissipated as Joule heating, or it might in turn run an electrical device like a motor doing mechanical work. An automobile lead-acid battery can be recharged, driving the chemical reaction backwards. In this case as well, the reaction is not an independent process. Some, perhaps most, of the Gibbs free energy of reaction may be delivered as external work.

The hydrolysis of ATP to ADP and phosphate can drive the force-times-distance work delivered by living muscles, and synthesis of ATP is in turn driven by a redox chain in mitochondria and chloroplasts, which involves the transport of ions across the membranes of these cellular organelles. The coupling of processes here, and in the previous examples, is often not complete. Gas can leak slowly past a piston, just as it can slowly leak out of a rubber balloon. Some reaction may occur in a battery even if no external current is flowing. There is usually a coupling coefficient, which may depend on relative rates, which determines what percentage of the driving free energy is turned into external work, or captured as "chemical work", a misnomer for the free energy of another chemical process.
