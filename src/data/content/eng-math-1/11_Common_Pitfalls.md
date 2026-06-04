# 11. Common Pitfalls & Mistakes

Engineering students frequently lose marks or design integrity due to these highly common misunderstandings regarding limits.

### Pitfall 1: Assuming DNE means Vertical Asymptote
If a limit Does Not Exist (DNE), it does not automatically mean there is a vertical asymptote. A jump discontinuity also yields a DNE result. 
*Always check the one-sided limits to determine the nature of the DNE.*

### Pitfall 2: Treating Infinity as a Number
You cannot do arithmetic with infinity. 
$\infty - \infty \neq 0$
$0 \cdot \infty \neq 0$
$\frac{\infty}{\infty} \neq 1$
These are indeterminate forms! You must manipulate the function algebraically to see which infinity is "growing faster".

### Pitfall 3: Applying L'Hôpital's Rule Blindly
L'Hôpital's Rule ONLY applies if direct substitution yields $\frac{0}{0}$ or $\frac{\infty}{\infty}$. 
If you try to use it on $\lim_{x \to 0} \frac{\cos x}{x}$, which evaluates to $\frac{1}{0}$ (Undefined/Asymptote), differentiating will give $\frac{-\sin x}{1} \to 0$. **This is completely wrong.** The actual limit DNE.

### Pitfall 4: Forgetting the Chain Rule in L'Hôpital's
When differentiating the numerator and denominator for L'Hôpital's Rule, you must apply all standard derivative rules (Product, Quotient, Chain). Many students forget to apply the Chain Rule when differentiating complex numerators.

### Pitfall 5: Confusing Undefined with Indeterminate
*   $\frac{5}{0}$ is **Undefined**. It means there is a vertical asymptote. The limit is either $\infty, -\infty$, or DNE.
*   $\frac{0}{0}$ is **Indeterminate**. It means there is a hole. The limit could be literally anything. You must do more work.
