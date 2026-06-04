# 11. Topology: Simply Connected Domains

Throughout this unit, we stated that if the curl of a vector field is zero ($\nabla \times \mathbf{F} = \mathbf{0}$), then the field is conservative, meaning a scalar potential function exists.

However, there is a hidden, highly technical trap in vector calculus regarding the **topology** of the space you are working in.

### The Problem of the "Hole"
Consider the 2D "vortex" vector field:
$$ \mathbf{F} = \frac{-y}{x^2+y^2}\mathbf{i} + \frac{x}{x^2+y^2}\mathbf{j} $$

If you calculate the 2D curl ($Q_x - P_y$), you will find that it equals exactly zero everywhere.
By our rules, this field should be conservative. Therefore, the line integral around any closed loop should be zero.

Let's integrate this field around the unit circle $C$ ($x=\cos t, y=\sin t$):
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} \left( \frac{-\sin t}{1}(-\sin t) + \frac{\cos t}{1}(\cos t) \right) dt $$
$$ = \int_0^{2\pi} (\sin^2 t + \cos^2 t) dt = \int_0^{2\pi} 1 \, dt = \mathbf{2\pi} $$

**Wait. The curl is zero, but the closed loop integral is $2\pi$, not $0$!** 
Why did Green's Theorem and the Conservative Field test fail?

### Simply Connected Domains
The theorems of vector calculus require the region to be **Simply Connected**. 
A region is simply connected if any closed loop drawn inside the region can be shrunk down to a single point without leaving the region.

Look at our vortex field: it divides by $(x^2+y^2)$. This means the field is undefined (it literally does not exist) at the origin $(0,0)$. 
The domain of this field has a physical "hole" punched in the middle of it!

Because the unit circle loops *around* this hole, the loop cannot be shrunk to a point. The region inside the loop is not fully contained within the field's domain. Therefore, Green's Theorem cannot be applied to this loop.

### The Deep Implication
If you have a zero-curl field, it is only guaranteed to be conservative if the domain it lives in has no holes (it is simply connected). 

If the domain has a hole (like a magnetic field circulating around a physical wire), the line integral around the hole will yield a non-zero constant (like $2\pi$ or $\mu_0 I$). This mathematical quirk is exactly how Ampere's Law successfully measures the current inside a wire!
