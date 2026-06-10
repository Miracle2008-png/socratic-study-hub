# Dry Gas and Wet Gas Properties

Not all hydrocarbon reservoirs contain liquid oil. Many are filled entirely with natural gas. 

Handling natural gas requires a completely different thermodynamic approach than handling liquid crude oil. While liquids are relatively incompressible, gases are highly compressible, and their volume changes violently with even tiny changes in pressure and temperature.

## 1. Dry Gas Reservoirs

A **Dry Gas** reservoir contains hydrocarbons that are so light (predominantly pure Methane, $CH_4$, with some Ethane) that the mixture remains entirely in the gaseous phase deep in the hot reservoir *and* entirely in the gaseous phase when brought to the cold surface.

No liquid will ever drop out of a dry gas, regardless of the pressure.

### The Real Gas Law and the Z-Factor
To calculate the volume of gas underground, you cannot use the high school Ideal Gas Law ($PV = nRT$). 
At 10,000 psi, gas molecules are crushed so tightly together that they physically interact, attracting and repelling each other. They behave highly non-ideally.

Engineers must use the **Real Gas Law**:
$$ PV = Z n R T $$

**$Z$ is the Gas Compressibility Factor.**
*   It is an empirical fudge factor that corrects for non-ideal behavior.
*   If $Z = 1.0$, the gas is acting perfectly ideally.
*   At very high pressures, molecules are crushed so tightly they repel each other, taking up more space than predicted. $Z > 1.0$.
*   At moderate pressures, molecules are close enough to gravitationally attract each other, pulling themselves tighter and taking up less space than predicted. $Z < 1.0$ (sometimes dropping to $0.7$, meaning the gas is 30% denser than an ideal gas would be).

## 2. Gas Formation Volume Factor ($B_g$)

Just like oil, gas volume changes drastically from the reservoir to the surface.
**$B_g$** is the ratio of the volume of the gas at reservoir conditions to its volume at standard surface conditions ($14.7 \text{ psi}, 60^\circ\text{F}$).

$$ B_g = \frac{V_{res}}{V_{surface}} = \frac{P_{sc}}{T_{sc}} \times \frac{Z \cdot T}{P} \approx 0.02827 \frac{Z \cdot T}{P} $$
*(Where T is in Rankine, P is in psi, and $B_g$ is in cubic feet / standard cubic feet).*

Because gas is crushed into a tiny volume underground, $B_g$ is a very small decimal (e.g., $0.005$). 
This means $1.0$ cubic foot of space in the underground rock might hold $200$ standard cubic feet of sellable gas when it expands at the surface!

## 3. Wet Gas Reservoirs

A **Wet Gas** is fundamentally a gas in the reservoir, but it contains a higher percentage of medium-weight molecules (Propane, Butane, Pentane).

*   Deep in the hot reservoir, the fluid is 100% invisible gas.
*   As it travels up the wellbore to the surface, the temperature drastically drops. 
*   When it hits the cold surface separator, it crosses the "Dew Point" line. 
*   A clear, high-value liquid (called **Condensate** or Natural Gasoline) instantly condenses out of the gas stream, like water dew forming on a cold glass of lemonade.

A wet gas reservoir is incredibly profitable because you get to sell massive volumes of natural gas *and* a steady stream of highly valuable, ultra-light liquid condensate. 

## 4. Gas Material Balance ($P/Z$ Plot)

Estimating how much gas is left in the ground is remarkably simple compared to oil, because gas expands uniformly.

If a reservoir is a sealed tank of gas, as you produce gas, the pressure inside the tank drops linearly relative to the amount of gas removed. 
Engineers use the **$P/Z$ Plot**.
1.  They plot $(Pressure / Z\text{-factor})$ on the Y-axis.
2.  They plot $G_p$ (Cumulative amount of gas produced so far) on the X-axis.
3.  The data points form a perfectly straight line trending downward.

By simply drawing a straight line through the data points and extending it until it hits zero pressure on the X-axis, the engineer can instantly predict the **Original Gas In Place (OGIP)**. If the line hits zero at 100 Billion Cubic Feet, then there were exactly 100 BCF in the ground before you started.
