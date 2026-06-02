# Temperature dependence of viscosity

Viscosity depends strongly on temperature. In liquids it usually decreases with increasing temperature, whereas, in most gases, viscosity increases with increasing temperature. This article discusses several models of this dependence, ranging from rigorous first-principles calculations for monatomic gases, to empirical correlations for liquids.
Understanding the temperature dependence of viscosity is important for many applications, for instance engineering lubricants that perform well under varying temperature conditions (such as in a car engine), since the performance of a lubricant depends in part on its viscosity. Engineering problems of this type fall under the purview of tribology.
Here dynamic viscosity is denoted by 
  
    
      
        μ
      
    
    {\displaystyle \mu }
  
 and kinematic viscosity by 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
. The formulas given are valid only for an absolute temperature scale; therefore, unless stated otherwise temperatures are in kelvins.


## Physical causes
Viscosity in gases arises from molecules traversing layers of flow and transferring momentum between layers. This transfer of momentum can be thought of as a frictional force between layers of flow. Since the momentum transfer is caused by free motion of gas molecules between collisions, increasing thermal agitation of the molecules results in a larger viscosity. Hence, gaseous viscosity increases with temperature.
In liquids, viscous forces are caused by molecules exerting attractive forces on each other across layers of flow. Increasing temperature results in a decrease in viscosity because a larger temperature means particles have greater thermal energy and are more easily able to overcome the attractive forces binding them together. An everyday example of this viscosity decrease is cooking oil moving more fluidly in a hot  frying pan than in a cold one.


## Gases

The kinetic theory of gases allows accurate calculation of the temperature-variation of gaseous viscosity. The theoretical basis of the kinetic theory is given by the Boltzmann equation and Chapman–Enskog theory, which allow accurate statistical modeling of molecular trajectories. In particular, given a model for intermolecular interactions, one can calculate with high precision the viscosity of monatomic and other simple gases (for more complex gases, such as those composed of polar molecules, additional assumptions must be introduced which reduce the accuracy of the theory).
The viscosity predictions for four molecular models are discussed below. The predictions of the first three models (hard-sphere, power-law, and Sutherland) can be simply expressed in terms of elementary functions. The Lennard–Jones model predicts a more complicated 
  
    
      
        T
      
    
    {\displaystyle T}
  
-dependence, but is more accurate than the other three models and is widely used in engineering practice.


### Hard-sphere kinetic theory
If one models gas molecules as elastic hard spheres (with mass 
  
    
      
        m
      
    
    {\displaystyle m}
  
 and diameter 
  
    
      
        σ
      
    
    {\displaystyle \sigma }
  
), then elementary kinetic theory predicts that viscosity increases with the square root of absolute temperature 
  
    
      
        T
      
    
    {\displaystyle T}
  
:

  
    
      
        μ
        =
        1.016
        ⋅
        
          
            5
            
              16
              
                σ
                
                  2
                
              
            
          
        
        
          
            (
            
              
                
                  
                    k
                    
                      
                        B
                      
                    
                  
                  m
                  T
                
                π
              
            
            )
          
          
            1
            
              /
            
            2
          
        
      
    
    {\displaystyle \mu =1.016\cdot {\frac {5}{16\sigma ^{2}}}\left({\frac {k_{\rm {B}}mT}{\pi }}\right)^{1/2}}
  

where 
  
    
      
        
          k
          
            B
          
        
      
    
    {\displaystyle k_{\text{B}}}
  
 is the Boltzmann constant. While correctly predicting the increase of gaseous viscosity with temperature, the 
  
    
      
        
          T
          
            1
            
              /
            
            2
          
        
      
    
    {\displaystyle T^{1/2}}
  
 trend is not accurate; the viscosity of real gases increases more rapidly than this. Capturing the actual 
  
    
      
        T
      
    
    {\displaystyle T}
  
 dependence requires more realistic models of molecular interactions, in particular the inclusion of attractive interactions which are present in all real gases.


### Power-law force
A modest improvement over the hard-sphere model is a repulsive inverse power-law force, where the force between two molecules separated by distance 
  
    
      
        r
      
    
    {\displaystyle r}
  
 is proportional to 
  
    
      
        1
        
          /
        
        
          r
          
            ν
          
        
      
    
    {\displaystyle 1/r^{\nu }}
  
, where 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
 is an empirical parameter. This is not a realistic model for real-world gases (except possibly at high temperature), but provides a simple illustration of how changing intermolecular interactions affects the predicted temperature dependence of viscosity. In this case, kinetic theory predicts an increase in temperature as 
  
    
      
        
          T
          
            s
          
        
      
    
    {\displaystyle T^{s}}
  
, where 
  
    
      
        s
        =
        (
        1
        
          /
        
        2
        )
        +
        2
        
          /
        
        (
        ν
        −
        1
        )
      
    
    {\displaystyle s=(1/2)+2/(\nu -1)}
  
. More precisely, if 
  
    
      
        
          μ
          ′
        
      
    
    {\displaystyle \mu '}
  
 is the known viscosity at temperature 
  
    
      
        
          T
          ′
        
      
    
    {\displaystyle T'}
  
, then

  
    
      
        μ
        =
        
          μ
          ′
        
        (
        T
        
          /
        
        
          T
          ′
        
        
          )
          
            s
          
        
      
    
    {\displaystyle \mu =\mu '(T/T')^{s}}
  

Taking 
  
    
      
        ν
        →
        ∞
      
    
    {\displaystyle \nu \rightarrow \infty }
  
 recovers the hard-sphere result, 
  
    
      
        s
        =
        1
        
          /
        
        2
      
    
    {\displaystyle s=1/2}
  
. For finite 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
, corresponding to softer repulsion, 
  
    
      
        s
      
    
    {\displaystyle s}
  
 is greater than 
  
    
      
        1
        
          /
        
        2
      
    
    {\displaystyle 1/2}
  
, which results in faster increase of viscosity compared with the hard-sphere model. Fitting to experimental data for hydrogen and helium gives predictions for 
  
    
      
        s
      
    
    {\displaystyle s}
  
 and 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
 shown in the table. The model is modestly accurate for these two gases, but inaccurate for other gases.


### Sutherland model
Another simple model for gaseous viscosity is the Sutherland model, which adds weak intermolecular attractions to the hard-sphere model. If the attractions are small, they can be treated perturbatively, which leads to

  
    
      
        μ
        =
        
          
            5
            
              16
              
                σ
                
                  2
                
              
            
          
        
        
          
            (
            
              
                
                  
                    k
                    
                      B
                    
                  
                  m
                  T
                
                π
              
            
            )
          
          
            1
            
              /
            
            2
          
        
        ⋅
        
          
            (
            
              1
              +
              
                
                  S
                  T
                
              
            
            )
          
          
            −
            1
          
        
      
    
    {\displaystyle \mu ={\frac {5}{16\sigma ^{2}}}\left({\frac {k_{\text{B}}mT}{\pi }}\right)^{1/2}\cdot \left(1+{\frac {S}{T}}\right)^{-1}}
  

where 
  
    
      
        S
      
    
    {\displaystyle S}
  
, called the Sutherland constant, can be expressed in terms of the parameters of the intermolecular attractive force. Equivalently, if 
  
    
      
        
          μ
          ′
        
      
    
    {\displaystyle \mu '}
  
 is a known viscosity at temperature 
  
    
      
        
          T
          ′
        
      
    
    {\displaystyle T'}
  
, then

  
    
      
        μ
        =
        
          μ
          ′
        
        
          
            (
            
              
                T
                
                  T
                  ′
                
              
            
            )
          
          
            3
            
              /
            
            2
          
        
        
          
            
              
                T
                ′
              
              +
              S
            
            
              T
              +
              S
            
          
        
      
    
    {\displaystyle \mu =\mu '\left({\frac {T}{T'}}\right)^{3/2}{\frac {T'+S}{T+S}}}
  

Values of 
  
    
      
        S
      
    
    {\displaystyle S}
  
 obtained from fitting to experimental data are shown in the table below for several gases. The model is modestly accurate for a number of gases (nitrogen, oxygen, argon, air, and others), but inaccurate for other gases like hydrogen and helium. In general, it has been argued that the Sutherland model is actually a poor model of intermolecular interactions and useful only as a simple interpolation formula for a restricted set of gases over a restricted range of temperatures.


### Lennard-Jones
Under fairly general conditions on the molecular model, the kinetic theory prediction for 
  
    
      
        μ
      
    
    {\displaystyle \mu }
  
 can be written in the form

  
    
      
        μ
        =
        
          
            5
            
              16
              
                
                  π
                
              
            
          
        
        
          
            
              m
              
                k
                
                  B
                
              
              T
            
            
              
                σ
                
                  2
                
              
              Ω
              (
              T
              )
            
          
        
      
    
    {\displaystyle \mu ={\frac {5}{16{\sqrt {\pi }}}}{\frac {\sqrt {mk_{\text{B}}T}}{\sigma ^{2}\Omega (T)}}}
  

where 
  
    
      
        Ω
      
    
    {\displaystyle \Omega }
  
 is called the collision integral and is a function of temperature as well as the parameters of the intermolecular interaction. It is completely determined by the kinetic theory, being expressed in terms of integrals over collisional trajectories of pairs of molecules. In general, 
  
    
      
        Ω
      
    
    {\displaystyle \Omega }
  
 is a complicated function of both temperature and the molecular parameters; the power-law and Sutherland models are unusual in that 
  
    
      
        Ω
      
    
    {\displaystyle \Omega }
  
 can be expressed in terms of elementary functions.
The Lennard–Jones model assumes an intermolecular pair potential of the form

  
    
      
        V
        (
        r
        )
        =
        4
        ϵ
        
          [
          
            
              
                (
                
                  
                    σ
                    r
                  
                
                )
              
              
                12
              
            
            −
            
              
                (
                
                  
                    σ
                    r
                  
                
                )
              
              
                6
              
            
          
          ]
        
      
    
    {\displaystyle V(r)=4\epsilon \left[\left({\frac {\sigma }{r}}\right)^{12}-\left({\frac {\sigma }{r}}\right)^{6}\right]}
  

where 
  
    
      
        ϵ
      
    
    {\displaystyle \epsilon }
  
 and 
  
    
      
        σ
      
    
    {\displaystyle \sigma }
  
 are parameters and 
  
    
      
        r
      
    
    {\displaystyle r}
  
 is the distance separating the centers of mass of the molecules. As such, the model is designed for spherically symmetric molecules. Nevertheless, it is frequently used for non-spherically-symmetric molecules, provided these do not possess a large dipole moment.
The collisional integral 
  
    
      
        Ω
      
    
    {\displaystyle \Omega }
  
 for the Lennard-Jones model cannot be expressed exactly in terms of elementary functions. Nevertheless, it can be calculated numerically, and the agreement with experiment is good – not only for spherically symmetric molecules such as the noble gases, but also for many polyatomic gases as well. An approximate form of 
  
    
      
        Ω
      
    
    {\displaystyle \Omega }
  
 has also been suggested:

  
    
      
        Ω
        (
        T
        )
        =
        1.16145
        
          
            (
            
              T
              
                ∗
              
            
            )
          
          
            −
            0.14874
          
        
        +
        0.52487
        
          e
          
            −
            0.77320
            
              T
              
                ∗
              
            
          
        
        +
        2.16178
        
          e
          
            −
            2.43787
            
              T
              
                ∗
              
            
          
        
      
    
    {\displaystyle \Omega (T)=1.16145\left(T^{*}\right)^{-0.14874}+0.52487e^{-0.77320T^{*}}+2.16178e^{-2.43787T^{*}}}
  

where 
  
    
      
        
          T
          
            ∗
          
        
        ≡
        
          k
          
            B
          
        
        T
        
          /
        
        ϵ
      
    
    {\displaystyle T^{*}\equiv k_{\text{B}}T/\epsilon }
  
. This equation has an average deviation of only 0.064 percent in the range 
  
    
      
        0.3
        <
        
          T
          
            ∗
          
        
        <
        100
      
    
    {\displaystyle 0.3<T^{*}<100}
  
.
Values of 
  
    
      
        σ
      
    
    {\displaystyle \sigma }
  
 and 
  
    
      
        ϵ
      
    
    {\displaystyle \epsilon }
  
 estimated from experimental data are shown in the table below for several common gases.


## Liquids
In contrast with gases, there is no systematic microscopic theory for liquid viscosity. However, there are several empirical models which extrapolate a temperature dependence based on available experimental viscosities.


### Two-parameter exponential
A simple and widespread empirical correlation for liquid viscosity is a two-parameter exponential:

  
    
      
        μ
        =
        A
        
          e
          
            B
            
              /
            
            T
          
        
      
    
    {\displaystyle \mu =Ae^{B/T}}
  

This equation was first proposed in 1913, and is commonly known as the Andrade equation (named after British physicist Edward Andrade). It accurately describes many liquids over a range of temperatures. Its form can be motivated by modeling momentum transport at the molecular level as an activated rate process, although the physical assumptions underlying such models have been called into question.
The table below gives estimated values of 
  
    
      
        A
      
    
    {\displaystyle A}
  
 and 
  
    
      
        B
      
    
    {\displaystyle B}
  
 for representative liquids. Comprehensive tables of these parameters for hundreds of liquids can be found in the literature.


### Three- and four-parameter exponentials
One can also find tabulated exponentials with additional parameters, for example

  
    
      
        μ
        =
        A
        exp
        ⁡
        
          
            (
            
              
                B
                
                  T
                  −
                  C
                
              
            
            )
          
        
      
    
    {\displaystyle \mu =A\exp {\left({\frac {B}{T-C}}\right)}}
  

and

  
    
      
        μ
        =
        A
        exp
        ⁡
        
          
            (
            
              
                
                  B
                  T
                
              
              +
              C
              T
              +
              D
              
                T
                
                  2
                
              
            
            )
          
        
      
    
    {\displaystyle \mu =A\exp {\left({\frac {B}{T}}+CT+DT^{2}\right)}}
  

Representative values are given in the tables below.


### Models for kinematic viscosity
The effect of temperature on the kinematic viscosity 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
 has also been described by a number of empirical equations.
The Walther formula is typically written in the form

  
    
      
        
          log
          
            10
          
        
        ⁡
        (
        
          log
          
            10
          
        
        ⁡
        (
        ν
        +
        λ
        )
        )
        =
        A
        −
        B
        
        
          log
          
            10
          
        
        ⁡
        T
      
    
    {\displaystyle \log _{10}(\log _{10}(\nu +\lambda ))=A-B\,\log _{10}T}
  

where 
  
    
      
        λ
      
    
    {\displaystyle \lambda }
  
 is a shift constant, and 
  
    
      
        A
      
    
    {\displaystyle A}
  
 and 
  
    
      
        B
      
    
    {\displaystyle B}
  
 are empirical parameters.  In lubricant specifications, normally only two temperatures are specified, in which case a standard value of 
  
    
      
        λ
      
    
    {\displaystyle \lambda }
  
 = 0.7 is normally assumed.
The Wright model has the form

  
    
      
        
          log
          
            10
          
        
        ⁡
        (
        
          log
          
            10
          
        
        ⁡
        (
        ν
        +
        λ
        +
        f
        (
        ν
        )
        )
        )
        =
        A
        −
        B
        
        
          log
          
            10
          
        
        ⁡
        T
      
    
    {\displaystyle \log _{10}(\log _{10}(\nu +\lambda +f(\nu )))=A-B\,\log _{10}T}
  

where an additional function 
  
    
      
        f
        (
        v
        )
      
    
    {\displaystyle f(v)}
  
, often a polynomial fit to experimental data, has been added to the Walther formula.
The Seeton model is based on curve fitting the viscosity dependence of many liquids (refrigerants, hydrocarbons and lubricants) versus temperature and applies over a large temperature and viscosity range:

  
    
      
        ln
        ⁡
        
          (
          
            ln
            ⁡
            
              (
              
                ν
                +
                0.7
                +
                
                  e
                  
                    −
                    ν
                  
                
                
                  K
                  
                    0
                  
                
                
                  (
                  
                    ν
                    +
                    1.244067
                  
                  )
                
              
              )
            
          
          )
        
        =
        A
        −
        B
        ln
        ⁡
        T
      
    
    {\displaystyle \ln \left({\ln \left({\nu +0.7+e^{-\nu }K_{0}\left({\nu +1.244067}\right)}\right)}\right)=A-B\ln T}
  

where 
  
    
      
        T
      
    
    {\displaystyle T}
  
 is absolute temperature in kelvins, 
  
    
      
        ν
      
    
    {\displaystyle \nu }
  
 is the kinematic viscosity in centistokes, 
  
    
      
        
          K
          
            0
          
        
      
    
    {\displaystyle K_{0}}
  
 is the zero order modified Bessel function of the second kind, and 
  
    
      
        A
      
    
    {\displaystyle A}
  
 and 
  
    
      
        B
      
    
    {\displaystyle B}
  
 are empirical parameters specific to each liquid.
For liquid metal viscosity as a function of temperature, Seeton proposed:

  
    
      
        ln
        ⁡
        
          (
          
            ln
            ⁡
            
              (
              
                ν
                +
                0.7
                +
                
                  e
                  
                    −
                    ν
                  
                
                
                  K
                  
                    0
                  
                
                
                  (
                  
                    ν
                    +
                    1.244067
                  
                  )
                
              
              )
            
          
          )
        
        =
        A
        −
        
          
            B
            T
          
        
      
    
    {\displaystyle \ln \left({\ln \left({\nu +0.7+e^{-\nu }K_{0}\left({\nu +1.244067}\right)}\right)}\right)=A-{B \over T}}
  


### Temperature dependence of viscosity for molten salts
Modern approach for evaluating the temperature dependence of viscosity for molten salts is given by Douglas-Doremus-Ojovan (DDO) model of viscosity of glasses and melts.

