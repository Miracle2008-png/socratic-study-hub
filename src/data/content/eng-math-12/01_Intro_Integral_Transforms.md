# 1. What is an Integral Transform?

In the previous topics, we solved Differential Equations strictly in the "Time Domain" ($t$). We used derivatives to relate the position, velocity, and acceleration of an object over time.

However, many engineering problems are extremely difficult to solve in the time domain. For instance, what if you are analyzing a circuit and you suddenly flip a switch, causing the voltage to jump from 0 to 120 instantly? The driving function $g(t)$ is discontinuous. The methods of Undetermined Coefficients and Variation of Parameters fail miserably when dealing with discontinuities.

To solve these problems, engineers use a mathematical portal called an **Integral Transform**.

### The Concept of a Transform
A transform is a mathematical machine that takes a difficult problem in one domain, translates it into a different domain where the problem becomes easy, allows you to solve the easy problem, and then translates the answer back to the original domain.

Think of logarithms. Before calculators, multiplying $3,485 \times 9,124$ by hand was tedious and error-prone. 
*   **Transform:** Take the logarithm of both numbers. 
*   **Solve the easy problem:** Logarithms turn multiplication into simple addition! ($\log(ab) = \log a + \log b$). You just add the two numbers together.
*   **Inverse Transform:** Take the inverse logarithm ($10^x$) of the result to get your final answer.

### Integral Transforms
An Integral Transform does this same trick, but for functions instead of numbers. It transforms a function of time $f(t)$ into a new function $F(s)$, where $s$ is a completely new "frequency" variable.

The general formula for an integral transform is:
$$ F(s) = \int_a^b K(s,t) f(t) \, dt $$
The function $K(s,t)$ is called the **Kernel** of the transform. You multiply your function by the kernel, and integrate out the time variable $t$. You are left with a function strictly in terms of $s$.

By choosing different kernels, mathematicians have invented different transforms (e.g., the Fourier Transform, the Mellin Transform). The most powerful transform for solving initial value problems is the **Laplace Transform**.
