# Conversion (chemistry)

Conversion and its related terms yield and selectivity are important terms in chemical reaction engineering. They are described as ratios of how much of a reactant has reacted (X — conversion, normally between zero and one), how much of a desired product was formed (Y — yield, normally also between zero and one) and how much desired product was formed in ratio to the undesired product(s) (S — selectivity).
There are conflicting definitions in the literature for selectivity and yield, so each author's intended definition should be verified. 
Conversion can be defined for (semi-)batch and continuous reactors and as instantaneous and overall conversion.

## Assumptions

The following assumptions are made:

The following chemical reaction takes place:

  
    
      
        
          ∑
          
            i
            =
            1
          
          
            n
          
        
        
          ν
          
            i
          
        
        
          A
          
            i
          
        
        =
        
          ∑
          
            j
            =
            1
          
          
            m
          
        
        
          μ
          
            j
          
        
        
          B
          
            j
          
        
      
    
    

$$ \sum _{i=1}^{n}\nu _{i}A_{i}=\sum _{j=1}^{m}\mu _{j}B_{j} $$

  
,
where 
  
    
      
        
          ν
          
            i
          
        
      
    
    

$$ \nu _{i} $$

  
 and 
  
    
      
        
          μ
          
            j
          
        
      
    
    

$$ \mu _{j} $$

  
 are the stoichiometric coefficients. For multiple parallel reactions, the definitions can also be applied, either per reaction or using the limiting reaction.

Batch reaction assumes all reactants are added at the beginning.
Semi-Batch reaction assumes some reactants are added at the beginning and the rest fed during the batch.
Continuous reaction assumes reactants are fed and products leave the reactor continuously and in steady state.

## Conversion

Conversion can be separated into instantaneous conversion and overall conversion. For continuous processes the two are the same, for batch and semi-batch there are important differences. Furthermore, for multiple reactants, conversion can be defined overall or per reactant.

### Instantaneous conversion

#### Semi-batch

In this setting there are different definitions. One definition regards the instantaneous conversion as the ratio of the instantaneously converted amount to
the amount fed at any point in time:

  
    
      
        
          X
          
            i
            ,
            
              inst
            
          
        
        =
        
          
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                i
                ,
                
                  react
                
              
            
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                i
                ,
                
                  in
                
              
            
          
        
      
    
    

$$ X_{i,{\text{inst}}}={\frac {{\dot {n}}_{i,{\text{react}}}}{{\dot {n}}_{i,{\text{in}}}}} $$

  
.
with 
  
    
      
        
          
            
              
                n
                ˙
              
            
          
          
            i
          
        
      
    
    

$$ {\dot {n}}_{i} $$

  
 as the change of moles with time of species i.
This ratio can become larger than 1. It can be used to indicate whether reservoirs are built
up and it is ideally close to 1. When the feed stops, its value is not defined.
In semi-batch polymerisation, the instantaneous conversion is defined as the total mass of polymer divided by the total mass of monomer fed:

  
    
      
        
          X
          
            poly
          
        
        =
        
          
            
              m
              
                Pol
              
            
            
              
                ∑
                
                  i
                
              
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      m
                      ˙
                    
                  
                
                
                  i
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
            
          
        
      
    
    

$$ X_{\text{poly}}={\frac {m_{\text{Pol}}}{\sum _{i}\int _{0}^{t}{\dot {m}}_{i,{\text{in}}}(\tau )d\tau }} $$

  
.

### Overall conversion

#### Batch (This is the generally stated form)

  
    
      
        
          X
          
            i
          
        
        =
        
          
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
              −
              
                n
                
                  i
                
              
              (
              t
              )
            
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
            
          
        
        =
        1
        −
        
          
            
              
                n
                
                  i
                
              
              (
              t
              )
            
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
            
          
        
      
    
    

$$ X_{i}={\frac {n_{i}(t=0)-n_{i}(t)}{n_{i}(t=0)}}=1-{\frac {n_{i}(t)}{n_{i}(t=0)}} $$

  

#### Semi-batch

Total conversion of the formulation:

  
    
      
        
          X
          
            i
          
        
        =
        
          
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
              −
              
                n
                
                  i
                
              
              (
              t
              )
            
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  
                    t
                    
                      end
                    
                  
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
            
          
        
      
    
    

$$ X_{i}={\frac {n_{i}(t=0)+\int _{0}^{t}{\dot {n}}_{i,{\text{in}}}(\tau )d\tau -n_{i}(t)}{n_{i}(t=0)+\int _{0}^{t_{\text{end}}}{\dot {n}}_{i,{\text{in}}}(\tau )d\tau }} $$

  

Total conversion of the fed reactants:

  
    
      
        
          X
          
            i
          
        
        =
        
          
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
              −
              
                n
                
                  i
                
              
              (
              t
              )
            
            
              
                n
                
                  i
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
            
          
        
      
    
    

$$ X_{i}={\frac {n_{i}(t=0)+\int _{0}^{t}{\dot {n}}_{i,{\text{in}}}(\tau )d\tau -n_{i}(t)}{n_{i}(t=0)+\int _{0}^{t}{\dot {n}}_{i,{\text{in}}}(\tau )d\tau }} $$

  

#### Continuous (This is the generally stated form)

  
    
      
        
          X
          
            i
          
        
        =
        
          
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  i
                  n
                
              
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  i
                  ,
                  o
                  u
                  t
                
              
            
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                i
                ,
                i
                n
              
            
          
        
        =
        1
        −
        
          
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                i
                ,
                o
                u
                t
              
            
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                i
                ,
                i
                n
              
            
          
        
      
    
    

$$ X_{i}={\frac {{\dot {n}}_{i,in}-{\dot {n}}_{i,out}}{{\dot {n}}_{i,in}}}=1-{\frac {{\dot {n}}_{i,out}}{{\dot {n}}_{i,in}}} $$

  

## Yield

Yield in general refers to the amount of a specific product (p in 1..m) formed per mole of reactant consumed (Definition 1). However, it is also defined as the amount of product produced per amount of product that could be produced (Definition 2). If not all of the limiting reactant has reacted, the two definitions contradict each other. Combining those two also means that stoichiometry needs to be taken into account and that yield has to be based on the limiting reactant (k in 1..n):

### Continuous

  
    
      
        
          Y
          
            p
          
        
        =
        
          
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    out
                  
                
              
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    in
                  
                
              
            
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  k
                  ,
                  
                    in
                  
                
              
              
                
                  
                    
                      −
                      
                        n
                        
                          k
                          ,
                          
                            out
                          
                        
                      
                    
                    ⏟
                  
                
                
                  only for Definition 1
                
              
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
      
    
    

$$ Y_{p}={\frac {{\dot {n}}_{p,{\text{out}}}-{\dot {n}}_{p,{\text{in}}}}{{\dot {n}}_{k,{\text{in}}}\underbrace {-n_{k,{\text{out}}}} _{\text{only for Definition 1}}}}\left|{\frac {\mu _{k}}{\nu _{p}}}\right| $$

  

The version normally found in the literature:

  
    
      
        
          Y
          
            p
          
        
        =
        
          
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    out
                  
                
              
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    in
                  
                
              
            
            
              
                
                  
                    n
                    ˙
                  
                
              
              
                k
                ,
                
                  in
                
              
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
      
    
    

$$ Y_{p}={\frac {{\dot {n}}_{p,{\text{out}}}-{\dot {n}}_{p,{\text{in}}}}{{\dot {n}}_{k,{\text{in}}}}}\left|{\frac {\mu _{k}}{\nu _{p}}}\right| $$

  

## Selectivity

Instantaneous selectivity is the production rate of one component per production rate of another component.
For overall selectivity the same problem of the conflicting definitions exists. Generally, it is defined as the number of moles of desired product per the number of moles of undesired product (Definition 1). However, the definitions of the total amount of reactant to form a product per total amount of reactant consumed is used (Definition 2) as well as the total amount of desired product formed per total amount of limiting reactant consumed (Definition 3). This last definition is the same as definition 1 for yield.

### Batch or semi-batch

The version normally found in the literature:

  
    
      
        
          S
          
            p
          
        
        =
        
          
            
              
                n
                
                  p
                
              
              (
              t
              =
              0
              )
              −
              
                n
                
                  p
                
              
              (
              t
              )
            
            
              
                n
                
                  k
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  k
                  ,
                  
                    in
                  
                
              
              (
              τ
              )
              d
              τ
              −
              
                n
                
                  k
                
              
              (
              t
              )
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
      
    
    

$$ S_{p}={\frac {n_{p}(t=0)-n_{p}(t)}{n_{k}(t=0)+\int _{0}^{t}{\dot {n}}_{k,{\text{in}}}(\tau )d\tau -n_{k}(t)}}\left|{\frac {\mu _{k}}{\nu _{p}}}\right| $$

  

### Continuous

The version normally found in the literature:

  
    
      
        
          S
          
            p
          
        
        =
        
          
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    out
                  
                
              
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  p
                  ,
                  
                    in
                  
                
              
            
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  k
                  ,
                  
                    in
                  
                
              
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  k
                  ,
                  
                    out
                  
                
              
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
      
    
    

$$ S_{p}={\frac {{\dot {n}}_{p,{\text{out}}}-{\dot {n}}_{p,{\text{in}}}}{{\dot {n}}_{k,{\text{in}}}-{\dot {n}}_{k,{\text{out}}}}}\left|{\frac {\mu _{k}}{\nu _{p}}}\right| $$

  

## Combination

For batch and continuous reactors (semi-batch needs to be checked more carefully) and the definitions marked as the ones generally found in the literature, the three concepts can be combined:

  
    
      
        
          Y
          
            p
          
        
        =
        
          X
          
            i
          
        
        ⋅
        
          S
          
            p
          
        
      
    
    

$$ Y_{p}=X_{i}\cdot S_{p} $$

  

For a process with the only reaction

  
    
      
        
          A
          ⟶
          B
        
      
    
    

$$ {\ce {A -> B}} $$

  

this mean that S=1 and Y=X.

## Abstract example

For the following abstract example and the amounts depicted on the right, the following calculation can be performed with the above definitions, either in batch or a continuous reactor.

  
    
      
        
          A
          ⟶
          B
        
      
    
    

$$ {\ce {A -> B}} $$

  

  
    
      
        
          A
          ⟶
          C
        
      
    
    

$$ {\ce {A -> C}} $$

  

B is the desired product.
There are 100 mol of A at the beginning or at the entry to the continuous reactor and 10 mol A, 72 mol B and 18 mol C at the end of the reaction or the exit of the continuous reactor. The three properties are found to be:

  
    
      
        
          X
          
            
              A
            
          
        
        =
        
          
            
              
                n
                
                  
                    A
                  
                
              
              (
              t
              =
              0
              )
              −
              
                n
                
                  A
                
              
              (
              t
              )
            
            
              
                n
                
                  
                    A
                  
                
              
              (
              t
              =
              0
              )
            
          
        
        =
        1
        −
        
          
            
              
                n
                
                  
                    A
                  
                
              
              (
              t
              )
            
            
              
                n
                
                  
                    A
                  
                
              
              (
              t
              =
              0
              )
            
          
        
        =
        
          
            
              100
              −
              10
            
            100
          
        
        =
        0.9
        =
        90
        %
      
    
    

$$ X_{{\ce {A}}}={\frac {n_{{\ce {A}}}(t=0)-n_{A}(t)}{n_{{\ce {A}}}(t=0)}}=1-{\frac {n_{{\ce {A}}}(t)}{n_{{\ce {A}}}(t=0)}}={\frac {100-10}{100}}=0.9=90\% $$

  

  
    
      
        
          Y
          
            
              B
            
          
        
        =
        
          
            
              
                n
                
                  
                    B
                  
                
              
              (
              t
              )
              −
              
                n
                
                  
                    B
                  
                
              
              (
              t
              =
              0
              )
            
            
              
                n
                
                  
                    A
                  
                
              
              (
              t
              =
              0
              )
              +
              
                ∫
                
                  0
                
                
                  t
                
              
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  
                    A
                    ,
                    
                      in
                    
                  
                
              
              (
              τ
              )
              d
              τ
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
        =
        
          
            
              72
              −
              0
            
            
              100
              +
              0
            
          
        
        ⋅
        
          
            1
            1
          
        
        =
        0.72
        =
        72
        %
      
    
    

$$ Y_{{\ce {B}}}={\frac {n_{{\ce {B}}}(t)-n_{{\ce {B}}}(t=0)}{n_{{\ce {A}}}(t=0)+\int _{0}^{t}{\dot {n}}_{{\ce {A,{in}}}}(\tau )d\tau }}\left|{\frac {\mu _{k}}{\nu _{p}}}\right|={\frac {72-0}{100+0}}\cdot {\frac {1}{1}}=0.72=72\% $$

  

  
    
      
        
          S
          
            
              B
            
          
        
        =
        
          
            
              
                
                  n
                
                
                  
                    B
                  
                
              
              (
              t
              =
              0
              )
              −
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  
                    B
                  
                
              
              (
              t
              )
            
            
              
                
                  
                    
                      n
                      ˙
                    
                  
                
                
                  
                    A
                  
                
              
              (
              t
              =
              0
              )
              −
              
                n
                
                  
                    A
                  
                
              
              (
              t
              )
            
          
        
        
          |
          
            
              
                μ
                
                  k
                
              
              
                ν
                
                  p
                
              
            
          
          |
        
        =
        
          
            
              0
              −
              72
            
            
              100
              −
              10
            
          
        
        ⋅
        
          
            1
            1
          
        
        =
        0.8
        =
        80
        %
      
    
    

$$ S_{{\ce {B}}}={\frac {{n}_{{\ce {B}}}(t=0)-{\dot {n}}_{{\ce {B}}}(t)}{{\dot {n}}_{{\ce {A}}}(t=0)-n_{{\ce {A}}}(t)}}\left|{\frac {\mu _{k}}{\nu _{p}}}\right|={\frac {0-72}{100-10}}\cdot {\frac {1}{1}}=0.8=80\% $$

  

The property 

  
    
      
        
          Y
          
            p
          
        
        =
        
          X
          
            i
          
        
        ⋅
        
          S
          
            p
          
        
      
    
    

$$ Y_{p}=X_{i}\cdot S_{p} $$

  

holds. In this reaction, 90% of substance A is converted (consumed), but only 80% of the 90% is converted to the desired substance B and 20% to undesired by-products C. So, conversion of A is 90%, selectivity for B 80% and yield of substance B 72%.

## Literature

Werner Kullbach: Mengenberechnungen in der Chemie. Verlag Chemie, Weinheim 1980, ISBN 3-527-25869-8.
Eberhard Aust, Burkhard Bittner: Stöchiometrie - Chemisches Rechnen, CICERO-Verlag, Pegnitz, 4. Auflage, 2011, ISBN 978-3-926292-47-6.
Uwe Hillebrand: Stöchiometrie, Eine Einführung in die Grundlagen mit Beispielen und Übungsaufgaben, 2. Aufl., Springer-Verlag, Berlin Heidelberg 2009, ISBN 978-3-642-00459-9.
