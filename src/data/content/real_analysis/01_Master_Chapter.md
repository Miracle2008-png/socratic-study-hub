# Real Analysis

## 1. Fundamentals of Real Numbers
The real numbers $\mathbb{R}$ form a complete ordered field. The **Completeness Axiom** states that every non-empty set of real numbers that is bounded above has a least upper bound (supremum) in $\mathbb{R}$.
- **Supremum (sup):** The least upper bound of a set.
- **Infimum (inf):** The greatest lower bound of a set.

## 2. Limits of Sequences
A sequence $(a_n)$ converges to a limit $L$ if for every $\epsilon > 0$, there exists an integer $N$ such that for all $n \ge N$:
$$ |a_n - L| < \epsilon $$
A **Cauchy Sequence** is one where the terms become arbitrarily close to each other. In $\mathbb{R}$, every Cauchy sequence converges (completeness).

## 3. Limits of Functions and Continuity
A function $f(x)$ has a limit $L$ as $x \to c$ (denoted $\lim_{x \to c} f(x) = L$) if for every $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$ 0 < |x - c| < \delta \implies |f(x) - L| < \epsilon $$
A function is **continuous** at $c$ if $\lim_{x \to c} f(x) = f(c)$.
**Uniform Continuity:** $f$ is uniformly continuous on a domain if $\delta$ depends only on $\epsilon$, and not on the point $c$.

## 4. Differentiability
A function $f$ is differentiable at $c$ if the limit:
$$ f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h} $$
exists. Differentiability implies continuity, but not vice versa (e.g., $f(x) = |x|$ at $x=0$).

## 5. Step-by-Step Solved Examples

### Example 1: Epsilon-N Proof for Sequence Convergence
**Problem:** Prove that $\lim_{n \to \infty} \frac{3n}{n+2} = 3$ using the $\epsilon-N$ definition.
**Solution:**
1. Let $\epsilon > 0$ be given. We need to find $N$ such that for $n \ge N$, $|\frac{3n}{n+2} - 3| < \epsilon$.
2. Simplify the absolute value expression:
   $$ \left| \frac{3n - 3(n+2)}{n+2} \right| = \left| \frac{3n - 3n - 6}{n+2} \right| = \frac{6}{n+2} $$
3. We want $\frac{6}{n+2} < \epsilon$.
4. Solve for $n$: $n+2 > \frac{6}{\epsilon} \implies n > \frac{6}{\epsilon} - 2$.
5. Choose $N = \lceil \frac{6}{\epsilon} \rceil$ (the next integer). Then for all $n \ge N$, $n > \frac{6}{\epsilon} - 2$, which implies $\frac{6}{n+2} < \epsilon$, completing the proof.

### Example 2: Epsilon-Delta Proof for a Limit
**Problem:** Prove that $\lim_{x \to 2} (4x - 1) = 7$ using the $\epsilon-\delta$ definition.
**Solution:**
1. Let $\epsilon > 0$ be given. We must find $\delta > 0$ such that if $0 < |x - 2| < \delta$, then $|(4x - 1) - 7| < \epsilon$.
2. Analyze the distance to the limit:
   $$ |(4x - 1) - 7| = |4x - 8| = 4|x - 2| $$
3. We want $4|x - 2| < \epsilon \implies |x - 2| < \frac{\epsilon}{4}$.
4. Let $\delta = \frac{\epsilon}{4}$.
5. Proof: If $0 < |x - 2| < \delta$, then $|x - 2| < \frac{\epsilon}{4}$. Multiplying by 4 yields $4|x - 2| < \epsilon \implies |(4x - 1) - 7| < \epsilon$. Thus, the limit holds.

### Example 3: Uniform Continuity
**Problem:** Show that $f(x) = x^2$ is not uniformly continuous on $\mathbb{R}$.
**Solution:**
1. Assume for contradiction it is uniformly continuous. Then for $\epsilon = 1$, there exists $\delta > 0$ such that $|x - y| < \delta \implies |x^2 - y^2| < 1$ for all $x, y \in \mathbb{R}$.
2. Let $x = n$ and $y = n + \frac{\delta}{2}$ for some large positive integer $n$.
3. Check the condition $|x - y| = \frac{\delta}{2} < \delta$, which is satisfied.
4. Evaluate $|f(x) - f(y)|$:
   $$ |x^2 - y^2| = |x - y||x + y| = \frac{\delta}{2} (2n + \frac{\delta}{2}) = n\delta + \frac{\delta^2}{4} $$
5. By choosing $n$ large enough ($n > \frac{1}{\delta}$), $n\delta > 1$, making $|f(x) - f(y)| > 1$.
6. This contradicts the uniform continuity definition. Thus, $f(x) = x^2$ is not uniformly continuous on $\mathbb{R}$.
