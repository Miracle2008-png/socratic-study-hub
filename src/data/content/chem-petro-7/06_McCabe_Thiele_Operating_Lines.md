# The McCabe-Thiele Method: Operating Lines

The McCabe-Thiele method (1925) is an ingenious graphical technique for determining the number of theoretical stages required to achieve a specific separation in a distillation column. It leverages the Constant Molal Overflow (CMO) assumption to plot mass balance lines directly on the $x-y$ equilibrium diagram.

To solve the graphical problem, we must plot three straight lines: the Rectifying Operating Line, the Stripping Operating Line, and the Feed Line (q-line).

## 1. The Rectifying Operating Line (ROL)

Consider a control volume enclosing the top of the column (the condenser) down to just above tray $n$ in the rectifying section.
An overall mass balance gives: $V = L + D$
A species mass balance for the light component gives: $V \cdot y_{n+1} = L \cdot x_n + D \cdot x_D$

We are trying to relate the composition of the vapour rising *from* tray $n+1$ to the composition of the liquid falling *from* tray $n$. These two streams are passing each other between the trays.

Rearranging to solve for $y_{n+1}$:
$$ y_{n+1} = \frac{L}{V} x_n + \frac{D}{V} x_D $$

Because of CMO, $L$ and $V$ are constant throughout the rectifying section. Therefore, this is the equation of a straight line on the $x-y$ diagram.
*   **Slope:** $L/V$. Because $V = L + D$, the slope is always less than 1.
*   **y-intercept:** $(D/V) x_D$.
*   **Key Point:** If you plug $x_n = x_D$ into the equation, you find $y_{n+1} = x_D$. The ROL always intersects the $y=x$ diagonal line at the point $(x_D, x_D)$, which is the target distillate purity.

## 2. The Stripping Operating Line (SOL)

Now consider a control volume enclosing the bottom of the column (the reboiler) up to just below tray $m$ in the stripping section.
Overall balance: $\bar{L} = \bar{V} + B$
Species balance: $\bar{L} \cdot x_{m-1} = \bar{V} \cdot y_m + B \cdot x_B$

Rearranging to solve for the vapour passing the liquid:
$$ y_m = \frac{\bar{L}}{\bar{V}} x_{m-1} - \frac{B}{\bar{V}} x_B $$

This is the Stripping Operating Line.
*   **Slope:** $\bar{L}/\bar{V}$. Because $\bar{L} = \bar{V} + B$, the slope is always greater than 1.
*   **Key Point:** If you plug $x_{m-1} = x_B$, you get $y_m = x_B$. The SOL always intersects the $y=x$ diagonal line at the point $(x_B, x_B)$, which is the target bottoms purity.

## 3. The Feed Condition Line (q-line)

The ROL and the SOL must intersect at exactly one point on the graph. The location of this intersection is determined entirely by the thermal condition of the feed stream.

When the feed ($F$) enters the column, it splits into liquid and vapour, adding to the flows in the stripping and rectifying sections.
We define a crucial parameter, **$q$**:
$$ q = \frac{\text{Heat required to vaporise 1 mole of feed}}{\text{Molar latent heat of vaporisation}} $$

Practically, $q$ represents the fraction of the feed that is liquid:
*   **$q = 1$**: Subcooled liquid feed. The cold feed condenses some rising vapour. The intersection point shifts right.
*   **$q = 1$**: Saturated liquid feed (at its bubble point). The feed goes entirely down the column. $\bar{L} = L + F$.
*   **$0 < q < 1$**: Two-phase feed (partially vaporised). $q$ is the liquid fraction, $(1-q)$ is the vapour fraction.
*   **$q = 0$**: Saturated vapour feed (at its dew point). The feed goes entirely up the column. $V = \bar{V} + F$.
*   **$q < 0$**: Superheated vapour feed. It vaporises some falling liquid.

The equation for the $q$-line (the locus of all possible intersections between the ROL and SOL) is derived from mass and enthalpy balances around the feed tray:
$$ y = \frac{q}{q-1} x - \frac{z_F}{q-1} $$

*   The $q$-line always originates on the $y=x$ diagonal at the point $(z_F, z_F)$, representing the feed composition.
*   The slope of the line is $\frac{q}{q-1}$.
    *   Saturated liquid ($q=1$): Slope is $\infty$ (vertical line).
    *   Saturated vapour ($q=0$): Slope is $0$ (horizontal line).

To draw the complete operating lines:
1. Plot $(z_F, z_F)$ and draw the $q$-line based on the feed thermal condition.
2. Plot $(x_D, x_D)$ and draw the ROL with slope $L/V$ until it hits the $q$-line.
3. Plot $(x_B, x_B)$ and draw the SOL from that point directly to the intersection of the ROL and the $q$-line.
