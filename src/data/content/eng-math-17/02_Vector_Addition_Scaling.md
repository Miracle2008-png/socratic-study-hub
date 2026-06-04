# 2. Vector Addition and Scaling

Vectors obey two fundamental algebraic operations that form the basis of all linear algebra: Vector Addition and Scalar Multiplication.

### 1. Vector Addition
Suppose you walk 3 miles North (Vector A), and then 4 miles East (Vector B). Where are you relative to where you started? 
To find the total net displacement, you add the vectors: $\mathbf{C} = \mathbf{A} + \mathbf{B}$.

**Visually (The Tip-to-Tail Method):**
You draw Vector A. Then, you place the *tail* of Vector B onto the *tip* of Vector A. The resulting sum, Vector C, is the new arrow drawn from the very beginning tail to the very final tip. 

**Algebraically:**
Vector addition is done component-by-component.
If $\mathbf{A} = \langle a_1, a_2, a_3 \rangle$ and $\mathbf{B} = \langle b_1, b_2, b_3 \rangle$, then:
$$ \mathbf{A} + \mathbf{B} = \langle a_1+b_1, \, a_2+b_2, \, a_3+b_3 \rangle $$

*Properties:*
*   Commutative: $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$
*   Associative: $(\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + (\mathbf{B} + \mathbf{C})$

### 2. Scalar Multiplication
You can scale a vector by multiplying it by a scalar (a normal number) $c$. 

**Visually:**
*   If $c > 1$, the vector gets stretched longer.
*   If $0 < c < 1$, the vector gets squished shorter.
*   If $c < 0$, the vector completely reverses direction!

**Algebraically:**
The scalar distributes to every component.
$$ c\mathbf{v} = c\langle v_1, v_2, v_3 \rangle = \langle cv_1, cv_2, cv_3 \rangle $$

### Unit Vectors
A Unit Vector is any vector that has a magnitude of exactly 1. They are extremely useful because they represent pure direction, with no size attached.
If you have a random vector $\mathbf{v}$ (like a velocity vector of 50 mph East), and you want to extract *just* its direction (East), you divide the vector by its own magnitude. This process is called **Normalization**.

$$ \mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} $$
The resulting unit vector $\mathbf{u}$ will point in the exact same direction as $\mathbf{v}$, but its length will be 1.
