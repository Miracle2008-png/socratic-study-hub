# Similitude

Similitude is a concept applicable to the testing of engineering models. A model is said to have similitude with the real application if the two share geometric similarity, kinematic similarity and dynamic similarity. Similarity and similitude are interchangeable in this context.
The term dynamic similitude is often used as a catch-all because it implies that geometric and kinematic similitude have already been met.
Similitude's main application is in hydraulic and aerospace engineering to test fluid flow conditions with scaled models. It is also the primary theory behind many textbook formulas in fluid mechanics.
The concept of similitude is strongly tied to dimensional analysis.

## Overview

Engineering models are used to study complex fluid dynamics problems where calculations and computer simulations are not reliable. Models are usually smaller than the final design, but not always. Scale models allow testing of a design prior to building, and in many cases are a critical step in the development process.
Construction of a scale model, however, must be accompanied by an analysis to determine what conditions it is tested under. While the geometry may be simply scaled, other parameters, such as pressure, temperature or the velocity and type of fluid may need to be altered. Similitude is achieved when testing conditions are created such that the test results are applicable to the real design.

The following criteria are required to achieve similitude;

Geometric similarity – the model is the same shape as the application, usually scaled.
Kinematic similarity – fluid flow of both the model and real application must undergo similar time rates of change motions. (fluid streamlines are similar)
Dynamic similarity – ratios of all forces acting on corresponding fluid particles and boundary surfaces in the two systems are constant.
To satisfy the above conditions the application is analyzed; 

All parameters required to describe the system are identified using principles from continuum mechanics.
Dimensional analysis is used to express the system with as few independent variables and as many dimensionless parameters as possible.
The values of the dimensionless parameters are held to be the same for both the scale model and application. This can be done because they are dimensionless and will ensure dynamic similitude between the model and the application. The resulting equations are used to derive scaling laws which dictate model testing conditions.
It is often impossible to achieve strict similitude during a model test. The greater the departure from the application's operating conditions, the more difficult achieving similitude is. In these cases some aspects of similitude may be neglected, focusing on only the most important parameters.
The design of marine vessels remains more of an art than a science in
large part because dynamic similitude is especially difficult to attain
for a vessel that is partially submerged: a ship is affected by wind
forces in the air above it, by hydrodynamic forces within the water
under it, and especially by wave motions at the interface between the
water and the air. The scaling requirements for each of these
phenomena differ, so models cannot replicate what happens to a full
sized vessel nearly so well as can be done for an aircraft or
submarine—each of which operates entirely within one medium.
Similitude is a term used widely in fracture mechanics relating to the strain life approach. Under given loading conditions the fatigue damage in an un-notched specimen is comparable to that of a notched specimen. Similitude suggests that the component fatigue life of the two objects will also be similar.

## An example

Consider a submarine modeled at 1/40th scale. The application operates in sea water at 0.5 °C, moving at 5 m/s. The model will be tested in fresh water at 20 °C. Find the power required for the submarine to operate at the stated speed.
A free body diagram is constructed and the relevant relationships of force and velocity are formulated using techniques from continuum mechanics. The variables which describe the system are:

This example has five independent variables and three fundamental units. The fundamental units are: meter, kilogram, second.
Invoking the Buckingham π theorem shows that the system can be described with two dimensionless numbers and one independent variable.
Dimensional analysis is used to rearrange the units to form the Reynolds number (
  
    
      
        
          R
          
            e
          
        
      
    
    

$$ R_{e} $$

  
) and pressure coefficient (
  
    
      
        
          C
          
            p
          
        
      
    
    

$$ C_{p} $$

  
). These dimensionless numbers account for all the variables listed above except F, which will be the test measurement. Since the dimensionless parameters will stay constant for both the test and the real application, they will be used to formulate scaling laws for the test.
Scaling laws:

  
    
      
        
          
            
              
              
                
                  R
                  
                    e
                  
                
                =
                
                  (
                  
                    
                      
                        ρ
                        V
                        L
                      
                      μ
                    
                  
                  )
                
              
              
                ⟶
              
              
                
                  V
                  
                    model
                  
                
                =
                
                  V
                  
                    application
                  
                
                ×
                
                  (
                  
                    
                      
                        ρ
                        
                          a
                        
                      
                      
                        ρ
                        
                          m
                        
                      
                    
                  
                  )
                
                ×
                
                  (
                  
                    
                      
                        L
                        
                          a
                        
                      
                      
                        L
                        
                          m
                        
                      
                    
                  
                  )
                
                ×
                
                  (
                  
                    
                      
                        μ
                        
                          m
                        
                      
                      
                        μ
                        
                          a
                        
                      
                    
                  
                  )
                
              
            
            
              
              
                
                  C
                  
                    p
                  
                
                =
                
                  (
                  
                    
                      
                        2
                        Δ
                        p
                      
                      
                        ρ
                        
                          V
                          
                            2
                          
                        
                      
                    
                  
                  )
                
                ,
                F
                =
                Δ
                p
                
                  L
                  
                    2
                  
                
              
              
                ⟶
              
              
                
                  F
                  
                    application
                  
                
                =
                
                  F
                  
                    model
                  
                
                ×
                
                  (
                  
                    
                      
                        ρ
                        
                          a
                        
                      
                      
                        ρ
                        
                          m
                        
                      
                    
                  
                  )
                
                ×
                
                  
                    (
                    
                      
                        
                          V
                          
                            a
                          
                        
                        
                          V
                          
                            m
                          
                        
                      
                    
                    )
                  
                  
                    2
                  
                
                ×
                
                  
                    (
                    
                      
                        
                          L
                          
                            a
                          
                        
                        
                          L
                          
                            m
                          
                        
                      
                    
                    )
                  
                  
                    2
                  
                
                .
              
            
          
        
      
    
    

$$ {\begin{aligned}&R_{e}=\left({\frac {\rho VL}{\mu }}\right)&\longrightarrow &V_{\text{model}}=V_{\text{application}}\times \left({\frac {\rho _{a}}{\rho _{m}}}\right)\times \left({\frac {L_{a}}{L_{m}}}\right)\times \left({\frac {\mu _{m}}{\mu _{a}}}\right)\\&C_{p}=\left({\frac {2\Delta p}{\rho V^{2}}}\right),F=\Delta pL^{2}&\longrightarrow &F_{\text{application}}=F_{\text{model}}\times \left({\frac {\rho _{a}}{\rho _{m}}}\right)\times \left({\frac {V_{a}}{V_{m}}}\right)^{2}\times \left({\frac {L_{a}}{L_{m}}}\right)^{2}.\end{aligned}} $$

  

The pressure (
  
    
      
        p
      
    
    

$$ p $$

  
) is not one of the five variables, but the force (
  
    
      
        F
      
    
    

$$ F $$

  
) is. The pressure difference (Δ
  
    
      
        p
      
    
    

$$ p $$

  
) has thus been replaced with (
  
    
      
        F
        
          /
        
        
          L
          
            2
          
        
      
    
    

$$ F/L^{2} $$

  
) in the pressure coefficient. This gives a required test velocity of:

  
    
      
        
          V
          
            model
          
        
        =
        
          V
          
            application
          
        
        ×
        21.9
      
    
    

$$ V_{\text{model}}=V_{\text{application}}\times 21.9 $$

  
 .
A model test is then conducted at that velocity and the force that is measured in the model (
  
    
      
        
          F
          
            m
            o
            d
            e
            l
          
        
      
    
    

$$ F_{model} $$

  
) is then scaled to find the force that can be expected for the real application (
  
    
      
        
          F
          
            a
            p
            p
            l
            i
            c
            a
            t
            i
            o
            n
          
        
      
    
    

$$ F_{application} $$

  
):

  
    
      
        
          F
          
            application
          
        
        =
        
          F
          
            model
          
        
        ×
        3.44
      
    
    

$$ F_{\text{application}}=F_{\text{model}}\times 3.44 $$

  

The power 
  
    
      
        P
      
    
    

$$ P $$

  
 in watts required by the submarine is then:

  
    
      
        P
        [
        
          W
        
        ]
        =
        
          F
          
            application
          
        
        ×
        
          V
          
            application
          
        
        =
        
          F
          
            model
          
        
        [
        
          N
        
        ]
        ×
        17.2
         
        
          m
          
            /
          
          s
        
      
    
    

$$ P[\mathrm {W} ]=F_{\text{application}}\times V_{\text{application}}=F_{\text{model}}[\mathrm {N} ]\times 17.2\ \mathrm {m/s} $$

  

Note that even though the model is scaled smaller, the water velocity needs to be increased for testing. This remarkable result shows how similitude in nature is often counterintuitive.

## Typical applications

### Fluid mechanics

Similitude has been well documented for a large number of engineering problems and is the basis of many textbook formulas and dimensionless quantities. These formulas and quantities are easy to use without having to repeat the laborious task of dimensional analysis and formula derivation. Simplification of the formulas (by neglecting some aspects of similitude) is common, and needs to be reviewed by the engineer for each application.
Similitude can be used to predict the performance of a new design based on data from an existing, similar design. In this case, the model is the existing design. Another use of similitude and models is in validation of computer simulations with the ultimate goal of eliminating the need for physical models altogether.
Another application of similitude is to replace the operating fluid with a different test fluid. Wind tunnels, for example, have trouble with air liquefying in certain conditions so helium is sometimes used. Other applications may operate in dangerous or expensive fluids so the testing is carried out in a more convenient substitute.
Some common applications of similitude and associated dimensionless numbers;

### Solid mechanics: structural similitude

Similitude analysis is a powerful engineering tool to design the scaled-down structures. Although both dimensional analysis and direct use of the governing equations may be used to derive the scaling laws, the latter results in more specific scaling laws. The design of the scaled-down composite structures can be successfully carried out using the complete and partial similarities. In the design of the scaled structures under complete similarity condition, all the derived scaling laws must be satisfied between the model and prototype which yields the perfect similarity between the two scales. However, the design of a scaled-down structure which is perfectly similar to its prototype has the practical limitation, especially for laminated structures. Relaxing some of the scaling laws may eliminate the limitation of the design under complete similarity condition and yields the scaled models that are partially similar to their prototype. However, the design of the scaled structures under the partial similarity condition must follow a deliberate methodology to ensure the accuracy of the scaled structure in predicting the structural response of the prototype. Scaled models can be designed to replicate the dynamic characteristic (e.g. frequencies, mode shapes and damping ratios) of their full-scale counterparts. However, appropriate response scaling laws need to be derived to predict the dynamic response of the full-scale prototype from the experimental data of the scaled model.