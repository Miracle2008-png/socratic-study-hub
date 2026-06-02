# Beltrami vector field

In vector calculus, a Beltrami vector field, named after Eugenio Beltrami, is a vector field in three dimensions that is parallel to its own curl.  That is, F is a Beltrami vector field provided that

## Beltrami fields and fluid mechanics
Beltrami fields with a constant proportionality factor are a distinct category of vector fields that act as eigenfunctions of the curl operator. In essence, they are functions that map points in a three-dimensional space, either in 
            R
            3
    {\displaystyle \mathbb {R} ^{3}}
 (Euclidean space) or on a flat torus 
            T
            3
    {\displaystyle \mathbb {T} ^{3}}
, to other points in the same space. Mathematically, this can be represented as:

        u

        :
            R
            3
        →
            R
            3
    {\displaystyle u:\mathbb {R} ^{3}\to \mathbb {R} ^{3}}
 (for Euclidean space) or 
        u

        :
            T
            3
        →
            T
            3
    {\displaystyle u:\mathbb {T} ^{3}\to \mathbb {T} ^{3}}
 (for the flat torus).

These vector fields are unique due to the special relationship between the curl of the vector field 
        u
    {\displaystyle u}
 and the field itself. This relationship can be expressed using the following equation:

        ∇

        ×

        u

        =

        λ

        u
    {\displaystyle \nabla \times u=\lambda u}

In this equation, 
        λ
    {\displaystyle \lambda }
 is a non-zero constant, which indicates that the curl of the vector field 
        u
    {\displaystyle u}
 is proportional to the field itself.

Beltrami fields are relevant in fluid dynamics, as they offer a classical family of stationary solutions to the Euler equation in three dimensions. The Euler equations describe the motion of an ideal, incompressible fluid and can be written as a system of two equations:

            {
                          ∂

                          u
                          ∂

                          t
                  +

                  (

                  u

                  ⋅

                  ∇

                  )

                  u

                  =

                  −

                  ∇

                  p

                  ,
                  ∇

                  ⋅

                  u

                  =

                  0.
    {\displaystyle {\begin{cases}{\dfrac {\partial u}{\partial t}}+(u\cdot \nabla )u=-\nabla p,\\\nabla \cdot u=0.\end{cases}}}

For stationary flows, where the velocity field 
        u
    {\displaystyle u}
 does not change with time, i.e. 
              ∂

              u
              ∂

              t
        =

        0
    {\displaystyle {\frac {\partial u}{\partial t}}=0}
, we can introduce the Bernoulli function, 
        B

        :=

        p

        +
            1

            2
        ‖

        u
          ‖
            2
    {\displaystyle B:=p+{\frac {1}{2}}\lVert u\rVert ^{2}}
, and the vorticity, 
        ω

        :=

        ∇

        ×

        u
    {\displaystyle \omega :=\nabla \times u}
. These new variables simplify the Euler equations into the following system:

            {
                  u

                  ×

                  ω

                  =

                  ∇

                  B

                  ,
                  ∇

                  ⋅

                  u

                  =

                  0.
    {\displaystyle {\begin{cases}u\times \omega =\nabla B,\\\nabla \cdot u=0.\end{cases}}}

The simplification is possible due to a vector identity, which relates the convective term 
        (

        u

        ⋅

        ∇

        )

        u
    {\displaystyle (u\cdot \nabla )u}
 to the gradient of the kinetic energy and the cross product of the velocity field and its curl:

        (

        u

        ⋅

        ∇

        )

        u

        =
            1

            2
        ∇

        ‖

        u
          ‖
            2
        −

        u

        ×

        (

        ∇

        ×

        u

        )
    {\displaystyle (u\cdot \nabla )u={\frac {1}{2}}\nabla \lVert u\rVert ^{2}-u\times (\nabla \times u)}

When the Bernoulli function 
        B
    {\displaystyle B}
 is constant, Beltrami fields become valid solutions to the simplified Euler equations. Note that we do not need the proportionality factor to be constant for the proof to work.

### Beltrami fields and complexity in fluid mechanics
Beltrami fields have a close connection to Lagrangian turbulence, as shown by V.I. Arnold's work on stationary Euler flows.

#### Arnold's "conjecture"
Arnold's quote from his aforementioned work highlights the probable complicated topology of the streamlines in Beltrami fields, drawing parallels with celestial mechanics:

Il est probable que les écoulements tels que rot 
        ν

        =

        λ

        ν
    {\displaystyle \nu =\lambda \nu }
, 
        λ

        =

        C

        t

        e
    {\displaystyle \lambda =Cte}
, ont des lignes de courant à la topologie compliquée. De telles complications interviennent en mécanique céleste. La topologie des lignes de courant des écoulements stationnaires des fluides visqueux peut être semblable à celle de mécanique céleste.

#### Proposed solutions
A recent paper demonstrates that Beltrami fields exhibit chaotic regions and invariant tori of complex topologies with high probability. The analysis includes asymptotic bounds for the number of horseshoes, zeros, and knotted invariant tori, alongside periodic trajectories in Gaussian random Beltrami fields.
