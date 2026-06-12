# Operating Costs and Depreciation

Capital Cost is the one-time price tag to build the plant. 
**Operating Costs (OPEX)** are the continuous, daily expenses required to keep the plant running. Even a perfectly designed plant will go bankrupt if its daily operating costs exceed the revenue from selling the product.

## 1. Manufacturing Costs (Direct and Indirect)

Operating costs are broadly divided into Direct (Variable) costs and Indirect (Fixed) costs.

### Direct Manufacturing Costs
These costs scale directly with how much product you are making. If you run the plant at 50% capacity, these costs drop by 50%.
*   **Raw Materials:** Usually the absolute largest expense in any chemical plant (often 50-80% of total operating costs).
*   **Utilities:** Electricity (for compressors and pumps), High/Medium/Low-Pressure Steam (for reboilers), Cooling Water (for condensers), and Refrigeration. Utilities are massively expensive; this is why heat integration (using hot product streams to pre-heat cold feed streams) is so crucial.
*   **Operating Labor:** The salaries of the operators running the DCS in the control room and doing rounds in the plant.
*   **Direct Supervisory Labor:** Shift supervisors.
*   **Maintenance & Repairs:** Usually estimated as 5% to 10% of the Fixed Capital Investment per year. Things constantly break.
*   **Operating Supplies:** Lubricating oil, chart paper, safety gear.
*   **Royalties:** Paying licensing fees if you are using a patented chemical process.

### Indirect Manufacturing Costs (Fixed Costs)
These costs must be paid even if the plant is completely shut down for a month.
*   **Property Taxes:** Paid to the local government based on the value of the plant.
*   **Insurance:** Massive liability insurance against explosions or environmental disasters.
*   **Plant Overhead:** Medical facilities, HR, cafeteria, safety departments, and administration.

## 2. General Expenses

These are costs incurred by the overall corporation, not directly tied to the specific physical plant.
*   **Administration:** Salaries of the CEO, executives, legal, and accounting departments.
*   **Distribution and Sales:** Marketing, shipping, and sales commissions.
*   **Research and Development (R&D):** Funding the scientists inventing the *next* generation of products.

## 3. Depreciation: The Accounting Phantom

When you spend $\$100$ million to build a plant (Capital Cost), you don't write it off as a massive $\$100$ million loss in year 1. 

The IRS (and international tax codes) recognize that a chemical plant is an asset that loses value over time as it rusts and becomes obsolete. **Depreciation** is the accounting method of spreading out that $\$100$ million expense over the "useful life" of the plant (e.g., 10 years).

Depreciation is a paper expense. You do not actually write a check to "Depreciation" every year. However, it is an incredibly powerful tool because **depreciation is tax-deductible**. It artificially lowers your reported profit, drastically reducing the amount of cash you have to pay the government in taxes.

### Straight-Line Depreciation
The simplest method. You deduct an equal amount every year.
If a reactor costs $\$100,000$, has a useful life of 10 years, and a salvage value of $\$0$ at the end:
$$ \text{Annual Depreciation} = \frac{\text{Initial Cost} - \text{Salvage Value}}{\text{Useful Life}} = \frac{100,000 - 0}{10} = \$10,000 \text{ per year} $$

### MACRS (Modified Accelerated Cost Recovery System)
The US tax code uses MACRS. Because money today is worth more than money tomorrow (Time Value of Money), companies want to claim their tax deductions as early as possible.
MACRS is an "accelerated" depreciation method. You deduct massive amounts in the first few years (e.g., 20% in year 1, 32% in year 2), and tiny amounts in the later years. This provides massive tax shields early in the project's life, significantly boosting the profitability of the investment.

## 4. The Profit Equation

To determine the final cash flow of the plant, you calculate the Net Profit after taxes.

1.  **Revenue:** Total sales from product.
2.  **Gross Profit:** Revenue $-$ Total Operating Costs (excluding depreciation).
3.  **Taxable Income:** Gross Profit $-$ Depreciation.
4.  **Taxes Paid:** Taxable Income $\times$ Tax Rate (e.g., 21%).
5.  **Net Income:** Taxable Income $-$ Taxes Paid.

**Cash Flow:** The actual physical cash moving into the company's bank account.
$$ \text{Cash Flow} = \text{Net Income} + \text{Depreciation} $$
*(We add depreciation back in because, remember, we never actually wrote a check for it! It was just a paper trick to lower our taxes).*

## 5. The Cash Flow Waterfall

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "rev", "data": { "label": "Gross Revenue", "icon": "DollarSign", "description": "Total money from selling the chemical product." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "opex", "data": { "label": "Operating Costs", "icon": "TrendingDown", "description": "Subtract raw materials, utilities, and labor." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "dep", "data": { "label": "Depreciation", "icon": "Shield", "description": "Subtract paper tax shield to lower reported income." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "tax", "data": { "label": "Taxes Paid", "icon": "Building", "description": "Pay IRS based on the artificially lowered income." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "cash", "data": { "label": "Net Cash Flow", "icon": "CheckCircle", "description": "True cash in the bank. (Net Income + Depreciation added back)." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } }
  ],
  "edges": [
    { "source": "rev", "target": "opex", "animated": true },
    { "source": "opex", "target": "dep", "animated": true },
    { "source": "dep", "target": "tax", "animated": true, "style": { "stroke": "#ef4444" } },
    { "source": "tax", "target": "cash", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
