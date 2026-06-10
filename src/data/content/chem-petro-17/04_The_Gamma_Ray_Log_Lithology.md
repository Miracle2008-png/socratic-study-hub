# The Gamma Ray Log: Lithology

The absolute first question a petrophysicist must answer when looking at a well log is: *Where is the Sandstone, and where is the Shale?*

Sandstone is the reservoir rock (the vault that holds the oil). Shale is the seal rock (the solid, impermeable cap that traps the oil). To find the exact boundaries between these two rocks, the industry uses the simplest and most robust tool in existence: the **Gamma Ray (GR) Log**.

## 1. Natural Radioactivity in Rocks

The Gamma Ray tool does not emit any radiation. It is simply a highly sensitive Geiger counter (a scintillation detector) lowered into the hole. It passively listens to the rock.

Almost all rocks on Earth emit a microscopic amount of natural background radiation, originating from three specific radioactive isotopes:
1.  **Potassium-40 ($^{40}K$)**
2.  **Uranium-238 ($^{238}U$)**
3.  **Thorium-232 ($^{232}Th$)**

The key to lithology identification lies in exactly *where* these radioactive elements are naturally found in the geological world.

## 2. Shale vs. Clean Sandstone

During the millions of years of erosion that create sedimentary rocks, the heavy, radioactive elements behave very specifically.

### Shale (High Radioactivity)
Shale is formed from microscopic clay particles. Clay minerals have a highly complex, layered crystal structure that acts like a massive chemical sponge. Over millions of years, clay naturally absorbs and traps massive amounts of radioactive Potassium, Uranium, and Thorium from the ocean water.
*   Therefore, **Shale is naturally highly radioactive.**
*   A Gamma Ray tool passing a thick shale bed will spike violently to the right, reading very high API units (e.g., 100 to 150 API).

### Clean Sandstone and Limestone (Low Radioactivity)
Sandstone is primarily made of solid Quartz grains ($SiO_2$). Limestone is made of Calcium Carbonate ($CaCO_3$). Neither of these pure minerals has any room in their chemical structure for massive radioactive isotopes. 
*   Therefore, **Clean Sandstone and Limestone are almost perfectly non-radioactive.**
*   A Gamma Ray tool passing a beautiful, clean, oil-bearing sandstone will drop flat to the left, reading very low API units (e.g., 15 to 30 API).

## 3. Interpreting the Gamma Ray Log

The Gamma Ray log is plotted in **Track 1** (the far left column of the log), usually with a scale from 0 API on the left to 150 API on the right.

The petrophysicist uses the GR log to draw the definitive "Lithology Profile" of the well.
*   **The Shale Baseline:** They draw a straight vertical line through the furthest right, highest peaks on the log. This represents 100% pure, solid Shale.
*   **The Clean Sand Baseline:** They draw a straight vertical line through the furthest left, lowest troughs on the log. This represents 100% pure, clean Sandstone.

By looking at how the squiggly line bounces between these two baselines, the engineer can instantly identify the exact depth and thickness of every potential oil reservoir in the 10,000-foot well.

## 4. Calculating the Volume of Shale ($V_{sh}$)

Rocks in the real world are rarely 100% pure. Often, an ancient river deposited a mixture of 70% sand and 30% clay dust. This "dirty sand" will have a moderate Gamma Ray reading right in the middle of the track (e.g., 60 API).

Because clay dust ruins the permeability of a rock, the engineer must mathematically calculate exactly how much shale is mixed into the sandstone. This is called the **Volume of Shale ($V_{sh}$)**.

Using a simple linear interpolation between the Sand Baseline ($GR_{min}$) and the Shale Baseline ($GR_{max}$):

$$ V_{sh} = \frac{GR_{log} - GR_{min}}{GR_{max} - GR_{min}} $$

If $V_{sh}$ is $0\%$, the rock is a perfect, clean reservoir.
If $V_{sh}$ is $> 40\%$, the rock is so clogged with clay dust that the permeability is likely zero, and the engineer can completely ignore it and move on to a better zone.
