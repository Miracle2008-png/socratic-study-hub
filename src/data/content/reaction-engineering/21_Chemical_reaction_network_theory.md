# Chemical reaction network theory

Chemical reaction network theory is an area of applied mathematics that attempts to model the behaviour of real-world chemical systems. Since its foundation in the 1960s, it has attracted a growing research community, mainly due to its applications in biochemistry and theoretical chemistry. It has also attracted interest from pure mathematicians due to the interesting problems that arise from the mathematical structures involved.

## Common assumptions

For physical reasons, it is usually assumed that reactant concentrations cannot be negative, and that each reaction only takes place if all its reactants are present, i.e. all have non-zero concentration. For mathematical reasons, it is usually assumed that 
  
    
      
        V
        (
        x
        )
      
    
    

$$ V(x) $$

  
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
        
      
    
    

$$ {\ce {A2, B}} $$

  
 and 
  
    
      
        
          AB
        
      
    
    

$$ {\ce {AB}} $$

  
 are gases (for example, 
  
    
      
        
          
            O
            
              2
            
            
              
            
          
        
      
    
    

$$ {\ce {O2}} $$

  
, 
  
    
      
        
          CO
        
      
    
    

$$ {\ce {CO}} $$

  
 and 
  
    
      
        
          
            CO
            
              2
            
            
              
            
          
        
      
    
    

$$ {\ce {CO2}} $$

  
), 
  
    
      
        
          Z
        
      
    
    

$$ {\ce {Z}} $$

  
 is the "adsorption place" on the surface of the solid catalyst (for example, 
  
    
      
        
          Pt
        
      
    
    

$$ {\ce {Pt}} $$

  
), 
  
    
      
        
          AZ
        
      
    
    

$$ {\ce {AZ}} $$

  
 and 
  
    
      
        
          BZ
        
      
    
    

$$ {\ce {BZ}} $$

  
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
        
      
    
    

$$ G(c)=\sum _{i}c_{i}\left(\ln {\frac {c_{i}}{c_{i}^{*}}}-1\right) $$

  
, where 
  
    
      
        
          c
          
            i
          
        
      
    
    

$$ c_{i} $$

  
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
          
        
      
    
    

$$ n_{k}A_{i}\to \sum _{j}\beta _{kj}A_{j} $$

  
 (for 
  
    
      
        k
        ≤
        r
      
    
    

$$ k\leq r $$

  
, where r is the number of reactions, 
  
    
      
        
          A
          
            i
          
        
      
    
    

$$ A_{i} $$

  
 is the symbol of ith component, 
  
    
      
        
          n
          
            k
          
        
        ≥
        1
      
    
    

$$ n_{k}\geq 1 $$

  
, and 
  
    
      
        
          β
          
            k
            j
          
        
      
    
    

$$ \beta _{kj} $$

  
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
        
      
    
    

$$ M(c)=\sum _{i}m_{i}c_{i}={\text{const}} $$

  
 (where all 
  
    
      
        
          m
          
            i
          
        
        >
        0
      
    
    

$$ m_{i}>0 $$

  
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
        
      
    
    

$$ \sum _{i}m_{i}|c_{i}^{1}(t)-c_{i}^{2}(t)| $$

  
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
      
    
    

$$ c^{1}(t)\;{\mbox{and}}\;c^{2}(t) $$

  
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
