# Orbit (control theory)

The notion of orbit of a control system used in mathematical control theory is a particular case of the notion of orbit in group theory.

## Definition

Let 

  
    
      
        
           
        
        
          
            
              q
              ˙
            
          
        
        =
        f
        (
        q
        ,
        u
        )
      
    
    

$$ {\ }{\dot {q}}=f(q,u) $$

  
 
be a 
  
    
      
         
        
          
            
              C
            
          
          
            ∞
          
        
      
    
    

$$ \ {\mathcal {C}}^{\infty } $$

  
 control system, where 

  
    
      
        
           
          q
        
      
    
    

$$ {\ q} $$

  
 
belongs to a finite-dimensional manifold 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
 and 
  
    
      
         
        u
      
    
    

$$ \ u $$

  
 belongs to a control set 
  
    
      
         
        U
      
    
    

$$ \ U $$

  
. Consider the family 
  
    
      
        
          
            F
          
        
        =
        {
        f
        (
        ⋅
        ,
        u
        )
        ∣
        u
        ∈
        U
        }
      
    
    

$$ {\mathcal {F}}=\{f(\cdot ,u)\mid u\in U\} $$

  

and assume that every vector field in 
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 is complete.
For every 
  
    
      
        f
        ∈
        
          
            F
          
        
      
    
    

$$ f\in {\mathcal {F}} $$

  
 and every real 
  
    
      
         
        t
      
    
    

$$ \ t $$

  
, denote by 
  
    
      
         
        
          e
          
            t
            f
          
        
      
    
    

$$ \ e^{tf} $$

  
 the flow of 
  
    
      
         
        f
      
    
    

$$ \ f $$

  
 at time 
  
    
      
         
        t
      
    
    

$$ \ t $$

  
.
The orbit of the control system 
  
    
      
        
           
        
        
          
            
              q
              ˙
            
          
        
        =
        f
        (
        q
        ,
        u
        )
      
    
    

$$ {\ }{\dot {q}}=f(q,u) $$

  
 through a point 
  
    
      
        
          q
          
            0
          
        
        ∈
        M
      
    
    

$$ q_{0}\in M $$

  
 is the subset 
  
    
      
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
      
    
    

$$ {\mathcal {O}}_{q_{0}} $$

  
 of 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
 defined by

  
    
      
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
        =
        {
        
          e
          
            
              t
              
                k
              
            
            
              f
              
                k
              
            
          
        
        ∘
        
          e
          
            
              t
              
                k
                −
                1
              
            
            
              f
              
                k
                −
                1
              
            
          
        
        ∘
        ⋯
        ∘
        
          e
          
            
              t
              
                1
              
            
            
              f
              
                1
              
            
          
        
        (
        
          q
          
            0
          
        
        )
        ∣
        k
        ∈
        
          N
        
        ,
         
        
          t
          
            1
          
        
        ,
        …
        ,
        
          t
          
            k
          
        
        ∈
        
          R
        
        ,
         
        
          f
          
            1
          
        
        ,
        …
        ,
        
          f
          
            k
          
        
        ∈
        
          
            F
          
        
        }
        .
      
    
    

$$ {\mathcal {O}}_{q_{0}}=\{e^{t_{k}f_{k}}\circ e^{t_{k-1}f_{k-1}}\circ \cdots \circ e^{t_{1}f_{1}}(q_{0})\mid k\in \mathbb {N} ,\ t_{1},\dots ,t_{k}\in \mathbb {R} ,\ f_{1},\dots ,f_{k}\in {\mathcal {F}}\}. $$

  

Remarks
The difference between orbits and attainable sets is that, whereas for attainable sets only forward-in-time motions are allowed, both forward and backward motions are permitted for orbits. 
In particular, if the family 
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 is symmetric (i.e., 
  
    
      
        f
        ∈
        
          
            F
          
        
      
    
    

$$ f\in {\mathcal {F}} $$

  
 if and only if 
  
    
      
        −
        f
        ∈
        
          
            F
          
        
      
    
    

$$ -f\in {\mathcal {F}} $$

  
), then orbits and attainable sets coincide.
The hypothesis that every vector field of 
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 is complete simplifies the notations but can be dropped. In this case one has to replace flows of vector fields by local versions of them.

## Orbit theorem (Nagano–Sussmann)

Each orbit 
  
    
      
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
      
    
    

$$ {\mathcal {O}}_{q_{0}} $$

  
 is an immersed submanifold of 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
.
The tangent space to the orbit

  
    
      
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
      
    
    

$$ {\mathcal {O}}_{q_{0}} $$

  
 at a point 
  
    
      
         
        q
      
    
    

$$ \ q $$

  
 is the linear subspace of 
  
    
      
         
        
          T
          
            q
          
        
        M
      
    
    

$$ \ T_{q}M $$

  
 spanned by 
the vectors 
  
    
      
         
        
          P
          
            ∗
          
        
        f
        (
        q
        )
      
    
    

$$ \ P_{*}f(q) $$

  
 where 
  
    
      
         
        
          P
          
            ∗
          
        
        f
      
    
    

$$ \ P_{*}f $$

  
 denotes the pushforward of 
  
    
      
         
        f
      
    
    

$$ \ f $$

  
 by  
  
    
      
         
        P
      
    
    

$$ \ P $$

  
, 
  
    
      
         
        f
      
    
    

$$ \ f $$

  
 belongs to  
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 and 
  
    
      
         
        P
      
    
    

$$ \ P $$

  
 is a diffeomorphism of 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
 of the form  
  
    
      
        
          e
          
            
              t
              
                k
              
            
            
              f
              
                k
              
            
          
        
        ∘
        ⋯
        ∘
        
          e
          
            
              t
              
                1
              
            
            
              f
              
                1
              
            
          
        
      
    
    

$$ e^{t_{k}f_{k}}\circ \cdots \circ e^{t_{1}f_{1}} $$

  
 with 
  
    
      
        k
        ∈
        
          N
        
        ,
         
        
          t
          
            1
          
        
        ,
        …
        ,
        
          t
          
            k
          
        
        ∈
        
          R
        
      
    
    

$$ k\in \mathbb {N} ,\ t_{1},\dots ,t_{k}\in \mathbb {R} $$

  
 and 
  
    
      
        
          f
          
            1
          
        
        ,
        …
        ,
        
          f
          
            k
          
        
        ∈
        
          
            F
          
        
      
    
    

$$ f_{1},\dots ,f_{k}\in {\mathcal {F}} $$

  
.
If all the vector fields of the family 
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 are analytic, then 
  
    
      
         
        
          T
          
            q
          
        
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
        =
        
          
            L
            i
            e
          
          
            q
          
        
        
        
          
            F
          
        
      
    
    

$$ \ T_{q}{\mathcal {O}}_{q_{0}}=\mathrm {Lie} _{q}\,{\mathcal {F}} $$

  
 where 
  
    
      
        
          
            L
            i
            e
          
          
            q
          
        
        
        
          
            F
          
        
      
    
    

$$ \mathrm {Lie} _{q}\,{\mathcal {F}} $$

  
 is the evaluation at 
  
    
      
         
        q
      
    
    

$$ \ q $$

  
 of the Lie algebra generated by 
  
    
      
        
          
            F
          
        
      
    
    

$$ {\mathcal {F}} $$

  
 with respect to the Lie bracket of vector fields.
Otherwise, the inclusion 
  
    
      
        
          
            L
            i
            e
          
          
            q
          
        
        
        
          
            F
          
        
        ⊂
        
          T
          
            q
          
        
        
          
            
              O
            
          
          
            
              q
              
                0
              
            
          
        
      
    
    

$$ \mathrm {Lie} _{q}\,{\mathcal {F}}\subset T_{q}{\mathcal {O}}_{q_{0}} $$

  
 holds true.

## Corollary (Rashevsky–Chow theorem)

If 
  
    
      
        
          
            L
            i
            e
          
          
            q
          
        
        
        
          
            F
          
        
        =
        
          T
          
            q
          
        
        M
      
    
    

$$ \mathrm {Lie} _{q}\,{\mathcal {F}}=T_{q}M $$

  
 for every 
  
    
      
         
        q
        ∈
        M
      
    
    

$$ \ q\in M $$

  
 and if 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
 is connected, then each orbit is equal to the whole manifold 
  
    
      
         
        M
      
    
    

$$ \ M $$

  
.
