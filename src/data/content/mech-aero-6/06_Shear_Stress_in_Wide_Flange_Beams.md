# Shear Stress in Wide-Flange Beams

Wide-flange beams (I-beams and H-beams) are universally used in structural steel construction because their shape is highly optimized to resist bending moments (by concentrating material in the flanges far from the Neutral Axis to maximize $I$). 

However, we must also understand how this highly optimized shape handles transverse shear forces.

## 1. The Shear Distribution Profile

Applying the Shear Formula ($\tau = VQ/It$) to an I-beam reveals a dramatically different stress profile than the smooth parabola of a solid rectangle.

1.  **In the Flanges:** The flanges are very wide (large $t$). Therefore, the shear stress $\tau$ in the flanges is incredibly small. As you move from the outer edge toward the web, $Q$ increases slowly, so the stress profile is a very shallow parabola.
2.  **At the Flange-Web Junction:** The geometry experiences a massive discontinuity. The width $t$ abruptly drops from the wide flange ($b_f$) to the very thin web ($t_w$). Because $t$ is in the denominator of the shear formula, the shear stress instantly spikes.
3.  **In the Web:** The web is very thin (small $t$). The stress in the web is massive. As you move down the web toward the Neutral Axis, $Q$ increases further, creating a steep parabola that reaches absolute maximum exactly at the Neutral Axis.

## 2. The Role of the Web

Integrating the shear stress profile over the area of the cross-section yields a critical engineering insight:

*   The massive flanges, which do almost all the work resisting the bending moment $M$, carry practically **zero** transverse shear force (usually less than 5% of the total).
*   The thin vertical web carries almost **100%** of the entire transverse shear force $V$ applied to the beam.

## 3. Simplified Design Assumption

Because the stress in the web is so high and the profile is relatively flat (a very steep parabola), structural steel design codes permit a massive simplification.

Instead of calculating $Q$ and finding the exact maximum stress at the Neutral Axis, engineers simply assume that the thin rectangular web carries the *entire* shear force uniformly.

The **Average Web Shear Stress** is calculated as:
$$ \tau_{avg} = \frac{V}{A_{web}} = \frac{V}{t_w \cdot d} $$
Where:
*   $V$ is the total internal shear force.
*   $t_w$ is the thickness of the web.
*   $d$ is the total depth of the entire beam (from the very top of the top flange to the bottom of the bottom flange).

This simplified average stress is usually within 10% of the true $\tau_{max}$ calculated by the rigorous $VQ/It$ formula, making it a perfectly safe and rapid tool for steel design.
