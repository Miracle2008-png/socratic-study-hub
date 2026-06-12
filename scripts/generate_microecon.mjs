import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'src', 'data', 'content', 'economics', 'microeconomics');
fs.mkdirSync(outDir, { recursive: true });

const topics = [
  {
    id: 'scarcity-opportunity-cost',
    title: 'Scarcity & Opportunity Cost',
    content: `# Scarcity & Opportunity Cost

## Scarcity: The Fundamental Problem
Scarcity is the foundational concept of economics. It refers to the basic economic problem that arises because people have unlimited wants but resources are limited. Because of scarcity, choices must be made by consumers, businesses, and governments.

$$ \\text{Scarcity} = \\text{Unlimited Wants} > \\text{Limited Resources} $$

## Opportunity Cost
When a choice is made, the next best alternative given up is the **opportunity cost**. It represents the benefits an individual, investor, or business misses out on when choosing one alternative over another.

If you choose to spend 3 hours studying Economics, the opportunity cost is the utility (satisfaction) you would have gained from the next best use of that time, such as working at a part-time job or relaxing.

## Production Possibility Frontier (PPF)
The PPF is a curve depicting all maximum output possibilities for two goods, given a set of inputs consisting of resources and other factors.

- **Points on the curve:** Efficient use of resources.
- **Points inside the curve:** Inefficient use (unemployment of resources).
- **Points outside the curve:** Unattainable given current resources and technology.

The slope of the PPF represents the opportunity cost of producing one good in terms of the other. If the PPF is bowed outward (concave to the origin), it demonstrates the **Law of Increasing Opportunity Cost**—as you produce more of one good, the opportunity cost (in terms of the other good given up) increases.
`
  },
  {
    id: 'supply-and-demand',
    title: 'Supply and Demand',
    content: `# Supply and Demand

## The Law of Demand
The Law of Demand states that, ceteris paribus (all other factors being equal), as the price of a good increases, the quantity demanded decreases.

$$ Q_d = a - bP $$

This inverse relationship is graphically represented by a downward-sloping demand curve.

## The Law of Supply
The Law of Supply states that, ceteris paribus, as the price of a good increases, the quantity supplied increases.

$$ Q_s = c + dP $$

This direct relationship forms an upward-sloping supply curve.

## Market Equilibrium
Market equilibrium occurs where the quantity demanded equals the quantity supplied ($Q_d = Q_s$). At this intersection, the market clears, establishing the **equilibrium price ($P^*$)** and **equilibrium quantity ($Q^*$)**.

If the price is above $P^*$, a surplus occurs, driving prices down. If the price is below $P^*$, a shortage occurs, driving prices up.

## Shifts vs. Movements
- **Movement along the curve:** Caused solely by a change in the price of the good itself.
- **Shift of the curve:** Caused by non-price determinants.
  - *Demand shifts:* Income, prices of related goods (substitutes/complements), tastes, expectations, number of buyers.
  - *Supply shifts:* Input prices, technology, expectations, number of sellers, taxes/subsidies.
`
  },
  {
    id: 'elasticity',
    title: 'Elasticity',
    content: `# Elasticity

## Price Elasticity of Demand (PED)
PED measures the responsiveness of quantity demanded to a change in price.

$$ E_d = \\left| \\frac{\\% \\Delta Q_d}{\\% \\Delta P} \\right| = \\left| \\frac{\\Delta Q / Q}{\\Delta P / P} \\right| $$

- **|E_d| > 1:** Elastic (demand is highly responsive to price).
- **|E_d| < 1:** Inelastic (demand is relatively unresponsive).
- **|E_d| = 1:** Unit elastic.

**Determinants of PED:** Availability of substitutes, necessity vs. luxury, proportion of income spent, and time horizon.

## Income Elasticity of Demand (YED)
YED measures responsiveness to a change in consumer income.

$$ YED = \\frac{\\% \\Delta Q_d}{\\% \\Delta Y} $$

- **YED > 0:** Normal good. (If YED > 1, it's a luxury good).
- **YED < 0:** Inferior good.

## Cross-Price Elasticity of Demand (XED)
XED measures the responsiveness of the demand for Good A to a change in the price of Good B.

$$ XED = \\frac{\\% \\Delta Q_A}{\\% \\Delta P_B} $$

- **XED > 0:** Substitute goods (e.g., Coke and Pepsi).
- **XED < 0:** Complementary goods (e.g., Printers and Ink).
`
  },
  {
    id: 'consumer-theory',
    title: 'Consumer Theory',
    content: `# Consumer Theory

## Utility Maximization
Consumers aim to maximize their total utility given their budget constraint. Marginal Utility (MU) is the additional satisfaction gained from consuming one more unit. The **Law of Diminishing Marginal Utility** states that as consumption increases, MU declines.

To maximize utility, a consumer allocates their budget such that the marginal utility per dollar spent is equal across all goods:

$$ \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} $$

## Indifference Curves
An indifference curve represents all combinations of two goods that provide the consumer with the exact same level of total utility.
- They are downward sloping.
- They are convex to the origin (due to a diminishing Marginal Rate of Substitution).
- They cannot intersect.

The slope of the indifference curve is the **Marginal Rate of Substitution (MRS)**:
$$ MRS_{xy} = - \\frac{MU_x}{MU_y} $$

## The Budget Constraint
The budget line shows all combinations of goods a consumer can afford.
$$ P_x X + P_y Y = I $$
Where $I$ is Income. The slope of the budget line is $-P_x/P_y$.

**Optimal Choice:** Occurs where the highest possible indifference curve is tangent to the budget line ($MRS_{xy} = P_x/P_y$).
`
  },
  {
    id: 'theory-of-the-firm',
    title: 'Theory of the Firm',
    content: `# Theory of the Firm

## Production Functions
A production function relates physical output to physical inputs (capital $K$, labor $L$).
$$ Q = f(K, L) $$

The **Marginal Product of Labor (MPL)** is the additional output produced by one additional unit of labor: $\\frac{\\Delta Q}{\\Delta L}$.
The **Law of Diminishing Marginal Returns** states that adding more of a variable input (labor) to a fixed input (capital) eventually leads to decreasing marginal product.

## Cost Curves (Short-Run)
- **Total Cost (TC) = Fixed Cost (FC) + Variable Cost (VC)**
- **Average Total Cost (ATC) = TC / Q**
- **Marginal Cost (MC) = \\Delta TC / \\Delta Q**

The MC curve intersects the ATC and AVC curves at their minimum points.

## Long-Run Costs & Economies of Scale
In the long run, all inputs are variable.
- **Economies of Scale:** Long-run ATC decreases as output increases (specialization, bulk buying).
- **Constant Returns to Scale:** Long-run ATC remains constant.
- **Diseconomies of Scale:** Long-run ATC increases as output increases (bureaucracy, coordination issues).
`
  },
  {
    id: 'perfect-competition',
    title: 'Perfect Competition',
    content: `# Perfect Competition

## Market Characteristics
Perfect competition is a theoretical market structure defined by:
1. **Many buyers and sellers:** No individual can influence the market price.
2. **Homogeneous products:** Goods are perfect substitutes.
3. **Free entry and exit:** No barriers to entering or leaving the industry.
4. **Perfect information:** All participants have full knowledge of prices and technology.

Because firms are price takers, the demand curve facing an individual firm is perfectly elastic (horizontal). Therefore, Price ($P$) = Marginal Revenue ($MR$) = Average Revenue ($AR$).

## Short-Run Equilibrium
A firm maximizes profit where Marginal Cost equals Marginal Revenue:
$$ MR = MC $$
Since $P = MR$ in perfect competition, the rule becomes $P = MC$.

- **Economic Profit:** If $P > ATC$.
- **Normal Profit (Zero Economic Profit):** If $P = ATC$.
- **Loss:** If $P < ATC$.
- **Shutdown Point:** A firm will shut down in the short run if $P < AVC$ (Average Variable Cost).

## Long-Run Equilibrium
In the long run, free entry and exit eliminate economic profits and losses.
- If firms are making economic profits, new firms enter, increasing market supply, driving down the price until $P = ATC$.
- If firms are making losses, firms exit, decreasing market supply, driving up the price until $P = ATC$.

Thus, in the long run:
$$ P = MR = MC = \\text{Minimum } ATC $$
This represents both **allocative efficiency** ($P = MC$) and **productive efficiency** ($P = \\text{min } ATC$).
`
  },
  {
    id: 'monopoly',
    title: 'Monopoly',
    content: `# Monopoly

## Market Characteristics
A monopoly exists when a single firm is the sole producer of a good with no close substitutes.
- **Price Maker:** The firm faces the downward-sloping market demand curve.
- **Barriers to Entry:** Legal (patents, copyrights), control of a key resource, or economies of scale (Natural Monopoly).

## Profit Maximization
Like all firms, a monopoly maximizes profit where $MR = MC$.
However, because the firm must lower the price to sell additional units, **Marginal Revenue is always less than Price ($MR < P$)**.

To find the profit-maximizing point:
1. Find quantity $Q^*$ where $MR = MC$.
2. Go up to the Demand curve to find the price $P^*$ consumers are willing to pay for $Q^*$.

Monopolies produce a lower quantity and charge a higher price compared to perfectly competitive markets, leading to a **Deadweight Loss (Allocative Inefficiency)** because $P > MC$.

## Price Discrimination
Price discrimination occurs when a firm charges different prices to different consumers for the exact same good, not based on cost differences.
- **1st Degree (Perfect):** Charging every consumer their exact maximum willingness to pay (captures all consumer surplus).
- **2nd Degree:** Bulk pricing (e.g., Buy 2 get 1 free).
- **3rd Degree:** Segmenting the market based on elasticity (e.g., Student vs. Adult movie tickets). The firm charges a higher price to the group with more inelastic demand.
`
  },
  {
    id: 'oligopoly',
    title: 'Oligopoly & Monopolistic Competition',
    content: `# Oligopoly & Monopolistic Competition

## Monopolistic Competition
A market structure with many firms selling differentiated products (e.g., restaurants, clothing).
- **Short-Run:** Firms have some pricing power due to product differentiation and can earn economic profits ($MR = MC$).
- **Long-Run:** Free entry eliminates economic profits. The demand curve shifts left until it is tangent to the ATC curve ($P = ATC$).
- **Inefficiency:** Firms do not produce at minimum ATC (excess capacity) and $P > MC$.

## Oligopoly
A market dominated by a few large firms (e.g., airlines, telecommunications).
- **Interdependence:** A firm's decisions significantly affect its rivals. Strategic behavior is crucial.
- **Barriers to Entry:** High (economies of scale, brand loyalty).

## Oligopoly Models
1. **Cournot Model:** Firms simultaneously choose *quantities* to produce. They assume the rival's output is fixed. Results in output between monopoly and perfect competition.
2. **Bertrand Model:** Firms simultaneously choose *prices*. If products are identical, this leads to a price war driving price down to Marginal Cost ($P = MC$), identical to perfect competition.
3. **Stackelberg Model:** A sequential game where a "leader" firm chooses quantity first, and a "follower" firm reacts. The leader gains a first-mover advantage.

## Collusion and Cartels
Firms in an oligopoly have an incentive to collude (form a cartel) to restrict output and act like a joint monopoly. However, cartels are inherently unstable because each individual firm has a strong financial incentive to secretly cheat and produce more than their quota.
`
  },
  {
    id: 'game-theory',
    title: 'Game Theory',
    content: `# Game Theory

## Introduction to Game Theory
Game theory is the mathematical study of strategic interaction where the outcome for one agent depends on the choices made by others. It is heavily used to model Oligopoly behavior.

## The Prisoner's Dilemma
The classic game illustrating why two rational individuals might not cooperate, even if it appears in their best interest to do so.

| | Prisoner B Defects | Prisoner B Cooperates |
|---|---|---|
| **Prisoner A Defects** | 5 years, 5 years | 0 years, 10 years |
| **Prisoner A Cooperates**| 10 years, 0 years | 1 year, 1 year |

- **Dominant Strategy:** A strategy that yields the highest payoff regardless of the opponent's choice. In this case, "Defect" is a strictly dominant strategy for both players.
- **Nash Equilibrium:** A situation where no player has an incentive to unilaterally deviate from their chosen strategy. The Nash Equilibrium here is (Defect, Defect), even though (Cooperate, Cooperate) yields a better combined outcome (Pareto superior).

## Sequential Games
In sequential games, players make moves one after the other (e.g., Chess, or the Stackelberg duopoly). These are modeled using **Game Trees** (Extensive Form).
They are solved using **Backward Induction**: analyzing the last step of the game to determine the optimal action, and working backwards to the beginning to find the Subgame Perfect Nash Equilibrium.
`
  },
  {
    id: 'factor-markets',
    title: 'Factor Markets',
    content: `# Factor Markets

## Demand for Labor
The demand for labor is a **derived demand**; it depends on the demand for the good the labor produces.
A profit-maximizing firm will hire workers up to the point where the Marginal Revenue Product of Labor ($MRP_L$) equals the Marginal Resource Cost (Wage, $W$).

$$ MRP_L = MP_L \\times MR $$
Where $MP_L$ is the Marginal Product of Labor. In perfectly competitive output markets, $MR = P$, so $MRP_L = \\text{Value of Marginal Product } (VMP_L)$.

**Profit Maximizing Rule:** Hire until $MRP_L = W$.

## Supply of Labor
The individual labor supply curve bends backward. 
- **Substitution Effect:** As wages rise, the opportunity cost of leisure increases, so workers supply more labor.
- **Income Effect:** As wages rise, workers achieve a target income faster and demand more leisure (a normal good), supplying less labor.
At very high wage rates, the income effect dominates the substitution effect, causing the supply curve to bend backward.

## Monopsony
A monopsony is a market with only one buyer (e.g., a single large factory in a small town).
- The firm faces the upward-sloping market supply curve of labor.
- To hire more workers, the firm must raise wages for *all* workers. Therefore, Marginal Factor Cost ($MFC$) is greater than the Wage.
- A monopsonist hires where $MRP_L = MFC$ but pays the wage determined by the supply curve at that quantity, resulting in lower wages and lower employment compared to a competitive market.
`
  },
  {
    id: 'market-failure',
    title: 'Market Failure',
    content: `# Market Failure

Market failure occurs when the free market fails to allocate resources efficiently, leading to a net loss in social welfare.

## Externalities
An externality is a cost or benefit imposed on a third party not involved in the transaction.
- **Negative Externality (e.g., Pollution):** Marginal Social Cost ($MSC$) > Marginal Private Cost ($MPC$). The market overproduces the good.
  - *Solution:* Pigouvian taxes (taxing the producer an amount equal to the marginal external cost).
- **Positive Externality (e.g., Education, Vaccines):** Marginal Social Benefit ($MSB$) > Marginal Private Benefit ($MPB$). The market underproduces the good.
  - *Solution:* Subsidies to consumers or producers.

## Public Goods
Public goods have two characteristics:
1. **Non-Rivalrous:** One person's consumption does not reduce availability for others (e.g., National Defense, Streetlights).
2. **Non-Excludable:** You cannot prevent non-payers from consuming it.

This leads to the **Free-Rider Problem**, where individuals have no incentive to pay, causing the free market to completely fail to provide the good. Governments must intervene through taxation and public provision.

## Asymmetric Information
When one party has more information than the other.
- **Adverse Selection:** Happens *before* the transaction. (e.g., Sick people are more likely to buy health insurance; "Lemons" in the used car market).
- **Moral Hazard:** Happens *after* the transaction. (e.g., Having car insurance makes a driver act more recklessly because the cost of an accident is shifted to the insurer).
`
  },
  {
    id: 'welfare-economics',
    title: 'Welfare Economics',
    content: `# Welfare Economics

Welfare economics evaluates the economic well-being of society and analyzes how resource allocation affects social welfare.

## Consumer and Producer Surplus
- **Consumer Surplus (CS):** The difference between the maximum price a consumer is willing to pay and the actual market price. Graphically, the area below the Demand curve and above the price line.
- **Producer Surplus (PS):** The difference between the market price and the minimum price a producer is willing to accept (Marginal Cost). Graphically, the area above the Supply curve and below the price line.

**Total Welfare = CS + PS.** In a perfectly competitive market with no externalities, the market equilibrium maximizes Total Welfare.

## Pareto Efficiency
An allocation of resources is **Pareto Efficient** if it is impossible to make any one individual better off without making at least one other individual worse off.
- The competitive market outcome is Pareto efficient (First Fundamental Theorem of Welfare Economics).
- It does *not* imply equity or fairness. One person owning 100% of the wealth is technically Pareto Efficient because redistributing it would make that person worse off.

## The Edgeworth Box
A graphical tool used in general equilibrium theory to represent the exchange of two goods between two individuals.
- **Contract Curve:** The locus of all Pareto efficient allocations within the Edgeworth Box. At any point on the contract curve, the Marginal Rates of Substitution (MRS) for both individuals are equal ($MRS_A = MRS_B$).
`
  }
];

topics.forEach((topic) => {
  const topicDir = path.join(process.cwd(), 'src', 'data', 'content', topic.id);
  fs.mkdirSync(topicDir, { recursive: true });
  const filePath = path.join(topicDir, `01_intro.md`);
  fs.writeFileSync(filePath, topic.content);
});

console.log('Microeconomics modules successfully generated.');
