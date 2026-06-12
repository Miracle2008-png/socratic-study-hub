# 8. Mesh Analysis

## The KVL Alternative to Nodal Analysis

While Nodal Analysis focuses on nodes and uses Kirchhoff's Current Law (KCL) to find unknown voltages, **Mesh Analysis** is its mathematical twin. It focuses on the "window panes" of a circuit and uses Kirchhoff's Voltage Law (KVL) to find unknown currents.

A **Mesh** is a loop in a circuit that does not contain any other loops inside it. If a circuit diagram looks like a window, the meshes are the individual panes of glass.

*Note: Mesh Analysis only works for **planar** circuits (circuits that can be drawn flat on a piece of paper without any wires crossing over one another). If wires cross, you must use Nodal Analysis.*

---

## The Mesh Analysis Algorithm

1.  **Identify Meshes:** Count the number of "window panes" in the circuit diagram.
2.  **Assign Mesh Currents:** Draw a circular arrow inside every mesh, representing a fictitious "mesh current" ($i_1, i_2, \dots$). It is standard convention to draw them all going **clockwise**.
3.  **Write KVL for every mesh:** Follow the clockwise path around each mesh, summing the voltage drops to zero.
    *   For a resistor on an outside edge, the voltage drop is just $i_{\text{mesh}} \times R$.
    *   For a resistor *shared* between two meshes (e.g., between mesh 1 and mesh 2), the actual current flowing through it is the difference between the two mesh currents. The drop is $(i_1 - i_2) \times R$ when working inside mesh 1.
4.  **Solve the System of Equations:** Solve the linear equations to find the mesh currents. You can then deduce the real physical current in any wire.

---

## Dealing with Current Sources (Supermeshes)

If an independent current source exists purely on the outside edge of a mesh, you are lucky! You immediately know that mesh current (e.g., $i_1 = 5\text{A}$), removing one unknown.

But what if a current source sits on a branch *shared* between two meshes? You cannot easily write a KVL voltage drop for an ideal current source. 
The solution is a **Supermesh**:
1. Mentally "erase" the shared branch containing the current source, merging the two meshes into one giant Supermesh.
2. Write one large KVL equation navigating the outer perimeter of this Supermesh.
3. Write an internal constraint equation relating the two mesh currents to the source (e.g., if a 3A source points up, and $i_2$ goes up while $i_1$ goes down, then $i_2 - i_1 = 3\text{A}$).

---

## Engineering Applications

*   **Power Distribution Grids:** When analyzing multi-loop power systems (like a neighborhood block), the lines have known resistances and loops are easily identifiable. Mesh analysis allows engineers to solve for the massive currents flowing through shared neutral lines.
*   **Dual Circuits:** Mesh analysis proves that for every planar circuit, there exists a mathematical "dual" circuit where voltages become currents, series becomes parallel, and nodes become meshes. This profound symmetry is used extensively in advanced filter design and RF engineering.

---

## Worked Examples

### Example 1 — Medium: Basic Mesh Analysis

**Problem:** A two-mesh circuit consists of two side-by-side loops. 
The left branch has a $10\text{V}$ battery (positive terminal up).
The top of the left mesh has a $2 \, \Omega$ resistor.
The shared middle branch has a $3 \, \Omega$ resistor.
The top of the right mesh has a $4 \, \Omega$ resistor.
The right branch has a $5\text{V}$ battery (positive terminal up).
Find the mesh currents $i_1$ (left) and $i_2$ (right).

**Solution:**
1.  **Assign clockwise currents:** $i_1$ in the left mesh, $i_2$ in the right mesh.
2.  **KVL for Mesh 1:**
    Start at bottom left, go up: hit (-) of 10V battery.
    $$ -10 + 2(i_1) + 3(i_1 - i_2) = 0 $$
    $$ 5i_1 - 3i_2 = 10 \quad \text{--- (Equation 1)} $$
3.  **KVL for Mesh 2:**
    Start at bottom middle, go up the shared branch. Because we are in mesh 2 doing clockwise, $i_2$ is pushing up, $i_1$ is pushing down:
    $$ 3(i_2 - i_1) + 4(i_2) + 5 = 0 $$
    *(Wait, the 5V battery is on the right branch. Going clockwise means we go DOWN the right branch, hitting the (+) terminal first, so it's +5).*
    $$ -3i_1 + 7i_2 = -5 \quad \text{--- (Equation 2)} $$
4.  **Solve the system:**
    Multiply Eq 1 by 3: $15i_1 - 9i_2 = 30$
    Multiply Eq 2 by 5: $-15i_1 + 35i_2 = -25$
    Add them: $26i_2 = 5 \implies \mathbf{i_2 \approx 0.192 \text{ A}}$
    Substitute back into Eq 1: $5i_1 - 3(0.192) = 10 \implies 5i_1 = 10.576 \implies \mathbf{i_1 \approx 2.115 \text{ A}}$

---

### Example 2 — Hard: Using a Supermesh

**Problem:** A two-mesh circuit has a $10\text{V}$ source on the left branch, a $2 \, \Omega$ top-left resistor, a $4 \, \Omega$ top-right resistor, and a $5 \, \Omega$ right branch resistor. The *shared middle branch* contains a $2\text{A}$ current source pointing DOWN. Find the power dissipated by the $5 \, \Omega$ resistor.

**Solution:**
1.  **Identify the Supermesh:** The $2\text{A}$ source is shared between Mesh 1 (left) and Mesh 2 (right). We create a Supermesh avoiding the middle branch.
2.  **KVL for Supermesh (outer perimeter):**
    $$ -10 + 2(i_1) + 4(i_2) + 5(i_2) = 0 $$
    $$ 2i_1 + 9i_2 = 10 \quad \text{--- (Equation 1)} $$
3.  **Constraint Equation for the middle branch:**
    The 2A source points DOWN. In the middle branch, $i_1$ (clockwise) goes DOWN, and $i_2$ (clockwise) goes UP. Therefore:
    $$ i_1 - i_2 = 2 \implies i_1 = i_2 + 2 \quad \text{--- (Equation 2)} $$
4.  **Substitute and Solve:**
    Substitute Eq 2 into Eq 1:
    $$ 2(i_2 + 2) + 9i_2 = 10 $$
    $$ 2i_2 + 4 + 9i_2 = 10 $$
    $$ 11i_2 = 6 \implies \mathbf{i_2 = \frac{6}{11} \text{ A} \approx 0.545 \text{ A}} $$
5.  **Calculate Power:**
    The $5 \, \Omega$ resistor is on the right boundary, so the only current flowing through it is $i_2$.
    $$ P = (i_2)^2 \times R = (0.545)^2 \times 5 = 0.297 \times 5 = \mathbf{1.485 \text{ W}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Mesh Analysis",
        "icon": "BrainCircuit",
        "description": "A systematic KVL algorithm to find unknown currents in planar circuits."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Step 1: Identify Meshes",
        "icon": "Activity",
        "description": "Find the simple 'window pane' loops with no loops inside them."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Step 2: Assign Currents",
        "icon": "Sigma",
        "description": "Draw clockwise fictitious currents (i1, i2) inside every mesh."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Step 3: Write KVL",
        "icon": "Layers",
        "description": "Walk the loop. Shared resistors use the difference (i1 - i2)."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Supermeshes",
        "icon": "Wrench",
        "description": "If a current source is shared, mentally erase it, do KVL around the outer perimeter, and add a constraint."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Network Theorems",
        "icon": "Target",
        "description": "How to simplify complex circuits into a single battery and single resistor using Thevenin."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
