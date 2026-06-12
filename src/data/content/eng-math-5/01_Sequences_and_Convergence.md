# Sequences and Convergence

In calculus, we transition from studying continuous functions to studying discrete lists of numbers. This forms the foundation for understanding infinite series, which are crucial for solving differential equations and approximating complex functions in engineering.

## 1. What is a Sequence?

A **sequence** is simply an ordered list of numbers.
$$ a_1, a_2, a_3, a_4, \dots, a_n, \dots $$
The numbers $a_n$ are called the *terms* of the sequence, and $n$ is the *index*.

A sequence can be defined by an explicit formula for the $n$-th term:
*   $a_n = \frac{n}{n+1} \implies \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \dots$

Or it can be defined recursively (like the Fibonacci sequence):
*   $a_1 = 1, a_2 = 1, a_n = a_{n-1} + a_{n-2} \implies 1, 1, 2, 3, 5, 8, \dots$

## 2. Convergence and Divergence

The most important question about a sequence is: **What happens as $n$ goes to infinity?**

*   **Convergence:** If the terms $a_n$ approach a single, finite, real number $L$ as $n$ gets infinitely large, the sequence converges to $L$.
    $$ \lim_{n \to \infty} a_n = L $$
    *Example:* $a_n = \frac{1}{n}$. The terms are $1, 1/2, 1/3, 1/4 \dots$ As $n \to \infty$, $a_n \to 0$. The sequence converges to 0.
*   **Divergence:** If the terms do not approach a single finite number, the sequence diverges. This can happen in two ways:
    1.  Growing infinitely large: $a_n = n^2 \implies 1, 4, 9, 16 \dots$ (Diverges to $\infty$)
    2.  Oscillating: $a_n = (-1)^n \implies -1, 1, -1, 1 \dots$ (Diverges because it never settles on a single number).

## 3. Limit Laws for Sequences

If we have two convergent sequences, $\lim a_n = A$ and $\lim b_n = B$, the standard limit laws apply just as they do for continuous functions:
*   $\lim (a_n + b_n) = A + B$
*   $\lim (c \cdot a_n) = c \cdot A$
*   $\lim (a_n \cdot b_n) = A \cdot B$
*   $\lim \frac{a_n}{b_n} = \frac{A}{B}$ (provided $B \neq 0$)

## 4. The Squeeze Theorem

If you cannot easily evaluate the limit of $a_n$, but you can trap it between two sequences whose limits you *do* know, you can use the Squeeze Theorem.

If $b_n \le a_n \le c_n$ for all $n > N$, and $\lim_{n \to \infty} b_n = L = \lim_{n \to \infty} c_n$, then:
$$ \lim_{n \to \infty} a_n = L $$

*Example:* Does $a_n = \frac{\sin(n)}{n}$ converge?
We know that $-1 \le \sin(n) \le 1$.
Therefore, $-\frac{1}{n} \le \frac{\sin(n)}{n} \le \frac{1}{n}$.
Since $\lim (-\frac{1}{n}) = 0$ and $\lim (\frac{1}{n}) = 0$, by the Squeeze Theorem, $\lim \frac{\sin(n)}{n} = 0$.

## 5. Bounded and Monotonic Sequences

*   **Monotonicity:** A sequence is *increasing* if $a_{n+1} \ge a_n$ for all $n$. It is *decreasing* if $a_{n+1} \le a_n$. If it only does one or the other, it is monotonic.
*   **Boundedness:** A sequence is *bounded above* if there is a number $M$ such that $a_n \le M$ for all $n$. It is *bounded below* if there is a number $m$ such that $a_n \ge m$.

**The Monotonic Sequence Theorem:**
> Every bounded, monotonic sequence is convergent.

This is a powerful theorem. If you can prove a sequence is always increasing, and you can prove it never crosses a certain ceiling, you don't need to know its exact limit to guarantee that it *does* converge.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Sequences and Convergence",
        "icon": "BrainCircuit",
        "description": "Core Concept: Sequences and Convergence"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Infinite Series",
        "icon": "ArrowRightCircle",
        "description": "Summation of infinite sequences."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Convergence Tests",
        "icon": "ArrowRightCircle",
        "description": "Ratio, root, and integral tests."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Power Series",
        "icon": "CheckCircle",
        "description": "Taylor and Maclaurin expansions."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
