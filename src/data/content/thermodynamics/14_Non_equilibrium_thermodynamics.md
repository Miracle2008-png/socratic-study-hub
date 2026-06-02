# Non-equilibrium thermodynamics

Non-equilibrium thermodynamics is a branch of thermodynamics that deals with physical systems that are not in thermodynamic equilibrium but can be described in terms of macroscopic quantities (non-equilibrium state variables) that represent an extrapolation of the variables used to specify the system in thermodynamic equilibrium. Non-equilibrium thermodynamics is concerned with transport processes and with the rates of chemical reactions.

## Scope

### Difference between equilibrium and non-equilibrium thermodynamics
A profound difference separates equilibrium from non-equilibrium thermodynamics. Equilibrium thermodynamics ignores the time-courses of physical processes. In contrast, non-equilibrium thermodynamics attempts to describe their time-courses in continuous detail.

Equilibrium thermodynamics restricts its considerations to processes that have initial and final states of thermodynamic equilibrium; the time-courses of processes are deliberately ignored. Non-equilibrium thermodynamics, on the other hand, attempting to describe continuous time-courses, needs its state variables to have a very close connection with those of equilibrium thermodynamics. This conceptual issue is overcome under the assumption of local equilibrium, which entails that the relationships that hold between macroscopic state variables at equilibrium hold locally, also outside equilibrium. Throughout the past decades, the assumption of local equilibrium has been tested, and found to hold, under increasingly extreme conditions, such as in the shock front of violent explosions, on reacting surfaces, and under extreme thermal gradients.

Thus, non-equilibrium thermodynamics provides a consistent framework for modelling not only the initial and final states of a system, but also the evolution of the system in time. Together with the concept of entropy production, this provides a powerful tool in process optimisation, and provides a theoretical foundation for exergy analysis.

### Non-equilibrium state variables
The suitable relationship that defines non-equilibrium thermodynamic state variables is as follows. When the system is in local equilibrium, non-equilibrium state variables are such that they can be measured locally with sufficient accuracy by the same techniques as are used to measure thermodynamic state variables, or by corresponding time and space derivatives, including fluxes of matter and energy. In general, non-equilibrium thermodynamic systems are spatially and temporally non-uniform, but their non-uniformity still has a sufficient degree of smoothness to support the existence of suitable time and space derivatives of non-equilibrium state variables.

Because of the spatial non-uniformity, non-equilibrium state variables that correspond to extensive thermodynamic state variables have to be defined as spatial densities of the corresponding extensive equilibrium state variables. When the system is in local equilibrium, intensive non-equilibrium state variables, for example temperature and pressure, correspond closely with equilibrium state variables. It is necessary that measuring probes be small enough, and rapidly enough responding, to capture relevant non-uniformity. Further, the non-equilibrium state variables are required to be mathematically functionally related to one another in ways that suitably resemble corresponding relations between equilibrium thermodynamic state variables. In reality, these requirements, although strict, have been shown to be fulfilled even under extreme conditions, such as during phase transitions, at reacting interfaces, and in plasma droplets surrounded by ambient air. There are, however, situations where there are appreciable non-linear effects even at the local scale.

## Basic concepts
There are many examples of stationary non-equilibrium systems, some very simple, like a system confined between two thermostats at different temperatures or the ordinary Couette flow, a fluid enclosed between two flat walls moving in opposite directions and defining non-equilibrium conditions at the walls. Laser action is also a non-equilibrium process, but it depends on departure from local thermodynamic equilibrium and is thus beyond the scope of classical irreversible thermodynamics; here a strong temperature difference is maintained between two molecular degrees of freedom (with molecular laser, vibrational and rotational molecular motion), the requirement for two component 'temperatures' in the one small region of space, precluding local thermodynamic equilibrium, which demands that only one temperature be needed. Damping of acoustic perturbations or shock waves are non-stationary non-equilibrium processes. Driven complex fluids, turbulent systems and glasses are other examples of non-equilibrium systems.

The mechanics of macroscopic systems depends on a number of extensive quantities. It should be stressed that all systems are permanently interacting with their surroundings, thereby causing unavoidable fluctuations of extensive quantities. Equilibrium conditions of thermodynamic systems are related to the maximum property of the entropy. If the only extensive quantity that is allowed to fluctuate is the internal energy, all the other ones being kept strictly constant, the temperature of the system is measurable and meaningful. The system's properties are then most conveniently described using the thermodynamic potential Helmholtz free energy (A = U - TS), a Legendre transformation of the energy. If, next to fluctuations of the energy, the macroscopic dimensions (volume) of the system are left fluctuating, we use the Gibbs free energy (G = U + PV - TS), where the system's properties are determined both by the temperature and by the pressure.

Non-equilibrium systems are much more complex and they may undergo fluctuations of more extensive quantities. The boundary conditions impose on them particular intensive variables, like temperature gradients or distorted collective motions (shear motions, vortices, etc.), often called thermodynamic forces. If free energies are very useful in equilibrium thermodynamics, it must be stressed that there is no general law defining stationary non-equilibrium properties of the energy as is the second law of thermodynamics for the entropy in equilibrium thermodynamics. That is why in such cases a more generalized Legendre transformation should be considered. This is the extended Massieu potential.

By definition, the entropy (S) is a function of the collection of extensive quantities 
          E
            i
    {\displaystyle E_{i}}
. Each extensive quantity has a conjugate intensive variable 
          I
            i
    {\displaystyle I_{i}}
 (a restricted definition of intensive variable is used here by comparison to the definition given in this link) so that:

          I
            i
        =
              ∂
                S
              ∂
                  E
                    i
        .
    {\displaystyle I_{i}={\frac {\partial {S}}{\partial {E_{i}}}}.}

We then define the extended Massieu function as follows:

          k
              B
        M

        =

        S

        −
          ∑
            i
        (
          I
            i
          E
            i
        )

        ,
    {\displaystyle \ k_{\rm {B}}M=S-\sum _{i}(I_{i}E_{i}),}

where 
          k
              B
    {\displaystyle \ k_{\rm {B}}}
 is the Boltzmann constant, whence

          k
              B
        d

        M

        =
          ∑
            i
        (
          E
            i
        d
          I
            i
        )

        .
    {\displaystyle \ k_{\rm {B}}\,dM=\sum _{i}(E_{i}\,dI_{i}).}

The independent variables are the intensities.

Intensities are global values, valid for the system as a whole. When boundaries impose to the system different local conditions, (e.g. temperature differences), there are intensive variables representing the average value and others representing gradients or higher moments. The latter are the thermodynamic forces driving fluxes of extensive properties through the system.

It may be shown that the Legendre transformation changes the maximum condition of the entropy (valid at equilibrium) in a minimum condition of the extended Massieu function for stationary states, no matter whether at equilibrium or not.

## Stationary states, fluctuations, and stability
In thermodynamics one is often interested in a stationary state of a process, allowing that the stationary state include the occurrence of unpredictable and experimentally unreproducible fluctuations in the state of the system. The fluctuations are due to the system's internal sub-processes and to exchange of matter or energy with the system's surroundings that create the constraints that define the process.

If the stationary state of the process is stable, then the unreproducible fluctuations involve local transient decreases of entropy. The reproducible response of the system is then to increase the entropy back to its maximum by irreversible processes: the fluctuation cannot be reproduced with a significant level of probability. Fluctuations about stable stationary states are extremely small except near critical points (Kondepudi and Prigogine 1998, page 323). The stable stationary state has a local maximum of entropy and is locally the most reproducible state of the system. There are theorems about the irreversible dissipation of fluctuations. Here 'local' means local with respect to the abstract space of thermodynamic coordinates of state of the system.

If the stationary state is unstable, then any fluctuation will almost surely trigger the virtually explosive departure of the system from the unstable stationary state. This can be accompanied by increased export of entropy.

## Local thermodynamic equilibrium
The scope of present-day non-equilibrium thermodynamics does not cover all physical processes. A condition for the validity of many studies in non-equilibrium thermodynamics of matter is that they deal with what is known as local thermodynamic equilibrium.

### Ponderable matter
Local thermodynamic equilibrium of matter (see also Keizer (1987) means that conceptually, for study and analysis, the system can be spatially and temporally divided into 'cells' or 'micro-phases' of small (infinitesimal) size, in which classical thermodynamical equilibrium conditions for matter are fulfilled to good approximation. These conditions are unfulfilled, for example, in very rarefied gases, in which molecular collisions are infrequent; and in the boundary layers of a star, where radiation is passing energy to space; and for interacting fermions at very low temperature, where dissipative processes become ineffective. When these 'cells' are defined, one admits that matter and energy may pass freely between contiguous 'cells', slowly enough to leave the 'cells' in their respective individual local thermodynamic equilibria with respect to intensive variables.

One can think here of two 'relaxation times' separated by order of magnitude. The longer relaxation time is of the order of magnitude of times taken for the macroscopic dynamical structure of the system to change. The shorter is of the order of magnitude of times taken for a single 'cell' to reach local thermodynamic equilibrium. If these two relaxation times are not well separated, then the classical non-equilibrium thermodynamical concept of local thermodynamic equilibrium loses its meaning and other approaches have to be proposed, see for instance Extended irreversible thermodynamics. For example, in the atmosphere, the speed of sound is much greater than the wind speed; this favours the idea of local thermodynamic equilibrium of matter for atmospheric heat transfer studies at altitudes below about 60 km where sound propagates, but not above 100 km, where, because of the paucity of intermolecular collisions, sound does not propagate.

### Milne's definition in terms of radiative equilibrium
Edward A. Milne, thinking about stars, gave a definition of 'local thermodynamic equilibrium' in terms of the thermal radiation of the matter in each small local 'cell'. He defined 'local thermodynamic equilibrium' in a 'cell' by requiring that it macroscopically absorb and spontaneously emit radiation as if it were in radiative equilibrium in a cavity at the temperature of the matter of the 'cell'. Then it strictly obeys Kirchhoff's law of equality of radiative emissivity and absorptivity, with a black body source function. The key to local thermodynamic equilibrium here is that the rate of collisions of ponderable matter particles such as molecules should far exceed the rates of creation and annihilation of photons.

## Entropy in evolving systems
It is pointed out by W.T. Grandy Jr, that entropy, though it may be defined for a non-equilibrium system is—when strictly considered—only a macroscopic quantity that refers to the whole system, and is not a dynamical variable and in general does not act as a local potential that describes local physical forces. Under special circumstances, however, one can metaphorically think as if the thermal variables behaved like local physical forces. The approximation that constitutes classical irreversible thermodynamics is built on this metaphoric thinking.

This point of view shares many points in common with the concept and the use of entropy in continuum thermomechanics, which evolved completely independently of statistical mechanics and maximum-entropy principles.

### Entropy in non-equilibrium
To describe deviation of the thermodynamic system from equilibrium, in addition to constitutive variables 
          x
            1
        ,
          x
            2
        ,

        .

        .

        .

        ,
          x
            n
    {\displaystyle x_{1},x_{2},...,x_{n}}
 that are used to fix the equilibrium state, as was described above, a set of variables 
          ξ
            1
        ,
          ξ
            2
        ,

        …
    {\displaystyle \xi _{1},\xi _{2},\ldots }
 that are called internal variables have been introduced. The equilibrium state is considered to be stable and the main property of the internal variables, as measures of non-equilibrium of the system, is their tending to disappear; the local law of disappearing can be written as relaxation equation for each internal variable

where 
          τ
            i
        =
          τ
            i
        (

        T

        ,
          x
            1
        ,
          x
            2
        ,

        …

        ,
          x
            n
        )
    {\displaystyle \tau _{i}=\tau _{i}(T,x_{1},x_{2},\ldots ,x_{n})}
 is a relaxation time of a corresponding variables. It is convenient to consider the initial value 
          ξ
            i
            0
    {\displaystyle \xi _{i}^{0}}
 are equal to zero. The above equation is valid for small deviations from equilibrium; The dynamics of internal variables in general case is considered by Pokrovskii.

Entropy of the system in non-equilibrium is a function of the total set of variables 

The essential contribution to the thermodynamics of the non-equilibrium systems was brought by the Nobel Prize winner Ilya Prigogine, when he and his collaborators investigated the systems of chemically reacting substances. The stationary states of such systems exists due to exchange both particles and energy with the environment. In section 8 of the third chapter of his book, Prigogine has specified three contributions to the variation of entropy of the considered system at the given volume and constant temperature 
        T
    {\displaystyle T}
 . The increment of entropy 
        S
    {\displaystyle S}
 can be calculated according to the formula 

The first term on the right hand side of the equation presents a stream of thermal energy into the system; the last term—a part of a stream of energy 
          h
            α
    {\displaystyle h_{\alpha }}
 coming into the system with the stream of particles of substances 
        Δ
          N
            α
    {\displaystyle \Delta N_{\alpha }}
 that can be positive or negative, 
          η
            α
        =
          h
            α
        −
          μ
            α
    {\displaystyle \eta _{\alpha }=h_{\alpha }-\mu _{\alpha }}
, where   
          μ
            α
    {\displaystyle \mu _{\alpha }}
 is chemical potential of substance 
        α
    {\displaystyle \alpha }
. The middle term in (1) depicts energy dissipation (entropy production) due to the relaxation of internal variables 
          ξ
            j
    {\displaystyle \xi _{j}}
. In the case of chemically reacting substances, which was investigated by Prigogine, the internal variables appear to be measures of incompleteness of chemical reactions, that is measures of how much the considered system with chemical reactions is out of equilibrium. The theory can be generalised, to consider any deviation from the equilibrium state as an internal variable, so that we consider the set of internal variables 
          ξ
            j
    {\displaystyle \xi _{j}}
 in equation (1) to consist of the quantities defining not only degrees of completeness of all chemical reactions occurring in the system, but also the structure of the system, gradients of temperature, difference of concentrations of substances and so on.

## Flows and forces
The fundamental relation of classical equilibrium thermodynamics 

        d

        S

        =
            1

            T
        d

        U

        +
            p

            T
        d

        V

        −
          ∑
            i

            =

            1
            s
              μ
                i
            T
        d
          N
            i
    {\displaystyle dS={\frac {1}{T}}dU+{\frac {p}{T}}dV-\sum _{i=1}^{s}{\frac {\mu _{i}}{T}}dN_{i}}

expresses the change in entropy 
        d

        S
    {\displaystyle dS}
 of a system as a function of the intensive quantities temperature 
        T
    {\displaystyle T}
, pressure 
        p
    {\displaystyle p}
 and 
          i
            t

            h
    {\displaystyle i^{th}}
 chemical potential 
          μ
            i
    {\displaystyle \mu _{i}}
 and of the differentials of the extensive quantities energy 
        U
    {\displaystyle U}
, volume 
        V
    {\displaystyle V}
 and 
          i
            t

            h
    {\displaystyle i^{th}}
 particle number 
          N
            i
    {\displaystyle N_{i}}
.

Following Onsager (1931,I), let us extend our considerations to thermodynamically non-equilibrium systems. As a basis, we need locally defined versions of the extensive macroscopic quantities 
        U
    {\displaystyle U}
, 
        V
    {\displaystyle V}
 and 
          N
            i
    {\displaystyle N_{i}}
 and of the intensive macroscopic quantities 
        T
    {\displaystyle T}
, 
        p
    {\displaystyle p}
 and 
          μ
            i
    {\displaystyle \mu _{i}}
.

For classical non-equilibrium studies, we will consider some new locally defined intensive macroscopic variables. We can, under suitable conditions, derive these new variables by locally defining the gradients and flux densities of the basic locally defined macroscopic quantities.

Such locally defined gradients of intensive macroscopic variables are called 'thermodynamic forces'. They 'drive' flux densities, perhaps misleadingly often called 'fluxes', which are dual to the forces. These quantities are defined in the article on Onsager reciprocal relations.

Establishing the relation between such forces and flux densities is a problem in statistical mechanics. Flux densities (
          J
            i
    {\displaystyle J_{i}}
) may be coupled. The article on Onsager reciprocal relations considers the stable near-steady thermodynamically non-equilibrium regime, which has dynamics linear in the forces and flux densities.

In stationary conditions, such forces and associated flux densities are by definition time invariant, as also are the system's locally defined entropy and rate of entropy production. Notably, according to Ilya Prigogine and others, when an open system is in conditions that allow it to reach a stable stationary thermodynamically non-equilibrium state, it organizes itself so as to minimize total entropy production defined locally. This is considered further below.

One wants to take the analysis to the further stage of describing the behaviour of surface and volume integrals of non-stationary local quantities; these integrals are macroscopic fluxes and production rates. In general the dynamics of these integrals are not adequately described by linear equations, though in special cases they can be so described.

### Onsager reciprocal relations

Following Section III of Rayleigh (1873), Onsager (1931, I) showed that in the regime where both the flows (
          J
            i
    {\displaystyle J_{i}}
) are small and the thermodynamic forces (
          F
            i
    {\displaystyle F_{i}}
) vary slowly, the rate of creation of entropy 
        (

        σ

        )
    {\displaystyle (\sigma )}
 is linearly related to the flows:

        σ

        =
          ∑
            i
          J
            i
              ∂
                F
                  i
              ∂
                x
                  i
    {\displaystyle \sigma =\sum _{i}J_{i}{\frac {\partial F_{i}}{\partial x_{i}}}}

and the flows are related to the gradient of the forces, parametrized by a matrix of coefficients conventionally denoted 
        L
    {\displaystyle L}
:

          J
            i
        =
          ∑
            j
          L
            i

            j
              ∂
                F
                  j
              ∂
                x
                  j
    {\displaystyle J_{i}=\sum _{j}L_{ij}{\frac {\partial F_{j}}{\partial x_{j}}}}

from which it follows that:

        σ

        =
          ∑
            i

            ,

            j
          L
            i

            j
              ∂
                F
                  i
              ∂
                x
                  i
              ∂
                F
                  j
              ∂
                x
                  j
    {\displaystyle \sigma =\sum _{i,j}L_{ij}{\frac {\partial F_{i}}{\partial x_{i}}}{\frac {\partial F_{j}}{\partial x_{j}}}}

The second law of thermodynamics requires that the matrix 
        L
    {\displaystyle L}
 be positive definite. Statistical mechanics considerations involving microscopic reversibility of dynamics imply that the matrix 
        L
    {\displaystyle L}
 is symmetric. This fact is called the Onsager reciprocal relations.

The generalization of the above equations for the rate of creation of entropy was given by Pokrovskii.

## Speculated extremal principles for non-equilibrium processes

Until recently, prospects for useful extremal principles in this area have seemed clouded. Nicolis (1999) concludes that one model of atmospheric dynamics has an attractor which is not a regime of maximum or minimum dissipation; she says this seems to rule out the existence of a global organizing principle, and comments that this is to some extent disappointing; she also points to the difficulty of finding a thermodynamically consistent form of entropy production. Another top expert offers an extensive discussion of the possibilities for principles of extrema of entropy production and of dissipation of energy: Chapter 12 of Grandy (2008) is very cautious, and finds difficulty in defining the 'rate of internal entropy production' in many cases, and finds that sometimes for the prediction of the course of a process, an extremum of the quantity called the rate of dissipation of energy may be more useful than that of the rate of entropy production; this quantity appeared in Onsager's 1931 origination of this subject. Other writers have also felt that prospects for general global extremal principles are clouded. Such writers include Glansdorff and Prigogine (1971), Lebon, Jou and Casas-Vásquez (2008), and Šilhavý (1997).

There is good experimental evidence that heat convection does not obey extremal principles for time rate of entropy production. Theoretical analysis shows that chemical reactions do not obey extremal principles for the second differential of time rate of entropy production. The development of a general extremal principle seems infeasible in the current state of knowledge.
