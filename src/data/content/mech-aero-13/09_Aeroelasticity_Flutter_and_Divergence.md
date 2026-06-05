# Aeroelasticity: Flutter and Divergence

**Aeroelasticity** is the study of the interaction between aerodynamic forces, elastic deformation of the structure, and inertia. When an aircraft wing flexes under aerodynamic load, the deformation changes the aerodynamic forces, which causes further deformation. This feedback loop can be either stabilizing (and self-limiting) or catastrophically destabilizing.

## 1. The Collar Triangle

The three disciplines involved in aeroelasticity are represented by the **Collar Triangle**:
- **A** (Aerodynamics): Aerodynamic forces depend on structural shape and its rate of change.
- **E** (Elasticity): Structural deformation under aerodynamic load.
- **I** (Inertia): Dynamic inertial forces from accelerating structural mass.

Static aeroelastic phenomena (A-E coupling, no inertia): **divergence**, **control reversal**.
Dynamic aeroelastic phenomena (A-E-I coupling): **flutter**, **buffeting**.

## 2. Static Divergence

Consider a wing section (airfoil) mounted on a spring that allows rotation (torsion) about an elastic axis. An angle of attack $\alpha$ generates lift $L = qSC_{L\alpha}\alpha$ which creates a pitching moment about the elastic axis.

The wing twists to a new angle. The increased angle generates more lift, which twists it further. If aerodynamic twist stiffness exceeds structural torsional stiffness:
$$q_{div} = \frac{GJ}{eS C_{L\alpha}}$$

At the **divergence dynamic pressure** $q_{div}$, the wing will twist without bound and structurally fail. Aircraft must operate at dynamic pressures well below $q_{div}$.

## 3. Flutter

Flutter is the most dangerous aeroelastic instability. It is a dynamic coupling between at least two structural modes (typically bending and torsion) through aerodynamic forces.

Below the **flutter speed $V_F$**: Aerodynamic forces add damping to the system — disturbances decay.

At $V_F$: The aerodynamic work input per cycle exactly equals the structural damping dissipation. Oscillations are sustained indefinitely.

Above $V_F$: Aerodynamic forces pump energy into the oscillation every cycle. Amplitude grows exponentially → structural failure within seconds.

**The p-k Method** (used in NASTRAN aeroelastic analysis): Solves the complex eigenvalue problem:
$$\left([K] - \omega^2[M] + \frac{1}{2}\rho V^2 [Q(\omega, M)]\right)\{X\} = 0$$

Where $[Q]$ is the **aerodynamic influence coefficient matrix** (complex, frequency-dependent). Repeated solution at increasing airspeed $V$ tracks eigenvalue damping: the speed where the damping of any mode crosses zero is $V_F$.

## 4. Control Surface Reversal

As airspeed increases, deflecting an aileron downward increases local lift (intended to bank the aircraft). However, the increased lift creates a twisting moment that washes out the wing's angle of attack, reducing total lift. At the **reversal speed**, aileron effectiveness is zero. Above reversal speed, the aileron has opposite effect. Reversal speed is a critical design constraint for high-speed aircraft with flexible wings (e.g., early jet fighter wing redesigns due to reversal problems).
