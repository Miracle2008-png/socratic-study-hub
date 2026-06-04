# 11. Monte Carlo Methods and the CLT

The CLT is not just a theoretical result — it is the mathematical engine that makes **Monte Carlo simulation** reliable.

### What is Monte Carlo?
Monte Carlo methods use **repeated random sampling** to estimate quantities that are analytically difficult or impossible to compute. The name references the Monte Carlo casino — randomness is the core computational tool.

The typical structure:
1.  Define the system mathematically (a circuit, a structure, a queuing network).
2.  Sample the uncertain inputs randomly from their probability distributions.
3.  Evaluate the system output for each set of inputs.
4.  Repeat $N$ times. The empirical average of outputs estimates the true expected value $E[Y]$.

### The CLT Guarantees Monte Carlo Convergence
The Monte Carlo estimate of $E[Y]$ is:
$$\hat{\mu} = \frac{1}{N}\sum_{i=1}^N Y_i$$

By the Law of Large Numbers, $\hat{\mu} \to E[Y]$ as $N \to \infty$.

By the CLT, the estimation error has a known distribution:
$$\hat{\mu} \approx N\!\left(E[Y], \; \frac{\text{Var}(Y)}{N}\right)$$

The **Monte Carlo standard error** is $\sigma_{\hat{\mu}} = \sigma_Y / \sqrt{N}$.

This gives a 95% confidence interval for the true $E[Y]$:
$$\hat{\mu} \pm 1.96 \frac{S_Y}{\sqrt{N}}$$

Where $S_Y$ is the sample standard deviation of the simulated outputs.

### Convergence Rate
The error shrinks as $1/\sqrt{N}$. To halve the error, you need 4× more simulations. To achieve 1% accuracy (error $< 0.01\sigma_Y$), you need approximately $N = (1.96/0.01)^2 = 38,416$ simulations.

### Worked Example: Circuit Reliability
A circuit has 5 independent resistors each with $\pm 5\%$ uniform tolerance. Analytically computing the probability the total resistance falls outside specification requires a 5-dimensional integral.

Monte Carlo approach: Sample $10{,}000$ sets of 5 resistor values uniformly. Compute total resistance each time. Count how many fall out of spec.

If 143 of 10,000 simulations fail:
$$\hat{p}_{\text{fail}} = 0.0143$$
$$95\% \text{ CI: } 0.0143 \pm 1.96\sqrt{\frac{0.0143 \times 0.9857}{10000}} = [0.0119, \; 0.0167]$$

The CLT-based confidence interval tells the engineer exactly how much to trust the Monte Carlo result — an uncertainty quantification that analytical approximations cannot easily provide.
