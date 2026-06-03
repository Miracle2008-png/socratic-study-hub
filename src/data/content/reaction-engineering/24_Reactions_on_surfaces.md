# Reactions on surfaces

Reactions on surfaces are reactions in which at least one of the steps of the reaction mechanism is the adsorption of one or more reactants. The mechanisms for these reactions, and the rate equations are of extreme importance for heterogeneous catalysis. Via scanning tunneling microscopy, it is possible to observe reactions at the solid gas interface in real space, if the time scale of the reaction is in the correct range. Reactions at the solid–gas interface are in some cases related to catalysis.

## Simple decomposition
If a reaction occurs through these steps:

A + S ⇌ AS → Products

where A is the reactant and S is an adsorption site on the surface and the respective rate constants for the adsorption, desorption and reaction are k1, k−1 and k2, then the global reaction rate is:

{\displaystyle r=k_{2}C_{\mathrm {AS} }=k_{2}\theta C_{\mathrm {S} }}

where:

r is the rate, mol·m−2·s−1

{\displaystyle C_{A}}
 is the concentration of adsorbate, mol·m−3

{\displaystyle C_{\mathrm {AS} }}
 is the surface concentration of occupied sites, mol·m−2

{\displaystyle C_{\mathrm {S} }}
 is the concentration of all sites (occupied or not), mol·m−2

{\displaystyle \theta }
 is the surface coverage, (i.e. 

{\displaystyle C_{AS}/C_{S}}
) defined as the fraction of sites which are occupied, which is dimensionless

 is time, s

{\displaystyle k_{2}}
 is the rate constant for the surface reaction, s−1.

{\displaystyle k_{1}}
 is the rate constant for surface adsorption, m3·mol−1·s−1

{\displaystyle k_{-1}}
 is the rate constant for surface desorption, s−1

{\displaystyle C_{\mathrm {S} }}
 is highly related to the total surface area of the adsorbent: the greater the surface area, the more sites and the faster the reaction. This is the reason why heterogeneous catalysts are usually chosen to have great surface areas (in the order of a hundred m2/gram)

If we apply the steady state approximation to AS, then:

{\displaystyle {\frac {dC_{\mathrm {AS} }}{dt}}=0=k_{1}C_{\mathrm {A} }C_{\mathrm {S} }(1-\theta )-k_{2}\theta C_{\mathrm {S} }-k_{-1}\theta C_{\mathrm {S} }}
 so 

{\displaystyle \theta ={\frac {k_{1}C_{\mathrm {A} }}{k_{1}C_{\mathrm {A} }+k_{-1}+k_{2}}}}

and

{\displaystyle r={\frac {k_{1}k_{2}C_{\mathrm {A} }C_{\mathrm {S} }}{k_{1}C_{\mathrm {A} }+k_{-1}+k_{2}}}.}

The result is equivalent to the Michaelis–Menten kinetics of reactions catalyzed at a site on an enzyme. The rate equation is complex, and the reaction order is not clear. In experimental work, usually two extreme cases are looked for in order to prove the mechanism. In them, the rate-determining step can be:

Limiting step: adsorption/desorption

{\displaystyle k_{2}\gg \ k_{1}C_{\mathrm {A} },k_{-1},{\text{ so }}r\approx k_{1}C_{\mathrm {A} }C_{\mathrm {S} }.}

The order respect to A is 1. Examples of this mechanism are N2O on gold and HI on platinum

Limiting step: reaction of adsorbed species

{\displaystyle k_{2}\ll \ k_{1}C_{\mathrm {A} },k_{-1}{\text{ so }}\theta ={\frac {k_{1}C_{\mathrm {A} }}{k_{1}C_{\mathrm {A} }+k_{-1}}}={\frac {K_{1}C_{\mathrm {A} }}{K_{1}C_{\mathrm {A} }+1}}}

The last expression is the Langmuir isotherm for the surface coverage. The adsorption equilibrium constant 

{\displaystyle K_{1}={\frac {k_{1}}{k_{-1}}}}
, and the numerator and denominator have each been divided by 

{\displaystyle k_{-1}}
. The overall reaction rate becomes 

{\displaystyle r={\frac {K_{1}k_{2}C_{\mathrm {A} }C_{\mathrm {S} }}{K_{1}C_{\mathrm {A} }+1}}}
.

Depending on the concentration of the reactant the rate changes:

Low concentrations, then 

{\displaystyle r=K_{1}k_{2}C_{\mathrm {A} }C_{\mathrm {S} }}
, that is to say a first order reaction in component A.

High concentration, then 

{\displaystyle r=k_{2}C_{\mathrm {S} }}
. It is a zeroth order reaction in component A.

## Bimolecular reaction

### Langmuir–Hinshelwood mechanism
In this mechanism, suggested by Irving Langmuir in 1921 and further developed by Cyril Hinshelwood in 1926, two molecules adsorb on neighboring sites and the adsorbed molecules undergo a bimolecular reaction:

A + S ⇌ AS

B + S ⇌ BS

AS + BS → Products

The rate constants are 
{\displaystyle k_{1}}
 and 

{\displaystyle k_{-1}}
 for adsorption and desorption of A respectively, 
{\displaystyle k_{2}}
 and 

{\displaystyle k_{-2}}
 for adsorption and desorption of B, and 
 for the reaction generating the final products. The rate law is: 

{\displaystyle r=k\theta _{\mathrm {A} }\theta _{\mathrm {B} }C_{\mathrm {S} }^{2}}

Proceeding as before we get 

{\displaystyle \theta _{\mathrm {A} }={\frac {k_{1}C_{\mathrm {A} }\theta _{E}}{k_{-1}+kC_{\mathrm {S} }\theta _{\mathrm {B} }}}}
, where 
{\displaystyle \theta _{E}}
 is the fraction of empty sites, so 

{\displaystyle \theta _{\mathrm {A} }+\theta _{\mathrm {B} }+\theta _{E}=1}
. Let us assume now that the rate limiting step is the reaction of the adsorbed molecules, which is easily understood: the probability of two adsorbed molecules colliding is low.

Then 
{\displaystyle \theta _{\mathrm {A} }=K_{1}C_{\mathrm {A} }\theta _{E}}
, with 

{\displaystyle K_{i}=k_{i}/k_{-i}}
, which is nothing but Langmuir isotherm for two adsorbed gases, with adsorption constants 
{\displaystyle K_{1}}
 and 
{\displaystyle K_{2}}
.

Calculating 
{\displaystyle \theta _{E}}
 from 
{\displaystyle \theta _{\mathrm {A} }}
 and 
{\displaystyle \theta _{\mathrm {B} }}
 we finally get

{\displaystyle r=kC_{\mathrm {S} }^{2}{\frac {K_{1}K_{2}C_{\mathrm {A} }C_{\mathrm {B} }}{(1+K_{1}C_{\mathrm {A} }+K_{2}C_{\mathrm {B} })^{2}}}}
.

The rate law is complex and there is no clear order with respect to either reactant, but we can consider different values of the constants, for which it is easy to measure integer orders:

Both molecules have low adsorption

That means that 

{\displaystyle 1\gg K_{1}C_{\mathrm {A} },K_{2}C_{\mathrm {B} }}
, so 

{\displaystyle r=kC_{\mathrm {S} }^{2}K_{1}K_{2}C_{\mathrm {A} }C_{\mathrm {B} }}
. The order is one with respect to each reactant, and the overall order is two.

One molecule has very low adsorption

In this case 

{\displaystyle K_{1}C_{\mathrm {A} },1\gg K_{2}C_{\mathrm {B} }}
, so 

{\displaystyle r=kC_{\mathrm {S} }^{2}{\frac {K_{1}K_{2}C_{\mathrm {A} }C_{\mathrm {B} }}{(1+K_{1}C_{\mathrm {A} })^{2}}}}
. The reaction order is 1 with respect to B. There are two extreme possibilities for the order with respect to A:

At low concentrations of A, 

{\displaystyle r=kC_{\mathrm {S} }^{2}K_{1}K_{2}C_{\mathrm {A} }C_{\mathrm {B} }}
, and the order is one with respect to A.

At high concentrations, 

{\displaystyle r=kC_{\mathrm {S} }^{2}{\frac {K_{2}C_{\mathrm {B} }}{K_{1}C_{\mathrm {A} }}}}
. The order is minus one with respect to A. The higher the concentration of A, the slower the reaction goes, in this case we say that A inhibits the reaction.

One molecule has very high adsorption

One of the reactants has very high adsorption and the other one doesn't adsorb strongly.

{\displaystyle K_{1}C_{\mathrm {A} }\gg 1,K_{2}C_{\mathrm {B} }}
, so 

{\displaystyle r=kC_{\mathrm {S} }^{2}{\frac {K_{2}C_{\mathrm {B} }}{K_{1}C_{\mathrm {A} }}}}
. The reaction order is 1 with respect to B and −1 with respect to A. Reactant A inhibits the reaction at all concentrations.

The following reactions follow a Langmuir–Hinshelwood mechanism:

2 CO + O2 → 2 CO2 on a platinum catalyst.

CO + 2H2 → CH3OH on a ZnO catalyst.

C2H4 + H2 → C2H6 on a copper catalyst.

N2O + H2 → N2 + H2O on a platinum catalyst.

C2H4 + ⁠1/2⁠ O2 → CH3CHO on a palladium catalyst.

CO + OH → CO2 + H+ + e− on a platinum catalyst.

### Langmuir–Rideal mechanism
In this mechanism, proposed in 1922 by Irving Langmuir and later expanded upon by Eric Rideal, only one of the molecules adsorbs and the other one reacts with it directly from the gas phase, without adsorbing ("nonthermal surface reaction"):

A(g) + S(s) ⇌ AS(s)

AS(s) + B(g) → Products

Constants are 

{\displaystyle k_{1},k_{-1}}
 and 
 and rate equation is 

{\displaystyle r=kC_{\mathrm {S} }\theta _{\mathrm {A} }C_{\mathrm {B} }}
. Applying steady state approximation to AS and proceeding as before (considering the reaction the limiting step once more) we get 

{\displaystyle r=kC_{\mathrm {S} }C_{\mathrm {B} }{\frac {K_{1}C_{\mathrm {A} }}{K_{1}C_{\mathrm {A} }+1}}}
. The order is one with respect to B. There are two possibilities, depending on the concentration of reactant A:

At low concentrations of A, 

{\displaystyle r=kC_{\mathrm {S} }K_{1}C_{\mathrm {A} }C_{\mathrm {B} }}
, and the order is one with respect to A.

At high concentrations of A, 

{\displaystyle r=kC_{\mathrm {S} }C_{\mathrm {B} }}
, and the order is zero with respect to A.

The following reactions follow an Langmuir–Rideal mechanism:

C2H4 + ⁠1/2⁠ O2 (adsorbed) → (CH2CH2)O The dissociative adsorption of oxygen is also possible, which leads to secondary products carbon dioxide and water.

CO2 + H2 (ads.) → H2O + CO

2 NH3 + ⁠1+1/2⁠ O2 (ads.) → N2 + 3H2O on a platinum catalyst

C2H2 + H2 (ads.) → C2H4 on nickel or iron catalysts

The Langmuir-Rideal mechanism is often, incorrectly, attributed to Dan Eley as the Eley-Rideal mechanism. The actual Eley-Rideal mechanism, studied in the thesis of Dan Eley and proposed by Eric Rideal in 1939, was the reaction between a chemisorbed and a physisorbed molecule. As opposed to the Langmuir-Rideal mechanism, in this mechanism the physisorbed molecule is in thermal equilibrium with the surface.
