# Radial Kinematics & Polar Dynamics

## 1. Kinematics in Polar Coordinates
For a particle moving in a plane, its position vector $ \mathbf{r} $ can be expressed in polar coordinates as:
$$ \mathbf{r} = r \mathbf{\hat{e}}_r $$
where $ r $ is the radial distance and $ \mathbf{\hat{e}}_r $ is the unit vector in the radial direction.

### 1.1 Velocity
Differentiating position with respect to time:
$$ \mathbf{v} = \frac{d\mathbf{r}}{dt} = \dot{r} \mathbf{\hat{e}}_r + r \dot{\theta} \mathbf{\hat{e}}_\theta $$
- Radial velocity: $ v_r = \dot{r} $
- Transverse velocity: $ v_\theta = r \dot{\theta} $

### 1.2 Acceleration
Differentiating velocity with respect to time:
$$ \mathbf{a} = \frac{d\mathbf{v}}{dt} = (\ddot{r} - r\dot{\theta}^2) \mathbf{\hat{e}}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta}) \mathbf{\hat{e}}_\theta $$
- Radial acceleration: $ a_r = \ddot{r} - r\dot{\theta}^2 $
- Transverse acceleration: $ a_\theta = r\ddot{\theta} + 2\dot{r}\dot{\theta} $

**Example 1:**
A particle moves along a spiral path such that $ r = e^{\theta} $ and $ \dot{\theta} = \omega $ (constant). Find the velocity and acceleration vectors.

*Step 1: Calculate derivatives of $ r $ and $ \theta $.*
$ \theta = \omega t \implies \dot{\theta} = \omega, \ddot{\theta} = 0 $
$ r = e^{\omega t} \implies \dot{r} = \omega e^{\omega t} = \omega r, \ddot{r} = \omega^2 e^{\omega t} = \omega^2 r $

*Step 2: Construct velocity vector.*
$$ v_r = \dot{r} = \omega r $$
$$ v_\theta = r \dot{\theta} = r \omega $$
$$ \mathbf{v} = \omega r \mathbf{\hat{e}}_r + \omega r \mathbf{\hat{e}}_\theta $$

*Step 3: Construct acceleration vector.*
$$ a_r = \ddot{r} - r\dot{\theta}^2 = \omega^2 r - r(\omega)^2 = 0 $$
$$ a_\theta = r\ddot{\theta} + 2\dot{r}\dot{\theta} = r(0) + 2(\omega r)(\omega) = 2\omega^2 r $$
$$ \mathbf{a} = 2\omega^2 r \mathbf{\hat{e}}_\theta $$

## 2. Central Force Motion
A central force is one that is always directed towards or away from a fixed point (origin) and depends only on the distance from that point:
$$ \mathbf{F} = f(r) \mathbf{\hat{e}}_r $$

### 2.1 Conservation of Angular Momentum
Since $ F_\theta = 0 $, Newton's second law gives $ a_\theta = 0 $:
$$ m(r\ddot{\theta} + 2\dot{r}\dot{\theta}) = \frac{m}{r} \frac{d}{dt}(r^2 \dot{\theta}) = 0 $$
Thus, angular momentum per unit mass, $ h = r^2 \dot{\theta} $, is constant.

### 2.2 Binet's Equation
Using the substitution $ u = \frac{1}{r} $, the differential equation of the orbit is:
$$ \frac{d^2u}{d\theta^2} + u = -\frac{f(1/u)}{mh^2u^2} $$

**Example 2:**
Find the force law required to maintain a particle in the circular orbit passing through the origin, $ r = 2a \cos\theta $.

*Step 1: Express $ u $ and derivatives w.r.t $ \theta $.*
$$ u = \frac{1}{r} = \frac{1}{2a \cos\theta} = \frac{\sec\theta}{2a} $$
$$ \frac{du}{d\theta} = \frac{\sec\theta \tan\theta}{2a} $$
$$ \frac{d^2u}{d\theta^2} = \frac{\sec\theta \tan^2\theta + \sec^3\theta}{2a} $$

*Step 2: Substitute into Binet's equation.*
$$ \frac{d^2u}{d\theta^2} + u = \frac{\sec\theta(\sec^2\theta - 1) + \sec^3\theta + \sec\theta}{2a} = \frac{2\sec^3\theta}{2a} = \frac{\sec^3\theta}{a} $$

*Step 3: Relate to force $ f(r) $.*
We know $ \frac{\sec^3\theta}{a} = 8 a^2 u^3 $.
$$ 8 a^2 u^3 = -\frac{f(1/u)}{mh^2u^2} $$
$$ f(1/u) = -8 m h^2 a^2 u^5 $$
Since $ u = 1/r $, the force law is:
$$ f(r) = -\frac{8 m h^2 a^2}{r^5} $$
The force is attractive and inversely proportional to $ r^5 $.
