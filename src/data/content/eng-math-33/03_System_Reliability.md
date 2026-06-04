# 3. System Reliability: Series, Parallel, and Complex Topologies

### Series Systems
A series system fails if **any single component fails**. The system is only as reliable as its weakest link.

For $n$ independent components with reliabilities $R_i(t)$:
$$R_s(t) = \prod_{i=1}^n R_i(t)$$

**For Exponential components** with individual failure rates $\lambda_i$:
$$R_s(t) = e^{-(\lambda_1 + \lambda_2 + \dots + \lambda_n)t} = e^{-\Lambda t}$$

The system is Exponential with combined failure rate $\Lambda = \sum \lambda_i$.

$$\text{MTTF}_s = \frac{1}{\Lambda} = \frac{1}{\sum \lambda_i}$$

**Key insight:** Adding more components in series always decreases reliability. A 100-component series system where each component has $R_i = 0.99$ has $R_s = (0.99)^{100} = 0.366$ — only a 37% chance of survival.

### Parallel Systems (Active Redundancy)
A parallel system fails only if **all components fail**. The system survives as long as at least one component operates.

$$R_s(t) = 1 - \prod_{i=1}^n [1 - R_i(t)]$$

For two identical components each with $R = e^{-\lambda t}$:
$$R_s(t) = 1 - (1 - e^{-\lambda t})^2 = 2e^{-\lambda t} - e^{-2\lambda t}$$

$$\text{MTTF}_s = \int_0^\infty R_s(t)\, dt = \frac{2}{\lambda} - \frac{1}{2\lambda} = \frac{3}{2\lambda}$$

A 2-unit active parallel system has 1.5× the MTTF of a single unit.

For $n$ identical units: $\text{MTTF}_s = \frac{1}{\lambda}\left(1 + \frac{1}{2} + \dots + \frac{1}{n}\right)$ — the harmonic series.

### $k$-out-of-$n$ Systems
A $k$-out-of-$n$ system survives if **at least $k$ of $n$ components** are operational.

For $n$ i.i.d. components with reliability $p$ each, the number of surviving components $X \sim B(n, p)$:
$$R_s = P(X \ge k) = \sum_{j=k}^n \binom{n}{j} p^j (1-p)^{n-j}$$

Special cases: $k=1$ is parallel; $k=n$ is series.

**Example:** 2-out-of-3 majority voting system, $p = 0.9$:
$$R_s = \binom{3}{2}(0.9)^2(0.1)^1 + \binom{3}{3}(0.9)^3 = 3(0.081) + 0.729 = 0.243 + 0.729 = \mathbf{0.972}$$

### Standby Systems (Cold Redundancy)
A backup component activates only when the primary fails. Assuming perfect switching:
$$\text{MTTF}_\text{standby} = \frac{n}{\lambda}$$

Standby gives $n \times \text{MTTF}$ vs. parallel's harmonic $\text{MTTF}$ — standby is always more efficient when switching is reliable.
