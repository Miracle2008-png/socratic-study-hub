# 9. From Series to Transforms (Non-periodic)

The Fourier Series is incredibly powerful, but it has one fatal flaw: **it only works for periodic functions.** 

What if you want to analyze a single, isolated sound—like a single handclap or a short radar pulse? This pulse happens once and never repeats. It is non-periodic.

### Stretching the Period to Infinity
Mathematicians found a genius way to apply Fourier's logic to non-periodic functions. 

Imagine a single square pulse (like a handclap) that lasts from $t = -1$ to $t = 1$. 
To use a Fourier Series, we must *pretend* it repeats. 
*   Let's set the period to $L=5$. We now have a pulse repeating every 10 seconds. Its frequency spectrum is a series of discrete spikes (harmonics).
*   Let's increase the period to $L=50$. The pulse repeats every 100 seconds. The harmonic spikes in the frequency spectrum get squished much closer together.
*   Let's push the period to $L \to \infty$. The pulse never repeats. It is truly isolated. 

As $L \to \infty$, the discrete frequency spikes get squished infinitely close together. The discrete, bar-chart spectrum morphs into a **solid, continuous curve**.

### The Transition to the Integral
In the Complex Fourier Series, the amplitude of the frequency $\omega_n = \frac{n\pi}{L}$ is given by:
$$ c_n = \frac{1}{2L} \int_{-L}^{L} f(t) e^{-i \omega_n t} \, dt $$

As $L \to \infty$:
1.  The discrete frequencies $\omega_n$ merge into a continuous frequency variable $\omega$.
2.  The infinite sum $\sum$ transitions into a continuous integral $\int$.
3.  The coefficient $c_n$ becomes a continuous function $F(\omega)$.

This limit process transforms the Fourier Series into the **Fourier Transform**. Instead of adding up a discrete set of harmonic frequencies, we are now integrating over a continuous, infinite band of all possible frequencies!
