# Average Value of a Function

Finding the average of a finite set of numbers is easy: add them up and divide by $n$. But how do you find the average temperature over a 24-hour period when the temperature is changing continuously? There are infinitely many data points.

Integration provides the solution.

## 1. The Average Value Formula

For a continuous function $f(x)$ on the interval $[a, b]$, the average value $f_{avg}$ is defined as:

$$ f_{avg} = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx $$

**Visualizing it:**
The integral $\int_{a}^{b} f(x) \, dx$ represents the area under the curve.
If you imagine that area as a pile of sand, the average value $f_{avg}$ is the height the sand would settle to if you leveled it out perfectly flat across the interval from $a$ to $b$.
Therefore, the area of the rectangle formed by $(b-a) \times f_{avg}$ is exactly equal to the area under the original curve.

## 2. The Mean Value Theorem for Integrals

If $f(x)$ is continuous on $[a, b]$, there must exist at least one point $c$ in the interval such that $f(c) = f_{avg}$.

$$ \int_{a}^{b} f(x) \, dx = f(c) (b - a) $$

If the temperature averages 70°F over a day, and it changes continuously, there must have been at least one specific moment during the day when the temperature was exactly 70°F.

## 3. Root Mean Square (RMS)

In engineering, particularly electrical engineering, the simple average is sometimes zero (like an alternating current AC sine wave). But the power delivered by that current is not zero.

To find the effective value of such a function, we use the **Root Mean Square (RMS)**.
1.  **Square** the function: $[f(x)]^2$
2.  Find the **Mean** (Average) of the squared function using the integral formula: $\frac{1}{b-a} \int_a^b [f(x)]^2 \, dx$
3.  Take the square **Root** of the result.

$$ f_{rms} = \sqrt{ \frac{1}{b-a} \int_{a}^{b} [f(x)]^2 \, dx } $$

When an electrician says the wall outlet provides 120 Volts AC, they are stating the $V_{rms}$. The actual peak voltage is higher ($120 \times \sqrt{2} \approx 170V$), but the RMS value is what dictates the power delivered to a lightbulb.
