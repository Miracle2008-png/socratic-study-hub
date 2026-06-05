# Time-Dependent Behaviors

For some non-Newtonian fluids, the apparent viscosity does not change instantly. It depends on the **duration of shear**. If you stir it at a constant speed, the thickness will slowly change over time as the internal structure of the fluid gradually breaks down or builds up.

## 1. Thixotropic Fluids

**Behavior:** If you apply a constant shear rate, the apparent viscosity *decreases over time*. When you stop stirring, the fluid slowly regains its original thickness.

*   *Microscopic cause:* The fluid has a delicate internal structure (like a network of hydrogen bonds). Stirring gradually tears this structure apart, making it thinner. When left to rest, the structure slowly rebuilds itself.
*   *Examples:* Many paints, yogurt, certain clays, and synovial fluid in human joints.
*   *Difference from Shear-Thinning:* Ketchup (shear-thinning) gets thin the *instant* you shake it, and gets thick the *instant* you stop. Yogurt (thixotropic) takes time to get thin as you stir it, and if you stop, it takes minutes or hours to become thick again.

## 2. Rheopectic (Anti-Thixotropic) Fluids

**Behavior:** If you apply a constant shear rate, the apparent viscosity *increases over time*. The longer you stir it, the thicker it gets. When you stop, it slowly returns to its original thin state.

*   *Microscopic cause:* Gentle stirring actually helps the polymer chains find each other and build a stronger internal network.
*   *Examples:* Very rare. Synovial fluid sometimes exhibits this under specific conditions. Certain specialized printing inks.

## 3. Modeling Time-Dependent Fluids

Modeling thixotropy mathematically is extremely difficult because you cannot just write an equation linking stress to shear rate. You must write an unsteady differential equation tracking the "structural parameter" of the fluid over time, calculating how fast the bonds are breaking versus how fast they are reforming.
