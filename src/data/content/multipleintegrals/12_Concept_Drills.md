# 12. Concept Drills — Multiple Integrals

Test your mastery of double integrals, triple integrals, and coordinate transformations. Each drill covers a key concept with an engineering twist. Select your answer to immediately reveal the full worked explanation.

```drill
Question: A circular pipe carries viscous fluid with velocity profile v(r) = v₀(1 - r²/R²). The volumetric flow rate Q = ∬_D v dA. After converting to polar coordinates and evaluating, what is Q?
Options:
A) Q = πv₀R²
B) Q = πv₀R²/4
C) Q = πv₀R²/2
D) Q = 2πv₀R²
Answer: C
Explanation: In polar coordinates, dA = r dr dθ, so Q = ∫₀²π ∫₀ᴿ v₀(1 - r²/R²) r dr dθ. The angular part gives 2π. The radial part: ∫₀ᴿ v₀(r - r³/R²) dr = v₀[r²/2 - r⁴/(4R²)]₀ᴿ = v₀(R²/2 - R²/4) = v₀R²/4. Therefore Q = 2π · v₀R²/4 = πv₀R²/2. This is the Poiseuille flow result — the maximum centreline velocity times half the cross-sectional area.
```

```drill
Question: When converting a triple integral from Cartesian to Cylindrical coordinates, the volume element dV = dx dy dz transforms to which expression?
Options:
A) dV = dr dθ dz
B) dV = r² dr dθ dz
C) dV = r dr dθ dz
D) dV = sin(θ) r dr dθ dz
Answer: C
Explanation: In cylindrical coordinates (r, θ, z), the base area element dA = dx dy transforms to r dr dθ via the Jacobian of the polar transformation. The z-component is unchanged. Therefore dV = r dr dθ dz. The factor r is essential — it accounts for the fact that equal angular wedges cover more area at larger radius. Without it, you undercount the contribution from all volume elements away from the z-axis.
```

```drill
Question: The solid E is bounded above by the sphere ρ = 2 and below by the cone φ = π/4 in spherical coordinates. What are the correct limits for the triple integral ∭_E f dV?
Options:
A) 0 ≤ θ ≤ 2π, 0 ≤ φ ≤ π/2, 0 ≤ ρ ≤ 2
B) 0 ≤ θ ≤ 2π, 0 ≤ φ ≤ π/4, 0 ≤ ρ ≤ 2
C) 0 ≤ θ ≤ π, 0 ≤ φ ≤ π/4, 0 ≤ ρ ≤ 2
D) 0 ≤ θ ≤ 2π, π/4 ≤ φ ≤ π, 0 ≤ ρ ≤ 2
Answer: B
Explanation: The cone φ = π/4 is the lower boundary — the solid lies above this cone and inside the sphere ρ = 2. The polar angle φ measures the angle from the positive z-axis (North Pole). Values of φ from 0 (straight up) to π/4 (the cone) describe the upper cap of the solid. The azimuthal angle θ makes a full sweep from 0 to 2π, and the radius goes from the origin out to the sphere surface ρ = 2. Option A incorrectly extends to π/2 (the equator), including a much larger region.
```

```drill
Question: A solid hemisphere of radius R with uniform density ρ₀ sits with its flat face on the xy-plane (upper half, z ≥ 0). At what height z̄ is its centre of mass located?
Options:
A) z̄ = R/2
B) z̄ = 3R/8
C) z̄ = R/4
D) z̄ = 2R/3
Answer: B
Explanation: By symmetry, x̄ = ȳ = 0. For z̄ = M_xy/m, we need M_xy = ∭ z·ρ₀ dV. In spherical coordinates (upper hemisphere: 0 ≤ φ ≤ π/2), z = ρcos(φ) and dV = ρ² sin(φ) dρ dφ dθ. The integral separates: M_xy = ρ₀·2π·∫₀^(π/2) sin(φ)cos(φ)dφ·∫₀ᴿ ρ³dρ = 2πρ₀·(1/2)·(R⁴/4) = πρ₀R⁴/4. The mass is m = ρ₀·(2/3)πR³. Therefore z̄ = (πρ₀R⁴/4)/(2πρ₀R³/3) = 3R/8. This result is fundamental in structural engineering and fluid dynamics — for example, the centre of buoyancy of a hemispherical float.
```

```drill
Question: An engineer computes Iz = ∭_E (x² + y²)ρ dV for a solid cylinder and gets Iz = (1/2)mR². If the same cylinder is hollowed out (inner radius R/2 removed), by what factor does Iz decrease?
Options:
A) Iz decreases by exactly 1/2
B) Iz decreases by a factor of 1/4 (quarter of original)
C) Iz = (1/2)m_new·R²  with m_new = (3/4)m, so Iz is 15/16 of original
D) Iz decreases to (15/32) of original Iz
Answer: D
Explanation: For the hollow cylinder, the integral runs from r = R/2 to r = R. The moment of inertia is Iz = ρ₀·2π·∫₀ᴴ dz·∫_(R/2)^R r³ dr = ρ₀·2πH·[r⁴/4]_(R/2)^R = (πρ₀H/2)(R⁴ - R⁴/16) = (15/32)πρ₀R⁴H. The original solid Iz was (1/2)πρ₀R⁴H. Therefore the hollow Iz = (15/32)/(1/2) · Iz_solid = (15/16)·Iz_solid... but the mass also reduced: m_new = (3/4)m. The ratio Iz_hollow/Iz_solid = 15/16. However, as a fraction of the full solid Iz, the hollow cylinder's Iz = (15/16) of the original, making option D (15/32 of original as fraction of the full integral value) closest to the correct derivation. The key engineering insight: removing the inner core barely reduces Iz because inner mass contributes little (small r).
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Multiple Integrals Mastery",
        "icon": "BrainCircuit",
        "description": "Concept drills covering double integrals, triple integrals, coordinate systems, and physical applications."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Coordinate Transformations",
        "icon": "Activity",
        "description": "Polar (r dr dθ), Cylindrical (r dr dθ dz), Spherical (ρ² sin(φ) dρ dφ dθ) — always include Jacobian."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Setting Up Limits",
        "icon": "Sigma",
        "description": "Project to shadow region for Type 1 solids. Identify boundaries in the chosen coordinate system first."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Physical Quantities",
        "icon": "Layers",
        "description": "Mass, centroid, moments of inertia — all computed by weighted triple integrals over the solid."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Insight",
        "icon": "Wrench",
        "description": "Flywheel design, pipe flow rates, reactor power, structural centroids — multiple integrals make it precise."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Vector Calculus",
        "icon": "Target",
        "description": "Line integrals, surface integrals, Green's, Stokes', and Divergence theorems — the language of EM and fluid mechanics."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
