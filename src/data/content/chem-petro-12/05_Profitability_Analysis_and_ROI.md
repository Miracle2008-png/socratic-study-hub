# Profitability Analysis and ROI

You have calculated the \$50 million Capital Cost to build the plant, and you know the annual Operating Costs. 
The final step is to pitch the project to the Board of Directors. You must prove that investing this \$50 million in your chemical plant will generate a better return than simply leaving the money in a stock market index fund.

To do this, engineers use sophisticated profitability metrics based on the **Time Value of Money**.

## 1. The Time Value of Money

A fundamental law of finance: **One dollar today is worth more than one dollar ten years from now.**
Why? Because if you have a dollar today, you can invest it at an interest rate ($r$), and it will grow. 
Furthermore, inflation constantly erodes the purchasing power of future money.

If an investment promises to pay you \$10 million in the year 2035, you cannot simply value that at \$10 million today. You must "discount" it back to the present.

### Present Value (PV)
To find the Present Value of a future cash flow ($F$) received in year $n$, assuming a discount rate (or interest rate) of $i$:
$$ PV = \frac{F}{(1 + i)^n} $$

If your corporate required return (discount rate) is 10%, a \$10 million profit received 10 years from now is only worth:
$PV = \frac{10,000,000}{(1.10)^{10}} \approx \$3.85 \text{ million}$ today.

## 2. Net Present Value (NPV)

**Net Present Value (NPV)** is the absolute gold standard for evaluating chemical projects. 
To calculate NPV, you build a cash flow table for the entire 15-year life of the plant.
*   **Year 0:** Massive negative cash flow (You spend \$50 million building the plant).
*   **Years 1-15:** Positive cash flows (You sell chemicals and make a profit).
*   **End of Year 15:** You sell the scrap metal (Salvage value) and recover your Working Capital.

You take every single one of those yearly cash flows, discount them back to Year 0 using the company's required interest rate (Minimum Acceptable Rate of Return, MARR), and add them all together.

$$ \text{NPV} = \sum_{n=0}^{Life} \frac{\text{Cash Flow}_n}{(1 + i)^n} $$

**The Decision Rule:**
*   **If NPV > 0:** The project is fantastic. It not only pays back the \$50 million investment, but it also beats the company's required 10% interest rate. BUILD IT.
*   **If NPV < 0:** The project is a loser. Even if it makes a technical profit, it is growing slower than the 10% interest rate. The company would make more money by putting the \$50 million in a bond. DO NOT BUILD IT.

## 3. Discounted Cash Flow Rate of Return (DCFROR)

Instead of choosing an interest rate and calculating the NPV, the **DCFROR** (often just called Internal Rate of Return, IRR) flips the math backwards.

The DCFROR is the exact, specific interest rate ($i$) that forces the NPV of the project to perfectly equal **zero**.

$$ 0 = \sum_{n=0}^{Life} \frac{\text{Cash Flow}_n}{(1 + \text{DCFROR})^n} $$

Solving this equation requires a computer (using an iterative solver). 
If the math spits out a DCFROR of 18%, it means your chemical plant is mathematically equivalent to a bank account that pays 18% guaranteed interest every year.

**The Decision Rule:**
*   Compare the DCFROR to the company's minimum required hurdle rate (MARR, usually around 12% to 15% for risky chemical ventures).
*   If **DCFROR > MARR**, the project is approved.

## 4. Simple Payback Period

NPV and DCFROR are rigorously mathematically correct, but they are hard for non-financial people to grasp instantly. 
The **Payback Period** is a quick-and-dirty, highly flawed, but incredibly popular metric.

It simply asks: "How many years until the accumulated profits equal the initial capital cost?"
$$ \text{Payback Period} = \frac{\text{Fixed Capital Investment}}{\text{Average Annual Cash Flow}} $$

If you spend \$50M, and make \$10M a year, the payback period is 5 years.
**The Flaw:** It completely ignores the Time Value of Money, and it completely ignores all profits made *after* the payback year. A project with a 3-year payback that dies in year 4 looks better than a project with a 4-year payback that prints billions of dollars for 30 years. It should only be used as a secondary risk-assessment tool.

## 5. Discounted Cash Flow Process

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "cap", "data": { "label": "Year 0: Investment", "icon": "Database", "description": "Massive negative cash flow to build the plant." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "rev", "data": { "label": "Years 1-15: Revenue", "icon": "TrendingUp", "description": "Positive cash flows from selling the product." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "time", "data": { "label": "Discounting", "icon": "Clock", "description": "Adjusting future money for the Time Value of Money." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "npv", "data": { "label": "Net Present Value", "icon": "DollarSign", "description": "If NPV > 0, the project beats the required interest rate. Build it." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } }
  ],
  "edges": [
    { "source": "cap", "target": "time", "animated": true },
    { "source": "rev", "target": "time", "animated": true },
    { "source": "time", "target": "npv", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
