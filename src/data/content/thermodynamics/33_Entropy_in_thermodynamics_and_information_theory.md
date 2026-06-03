# Entropy in thermodynamics and information theory

Because the mathematical expressions for information theory developed by Claude Shannon and Ralph Hartley in the 1940s are similar to the mathematics of statistical thermodynamics worked out by Ludwig Boltzmann and J. Willard Gibbs in the 1870s, in which the concept of entropy is central, Shannon was persuaded to employ the same term 'entropy' for his measure of uncertainty. Information entropy is often presumed to be equivalent to physical (thermodynamic) entropy.

## Equivalence of form of the defining expressions

The defining expression for entropy in the theory of statistical mechanics established by Ludwig Boltzmann and J. Willard Gibbs in the 1870s, is of the form:

{\displaystyle S=-k_{\text{B}}\sum _{i}p_{i}\ln p_{i},}

where 
{\displaystyle p_{i}}
 is the probability of the microstate i taken from an equilibrium ensemble, and 
{\displaystyle k_{B}}
 is the Boltzmann constant.

The defining expression for entropy in the theory of information established by Claude E. Shannon in 1948 is of the form:

{\displaystyle H=-\sum _{i}p_{i}\log _{b}p_{i},}

where 
{\displaystyle p_{i}}
 is the probability of the message 
{\displaystyle m_{i}}
 taken from the message space M, and b is the base of the logarithm used. Common values of b are 2, Euler's number e, and 10, and the unit of entropy is shannon (or bit) for b = 2, nat for b = e, and hartley for b = 10.

Mathematically H may also be seen as an average information, taken over the message space, because when a certain message occurs with probability pi, the information quantity −log(pi) (called information content or self-information) will be obtained.

If all the microstates are equiprobable (a microcanonical ensemble), the statistical thermodynamic entropy reduces to the form, as given by Boltzmann,

{\displaystyle S=k_{\text{B}}\ln W,}

where W is the number of microstates that corresponds to the macroscopic thermodynamic state. Therefore S depends on temperature.

If all the messages are equiprobable, the information entropy reduces to the Hartley entropy

{\displaystyle H=\log _{b}|M|\ ,}

where 
 is the cardinality of the message space M.

The logarithm in the thermodynamic definition is the natural logarithm.  It can be shown that the Gibbs entropy formula, with the natural logarithm, reproduces all of the properties of the macroscopic classical thermodynamics of Rudolf Clausius.  (See article: Entropy (statistical views)).

The logarithm can also be taken to the natural base in the case of information entropy.  This is equivalent to choosing to measure information in nats instead of the usual bits (or more formally, shannons).  In practice, information entropy is almost always calculated using base-2 logarithms, but this distinction amounts to nothing other than a change in units.  One nat is about 1.44 shannons.

For a simple compressible system that can only perform volume work, the first law of thermodynamics becomes

{\displaystyle dE=-pdV+TdS.}

But one can equally well write this equation in terms of what physicists and chemists sometimes call the 'reduced' or dimensionless entropy, σ = S/k, so that

{\displaystyle dE=-pdV+k_{\text{B}}Td\sigma .}

Just as S is conjugate to T, so σ is conjugate to kBT (the energy that is characteristic of T on a molecular scale).

Thus the definitions of entropy in statistical mechanics (The  Gibbs entropy formula 

{\displaystyle S=-k_{\mathrm {B} }\sum _{i}p_{i}\log p_{i}}
) and in classical thermodynamics (

{\displaystyle dS={\frac {\delta Q_{\text{rev}}}{T}}}
, and the fundamental thermodynamic relation) are equivalent for microcanonical ensemble, and statistical ensembles describing a thermodynamic system in equilibrium with a reservoir, such as the canonical ensemble, grand canonical ensemble, isothermal–isobaric ensemble. This equivalence is commonly shown in textbooks. However, the equivalence between the thermodynamic definition of entropy and the  Gibbs entropy is not general but instead an exclusive property of the generalized Boltzmann distribution.

Furthermore, it has been shown that the definitions of entropy in statistical mechanics is the only entropy that is equivalent to the classical thermodynamics entropy under the following postulates:

## Theoretical relationship
Despite the foregoing, there is a difference between the two quantities.  The information entropy Η can be calculated for any probability distribution (if the "message" is taken to be that the event i which had probability pi occurred, out of the space of the events possible), while the thermodynamic entropy S refers to thermodynamic probabilities pi specifically.  The difference is more theoretical than actual, however, because any probability distribution can be approximated arbitrarily closely by some thermodynamic system.

Moreover, a direct connection can be made between the two. If the probabilities in question are the thermodynamic probabilities pi: the (reduced) Gibbs entropy σ can then be seen as simply the amount of Shannon information needed to define the detailed microscopic state of the system, given its macroscopic description.  Or, in the words of G. N. Lewis writing about chemical entropy in 1930, "Gain in entropy always means loss of information, and nothing more".  To be more concrete, in the discrete case using base two logarithms, the reduced Gibbs entropy is equal to the average of the minimum number of yes–no questions needed to be answered in order to fully specify the microstate, given that we know the macrostate.

Furthermore, the prescription to find the equilibrium distributions of statistical mechanics—such as the Boltzmann distribution—by maximising the Gibbs entropy subject to appropriate constraints (the Gibbs algorithm) can be seen as something not unique to thermodynamics, but as a principle of general relevance in statistical inference, if it is desired to find a maximally uninformative probability distribution, subject to certain constraints on its averages.  (These perspectives are explored further in the article Maximum entropy thermodynamics.)

The Shannon entropy in information theory is sometimes expressed in units of bits per symbol.  The physical entropy may be on a "per quantity" basis (h) which is called "intensive" entropy instead of the usual total entropy which is called "extensive" entropy.  The "shannons" of a message (Η) are its total "extensive" information entropy and is h times the number of bits in the message.

A direct and physically real relationship between h and S can be found by assigning a symbol to each microstate that occurs per mole, kilogram, volume, or particle of a homogeneous substance, then calculating the 'h' of these symbols. By theory or by observation, the symbols (microstates) will occur with different probabilities and this will determine h. If there are N moles, kilograms, volumes, or particles of the unit substance, the relationship between h (in bits per unit substance) and physical extensive entropy in nats is:

{\displaystyle S=k_{\mathrm {B} }\ln(2)Nh}

where ln(2) is the conversion factor from base 2 of Shannon entropy to the natural base e of physical entropy.  N h is the amount of information in bits needed to describe the state of a physical system with entropy S.  Landauer's principle demonstrates the reality of this by stating the minimum energy E required (and therefore heat Q generated) by an ideally efficient memory change or logic operation by irreversibly erasing or merging N h bits of information will be S times the temperature which is

{\displaystyle E=Q=Tk_{\mathrm {B} }\ln(2)Nh,}

where h is in informational bits and E and Q are in physical Joules. This has been experimentally confirmed.

Temperature is a measure of the average kinetic energy per particle in an ideal gas (kelvins = ⁠2/3⁠ joules/kB) so the J/K units of kB is dimensionless (joule/joule).  kb is the conversion factor from energy in ⁠3/2⁠ kelvins to joules for an ideal gas.  If kinetic energy measurements per particle of an ideal gas were expressed as joules instead of kelvins, kb in the above equations would be replaced by 3/2. This shows that S is a true statistical measure of microstates that does not have a fundamental physical unit other than the units of information, in this case nats, which is just a statement of which logarithm base was chosen by convention.

## Information is physical

### Szilard's engine

A physical thought experiment demonstrating how just the possession of information might in principle have thermodynamic consequences was established in 1929 by Leó Szilárd, in a refinement of the famous Maxwell's demon scenario (and a reversal of the Joule expansion thought experiment).

Consider Maxwell's set-up, but with only a single gas particle in a box.  If the demon knows which half of the box the particle is in (equivalent to a single bit of information), it can close a shutter between the two halves of the box, close a piston unopposed into the empty half of the box, and then extract 

{\displaystyle k_{\text{B}}T\ln 2}
 joules of useful work if the shutter is opened again. The particle can then be left to isothermally expand back to its original equilibrium occupied volume.  In just the right circumstances therefore, the possession of a single bit of Shannon information (a single bit of negentropy in Brillouin's term) really does correspond to a reduction in the entropy of the physical system.  The global entropy is not decreased, but information to free energy conversion is possible.

This thought experiment has been physically demonstrated, using a phase-contrast microscope equipped with a high speed camera connected to a computer, acting as the demon. In this experiment, information to energy conversion is performed on a Brownian particle by means of feedback control; that is, synchronizing the work given to the particle with the information obtained on its position.  Computing energy balances for different feedback protocols, has confirmed that the Jarzynski equality requires a generalization that accounts for the amount of information involved in the feedback.

### Landauer's principle

In fact one can generalise: any information that has a physical representation must somehow be embedded in the statistical mechanical degrees of freedom of a physical system.

Thus, Rolf Landauer argued in 1961, if one were to imagine starting with those degrees of freedom in a thermalised state, there would be a real reduction in thermodynamic entropy if they were then re-set to a known state.  This can only be achieved under information-preserving microscopically deterministic dynamics if the uncertainty is somehow dumped somewhere else – i.e. if the entropy of the environment (or the non information-bearing degrees of freedom) is increased by at least an equivalent amount, as required by the Second Law, by gaining an appropriate quantity of heat: specifically kT ln(2) of heat for every 1 bit of randomness erased.

On the other hand, Landauer argued, there is no thermodynamic objection to a logically reversible operation potentially being achieved in a physically reversible way in the system.  It is only logically irreversible operations – for example, the erasing of a bit to a known state, or the merging of two computation paths – which must be accompanied by a corresponding entropy increase. When information is physical, all processing of its representations, i.e. generation, encoding, transmission, decoding and interpretation, are natural processes where entropy increases by consumption of free energy.

Applied to the Maxwell's demon/Szilard engine scenario, this suggests that it might be possible to "read" the state of the particle into a computing apparatus with no entropy cost; but only if the apparatus has already been SET into a known state, rather than being in a thermalised state of uncertainty.  To SET (or RESET) the apparatus into this state will cost all the entropy that can be saved by knowing the state of Szilard's particle.

In 2008 and 2009, researchers showed that Landauer's principle can be derived from the second law of thermodynamics and the entropy change associated with information gain, developing the thermodynamics of quantum and classical feedback-controlled systems.

## Negentropy

Shannon entropy has been related by physicist Léon Brillouin to a concept sometimes called negentropy. In 1953, Brillouin derived a general equation stating that the changing of an information bit value requires at least kT ln(2) energy.  This is the same energy as the work Leo Szilard's engine produces in the idealistic case, which in turn equals the same quantity found by Landauer. In his book, he further explored this problem concluding that any cause of a bit value change  (measurement, decision about a yes/no question, erasure,  display, etc.) will require the same amount, kT ln(2), of energy. Consequently, acquiring information about a system's microstates is associated with an entropy production, while erasure yields entropy production only when the bit value is changing. Setting up a bit of information in a sub-system originally in thermal equilibrium results in a local entropy reduction. However, there is no violation of the second law of thermodynamics, according to Brillouin, since a reduction in any local system's thermodynamic entropy results in an increase in thermodynamic entropy elsewhere. In this way, Brillouin clarified the meaning of negentropy which was considered as controversial because its earlier understanding can yield Carnot efficiency higher than one. Additionally, the relationship between energy and information formulated by Brillouin has been proposed as a connection between the amount of bits that the brain processes and the energy it consumes: Collell and Fauquet  argued that De Castro  analytically found the Landauer limit as the thermodynamic lower bound for brain computations. However, even though evolution is supposed to have "selected" the most energetically efficient processes, the physical lower bounds are not realistic quantities in the brain. Firstly, because the minimum processing unit considered in physics is the atom/molecule, which is distant from the actual way that brain operates; and, secondly, because neural networks incorporate important redundancy and noise factors that greatly reduce their efficiency. Laughlin et al. was the first to provide explicit quantities for the energetic cost of processing sensory information. Their findings in blowflies revealed that for visual sensory data, the cost of transmitting one bit of information is around 5 × 10−14 Joules, or equivalently 104 ATP molecules. Thus, neural processing efficiency is still far from Landauer's limit of kT ln(2) J, but as a curious fact, it is still much more efficient than modern computers. 

In 2009, Mahulikar & Herwig redefined thermodynamic negentropy as the specific entropy deficit of the dynamically ordered sub-system relative to its surroundings.  This definition enabled the formulation of the Negentropy Principle, which is mathematically shown to follow from the 2nd Law of Thermodynamics, during order existence.

## Quantum theory

Hirschman showed, cf. Hirschman uncertainty, that Heisenberg's uncertainty principle can be expressed as a particular lower bound on the sum of the classical distribution entropies of the quantum observable probability distributions of a quantum mechanical state, the square of the wave-function, in coordinate, and also momentum space, when expressed in Planck units. The resulting inequalities provide a tighter bound on the uncertainty relations of Heisenberg.

It is meaningful to assign a "joint entropy", because positions and momenta are quantum conjugate variables and are therefore not jointly observable. Mathematically, they have to be treated as joint distribution.

Note that this joint entropy is not equivalent to the Von Neumann entropy, −Tr ρ lnρ = −⟨lnρ⟩.

Hirschman's entropy is said to account for the full information content of a mixture of quantum states.

(Dissatisfaction with the Von Neumann entropy from quantum information points of view has been expressed by Stotland, Pomeransky, Bachmat and Cohen, who have introduced a yet different definition of entropy that reflects the inherent uncertainty of quantum mechanical states. This definition allows distinction between the minimum uncertainty entropy of pure states, and the excess statistical entropy of mixtures.)
