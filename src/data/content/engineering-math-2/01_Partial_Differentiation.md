# Partial Differentiation

Welcome to the comprehensive guide on **Partial Differentiation**. In single-variable calculus, we dealt with functions of a single variable, like $f(x)$. However, in the real world—especially in physics, thermodynamics, and fluid mechanics—systems depend on multiple variables simultaneously. For example, the temperature $T$ in a room depends on the $x$, $y$, and $z$ coordinates, as well as time $t$. 

When a function has multiple variables, we cannot just take "the derivative." We must ask: **"How does the function change when we vary *one* specific variable, while holding all the other variables strictly constant?"** This is the core concept of a partial derivative.

---

## 1. The Definition of a Partial Derivative

For a function of two variables $f(x, y)$, there are two first-order partial derivatives:
1. **With respect to $x$:** Denoted as $\frac{\partial f}{\partial x}$ or $f_x$. We treat $y$ as a constant and differentiate normally with respect to $x$.
2. **With respect to $y$:** Denoted as $\frac{\partial f}{\partial y}$ or $f_y$. We treat $x$ as a constant and differentiate normally with respect to $y$.

### The Formal Limit Definition
Just like standard derivatives, partial derivatives have a rigorous limit definition:

$$ \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h} $$
$$ \frac{\partial f}{\partial y} = \lim_{h \to 0} \frac{f(x, y+h) - f(x, y)}{h} $$

However, in practice, you rarely need to use limits. You simply use the standard rules of differentiation (Power Rule, Product Rule, Chain Rule) while mentally pretending the other variables are just numbers like $5$ or $\pi$.

---

## 2. Worked Examples: First-Order Partial Derivatives

Let's dive straight into solving problems. The key trick is mental isolation: when finding $f_x$, imagine $y$ is just a constant number.

### Example 1: A Basic Polynomial
**Problem:** Let $f(x, y) = 3x^2y^4 - 5x + 2y^3$. Find both first-order partial derivatives $f_x$ and $f_y$.

**Step-by-Step Solution:**
**Finding $f_x$ (Treat $y$ as a constant):**
1. Look at the first term: $3x^2y^4$. Since $3y^4$ acts as a constant coefficient, the derivative of $x^2$ is $2x$. The term becomes $3(2x)y^4 = 6xy^4$.
2. Look at the second term: $-5x$. The derivative with respect to $x$ is $-5$.
3. Look at the third term: $2y^3$. Since this term contains no $x$ at all, it is purely a constant. Its derivative with respect to $x$ is $0$.
4. **Final Answer for $f_x$:**
   $$ f_x(x,y) = 6xy^4 - 5 $$

**Finding $f_y$ (Treat $x$ as a constant):**
1. First term: $3x^2y^4$. Here, $3x^2$ is the constant coefficient. The derivative of $y^4$ is $4y^3$. The term becomes $3x^2(4y^3) = 12x^2y^3$.
2. Second term: $-5x$. This contains no $y$, so it acts as a constant. Its derivative with respect to $y$ is $0$.
3. Third term: $2y^3$. The derivative is $6y^2$.
4. **Final Answer for $f_y$:**
   $$ f_y(x,y) = 12x^2y^3 + 6y^2 $$

---

### Example 2: Using the Product and Chain Rules
**Problem:** Let $g(x, y) = x^2 \sin(xy)$. Find $\frac{\partial g}{\partial x}$ and $\frac{\partial g}{\partial y}$.

**Step-by-Step Solution:**
**Finding $\frac{\partial g}{\partial x}$ (Treat $y$ as constant):**
Here, we have $x$ multiplied by another function of $x$ (which is $\sin(xy)$). We **must** use the Product Rule: $\frac{d}{dx}[u \cdot v] = u'v + uv'$.
- Let $u = x^2$, so $u' = 2x$.
- Let $v = \sin(xy)$. To find $v'$, we use the Chain Rule. The derivative of the outside ($\sin$) is $\cos$. The derivative of the inside ($xy$) with respect to $x$ is $y$. So, $v' = y\cos(xy)$.
- Assemble using the Product Rule:
  $$ \frac{\partial g}{\partial x} = (2x)\sin(xy) + (x^2)(y\cos(xy)) $$
  $$ \frac{\partial g}{\partial x} = 2x\sin(xy) + x^2y\cos(xy) $$

**Finding $\frac{\partial g}{\partial y}$ (Treat $x$ as constant):**
Look at $g(x,y) = x^2 \sin(xy)$. Because $x$ is constant, the $x^2$ out front is just a constant multiplier. We do **not** need the Product Rule here!
- The constant multiplier $x^2$ stays out front.
- We take the derivative of $\sin(xy)$ with respect to $y$. Using the Chain Rule, the derivative of the inside ($xy$) with respect to $y$ is $x$.
- Multiply them together:
  $$ \frac{\partial g}{\partial y} = x^2 \cdot [x \cos(xy)] = x^3\cos(xy) $$

---

## 3. Higher-Order Partial Derivatives

Just as you can take a second derivative in single-variable calculus, you can take second (or third, or fourth) partial derivatives. For a function $f(x,y)$, there are four second-order partial derivatives:

1. $f_{xx} = \frac{\partial^2 f}{\partial x^2}$ (Differentiate with respect to $x$, then $x$ again)
2. $f_{yy} = \frac{\partial^2 f}{\partial y^2}$ (Differentiate with respect to $y$, then $y$ again)
3. $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (Differentiate with respect to $x$, then with respect to $y$)
4. $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ (Differentiate with respect to $y$, then with respect to $x$)

> [!TIP]
> **Clairaut's Theorem (Equality of Mixed Partials):** For almost all functions you will encounter in engineering (specifically, functions whose second partial derivatives are continuous), the order of differentiation does not matter. Therefore:
> $$ f_{xy} = f_{yx} $$
> This is a fantastic way to double-check your work during an exam!

### Example 3: Second-Order Partials
**Problem:** Verify Clairaut's Theorem for $f(x,y) = e^{2x}\ln(y)$.

**Step-by-Step Solution:**
**1. Find the first derivatives:**
- $f_x$ (treat $y$ as constant): The $\ln(y)$ is a constant multiplier. The derivative of $e^{2x}$ is $2e^{2x}$.
  $$ f_x = 2e^{2x}\ln(y) $$
- $f_y$ (treat $x$ as constant): The $e^{2x}$ is a constant multiplier. The derivative of $\ln(y)$ is $\frac{1}{y}$.
  $$ f_y = \frac{e^{2x}}{y} = e^{2x}y^{-1} $$

**2. Find the mixed partial $f_{xy}$ (Take $f_x$ and differentiate it with respect to $y$):**
- Start with $f_x = 2e^{2x}\ln(y)$.
- Differentiate with respect to $y$ (treat $x$ as constant): The $2e^{2x}$ is a constant. The derivative of $\ln(y)$ is $1/y$.
  $$ f_{xy} = 2e^{2x} \cdot \frac{1}{y} = \frac{2e^{2x}}{y} $$

**3. Find the mixed partial $f_{yx}$ (Take $f_y$ and differentiate it with respect to $x$):**
- Start with $f_y = e^{2x}y^{-1}$.
- Differentiate with respect to $x$ (treat $y$ as constant): The $y^{-1}$ is a constant. The derivative of $e^{2x}$ is $2e^{2x}$.
  $$ f_{yx} = 2e^{2x} \cdot y^{-1} = \frac{2e^{2x}}{y} $$

**Conclusion:**
Since $f_{xy} = \frac{2e^{2x}}{y}$ and $f_{yx} = \frac{2e^{2x}}{y}$, we have verified that $f_{xy} = f_{yx}$. Clairaut's Theorem holds true!

---

## 4. The Gradient Vector

The partial derivatives can be grouped together into a highly useful mathematical object called the **Gradient Vector**, denoted by $\nabla f$ (pronounced "del f"). 

The gradient is a vector that points in the direction of the *steepest ascent* of the function. For a 3D surface $z = f(x,y)$, if you stand at a point $(x,y)$, the gradient vector tells you which direction you need to walk to go uphill the fastest.

$$ \nabla f(x,y) = \langle f_x, f_y \rangle = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j} $$

### Example 4: Calculating the Gradient
**Problem:** Find the gradient of $f(x, y, z) = x^2y + y^2z^3$ at the point $P(1, 2, -1)$.

**Step-by-Step Solution:**
**1. Find the three partial derivatives:**
- $f_x = \frac{\partial}{\partial x}(x^2y + y^2z^3) = 2xy + 0 = 2xy$
- $f_y = \frac{\partial}{\partial y}(x^2y + y^2z^3) = x^2(1) + 2y(z^3) = x^2 + 2yz^3$
- $f_z = \frac{\partial}{\partial z}(x^2y + y^2z^3) = 0 + y^2(3z^2) = 3y^2z^2$

**2. Evaluate the partials at the point $(1, 2, -1)$:**
- Substitute $x=1$, $y=2$, $z=-1$:
- $f_x(1,2,-1) = 2(1)(2) = 4$
- $f_y(1,2,-1) = (1)^2 + 2(2)(-1)^3 = 1 + 4(-1) = 1 - 4 = -3$
- $f_z(1,2,-1) = 3(2)^2(-1)^2 = 3(4)(1) = 12$

**3. Assemble the gradient vector:**
$$ \nabla f(1, 2, -1) = \langle 4, -3, 12 \rangle = 4\hat{i} - 3\hat{j} + 12\hat{k} $$
This vector indicates the direction of maximum increase of the function from the point $(1, 2, -1)$.

---

## 5. Total Differential and Linear Approximation

If we want to estimate how much a function $f(x,y)$ changes when we make small changes to $x$ (denoted $dx$) and $y$ (denoted $dy$), we use the **Total Differential**, $df$.

$$ df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy $$

This formula states that the total change in the function is the sum of the change caused by moving in the $x$-direction plus the change caused by moving in the $y$-direction.

### Example 5: Error Analysis using the Total Differential
**Problem:** The volume of a cylinder is given by $V = \pi r^2 h$. The radius is measured as $r = 5\text{ cm}$ with a maximum error of $dr = 0.1\text{ cm}$. The height is measured as $h = 10\text{ cm}$ with a maximum error of $dh = 0.2\text{ cm}$. Use the total differential to estimate the maximum error in the calculated volume.

**Step-by-Step Solution:**
**1. Find the partial derivatives of $V$:**
- With respect to $r$ (treat $h$ as constant):
  $$ V_r = \frac{\partial V}{\partial r} = 2\pi rh $$
- With respect to $h$ (treat $r$ as constant):
  $$ V_h = \frac{\partial V}{\partial h} = \pi r^2 $$

**2. Write the total differential equation:**
$$ dV = V_r dr + V_h dh = (2\pi rh)dr + (\pi r^2)dh $$

**3. Substitute the known values:**
- $r = 5$, $h = 10$
- $dr = 0.1$, $dh = 0.2$
$$ dV = (2\pi (5)(10))(0.1) + (\pi (5)^2)(0.2) $$
$$ dV = (100\pi)(0.1) + (25\pi)(0.2) $$
$$ dV = 10\pi + 5\pi = 15\pi \approx 47.12\text{ cm}^3 $$

**Conclusion:**
The maximum estimated error in the volume calculation is $15\pi\text{ cm}^3$. This demonstrates how partial differentiation is heavily used in experimental error analysis.
