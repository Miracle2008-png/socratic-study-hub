import os

math_file = r"C:\Users\victus\.gemini\antigravity\worktrees\claude n antigravity\study-platform-builder-prompt\src\data\mathContentExt.ts"
phys_file = r"C:\Users\victus\.gemini\antigravity\worktrees\claude n antigravity\study-platform-builder-prompt\src\data\physicsContentExt.ts"

new_math = """
  'Taylor Series Derivation': `
# Taylor Series: Polynomial Approximation

A Taylor series is an infinite sum of terms that are expressed in terms of the function's derivatives at a single point.

## Step 1: The Goal
We want to approximate a smooth function $f(x)$ near a point $x = a$ using a polynomial:
$$ P(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\dots $$

## Step 2: Matching the Value
For the polynomial to match the function exactly at $x = a$:
$$ P(a) = f(a) $$
$$ c_0 = f(a) $$

## Step 3: Matching the First Derivative
Take the derivative of $P(x)$:
$$ P'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \\dots $$
To match the slope at $x = a$:
$$ P'(a) = f'(a) \\implies c_1 = f'(a) $$

## Step 4: Matching the Second Derivative
Take the second derivative:
$$ P''(x) = 2c_2 + 3 \\cdot 2 c_3(x-a) + \\dots $$
Evaluate at $x = a$:
$$ P''(a) = f''(a) \\implies 2c_2 = f''(a) \\implies c_2 = \\frac{f''(a)}{2} $$

## Step 5: The General Term
Continuing for the $n$-th derivative:
$$ P^{(n)}(a) = n! c_n \\implies c_n = \\frac{f^{(n)}(a)}{n!} $$

## Step 6: The Infinite Series
$$ f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n $$
Q.E.D.
`,
"""

new_phys = """
  'The Dirac Equation Derivation': `
# The Dirac Equation: Marrying Relativity and Quantum Mechanics

In 1928, Paul Dirac sought to reconcile quantum mechanics with special relativity.

## Step 1: Relativistic Energy
$$ E^2 = p^2c^2 + m^2c^4 $$

## Step 2: Quantum Operators
$$ E \\rightarrow i\\hbar \\frac{\\partial}{\\partial t} $$
$$ \\mathbf{p} \\rightarrow -i\\hbar \\nabla $$

## Step 3: The Klein-Gordon Equation
Substituting these gives a second-order wave equation:
$$ -\\hbar^2 \\frac{\\partial^2 \\psi}{\\partial t^2} = ( -\\hbar^2 c^2 \\nabla^2 + m^2 c^4 ) \\psi $$

## Step 4: The Dirac Matrices
Dirac proposed a linear Hamiltonian:
$$ E = c \\boldsymbol{\\alpha} \\cdot \\mathbf{p} + \\beta mc^2 $$
For this to satisfy $E^2 = p^2c^2 + m^2c^4$, $\\boldsymbol{\\alpha}$ and $\\beta$ must be $4 \\times 4$ anticommuting matrices.

## Step 5: The Dirac Equation
$$ i\\hbar \\frac{\\partial \\psi}{\\partial t} = \\left( -ic\\hbar \\boldsymbol{\\alpha} \\cdot \\nabla + \\beta mc^2 \\right) \\psi $$
This implicitly describes antimatter!
`,
"""

def append_to_file(filepath, content_to_append):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "export const" in content:
        parts = content.split("{\n", 1)
        if len(parts) == 2:
            new_content = parts[0] + "{\n" + content_to_append + parts[1]
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
                print(f"Appended to {filepath}")

append_to_file(math_file, new_math)
append_to_file(phys_file, new_phys)
