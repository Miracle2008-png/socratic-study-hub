# Damköhler numbers

The Damköhler numbers (Da) are dimensionless numbers used in chemical engineering to relate the chemical reaction timescale (reaction rate) to the transport phenomena rate occurring in a system. It is named after German chemist Gerhard Damköhler, who worked in chemical engineering, thermodynamics, and fluid dynamics. 
The Karlovitz number (Ka) is related to the Damköhler number by Da = 1/Ka.
In its most commonly used form, the first Damköhler number (DaI) relates particles' characteristic residence time scale in a fluid region to the reaction timescale. The residence time scale can take the form of a convection time scale, such as volumetric flow rate through the reactor for continuous (plug flow or stirred tank) or semibatch chemical processes:

  
    
      
        
          D
          
            a
            
              
                I
              
            
          
        
        =
        
          
            reaction rate
            convective mass transport rate
          
        
      
    
    

$$ \mathrm {Da_{\mathrm {I} }} ={\frac {\text{reaction rate}}{\text{convective mass transport rate}}} $$

  

In reacting systems that include interphase mass transport, the first Damköhler number can be written as the ratio of the chemical reaction rate to the mass transfer rate

  
    
      
        
          
            D
            a
          
          
            
              I
            
          
        
        =
        
          
            reaction rate
            diffusive mass transfer rate
          
        
      
    
    

$$ \mathrm {Da} _{\mathrm {I} }={\frac {\text{reaction rate}}{\text{diffusive mass transfer rate}}} $$

  

It is also defined as the ratio of the characteristic fluidic and chemical time scales:

  
    
      
        
          D
          
            a
            
              
                I
              
            
          
        
        =
        
          
            flow timescale
            chemical timescale
          
        
      
    
    

$$ \mathrm {Da_{\mathrm {I} }} ={\frac {\text{flow timescale}}{\text{chemical timescale}}} $$

  

Since the reaction rate determines the reaction timescale, the exact formula for the Damköhler number varies according to the rate law equation. For a general chemical reaction A → B following the Power law kinetics of n-th order, the Damköhler number for a convective flow system is defined as:

  
    
      
        
          D
          
            a
            
              
                I
              
            
          
        
        =
        k
        
          C
          
            0
          
          
             
            n
            −
            1
          
        
        τ
      
    
    

$$ \mathrm {Da_{\mathrm {I} }} =kC_{0}^{\ n-1}\tau $$

  

where:

k = kinetics reaction rate constant
C0 = initial concentration
n = reaction order

  
    
      
        τ
      
    
    

$$ \tau $$

  
 = mean residence time or space-time
On the other hand, the second Damköhler number (DaII) is defined in general as:

  
    
      
        
          
            D
            a
          
          
            
              I
              I
            
          
        
        =
        
          
            
              k
              Q
            
            
              
                c
                
                  p
                
              
              Δ
              T
            
          
        
      
    
    

$$ \mathrm {Da} _{\mathrm {II} }={\frac {kQ}{c_{p}\Delta T}} $$

  

It compares the process energy of a thermochemical reaction (such as the energy involved in a nonequilibrium gas process) with a related enthalpy difference (driving force).
In terms of reaction rates:

  
    
      
        
          
            D
            a
          
          
            
              I
              I
            
          
        
        =
        
          
            
              k
              
                C
                
                  0
                
                
                  n
                  −
                  1
                
              
            
            
              
                k
                
                  g
                
              
              a
            
          
        
      
    
    

$$ \mathrm {Da} _{\mathrm {II} }={\frac {kC_{0}^{n-1}}{k_{g}a}} $$

  

where

kg is the global mass transport coefficient
a is the interfacial area
The value of Da provides a quick estimate of the degree of conversion that can be achieved. If DaI goes to infinity, the residence time greatly exceeds the reaction time, such that nearly all chemical reactions have taken place during the period of residency, this is the transport limited case, where the reaction is much faster than the diffusion. Otherwise if DaI goes to 0, the residence time is much shorter than the reaction time, so that no chemical reaction has taken place during the brief period when the fluid particles occupy the reaction location, this is the reaction limited case, where diffusion happens much faster than the reaction. Similarly, DaII goes to 0 implies that the energy of the chemical reaction is negligible compared to the energy of the flow. The limit of the Damköhler number going to infinity is called the Burke–Schumann limit.
As a rule of thumb, when Da is less than 0.1 a conversion of less than 10% is achieved, and when Da is greater than 10 a conversion of more than 90% is expected.

## Derivation for decomposition of a single species

From the general mole balance on some species 
  
    
      
        A
      
    
    

$$ A $$

  
, where for a CSTR steady state and perfect mixing are assumed,

  
    
      
        
          in
        
        −
        
          out
        
        +
        
          generation
        
        =
        
          accumulation
        
      
    
    

$$ {\text{in}}-{\text{out}}+{\text{generation}}={\text{accumulation}} $$

  

  
    
      
        
          F
          
            A
            0
          
        
        −
        
          F
          
            A
          
        
        +
        
          r
          
            A
          
        
        V
        =
        0
      
    
    

$$ F_{A0}-F_{A}+r_{A}V=0 $$

  

  
    
      
        
          F
          
            A
          
        
        −
        
          F
          
            A
            0
          
        
        =
        
          r
          
            A
          
        
        V
      
    
    

$$ F_{A}-F_{A0}=r_{A}V $$

  

Assuming a constant volumetric flow rate 
  
    
      
        
          v
          
            0
          
        
      
    
    

$$ v_{0} $$

  
, which is the case for a liquid reactor or a gas phase reaction with no net generation of moles,

  
    
      
        (
        
          C
          
            A
          
        
        −
        
          C
          
            A
            0
          
        
        )
        
          v
          
            0
          
        
        =
        
          r
          
            A
          
        
        V
      
    
    

$$ (C_{A}-C_{A0})v_{0}=r_{A}V $$

  

  
    
      
        (
        
          C
          
            A
          
        
        −
        
          C
          
            A
            0
          
        
        )
        =
        
          r
          
            A
          
        
        
          
            V
            
              v
              
                0
              
            
          
        
      
    
    

$$ (C_{A}-C_{A0})=r_{A}{\frac {V}{v_{0}}} $$

  

  
    
      
        (
        
          C
          
            A
          
        
        −
        
          C
          
            A
            0
          
        
        )
        =
        
          r
          
            A
          
        
        τ
      
    
    

$$ (C_{A}-C_{A0})=r_{A}\tau $$

  

where the space-time is defined to be the ratio of the reactor volume to volumetric flow rate. It is the time required for a slug of fluid to pass through the reactor. For a decomposition reaction, the rate of reaction is proportional to some power of the concentration of 
  
    
      
        A
      
    
    

$$ A $$

  
. In addition, for a single reaction a conversion may be defined in terms of the limiting reactant, for the simple decomposition that is species 
  
    
      
        A
      
    
    

$$ A $$

  

  
    
      
        (
        
          C
          
            A
          
        
        −
        
          C
          
            A
            0
          
        
        )
        =
        −
        k
        
          C
          
            A
          
          
            n
          
        
        τ
      
    
    

$$ (C_{A}-C_{A0})=-kC_{A}^{n}\tau $$

  

  
    
      
        (
        (
        1
        −
        X
        )
        
          C
          
            A
            0
          
        
        −
        
          C
          
            A
            0
          
        
        )
        =
        −
        k
        
          C
          
            A
            0
          
          
            n
          
        
        τ
        (
        1
        −
        X
        
          )
          
            n
          
        
      
    
    

$$ ((1-X)C_{A0}-C_{A0})=-kC_{A0}^{n}\tau (1-X)^{n} $$

  

  
    
      
        X
        =
        k
        
          C
          
            A
            0
          
          
            n
            −
            1
          
        
        τ
        (
        1
        −
        X
        
          )
          
            n
          
        
      
    
    

$$ X=kC_{A0}^{n-1}\tau (1-X)^{n} $$

  

  
    
      
        0
        =
        
          
            
              (
              1
              −
              X
              
                )
                
                  n
                
              
            
            X
          
        
        −
        
          
            1
            
              D
              
                a
                
                  n
                
              
            
          
        
      
    
    

$$ 0={\frac {(1-X)^{n}}{X}}-{\frac {1}{\rm {Da_{n}}}} $$

  

As can be seen, as the Damköhler number increases, the other term must decrease. The ensuing polynomial can be solved and the conversion for the rule of thumb Damköhler numbers found. Alternatively, one can graph the expressions and see where they intersect with the line given by the inverse Damköhler number to see the solution for conversion. In the plot below, the y-axis is the inverse Damköhler number and the x-axis the conversion. The rule-of-thumb inverse Damköhler numbers have been placed as dashed horizontal lines.

## Applications

Thermochemical nonequilibrium in hypersonic flow
Combustion