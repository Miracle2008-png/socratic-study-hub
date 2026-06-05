---
title: "Ground Effect"
---

# Ground Effect

**Ground effect** is the significant change in aerodynamic characteristics that occurs when a wing or aircraft flies at very low altitude — within approximately one wingspan of the ground. The proximity of a solid boundary fundamentally alters the induced flow field, with both beneficial and potentially dangerous consequences.

## 1. The Physical Mechanism

Recall that trailing vortices trail behind a finite wing and curve downward, inducing downwash over the wing. This downwash reduces the effective angle of attack, which is the source of induced drag.

When the aircraft is close to the ground, the ground acts as a **mirror plane** — mathematically equivalent to a mirror image of the aircraft (its "image vortex system") reflected below the ground surface. The image vortices effectively cancel part of the real trailing vortex downwash.

**Result:** The downwash over the wing is significantly reduced when flying close to the ground. This means:
1. **Induced angle of attack decreases** → Effective angle of attack increases → More lift at same geometric angle.
2. **Induced drag decreases** dramatically — sometimes by 30–50%.
3. **Aircraft "floats"** — pilots must counteract the tendency to float down the runway during landing.

## 2. Quantifying Ground Effect

The induced drag in ground effect compared to out-of-ground-effect (OGE) is approximately:

$$\frac{C_{D_i,IGE}}{C_{D_i,OGE}} = \phi$$

where the **ground effect factor** $\phi$ is approximated by:

$$\phi = \frac{(16h/b)^2}{1 + (16h/b)^2}$$

Here $h$ is the height above the ground and $b$ is the wingspan.

- At $h/b = 1$ (one wingspan height): $\phi \approx 0.99$ — essentially no ground effect.
- At $h/b = 0.5$: $\phi \approx 0.97$ — still minor.
- At $h/b = 0.1$ (10% span height): $\phi \approx 0.72$ — significant 28% reduction in induced drag.
- At $h/b = 0.05$: $\phi \approx 0.55$ — very strong ground effect, 45% reduction.

## 3. Ground Effect on Aircraft Performance

**During takeoff:**
Ground effect assists the initial climb — the aircraft accelerates faster on the runway because induced drag is low. However, if the aircraft tries to climb out too steeply before sufficient airspeed is achieved, it may climb barely above ground effect altitude, then "fall out of" ground effect as induced drag suddenly increases. This has caused accidents where aircraft climbed a few meters and then settled back down.

**During landing:**
Ground effect causes the aircraft to "float" — more lift than expected at low altitude. This is why pilots flare the aircraft (raise the nose) just before touchdown, not primarily to reduce vertical speed, but to increase drag and reduce the excess lift of ground effect. Experienced pilots account for this in their approach speed and flare timing.

**Wing-in-Ground (WIG) vehicles:**
Some experimental and commercial vehicles (Ekranoplan, Russian "Caspian Sea Monster") are designed to fly permanently within the intense ground effect zone — just a few meters above the water. They benefit from massively reduced induced drag (excellent fuel efficiency) but are limited to flying over smooth flat surfaces.

## 4. Stability Changes in Ground Effect

In ground effect, the lift curve slope increases (more lift per degree of $\alpha$), the pitching moment changes, and the stall angle of attack may increase slightly. Aircraft designed for normal out-of-ground-effect operations may experience unexpected control forces during the brief transition through ground effect during takeoff and landing.
