# Integral Method of Data Analysis

The **Integral Method** is the easiest and most common way to analyze batch reactor data to find the reaction order ($\alpha$) and the rate constant ($k$). 

It is a "guess and check" method. You guess an integer reaction order (0, 1, or 2), integrate the rate law equation, and see if the resulting mathematical function matches your raw data.

## 1. The Core Concept

Our starting differential equation for a constant-volume batch reactor is:
$$ -\frac{dC_A}{dt} = k C_A^\alpha $$

Instead of trying to calculate the derivative $\frac{dC_A}{dt}$ from raw data (which amplifies statistical noise), we integrate the equation from Time = 0 ($C_A = C_{A0}$) to Time = $t$ ($C_A = C_A$).

We rearrange the equation to separate the variables ($C_A$ on the left, $t$ on the right):
$$ -\frac{dC_A}{C_A^\alpha} = k \cdot dt $$

Now, let's guess the order and integrate.

## 2. Guessing Zero-Order ($\alpha = 0$)

If the reaction is zero-order, the rate law is $-r_A = k$.
$$ -\int_{C_{A0}}^{C_A} dC_A = k \int_{0}^{t} dt $$
$$ -(C_A - C_{A0}) = k \cdot t $$
$$ C_A = -k \cdot t + C_{A0} $$

This is the equation of a straight line ($y = mx + b$).
*   $y = C_A$
*   $x = t$
*   Slope ($m$) = $-k$

**How to check:** Plot your raw $C_A$ data directly against time $t$. If it forms a perfectly straight line, your guess was right! The reaction is zero-order, and the slope of the line is $-k$. If it forms a curve, your guess was wrong. Move to the next guess.

## 3. Guessing First-Order ($\alpha = 1$)

If zero-order failed, we guess first-order. The rate law is $-r_A = k C_A$.
$$ -\int_{C_{A0}}^{C_A} \frac{dC_A}{C_A} = k \int_{0}^{t} dt $$
$$ -(\ln C_A - \ln C_{A0}) = k \cdot t $$
$$ \ln\left(\frac{C_{A0}}{C_A}\right) = k \cdot t $$

This is a straight line through the origin ($y = mx$).
*   $y = \ln(C_{A0}/C_A)$
*   $x = t$
*   Slope ($m$) = $k$

**How to check:** Take your raw $C_A$ data and calculate $\ln(C_{A0}/C_A)$ for every point. Plot those new values against time $t$. If *this* plot is a straight line, the reaction is first-order, and the slope is $k$.

## 4. Guessing Second-Order ($\alpha = 2$)

If first-order failed, we guess second-order. The rate law is $-r_A = k C_A^2$.
$$ -\int_{C_{A0}}^{C_A} \frac{dC_A}{C_A^2} = k \int_{0}^{t} dt $$
$$ -\left( -\frac{1}{C_A} - \left(-\frac{1}{C_{A0}}\right) \right) = k \cdot t $$
$$ \frac{1}{C_A} - \frac{1}{C_{A0}} = k \cdot t $$
$$ \frac{1}{C_A} = k \cdot t + \frac{1}{C_{A0}} $$

This is a straight line ($y = mx + b$).
*   $y = 1/C_A$
*   $x = t$
*   Slope ($m$) = $k$

**How to check:** Calculate $1/C_A$ for every data point and plot it against time $t$. If it forms a straight line, the reaction is second-order.

### Summary of the Integral Method
1. Guess an order.
2. Integrate the rate law to get a linear equation $y = mx + b$.
3. Plot the specific $y$-function against time.
4. If the $R^2$ value of the linear trendline is very close to 1.0 (a straight line), your guess is correct, and the slope gives you $k$.
5. If the line is curved, your guess is wrong. Try the next order.

## 5. Integral Workflow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "guess", "data": { "label": "Guess Order", "icon": "HelpCircle", "description": "Try alpha = 0, 1, 2." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "int", "data": { "label": "Integrate", "icon": "Activity", "description": "Form y=mx+b." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "plot", "data": { "label": "Plot Data", "icon": "BarChart2", "description": "Transform C_A vs t." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "check", "data": { "label": "Check Linearity", "icon": "CheckCircle", "description": "Straight line confirms order." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "guess", "target": "int", "animated": true },
    { "source": "int", "target": "plot", "animated": true },
    { "source": "plot", "target": "check", "animated": true }
  ]
}
```
