# Tensor product

In mathematics, the tensor product 

## Definitions and constructions

The tensor product of two vector spaces is a vector space that is defined up to an isomorphism. There are several equivalent ways to define it. Most consist of defining explicitly a vector space that is called a tensor product, and, generally, the equivalence proof results almost immediately from the basic properties of the vector spaces that are so defined. 

The tensor product can also be defined through a universal property; see § Universal property, below. As for every universal property, all objects that satisfy the property are isomorphic through a unique isomorphism that is compatible with the universal property. When this definition is used, the other definitions may be viewed as constructions of objects satisfying the universal property and as proofs that there are objects satisfying the universal property, that is that tensor products exist.

### From bases

Let V and W be two vector spaces over a field F, with respective bases $B_{V}$ and ⁠ $B_{W}$
⁠.

The tensor product $V\otimes W$ of V and W is a vector space that has as a basis the set of all $v\otimes w$ with $v\in B_{V}$ and ⁠ $w\in B_{W}$
⁠, regarded purely as symbols with no further meaning. This definition can be formalized in the following way (this formalization is rarely used in practice, as the preceding informal definition is generally sufficient): $V\otimes W$ is the set of functions from the Cartesian product $B_{V}\times B_{W}$ to F that have a finite number of nonzero values. The pointwise operations make $V\otimes W$ a vector space. The function that maps $(v,w)$ to 1 and the other elements of $B_{V}\times B_{W}$ to 0 is denoted ⁠ $v\otimes w$
⁠.

The set $\{v\otimes w\mid v\in B_{V},w\in B_{W}\}$ , called the tensor product of the bases $B_{V}$ and ⁠ $B_{W}$
⁠, is straightforwardly a basis of ⁠ $V\otimes W$
⁠.

Equivalently, we can  define $V\otimes W$ to be the set of bilinear forms on $V\times W$ that are nonzero at only a finite number of elements of ⁠ $B_{V}\times B_{W}$
⁠. To see this, given $(x,y)\in V\times W$ and a bilinear form ⁠ $B:V\times W\to F$
⁠,  we can decompose $x$ and $y$ in the bases $B_{V}$ and $B_{W}$ as: $x=\sum _{v\in B_{V}}x_{v}\,v\quad {\text{and}}\quad y=\sum _{w\in B_{W}}y_{w}\,w,$ where only a finite number of $x_{v}$
's and $y_{w}$
's are nonzero, and find by the bilinearity of $B$ that: $B(x,y)=\sum _{v\in B_{V}}\sum _{w\in B_{W}}x_{v}y_{w}\,B(v,w)$
Hence, we see that the value of $B$ for any $(x,y)\in V\times W$ is uniquely and totally determined by the values that it takes on ⁠ $B_{V}\times B_{W}$
⁠. This lets us extend the maps $v\otimes w$ defined on $B_{V}\times B_{W}$ as before into bilinear maps $v\otimes w:V\times W\to F$ , by letting: $(v\otimes w)(x,y):=\sum _{v'\in B_{V}}\sum _{w'\in B_{W}}x_{v'}y_{w'}\,(v\otimes w)(v',w')=x_{v}\,y_{w}.$
Then we can express any bilinear form $B$ as a (potentially infinite) formal linear combination of the $v\otimes w$ maps according to: $B=\sum _{v\in B_{V}}\sum _{w\in B_{W}}B(v,w)(v\otimes w)$ making these maps similar to a Schauder basis for the vector space ${\text{Hom}}(V,W;F)$ of all bilinear forms on ⁠ $V\times W$
⁠. To instead have it be a proper Hamel basis, it only remains to add the requirement that $B$ is nonzero at an only a finite number of elements of ⁠ $B_{V}\times B_{W}$
⁠, and consider the subspace of such maps instead. 

In either construction, the tensor product of two vectors is defined from their decomposition on the bases. More precisely, taking the basis decompositions of $x\in V$ and $y\in W$ as before: ${\begin{aligned}x\otimes y&={\biggl (}\sum _{v\in B_{V}}x_{v}\,v{\biggr )}\otimes {\biggl (}\sum _{w\in B_{W}}y_{w}\,w{\biggr )}\\[5mu]&=\sum _{v\in B_{V}}\sum _{w\in B_{W}}x_{v}y_{w}\,v\otimes w.\end{aligned}}$
This definition is quite clearly derived from the coefficients of $B(v,w)$ in the expansion by bilinearity of $B(x,y)$ using the bases $B_{V}$ and ⁠ $B_{W}$
⁠, as done above. It is then straightforward to verify that with this definition, the map ${\otimes }:(x,y)\mapsto x\otimes y$ is a bilinear map from $V\times W$ to $V\otimes W$ satisfying the universal property that any construction of the tensor product satisfies (see below).

If arranged into a rectangular array, the coordinate vector of $x\otimes y$ is the outer product of the coordinate vectors of $x$ and ⁠ $y$
⁠. Therefore, the tensor product is a generalization of the outer product, that is, an abstraction of it beyond coordinate vectors. 

A limitation of this definition of the tensor product is that, if one changes bases, a different tensor product is defined. However, the decomposition on one basis of the elements of the other basis defines a canonical isomorphism between the two tensor products of vector spaces, which allows identifying them. Also, contrarily to the two following alternative definitions, this definition cannot be extended into a definition of the tensor product of modules over a ring.

### As a quotient space

A construction of the tensor product that is basis independent can be obtained in the following way.

Let V and W be two vector spaces over a field F. 

One considers first a vector space L that has the Cartesian product $V\times W$ as a basis. That is, the basis elements of L are the pairs $(v,w)$ with $v\in V$ and ⁠ $w\in W$
⁠. To get such a vector space, one can define it as the vector space of the functions $V\times W\to F$ that have a finite number of nonzero values and identifying $(v,w)$ with the function that takes the value 1 on $(v,w)$ and 0 otherwise.

Let R be the linear subspace of L that is spanned by the relations that the tensor product must satisfy. More precisely, R is spanned by the elements of one of the forms: ${\begin{aligned}(v_{1}+v_{2},w)&-(v_{1},w)-(v_{2},w),\\(v,w_{1}+w_{2})&-(v,w_{1})-(v,w_{2}),\\(sv,w)&-s(v,w),\\(v,sw)&-s(v,w),\end{aligned}}$ where ⁠ $v,v_{1},v_{2}\in V$
⁠, $w,w_{1},w_{2}\in W$ and ⁠ $s\in F$
⁠.

Then, the tensor product is defined as the quotient space: $V\otimes W=L/R,$ and the image of $(v,w)$ in this quotient is denoted ⁠ $v\otimes w$
⁠.

It is straightforward to prove that the result of this construction satisfies the universal property considered below. (A very similar construction can be used to define the tensor product of modules.)

### Universal property

In this section, the universal property satisfied by the tensor product is described. As for every universal property, two objects that satisfy the property are related by a unique isomorphism. It follows that this is a (non-constructive) way to define the tensor product of two vector spaces. In this context, the preceding constructions of tensor products may be viewed as proofs of existence of the tensor product so defined.

A consequence of this approach is that every property of the tensor product can be deduced from the universal property, and that, in practice, one may forget the method that has been used to prove its existence. 

The "universal-property definition" of the tensor product of two vector spaces is the following (recall that a bilinear map is a function that is separately linear in each of its arguments):

The tensor product of two vector spaces V and W is a vector space denoted as ⁠ $V\otimes W$
⁠, together with a bilinear map ${\varphi }:(v,w)\mapsto v\otimes w$ from $V\times W$ to ⁠ $V\otimes W$
⁠, such that, for every bilinear map ⁠ $h:V\times W\to Z$
⁠, there is a unique linear map ⁠ ${\tilde {h}}:V\otimes W\to Z$
⁠, such that $h={\tilde {h}}\circ {\varphi }$
(that is, $h(v,w)={\tilde {h}}(v\otimes w)$ for every $v\in V$ and ⁠ $w\in W$
⁠).

### Linearly disjoint

Like the universal property above, the following characterization may also be used to determine whether or not a given vector space and given bilinear map form a tensor product.

For example, it follows immediately that if ⁠ $X=\mathbb {C} ^{m}$
⁠ and ⁠ $Y=\mathbb {C} ^{n}$
⁠, where $m$ and $n$ are positive integers, then one may set $Z=\mathbb {C} ^{mn}$ and define the bilinear map as ${\begin{aligned}T:\mathbb {C} ^{m}\times \mathbb {C} ^{n}&\to \mathbb {C} ^{mn}\\(x,y)=((x_{1},\ldots ,x_{m}),(y_{1},\ldots ,y_{n}))&\mapsto (x_{i}y_{j})_{\stackrel {i=1,\ldots ,m}{j=1,\ldots ,n}}\end{aligned}}$ to form the tensor product of $X$ and ⁠ $Y$
⁠. Often, this map $T$ is denoted by $\,\otimes \,$ so that $x\otimes y=T(x,y).$
As another example, suppose that $\mathbb {C} ^{S}$ is the vector space of all complex-valued functions on a set $S$ with addition and scalar multiplication defined pointwise (meaning that $f+g$ is the map $s\mapsto f(s)+g(s)$ and $cf$ is the map ⁠ $s\mapsto cf(s)$
⁠). Let $S$ and $T$ be any sets and for any $f\in \mathbb {C} ^{S}$ and ⁠ $g\in \mathbb {C} ^{T}$
⁠, let $f\otimes g\in \mathbb {C} ^{S\times T}$ denote the function defined by ⁠ $(s,t)\mapsto f(s)g(t)$
⁠. 

If $X\subseteq \mathbb {C} ^{S}$ and $Y\subseteq \mathbb {C} ^{T}$ are vector subspaces then the vector subspace $Z:=\operatorname {span} \left\{f\otimes g:f\in X,g\in Y\right\}$ of $\mathbb {C} ^{S\times T}$ together with the bilinear map: ${\begin{alignedat}{4}\;&&X\times Y&&\;\to \;&Z\\[0.3ex]&&(f,g)&&\;\mapsto \;&f\otimes g\\\end{alignedat}}$ form a tensor product of $X$ and ⁠ $Y$
⁠.

## Properties

### Dimension

If V and W are vector spaces of finite dimension, then $V\otimes W$ is finite-dimensional, and its dimension is the product of the dimensions of V and W.

This results from the fact that a basis of $V\otimes W$ is formed by taking all tensor products of a basis element of V and a basis element of W.

### Associativity

The tensor product is associative in the sense that, given three vector spaces ⁠ $U,V,W$
⁠, there is a canonical isomorphism: $(U\otimes V)\otimes W\cong U\otimes (V\otimes W),$ that maps $(u\otimes v)\otimes w$ to ⁠ $u\otimes (v\otimes w)$
⁠.

This allows omitting parentheses in the tensor product of more than two vector spaces or vectors.

### Commutativity as vector space operation

The tensor product of two vector spaces $V$ and $W$ is commutative  in the sense that there is a canonical isomorphism: $V\otimes W\cong W\otimes V,$ that maps $v\otimes w$ to ⁠ $w\otimes v$
⁠.

On the other hand, even when ⁠ $V=W$
⁠, the tensor product of vectors is not commutative; that is ⁠ $v\otimes w\neq w\otimes v$
⁠, in general.

The map $x\otimes y\mapsto y\otimes x$ from $V\otimes V$ to itself induces a linear automorphism that is called a braiding map.

More generally and as usual (see tensor algebra), let $V^{\otimes n}$ denote the tensor product of n copies of the vector space V. For every permutation s of the first n positive integers, the map: $x_{1}\otimes \cdots \otimes x_{n}\mapsto x_{s(1)}\otimes \cdots \otimes x_{s(n)}$ induces a linear automorphism of ⁠ $V^{\otimes n}\to V^{\otimes n}$
⁠, which is called a braiding map. This determines a right action of the symmetric group $S_{n}$ on $V^{\otimes n}$
.

## Tensor product of linear maps

Given a linear map ⁠ $f:U\to V$
⁠, and a vector space W, the tensor product: $f\otimes W:U\otimes W\to V\otimes W$ is the unique linear map such that: $(f\otimes W)(u\otimes w)=f(u)\otimes w.$
The tensor product $W\otimes f$ is defined similarly.

Given two linear maps $f:U\to V$ and ⁠ $g:W\to Z$
⁠, their tensor product: $f\otimes g:U\otimes W\to V\otimes Z$ is the unique linear map that satisfies: $(f\otimes g)(u\otimes w)=f(u)\otimes g(w).$
One has: $f\otimes g=(f\otimes Z)\circ (U\otimes g)=(V\otimes g)\circ (f\otimes W).$
In terms of category theory, this means that the tensor product is a bifunctor from the category of vector spaces to itself.

If f and g are both injective or surjective, then the same is true for all above defined linear maps. In particular, the tensor product with a vector space is an exact functor; this means that every exact sequence is mapped to an exact sequence (tensor products of modules do not transform injections into injections, but they are right exact functors).

By choosing bases of all vector spaces involved, the linear maps f and g can be represented by matrices. Then, depending on how the tensor $v\otimes w$ is vectorized, the matrix describing the tensor product $f\otimes g$ is the Kronecker product of the two matrices. For example, if V, X, W, and U above are all two-dimensional and bases have been fixed for all of them, and f and g are given by the matrices: $A={\begin{bmatrix}a_{1,1}&a_{1,2}\\a_{2,1}&a_{2,2}\\\end{bmatrix}},\qquad B={\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}},$ respectively, then the tensor product of these two matrices is: ${\begin{aligned}{\begin{bmatrix}a_{1,1}&a_{1,2}\\a_{2,1}&a_{2,2}\\\end{bmatrix}}\otimes {\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}}&={\begin{bmatrix}a_{1,1}{\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}}&a_{1,2}{\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}}\\[3pt]a_{2,1}{\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}}&a_{2,2}{\begin{bmatrix}b_{1,1}&b_{1,2}\\b_{2,1}&b_{2,2}\\\end{bmatrix}}\\\end{bmatrix}}\\&={\begin{bmatrix}a_{1,1}b_{1,1}&a_{1,1}b_{1,2}&a_{1,2}b_{1,1}&a_{1,2}b_{1,2}\\a_{1,1}b_{2,1}&a_{1,1}b_{2,2}&a_{1,2}b_{2,1}&a_{1,2}b_{2,2}\\a_{2,1}b_{1,1}&a_{2,1}b_{1,2}&a_{2,2}b_{1,1}&a_{2,2}b_{1,2}\\a_{2,1}b_{2,1}&a_{2,1}b_{2,2}&a_{2,2}b_{2,1}&a_{2,2}b_{2,2}\\\end{bmatrix}}.\end{aligned}}$
The resultant rank is at most 4, and thus the resultant dimension is 4. rank here denotes the tensor rank i.e. the number of requisite indices (while the matrix rank counts the number of degrees of freedom in the resulting array). ⁠ $\operatorname {Tr} A\otimes B=\operatorname {Tr} A\times \operatorname {Tr} B$
⁠.

A dyadic product is the special case of the tensor product between two vectors of the same dimension.

## General tensors

For non-negative integers r and s a type $(r,s)$ tensor on a vector space V is an element of: $T_{s}^{r}(V)=\underbrace {V\otimes \cdots \otimes V} _{r}\otimes \underbrace {V^{*}\otimes \cdots \otimes V^{*}} _{s}=V^{\otimes r}\otimes \left(V^{*}\right)^{\otimes s}.$
Here $V^{*}$ is the dual vector space (which consists of all linear maps f from V to the ground field K).

There is a product map, called the (tensor) product of tensors: $T_{s}^{r}(V)\otimes _{K}T_{s'}^{r'}(V)\to T_{s+s'}^{r+r'}(V).$
It is defined by grouping all occurring "factors" V together: writing $v_{i}$ for an element of V and $f_{i}$ for an element of the dual space: $(v_{1}\otimes f_{1})\otimes (v'_{1})=v_{1}\otimes v'_{1}\otimes f_{1}.$
If V is finite dimensional, then picking a basis of V and the corresponding dual basis of $V^{*}$ naturally induces a basis of $T_{s}^{r}(V)$
(this basis is described in the article on Kronecker products). In terms of these bases, the components of a (tensor) product of two (or more) tensors can be computed. For example, if F and G are two covariant tensors of orders m and n respectively (i.e. $F\in T_{m}^{0}$ and ⁠ $G\in T_{n}^{0}$
⁠), then the components of their tensor product are given by: $(F\otimes G)_{i_{1}i_{2}\cdots i_{m+n}}=F_{i_{1}i_{2}\cdots i_{m}}G_{i_{m+1}i_{m+2}i_{m+3}\cdots i_{m+n}}.$
Thus, the components of the tensor product of two tensors are the ordinary product of the components of each tensor. Another example: let U be a tensor of type (1, 1) with components ⁠ $U_{\beta }^{\alpha }$
⁠, and let V be a tensor of type $(1,0)$ with components ⁠ $V^{\gamma }$
⁠. Then: $\left(U\otimes V\right)^{\alpha }{}_{\beta }{}^{\gamma }=U^{\alpha }{}_{\beta }V^{\gamma }$ and: $(V\otimes U)^{\mu \nu }{}_{\sigma }=V^{\mu }U^{\nu }{}_{\sigma }.$
Tensors equipped with their product operation form an algebra, called the tensor algebra, which is graded by the order of a tensor.

### Evaluation map and tensor contraction

For tensors of type (1, 1) there is a canonical evaluation map: $V\otimes V^{*}\to K$ defined by its action on pure tensors: $v\otimes f\mapsto f(v).$
More generally, for tensors of type ⁠ $(r,s)$
⁠, with r, s > 0, there is a map, called tensor contraction: $T_{s}^{r}(V)\to T_{s-1}^{r-1}(V).$
(The copies of $V$ and $V^{*}$ on which this map is to be applied must be specified.)

On the other hand, if $V$ is finite-dimensional, there is a canonical map in the other direction (called the coevaluation map): ${\begin{cases}K\to V\otimes V^{*}\\\lambda \mapsto \sum _{i}\lambda v_{i}\otimes v_{i}^{*}\end{cases}}$ where $v_{1},\ldots ,v_{n}$ is any basis of ⁠ $V$
⁠, and $v_{i}^{*}$ is its dual basis. This map does not depend on the choice of basis.

The interplay of evaluation and coevaluation can be used to characterize finite-dimensional vector spaces without referring to bases.

### Adjoint representation

The tensor product $T_{s}^{r}(V)$ may be naturally viewed as a module for the Lie algebra $\mathrm {End} (V)$ by means of the diagonal action: for simplicity let us assume ⁠ $r=s=1$
⁠, then, for each ⁠ $u\in \mathrm {End} (V)$
⁠, $u(a\otimes b)=u(a)\otimes b-a\otimes u^{*}(b),$ where $u^{*}\in \mathrm {End} \left(V^{*}\right)$ is the transpose of u, that is, in terms of the obvious pairing on ⁠ $V\otimes V^{*}$
⁠, $\langle u(a),b\rangle =\langle a,u^{*}(b)\rangle .$
There is a canonical isomorphism $T_{1}^{1}(V)\to \mathrm {End} (V)$ given by: $(a\otimes b)(x)=\langle x,b\rangle a.$
Under this isomorphism, every u in $\mathrm {End} (V)$ may be first viewed as an endomorphism of $T_{1}^{1}(V)$ and then viewed as an endomorphism of ⁠ $\mathrm {End} (V)$
⁠. In fact it is the adjoint representation ad(u) of ⁠ $\mathrm {End} (V)$
⁠.

## Linear maps as tensors

Given two finite dimensional vector spaces U, V over the same field K, denote the dual space of U as U*, and the K-vector space of all linear maps from U to V as Hom(U,V). There is an isomorphism: $U^{*}\otimes V\cong \mathrm {Hom} (U,V),$ defined by an action of the pure tensor $f\otimes v\in U^{*}\otimes V$ on an element of ⁠ $U$
⁠, $(f\otimes v)(u)=f(u)v.$
Its "inverse" can be defined using a basis $\{u_{i}\}$ and its dual basis $\{u_{i}^{*}\}$ as in the section "Evaluation map and tensor contraction" above: ${\begin{cases}\mathrm {Hom} (U,V)\to U^{*}\otimes V\\F\mapsto \sum _{i}u_{i}^{*}\otimes F(u_{i}).\end{cases}}$
This result implies: $\dim(U\otimes V)=\dim(U)\dim(V),$ which automatically gives the important fact that $\{u_{i}\otimes v_{j}\}$ forms a basis of $U\otimes V$ where $\{u_{i}\},\{v_{j}\}$ are bases of U and V.

Furthermore, given three vector spaces U, V, W the tensor product is linked to the vector space of all linear maps, as follows: $\mathrm {Hom} (U\otimes V,W)\cong \mathrm {Hom} (U,\mathrm {Hom} (V,W)).$
This is an example of adjoint functors: the tensor product is "left adjoint" to Hom.

## Tensor products of modules over a ring

The tensor product of two modules A and B over a commutative ring R is defined in exactly the same way as the tensor product of vector spaces over a field: $A\otimes _{R}B:=F(A\times B)/G,$ where now $F(A\times B)$ is the free R-module generated by the cartesian product and G is the R-module generated by these relations.

More generally, the tensor product can be defined even if the ring is non-commutative. In this case A has to be a right-R-module and B is a left-R-module, and instead of the last two relations above, the relation: $(ar,b)\sim (a,rb)$ is imposed. If R is non-commutative, this is no longer an R-module, but just an abelian group.

The universal property also carries over, slightly modified: the map $\varphi :A\times B\to A\otimes _{R}B$ defined by $(a,b)\mapsto a\otimes b$ is a middle linear map (referred to as "the canonical middle linear map"); that is, it satisfies: ${\begin{aligned}\varphi (a+a',b)&=\varphi (a,b)+\varphi (a',b)\\\varphi (a,b+b')&=\varphi (a,b)+\varphi (a,b')\\\varphi (ar,b)&=\varphi (a,rb)\end{aligned}}$
The first two properties make φ a bilinear map of the abelian group ⁠ $A\times B$
⁠. For any middle linear map $\psi$ of ⁠ $A\times B$
⁠, a unique group homomorphism f of $A\otimes _{R}B$ satisfies ⁠ $\psi =f\circ \varphi$
⁠, and this property determines $\varphi$ within group isomorphism. See the main article for details.

### Tensor product of modules over a non-commutative ring

Let A be a right R-module and B be a left R-module. Then the tensor product of A and B is an abelian group defined by: $A\otimes _{R}B:=F(A\times B)/G$ where $F(A\times B)$ is a free abelian group over $A\times B$ and G is the subgroup of $F(A\times B)$ generated by relations: ${\begin{aligned}&\forall a,a_{1},a_{2}\in A,\forall b,b_{1},b_{2}\in B,{\text{ for all }}r\in R:\\&(a_{1},b)+(a_{2},b)-(a_{1}+a_{2},b),\\&(a,b_{1})+(a,b_{2})-(a,b_{1}+b_{2}),\\&(ar,b)-(a,rb).\\\end{aligned}}$
The universal property can be stated as follows. Let G be an abelian group with a map $q:A\times B\to G$ that is bilinear, in the sense that: ${\begin{aligned}q(a_{1}+a_{2},b)&=q(a_{1},b)+q(a_{2},b),\\q(a,b_{1}+b_{2})&=q(a,b_{1})+q(a,b_{2}),\\q(ar,b)&=q(a,rb).\end{aligned}}$
Then there is a unique map ${\overline {q}}:A\otimes B\to G$ such that ${\overline {q}}(a\otimes b)=q(a,b)$ for all $a\in A$ and ⁠ $b\in B$
⁠.

Furthermore, we can give $A\otimes _{R}B$ a module structure under some extra conditions:

If A is a (S,R)-bimodule, then $A\otimes _{R}B$ is a left S-module, where ⁠ $s(a\otimes b):=(sa)\otimes b$
⁠.

If B is a (R,S)-bimodule, then $A\otimes _{R}B$ is a right S-module, where ⁠ $(a\otimes b)s:=a\otimes (bs)$
⁠.

If A is a (S,R)-bimodule and B is a (R,T)-bimodule, then $A\otimes _{R}B$ is a (S,T)-bimodule, where the left and right actions are defined in the same way as the previous two examples.

If R is a commutative ring, then A and B are (R,R)-bimodules where $ra:=ar$ and ⁠ $br:=rb$
⁠. By 3), we can conclude $A\otimes _{R}B$ is a (R,R)-bimodule.

### Computing the tensor product

For vector spaces, the tensor product $V\otimes W$ is quickly computed since bases of V of W immediately determine a basis of ⁠ $V\otimes W$
⁠, as was mentioned above. For modules over a general (commutative) ring, not every module is free. For example, Z/nZ is not a free abelian group (Z-module). The tensor product with Z/nZ is given by: $M\otimes _{\mathbf {Z} }\mathbf {Z} /n\mathbf {Z} =M/nM.$
More generally, given a presentation of some R-module M, that is, a number of generators $m_{i}\in M,i\in I$ together with relations: $\sum _{j\in J}a_{ji}m_{i}=0,\qquad a_{ij}\in R,$ the tensor product can be computed as the following cokernel: $M\otimes _{R}N=\operatorname {coker} \left(N^{J}\to N^{I}\right)$
Here ⁠ $N^{J}=\oplus _{j\in J}N$
⁠, and the map $N^{J}\to N^{I}$ is determined by sending some $n\in N$ in the jth copy of $N^{J}$ to $a_{ij}n$
(in ⁠ $N^{I}$
⁠). Colloquially, this may be rephrased by saying that a presentation of M gives rise to a presentation of ⁠ $M\otimes _{R}N$
⁠. This is referred to by saying that the tensor product is a right exact functor. It is not in general left exact, that is, given an injective map of R-modules ⁠ $M_{1}\to M_{2}$
⁠, the tensor product: $M_{1}\otimes _{R}N\to M_{2}\otimes _{R}N$ is not usually injective. For example, tensoring the (injective) map given by multiplication with n, n : Z → Z with Z/nZ yields the zero map 0 : Z/nZ → Z/nZ, which is not injective. Higher Tor functors measure the defect of the tensor product being not left exact. All higher Tor functors are assembled in the derived tensor product.

## Tensor product of algebras

Let R be a commutative ring. The tensor product of R-modules applies, in particular, if A and B are R-algebras. In this case, the tensor product $A\otimes _{R}B$ is an R-algebra itself by putting: $(a_{1}\otimes b_{1})\cdot (a_{2}\otimes b_{2})=(a_{1}\cdot a_{2})\otimes (b_{1}\cdot b_{2}).$
For example: $R[x]\otimes _{R}R[y]\cong R[x,y].$
A particular example is when A and B are fields containing a common subfield R. The tensor product of fields is closely related to Galois theory: if, say, A = R[x] / f(x), where f is some irreducible polynomial with coefficients in R, the tensor product can be calculated as: $A\otimes _{R}B\cong B[x]/f(x)$ where now f is interpreted as the same polynomial, but with its coefficients regarded as elements of B. In the larger field B, the polynomial may become reducible, which brings in Galois theory. For example, if A = B is a Galois extension of R, then: $A\otimes _{R}A\cong A[x]/f(x)$ is isomorphic (as an A-algebra) to ⁠ $A^{\operatorname {deg} (f)}$
⁠.

## Eigenconfigurations of tensors

Square matrices $A$ with entries in a field $K$ represent linear maps of vector spaces, say ⁠ $K^{n}\to K^{n}$
⁠, and thus linear maps $\psi :\mathbb {P} ^{n-1}\to \mathbb {P} ^{n-1}$ of projective spaces over ⁠ $K$
⁠. If $A$ is nonsingular then $\psi$ is well-defined everywhere, and the eigenvectors of $A$ correspond to the fixed points of ⁠ $\psi$
⁠. The eigenconfiguration of $A$ consists of $n$ points in ⁠ $\mathbb {P} ^{n-1}$
⁠, provided $A$ is generic and $K$ is algebraically closed. The fixed points of nonlinear maps are the eigenvectors of tensors. Let $A=(a_{i_{1}i_{2}\cdots i_{d}})$ be a $d$
-dimensional tensor of format $n\times n\times \cdots \times n$
with entries $(a_{i_{1}i_{2}\cdots i_{d}})$ lying in an algebraically closed field $K$ of characteristic zero. Such a tensor $A\in (K^{n})^{\otimes d}$ defines polynomial maps $K^{n}\to K^{n}$ and $\mathbb {P} ^{n-1}\to \mathbb {P} ^{n-1}$ with coordinates: $\psi _{i}(x_{1},\ldots ,x_{n})=\sum _{j_{2}=1}^{n}\sum _{j_{3}=1}^{n}\cdots \sum _{j_{d}=1}^{n}a_{ij_{2}j_{3}\cdots j_{d}}x_{j_{2}}x_{j_{3}}\cdots x_{j_{d}}\;\;{\mbox{for }}i=1,\ldots ,n$
Thus each of the $n$ coordinates of $\psi$ is a homogeneous polynomial $\psi _{i}$ of degree $d-1$ in ⁠ $\mathbf {x} =\left(x_{1},\ldots ,x_{n}\right)$
⁠. The eigenvectors of $A$ are the solutions of the constraint: ${\mbox{rank}}{\begin{pmatrix}x_{1}&x_{2}&\cdots &x_{n}\\\psi _{1}(\mathbf {x} )&\psi _{2}(\mathbf {x} )&\cdots &\psi _{n}(\mathbf {x} )\end{pmatrix}}\leq 1$ and the eigenconfiguration is given by the variety of the $2\times 2$ minors of this matrix.

## Other examples of tensor products

### Topological tensor products

Hilbert spaces generalize finite-dimensional vector spaces to arbitrary dimensions. There is an analogous operation, also called the "tensor product," that makes Hilbert spaces a symmetric monoidal category.  It is essentially constructed as the metric space completion of the algebraic tensor product discussed above.  However, it does not satisfy the obvious analogue of the universal property defining tensor products; the morphisms for that property must be restricted to Hilbert–Schmidt operators.

In situations where the imposition of an inner product is inappropriate, one can still attempt to complete the algebraic tensor product, as a topological tensor product.  However, such a construction is no longer uniquely specified: in many cases, there are multiple natural topologies on the algebraic tensor product. 

### Tensor product of graded vector spaces

Some vector spaces can be decomposed into direct sums of subspaces. In such cases, the tensor product of two spaces can be decomposed into sums of products of the subspaces (in analogy to the way that multiplication distributes over addition).

### Tensor product of representations

Vector spaces endowed with an additional multiplicative structure are called algebras. The tensor product of such algebras is described by the Littlewood–Richardson rule.

### Tensor product of algebraic fields

Given two fields that are algebraic extensions of a common base field, their tensor product over the base field is again algebraic over the base field.  Specifically, it is the algebraic extension generated by the products of the generators of the original two fields. For example, the tensor product over the rational numbers of $\mathbb {Q} [{\sqrt {2}}]$ and $\mathbb {Q} [{\sqrt {3}}]$ is generated by $1\cdot 1=1$ , $1\cdot {\sqrt {2}}={\sqrt {2}}$ , $1\cdot {\sqrt {3}}={\sqrt {3}}$ , and ${\sqrt {2}}\cdot {\sqrt {3}}={\sqrt {6}}$ , and can be denoted $\mathbb {Q} [{\sqrt {2}},{\sqrt {3}}]$
.

### Tensor product of quadratic forms

### Tensor product of multilinear forms

Given two multilinear forms $f(x_{1},\dots ,x_{k})$ and $g(x_{1},\dots ,x_{m})$ on a vector space $V$ over the field $K$ their tensor product is the multilinear form: $(f\otimes g)(x_{1},\dots ,x_{k+m})=f(x_{1},\dots ,x_{k})g(x_{k+1},\dots ,x_{k+m}).$
This is a special case of the product of tensors if they are seen as multilinear maps (see also tensors as multilinear maps). Thus the components of the tensor product of multilinear forms can be computed by the Kronecker product.

### Tensor product of sheaves of modules

### Tensor product of line bundles

### Tensor product of fields

### Tensor product of graphs

It should be mentioned that, though called "tensor product", this is not a tensor product of graphs in the above sense; actually it is the category-theoretic product in the category of graphs and graph homomorphisms. However it is actually the Kronecker tensor product of the adjacency matrices of the graphs. Compare also the section Tensor product of linear maps above.

### Monoidal categories

The most general setting for the tensor product is the monoidal category. It captures the algebraic essence of tensoring, without making any specific reference to what is being tensored. Thus, all tensor products can be expressed as an application of the monoidal category to some particular setting, acting on some particular objects.

## Quotient algebras

A number of important subspaces of the tensor algebra can be constructed as quotients: these include the exterior algebra, the symmetric algebra, the Clifford algebra, the Weyl algebra, and the universal enveloping algebra in general.

The exterior algebra is constructed from the exterior product. Given a vector space V, the exterior product $V\wedge V$ is defined as: $V\wedge V:=V\otimes V{\big /}\{v\otimes v\mid v\in V\}.$
When the underlying field of V does not have characteristic 2, then this definition is equivalent to: $V\wedge V:=V\otimes V{\big /}{\bigl \{}v_{1}\otimes v_{2}+v_{2}\otimes v_{1}\mid (v_{1},v_{2})\in V^{2}{\bigr \}}.$
The image of $v_{1}\otimes v_{2}$ in the exterior product is usually denoted $v_{1}\wedge v_{2}$ and satisfies, by construction, ⁠ $v_{1}\wedge v_{2}=-v_{2}\wedge v_{1}$
⁠. Similar constructions are possible for $V\otimes \dots \otimes V$
(n factors), giving rise to ⁠ $\Lambda ^{n}V$
⁠, the nth exterior power of V. The latter notion is the basis of differential n-forms.

The symmetric algebra is constructed in a similar manner, from the symmetric product: $V\odot V:=V\otimes V{\big /}{\bigl \{}v_{1}\otimes v_{2}-v_{2}\otimes v_{1}\mid (v_{1},v_{2})\in V^{2}{\bigr \}}.$
More generally: $\operatorname {Sym} ^{n}V:=\underbrace {V\otimes \dots \otimes V} _{n}{\big /}(\dots \otimes v_{i}\otimes v_{i+1}\otimes \dots -\dots \otimes v_{i+1}\otimes v_{i}\otimes \dots )$
That is, in the symmetric algebra two adjacent vectors (and therefore all of them) can be interchanged. The resulting objects are called symmetric tensors.

## Tensor product in programming

### Array programming languages

Array programming languages may have this pattern built in. For example, in APL the tensor product is expressed as ○.× (for example A ○.× B or A ○.× B ○.× C). In J the tensor product is the dyadic form of */ (for example a */ b or a */ b */ c).

J's treatment also allows the representation of some tensor fields, as a and b may be functions instead of constants. This product of two functions is a derived function, and if a and b are differentiable, then a */ b is differentiable.

However, these kinds of notation are not universally present in array languages. Other array languages may require explicit treatment of indices (for example, MATLAB), and/or may not support higher-order functions such as the Jacobian derivative (for example, Fortran/APL).
