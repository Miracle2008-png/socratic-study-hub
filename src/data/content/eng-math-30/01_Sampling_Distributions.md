# 1. Sampling and Sampling Distributions

The CLT is a theorem about **sampling**. Before we can state it precisely, we need to establish the mathematical framework of what it means to take a sample and compute statistics from it.

### Population vs. Sample
A **Population** is the complete set of all possible observations — e.g., the resistance of every resistor ever manufactured by a factory, or the lifetime of every possible unit of a product line. Measuring the entire population is almost always impossible.

A **Sample** is a subset of $n$ observations drawn from the population: $X_1, X_2, \dots, X_n$.

If the sample is drawn **randomly and independently** (each draw does not affect the others, and each unit is equally likely to be chosen), the sample is called an **i.i.d. sample** — Independent and Identically Distributed.

### Statistics are Random Variables
Any quantity computed from a sample — the sample mean, sample variance, maximum value — is called a **Statistic**. 

Crucially, because the sample values $X_i$ are random, any statistic computed from them is also a **Random Variable**. If you took a different random sample, you would compute a different statistic.

**Sample Mean:**
$$\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$$

**Sample Variance (unbiased):**
$$S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$$

The divisor $(n-1)$ rather than $n$ is deliberate: it corrects a systematic underestimation bias. (Dividing by $n$ consistently underestimates the true population variance because the sample mean $\bar{X}$ is already the closest possible center to the sample points.)

### The Sampling Distribution
The **Sampling Distribution** of a statistic is the probability distribution of that statistic across all possible samples of size $n$.

If you imagine drawing 10,000 different random samples of size $n=30$ from the same population and computing the sample mean $\bar{X}$ from each one, the histogram of those 10,000 sample means IS the sampling distribution of $\bar{X}$.

The CLT precisely characterizes the shape of this sampling distribution as $n$ grows large — and its answer is always the same: a Normal bell curve, regardless of the population's underlying shape.
