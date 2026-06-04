# 11. Rouché's Theorem

The Argument Principle is powerful, but it requires evaluating an integral.
What if we want to locate the roots of a terrifyingly complex polynomial like $P(z) = z^7 - 4z^3 + z - 1$, and we don't want to do any calculus at all?

In 1862, Eugène Rouché discovered a brilliant geometric trick that builds off the Argument Principle.

### The Dog on a Leash
Imagine you are walking a dog in a giant park. The origin $(0,0)$ is a lamppost.
Your path is $f(z)$, and the dog's path is $g(z)$. 
The dog is connected to you by a leash of length $L$.

If you walk in a massive circle around the lamppost, the dog will also walk in a massive circle around the lamppost.
As long as the leash is strictly shorter than your distance to the lamppost ($|f(z) - g(z)| < |f(z)|$), it is physically impossible for the dog to loop around the lamppost a different number of times than you do! You both must complete the exact same number of laps.

In the language of the Argument Principle, the number of laps around the origin is exactly equal to the number of Roots ($Z$).

### Rouché's Theorem
Let $f(z)$ and $g(z)$ be analytic functions inside and on a closed contour $C$.
If the strict inequality holds everywhere on the boundary $C$:
$$
|f(z) - g(z)| < |f(z)|
$$
*(Or equivalently, if we define the "leash" as a smaller perturbation function $h(z)$ such that $|h(z)| < |f(z)|$, then $f(z)$ and $f(z) + h(z)$ have the same number of roots).*

Then $f(z)$ and $g(z)$ possess the **exact same number of zeros** inside the contour $C$.

### Example: Locating Roots
How many roots does $P(z) = z^7 - 4z^3 + z - 1$ have inside the unit circle $|z| = 1$?

1.  **Split the function:** We must split $P(z)$ into a "Big" dominant function $f(z)$ and a "Small" leash function $h(z)$.
2.  **Analyze the boundary:** On the unit circle, the magnitude $|z|$ is exactly 1. 
    Let's look at the terms: $|z^7|=1$, $|-4z^3|=4$, $|z|=1$, $|-1|=1$.
3.  **Choose the Big function:** The term $-4z^3$ is obviously the largest. 
    Let $f(z) = -4z^3$. 
    Let the remainder be the leash: $h(z) = z^7 + z - 1$.
4.  **Check the condition:** On the boundary $|z|=1$:
    $|f(z)| = |-4z^3| = \mathbf{4}$
    $|h(z)| = |z^7 + z - 1| \le |z^7| + |z| + |-1| = 1 + 1 + 1 = \mathbf{3}$.
    Since $3 < 4$, the leash is shorter than the dominant function! The condition $|h(z)| < |f(z)|$ is perfectly satisfied!
5.  **Conclusion:** By Rouché's Theorem, the terrifying original polynomial $P(z)$ has the exact same number of roots as the simple dominant function $f(z) = -4z^3$.
    Because $-4z^3$ obviously has exactly 3 roots (at the origin), the massive 7th-degree polynomial is mathematically guaranteed to have exactly **3 roots** trapped inside the unit circle!
