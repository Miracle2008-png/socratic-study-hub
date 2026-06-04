# 9. Autonomous Equations & Phase Lines

Sometimes in engineering, we do not need to find the exact algebraic solution $y(t)$ to an equation. Often, the equation is impossible to integrate. 
Instead, we just want to know the **long-term behavior** of the system. Will it explode to infinity? Will it settle down to a stable state? Will it crash to zero?

We can answer these questions instantly by performing a **Qualitative Analysis** on a specific class of ODEs known as Autonomous Equations.

### Autonomous Equations
A first-order ODE is **autonomous** if the independent variable $t$ does not appear anywhere on the right-hand side. The rate of change depends *only* on the current state $y$.
$$ \frac{dy}{dt} = f(y) $$

*Examples:*
*   $y' = 3y^2 - y$ (Autonomous)
*   $y' = 3y - t$ (Non-Autonomous, because of the $t$)

### Equilibrium Solutions (Critical Points)
If a system stops changing, its rate of change is zero ($y' = 0$). 
To find the equilibrium states of an autonomous equation, simply set $f(y) = 0$ and solve for $y$. These constant solutions $y(t) = c$ represent states where the system rests forever.

### Phase Lines and Stability
To determine what the system does when it is *not* at equilibrium, we draw a **Phase Line**.
1.  Draw a vertical line representing the y-axis.
2.  Mark the equilibrium points (where $f(y) = 0$). These points divide the line into intervals.
3.  Pick a test value for $y$ in each interval and plug it into $f(y)$ to see if $y'$ is positive or negative.
4.  If $y'$ is positive, draw an UP arrow $\uparrow$ (the state is increasing).
5.  If $y'$ is negative, draw a DOWN arrow $\downarrow$ (the state is decreasing).

By looking at the arrows, you can instantly classify the stability of the equilibrium points:

1.  **Asymptotically Stable (Attractor / Sink):** Arrows point *towards* the equilibrium point from both sides ($\downarrow \bullet \uparrow$). If the system is perturbed, it will naturally return to this stable state.
2.  **Unstable (Repeller / Source):** Arrows point *away* from the equilibrium point on both sides ($\uparrow \bullet \downarrow$). If the system is bumped even slightly, it will rapidly diverge away from this state.
3.  **Semi-Stable (Node):** Arrows point in the same direction on both sides ($\uparrow \bullet \uparrow$ or $\downarrow \bullet \downarrow$).

### Worked Example
**Problem:** Analyze the stability of the autonomous equation $y' = y^2 - 4y + 3$.

**Step 1: Find Equilibria**
Set $y' = 0$:
$$ y^2 - 4y + 3 = 0 $$
$$ (y-1)(y-3) = 0 $$
Equilibrium points are $y=1$ and $y=3$.

**Step 2: Construct the Phase Line**
The points $1$ and $3$ divide the y-axis into three regions: $y < 1$, $1 < y < 3$, and $y > 3$.

*   Test $y=0$: $f(0) = (0)^2 - 4(0) + 3 = +3$. Since it's positive, draw an UP arrow below 1. ($\uparrow$)
*   Test $y=2$: $f(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Since it's negative, draw a DOWN arrow between 1 and 3. ($\downarrow$)
*   Test $y=4$: $f(4) = (4)^2 - 4(4) + 3 = 16 - 16 + 3 = +3$. Since it's positive, draw an UP arrow above 3. ($\uparrow$)

**Step 3: Classify**
*   At $y=3$: The arrow below points down, the arrow above points up. They are moving away. **$y=3$ is Unstable.**
*   At $y=1$: The arrow below points up, the arrow above points down. They are moving toward it. **$y=1$ is Stable.**

*Conclusion:* No matter where this system starts (unless it starts exactly at or above 3), it will eventually settle down and rest exactly at $y=1$ as $t \to \infty$.
