# Thin Airfoil Theory

In the early 1900s, Max Munk and Hermann Glauert developed an elegant mathematical model to predict the lift, drag, and pitching moment of any basic wing shape using potential flow and the Kutta condition. This is known as **Thin Airfoil Theory**.

## 1. The Mathematical Approximation

A real wing has a finite thickness and a curved centerline (camber). Thin airfoil theory makes two sweeping simplifying assumptions:
1. The airfoil is incredibly thin (thickness approaches zero).
2. The angle of attack ($\alpha$) is very small (less than 10-15 degrees).

Because the wing is infinitely thin, we can model it entirely as a single curved line in space: the **Camber Line**.
To generate lift, we lay a continuous sheet of microscopic spinning vortices (a "vortex sheet" with strength $\gamma(x)$) exactly along this camber line.

The goal is to calculate the strength of this vortex sheet such that:
1. The solid camber line remains a streamline (no fluid flows *through* the wing).
2. The Kutta condition is perfectly satisfied at the trailing edge ($\gamma(x) = 0$ at the trailing edge).

## 2. The Fundamental Results for Symmetric Airfoils

A symmetric airfoil has zero camber (it is perfectly flat). 

Solving the vortex sheet integral for a flat plate yields the foundational equations of aerodynamics:
1. **Lift Coefficient:** $C_L = 2\pi\alpha$ 
   *(Lift increases perfectly linearly with angle of attack $\alpha$, where $\alpha$ is in radians. The theoretical lift slope is exactly $2\pi$).*
2. **Pitching Moment:** The aerodynamic center (the point where the pitching moment remains constant regardless of angle of attack) is located exactly at the **Quarter-Chord point ($c/4$)**, 25% of the way back from the leading edge.
3. **Zero Lift Angle:** At $\alpha = 0^\circ$, $C_L = 0$.

## 3. The Fundamental Results for Cambered Airfoils

Most wings are cambered (curved upward) to generate lift efficiently. Thin airfoil theory separates the analysis into two parts: the angle of attack part (identical to a flat plate) and the camber part.

1. **Lift Coefficient:** $C_L = 2\pi(\alpha - \alpha_{L=0})$
   *(The wing now generates lift even when flat. The angle $\alpha_{L=0}$ is a negative angle representing how far you must point the nose down to stop the wing from lifting).*
2. **Aerodynamic Center:** It remains perfectly fixed at the **Quarter-Chord point ($c/4$)**.
3. **Pitching Moment:** Unlike a symmetric wing, a cambered wing generates a permanent, negative (nose-down) pitching moment about the aerodynamic center ($C_{m, c/4} < 0$).

## 4. Limitations of the Theory

Thin airfoil theory is a masterpiece of analytical mathematics, but it has strict limits:
- **No Stall Prediction:** The theory assumes inviscid flow, so it predicts that lift will increase linearly to infinity ($C_L = 2\pi\alpha$) even if you point the wing straight up at 90°. It completely fails to predict flow separation and stall.
- **No Drag Prediction:** Because it uses inviscid potential flow, it yields d'Alembert's paradox: Drag = 0. You must manually add skin friction (from boundary layer equations) and induced drag (from 3D finite wing theory) to find the true drag.
- **Thick Wings:** It struggles to accurately predict the pressure distribution on modern, highly thick airfoils or transonic supercritical wings. Modern engineers use computational Panel Methods (which place sources and vortices on the actual thick surface of the wing) instead.
