# Laplace and Z-Transforms

## Laplace Transform (CT Systems)

$$X(s) = \int_{-\infty}^{\infty} x(t)e^{-st}\,dt,\quad s = \sigma + j\omega$$

**Region of Convergence (ROC)**: set of $s$ for which integral converges. Shape determines causality:
- Causal signal: ROC is right half-plane $\sigma > \sigma_0$
- Anti-causal: left half-plane
- Bilateral: vertical strip

**Transfer function**: $H(s) = Y(s)/X(s)$ with zero initial conditions.

**Stability**: all poles of $H(s)$ must lie in the open left-half plane (Re$(s) < 0$).

Relation to Fourier: $X(j\omega) = X(s)|_{s=j\omega}$ only if ROC includes $j\omega$-axis.

## Z-Transform (DT Systems)

$$X(z) = \sum_{n=-\infty}^{\infty} x[n]z^{-n}$$

**Key pairs**:

| $x[n]$ | $X(z)$ | ROC |
|--------|--------|-----|
| $\delta[n]$ | $1$ | all $z$ |
| $u[n]$ | $z/(z-1)$ | $|z|>1$ |
| $a^n u[n]$ | $z/(z-a)$ | $|z|>|a|$ |
| $n\,a^n u[n]$ | $az/(z-a)^2$ | $|z|>|a|$ |

**DT Transfer function**: $H(z) = Y(z)/X(z)$

**DT Stability**: all poles inside unit circle $|z| < 1$.

## Sampling Theorem

A CT signal with bandwidth $B$ Hz is perfectly reconstructed from samples at $f_s > 2B$ (Nyquist rate).

In s-domain: sampling creates copies of $X(j\omega)$ at multiples of $\omega_s = 2\pi f_s$.

Aliasing occurs when $f_s < 2B$ — frequencies fold back and overlap.

Relation: $H(e^{j\omega}) = H(z)|_{z=e^{j\omega}}$