# Force & Newton's Laws

## 1. Newton's Three Laws of Motion

1. **First Law (Inertia):** A body at rest remains at rest, and a body in motion remains in uniform motion in a straight line, unless acted upon by a net external force. $ \sum \mathbf{F} = 0 \implies \mathbf{v} = \text{const} $.
2. **Second Law (Dynamics):** The rate of change of momentum of a body is directly proportional to the net external force acting on it. For constant mass: $ \sum \mathbf{F} = m\mathbf{a} $.
3. **Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction. $ \mathbf{F}_{AB} = -\mathbf{F}_{BA} $.

## 2. Solving Dynamics Problems

**Procedure:**
1. Isolate the object of interest.
2. Draw a Free Body Diagram (FBD), indicating all external forces (gravity, normal, friction, tension).
3. Choose a convenient coordinate system.
4. Resolve forces into components.
5. Apply $ \sum F_x = ma_x $ and $ \sum F_y = ma_y $.

**Example 1: Mass on an Inclined Plane**
A block of mass $ m $ is placed on a rough inclined plane with angle $ \theta $. The coefficient of kinetic friction is $ \mu_k $. Find the acceleration of the block as it slides down.

*Step 1: Identify Forces.*
- Gravity: $ mg $ acting straight down.
- Normal force: $ N $ perpendicular to the plane.
- Kinetic friction: $ f_k = \mu_k N $ acting up the plane (opposing motion).

*Step 2: Set Coordinate System.*
Let $ x $ be parallel to the incline (downward is positive) and $ y $ be perpendicular to the incline.

*Step 3: Resolve Forces.*
- Gravity $ x $-component: $ mg \sin\theta $
- Gravity $ y $-component: $ -mg \cos\theta $

*Step 4: Apply Newton's Second Law.*
In the $ y $-direction (no acceleration):
$$ \sum F_y = N - mg \cos\theta = 0 \implies N = mg \cos\theta $$

In the $ x $-direction:
$$ \sum F_x = mg \sin\theta - f_k = ma $$
Substitute $ f_k = \mu_k N = \mu_k mg \cos\theta $:
$$ mg \sin\theta - \mu_k mg \cos\theta = ma $$
$$ a = g(\sin\theta - \mu_k \cos\theta) $$

## 3. Coupled Systems
When multiple objects are connected, we can often analyze them as a system or individually.

**Example 2: Atwood Machine**
Two masses $ m_1 $ and $ m_2 $ ($ m_2 > m_1 $) are connected by a massless, inextensible string over a frictionless, massless pulley. Find the acceleration of the masses and the tension in the string.

*Step 1: FBD for $ m_1 $ (moves up).*
Forces: Tension $ T $ (up), Gravity $ m_1 g $ (down).
$$ \sum F = T - m_1 g = m_1 a $$

*Step 2: FBD for $ m_2 $ (moves down).*
Forces: Tension $ T $ (up), Gravity $ m_2 g $ (down).
$$ \sum F = m_2 g - T = m_2 a $$

*Step 3: Solve the system of equations.*
Add the two equations to eliminate $ T $:
$$ (T - m_1 g) + (m_2 g - T) = m_1 a + m_2 a $$
$$ m_2 g - m_1 g = (m_1 + m_2) a $$
$$ a = g \frac{m_2 - m_1}{m_1 + m_2} $$

Substitute $ a $ back into the first equation to find $ T $:
$$ T = m_1(a + g) = m_1 \left( g \frac{m_2 - m_1}{m_1 + m_2} + g \right) = m_1 g \left( \frac{m_2 - m_1 + m_1 + m_2}{m_1 + m_2} \right) = \frac{2m_1 m_2 g}{m_1 + m_2} $$

## 4. Non-Inertial Reference Frames
In a frame accelerating with $ \mathbf{A} $ relative to an inertial frame, Newton's second law holds if we introduce a fictitious "inertial force":
$$ m\mathbf{a}' = \sum \mathbf{F}_{\text{real}} - m\mathbf{A} $$
For rotating frames, we must include the centrifugal force $ m \omega^2 \mathbf{r} $ and the Coriolis force $ -2m(\boldsymbol{\omega} \times \mathbf{v}') $.
