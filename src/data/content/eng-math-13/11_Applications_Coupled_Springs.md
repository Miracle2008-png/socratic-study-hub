# 11. Application: Coupled Spring-Mass Systems

The most classic engineering application of a linear system is the **Coupled Spring-Mass System**. 

Imagine two train cars on a track. 
*   Car 1 (mass $m_1$) is attached to a wall by Spring 1 (stiffness $k_1$).
*   Car 2 (mass $m_2$) is attached to Car 1 by Spring 2 (stiffness $k_2$).

Let $x_1(t)$ be the displacement of Car 1 from its equilibrium, and $x_2(t)$ be the displacement of Car 2.

### Deriving the Equations of Motion
We apply Newton's Second Law ($F = ma$) to each mass separately.

**For Mass 1 ($m_1$):**
It is pulled by Spring 1 to the left: $-k_1 x_1$.
It is pulled by Spring 2 to the right. How much does Spring 2 stretch? The stretch is the difference in their positions: $(x_2 - x_1)$. So the force is $+k_2(x_2 - x_1)$.
$$ m_1 x_1'' = -k_1 x_1 + k_2(x_2 - x_1) $$
$$ m_1 x_1'' = -(k_1 + k_2)x_1 + k_2 x_2 $$

**For Mass 2 ($m_2$):**
It is only attached to Spring 2. If Car 2 moves further right than Car 1, Spring 2 pulls it back to the left. The force is $-k_2(x_2 - x_1)$.
$$ m_2 x_2'' = -k_2(x_2 - x_1) $$
$$ m_2 x_2'' = k_2 x_1 - k_2 x_2 $$

### The Matrix Translation
Divide by the masses and group into a matrix:
$$ \begin{bmatrix} x_1'' \\ x_2'' \end{bmatrix} = \begin{bmatrix} -\frac{k_1+k_2}{m_1} & \frac{k_2}{m_1} \\ \frac{k_2}{m_2} & -\frac{k_2}{m_2} \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} $$

This is a system of *second-order* equations: $\mathbf{X}'' = \mathbf{A}\mathbf{X}$.
Because there are no first derivatives (no damping friction), we don't need to convert it into a 4x4 first-order system. We can guess the solution is a pure sine/cosine wave:
$$ \mathbf{X} = \mathbf{v} \cos(\omega t) $$

If we substitute this into the equation, the second derivative produces a $-\omega^2$, giving us an eigenvalue problem!
$$ \mathbf{A}\mathbf{v} = -\omega^2 \mathbf{v} $$
So the eigenvalues of the matrix $\mathbf{A}$ are equal to $-\omega^2$. 

By calculating the eigenvalues of the stiffness matrix, engineers can find the **Normal Modes** of the system—the specific resonant frequencies ($\omega$) at which both train cars will oscillate perfectly in sync with each other!
