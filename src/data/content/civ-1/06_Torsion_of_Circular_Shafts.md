# Torsion of Circular Shafts

## The Mechanics of Twisting

While axial forces pull structures apart and bending moments cause them to bow, **torsion** occurs when a structural member is subjected to a twisting moment, or torque. This torque acts about the longitudinal axis of the member, attempting to twist one end of the element relative to the other. In the realm of structural analysis, torsion primarily affects solid circular shafts and hollow circular tubes, though it can occur in complex open shapes like I-beams with devastating effects.

When a circular shaft is twisted, the material fibers on the outer surface of the shaft undergo maximum distortion, sliding past one another circumferentially. This physical distortion manifests entirely as **shear stress** ($\tau$) and **shear strain** ($\gamma$). Unlike axial loading where stress is uniform across the cross-section, torsional shear stress is highly non-uniform. It is zero at the absolute center (the longitudinal axis) and increases linearly as you move outward radially, reaching its absolute maximum magnitude at the outer surface of the shaft.

The geometric property that governs a circular member's resistance to this twisting is the **Polar Moment of Inertia** ($J$). Similar to how the standard moment of inertia ($I$) dictates resistance to bending, $J$ dictates how material is distributed radially away from the twisting axis. A hollow metal pipe has a much larger $J$ than a solid metal rod of the same weight, making the hollow pipe vastly superior at resisting torsional twisting.

## Applications in Structural and Mechanical Engineering

Torsion is a dominant design factor in mechanical engineering—every driveshaft in a car, every axle in a train, and the massive spinning turbine shafts in hydroelectric dams are designed explicitly to transmit massive amounts of torque while safely resisting the resulting torsional shear stresses.

In civil engineering, pure torsion is less common but highly critical when it does occur. Consider the design of a large highway sign bridge spanning across interstate lanes. The massive green signs present a huge surface area to the wind. If the wind blows forcefully against the signs, it creates a large horizontal force. Because the signs are mounted eccentrically (off-center) from the main horizontal structural pipe holding them up, this wind force creates a massive twisting torque on the pipe. The pipe must be designed with sufficient polar moment of inertia to resist twisting violently and pointing the signs down at the highway.

Another prominent example is an L-shaped building balcony or an eccentric spandrel beam around the perimeter of a high-rise. When floor slabs rest on only one side of a perimeter beam, the heavy gravity load creates an eccentric moment that attempts to twist the beam off its column supports. Concrete engineers must introduce heavy, closed-loop stirrup reinforcement (rebar) acting like spiral springs within the beam specifically to catch and resist these diagonal torsional shear forces that would otherwise crack the concrete apart in a corkscrew pattern.

## Mathematical Formulation

The primary equation governing elastic torsion in circular shafts relates the applied Torque ($T$), the radial distance from the center ($r$ or $c$), and the Polar Moment of Inertia ($J$) to calculate the resulting shear stress ($\tau$). This is known as the elastic torsion formula: $\tau = T \cdot r / J$. The maximum shear stress occurs at the outer surface where $r = c$ (the outer radius): $\tau_{max} = T \cdot c / J$.

Additionally, engineers must calculate the **Angle of Twist** ($\phi$). Just as axial members stretch ($\delta$), shafts physically twist. The angle of twist, measured in radians, is given by $\phi = TL / JG$, where $L$ is the length of the shaft and $G$ is the Shear Modulus of the material (which relates shear stress to shear strain, similar to Young's Modulus $E$). The term $JG$ is known as the **torsional rigidity** of the shaft.

## Mathematical Examples

### Example 1: Maximum Shear Stress in a Solid Shaft
A solid steel mechanical drive shaft in a water treatment plant has a diameter of $D = 50 \, \text{mm}$. An electric motor applies a torque of $T = 800 \, \text{N}\cdot\text{m}$ to drive a pump. What is the maximum shear stress developed in the shaft?
First, find the outer radius $c = D/2 = 25 \, \text{mm} = 0.025 \, \text{m}$.
Next, calculate the polar moment of inertia $J$ for a solid circle:
$$ J = \frac{\pi \cdot c^4}{2} = \frac{\pi \cdot (0.025)^4}{2} = \frac{\pi \cdot 0.0000003906}{2} \approx 6.136 \times 10^{-7} \, \text{m}^4 $$
Now, apply the torsion formula ($\tau_{max} = T \cdot c / J$):
$$ \tau_{max} = \frac{800 \, \text{N}\cdot\text{m} \times 0.025 \, \text{m}}{6.136 \times 10^{-7} \, \text{m}^4} = \frac{20}{6.136 \times 10^{-7}} \approx 32,594,000 \, \text{Pa} = 32.6 \, \text{MPa} $$
The maximum shear stress on the surface is $32.6 \, \text{MPa}$, well within the safe limits for typical steel.

### Example 2: Advantage of a Hollow Tube
A hollow aluminum tube is used for a lightweight space frame. It has an outer radius $c_o = 40 \, \text{mm}$ and an inner radius $c_i = 30 \, \text{mm}$ (a $10\text{mm}$ wall thickness). It is subjected to a torque of $T = 1500 \, \text{N}\cdot\text{m}$. What is the max shear stress?
The polar moment of inertia for a hollow tube is:
$$ J = \frac{\pi}{2}(c_o^4 - c_i^4) = \frac{\pi}{2}((0.040)^4 - (0.030)^4) = \frac{\pi}{2}(0.00000256 - 0.00000081) $$
$$ J = \frac{\pi}{2}(0.00000175) \approx 2.749 \times 10^{-6} \, \text{m}^4 $$
Calculate maximum shear stress at the outer surface:
$$ \tau_{max} = \frac{T \cdot c_o}{J} = \frac{1500 \times 0.040}{2.749 \times 10^{-6}} = \frac{60}{2.749 \times 10^{-6}} \approx 21.8 \, \text{MPa} $$
A solid rod of the same weight would have a much higher stress because the material would be located closer to the center, lacking the high $J$ provided by the hollow geometry.

### Example 3: Calculating the Angle of Twist
A $3$-meter long solid titanium shaft ($G = 40 \, \text{GPa} = 40 \times 10^9 \, \text{N/m}^2$) has a diameter of $30 \, \text{mm}$ ($r = 0.015 \, \text{m}$). It is subjected to a torque of $T = 300 \, \text{N}\cdot\text{m}$. How many degrees will one end twist relative to the other?
Calculate $J$:
$$ J = \frac{\pi \cdot (0.015)^4}{2} \approx 7.95 \times 10^{-8} \, \text{m}^4 $$
Use the angle of twist formula ($\phi = TL / JG$):
$$ \phi = \frac{300 \times 3}{7.95 \times 10^{-8} \times 40 \times 10^9} = \frac{900}{3180} \approx 0.283 \, \text{radians} $$
Convert radians to degrees by multiplying by $(180/\pi)$:
$$ \text{Angle in degrees} = 0.283 \times \left(\frac{180}{\pi}\right) \approx 16.2^\circ $$
The shaft twists a highly visible $16.2$ degrees.

## Torsional Analysis Path

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "torque", "label": "Applied Torsional Moment (T)"},
    {"id": "geometry", "label": "Determine Radius (c) & Polar Moment (J)"},
    {"id": "stress", "label": "Calculate Max Shear Stress (τ = Tc/J)"},
    {"id": "twist", "label": "Calculate Angle of Twist (φ = TL/JG)"},
    {"id": "distribution", "label": "Linear Stress Distribution (Zero at Center)"},
    {"id": "check", "label": "Check against Allowable Limits"}
  ],
  "edges": [
    {"from": "torque", "to": "stress", "label": "causes"},
    {"from": "geometry", "to": "stress", "label": "resists via J"},
    {"from": "torque", "to": "twist", "label": "causes"},
    {"from": "stress", "to": "distribution", "label": "profile"},
    {"from": "stress", "to": "check", "label": "strength"},
    {"from": "twist", "to": "check", "label": "serviceability"}
  ]
}
```
