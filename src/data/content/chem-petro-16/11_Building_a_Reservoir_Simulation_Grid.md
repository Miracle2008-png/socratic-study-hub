# Building a Reservoir Simulation Grid

A reservoir simulation is only as good as the physical, 3D mathematical cage you build for the supercomputer to operate within. This cage is the **Simulation Grid**.

If the grid perfectly represents the complex geology of the earth, the simulator will output a masterpiece of predictive engineering. If the grid is built poorly, the simulator will confidently output total garbage. (In simulation, this is known as GIGO: Garbage In, Garbage Out).

## 1. Discretization: Cartesian vs. Corner-Point Grids

To solve the Diffusivity Equation, the continuous 3D volume of the reservoir must be sliced into thousands (or millions) of discrete blocks (Grid Cells).

### The Simple Cartesian Grid
In the early days of computing, grids were perfectly square 3D boxes, like a giant Rubik's Cube (a regular Cartesian grid). 
*The Flaw:* Geology is never perfectly square. Fault lines cut through the earth at jagged 45-degree angles. River channels curve like snakes. A rigid square box cannot physically capture a curved fault line without creating massive jagged "stair-step" errors.

### The Corner-Point Grid (CPG)
Modern simulators almost exclusively use Corner-Point Gridding. 
Instead of defining a box by its center, a CPG defines a box by the exact X, Y, and Z coordinates of its 8 corners. 
*   This means the grid block does not have to be a cube. It can be stretched, twisted, crushed, and tilted to perfectly match the bizarre, sloping contours of the geological rock layers.
*   If a fault line drops the rock layer 50 feet downward, the CPG simply shifts the 8 corners of the adjacent blocks down 50 feet, perfectly modeling the geological tear in the earth.

## 2. Populating the Grid (Upscaling)

Once the geometry of the 1,000,000 grid blocks is built, every single block must be assigned its exact physical properties (Porosity $\phi$, Permeability $k_x, k_y, k_z$, and Water Saturation $S_w$).

Where do these numbers come from?
The geologist builds a high-resolution "Geomodel" using data from well logs and seismic surveys. The geologist's model might contain **100 million** microscopic blocks. 

*The Problem:* If you feed a 100-million block model with complex 3D PVT fluid equations into a reservoir simulator, it will take the supercomputer six months to solve a single time-step. 

*The Solution:* **Upscaling**.
The reservoir engineer takes the massive 100-million block Geomodel and mathematically compresses it down into a manageable 1-million block Simulation model. 
100 tiny high-resolution blocks are averaged together to create one large, "upscaled" simulation block. 

*The Danger:* If you upscale a thin, highly permeable river channel (a thief zone) by averaging it together with the tight shale rock surrounding it, the thief zone disappears into the math. The simulator will predict a perfect, slow waterflood, completely missing the fact that the water will instantly blast through that hidden river channel and ruin the project.

## 3. Local Grid Refinement (LGR)

Most of the time, the fluid deep inside the massive reservoir is barely moving. You can safely use massive grid blocks (e.g., 200 feet by 200 feet) to save computer power.

However, in the exact 3-foot radius immediately surrounding the wellbore, the physics are violent. The fluid is accelerating massively, pressure is dropping radically, and gas is boiling out of the oil. 

If you use a massive 200x200 foot grid block to represent the well, the simulator will mathematically smear that violent pressure drop across the entire 200-foot block, completely destroying the accuracy of the calculation.

To fix this, engineers use **Local Grid Refinement (LGR)**. 
They take the single, massive grid block that contains the wellbore and shatter it into 100 tiny, microscopic grid blocks. 
This forces the supercomputer to spend 90% of its processing power doing highly accurate, high-resolution math exactly where the action is (near the well), while saving power by using massive blocks out in the quiet, empty reservoir.

## 4. Initialization (Establishing Equilibrium)

Before you can "turn on" the simulator and start producing oil, you must prove that your initial model is physically stable. This is called **Initialization**.

For 10 million years before the wells were drilled, the reservoir was in perfect hydrostatic and thermodynamic equilibrium. Gravity had perfectly separated the gas on top, the oil in the middle, and the heavy water on the bottom. 

When the engineer hits "Initialize," the supercomputer calculates the pressure and fluid forces inside the 1 million blocks at Time = 0.
*   If the engineer input the geological data correctly, the fluids will sit perfectly still in the computer.
*   If the data is flawed, the moment the simulator starts, massive "virtual" ocean currents of oil and water will violently slosh back and forth across the 3D model as the computer frantically tries to balance the impossible physics you gave it. This is a failed initialization.
