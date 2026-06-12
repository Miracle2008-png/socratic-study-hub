# 04. Buoyancy and Stability

## 1. Introduction to Buoyancy

When a structure, such as a bridge pier, a ship, or an offshore platform, is partially or fully submerged in a fluid, it experiences an upward force known as the buoyant force. This force counters gravity and is fundamental to the stability of floating systems in civil and marine engineering.

The core principle governing this phenomenon was formulated over two millennia ago and is known as Archimedes' Principle.

## 2. Archimedes' Principle

Archimedes' Principle states that a body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. 
$$ F_B = \gamma_f V_{\text{disp}} $$
where:
- $F_B$ = Buoyant force
- $\gamma_f$ = Specific weight of the fluid
- $V_{\text{disp}}$ = Volume of the displaced fluid (the submerged volume of the object)

For a body floating in equilibrium, the buoyant force exactly balances the weight of the body ($W$):
$$ W = F_B \implies \gamma_{\text{body}} V_{\text{total}} = \gamma_f V_{\text{disp}} $$

The line of action of the buoyant force passes through the centroid of the displaced volume, a point referred to as the **Center of Buoyancy ($B$)**. The weight of the body acts downwards through its **Center of Gravity ($G$)**.

---

### Example 1: Flotation of a Concrete Block
**Problem:** A hollow concrete caisson, used in bridge foundations, is shaped as a rectangular box $10 \text{ m}$ long, $5 \text{ m}$ wide, and $6 \text{ m}$ high. The total mass of the caisson is $150,000 \text{ kg}$. Will the caisson float in seawater ($\rho_{sw} = 1025 \text{ kg/m}^3$)? If so, what is the depth of submersion (draft)?

**Solution:**
1. Calculate the total weight of the caisson:
$$ W = mg = 150,000 \times 9.81 = 1,471,500 \text{ N} $$

2. Calculate the maximum possible buoyant force (if fully submerged):
$$ V_{\text{total}} = 10 \times 5 \times 6 = 300 \text{ m}^3 $$
$$ F_{B,\max} = \rho_{sw} g V_{\text{total}} = 1025 \times 9.81 \times 300 = 3,016,575 \text{ N} $$
Since $F_{B,\max} > W$, the caisson will **float**.

3. Calculate the draft ($d$) at equilibrium:
In equilibrium, $F_B = W$.
$$ \rho_{sw} g (10 \times 5 \times d) = W $$
$$ 1025 \times 9.81 \times 50 \times d = 1,471,500 $$
$$ 502,762.5 \times d = 1,471,500 $$
$$ d = \frac{1,471,500}{502,762.5} = 2.927 \text{ m} $$
The caisson floats with a draft of approximately $2.93 \text{ m}$.

---

### Example 2: Submerged Tension
**Problem:** An anchor block made of concrete ($\rho_c = 2400 \text{ kg/m}^3$) is used to hold a buoy. The block has a volume of $0.8 \text{ m}^3$ and is completely submerged in fresh water ($\rho_w = 1000 \text{ kg/m}^3$). What is the tension in the cable lifting the block?

**Solution:**
The forces acting on the block are gravity (downward), buoyancy (upward), and cable tension $T$ (upward).
Sum of vertical forces: $T + F_B - W = 0$
$$ W = \rho_c g V = 2400 \times 9.81 \times 0.8 = 18,835.2 \text{ N} $$
$$ F_B = \rho_w g V = 1000 \times 9.81 \times 0.8 = 7,848 \text{ N} $$
$$ T = W - F_B = 18,835.2 - 7,848 = 10,987.2 \text{ N} \approx 11 \text{ kN} $$

---

## 3. Stability of Immersed and Floating Bodies

Stability determines whether a floating object, when subjected to a small angular displacement (e.g., from waves or wind), will return to its original position (stable), continue to roll over (unstable), or remain in the new position (neutrally stable).

### Completely Submerged Bodies
For submarines or weather balloons, stability depends purely on the relative locations of the Center of Gravity ($G$) and the Center of Buoyancy ($B$).
- If $B$ is **above** $G$, a righting moment is created, and the body is **stable**.
- If $B$ is **below** $G$, an overturning moment is created, and the body is **unstable**.

### Floating Bodies and the Metacenter
For bodies floating at the surface, the shape of the displaced volume changes as the body rolls, shifting the Center of Buoyancy laterally to a new position $B'$. 

The vertical line drawn upward from the new center of buoyancy $B'$ intersects the original vertical axis of symmetry at a point called the **Metacenter ($M$)**.
- If the Metacenter ($M$) is **above** the Center of Gravity ($G$), the body is **stable**.
- If $M$ is **below** $G$, the body is **unstable**.

The distance between $G$ and $M$ is known as the **metacentric height ($\overline{GM}$)**.
$$ \overline{GM} = \overline{BM} - \overline{BG} $$
where the metacentric radius $\overline{BM}$ is calculated from the second moment of area of the waterplane ($I$) and the displaced volume ($V_{\text{disp}}$):
$$ \overline{BM} = \frac{I}{V_{\text{disp}}} $$

---

### Example 3: Stability of a Pontoon
**Problem:** A rectangular pontoon is $12 \text{ m}$ long, $4 \text{ m}$ wide, and $3 \text{ m}$ deep. It floats in fresh water with a draft of $1.5 \text{ m}$. The center of gravity $G$ is located on the vertical axis of symmetry at $1.8 \text{ m}$ above the base. Determine if the pontoon is stable in roll (rotation about its longitudinal axis).

**Solution:**
1. Determine the displaced volume:
$$ V_{\text{disp}} = 12 \times 4 \times 1.5 = 72 \text{ m}^3 $$

2. Locate the Center of Buoyancy ($B$):
$B$ is at the centroid of the submerged volume, which is half the draft.
$$ \overline{KB} = \frac{1.5}{2} = 0.75 \text{ m} $$ (where $K$ is the keel or base).

3. Calculate distance $\overline{BG}$:
Since $G$ is $1.8 \text{ m}$ from the base ($\overline{KG} = 1.8 \text{ m}$):
$$ \overline{BG} = \overline{KG} - \overline{KB} = 1.8 - 0.75 = 1.05 \text{ m} $$

4. Calculate the moment of inertia of the waterplane area ($I$) about the longitudinal axis. The waterplane is a rectangle $12 \text{ m}$ long ($L$) by $4 \text{ m}$ wide ($b$). Roll occurs about the central longitudinal axis, so the width $b$ is cubed:
$$ I = \frac{L b^3}{12} = \frac{12 \times 4^3}{12} = 64 \text{ m}^4 $$

5. Calculate the metacentric radius ($\overline{BM}$):
$$ \overline{BM} = \frac{I}{V_{\text{disp}}} = \frac{64}{72} = 0.889 \text{ m} $$

6. Calculate metacentric height ($\overline{GM}$):
$$ \overline{GM} = \overline{BM} - \overline{BG} = 0.889 - 1.05 = -0.161 \text{ m} $$

Since $\overline{GM}$ is **negative** (meaning the Metacenter is below the Center of Gravity), the pontoon is **unstable** and will capsize or roll to a new equilibrium angle.

## Conclusion
Evaluating buoyancy ensures that floating platforms maintain sufficient freeboard, while rigorous metacentric stability analysis guarantees that these structures can withstand dynamic overturning moments from environmental forces. 

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Buoyancy", "label": "Buoyancy & Stability"},
    {"id": "Archimedes", "label": "Archimedes' Principle\\n(FB = γ * Vdisp)"},
    {"id": "Submerged", "label": "Submerged Bodies\\n(Stable if B above G)"},
    {"id": "Floating", "label": "Floating Bodies"},
    {"id": "Metacenter", "label": "Metacenter Analysis\\n(Stable if M above G)"},
    {"id": "MetacentricHeight", "label": "Metacentric Height\\n(GM = BM - BG)"}
  ],
  "edges": [
    {"from": "Buoyancy", "to": "Archimedes"},
    {"from": "Buoyancy", "to": "Submerged"},
    {"from": "Buoyancy", "to": "Floating"},
    {"from": "Floating", "to": "Metacenter"},
    {"from": "Metacenter", "to": "MetacentricHeight"}
  ]
}
```
