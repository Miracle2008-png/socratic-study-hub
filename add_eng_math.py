import re

def add_engineering_maths():
    try:
        with open('src/data/mathContentExt.ts', 'r', encoding='utf-8') as f:
            content = f.read()

        new_topics = """
  'Engineering Mathematics 1': `
# Engineering Mathematics 1: Foundations

## 1. Complex Numbers
Complex numbers extend the real number system and are essential in engineering, particularly for analyzing AC circuits, signal processing, and control systems.
A complex number $z$ is written as $z = x + iy$, where $i^2 = -1$.
Euler's formula provides a powerful polar representation: $e^{i\\\\theta} = \\\\cos\\\\theta + i\\\\sin\\\\theta$.

### Example
Express $z = 1 + i$ in polar form.

**Solution:**
Magnitude: $r = \\\\sqrt{1^2 + 1^2} = \\\\sqrt{2}$.
Angle: $\\\\theta = \\\\arctan(1/1) = \\\\frac{\\\\pi}{4}$.
So, $z = \\\\sqrt{2} e^{i\\\\pi/4}$.

## 2. Matrices and Determinants
Matrices are rectangular arrays of numbers used to solve systems of linear equations and model transformations in computer graphics and mechanics.
The determinant of a $2 \\\\times 2$ matrix is $|A| = ad - bc$. If the determinant is zero, the matrix is singular (non-invertible).

## 3. Ordinary Differential Equations (ODEs)
Many physical laws (Newton's cooling, radioactive decay, mass-spring systems) are expressed as ODEs. 
A first-order linear ODE takes the form $\\\\frac{dy}{dt} + P(t)y = Q(t)$ and can be solved using an integrating factor.
`,
  'Engineering Mathematics 2': `
# Engineering Mathematics 2: Advanced Calculus & Transforms

## 1. Laplace Transforms
The Laplace transform converts differential equations into simpler algebraic equations in the s-domain. It is the backbone of control theory.
$\\\\mathcal{L}\\\\{f(t)\\\\} = \\\\int_0^\\\\infty e^{-st} f(t) dt$.

### Example
Find the Laplace transform of $f(t) = e^{at}$.

**Solution:**
$\\\\mathcal{L}\\\\{e^{at}\\\\} = \\\\int_0^\\\\infty e^{-st} e^{at} dt = \\\\int_0^\\\\infty e^{-(s-a)t} dt = \\\\frac{1}{s-a}$.

## 2. Fourier Series
Any periodic signal can be decomposed into an infinite sum of sines and cosines. This is crucial for signal processing, telecommunications, and vibrations.
$f(t) = a_0 + \\\\sum_{n=1}^\\\\infty (a_n \\\\cos(n\\\\omega_0 t) + b_n \\\\sin(n\\\\omega_0 t))$.

## 3. Vector Calculus
Vector calculus deals with vector fields. It forms the foundation of fluid mechanics and electromagnetics (Maxwell's equations). Key operators include the Gradient, Divergence, and Curl.
`,
  'Engineering Mathematics 3': `
# Engineering Mathematics 3: Numerical Methods & Probability

## 1. Numerical Analysis
When exact analytical solutions are impossible, numerical methods approximate solutions using algorithms. Methods include the Newton-Raphson method for root finding, and Runge-Kutta for solving ODEs.

### Example
Use the Newton-Raphson method formula to find roots.

**Solution:**
$x_{n+1} = x_n - \\\\frac{f(x_n)}{f'(x_n)}$.

## 2. Probability and Statistics
Engineering systems deal with uncertainty, noise, and tolerances. Important distributions include the Normal, Poisson, and Binomial distributions.

## 3. Partial Differential Equations (PDEs)
PDEs describe systems with multiple independent variables, such as heat diffusion ($u_t = \\\\alpha u_{xx}$) or wave propagation ($u_{tt} = c^2 u_{xx}$). Solving them often requires techniques like separation of variables.
`,
"""
        # Insert right before the end of the dictionary
        content = content.replace("};\n", new_topics + "\n};\n")

        with open('src/data/mathContentExt.ts', 'w', encoding='utf-8') as f:
            f.write(content)

        print("Successfully added Engineering Mathematics 1, 2, and 3.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    add_engineering_maths()
