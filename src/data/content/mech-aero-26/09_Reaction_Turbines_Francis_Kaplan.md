---
title: "Reaction Turbines: Francis and Kaplan"
---

# Reaction Turbines: Francis and Kaplan

While Pelton wheels (impulse turbines) drop all the pressure in a stationary nozzle, **Reaction turbines** are completely submerged and full of water. The pressure drops continuously as the fluid passes *through* both the stationary guide vanes and the rotating runner blades. The runner is driven by both kinetic momentum (impulse) and pressure difference (reaction).

Reaction turbines are used for the vast majority of the world's hydroelectric power.

## 1. The Francis Turbine (Radial/Mixed Flow)

Invented by James B. Francis in 1848, this is the most common water turbine in the world (used at the Hoover Dam and Three Gorges Dam). It is ideal for **medium-head, medium-flow** applications.

**Flow Path:**
1. **Spiral Casing (Scroll Case):** Water from the penstock enters a massive snail-shell casing. The cross-section shrinks around the perimeter to ensure water enters the turbine evenly from all 360 degrees at a constant velocity.
2. **Guide Vanes (Wicket Gates):** Stationary, adjustable blades that swirl the water ($V_{\theta 1}$) and direct it onto the runner at the perfect angle. By rotating the wicket gates, the operator controls the mass flow rate and power output.
3. **Runner:** The water enters the rotor radially inward, does work on the complex curved blades, turns 90 degrees, and exits axially straight down.
4. **Draft Tube:** A diverging cone connecting the runner exit to the tailrace (river). It slows down the exiting water, recovering kinetic energy and creating a suction (negative pressure) below the runner, significantly increasing the total pressure drop across the turbine.

## 2. The Kaplan Turbine (Axial Flow)

Invented by Viktor Kaplan in 1913, this is essentially a giant boat propeller running in reverse. It is ideal for **low-head, exceptionally high-flow** applications (run-of-the-river dams with massive water volume but only a 10-30 meter drop).

**Features:**
- Water enters radially, is turned by guide vanes to flow completely axially, and strikes the propeller.
- **Double Regulation:** In a standard propeller turbine, efficiency drops terribly if the river flow rate changes. The Kaplan turbine solves this by having *adjustable pitch blades on the spinning rotor itself*, in addition to adjustable wicket gates. By constantly pitching the blades to match the water flow, a Kaplan turbine maintains over 90% efficiency across a massive range of operating conditions.

## 3. Euler Analysis of Reaction Turbines

Because water exits the runner and is dumped into the river, any kinetic swirling energy ($V_{\theta 2}$) remaining in the exiting water is wasted energy.

Therefore, reaction turbines are explicitly designed to have **zero exit swirl** at their design point. 
We design the blade exit angles such that the absolute exit velocity $V_2$ points straight down the axis ($V_{\theta 2} = 0$).

Plugging this into the Euler turbomachine equation for a turbine ($w = U_1 V_{\theta 1} - U_2 V_{\theta 2}$):
$$\boxed{w = U_1 V_{\theta 1}}$$

The power produced by a Francis or Kaplan turbine depends entirely on the rotor speed ($U_1$) and how much tangential swirl ($V_{\theta 1}$) the wicket gates can impart to the water before it enters the runner.
