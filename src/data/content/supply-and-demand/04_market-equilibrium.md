# Market Equilibrium

We have the downward-sloping Demand curve and the upward-sloping Supply curve. When we put them together on the same graph, we find the magic of the free market: **Equilibrium**.

## Reaching Equilibrium
Equilibrium is the point where the Supply curve and Demand curve intersect. At this exact point:
$$ Quantity\ Demanded (Q_d) = Quantity\ Supplied (Q_s) $$

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

```diagram
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
```
