# Delayed Coking and Thermal Cracking

The Atmospheric Tower separates the light oil. The Vacuum Tower extracts the heavy Gas Oil. The FCC and Hydrocracker aggressively convert that Gas Oil into high-value gasoline and diesel.

But after all of this brilliant chemical engineering, the refinery is left with a massive, terrifying problem at the very bottom of the Vacuum Tower: **Vacuum Residue**.

Vacuum Residue is the absolute bottom of the barrel. It is a solid, black, foul-smelling asphalt. It is packed with massive, uncrackable asphaltene molecules, toxic heavy metals (Vanadium and Nickel), and massive amounts of Sulfur. 
You cannot pump it into the FCC; the heavy metals will instantly poison and destroy the \$10 million zeolite catalyst. You cannot sell it as fuel.

To squeeze the absolute last drop of valuable liquid out of this worthless black tar, the refinery turns to the most violent, aggressive, brute-force unit in the entire plant: **The Delayed Coker**.

## 1. The Physics of Thermal Cracking

The FCC uses elegant catalysts to crack oil. The Coker uses zero catalyst. It relies entirely on brute-force **Thermal Cracking**.

If you take a massive, heavy hydrocarbon molecule and heat it to an astronomical $950^\circ\text{F}$ ($500^\circ\text{C}$), the intense thermal energy violently vibrates the molecule until the carbon bonds literally shatter. 

Because there is no Hydrogen added, the shattered molecules have a massive carbon imbalance. 
*   Some of the shattered pieces form highly volatile, valuable light liquids (Coker Naphtha and Coker Gas Oil).
*   The remaining carbon atoms, completely stripped of their hydrogen, aggressively bond to each other, forming a solid, rock-hard matrix of pure, black Carbon. This is **Petroleum Coke**.

## 2. The Delayed Coking Process

If you heat the tar to $950^\circ\text{F}$ in the furnace, it will instantly turn into solid rock inside the furnace tubes, destroying the furnace in minutes.

The genius of the "Delayed" Coker is that it uses incredible fluid velocity to trick the oil.

1.  **The Furnace:** The black Vacuum Residue is pumped through the furnace at extreme, highway speeds. It is blasted with $950^\circ\text{F}$ heat. Because it is moving so fast, the chemical reaction is "delayed." It does not have time to turn into solid rock inside the pipes.
2.  **The Coke Drums:** The violently boiling, reacting liquid blasts out of the furnace and is dumped into the bottom of a massive, 100-foot-tall, empty steel silo called a **Coke Drum**.
3.  **The Cracking:** Now resting inside the massive drum, the thermal cracking reaction completes. The volatile, highly valuable cracked liquids (gasoline and diesel vapor) boil out the top of the drum and are saved. 
4.  **The Solidification:** As the vapors leave, the solid pure carbon (Coke) is left behind. Over 24 hours, the massive 100-foot drum completely fills up with a solid, rock-hard block of black carbon. 

## 3. The Nightmare of Decoking

When the drum is full of solid rock, the flow of hot tar is switched to a second, empty drum next to it. 
Now, the engineers must get the solid rock out of the first drum. 

This is the most physically dangerous and dramatic operation in the refinery.
1.  The massive steel drum is allowed to cool slightly.
2.  A massive crane on the top of the 100-foot structure opens a giant hatch. 
3.  A specialized, high-pressure water drill is lowered deep into the solid rock.
4.  Massive pumps blast water at **4,000 psi** out of the drill bit. The water acts like a laser, violently slicing and blasting the solid rock-hard carbon into massive black chunks.
5.  The bottom hatch of the drum is opened, and hundreds of tons of black, steaming carbon boulders violently crash out of the bottom of the drum into a massive concrete pit.

## 4. The Economics of the Coker

The Petroleum Coke boulders are scooped up by bulldozers, loaded onto trains, and sold as a cheap, dirty substitute for coal to be burned in power plants or used to manufacture aluminum. 

The Coker itself is incredibly expensive and terrifying to operate, but it is the ultimate economic weapon. 
A refinery with a Delayed Coker (a "Deep Conversion Refinery") can buy the absolute cheapest, nastiest, heaviest tar in the world for pennies on the dollar, completely destroy the tar in the Coker, and magically extract millions of barrels of high-value gasoline and diesel, maximizing the profit of every single drop of crude oil.

## 5. Delayed Coking Process Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "residue", "data": { "label": "Vacuum Residue", "icon": "Droplet", "description": "Rock-hard, toxic black tar from the very bottom of the Vacuum Tower." }, "style": { "background": "#020617", "color": "#94a3b8" } },
    { "id": "furnace", "data": { "label": "High-Velocity Furnace", "icon": "Flame", "description": "Heats the tar to 950°F so fast that it doesn't have time to solidify in the pipes (Delayed reaction)." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "drum_a", "data": { "label": "Coke Drum A (Filling)", "icon": "Database", "description": "Massive 100-foot empty silo. The tar violently boils and cracks inside, filling the drum with solid carbon." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "drum_b", "data": { "label": "Coke Drum B (Decoking)", "icon": "Droplets", "description": "The offline drum. A 4,000 psi water drill is slicing the solid rock-hard carbon out of the drum." }, "style": { "background": "#1e293b", "color": "#cbd5e1" } },
    { "id": "fractionator", "data": { "label": "Coker Fractionator", "icon": "SplitSquareVertical", "description": "The valuable vapors boiling out of Drum A are collected and separated into Naphtha and Gas Oil." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "coke", "data": { "label": "Petroleum Coke", "icon": "Box", "description": "Hundreds of tons of solid black carbon boulders falling out of Drum B, to be sold as cheap coal." }, "style": { "background": "#1c1917", "color": "#a8a29e" } },
    { "id": "liquids", "data": { "label": "Coker Liquids", "icon": "Fuel", "description": "Highly unsaturated liquids that MUST be sent to the Hydrotreater before they can be sold." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "residue", "target": "furnace", "animated": true },
    { "source": "furnace", "target": "drum_a", "animated": true },
    { "source": "furnace", "target": "drum_b", "animated": true, "style": { "stroke": "#475569", "strokeDasharray": "5,5" }, "label": "Offline" },
    { "source": "drum_a", "target": "fractionator", "animated": true, "label": "Vapors" },
    { "source": "drum_b", "target": "coke", "animated": true, "label": "Solid Rock" },
    { "source": "fractionator", "target": "liquids", "animated": true }
  ]
}
```
