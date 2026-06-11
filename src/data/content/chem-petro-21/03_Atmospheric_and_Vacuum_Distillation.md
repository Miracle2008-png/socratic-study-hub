# Atmospheric and Vacuum Distillation

The absolute first step in any petroleum refinery is the physical separation of the raw crude oil into its component parts (fractions). No chemical bonds are broken here. This is pure thermodynamics and gravity, executed by the most iconic structures in a refinery: the massive **Distillation Columns**.

## 1. The Desalter (The Pre-Wash)

Before the oil can enter the distillation tower, it must be washed. 
Crude oil arriving from the oilfield is contaminated with microscopic droplets of highly concentrated saltwater brine. If this salt enters the $700^\circ\text{F}$ furnaces of the refinery, it will violently crystallize, form hydrochloric acid, and completely eat through the massive steel pipes in a matter of weeks.

The raw oil is pumped into a massive vessel called a **Desalter**. Fresh water is mixed into the oil, and a massive 20,000-volt electrostatic grid violently rips the saltwater droplets out of the crude. The clean, salt-free oil proceeds to the furnace.

## 2. The Atmospheric Distillation Unit (ADU)

The clean crude oil is pumped through a roaring, natural-gas-fired furnace and heated to exactly **$700^\circ\text{F}$ ($370^\circ\text{C}$)**. 
At this extreme temperature, roughly 60% of the crude oil instantly vaporizes into a boiling gas. The remaining 40% (the heavy stuff) remains a thick liquid.

This chaotic, boiling mixture is blasted into the bottom of a massive, 150-foot-tall steel tower: the **Atmospheric Distillation Unit (ADU)**.

### The Physics of the Tower
The inside of the tower is not empty. It is packed with dozens of horizontal steel plates (Fractionation Trays). 
The tower operates on a strict temperature gradient:
*   The bottom of the tower is blazing hot ($700^\circ\text{F}$).
*   The top of the tower is relatively cool ($100^\circ\text{F}$).

### The Sorting Process
As the hot vapor blasts into the bottom of the tower, it naturally floats upward toward the cool ceiling. 
As the vapor rises, it cools down. When a specific hydrocarbon molecule reaches a tray that is colder than its unique boiling point, it instantly condenses back into a liquid and pools on that specific tray.

1.  **Top of the Tower ($100^\circ\text{F}$):** Only the lightest gases (Propane, Butane) survive the journey to the top without condensing. They exit as a gas.
2.  **Upper Trays ($250^\circ\text{F}$):** The Naphtha (raw gasoline) condenses here. A pipe draws this liquid off the side of the tower.
3.  **Middle Trays ($400^\circ\text{F}$):** The Kerosene (Jet Fuel) condenses here.
4.  **Lower Trays ($550^\circ\text{F}$):** The heavy Diesel fuel condenses here.
5.  **The Bottom ($700^\circ\text{F}$):** The incredibly heavy, complex hydrocarbons that refused to boil in the furnace simply fall to the bottom of the tower as a thick, black liquid. This is the **Atmospheric Residue**.

## 3. The Vacuum Distillation Unit (VDU)

The Atmospheric Residue pooling at the bottom of the ADU is a massive problem. It makes up 40% of the barrel, but it is too thick to use as fuel, and too valuable to throw away. It is packed with heavy Gas Oils that could be cracked into gasoline.

*Why not just turn the furnace up to $1,000^\circ\text{F}$ to boil it?*
Because of **Thermal Cracking (Coking)**. If you heat crude oil past $750^\circ\text{F}$ at normal atmospheric pressure, the massive heat violently shatters the molecules randomly. The oil literally burns and turns into solid, rock-hard carbon (Coke), instantly plugging the massive steel pipes solid.

**The Solution: A Vacuum.**
According to the laws of thermodynamics, if you drastically lower the pressure of a system, you drastically lower the boiling point of the liquids inside it. (This is why water boils faster at the top of Mount Everest).

The Atmospheric Residue is pumped into a second, much wider, incredibly reinforced tower: the **Vacuum Distillation Unit (VDU)**.
Massive steam ejectors on the roof of the tower suck all the air out, creating a massive, deep vacuum (operating at an absolute pressure of only 0.5 psi, near outer-space levels).

Under this extreme vacuum, the heavy residue magically boils at only $700^\circ\text{F}$. 
*   **Vacuum Gas Oil (VGO):** The valuable heavy oils boil off, float to the top of the vacuum tower, and are saved. This is the primary "food" for the cracking units.
*   **Vacuum Residue:** The absolute heaviest, nastiest 10% of the oil (solid asphalt) refuses to boil even in a hard vacuum. It falls to the bottom to be sold as road pavement or sent to the Delayed Coker.

## 4. Distillation Flow Diagram

Explore the interactive flow diagram of the Atmospheric and Vacuum Distillation process below. Drag the nodes to rearrange them!

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "1", "data": { "label": "Raw Crude Oil", "icon": "Droplet", "description": "Raw crude oil arriving from the oilfield. It is a complex mixture of thousands of different hydrocarbon molecules, along with contaminants like saltwater, sulfur, and heavy metals." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "2", "data": { "label": "Desalter (Wash)", "icon": "Waves", "description": "The Desalter uses a high-voltage electrostatic grid (up to 20,000 volts) to force saltwater droplets to coalesce and separate from the oil. If salt enters the furnace, it forms highly corrosive hydrochloric acid." }, "style": { "background": "#0c4a6e", "color": "#e0f2fe" } },
    { "id": "3", "data": { "label": "Furnace (700°F)", "icon": "Flame", "description": "A massive natural gas-fired heater that rapidly heats the crude oil to roughly 700°F (370°C). This partially vaporizes the oil before it enters the distillation column." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "4", "data": { "label": "Atmospheric Tower", "icon": "TowerControl", "description": "The Atmospheric Distillation Unit (ADU) separates the crude oil into fractions based on their boiling points using dozens of fractionation trays. The vapor rises and condenses on cooler trays." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "5", "data": { "label": "Light Gases", "icon": "Wind", "description": "The lightest hydrocarbons (C1 to C4) like methane, ethane, propane, and butane. These never condense in the tower and exit the top as gases." }, "style": { "background": "#334155", "color": "#f8fafc" } },
    { "id": "6", "data": { "label": "Naphtha / Kerosene", "icon": "Plane", "description": "Condensing higher up in the tower, Naphtha is upgraded into gasoline, while Kerosene is purified into Jet Fuel." }, "style": { "background": "#1e293b", "color": "#f8fafc" } },
    { "id": "7", "data": { "label": "Heavy Diesel", "icon": "Truck", "description": "Condensing lower in the tower, this heavy fraction is used primarily for diesel engines in trucks, trains, and ships." }, "style": { "background": "#0f172a", "color": "#f8fafc" } },
    { "id": "8", "data": { "label": "Atmospheric Residue", "icon": "ArrowDownToLine", "description": "The 40% of the crude oil that is too heavy to boil at atmospheric pressure. It falls to the bottom of the tower as a thick, black liquid." }, "style": { "background": "#020617", "color": "#94a3b8" } },
    { "id": "9", "data": { "label": "Vacuum Tower (0.5 psi)", "icon": "Tornado", "description": "The Vacuum Distillation Unit (VDU) lowers the pressure to a near-vacuum. This allows the heavy residue to boil at lower temperatures without cracking (burning into solid carbon)." }, "style": { "background": "#1e1b4b", "color": "#e0e7ff" } },
    { "id": "10", "data": { "label": "Vacuum Gas Oil (VGO)", "icon": "Activity", "description": "The heavy oils that successfully boil under vacuum. VGO is the primary feedstock sent to the Fluid Catalytic Cracking (FCC) unit to be smashed into gasoline." }, "style": { "background": "#312e81", "color": "#e0e7ff" } },
    { "id": "11", "data": { "label": "Vacuum Residue", "icon": "GripHorizontal", "description": "The absolute heaviest 10% of the oil (solid asphalt). It refuses to boil even in a hard vacuum and falls to the bottom. Used for road pavement or sent to a Coker." }, "style": { "background": "#020617", "color": "#64748b" } }
  ],
  "edges": [
    { "source": "1", "target": "2", "animated": true },
    { "source": "2", "target": "3", "animated": true },
    { "source": "3", "target": "4", "animated": true },
    { "source": "4", "target": "5", "animated": true },
    { "source": "4", "target": "6", "animated": true },
    { "source": "4", "target": "7", "animated": true },
    { "source": "4", "target": "8", "animated": true },
    { "source": "8", "target": "9", "animated": true },
    { "source": "9", "target": "10", "animated": true },
    { "source": "9", "target": "11", "animated": true }
  ]
}
```
