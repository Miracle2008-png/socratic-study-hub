# Wing Twist and Washout

A straight untwisted finite wing at uniform angle of attack tends to produce a non-optimal span loading with a tendency toward tip stall — the most dangerous stall pattern. **Wing twist** is the primary geometric tool for tailoring the spanwise lift distribution to achieve both aerodynamic efficiency and acceptable stall behavior.

## 1. Types of Wing Twist

**Geometric twist (washout when negative):**
The wing is physically rotated — different cross-sections are set at different angles relative to a reference plane. **Washout** means the trailing edge at the wingtip is raised relative to the root, reducing the local geometric angle of attack at the tip. Typical washout: 2–5° (tip chord pitched nose-down relative to root chord).

**Aerodynamic twist:**
Different airfoil sections are used along the span, each with a different zero-lift angle $\alpha_{L=0}$. Even at the same geometric angle, sections near the tip (with more negative $\alpha_{L=0}$) effectively see a lower effective angle of attack, reducing tip loading. Aerodynamic twist can also be used without any geometric rotation.

In practice, most wings use a combination of geometric and aerodynamic twist.

## 2. Effect of Washout on Stall Behavior

**Without washout (untapered, untwisted rectangular wing):**
The lift coefficient is approximately uniform across the span. At stall, the entire wing stalls simultaneously — sudden, severe loss of lift and roll control.

**With highly tapered wing (no twist):**
Taper tends to concentrate lift loading at the tips (the local $C_l$ near the tip exceeds the root $C_l$). Tips stall first. Ailerons become ineffective before the pilot receives clear stall warning. **Dangerous.**

**With washout applied to a tapered wing:**
Washout reduces the local angle of attack at the tip, reducing local $C_l$ at the tip relative to the root. Properly designed:
- Root reaches $C_{l,max}$ first → root stall initiates.
- Ailerons at the tip remain in attached flow → roll control maintained through stall.
- Burbling buffet from root stall provides clear tactile warning to the pilot.

## 3. Calculating Optimal Twist for Elliptical Loading

For a given planform (taper ratio $\lambda$, sweep $\Lambda$, aspect ratio $AR$), there is an optimal twist distribution $\varepsilon(y)$ that produces a perfectly elliptical span loading at the design lift coefficient $C_{L,design}$.

Using lifting line theory, the required twist at each spanwise station is:

$$\varepsilon(y) = \alpha_{eff,elliptical}(y) - \alpha_{eff,baseline}(y)$$

In practice, the designer selects a twist that gives elliptical loading at the single most important flight condition (cruise for transport aircraft, maximum endurance for reconnaissance aircraft).

At off-design conditions (takeoff, landing, high-speed cruise), the twist is suboptimal, but the penalty is modest. The critical insight is that twist "locks in" a specific loading distribution — unlike sweep or taper which affect $C_L$ slope broadly, twist shifts the distribution at fixed $C_L$.

## 4. Flexible Wing Aeroelastic Twist

Real wings are not rigid. Under aerodynamic loading, they bend and twist (aeroelastic deformation). This introduces a coupling between aerodynamics and structural mechanics:

**Wash-out from flexibility:** Most aft-swept wings naturally twist nose-down (washout) as lift loading bends the wing tip upward relative to the root. This is actually aerodynamically beneficial — it prevents tip stall and reduces peak induced drag at maneuver conditions.

**Wash-in from forward sweep:** Forward-swept wings twist nose-up under load (wash-in), increasing tip angle of attack, increasing tip lift, moving closer to tip stall. This is an aeroelastic instability called **divergence** — it can destroy the wing. Addressing it requires very stiff (and therefore heavy) structure, or advanced composite material tailoring.

**Active load alleviation:** Modern aircraft like the Boeing 787 use differential aileron deflection during gusty conditions to deliberately redistribute wing loading, reducing peak bending moments and fatigue damage.
