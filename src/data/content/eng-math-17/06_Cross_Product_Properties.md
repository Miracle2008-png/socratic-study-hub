# 6. Properties of the Cross Product

The cross product behaves very differently from standard multiplication. If you try to rely on algebraic intuition, you will make catastrophic errors. You must memorize these properties.

### 1. Anti-Commutativity
Standard multiplication is commutative ($3 \times 4 = 4 \times 3$). The dot product is commutative ($\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$).
The cross product is **NOT**. 

If you swap the order of the vectors, you must apply the Right-Hand Rule again. Your fingers point in reverse, and your thumb points perfectly upside down.
$$ \mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a}) $$
Order matters! If you flip the order, you get the negative vector.

### 2. The Parallel Zero-Test
Recall that the dot product is zero when vectors are perpendicular.
The cross product is the exact opposite. Because its magnitude relies on $\sin(\theta)$, and $\sin(0) = 0$, **the cross product of two parallel vectors is exactly the zero vector.**
$$ \mathbf{a} \times \mathbf{a} = \mathbf{0} $$
$$ \mathbf{a} \times (c\mathbf{a}) = \mathbf{0} $$
This is the fastest mathematical test to see if two lines are perfectly parallel.

### 3. Basis Vector Cyclic Permutations
Crossing the standard basis vectors creates a cyclic right-handed coordinate system:
*   $\mathbf{i} \times \mathbf{j} = \mathbf{k}$
*   $\mathbf{j} \times \mathbf{k} = \mathbf{i}$
*   $\mathbf{k} \times \mathbf{i} = \mathbf{j}$

If you go backwards against the cycle, you get a negative:
*   $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$

### Physics Example: Torque
In mechanical engineering, the cross product is the mathematical definition of **Torque**.
If you apply a Force ($\mathbf{F}$) to a wrench at a radius ($\mathbf{r}$) from a bolt, the resulting twisting force (Torque, $\boldsymbol{\tau}$) is perpendicular to both the wrench and the force you applied.
$$ \boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} $$
The magnitude is $\|\boldsymbol{\tau}\| = \|\mathbf{r}\|\|\mathbf{F}\|\sin(\theta)$. This proves that to get maximum torque, you must pull at exactly $90^\circ$ ($\sin(90^\circ)=1$)!
