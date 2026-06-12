# Average Value of a Function

Finding the average of a finite set of numbers is straightforward: sum the values and divide by the count $n$. But in engineering and physical sciences, we frequently encounter continuous signals or changing environments—how do you find the average temperature over a 24-hour period when the temperature changes smoothly from moment to moment? What is the average power dissipated by a resistor subject to an alternating current? 

For continuously varying quantities with infinitely many data points, we replace discrete summation with integration.

## 1. The Average Value Formula

For a continuous function $f(x)$ defined on a closed interval $[a, b]$, the **average value** (or mean value) $f_{avg}$ is given by:

$$ f_{avg} = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx $$

### Visualizing the Concept

The definite integral $\int_{a}^{b} f(x) \, dx$ gives the net signed area under the curve $y = f(x)$ from $x = a$ to $x = b$. 

Imagine this area represents a volume of water contained in an uneven tank, or a pile of sand. The average value $f_{avg}$ is the uniform height the material would settle to if it were perfectly leveled out across the entire interval width, $b - a$. Therefore, the area of the rectangle formed by width $(b-a)$ and height $f_{avg}$ is exactly equal to the total area under the original continuous curve:

$$ \text{Area of Rectangle} = (b-a) \times f_{avg} = \int_{a}^{b} f(x) \, dx $$

## 2. The Mean Value Theorem for Integrals

A core theoretical pillar supporting this concept is the **Mean Value Theorem for Definite Integrals**. It states that if $f(x)$ is continuous on $[a, b]$, there must exist at least one point $c$ in the interval $[a, b]$ such that $f(c) = f_{avg}$.

$$ \int_{a}^{b} f(x) \, dx = f(c) (b - a) $$

**Engineering Context:** If the outdoor temperature averages 70°F over a continuous 24-hour period, the temperature must have been exactly 70°F at least one specific moment during that day. You cannot transition from a colder average to a hotter peak (or vice versa) without passing precisely through the mean.

## 3. Engineering Application: Root Mean Square (RMS)

In electrical engineering and signal processing, the standard average value is sometimes zero—for instance, a pure alternating current (AC) sine wave fluctuates equally above and below zero. Thus, $\int_0^{T} \sin(t) \, dt = 0$. However, the power delivered by that current (which goes as $I^2 R$) is clearly not zero; it can still light a bulb or run a motor.

To find the effective value of an alternating signal, engineers use the **Root Mean Square (RMS)**. The process follows its name in reverse:

1.  **Square** the function: $[f(t)]^2$ (This ensures all values are positive and proportional to power).
2.  Find the **Mean** (Average) of this squared function over a period $T = b - a$: $\frac{1}{b-a} \int_a^b [f(t)]^2 \, dt$
3.  Take the square **Root** of the entire result to return to the original units (e.g., Volts or Amps).

$$ f_{rms} = \sqrt{ \frac{1}{b-a} \int_{a}^{b} [f(x)]^2 \, dx } $$

When an electrician states that a wall outlet provides 120 Volts AC, they are stating the $V_{rms}$. The actual peak voltage is higher ($120 \times \sqrt{2} \approx 170\text{V}$), but the RMS value is what dictates the actual power delivered to your appliances.

---

## Example Problems

### Example 1: Basic Average Value (Easy)

**Problem:** The velocity of a vehicle in m/s is given by $v(t) = 3t^2$ from $t = 0$ to $t = 4$ seconds. What is the average velocity of the vehicle over this time interval?

**Solution:**
Use the average value formula with $[a, b] = [0, 4]$ and $f(t) = 3t^2$.

1. **Set up the formula:**
   $$ v_{avg} = \frac{1}{4 - 0} \int_{0}^{4} 3t^2 \, dt $$
   
2. **Evaluate the integral:**
   $$ \int_{0}^{4} 3t^2 \, dt = \left[ t^3 \right]_0^4 = 4^3 - 0^3 = 64 $$
   
3. **Calculate the average:**
   $$ v_{avg} = \frac{1}{4} (64) = 16 \text{ m/s} $$

The average velocity is $16 \text{ m/s}$.

### Example 2: The Mean Value Theorem (Medium)

**Problem:** Find the average value of $f(x) = \sqrt{x}$ on the interval $[0, 9]$, and find the value(s) of $c$ in that interval guaranteed by the Mean Value Theorem for Integrals.

**Solution:**
1. **Find the average value:**
   $$ f_{avg} = \frac{1}{9 - 0} \int_{0}^{9} x^{1/2} \, dx $$
   $$ \int_{0}^{9} x^{1/2} \, dx = \left[ \frac{2}{3} x^{3/2} \right]_0^9 = \frac{2}{3}(9^{3/2}) - 0 = \frac{2}{3}(27) = 18 $$
   $$ f_{avg} = \frac{1}{9}(18) = 2 $$

2. **Find $c$ such that $f(c) = f_{avg}$:**
   $$ f(c) = \sqrt{c} = 2 $$
   $$ c = 4 $$
The average value is 2, and the point $c=4$ is within the interval $[0, 9]$.

### Example 3: RMS Voltage of a Sine Wave (Hard)

**Problem:** An AC voltage signal is given by $V(t) = V_p \sin(\omega t)$, where $V_p$ is the peak voltage. Find the RMS voltage over one full period $T = \frac{2\pi}{\omega}$.

**Solution:**
1. **Set up the RMS formula:**
   $$ V_{rms} = \sqrt{ \frac{1}{T} \int_{0}^{T} [V_p \sin(\omega t)]^2 \, dt } $$
   
2. **Focus on the mean square first:**
   $$ \frac{1}{T} \int_{0}^{T} V_p^2 \sin^2(\omega t) \, dt = \frac{V_p^2}{T} \int_{0}^{T} \sin^2(\omega t) \, dt $$
   
3. **Use the half-angle identity $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$:**
   $$ \frac{V_p^2}{T} \int_{0}^{T} \frac{1 - \cos(2\omega t)}{2} \, dt = \frac{V_p^2}{2T} \left[ t - \frac{\sin(2\omega t)}{2\omega} \right]_0^T $$
   
4. **Evaluate at the bounds $0$ and $T = \frac{2\pi}{\omega}$:**
   $$ \frac{V_p^2}{2T} \left( \left( T - \frac{\sin(2\omega \frac{2\pi}{\omega})}{2\omega} \right) - (0 - 0) \right) $$
   Since $\sin(4\pi) = 0$, the integral evaluates to $T$.
   $$ \frac{V_p^2}{2T} (T) = \frac{V_p^2}{2} $$
   
5. **Take the square root to find RMS:**
   $$ V_{rms} = \sqrt{ \frac{V_p^2}{2} } = \frac{V_p}{\sqrt{2}} $$
   
This classic engineering result proves that the RMS voltage of any pure sine wave is the peak voltage divided by $\sqrt{2}$.

### Example 4: Transient Power (Hard)

**Problem:** The power dissipated by an electronic component over time is given by $P(t) = 10 e^{-2t}$ Watts. Find the average power dissipated from $t = 0$ to $t = 2$ seconds.

**Solution:**
1. **Set up the average value formula:**
   $$ P_{avg} = \frac{1}{2 - 0} \int_{0}^{2} 10 e^{-2t} \, dt $$
   
2. **Evaluate the integral:**
   $$ \int_{0}^{2} 10 e^{-2t} \, dt = 10 \left[ \frac{e^{-2t}}{-2} \right]_0^2 = -5 \left[ e^{-4} - e^{0} \right] = -5(e^{-4} - 1) = 5(1 - e^{-4}) $$
   
3. **Calculate the average:**
   $$ P_{avg} = \frac{1}{2} (5(1 - e^{-4})) = 2.5(1 - e^{-4}) \approx 2.45 \text{ Watts} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Average Value Function",
        "icon": "BrainCircuit",
        "description": "Integration for continuous averages"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Mean Value Theorem",
        "icon": "ArrowRightCircle",
        "description": "Existence of mean points"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Root Mean Square",
        "icon": "ArrowRightCircle",
        "description": "Effective values in engineering"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Signal Processing",
        "icon": "CheckCircle",
        "description": "Power and energy metrics"
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
      "source": "1",
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
