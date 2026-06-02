# Geodesic

In geometry, a geodesic () is a curve representing in some sense the locally shortest path (arc) between two points in a surface, or more generally in a Riemannian manifold. The term also has meaning in any  differentiable manifold with a connection. It is a generalization of the notion of a "straight line".

## Metric geometry

In metric geometry, a geodesic is a curve which is everywhere locally a distance minimizer. More precisely, a curve γ : I → M from an interval I of the reals to the metric space M is a geodesic if there is a constant v ≥ 0 such that for any t ∈ I there is a neighborhood J of t in I such that for any t1, t2 ∈ J we have

        d

        (

        γ

        (
          t
            1
        )

        ,

        γ

        (
          t
            2
        )

        )

        =

        v
          |
              t
                1
            −
              t
                2
          |
        .

$$ d(\gamma (t_{1}),\gamma (t_{2}))=v\left|t_{1}-t_{2}\right|. $$

This generalizes the notion of geodesic for Riemannian manifolds. However, in metric geometry the geodesic considered is often equipped with natural parameterization, i.e. in the above identity v = 1 and

        d

        (

        γ

        (
          t
            1
        )

        ,

        γ

        (
          t
            2
        )

        )

        =
          |
              t
                1
            −
              t
                2
          |
        .

$$ d(\gamma (t_{1}),\gamma (t_{2}))=\left|t_{1}-t_{2}\right|. $$

If the last equality is satisfied for all t1, t2 ∈ I, the geodesic is called a minimizing geodesic or shortest path.

In general, a metric space may have no geodesics, except constant curves. At the other extreme, any two points in a length metric space are joined by a minimizing sequence of rectifiable paths, although this minimizing sequence need not converge to a geodesic. The metric Hopf-Rinow theorem provides situations where a length space is automatically a geodesic space.

Common examples of geodesic metric spaces that are often not manifolds include metric graphs, (locally compact) metric polyhedral complexes, infinite-dimensional pre-Hilbert spaces, and real trees.

## Riemannian geometry

In a Riemannian manifold 
        M

$$ M $$

 with metric tensor 
        g

$$ g $$

, the length 
        L

$$ L $$

 of a continuously differentiable curve 
        γ

        :

        [

        a

        ,

        b

        ]

        →

        M

$$ \gamma :[a,b]\to M $$

 is defined by

        L

        (

        γ

        )

        =
          ∫
            a
            b
              g
                γ

                (

                t

                )
            (
                  γ

                  ˙
            (

            t

            )

            ,
                  γ

                  ˙
            (

            t

            )

            )
        d

        t

        .

$$ L(\gamma )=\int _{a}^{b}{\sqrt {g_{\gamma (t)}({\dot {\gamma }}(t),{\dot {\gamma }}(t))}}\,dt. $$

The distance 
        d

        (

        p

        ,

        q

        )

$$ d(p,q) $$

 between two points 
        p

$$ p $$

 and 
        q

$$ q $$

 of 
        M

$$ M $$

 is defined as the infimum of the length taken over all continuous, piecewise continuously differentiable curves 
        γ

        :

        [

        a

        ,

        b

        ]

        →

        M

$$ \gamma :[a,b]\to M $$

 such that 
        γ

        (

        a

        )

        =

        p

$$ \gamma (a)=p $$

 and 
        γ

        (

        b

        )

        =

        q

$$ \gamma (b)=q $$

. In Riemannian geometry, all geodesics are locally distance-minimizing paths, but the converse is not true. In fact, only paths that are both locally distance minimizing and parameterized proportionately to arc-length are geodesics.

Another equivalent way of defining geodesics on a Riemannian manifold, is to define them as the minima of the following action or energy functional

        E

        (

        γ

        )

        =
            1

            2
          ∫
            a
            b
          g
            γ

            (

            t

            )
        (
              γ

              ˙
        (

        t

        )

        ,
              γ

              ˙
        (

        t

        )

        )
        d

        t

        .

$$ E(\gamma )={\frac {1}{2}}\int _{a}^{b}g_{\gamma (t)}({\dot {\gamma }}(t),{\dot {\gamma }}(t))\,dt. $$

All minima of 
        E

$$ E $$

 are also minima of 
        L

$$ L $$

, but 
        L

$$ L $$

 is a bigger set since paths that are minima of 
        L

$$ L $$

 can be arbitrarily re-parameterized (without changing their length), while minima of 
        E

$$ E $$

 cannot.

For a piecewise 
          C
            1

$$ C^{1} $$

 curve (more generally, a 
          W
            1

            ,

            2

$$ W^{1,2} $$

 curve), the Cauchy–Schwarz inequality gives

        L

        (

        γ
          )
            2
        ≤

        2

        (

        b

        −

        a

        )

        E

        (

        γ

        )

$$ L(\gamma )^{2}\leq 2(b-a)E(\gamma ) $$

with equality if and only if 
        g

        (
          γ

          ′
        ,
          γ

          ′
        )

$$ g(\gamma ',\gamma ') $$

 is equal to a constant a.e.; the path should be travelled at constant speed.  It happens that minimizers of 
        E

        (

        γ

        )

$$ E(\gamma ) $$

 also minimize 
        L

        (

        γ

        )

$$ L(\gamma ) $$

, because they turn out to be affinely parameterized, and the inequality is an equality.  The usefulness of this approach is that the problem of seeking minimizers of 
        E

$$ E $$

 is a more robust variational problem.  Indeed, 
        E

        (

        γ

        )

$$ E(\gamma ) $$

 is a "convex function" of 
        γ

$$ \gamma $$

, so that within each isotopy class of "reasonable functions", one ought to expect existence, uniqueness, and regularity of minimizers.  In contrast, "minimizers" of the functional 
        L

        (

        γ

        )

$$ L(\gamma ) $$

 are generally not very regular, because arbitrary reparameterizations are allowed.

The Euler–Lagrange equations of motion for the functional 
        E

$$ E $$

 are then given in local coordinates by

                d
                  2
                x
                  λ
              d
                t
                  2
        +
          Γ
            μ

            ν
            λ
              d
                x
                  μ
              d

              t
              d
                x
                  ν
              d

              t
        =

        0

        ,

$$ {\frac {d^{2}x^{\lambda }}{dt^{2}}}+\Gamma _{\mu \nu }^{\lambda }{\frac {dx^{\mu }}{dt}}{\frac {dx^{\nu }}{dt}}=0, $$

where 
          Γ
            μ

            ν
            λ

$$ \Gamma _{\mu \nu }^{\lambda } $$

 are the Christoffel symbols of the metric.  This is the geodesic equation, discussed below.

### Calculus of variations

Techniques of the classical calculus of variations can be applied to examine the energy functional 
        E

$$ E $$

.  The first variation of energy is defined in local coordinates by

        δ

        E

        (

        γ

        )

        (

        φ

        )

        =
                ∂
                  ∂

                  t
            |
            t

            =

            0
        E

        (

        γ

        +

        t

        φ

        )

        .

$$ \delta E(\gamma )(\varphi )=\left.{\frac {\partial }{\partial t}}\right|_{t=0}E(\gamma +t\varphi ). $$

The critical points of the first variation are precisely the geodesics.  The second variation is defined by

          δ
            2
        E

        (

        γ

        )

        (

        φ

        ,

        ψ

        )

        =
                  ∂
                    2
                  ∂

                  s
                  ∂

                  t
            |
            s

            =

            t

            =

            0
        E

        (

        γ

        +

        t

        φ

        +

        s

        ψ

        )

        .

$$ \delta ^{2}E(\gamma )(\varphi ,\psi )=\left.{\frac {\partial ^{2}}{\partial s\,\partial t}}\right|_{s=t=0}E(\gamma +t\varphi +s\psi ). $$

In an appropriate sense, zeros of the second variation along a geodesic 
        γ

$$ \gamma $$

 arise along Jacobi fields.  Jacobi fields are thus regarded as variations through geodesics.

By applying variational techniques from classical mechanics, one can also regard geodesics as Hamiltonian flows.  They are solutions of the associated Hamilton equations, with (pseudo-)Riemannian metric taken as Hamiltonian.

## Affine geodesics

A geodesic on a smooth manifold 
        M

$$ M $$

 with an affine connection 
        ∇

$$ \nabla $$

 is defined as a curve 
        γ

        (

        t

        )

$$ \gamma (t) $$

 such that parallel transport along the curve preserves the tangent vector to the curve, so

at each point along the curve,  where 
              γ

              ˙

$$ {\dot {\gamma }} $$

 is the derivative with respect to 
        t

$$ t $$

.  More precisely, in order to define the covariant derivative of 
              γ

              ˙

$$ {\dot {\gamma }} $$

 it is necessary first to extend 
              γ

              ˙

$$ {\dot {\gamma }} $$

 to a continuously differentiable vector field in an open set.  However, the resulting value of (1) is independent of the choice of extension.

Using local coordinates on 
        M

$$ M $$

, we can write the geodesic equation (using the summation convention) as

                d
                  2
                γ
                  λ
              d
                t
                  2
        +
          Γ
            μ

            ν
            λ
              d
                γ
                  μ
              d

              t
              d
                γ
                  ν
              d

              t
        =

        0
        ,

$$ {\frac {d^{2}\gamma ^{\lambda }}{dt^{2}}}+\Gamma _{\mu \nu }^{\lambda }{\frac {d\gamma ^{\mu }}{dt}}{\frac {d\gamma ^{\nu }}{dt}}=0\ , $$

where 
          γ
            μ
        =
          x
            μ
        ∘

        γ

        (

        t

        )

$$ \gamma ^{\mu }=x^{\mu }\circ \gamma (t) $$

 are the coordinates of the curve 
        γ

        (

        t

        )

$$ \gamma (t) $$

 and 
          Γ
            μ

            ν
            λ

$$ \Gamma _{\mu \nu }^{\lambda } $$

 are the Christoffel symbols of the connection 
        ∇

$$ \nabla $$

.  This is an ordinary differential equation for the coordinates.  It has a unique solution, given an initial position and an initial velocity.  Therefore, from the point of view of classical mechanics, geodesics can be thought of as trajectories of free particles in a manifold. Indeed, the equation 
          ∇
                γ

                ˙
              γ

              ˙
        =

        0

$$ \nabla _{\dot {\gamma }}{\dot {\gamma }}=0 $$

 means that the acceleration vector of the curve has no components in the direction of the surface (and therefore it is perpendicular to the tangent plane of the surface at each point of the curve). So, the motion is completely determined by the bending of the surface. This is also the idea of general relativity where particles move on geodesics and the bending is caused by gravity.

### Existence and uniqueness

The local existence and uniqueness theorem for geodesics states that geodesics on a smooth manifold with an affine connection exist, and are unique.  More precisely:

For any point p in M and for any vector V in TpM (the tangent space to M at p) there exists a unique geodesic 
        γ

$$ \gamma \, $$

 : I → M such that

        γ

        (

        0

        )

        =

        p

$$ \gamma (0)=p\, $$

 and

              γ

              ˙
        (

        0

        )

        =

        V

        ,

$$ {\dot {\gamma }}(0)=V, $$

where I is a maximal open interval in R containing 0.

The proof of this theorem follows from the theory of  ordinary differential equations, by noticing that the geodesic equation is a second-order ODE. Existence and uniqueness then follow from the Picard–Lindelöf theorem for the solutions of ODEs with prescribed initial conditions. γ depends smoothly on both p and V.

In general, I may not be all of R as for example for an open disc in R2. Any γ extends to all of ℝ if and only if M is geodesically complete.

### Geodesic flow

Geodesic flow is a local R-action on the tangent bundle TM of a manifold M defined in the following way

          G
            t
        (

        V

        )

        =
                γ

                ˙
            V
        (

        t

        )

$$ G^{t}(V)={\dot {\gamma }}_{V}(t) $$

where t ∈ R, V ∈ TM and 
          γ
            V

$$ \gamma _{V} $$

 denotes the geodesic with initial data 
                γ

                ˙
            V
        (

        0

        )

        =

        V

$$ {\dot {\gamma }}_{V}(0)=V $$

. Thus,  
          G
            t
        (

        V

        )

        =

        exp

        ⁡

        (

        t

        V

        )

$$ G^{t}(V)=\exp(tV) $$

 is the exponential map of the vector tV.  A closed orbit of the geodesic flow corresponds to a closed geodesic on M.

On a (pseudo-)Riemannian manifold, the geodesic flow is identified with a Hamiltonian flow on the cotangent bundle.  The Hamiltonian is then given by the inverse of the (pseudo-)Riemannian metric, evaluated against the canonical one-form. In particular the flow preserves the (pseudo-)Riemannian metric 
        g

$$ g $$

, i.e.

        g

        (
          G
            t
        (

        V

        )

        ,
          G
            t
        (

        V

        )

        )

        =

        g

        (

        V

        ,

        V

        )

        .

$$ g(G^{t}(V),G^{t}(V))=g(V,V).\, $$

In particular, when V is a unit vector, 
          γ
            V

$$ \gamma _{V} $$

 remains unit speed throughout, so the geodesic flow is tangent to the unit tangent bundle.  Liouville's theorem implies invariance of a kinematic measure on the unit tangent bundle.

### Geodesic spray

The geodesic flow defines a family of curves in the tangent bundle. The derivatives of these curves define a vector field  on the total space of the tangent bundle, known as the geodesic spray.

More precisely, an affine connection gives rise to a splitting of the double tangent bundle TTM into horizontal and vertical bundles:

        T

        T

        M

        =

        H

        ⊕

        V

        .

$$ TTM=H\oplus V. $$

The double tangent bundle can be visualized as the space of simultaneous changes of both the base point and velocity, without committing to any method to transport velocity across base points.

For any 
        x

        ∈

        M

        ,
        v

        ∈
          T
            x
        M

$$ x\in M,\;v\in T_{x}M $$

, the vertical fiber 
          V
            (

            x

            ,

            v

            )

$$ V_{(x,v)} $$

 is determined by the projection map 
        π

        :

        T

        M

        →

        M

$$ \pi :TM\to M $$

. It consists of all ways to change the velocity 
        v

$$ v $$

 while fixing the base point 
        x

$$ x $$

, and it is essentially a copy of 
          T
            x
        M

$$ T_{x}M $$

 translated from 
        (

        x

        ,

        0

        )

$$ (x,0) $$

 to 
        (

        x

        ,

        v

        )

$$ (x,v) $$

. The affine connection then selects where 
        (

        x

        ,

        v

        )

$$ (x,v) $$

 would land under a change of base point while "fixing" velocity, which spans out the horizontal fiber 
          H
            (

            x

            ,

            v

            )

$$ H_{(x,v)} $$

. Conversely, given the split, transporting a vector 
        v

$$ v $$

 along a trajectory 
        γ

$$ \gamma $$

 simply means dragging the vector along the horizontal bundle, i.e. lifting the trajectory twice, from 
        γ

        (

        t

        )

$$ \gamma (t) $$

 in 
        M

$$ M $$

 to 
        (

        γ

        (

        t

        )

        ,
              γ

              ˙
        (

        t

        )

        )

$$ (\gamma (t),{\dot {\gamma }}(t)) $$

 in 
        T

        M

$$ TM $$

 to 
        (

        γ

        (

        t

        )

        ,

        v

        (

        t

        )

        ,

        a

        (

        t

        )

        )

$$ (\gamma (t),v(t),a(t)) $$

 in 
        H

$$ H $$

, with the condition that 
        d

        π

        (

        γ

        (

        t

        )

        ,

        v

        ,

        a

        (

        t

        )

        )

        =

        (

        γ

        (

        t

        )

        ,
              γ

              ˙
        (

        t

        )

        )

$$ d\pi (\gamma (t),v,a(t))=(\gamma (t),{\dot {\gamma }}(t)) $$

.

The geodesic spray is the unique horizontal vector field W satisfying

        d

        π
          W
            (

            x

            ,

            v

            )
        =

        (

        x

        ,

        v

        )

$$ d\pi W_{(x,v)}=(x,v) $$

at each point 
        x

        ∈

        M

        ,
        v

        ∈
          T
            x
        M

$$ x\in M,\;v\in T_{x}M $$

, here 
        d

        π

        :

        T

        T

        M

        →

        T

        M

$$ d\pi :TTM\to TM $$

denotes the pushforward (differential) along the projection 
        π

        :

        T

        M

        →

        M

$$ \pi :TM\to M $$

. Intuitively, 
        d

        π

$$ d\pi $$

 discards the change to velocity and preserves change to base point.

More generally, the same construction allows one to construct a vector field for any Ehresmann connection on the tangent bundle. For the resulting vector field to be a spray (on the deleted tangent bundle TM \ {0}) it is enough that the connection be equivariant under positive rescalings, that is, it is enough that, if 
        w

        ∈
          T
            x
        M

$$ w\in T_{x}M $$

 is transported by 
        γ

$$ \gamma $$

 to 
          w

          ′
        ∈
          T
              x

              ′
        M

$$ w'\in T_{x'}M $$

, then 
        k

        w

$$ kw $$

 must be transported to 
        k
          w

          ′

$$ kw' $$

 for any 
        k

        >

        0

$$ k>0 $$

. It is not necessary that, if 
        u

        ∈
          T
            x
        M

$$ u\in T_{x}M $$

 is also transported to 
          u

          ′
        ∈
          T
              x

              ′
        M

$$ u'\in T_{x'}M $$

, then 
        w

        +

        u

$$ w+u $$

 must be transported 
          w

          ′
        +
          u

          ′

$$ w'+u' $$

. 

That is, (cf. Ehresmann connection#Vector bundles and covariant derivatives) it is enough that the horizontal distribution satisfy

          H
            λ

            X
        =

        d

        (
          S
            λ
          )
            X
          H
            X

$$ H_{\lambda X}=d(S_{\lambda })_{X}H_{X}\, $$

for every X ∈ TM \ {0} and λ > 0.  Here d(Sλ) is the pushforward along the scalar homothety 
          S
            λ
        :

        X

        ↦

        λ

        X

        .

$$ S_{\lambda }:X\mapsto \lambda X. $$

  A particular case of a non-linear connection arising in this manner is that associated to a Finsler manifold.

Equivariance under positive rescalings is necessary to ensure that vector transport is well-defined along directed paths, that is, given any parameterization 
        γ

        :

        I

        →

        M

$$ \gamma :I\to M $$

 of the curve, and any strictly monotonically increasing "change of timing" 
        f

        :
          R
        →
          R

$$ f:\mathbb {R} \to \mathbb {R} $$

, the new parameterization 
        γ

        ∘

        f

$$ \gamma \circ f $$

 still produces the same vector transport. Without equivariance under positive rescalings, vector transport along a directed path depends on the specific parameterization.

### Affine and projective geodesics

Equation (1) is invariant under affine reparameterizations; that is, parameterizations of the form

        t

        ↦

        a

        t

        +

        b

$$ t\mapsto at+b $$

where a and b are constant real numbers. Thus apart from specifying a certain class of embedded curves, the geodesic equation also determines a preferred class of parameterizations on each of the curves. Accordingly, solutions of (1) are called geodesics with affine parameter.

An affine connection is determined by its family of affinely parameterized geodesics, up to torsion (Spivak 1999, Chapter 6, Addendum I).  The torsion itself does not, in fact, affect the family of geodesics, since the geodesic equation depends only on the symmetric part of the connection.  More precisely, if 
        ∇

        ,
              ∇

              ¯

$$ \nabla ,{\bar {\nabla }} $$

 are two connections such that the difference tensor

        D

        (

        X

        ,

        Y

        )

        =
          ∇
            X
        Y

        −
                ∇

                ¯
            X
        Y

$$ D(X,Y)=\nabla _{X}Y-{\bar {\nabla }}_{X}Y $$

is skew-symmetric, then 
        ∇

$$ \nabla $$

 and 
              ∇

              ¯

$$ {\bar {\nabla }} $$

 have the same geodesics, with the same affine parameterizations. Furthermore, there is a unique connection having the same geodesics as  
        ∇

$$ \nabla $$

, but with vanishing torsion.

Geodesics without a particular parameterization are described by a projective connection.

## Computational methods

Efficient solvers for the minimal geodesic problem on surfaces have been proposed by Mitchell, Kimmel, Crane, and others.

## Ribbon test

A ribbon "test" is a way of finding a geodesic on a physical surface. The idea is to fit a bit of paper around a straight line (a ribbon) onto a curved surface as closely as possible without stretching or squishing the ribbon (without changing its internal geometry).

For example, when a ribbon is wound as a ring around a cone, the ribbon would not lie on the cone's surface but stick out, so that circle is not a geodesic on the cone. If the ribbon is adjusted so that all its parts touch the cone's surface, it would give an approximation to a geodesic.

Mathematically the ribbon test can be formulated as finding a mapping 
        f

        :

        N

        (

        ℓ

        )

        →

        S

$$ f:N(\ell )\to S $$

 of a neighborhood 
        N

$$ N $$

 of a line 
        ℓ

$$ \ell $$

 in a plane into a surface 
        S

$$ S $$

 so that the mapping 
        f

$$ f $$

 "doesn't change the distances around 
        ℓ

$$ \ell $$

 by much"; that is, at the distance 
        ε

$$ \varepsilon $$

 from 
        l

$$ l $$

 we have 
          g
            N
        −
          f
            ∗
        (
          g
            S
        )

        =

        O

        (
          ε
            2
        )

$$ g_{N}-f^{*}(g_{S})=O(\varepsilon ^{2}) $$

 where 
          g
            N

$$ g_{N} $$

 and 
          g
            S

$$ g_{S} $$

 are metrics on 
        N

$$ N $$

 and 
        S

$$ S $$

.
