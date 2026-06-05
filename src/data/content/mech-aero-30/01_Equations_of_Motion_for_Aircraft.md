# Equations of Motion for Aircraft

Aircraft flight mechanics begins with applying Newton's laws to a rigid aircraft moving through the atmosphere. Unlike a simple particle, the aircraft has six degrees of freedom (6-DOF): three translational (surge, heave, sway) and three rotational (roll, pitch, yaw). Deriving and understanding the full equations of motion is the foundation for all stability, control, and performance analysis.

## 1. Reference Frames

**Earth-fixed (inertial) frame ($x_E, y_E, z_E$):** Fixed to the Earth's surface (assumed inertial for flight dynamics purposes). Used to define the aircraft's position and trajectory.

**Body-fixed frame ($x_B, y_B, z_B$):** Fixed to and moving with the aircraft. Origin at the center of mass (CG).
- $x_B$: Points forward (along the aircraft nose).
- $y_B$: Points out the right wing.
- $z_B$: Points downward (completing the right-hand system).

Velocities, angular rates, and forces are most naturally expressed in the body frame, while positions and attitudes are expressed in the Earth frame.

## 2. Euler Angles (Aircraft Attitude)

The orientation of the body frame relative to the Earth frame is described by three successive rotations called **Euler angles**:
- **Yaw angle $\psi$** (Heading): Rotation about $z_E$ — pointing north is $\psi = 0$.
- **Pitch angle $\theta$** (Elevation): Rotation about the new $y$ axis — nose up is positive.
- **Roll angle $\phi$** (Bank): Rotation about the body $x_B$ — right wing down is positive.

The **rotation matrix** $R(\phi, \theta, \psi)$ transforms vectors between frames. The transformation has a singularity at $\theta = \pm 90°$ (gimbal lock) — avoided in flight computers using quaternion representation.

## 3. The 6-DOF Equations of Motion

Let $\vec{V}_B = (u, v, w)$ be the body-axis velocity components (forward, rightward, downward), and $\vec{\omega}_B = (p, q, r)$ be the body-axis angular rate components (roll rate, pitch rate, yaw rate).

**Force equations** (Newton's second law, body frame):
$$m(\dot{u} + qw - rv) = F_{x,total}$$
$$m(\dot{v} + ru - pw) = F_{y,total}$$
$$m(\dot{w} + pv - qu) = F_{z,total}$$

Note the $qw - rv$ terms: these are the **Coriolis accelerations** arising because the body frame is rotating — the equations are coupled.

**Moment equations** (Euler's equations, body frame):
$$I_{xx}\dot{p} - I_{xz}(\dot{r} + pq) + (I_{zz} - I_{yy})qr = L$$
$$I_{yy}\dot{q} + (I_{xx} - I_{zz})pr + I_{xz}(p^2 - r^2) = M$$
$$I_{zz}\dot{r} - I_{xz}(\dot{p} - qr) + (I_{yy} - I_{xx})pq = N$$

where $L$, $M$, $N$ are rolling, pitching, and yawing moments, and $I_{xx}$, $I_{yy}$, $I_{zz}$, $I_{xz}$ are moments and product of inertia.

## 4. Forces and Moments Acting on the Aircraft

**Aerodynamic forces and moments:** Functions of angle of attack $\alpha$, sideslip $\beta$, control surface deflections, and flight condition. These are the dominant terms in most flight conditions.

**Gravitational force:** $\vec{W} = mg$, acting vertically downward. In body coordinates:
$$W_x = -mg\sin\theta, \quad W_y = mg\cos\theta\sin\phi, \quad W_z = mg\cos\theta\cos\phi$$

**Thrust:** Depends on engine type, throttle setting, altitude, and airspeed. Usually modeled as acting along the $x_B$ axis for simple jet analysis.

## 5. Kinematic Equations

Six additional equations relate the body-frame rates to the time derivatives of position and Euler angles:
$$\dot{\phi} = p + (q\sin\phi + r\cos\phi)\tan\theta$$
$$\dot{\theta} = q\cos\phi - r\sin\phi$$
$$\dot{\psi} = (q\sin\phi + r\cos\phi)\sec\theta$$

The full 6-DOF system is therefore 12 first-order nonlinear ordinary differential equations in 12 states: $(u, v, w, p, q, r, \phi, \theta, \psi, x_E, y_E, z_E)$. These are solved numerically for flight simulation.
