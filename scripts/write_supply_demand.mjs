import fs from 'fs';
import path from 'path';

const topicDir = path.join(process.cwd(), 'src', 'data', 'content', 'supply-and-demand');

fs.mkdirSync(topicDir, { recursive: true });

const modules = [
  {
    filename: '01_the-law-of-demand.md',
    content: `# The Law of Demand

Markets are driven by the interaction of buyers (consumers) and sellers (producers). We begin our analysis with the buyers: Demand.

## What is Demand?
**Demand** is the relationship between the price of a good and the quantity of that good that consumers are willing and able to buy, holding all other factors constant (*ceteris paribus*).
- Note that demand requires both *willingness* (desire) and *ability* (purchasing power). You might want a Ferrari, but if you can't afford it, you have no economic demand for it.

## The Law of Demand
The Law of Demand states that there is an **inverse (negative) relationship** between price and quantity demanded. 
- As Price ($P$) increases $\\uparrow$, Quantity Demanded ($Q_d$) decreases $\\downarrow$.
- As Price ($P$) decreases $\\downarrow$, Quantity Demanded ($Q_d$) increases $\\uparrow$.

### Why is the Demand Curve Downward Sloping?
Three core economic concepts explain the Law of Demand:
1. **The Income Effect:** As the price of a good falls, a consumer's purchasing power (real income) rises, allowing them to buy more of the good.
2. **The Substitution Effect:** As the price of a good rises, consumers will replace it with cheaper substitutes (e.g., buying Pepsi instead of Coke if Coke becomes too expensive).
3. **The Law of Diminishing Marginal Utility:** As you consume more units of a good, the additional satisfaction (marginal utility) derived from each subsequent unit decreases. Therefore, you are only willing to buy more units if the price falls.

## Demand Schedule vs. Demand Curve
- A **Demand Schedule** is a table that shows the quantity demanded at different price levels.
- A **Demand Curve** is the graphical representation of the demand schedule, with Price on the vertical axis (Y-axis) and Quantity on the horizontal axis (X-axis).

\`\`\`drill
Question: According to the Law of Diminishing Marginal Utility, why will a consumer only buy a third slice of pizza if it costs less than the first slice?
Options:
A) Because the consumer's income has decreased.
B) Because the pizza parlor is running out of ingredients.
C) Because the third slice provides less additional satisfaction than the first slice.
D) Because a substitute for pizza has become cheaper.
Answer: C
Explanation: The Law of Diminishing Marginal Utility states that each additional unit consumed provides less satisfaction (utility) than the previous one. Because the third slice gives you less utility than the first, you are only willing to pay a lower price for it.
\`\`\`
`
  },
  {
    filename: '02_shifts-in-demand.md',
    content: `# Shifts in Demand vs. Movements Along the Curve

A critical distinction in economics is the difference between a "change in quantity demanded" and a "change in demand".

## Movement Along the Curve (Change in Quantity Demanded)
A movement *along* the existing demand curve is caused by ONE thing only: **A change in the price of the good itself.**
- If the price of apples rises from $1 to $2, consumers buy fewer apples. We move up along the demand curve. The curve itself does not move.

## Shift in the Curve (Change in Demand)
A shift of the entire demand curve is caused by a change in any factor *other than the price of the good itself*. These factors are called **Determinants of Demand** or "Demand Shifters".
- An **Outward (Rightward) Shift:** Demand increases at every price level.
- An **Inward (Leftward) Shift:** Demand decreases at every price level.

## The 5 Determinants of Demand (TRIBE)
Memorize the acronym **TRIBE** to remember what shifts the demand curve:

1. **T - Tastes and Preferences:** A new scientific study says blueberries prevent cancer. The demand for blueberries shifts right.
2. **R - Related Goods (Prices of):**
   - *Substitutes:* Goods used in place of one another. If the price of Coffee rises, the demand for Tea shifts right.
   - *Complements:* Goods used together. If the price of Peanut Butter rises, the demand for Jelly shifts left.
3. **I - Income of Consumers:**
   - *Normal Goods:* As income rises, demand shifts right (e.g., steak, new cars).
   - *Inferior Goods:* As income rises, demand shifts left (e.g., ramen noodles, used clothes).
4. **B - Buyers (Number of):** An influx of immigrants to a city will shift the demand for housing right.
5. **E - Expectations of Future Prices:** If consumers expect the price of gasoline to double next week, the demand for gasoline *today* will shift right.
`
  },
  {
    filename: '03_the-law-of-supply.md',
    content: `# The Law of Supply

Now we shift our perspective from the buyers to the producers (sellers).

## What is Supply?
**Supply** is the relationship between the price of a good and the quantity of that good that producers are willing and able to sell, holding all other factors constant.

## The Law of Supply
The Law of Supply states that there is a **direct (positive) relationship** between price and quantity supplied.
- As Price ($P$) increases $\\uparrow$, Quantity Supplied ($Q_s$) increases $\\uparrow$.
- As Price ($P$) decreases $\\downarrow$, Quantity Supplied ($Q_s$) decreases $\\downarrow$.

### Why is the Supply Curve Upward Sloping?
1. **Profit Motive:** Businesses exist to make a profit. If the market price for a good rises, it becomes more profitable to produce, incentivizing existing firms to produce more and new firms to enter the market.
2. **Increasing Marginal Costs:** To produce more of a good, a firm eventually has to use less efficient resources or pay overtime wages. Therefore, the cost of producing an *additional* unit (marginal cost) rises. A firm will only produce that additional unit if the market price is high enough to cover the higher cost.

## Shifts in Supply vs. Movements Along the Curve
Just like demand, a change in the price of the good causes a *movement along* the supply curve (a change in quantity supplied). 
A change in anything else causes a *shift* of the entire supply curve (a change in supply).

## The 5 Determinants of Supply (ROTEN)
Memorize the acronym **ROTEN** for supply shifters:

1. **R - Resource Costs (Inputs):** If the price of rubber increases, the cost of producing tires rises. The supply of tires shifts left.
2. **O - Other Goods' Prices:** A farmer can grow wheat or corn. If the price of corn skyrockets, the farmer will plant more corn and less wheat. The supply of wheat shifts left.
3. **T - Taxes and Subsidies:**
   - A government tax on production increases costs, shifting supply left.
   - A government subsidy lowers costs, shifting supply right.
4. **E - Expectations of Future Prices:** If a gold miner expects the price of gold to double next year, they will hoard their gold today. The supply of gold *today* shifts left.
5. **N - Number of Sellers / Technology:** 
   - An increase in the number of producers shifts supply right.
   - A technological breakthrough (like the assembly line) dramatically lowers production costs, shifting supply right.

\`\`\`drill
Question: A severe drought destroys half the cotton crop in the United States. How does this affect the supply of cotton t-shirts?
Options:
A) The supply of t-shirts shifts right because technology improved.
B) The supply of t-shirts shifts left because the cost of a resource (input) increased.
C) The demand for t-shirts shifts left.
D) There is a movement down along the supply curve.
Answer: B
Explanation: Cotton is a primary resource (input) used to make t-shirts. The drought makes cotton scarce and more expensive. An increase in resource costs makes it more expensive to produce t-shirts, causing the supply curve to shift inward (left).
\`\`\`
`
  },
  {
    filename: '04_market-equilibrium.md',
    content: `# Market Equilibrium

We have the downward-sloping Demand curve and the upward-sloping Supply curve. When we put them together on the same graph, we find the magic of the free market: **Equilibrium**.

## Reaching Equilibrium
Equilibrium is the point where the Supply curve and Demand curve intersect. At this exact point:
$$ Quantity\\ Demanded (Q_d) = Quantity\\ Supplied (Q_s) $$

- **Equilibrium Price ($P_e$):** The price at which the market clears. Also known as the market-clearing price.
- **Equilibrium Quantity ($Q_e$):** The amount of goods bought and sold at $P_e$.

At equilibrium, there is no tendency for prices to change. Every buyer who wants to buy at that price can find a seller, and every seller who wants to sell at that price can find a buyer.

## Disequilibrium: Shortages and Surpluses
If the market price is not at equilibrium, market forces will naturally push it back.

### Surplus (Excess Supply)
Occurs when the market price is **above** equilibrium ($P > P_e$).
- At this high price, producers want to sell a lot ($Q_s$ is high), but consumers want to buy very little ($Q_d$ is low).
- $Q_s > Q_d$
- **Resolution:** To get rid of unsold inventory, sellers will start cutting their prices. As the price falls, $Q_d$ increases and $Q_s$ decreases until equilibrium is restored.

### Shortage (Excess Demand)
Occurs when the market price is **below** equilibrium ($P < P_e$).
- At this low price, consumers want to buy a massive amount ($Q_d$ is high), but producers don't want to sell much at that cheap price ($Q_s$ is low).
- $Q_d > Q_s$
- **Resolution:** Consumers will start bidding up the price to get their hands on the scarce goods. As the price rises, producers are incentivized to make more ($Q_s$ increases) and some consumers are priced out ($Q_d$ decreases) until equilibrium is restored.

\`\`\`diagram
{
  "nodes": [
    { "id": "Eq", "label": "Equilibrium (Qd = Qs)", "x": 200, "y": 200, "shape": "circle", "color": "#10b981" },
    { "id": "Sur", "label": "Surplus (Qs > Qd)", "x": 200, "y": 100, "shape": "box", "color": "#ef4444" },
    { "id": "Sho", "label": "Shortage (Qd > Qs)", "x": 200, "y": 300, "shape": "box", "color": "#f59e0b" }
  ],
  "edges": [
    { "from": "Sur", "to": "Eq", "label": "Price Falls", "animated": true },
    { "from": "Sho", "to": "Eq", "label": "Price Rises", "animated": true }
  ]
}
\`\`\`
`
  },
  {
    filename: '05_comparative-statics.md',
    content: `# Comparative Statics: Analyzing Double Shifts

When an external event shifts the supply curve, the demand curve, or both, the equilibrium price and quantity will change. This process of comparing the old equilibrium to the new equilibrium is called **Comparative Statics**.

## Single Shifts
If only ONE curve shifts, we can easily determine what happens to Price ($P$) and Quantity ($Q$):
1. **Demand Increases (Right):** $P \\uparrow$, $Q \\uparrow$
2. **Demand Decreases (Left):** $P \\downarrow$, $Q \\downarrow$
3. **Supply Increases (Right):** $P \\downarrow$, $Q \\uparrow$
4. **Supply Decreases (Left):** $P \\uparrow$, $Q \\downarrow$

*Trick:* Notice that when Demand shifts, $P$ and $Q$ move in the *same* direction. When Supply shifts, $P$ and $Q$ move in *opposite* directions.

## Double Shifts
In the real world, events often shift *both* supply and demand simultaneously.
When this happens, one variable (Price or Quantity) will definitively change, but the other will be **Indeterminate (Ambiguous)**, meaning we cannot know if it goes up or down without knowing the *exact magnitude* of the shifts.

### Example: The Market for Coffee
**Event 1:** A new medical study proves coffee makes you live longer. (Demand shifts Right). Effect: $P \\uparrow$, $Q \\uparrow$.
**Event 2:** A massive frost destroys half the coffee crop in Brazil. (Supply shifts Left). Effect: $P \\uparrow$, $Q \\downarrow$.

**Combined Effect:**
- We know $P$ went up from the first event, and $P$ went up from the second event. Therefore, **Price definitively INCREASES.**
- We know $Q$ went up from the first event, but $Q$ went down from the second event. Unless we know which shift was bigger, the change in **Quantity is INDETERMINATE.**

### The Double Shift Rule Table
| Shift 1 | Shift 2 | Effect on Price (P) | Effect on Quantity (Q) |
|---|---|---|---|
| Demand $\\uparrow$ | Supply $\\uparrow$ | Indeterminate | Increases $\\uparrow$ |
| Demand $\\downarrow$ | Supply $\\downarrow$ | Indeterminate | Decreases $\\downarrow$ |
| Demand $\\uparrow$ | Supply $\\downarrow$ | Increases $\\uparrow$ | Indeterminate |
| Demand $\\downarrow$ | Supply $\\uparrow$ | Decreases $\\downarrow$ | Indeterminate |

\`\`\`drill
Question: A new, highly efficient robotic assembly line is invented for making electric vehicles (EVs). At the exact same time, the government announces it is ending all tax rebates for consumers who buy EVs. What happens to the equilibrium price and quantity of EVs?
Options:
A) Price increases, Quantity is indeterminate.
B) Price decreases, Quantity is indeterminate.
C) Quantity increases, Price is indeterminate.
D) Both Price and Quantity decrease.
Answer: B
Explanation: The robot assembly line is a positive technology shock, shifting Supply Right ($P \\downarrow, Q \\uparrow$). Ending consumer rebates decreases consumer income/preference, shifting Demand Left ($P \\downarrow, Q \\downarrow$). Both shifts cause Price to fall, so Price definitively decreases. However, Supply pushes Quantity up while Demand pushes Quantity down, making Quantity indeterminate.
\`\`\`
`
  },
  {
    filename: '06_government-intervention.md',
    content: `# Government Intervention: Price Controls

While the free market theoretically maximizes efficiency by reaching equilibrium, governments often intervene if they believe the equilibrium price is "unfair" to buyers or sellers. They do this by establishing **Price Controls**.

## Price Ceilings
A price ceiling is a legal maximum on the price at which a good can be sold.
- **Goal:** To protect consumers from prices that are "too high."
- **Example:** Rent control in New York City.
- **Effective (Binding):** For a price ceiling to be effective, it must be set **BELOW** the equilibrium price. (If the equilibrium rent is $2000, setting a ceiling at $3000 does nothing).
- **Consequence: Shortage.** Because the legal price is artificially low, $Q_d$ increases (everyone wants cheap apartments) and $Q_s$ decreases (landlords convert apartments to condos). $Q_d > Q_s$.
- **Side effects of ceilings:** Black markets, deterioration of quality (landlords stop doing repairs), and discrimination (landlords picking favorites from a massive list of applicants).

## Price Floors
A price floor is a legal minimum on the price at which a good can be sold.
- **Goal:** To protect producers from prices that are "too low."
- **Example:** The Minimum Wage (a price floor on labor), or agricultural price supports.
- **Effective (Binding):** For a price floor to be effective, it must be set **ABOVE** the equilibrium price.
- **Consequence: Surplus.** Because the legal price is artificially high, $Q_s$ increases (many people want to work for high wages) but $Q_d$ decreases (businesses hire fewer workers). $Q_s > Q_d$.
- **Side effects of floors:** In the labor market, a surplus of labor is called *unemployment*. The government often has to step in and buy the surplus (e.g., buying excess cheese from dairy farmers).

## The Economics of Controls
Economists generally dislike price controls. They argue that controls do not eliminate scarcity; they simply hide the price signal and cause misallocation of resources.
- If a hurricane hits Florida, the price of plywood naturally spikes. A price ceiling (anti-price gouging laws) keeps plywood cheap. 
- However, the ceiling causes a massive shortage (everyone buys up the cheap plywood). Furthermore, it removes the profit incentive for truckers in Georgia to drive overnight to deliver more plywood to Florida.

\`\`\`drill
Question: The government believes the equilibrium price of milk ($4/gallon) is too low to sustain small farmers. They institute a legal price floor of $6/gallon. What is the direct result?
Options:
A) A shortage of milk.
B) A surplus of milk.
C) A rightward shift in the supply of milk.
D) A rightward shift in the demand for milk.
Answer: B
Explanation: An effective price floor is set above equilibrium. At $6/gallon, producers want to supply a lot of milk ($Q_s$ is high), but consumers want to buy less ($Q_d$ is low). Because quantity supplied exceeds quantity demanded, there is a surplus. Price controls cause movements along the curves, not shifts of the curves.
\`\`\`
`
  }
];

const oldFile = path.join(topicDir, '01_intro.md');
if (fs.existsSync(oldFile)) {
  fs.unlinkSync(oldFile);
}

modules.forEach(mod => {
  const filePath = path.join(topicDir, mod.filename);
  fs.writeFileSync(filePath, mod.content);
});

console.log('Supply and Demand deep modules successfully generated.');
