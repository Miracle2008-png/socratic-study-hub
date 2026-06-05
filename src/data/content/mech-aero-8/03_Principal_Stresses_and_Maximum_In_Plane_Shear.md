# Principal Stresses and Maximum In-Plane Shear

The transformation equations allow us to find the stress at *any* angle $\theta$. But to predict catastrophic failure, we need to find the specific angles that produce the absolute mathematically highest (and lowest) possible stresses.

We do this by taking the derivative of the transformation equations with respect to $\theta$ and setting them equal to zero to find the local maxima and minima.

## 1. Principal Normal Stresses ($\sigma_1, \sigma_2$)

Taking the derivative $d\sigma_{x'}/d\theta = 0$ yields two specific angles ($\theta_{p1}, \theta_{p2}$), which are always exactly $90^\circ$ apart.
These are the **Principal Planes**.

Plugging these angles back into the normal stress equation yields the absolute maximum and minimum normal stresses, known as the **Principal Stresses**:

$$ \sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} $$

*   $\sigma_1$ is the algebraically largest principal stress (Maximum).
*   $\sigma_2$ is the algebraically smallest principal stress (Minimum).

**The Most Important Rule:**
If you plug the principal angles $\theta_p$ into the *shear stress* equation ($\tau_{x'y'}$), the answer will always be exactly zero.
*On the principal planes, the shear stress is strictly zero.* This is the state of pure tension/compression that tears brittle materials apart.

## 2. Maximum In-Plane Shear Stress ($\tau_{max, in-plane}$)

Similarly, taking the derivative $d\tau_{x'y'}/d\theta = 0$ yields two specific angles ($\theta_{s1}, \theta_{s2}$) where the shear stress reaches its maximum intensity. 
These planes of maximum shear are always exactly **$45^\circ$ away** from the principal planes.

Plugging these angles into the shear stress equation yields the formula for the **Maximum In-Plane Shear Stress**:

$$ \tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} $$

*Notice that this formula is identical to the square root term from the principal stress equation. Therefore, $\tau_{max} = (\sigma_1 - \sigma_2)/2$.*

**A Crucial Detail:**
Unlike the principal planes (where shear stress is zero), the planes of maximum shear stress usually *do* have an accompanying normal stress acting on them. The normal stress acting on these maximum shear planes is exactly the average normal stress: $\sigma_{avg} = (\sigma_x + \sigma_y)/2$.

This maximum shear stress state is what causes ductile metals to yield, warp, and slide apart.
