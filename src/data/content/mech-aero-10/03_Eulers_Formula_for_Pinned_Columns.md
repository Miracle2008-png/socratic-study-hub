# Euler's Formula for Pinned Columns

In 1757, the brilliant Swiss mathematician Leonhard Euler mathematically solved the buckling problem. He derived the exact equation for the Critical Load ($P_{cr}$) that causes an ideal, perfectly straight column to buckle.

## 1. The Mathematical Model

We start with the simplest case: a column of length $L$ supported by pin joints at both the top and bottom. A compressive load $P$ is applied.

We assume the load $P$ has just reached $P_{cr}$, pushing the column into neutral equilibrium, causing it to hold a slight, bent shape (deflection $v$).

If we make a cut in this slightly bent column at coordinate $x$, the internal bending moment is simply the applied load $P$ multiplied by the deflection $v$:
$$ M(x) = -P \cdot v $$

## 2. The Differential Equation

We substitute this internal moment into the governing differential equation for the elastic curve ($EI v'' = M$):

$$ EI \frac{d^2v}{dx^2} = -P \cdot v $$
$$ \frac{d^2v}{dx^2} + \left(\frac{P}{EI}\right)v = 0 $$

This is a classic second-order, linear, homogeneous differential equation. From calculus, the general solution to this specific equation is always a combination of sine and cosine functions:
$$ v(x) = C_1 \sin\left(x\sqrt{\frac{P}{EI}}\right) + C_2 \cos\left(x\sqrt{\frac{P}{EI}}\right) $$

## 3. Applying Boundary Conditions

To solve for the constants, we look at the physical supports. Because the column is pinned at both ends, the deflection $v$ must be zero at $x=0$ and at $x=L$.

1.  **At $x=0, v=0$:**
    $$ 0 = C_1 \sin(0) + C_2 \cos(0) \implies C_2 = 0 $$
    The equation simplifies to $v(x) = C_1 \sin(x\sqrt{P/EI})$.

2.  **At $x=L, v=0$:**
    $$ 0 = C_1 \sin\left(L\sqrt{\frac{P}{EI}}\right) $$

For this equation to be true, either $C_1 = 0$ (which means the column is perfectly straight, $v=0$ everywhere, and hasn't buckled), OR the sine term must be zero. 

A sine function equals zero when the angle is a multiple of $\pi$ ($n\pi = 0, \pi, 2\pi, \dots$). Therefore:
$$ L\sqrt{\frac{P}{EI}} = n\pi $$

## 4. Euler's Critical Load ($P_{cr}$)

Rearranging the equation to solve for the load $P$:
$$ P = \frac{n^2 \pi^2 EI}{L^2} $$

The lowest possible load that causes buckling occurs when $n=1$ (the fundamental buckling mode, a single continuous bow).
This gives us the famous **Euler's Critical Load Formula**:

$$ P_{cr} = \frac{\pi^2 EI}{L^2} $$

This stunningly elegant equation proves that the buckling strength of a column depends entirely on geometry ($I, L$) and material stiffness ($E$). The yield strength of the material ($\sigma_Y$) is not in the equation.
