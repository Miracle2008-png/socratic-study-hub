# Immiscible Displacement and Buckley-Leverett

When a reservoir's natural pressure is depleted, engineers use Secondary Recovery: they pump millions of barrels of ocean water down injection wells to physically sweep the remaining oil toward the producing wells.

Because oil and water chemically repel each other (they do not mix), this is called an **Immiscible Displacement**. 

How efficiently does the injected water push the oil? Does it form a solid wall of water that pushes 100% of the oil like a piston, or does the water shoot past the oil, leaving millions of barrels behind? To mathematically model this underground fluid war, engineers use the **Buckley-Leverett Theory**.

## 1. Fractional Flow ($f_w$)

To understand displacement, we must understand Fractional Flow. 

If a piece of rock is filled with both water and oil, and you push them both simultaneously, what percentage of the resulting fluid stream will be water?
This is the **Fractional Flow of Water ($f_w$)**.

Using Darcy's Law and the concepts of Relative Permeability ($k_r$) and Viscosity ($\mu$), the equation for Fractional Flow simplifies to:

$$ f_w = \frac{1}{1 + \frac{k_{ro}}{k_{rw}} \frac{\mu_w}{\mu_o}} $$

This equation is profound. It proves that the percentage of water flowing depends entirely on two ratios:
1.  **The Viscosity Ratio ($\mu_w / \mu_o$):** If the oil is incredibly thick and heavy ($\mu_o$ is massive), the ratio is very small. $f_w$ rapidly approaches 1.0. This means even if there is mostly oil in the rock, the water will flow so much easier that the resulting stream will be 99% water.
2.  **The Relative Permeability Ratio ($k_{ro} / k_{rw}$):** This depends entirely on the Water Saturation ($S_w$). As the rock fills with water, the water establishes continuous flow paths, choking off the oil.

## 2. The Fractional Flow Curve

If you plot Fractional Flow ($f_w$) on the Y-axis (from 0 to 1.0) and Water Saturation ($S_w$) on the X-axis (from 0 to 1.0), you get an S-shaped curve.

*   At Irreducible Water Saturation ($S_{wirr} = 20\%$), the water is glued to the rock. $f_w = 0$. Only pure oil flows.
*   As $S_w$ increases slightly, the water finds a path, and $f_w$ skyrockets. At $S_w = 50\%$, the flowing stream might already be 90% water ($f_w = 0.9$).
*   At Residual Oil Saturation ($S_{or} = 30\%$, meaning $S_w = 70\%$), the oil is permanently trapped as disconnected droplets. $f_w = 1.0$. The well produces 100% water.

## 3. The Buckley-Leverett Frontal Advance

In 1942, S.E. Buckley and M.C. Leverett applied the Law of Conservation of Mass to the Fractional Flow curve. 
They proved that when you inject water into an oil reservoir, the water does not move as a smooth, gradual gradient. 

Instead, it moves as a violent, sharp **Shock Front**. 

Imagine a vertical cross-section of the rock between an injection well and a production well.
1.  **Ahead of the Front:** The rock is pristine. It is at Irreducible Water Saturation ($S_{wirr}$). Only 100% pure oil is flowing toward the producer.
2.  **The Shock Front:** Suddenly, the wall of injected water arrives. Over a distance of just a few inches, the water saturation violently spikes from 20% to perhaps 60%. 
3.  **Behind the Front:** The rock has been swept. Most of the oil is gone. The water is flowing easily, dragging a tiny, agonizingly slow trickle of remaining oil droplets behind it until it eventually hits Residual Oil Saturation ($S_{or}$).

## 4. Breakthrough

The most terrifying moment in a waterflood project is **Water Breakthrough**.

*   For three years, the producing well produces 1,000 barrels of pure, black oil per day. The Shock Front is miles away, silently advancing through the dark rock.
*   One day, the Shock Front finally hits the producing well. 
*   Because the saturation jumps instantly at the front, the well's production crashes overnight. In a single week, the well goes from 0% water cut to 80% water cut. 

Using Buckley-Leverett theory, the reservoir engineer can calculate the exact velocity of this shock front by drawing a tangent line on the Fractional Flow curve. This allows them to predict the exact month and year that the massive wall of water will hit the producing well, allowing the company to plan their finances accordingly.
