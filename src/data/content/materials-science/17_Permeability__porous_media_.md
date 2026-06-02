# Permeability (porous media)

In fluid mechanics, materials science and Earth sciences, the permeability of porous media (often, a rock or soil) is a measure of the ability for fluids (gas or liquid) to flow through the media; it is commonly symbolized as k.
Fluids can more easily flow through a material with high permeability than one with low permeability.
The permeability of a medium is related to the porosity, but also to the shapes of the pores in the medium and their level of connectedness. 
Fluid flows can also be influenced in different lithological settings by brittle deformation of rocks in fault zones; the mechanisms by which this occurs are the subject of fault zone hydrogeology. Permeability is also affected by the pressure inside a material.
The SI unit for permeability is the square metre (m2). A practical unit for permeability is the darcy (d), or more commonly the millidarcy (md) (1 d ≈ 10−12 m2). The name honors the French Engineer Henry Darcy who first described the flow of water through sand filters for potable water supply. Permeability values for most materials commonly range typically from a fraction to several thousand millidarcys. The unit of square centimetre (cm2) is also sometimes used (1 cm2 = 10−4 m2 ≈ 108 d).


## Applications
The concept of permeability is of importance in determining the flow characteristics of hydrocarbons in oil and gas reservoirs, and of groundwater in aquifers.
For a rock to be considered as an exploitable hydrocarbon reservoir without stimulation, its permeability must be greater than approximately 100 md (depending on the nature of the hydrocarbon – gas reservoirs with lower permeabilities are still exploitable because of the lower viscosity of gas in comparison with oil).  Rocks with permeabilities significantly lower than 100 md can form efficient seals (see petroleum geology).  Unconsolidated sands may have permeabilities of over 5000 md.
The concept also has many practical applications outside of geology, for example in chemical engineering (e.g., filtration), as well as in Civil Engineering when determining whether the ground conditions of a site are suitable for construction.
The concept of permeability is also useful in computational fluid dynamics (CFD) for modeling flow through complex geometries such as packed beds, filter papers, or tube banks. When the size of individual components - such as particle diameter in packed beds or tube diameter in tube bundles - are significantly smaller than the overall flow domain, direct modeling becomes computationally intensive due to the fine mesh resolution required. In such cases, the domain can be approximated as a porous medium, with permeability estimated using correlations, experimental data, or separate fluid flow simulations.


## Description

Permeability is part of the proportionality constant in Darcy's law which relates discharge (flow rate) and fluid physical properties (e.g. dynamic viscosity), to a pressure gradient applied to the porous media:

  
    
      
        v
        =
        
          
            k
            η
          
        
        
          
            
              Δ
              P
            
            
              Δ
              x
            
          
        
      
    
    {\displaystyle v={\frac {k}{\eta }}{\frac {\Delta P}{\Delta x}}}
  
 (for linear flow)
Therefore:

  
    
      
        k
        =
        v
        
          
            
              η
              
              Δ
              x
            
            
              Δ
              P
            
          
        
      
    
    {\displaystyle k=v{\frac {\eta \,\Delta x}{\Delta P}}}
  

where:

  
    
      
        v
      
    
    {\displaystyle v}
  
 is the fluid velocity through the porous medium (i.e., the average flow velocity calculated as if the fluid was the only phase present in the porous medium) (m/s)

  
    
      
        k
      
    
    {\displaystyle k}
  
 is the permeability of a medium (m2)

  
    
      
        η
      
    
    {\displaystyle \eta }
  
 is the dynamic viscosity of the fluid (Pa·s)

  
    
      
        Δ
        P
      
    
    {\displaystyle \Delta P}
  
 is the applied pressure difference (Pa)

  
    
      
        Δ
        x
      
    
    {\displaystyle \Delta x}
  
 is the thickness of the bed of the porous medium (m)
In naturally occurring materials, the permeability values range over many orders of magnitude (see table below for an example of this range).


### Relation to hydraulic conductivity
The global proportionality constant for the flow of water through a porous medium is called the hydraulic conductivity (K, unit: m/s). Permeability, or intrinsic permeability, (k, unit: m2) is a part of this, and is a specific property characteristic of the solid skeleton and the microstructure of the porous medium itself, independently of the nature and properties of the fluid flowing through the pores of the medium. This allows to take into account the effect of temperature on the viscosity of the fluid flowing though the porous medium and to address other fluids than pure water, e.g., concentrated brines, petroleum, or organic solvents. Given the value of hydraulic conductivity for a studied system, the permeability can be calculated as follows:

  
    
      
        k
        =
        K
        
          
            η
            
              ρ
              g
            
          
        
      
    
    {\displaystyle k=K{\frac {\eta }{\rho g}}}
  

where

  
    
      
        k
      
    
    {\displaystyle k}
  
 is the permeability, m2

  
    
      
        K
      
    
    {\displaystyle K}
  
 is the hydraulic conductivity, m/s

  
    
      
        η
      
    
    {\displaystyle \eta }
  
 is the dynamic viscosity of the fluid, Pa·s

  
    
      
        ρ
      
    
    {\displaystyle \rho }
  
 is the density of the fluid, kg/m3

  
    
      
        g
      
    
    {\displaystyle g}
  
 is the acceleration due to gravity, m/s2.


### Anisotropic permeability
Tissue such as brain, liver, muscle, etc can be treated as a heterogeneous porous medium. Describing the flow of biofluids (blood, cerebrospinal fluid, etc.) within such a medium requires a full 3-dimensional anisotropic treatment of the tissue.  In this case the scalar hydraulic permeability is replaced with the hydraulic permeability tensor so that Darcy's Law reads

  
    
      
        
          q
        
        =
        −
        
          
            1
            η
          
        
        
          κ
        
        ⋅
        ∇
        P
      
    
    {\displaystyle {\boldsymbol {q}}=-{\frac {1}{\eta }}{\boldsymbol {\kappa }}\cdot \nabla P}
  

  
    
      
        
          q
        
      
    
    {\displaystyle {\boldsymbol {q}}}
  
 is the Darcy flux, or filtration velocity, which describes the bulk (not microscopic) velocity field of the fluid, 
  
    
      
        [
        
          Length
        
        ]
        [
        
          Time
        
        
          ]
          
            −
            1
          
        
      
    
    {\displaystyle [{\text{Length}}][{\text{Time}}]^{-1}}
  

  
    
      
        η
      
    
    {\displaystyle \eta }
  
 is the dynamic viscosity of the fluid, 
  
    
      
        [
        
          Mass
        
        ]
        [
        
          L
        
        
          ]
          
            −
            1
          
        
        [
        T
        
          ]
          
            −
            1
          
        
      
    
    {\displaystyle [{\text{Mass}}][{\text{L}}]^{-1}[T]^{-1}}
  

  
    
      
        
          κ
        
      
    
    {\displaystyle {\boldsymbol {\kappa }}}
  
 is the hydraulic permeability tensor, 
  
    
      
        [
        
          L
        
        
          ]
          
            2
          
        
      
    
    {\displaystyle [{\text{L}}]^{2}}
  

  
    
      
        ∇
      
    
    {\displaystyle \nabla }
  
 is the gradient operator, 
  
    
      
        [
        
          L
        
        
          ]
          
            −
            1
          
        
      
    
    {\displaystyle [{\text{L}}]^{-1}}
  

  
    
      
        P
      
    
    {\displaystyle P}
  
 is the pressure field in the fluid, 
  
    
      
        [
        
          M
        
        ]
        [
        
          L
        
        
          ]
          
            −
            1
          
        
        [
        
          T
        
        
          ]
          
            −
            2
          
        
      
    
    {\displaystyle [{\text{M}}][{\text{L}}]^{-1}[{\text{T}}]^{-2}}
  

Connecting this expression to the isotropic case, 
  
    
      
        
          κ
        
        =
        k
        
          1
        
      
    
    {\displaystyle {\boldsymbol {\kappa }}=k\mathbb {1} }
  
, where k is the scalar hydraulic permeability, and 1 is the identity tensor.


## Determination
Permeability is typically determined in the lab by application of Darcy's law under steady state conditions or, more generally, by application of various solutions to the diffusion equation for unsteady flow conditions.
Permeability needs to be measured, either directly (using Darcy's law), or through estimation using empirically derived formulas.  However, for some simple models of porous media, permeability can be calculated (e.g., random close packing of identical spheres). Laboratory pumping tests have been used to evaluate empirical formulas for estimating permeability in sandy soils. Some studies reported that modified Hazen approximate laboratory measurements reasonably well.


### Permeability model based on conduit flow
Based on the Hagen–Poiseuille equation for viscous flow in a pipe, permeability can be expressed as:

  
    
      
        
          k
          
            I
          
        
        =
        C
        ⋅
        
          d
          
            2
          
        
      
    
    {\displaystyle k_{I}=C\cdot d^{2}}
  

where:

  
    
      
        
          k
          
            I
          
        
      
    
    {\displaystyle k_{I}}
  
 is the intrinsic permeability [length2]

  
    
      
        C
      
    
    {\displaystyle C}
  
 is a dimensionless constant that is related to the configuration of the flow-paths

  
    
      
        d
      
    
    {\displaystyle d}
  
 is the average, or effective pore diameter [length].


## Absolute permeability (aka intrinsic or specific permeability)
Absolute permeability denotes the permeability in a porous medium that is 100% saturated with a single-phase fluid.  This may also be called the intrinsic permeability or specific permeability.  These terms refer to the quality that the permeability value in question is an intensive property of the medium, not a spatial average of a heterogeneous block of material equation 2.28; and that it is a function of the material structure only (and not of the fluid). They explicitly distinguish the value from that of relative permeability.


## Permeability to gases
Sometimes, permeability to gases can be somewhat different than that for liquids in the same media. One difference is attributable to the "slippage" of gas at the interface with the solid when the gas mean free path is comparable to the pore size (about 0.01 to 0.1 μm at standard temperature and pressure). See also Knudsen diffusion and constrictivity. For example, measurement of permeability through sandstones and shales yielded values from 9.0×10−19 m2 to 2.4×10−12 m2 for water and between 1.7×10−17 m2 to 2.6×10−12 m2 for nitrogen gas. Gas permeability of reservoir rock and source rock is important in petroleum engineering, when considering the optimal extraction of gas from unconventional sources such as shale gas, tight gas, or coalbed methane.


## Permeability tensor
To model permeability in anisotropic media, a permeability tensor is needed. Pressure can be applied in three directions, and for each direction, permeability can be measured (via Darcy's law in 3D) in three directions, thus leading to a 3 by 3 tensor. The tensor is realised using a 3 by 3 matrix being both symmetric and positive definite (SPD matrix):

The tensor is symmetric by the Onsager reciprocal relations
The tensor is positive definite because the energy being expended (the inner product of fluid flow and negative pressure gradient) is always positive
The permeability tensor is always diagonalizable (being both symmetric and positive definite). The eigenvectors will yield the principal directions of flow where flow is parallel to the pressure gradient, and the eigenvalues represent the principal permeabilities.


## Ranges of common intrinsic permeabilities
These values do not depend on the fluid properties; see the table derived from the same source for values of hydraulic conductivity, which are specific to the material through which the fluid is flowing.


## See also
Fault zone hydrogeology
Hydraulic conductivity
Hydrogeology
Permeation
Petroleum geology
Relative permeability
Klinkenberg correction
Electrical resistivity measurement of concrete
Permeability of soils


## References


## Further reading
Wang, H. F., 2000. Theory of Linear Poroelasticity with Applications to Geomechanics and Hydrogeology, Princeton University Press. ISBN 0-691-03746-9


## External links
Defining Permeability 
Tailoring porous media to control permeability
Permeability of Porous Media
Graphical depiction of different flow rates through materials of differing permeability
Web-based porosity and permeability calculator given flow characteristics
Multiphase fluid flow in porous media
Florida Method of Test For Concrete Resistivity as an Electrical Indicator of its Permeability Archived 2011-06-16 at the Wayback Machine