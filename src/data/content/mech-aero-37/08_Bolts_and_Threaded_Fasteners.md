---
title: "Bolts and Threaded Fasteners"
---

# Bolts and Threaded Fasteners

At first glance, a bolt is the simplest machine element. In reality, bolted joints are highly complex, non-linear structural systems. Improperly designed or installed bolted joints are a leading cause of mechanical failure in aerospace and heavy industry.

## 1. The Mechanics of a Thread

A screw thread is simply an inclined plane (a wedge) wrapped around a cylinder.

*   When you turn a nut on a bolt, you are forcing the wedge of the nut thread up the wedge of the bolt thread.
*   This wedge action translates relatively low rotational force (torque applied by a wrench) into a massive linear force (clamping force or preload) pulling the bolt taut.
*   **Pitch:** The distance between adjacent threads. Fine threads have a smaller pitch. They are stronger (more minor diameter area) and less likely to vibrate loose, but are easier to cross-thread or strip.
*   **Lead:** The distance a nut travels in one full rotation. (For a standard single-start thread, Lead = Pitch).

## 2. Preload: The Secret to Bolted Joints

The most critical concept in fastener design is **Preload**.

When you tighten a bolt holding two thick steel plates together, the bolt stretches (like a very stiff spring), and the plates compress. This stretching puts the bolt into massive tension, clamping the plates together.

**Why is Preload important?**
1.  **Friction:** The massive clamping force creates immense friction between the plates. If you pull sideways on the plates (a shear load), the friction prevents them from sliding. The bolt itself should *never* actually touch the sides of the hole to stop the sliding (unless it is a specifically designed "shoulder bolt").
2.  **Fatigue Protection:** This is the magic of bolted joints. Imagine a pressure vessel with a bolted lid. The pressure fluctuates rapidly, pushing up on the lid.
    *   If the bolts are loose (no preload), the fluctuating pressure pulls directly on the bolts, causing rapid fatigue failure.
    *   If the bolts are preloaded to a tension *higher* than the pressure force, the fluctuating pressure just slightly un-compresses the lid plates. The bolt itself feels almost zero change in stress. Because the alternating stress ($\sigma_a$) in the bolt is near zero, it lives forever, immune to fatigue.

**The Golden Rule of Bolting:** A bolted joint is safe if the preload tension is significantly higher than the external separating forces, *and* the plates never fully separate.

## 3. Calculating Torque

Achieving the correct preload is difficult. The most common method on the shop floor is using a torque wrench. The relationship between the torque applied ($T$) and the resulting preload tension ($F_i$) is estimated by:

$$ T = K \cdot F_i \cdot d $$

*   $d$: Nominal bolt diameter.
*   $K$: The Torque Coefficient (or "Nut Factor").

**The Danger of the K-Factor:**
The torque wrench does not measure bolt stretch; it only measures resistance to turning. About 90% of the torque you apply goes into overcoming friction (between the threads, and under the bolt head). Only 10% actually stretches the bolt.

Therefore, the $K$ factor is highly sensitive to lubrication.
-   A dry, rusty bolt has high friction ($K \approx 0.30$). You hit your target torque on the wrench quickly, but because of friction, the bolt barely stretched. The joint is loose and will fail.
-   A well-oiled or anti-seize coated bolt has low friction ($K \approx 0.12$). You apply the target torque, but because there is no friction, 100% of your effort goes into stretching the bolt. You stretch it past its yield point and snap the bolt in half.

To avoid this in critical aerospace applications, engineers abandon torque wrenches entirely. They measure the physical stretch of the bolt using ultrasonic sensors or micrometers, or use specialized "tensioning" hydraulic jacks that pull the bolt to the exact length before running the nut down by hand.

## 4. Failure Modes

1.  **Tensile Overload:** The bolt snaps because the preload plus external load exceeded its Ultimate Tensile Strength.
2.  **Thread Stripping:** The threads shear off. This happens if the nut is made of softer material than the bolt, or if the "length of engagement" (how many threads are actually meshed inside the nut) is too short. Good design dictates that a bolt should break in tension before its threads strip, as a broken bolt is obvious, while a stripped thread might hide dangerously inside the assembly.
3.  **Fatigue:** Occurs if preload is lost (due to vibration loosening the nut) and the bolt is subjected to cyclic external loads.
