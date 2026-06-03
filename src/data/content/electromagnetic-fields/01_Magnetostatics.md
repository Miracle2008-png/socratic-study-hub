# Magnetostatics

## Biot-Savart Law

Magnetic field from current element:
$$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{d\mathbf{l}\times\hat{\mathbf{r}}}{r^2},\quad \mu_0 = 4\pi\times10^{-7}\,\text{H/m}$$

**Infinite straight wire**:
$$B = \frac{\mu_0 I}{2\pi r}$$

**Circular loop (centre)**:
$$B = \frac{\mu_0 I}{2R}$$

## Gauss's Law for Magnetism

$$\oint_S \mathbf{B}\cdot d\mathbf{A} = 0$$

No magnetic monopoles. Differential: $\nabla\cdot\mathbf{B} = 0$

## Ampere's Law

$$\oint_C \mathbf{H}\cdot d\mathbf{l} = I_{enc}$$

$$\mathbf{B} = \mu_0\mathbf{H}\quad\text{(free space)},\quad \mathbf{B} = \mu_0\mu_r\mathbf{H}\quad\text{(linear material)}$$

Differential: $\nabla\times\mathbf{H} = \mathbf{J}$

**Applications**:

| Geometry | Field |
|----------|-------|
| Long solenoid ($n$ turns/m) | $B = \mu_0 n I$ (inside) |
| Toroid (N turns, radius $r$) | $B = \mu_0 NI/(2\pi r)$ |

## Magnetic Force and Inductance

Force on charge: $\mathbf{F} = q\mathbf{v}\times\mathbf{B}$ (Lorentz force)

Force on current: $d\mathbf{F} = I\,d\mathbf{l}\times\mathbf{B}$

**Inductance**: $L = N\Phi/I = \mu_0 N^2 A/\ell$ (solenoid)

Energy in magnetic field:
$$W_M = \frac{1}{2}LI^2 = \frac{1}{2\mu_0}\int|\mathbf{B}|^2\,dV$$