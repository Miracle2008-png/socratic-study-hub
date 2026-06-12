# Capital Cost Estimation

Before a company will approve the construction of a new chemical plant, the engineering team must provide an estimate of how much it will cost to build. 

This upfront investment is called the **Capital Cost** or **Fixed Capital Investment (FCI)**. It includes the cost of buying the equipment, pouring concrete, running pipes, paying construction workers, and engineering fees.

## 1. Classes of Estimates

At the very beginning of a project (when you only have a BFD on a napkin), you cannot possibly know the cost down to the penny. Cost estimates become more accurate as the engineering design matures. The Association for the Advancement of Cost Engineering (AACE) defines five classes of estimates:

*   **Class 5 (Order of Magnitude):** Done at the conceptual phase. Accuracy is wildly loose ($+50\%$ to $-30\%$). Based purely on historical data of similar plants.
*   **Class 4 (Study/Feasibility):** Based on a preliminary PFD. Accuracy is $+30\%$ to $-20\%$. Used to decide if the project is worth continuing.
*   **Class 3 (Preliminary/Budget):** Based on a finished PFD and early P&IDs. Accuracy is $+20\%$ to $-10\%$. This is the estimate used to request the actual multi-million dollar budget from the Board of Directors.
*   **Class 1 & 2 (Detailed/Definitive):** Done right before construction begins, based on fully finished P&IDs and actual vendor quotes for every piece of steel. Accuracy is $+5\%$ to $-5\%$.

## 2. Six-Tenths Rule for Equipment (Class 5)

How do you estimate the cost of a reactor if you know the cost of a similar, smaller reactor built 5 years ago?
You use scaling laws. The cost of chemical equipment does not scale linearly. A tank that holds twice as much liquid does not cost twice as much to build (because volume increases by $r^3$, but the steel surface area only increases by $r^2$).

The industry uses the **Six-Tenths Factor Rule**:
$$ C_2 = C_1 \left( \frac{S_2}{S_1} \right)^n $$
*   $C_1$ is the known cost of the old equipment.
*   $S_1$ is the size/capacity of the old equipment (e.g., $1000 \text{ m}^3$).
*   $S_2$ is the required size of the new equipment.
*   $C_2$ is the estimated cost of the new equipment.
*   $n$ is the scaling exponent. For a generic piece of equipment, $n \approx 0.6$. (Hence, the "six-tenths" rule). For a compressor, $n$ might be $0.8$. For a simple tank, $n$ might be $0.5$.

## 3. Adjusting for Inflation: Cost Indexes

A reactor cost $\$500,000$ in the year 2005. How much does it cost today? 
Due to inflation, the rising cost of steel, and labor rates, prices constantly change. Engineers use **Cost Indexes** (like the CEPCI - Chemical Engineering Plant Cost Index) published monthly in engineering journals.

$$ \text{Cost Today} = \text{Cost in Past} \times \left( \frac{\text{Index Today}}{\text{Index in Past}} \right) $$

## 4. The Lang Factor Method (Class 4)

If you have a PFD, you know what equipment you need (4 pumps, 2 columns, 1 reactor). You can look up the purchase cost of each piece of bare equipment using charts or software. Let the sum of all bare equipment costs be $E$.

But buying a pump is useless. You must pay a worker to pour a concrete foundation, run electrical wire to it, attach steel piping to it, and install sensors. The total installed cost is vastly higher than the purchase cost of the bare equipment.

To find the total Fixed Capital Investment (FCI) of the entire plant, you simply multiply the total bare equipment cost ($E$) by a massive multiplier called the **Lang Factor**.

$$ \text{FCI} = E \times \text{Lang Factor} $$

The Lang factor accounts for installation, piping, electrical, concrete, engineering fees, and contractor profit. 
*   For a solid-processing plant, Lang Factor $\approx 3.10$
*   For a solid-fluid processing plant, Lang Factor $\approx 3.63$
*   For a purely fluid-processing plant (like an oil refinery), Lang Factor $\approx 4.74$.

*Translation:* In a fluid plant, for every $\$1$ you spend buying a reactor, you will spend another $\$3.74$ just to install it and pipe it up!

## 5. Working Capital

The Fixed Capital Investment (FCI) pays for the concrete and steel. But on Opening Day, the plant cannot run yet. 
You need cash on hand to buy the first month's batch of raw materials. You need money to pay the operators' salaries before you sell your first barrel of product. You need money to fill the massive inventory tanks.

This required cash is called **Working Capital**. It is not spent; it is tied up in the business. It is usually estimated at $15\%$ to $20\%$ of the FCI.
Total Capital Investment = Fixed Capital Investment + Working Capital.

## 6. Capital Cost Estimation Hierarchy

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "bare", "data": { "label": "Bare Equipment", "icon": "Box", "description": "The catalog purchase price of the reactor." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "lang", "data": { "label": "Lang Factor (x 4.7)", "icon": "X", "description": "Multiplier for concrete, piping, electrical, and labor." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "fci", "data": { "label": "Fixed Capital (FCI)", "icon": "Database", "description": "Total installed cost of the physical plant." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "work", "data": { "label": "Working Capital", "icon": "Zap", "description": "Cash needed to buy raw materials and pay salaries on Day 1." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "tci", "data": { "label": "Total Capital (TCI)", "icon": "DollarSign", "description": "The absolute total investment required." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "bare", "target": "lang", "animated": true },
    { "source": "lang", "target": "fci", "animated": true },
    { "source": "fci", "target": "tci", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } },
    { "source": "work", "target": "tci", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
