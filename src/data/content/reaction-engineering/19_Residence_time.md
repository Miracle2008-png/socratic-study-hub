# Residence time

The residence time of a fluid parcel is the total time that the parcel has spent inside a control volume (e.g.: a chemical reactor, a lake, a human body). The residence time of a set of parcels is quantified in terms of the frequency distribution of the residence time in the set, which is known as residence time distribution (RTD), or in terms of its average, known as mean residence time.

## Distributions

The time that a particle of fluid has been in a control volume (e.g. a reservoir) is known as its age. In general, each particle has a different age. The frequency of occurrence of the age 
{\displaystyle \tau }
 in the set of all the particles that are located inside the control volume at time 
 is quantified by means of the (internal) age distribution 
.

At the moment a particle leaves the control volume, its age is the total time that the particle has spent inside the control volume, which is known as its residence time. The frequency of occurrence of the age 
{\displaystyle \tau }
 in the set of all the particles that are leaving the control volume at time 
 is quantified by means of the residence time distribution, also known as exit age distribution 
.

Both distributions are positive and have by definition unitary integrals along the age:

{\displaystyle \int _{0}^{\infty }E(\tau ,t)\,d\tau =\int _{0}^{\infty }I(\tau ,t)\,d\tau =1}

In the case of steady flow, the distributions are assumed to be independent of time, that is 

{\displaystyle \partial _{t}E=\partial _{t}I=0\;\forall t}
, which may allow to redefine the distributions as simple functions of the age only.

If the flow is steady (but a generalization to non-steady flow is possible) and is conservative, then the exit age distribution and the internal age distribution can be related one to the other:

{\displaystyle \left.{\begin{aligned}{\frac {\partial I}{\partial t}}={\frac {dm}{dt}}=0&\\[4pt]f_{\text{in}}=f_{\text{out}}=f&\end{aligned}}\ \right\}\implies fE=-m{\frac {\partial I}{\partial \tau }}}

Distributions other than 
 and 
 can be usually traced back to them. For example, the fraction of particles leaving the control volume at time 
 with an age greater or equal than 
{\displaystyle \tau }
 is quantified by means of the washout function 
, that is the complementary to one of the cumulative exit age distribution:

{\displaystyle W(\tau ,t)=1-\int _{0}^{\tau }E(s,t)\,ds}

## Averages

### Mean age and mean residence time
The mean age of all the particles inside the control volume at time t is the first moment of the age distribution:

{\displaystyle \tau _{a}(t)=\int _{0}^{\infty }\tau I(\tau ,t)\,d\tau }

The mean residence time or mean transit time, that is the mean age of all the particles leaving the control volume at time t, is the first moment of the residence time distribution:

{\displaystyle \tau _{t}(t)=\int _{0}^{\infty }\tau E(\tau ,t)\,d\tau .}

The mean age and the mean transit time generally have different values, even in stationary conditions:

{\displaystyle \tau _{a}<\tau _{t}}
: examples include water in a lake with the inlet and outlet on opposite sides and radioactive material introduced high in the stratosphere by a nuclear bomb test and filtering down to the troposphere.

{\displaystyle \tau _{a}=\tau _{t}}
: E and I are exponential distributions. Examples include radioactive decay and first order chemical reactions (where the reaction rate is proportional to the amount of reactant).

{\displaystyle \tau _{a}>\tau _{t}}
: most of the particles entering the control volume pass through quickly, but most of the particles contained in the control volume pass through slowly. Examples include water in a lake with the inlet and outlet that are close together and water vapor rising from the ocean surface, which for the most part returns quickly to the ocean, while for the rest is retained in the atmosphere and returns much later in the form of rain.

### Turnover time
If the flow is steady and conservative, the mean residence time equals the ratio between the amount of fluid contained in the control volume and the flow rate through it:

{\displaystyle \left.{\begin{aligned}{\frac {\partial I}{\partial t}}={\frac {dm}{dt}}=0&\\f_{\text{in}}=f_{\text{out}}=f&\end{aligned}}\ \right\}\implies \tau _{t}={\frac {m}{f}}}

This ratio is commonly known as the turnover time or flushing time. When applied to liquids, it is also known as the hydraulic retention time (HRT), hydraulic residence time or hydraulic detention time. In the field of chemical engineering this is also known as space time.

The residence time of a specific compound in a mixture equals the turnover time (that of the compound, as well as that of the mixture) only if the compound does not take part in any chemical reaction (otherwise its flow is not conservative) and its concentration is uniform.

Although the equivalence between the residence time and the ratio 
 does not hold if the flow is not stationary or it is not conservative, it does hold on average if the flow is steady and conservative on average, and not necessarily at any instant. Under such conditions, which are common in queueing theory and supply chain management, the relation is known as Little's Law.

## Simple flow models
Design equations are equations relating the space time to the fractional conversion and other properties of the reactor. Different design equations have been derived for different types of the reactor and depending on the reactor the equation more or less resemble that describing the average residence time. Often design equations are used to minimize the reactor volume or volumetric flow rate required to operate a reactor.

### Plug flow reactor
In an ideal plug flow reactor (PFR) the fluid particles leave in the same order they arrived, not mixing with those in front and behind. Therefore, the particles entering at time t will exit at time t + T, all spending a time T inside the reactor. The residence time distribution will be then a Dirac delta function delayed by T:

{\displaystyle E(\tau )=\delta (\tau -T)\,}

The mean is T and the variance is zero.

The RTD of a real reactor deviates from that of an ideal reactor, depending on the hydrodynamics within the vessel. A non-zero variance indicates that there is some dispersion along the path of the fluid, which may be attributed to turbulence, a non-uniform velocity profile, or diffusion. If the mean of the distribution is earlier than the expected time T it indicates that there is stagnant fluid within the vessel. If the RTD curve shows more than one main peak it may indicate channeling, parallel paths to the exit, or strong internal circulation.

In PFRs, reactants enter the reactor at one end and react as they move down the reactor. Consequently, the reaction rate is dependent on the concentrations which vary along the reactor requiring the inverse of the reaction rate to be integrated over the fractional conversion.

{\displaystyle \tau =C_{AO}\int {\frac {1}{(-r_{A})}}\,df_{A}}

### Batch reactor
Batch reactors are reactors in which the reactants are put in the reactor at time 0 and react until the reaction is stopped. Consequently, the space time is the same as the average residence time in a batch reactor.

{\displaystyle \tau =N_{AO}\int {\frac {1}{(-r_{A})V_{R}}}\,df_{A}}

### Continuous stirred-tank reactor
In an ideal continuous stirred-tank reactor (CSTR), the flow at the inlet is completely and instantly mixed into the bulk of the reactor. The reactor and the outlet fluid have identical, homogeneous compositions at all times. The residence time distribution is exponential:

{\displaystyle E(\tau )={\frac {1}{T}}\exp \left({\frac {-\tau }{T}}\right).}

Where; the mean is T and the variance is 1. A notable difference from the plug flow reactor is that material introduced into the system will never completely leave it.

In reality, it is impossible to obtain such rapid mixing, as there is necessarily a delay between any molecule passing through the inlet and making its way to the outlet, and hence the RTD of a real reactor will deviate from the ideal exponential decay, especially in the case of large reactors. For example, there will be some finite delay before E reaches its maximum value and the length of the delay will reflect the rate of mass transfer within the reactor. Just as was noted for a plug-flow reactor, an early mean will indicate some stagnant fluid within the vessel, while the presence of multiple peaks could indicate channeling, parallel paths to the exit, or strong internal circulation. Short-circuiting fluid within the reactor would appear in an RTD curve as a small pulse of concentrated tracer that reaches the outlet shortly after injection.

Reactants continuously enter and leave a tank where they are mixed. Consequently, the reaction proceeds at a rate dependent on the outlet concentration:

{\displaystyle \tau ={\frac {C_{A{\text{ in}}}-C_{A{\text{ out}}}}{-r_{A}}}\ }

### Laminar flow reactor
In a laminar flow reactor, the fluid flows through a long tube or parallel plate reactor and the flow is in layers parallel to the walls of the tube. The velocity of the flow is a parabolic function of radius. In the absence of molecular diffusion, the RTD is 

                  2.
{\displaystyle E(\tau )={\begin{cases}0&\tau \leq T/2\\[5pt]{\dfrac {T^{2}}{2\tau ^{3}}}&\tau >T/2.\end{cases}}}

The variance is infinite. In a real reactor, diffusion will eventually mix the layers so that the tail of the RTD becomes exponential and the variance finite; but laminar flow reactors can have variance greater than 1, the maximum for CTSD reactors.

### Recycle reactors
Recycle reactors are PFRs with a recycle loop. Consequently, they behave like a hybrid between PFRs and CSTRs.

{\displaystyle \tau =C_{AO}(R+1)\int {\frac {1}{(-r_{A})}}\,df_{A}}

In all of these equations :
{\displaystyle -r_{A}}
 is the consumption rate of A, a reactant. This is equal to the rate expression A is involved in. The rate expression is often related to the fractional conversion both through the consumption of A and through any k changes through temperature changes that are dependent on conversion.

### Variable volume reactions
In some reactions the reactants and the products have significantly different densities. Consequently, as the reaction proceeds the volume of the reaction changes. This variable volume adds terms to the design equations. Taking this volume change into consideration the volume of the reaction becomes:

{\displaystyle V_{R}=V_{R{\text{ initial}}}(1-\delta _{A}f_{A})}

Plugging this into the design equations results in the following equations:

#### Batch

{\displaystyle \tau =N_{AO}\int {\frac {1}{(-r_{A})V_{R}(1-\delta _{A}f_{A})}}\,df_{A}}

#### Plug flow reactors

{\displaystyle \tau =C_{AO}\int {\frac {1}{(-r_{A})(1-\delta _{A}f_{A})}}\,df_{A}}

#### Continuous stirred-tank reactors

{\displaystyle \tau ={\frac {C_{A{\text{ in}}}-C_{A{\text{ out}}}}{-r_{AF}(1-\delta _{A}f_{A})}}\ }

Generally, when reactions take place in the liquid and solid phases the change in volume due to reaction is not significant enough that it needs to be taken into account. Reactions in the gas phase often have significant changes in volume and in these cases one should use these modified equations.

## Determining the RTD experimentally
Residence time distributions are measured by introducing a non-reactive tracer into the system at the inlet. Its input concentration is changed according to a known function and the output concentration measured. The tracer should not modify the physical characteristics of the fluid (equal density, equal viscosity) or the hydrodynamic conditions and it should be easily detectable.

In general, the change in tracer concentration will either be a pulse or a step. Other functions are possible, but they require more calculations to deconvolute the RTD curve.

### Pulse experiments
This method required the introduction of a very small volume of concentrated tracer at the inlet of the reactor, such that it approaches the Dirac delta function. Although an infinitely short injection cannot be produced, it can be made much smaller than the mean residence time of the vessel. If a mass of tracer, 
, is introduced into a vessel of volume 
 and an expected residence 

time of 
{\displaystyle \tau }
, the resulting curve of 

{\displaystyle C(t)}
 can be transformed into a dimensionless residence time distribution curve by the following relation:

{\displaystyle E(t)={\frac {C(t)}{\int _{0}^{\infty }C(t)\,dt}}}

### Step experiments
The concentration of tracer in a step experiment at the reactor inlet changes abruptly from 0 to 
{\displaystyle C_{0}}
. The concentration of tracer at the outlet is measured and normalized to the concentration 
{\displaystyle C_{0}}
 to obtain the non-dimensional curve 

{\displaystyle F(t)}
 which goes from 0 to 1:

{\displaystyle F(t)={\frac {C(t)}{C_{0}}}.}

The step- and pulse-responses of a reactor are related by the following:

{\displaystyle F(t)=\int _{0}^{t}E(t')\,dt'\qquad E(t)={\frac {dF(t)}{dt}}}

A step experiment is often easier to perform than a pulse experiment, but it tends to smooth over some of the details that a pulse response could show. It is easy to numerically integrate an experimental pulse response to obtain a very high-quality estimate of the step response, but the reverse is not the case because any noise in the concentration measurement will be amplified by numeric differentiation.
