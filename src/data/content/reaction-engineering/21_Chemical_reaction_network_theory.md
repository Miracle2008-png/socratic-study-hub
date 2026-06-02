# Chemical reaction network theory

Chemical reaction network theory is an area of applied mathematics that attempts to model the behaviour of real-world chemical systems. Since its foundation in the 1960s, it has attracted a growing research community, mainly due to its applications in biochemistry and theoretical chemistry. It has also attracted interest from pure mathematicians due to the interesting problems that arise from the mathematical structures involved.


## History
Dynamical properties of reaction networks were studied in chemistry and physics after the invention of the law of mass action. The essential steps in this study were introduction of detailed balance for the complex chemical reactions by Rudolf Wegscheider (1901), development of the quantitative theory of chemical chain reactions by Nikolay Semyonov (1934), development of kinetics of catalytic reactions by Cyril Norman Hinshelwood, and many other results.
Three eras of chemical dynamics can be revealed in the flux of research and publications. These eras may be associated with leaders: the first is the van 't Hoff era, the second may be called the Semenov–Hinshelwood era and the third is definitely the Aris era. 
The "eras" may be distinguished based on the main focuses of the scientific leaders:

van't Hoff was searching for the general law of chemical reaction related to specific chemical properties. The term "chemical dynamics" belongs to van't Hoff.
The Semenov-Hinshelwood focus was an explanation of critical phenomena observed in many chemical systems, in particular in flames. A concept chain reactions elaborated by these researchers influenced many sciences, especially nuclear physics and engineering.
Aris' activity was concentrated on the detailed systematization of mathematical ideas and approaches.
The mathematical discipline "chemical reaction network theory" was originated by Rutherford Aris, a famous expert in chemical engineering, with the support of Clifford Truesdell, the founder and editor-in-chief of the journal Archive for Rational Mechanics and Analysis. The paper of R. Aris in this journal was communicated to the journal by C. Truesdell. It opened the series of papers of other authors (which were communicated already by R. Aris). The well known papers of this series are the works of Frederick J. Krambeck, Roy Jackson, Friedrich Josef Maria Horn, Martin Feinberg and others, published in the 1970s. In his second "prolegomena" paper, R. Aris mentioned the work of N.Z. Shapiro, L.S. Shapley (1965), where an important part of his scientific program was realized.
Since then, the chemical reaction network theory has been further developed by a large number of researchers internationally.


## Overview
A chemical reaction network (often abbreviated to CRN) comprises a set of reactants, a set of products (often intersecting the set of reactants), and a set of reactions. For example, the pair of combustion reactions

form a reaction network. The reactions are represented by the arrows. The reactants appear to the left of the arrows, in this example they are 
  
    
      
        
          
            H
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {H2}}}
  
 (hydrogen), 
  
    
      
        
          
            O
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {O2}}}
  
 (oxygen) and C (carbon). The products appear to the right of the arrows, here they are 
  
    
      
        
          
            H
            
              2
            
            
              
            
          
          O
        
      
    
    {\displaystyle {\ce {H2O}}}
  
 (water) and 
  
    
      
        
          
            CO
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {CO2}}}
  
 (carbon dioxide). In this example, since the reactions are irreversible and neither of the products are used in the reactions, the set of reactants and the set of products are disjoint.
Mathematical modelling of chemical reaction networks usually focuses on what happens to the concentrations of the various chemicals involved as time passes. Following the example above, let a represent the concentration of 
  
    
      
        
          
            H
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {H2}}}
  
 in the surrounding air, b represent the concentration of 
  
    
      
        
          
            O
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {O2}}}
  
, c represent the concentration of 
  
    
      
        
          
            H
            
              2
            
            
              
            
          
          O
        
      
    
    {\displaystyle {\ce {H2O}}}
  
, and so on. Since all of these concentrations will not in general remain constant, they can be written as a function of time e.g. 
  
    
      
        a
        (
        t
        )
        ,
        b
        (
        t
        )
      
    
    {\displaystyle a(t),b(t)}
  
, etc.
These variables can then be combined into a vector

  
    
      
        x
        (
        t
        )
        =
        
          (
          
            
              
                
                  a
                  (
                  t
                  )
                
              
              
                
                  b
                  (
                  t
                  )
                
              
              
                
                  c
                  (
                  t
                  )
                
              
              
                
                  ⋮
                
              
            
          
          )
        
      
    
    {\displaystyle x(t)=\left({\begin{array}{c}a(t)\\b(t)\\c(t)\\\vdots \end{array}}\right)}
  

and their evolution with time can be written

  
    
      
        
          
            
              x
              ˙
            
          
        
        ≡
        
          
            
              d
              x
            
            
              d
              t
            
          
        
        =
        
          (
          
            
              
                
                  
                    
                      
                        d
                        a
                      
                      
                        d
                        t
                      
                    
                  
                
              
              
                
                  
                    
                      
                        d
                        b
                      
                      
                        d
                        t
                      
                    
                  
                
              
              
                
                  
                    
                      
                        d
                        c
                      
                      
                        d
                        t
                      
                    
                  
                
              
              
                
                  ⋮
                
              
            
          
          )
        
        .
      
    
    {\displaystyle {\dot {x}}\equiv {\frac {dx}{dt}}=\left({\begin{array}{c}{\frac {da}{dt}}\\[6pt]{\frac {db}{dt}}\\[6pt]{\frac {dc}{dt}}\\[6pt]\vdots \end{array}}\right).}
  

This is an example of a continuous autonomous dynamical system, commonly written in the form 
  
    
      
        
          
            
              x
              ˙
            
          
        
        =
        f
        (
        x
        )
      
    
    {\displaystyle {\dot {x}}=f(x)}
  
. The number of molecules of each reactant used up each time a reaction occurs is constant, as is the number of molecules produced of each product. These numbers are referred to as the stoichiometry of the reaction, and the difference between the two (i.e. the overall number of molecules used up or produced) is the net stoichiometry. This means that the equation representing the chemical reaction network can be rewritten as

  
    
      
        
          
            
              x
              ˙
            
          
        
        =
        Γ
        V
        (
        x
        )
      
    
    {\displaystyle {\dot {x}}=\Gamma V(x)}
  

Here, each column of the constant matrix 
  
    
      
        Γ
      
    
    {\displaystyle \Gamma }
  
 represents the net stoichiometry of a reaction, and so 
  
    
      
        Γ
      
    
    {\displaystyle \Gamma }
  
 is called the stoichiometry matrix. 
  
    
      
        V
        (
        x
        )
      
    
    {\displaystyle V(x)}
  
 is a vector-valued function where each output value represents a reaction rate, referred to as the kinetics.


## Common assumptions
For physical reasons, it is usually assumed that reactant concentrations cannot be negative, and that each reaction only takes place if all its reactants are present, i.e. all have non-zero concentration. For mathematical reasons, it is usually assumed that 
  
    
      
        V
        (
        x
        )
      
    
    {\displaystyle V(x)}
  
 is continuously differentiable.
It is also commonly assumed that no reaction features the same chemical as both a reactant and a product (i.e. no catalysis or autocatalysis), and that increasing the concentration of a reactant increases the rate of any reactions that use it up. This second assumption is compatible with all physically reasonable kinetics, including mass action, Michaelis–Menten and Hill kinetics. Sometimes further assumptions are made about reaction rates, e.g. that all reactions obey mass action kinetics.
Other assumptions include mass balance, constant temperature, constant pressure, spatially uniform concentration of reactants, and so on.


## Types of results
As chemical reaction network theory is a diverse and well-established area of research, there is a significant variety of results. Some key areas are outlined below.


### Number of steady states
These results relate to whether a chemical reaction network can produce significantly different behaviour depending on the initial concentrations of its constituent reactants. This has applications in e.g. modelling biological switches—a high concentration of a key chemical at steady state could represent a biological process being "switched on" whereas a low concentration would represent being "switched off".
For example, the catalytic trigger is the simplest catalytic reaction without autocatalysis that allows multiplicity of steady states (1976):

This is the classical adsorption mechanism of catalytic oxidation.
Here, 
  
    
      
        
          
            A
            
              2
            
            
              
            
          
          ,
          B
        
      
    
    {\displaystyle {\ce {A2, B}}}
  
 and 
  
    
      
        
          AB
        
      
    
    {\displaystyle {\ce {AB}}}
  
 are gases (for example, 
  
    
      
        
          
            O
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {O2}}}
  
, 
  
    
      
        
          CO
        
      
    
    {\displaystyle {\ce {CO}}}
  
 and 
  
    
      
        
          
            CO
            
              2
            
            
              
            
          
        
      
    
    {\displaystyle {\ce {CO2}}}
  
), 
  
    
      
        
          Z
        
      
    
    {\displaystyle {\ce {Z}}}
  
 is the "adsorption place" on the surface of the solid catalyst (for example, 
  
    
      
        
          Pt
        
      
    
    {\displaystyle {\ce {Pt}}}
  
), 
  
    
      
        
          AZ
        
      
    
    {\displaystyle {\ce {AZ}}}
  
 and 
  
    
      
        
          BZ
        
      
    
    {\displaystyle {\ce {BZ}}}
  
 are the intermediates on the surface (adatoms, adsorbed molecules or radicals).
This system may have two stable steady states of the surface for the same concentrations of the gaseous components.


### Stability of steady states
Stability determines whether a given steady state solution is likely to be observed in reality. Since real systems (unlike deterministic models) tend to be subject to random background noise, an unstable steady state solution is unlikely to be observed in practice. Instead of them, stable oscillations or other types of attractors may appear.


### Persistence
Persistence has its roots in population dynamics. A non-persistent species in population dynamics can go extinct for some (or all) initial conditions. Similar questions are of interests to chemists and biochemists, i.e. if a given reactant was present to start with, can it ever be completely used up?


### Existence of stable  periodic solutions
Results regarding stable periodic solutions attempt to rule out "unusual" behaviour. If a given chemical reaction network admits a stable periodic solution, then some initial conditions will converge to an infinite cycle of oscillating reactant concentrations. For some parameter values it may even exhibit quasiperiodic or chaotic behaviour. While stable periodic solutions are unusual in real-world chemical reaction networks, well-known examples exist, such as the Belousov–Zhabotinsky reactions. The simplest catalytic oscillator (nonlinear self-oscillations without autocatalysis)
can be produced from the catalytic trigger by adding a "buffer" step. 

where (BZ) is an intermediate that does not participate in the main reaction.


### Network structure and dynamical properties
One of the main problems of chemical reaction network theory is the connection between network structure and properties of dynamics. This connection is important even for linear systems, for example, the simple cycle with equal interaction weights has the slowest decay of the oscillations among all linear systems with the same number of states.
For nonlinear systems, many connections between structure and dynamics have been discovered. First of all, these are results about stability. For some classes of networks, explicit construction of Lyapunov functions is possible without apriori assumptions about special relations between rate constants. Two results of this type are well known: the deficiency zero theorem and the theorem about systems without interactions between different components.
The deficiency zero theorem gives sufficient conditions for the existence of the Lyapunov function in the classical free energy form 
  
    
      
        G
        (
        c
        )
        =
        
          ∑
          
            i
          
        
        
          c
          
            i
          
        
        
          (
          
            ln
            ⁡
            
              
                
                  c
                  
                    i
                  
                
                
                  c
                  
                    i
                  
                  
                    ∗
                  
                
              
            
            −
            1
          
          )
        
      
    
    {\displaystyle G(c)=\sum _{i}c_{i}\left(\ln {\frac {c_{i}}{c_{i}^{*}}}-1\right)}
  
, where 
  
    
      
        
          c
          
            i
          
        
      
    
    {\displaystyle c_{i}}
  
 is the concentration of the i-th component. The theorem about systems without interactions between different components states that if a network consists of reactions of the form 
  
    
      
        
          n
          
            k
          
        
        
          A
          
            i
          
        
        →
        
          ∑
          
            j
          
        
        
          β
          
            k
            j
          
        
        
          A
          
            j
          
        
      
    
    {\displaystyle n_{k}A_{i}\to \sum _{j}\beta _{kj}A_{j}}
  
 (for 
  
    
      
        k
        ≤
        r
      
    
    {\displaystyle k\leq r}
  
, where r is the number of reactions, 
  
    
      
        
          A
          
            i
          
        
      
    
    {\displaystyle A_{i}}
  
 is the symbol of ith component, 
  
    
      
        
          n
          
            k
          
        
        ≥
        1
      
    
    {\displaystyle n_{k}\geq 1}
  
, and 
  
    
      
        
          β
          
            k
            j
          
        
      
    
    {\displaystyle \beta _{kj}}
  
 are non-negative integers) and allows the stoichiometric conservation law 
  
    
      
        M
        (
        c
        )
        =
        
          ∑
          
            i
          
        
        
          m
          
            i
          
        
        
          c
          
            i
          
        
        =
        
          const
        
      
    
    {\displaystyle M(c)=\sum _{i}m_{i}c_{i}={\text{const}}}
  
 (where all 
  
    
      
        
          m
          
            i
          
        
        >
        0
      
    
    {\displaystyle m_{i}>0}
  
), then the weighted L1 distance 
  
    
      
        
          ∑
          
            i
          
        
        
          m
          
            i
          
        
        
          |
        
        
          c
          
            i
          
          
            1
          
        
        (
        t
        )
        −
        
          c
          
            i
          
          
            2
          
        
        (
        t
        )
        
          |
        
      
    
    {\displaystyle \sum _{i}m_{i}|c_{i}^{1}(t)-c_{i}^{2}(t)|}
  
 between two solutions 
  
    
      
        
          c
          
            1
          
        
        (
        t
        )
        
        
          
            and
          
        
        
        
          c
          
            2
          
        
        (
        t
        )
      
    
    {\displaystyle c^{1}(t)\;{\mbox{and}}\;c^{2}(t)}
  
 with the same M(c) monotonically decreases in time.
Importantly, research has emphasized the role of circuit topology—the specific arrangement of activating and repressing interactions within reaction networks—in shaping dynamic behaviors. Circuit motifs such as series, parallel, and feedforward loops decisively influence signal propagation, system robustness, noise filtering, and response delays. For example, in transcriptional cascades regarded as reaction networks, topological differences govern key functional properties, highlighting how network architecture critically determines biochemical regulation and dynamics.


### Model reduction
Modelling of large reaction networks meets various difficulties: the models include too many unknown parameters and high dimension makes the modelling computationally expensive. The model reduction methods were developed together with the first theories of complex chemical reactions. Three simple basic ideas have been invented:

The quasi-equilibrium (or pseudo-equilibrium, or partial equilibrium) approximation (a fraction of reactions approach their equilibrium fast enough and, after that, remain almost equilibrated).
The quasi steady state approximation or QSS (some of the species, very often these are some of intermediates or radicals, exist in relatively small amounts; they reach quickly their QSS concentrations, and then follow, as dependent quantities, the dynamics of these other species remaining close to the QSS). The QSS is defined as the steady state under the condition that the concentrations of other species do not change.
The limiting step or bottleneck is a relatively small part of the reaction network, in the simplest cases it is a single reaction, which rate is a good approximation to the reaction rate of the whole network.
The quasi-equilibrium approximation and the quasi steady state methods were developed further into the methods of slow invariant manifolds and computational singular perturbation. The methods of limiting steps gave rise to many methods of the analysis of the reaction graph.


## Stochastic chemical reaction networks
Stochastic chemical reaction networks (SCRNs) extend classical chemical reaction network theory to regimes in which molecular copy numbers are small and intrinsic noise is significant, with dynamics commonly modeled as continuous-time Markov jump processes governed by the chemical master equation. Beyond describing stochastic fluctuations, several studies have demonstrated that SCRNs can be understood as information-processing and learning systems operating under physical constraints. In particular, Mashaghi and Ramezanpour developed an information-thermodynamic framework for stochastic chemical reaction networks, showing how biochemical systems acquire, store, and process information about fluctuating environments, and identifying trade-offs between learning accuracy, memory, dissipation, and network architecture.  Related fundamental limits on learning in stochastic systems were established by Goldt and Seifert, who linked rates of information acquisition to entropy production within nonequilibrium stochastic dynamics. Complementing these thermodynamic perspectives, Moor and Zechner analyzed dynamic information transfer in stochastic biochemical networks using trajectory-level measures such as path mutual information and transfer entropy, providing tools to quantify information flow through reaction dynamics over time. From a computational standpoint, Warne, Baker, and Simpson presented a comprehensive review of simulation and inference algorithms for stochastic biochemical reaction networks, covering exact and approximate simulation methods as well as modern approaches to parameter inference and model selection. Together, these works position stochastic chemical reaction networks as foundational models for biological information processing, learning, and inference under intrinsic noise.


## References


## External links
Specialist wiki on the mathematics of reaction networks