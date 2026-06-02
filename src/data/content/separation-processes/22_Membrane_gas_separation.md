# Membrane gas separation

Gas mixtures can be effectively separated by synthetic membranes made from polymers such as polyamide or cellulose acetate, or from ceramic materials.

## Basic process

Gas separation across a membrane is a pressure-driven process, where the driving force is the difference in pressure between inlet of raw material and outlet of product. The membrane used in the process is a generally non-porous layer, so there will not be a severe leakage of gas through the membrane. The performance of the membrane depends on permeability and selectivity. Permeability is affected by the penetrant size. Larger gas molecules have a lower diffusion coefficient. The polymer chain flexibility and free volume in the polymer of the membrane material influence the diffusion coefficient, as the space within the permeable membrane must be large enough for the gas molecules to diffuse across. The solubility is expressed as the ratio of the concentration of the gas in the polymer to the pressure of the gas in contact with it. Permeability is the ability of the membrane to allow the permeating gas to diffuse through the material of the membrane as a consequence of the pressure difference over the membrane, and can be measured in terms of the permeate flow rate, membrane thickness and area and the pressure difference across the membrane. The selectivity of a membrane is a measure of the ratio of permeability of the relevant gases for the membrane. It can be calculated as the ratio of permeability of two gases in binary separation.

The membrane gas separation equipment typically pumps gas into the membrane module and the targeted gases are separated based on difference in diffusivity and solubility. For example, oxygen will be separated from the ambient air and collected at the upstream side, and nitrogen at the downstream side. As of 2016, membrane technology was reported as capable of producing 10 to 25 tonnes of 25 to 40% oxygen per day.

## Membrane governing methodology

There are three main diffusion mechanisms. The first (b), Knudsen diffusion holds at very low pressures where lighter molecules can move across a membrane faster than heavy ones, in a material with reasonably large pores. The second (c), molecular sieving, is the case where the pores of the membrane are too small to let one component pass, a process which is typically not practical in gas applications, as the molecules are too small to design relevant pores. In these cases the movement of molecules is best described by pressure-driven convective flow through capillaries, which is quantified by Darcy's law. However, the more general model in gas applications is the solution-diffusion (d) where particles are first dissolved onto the membrane and then diffuse through it both at different rates. This model is employed when the pores in the polymer membrane appear and disappear faster relative to the movement of the particles.

In a typical membrane system the incoming feed stream is separated into two components: permeant and retentate. Permeant is the gas that travels across the membrane and the retentate is what is left of the feed. On both sides of the membrane, a gradient of chemical potential is maintained by a pressure difference which is the driving force for the gas molecules to pass through. The ease of transport of each species is quantified by the permeability, Pi. With the assumptions of ideal mixing on both sides of the membrane, ideal gas law, constant diffusion coefficient and Henry's law, the flux of a species can be related to the pressure difference by Fick's law:

          J
            i
        =
                D
                  i
                K
                  i
              (
                p
                  i
                ′
              −
                p
                  i
                ″
              )
            l
        =
                P
                  i
              (
                p
                  i
                ′
              −
                p
                  i
                ″
              )
            l

$$ J_{i}={\frac {D_{i}K_{i}(p_{i}'-p_{i}'')}{l}}={\frac {P_{i}(p_{i}'-p_{i}'')}{l}} $$

where, (Ji) is the molar flux of species i across the membrane, (l) is membrane thickness, (Pi) is permeability of species i, (Di) is diffusivity, (Ki) is the Henry coefficient, and (pi') and (pi") represent the partial pressures of the species i at the feed and permeant side respectively. The product of DiKi is often expressed as the permeability of the species i,  on the specific membrane being used.

          P
            i
        =
          D
            i
          K
            i

$$ P_{i}=D_{i}K_{i} $$

The flow of a second species, j, can be defined as:

          J
            j
        =
                P
                  j
              (
                p
                  j
                ′
              −
                p
                  j
                ″
              )
            l

$$ J_{j}={\frac {P_{j}(p_{j}'-p_{j}'')}{l}} $$

With the expression above, a membrane system for a binary mixture can be sufficiently defined. it can be seen that the total flow across the membrane is strongly dependent on the relation between the feed and permeate pressures. The ratio of feed pressure (p') over permeate pressure (p") is defined as the membrane pressure ratio (θ).

        θ

        =
              P

              ′
              P

              ″

$$ \theta ={\frac {P'}{P''}} $$

It is clear from the above, that a flow of species i or j across the membrane can only occur when:

          p
            i
          ′
        −
          p
            i
          ″
        =
          p

          ′
          n
            i
          ′
        −
          p

          ″
          n
            i
          ″
        ≠

        0

$$ p_{i}'-p_{i}''=p'n_{i}'-p''n_{i}''\neq 0 $$

In other words, the membrane will experience flow across it when there exists a concentration gradient between feed and permeate. If the gradient is positive, the flow will go from the feed to the permeate and species i will be separated from the feed.

          p

          ′
          n
            i
          ′
        −
          p

          ″
          n
            i
          ″
        >

        0

        →
              n
                i
              ″
              n
                i
              ′
        ≤
              p

              ′
              p

              ″

$$ p'n_{i}'-p''n_{i}''>0\rightarrow {\frac {n_{i}''}{n_{i}'}}\leq {\frac {p'}{p''}} $$

Therefore, the maximum separation of species i results from:

          n
            i
          ″
        ,

        m

        a
          x

          ″
        =
              p

              ′
              p

              ″
          n
            i
          ′
        =

        θ
          n
            i
          ′

$$ n_{i}'',max''={\frac {p'}{p''}}n_{i}'=\theta n_{i}' $$

Another important coefficient when choosing the optimum membrane for a separation process is the membrane selectivity αij defined as the ratio of permeability of species i with relation to the species j.

          α
            i

            j
        =
              P
                i
              P
                j

$$ \alpha _{ij}={\frac {P_{i}}{P_{j}}} $$

This coefficient is used to indicate the level to which the membrane is able to separates species i from j. It is obvious from the expression above, that a membrane selectivity of 1 indicates the membrane has no potential to separate the two gases, the reason being, both gases will diffuse equally through the membrane.

In the design of a separation process, normally the pressure ratio and the membrane selectivity are prescribed by the pressures of the system and the permeability of the membrane . The level of separation achieved by the membrane (concentration of the species to be separated) needs to be evaluated based on the aforementioned design parameters in order to evaluate the cost-effectiveness of the system.

## Membrane performance

The concentration of species i and j across the membrane can be evaluated based on their respective diffusion flows across it.

          n
            i
          ″
        =
              J
                i
              ∑
                  J
                    k
        ,
          n
            j
          ″
        =
              J
                j
              ∑
                  J
                    k

$$ n_{i}''={\frac {J_{i}}{\sum {J_{k}}}},\quad n_{j}''={\frac {J_{j}}{\sum {J_{k}}}} $$

In the case of a binary mixture, the concentration of species i across the membrane:

          n
            i
          ″
        =
              J
                i
                J
                  i
              +
                J
                  j

$$ n_{i}''={\frac {J_{i}}{J_{i}+J_{j}}} $$

This can be further expanded to obtain an expression of the form:

          n
            i
          ″
        =
          n
            i
          ″
        (

        ϕ

        ,
          α
            i

            j
        ,
          n
            i
              ′
        )

$$ n_{i}''=n_{i}''(\phi ,\alpha _{ij},n_{i}^{'}) $$

          n
            i
          ″
        =
              J
                i
                J
                  i
              +
                J
                  j
        =
                P
                  i
              (
                p
                  i
                ′
              −
                p
                  i
                ″
              )
                P
                  i
              (
                p
                  i
                ′
              −
                p
                  i
                ″
              )

              +
                P
                  j
              (
                n
                  j
                ′
              −
                  1

                  ϕ
                n
                  j
                ″
              )

$$ n_{i}''={\frac {J_{i}}{J_{i}+J_{j}}}={\frac {P_{i}(p_{i}'-p_{i}'')}{P_{i}(p_{i}'-p_{i}'')+P_{j}(n_{j}'-{\frac {1}{\phi }}n_{j}'')}} $$

Using the relations:

          p
            i
          ′
        =
          p

          ′
          n
            i
          ′
        ,
          p
            j
          ′
        =
          p

          ′
          n
            j
          ′
        =
              p

              ′
            ϕ
          n
            i
          ′

$$ p_{i}'=p'n_{i}',\quad p_{j}'=p'n_{j}'={\frac {p'}{\phi }}n_{i}' $$

          p
            i
          ″
        =
          p

          ″
          n
            i
          ′
        ,
          p
            j
          ″
        =
          p

          ″
          n
            j
          ″
        =
              p

              ′
            ϕ
          n
            i
          ″

$$ p_{i}''=p''n_{i}',\quad p_{j}''=p''n_{j}''={\frac {p'}{\phi }}n_{i}'' $$

The expression can be rewritten as:

          n
            i
          ″
        =
                P
                  i
                p

                ′
              (
                n
                  i
                ′
              −
                  1

                  ϕ
                n
                  i
                ″
              )
                P
                  i
                p

                ′
              (
                n
                  i
                ′
              −
                  1

                  ϕ
                n
                  i
                ″
              )

              +
                P
                  j
                p

                ′
              (
                n
                  j
                ′
              −
                  1

                  ϕ
                n
                  j
                ″
              )

$$ n_{i}''={\frac {P_{i}p'(n_{i}'-{\frac {1}{\phi }}n_{i}'')}{P_{i}p'(n_{i}'-{\frac {1}{\phi }}n_{i}'')+P_{j}p'(n_{j}'-{\frac {1}{\phi }}n_{j}'')}} $$

Then using 
          n
            j
          ′
        =

        1

        −
          n
            i
          ′
        a

        n

        d
          n
            j
          ″
        =

        1

        −
          n
            i
          ″

$$ n_{j}'=1-n_{i}'\quad and\quad n_{j}''=1-n_{i}'' $$

          n
            i
          ″
        =
                P
                  i
                p

                ′
              (
                n
                  i
                ′
              −
                  1

                  ϕ
                n
                  i
                ″
              )
                P
                  i
                p

                ′
              (
                n
                  i
                ′
              −
                  1

                  ϕ
                n
                  i
                ″
              )

              +
                P
                  j
                p

                ′
              (

              (

              1

              −
                n
                  i
                ′
              )

              −
                  1

                  ϕ
              (

              1

              −
                n
                  i
                ″
              )

              )

$$ n_{i}''={\frac {P_{i}p'(n_{i}'-{\frac {1}{\phi }}n_{i}'')}{P_{i}p'(n_{i}'-{\frac {1}{\phi }}n_{i}'')+P_{j}p'((1-n_{i}')-{\frac {1}{\phi }}(1-n_{i}''))}} $$

        (

        1

        −

        α

        )

        (
          n
            i
          ″
          )
            2
        +

        (

        ϕ

        +

        ϕ

        (

        α

        −

        1

        )
          n
            i
          ′
        +

        α

        −

        1

        )
          n
            i
          ″
        −

        α

        ϕ
          n
            i
          ′
        =

        0

$$ (1-\alpha )(n_{i}'')^{2}+(\phi +\phi (\alpha -1)n_{i}'+\alpha -1)n_{i}''-\alpha \phi n_{i}'=0 $$

The solution to the above quadratic expression can be expressed as:

          n
            i
        =
              −

              (

              ϕ

              +

              ϕ

              (

              α

              −

              1

              )
                n
                  i
                ′
              +

              α

              −

              1

              )

              ±
                  ϕ

                  +

                  ϕ

                  (

                  α

                  −

                  1

                  )
                    n
                      i
                    ′
                  +

                  α

                  −

                  1
                    )
                      2
                  +

                  4

                  (

                  1

                  −

                  α

                  )

                  α

                  ϕ
                    n
                      i
                    ′
              2

              (

              1

              −

              α

              )

$$ n_{i}={\frac {-(\phi +\phi (\alpha -1)n_{i}'+\alpha -1)\pm {\sqrt {\phi +\phi (\alpha -1)n_{i}'+\alpha -1)^{2}+4(1-\alpha )\alpha \phi n_{i}'}}}{2(1-\alpha )}} $$

Finally, an expression for the permeant concentration is obtained by the following:

          n
            i
          ″
        (

        ϕ

        α
          n
            i
          ′
        )

        =
            ϕ

            2
          (
              n
                i
              ′
            +
                1

                ϕ
            +
                1
                  α

                  −

                  1
            −
                    (
                        n
                          i
                        ′
                      +
                          1

                          ϕ
                      +
                          1
                            α

                            −

                            1
                    )
                    2
                −
                      4

                      α
                        n
                          i
                        ′
                      (

                      α

                      −

                      1

                      )

                      ϕ
          )

$$ n_{i}''(\phi \alpha n_{i}')={\frac {\phi }{2}}\left(n_{i}'+{\frac {1}{\phi }}+{\frac {1}{\alpha -1}}-{\sqrt {\left(n_{i}'+{\frac {1}{\phi }}+{\frac {1}{\alpha -1}}\right)^{2}-{\frac {4\alpha n_{i}'}{(\alpha -1)\phi }}}}\right) $$

Along the separation unit, the feed concentration decays with the diffusion across the membrane causing the concentration at the membrane to drop accordingly. As a result, the total permeant flow (q"out) results from the integration of the diffusion flow across the membrane from the feed inlet (q'in) to feed outlet (q'out). A mass balance across a differential length of the separation unit is therefore:

          q

          ′
        (

        x

        )

        =
          q

          ′
        (

        x

        +

        d

        x

        )

        +
          ∫
            x
            x

            +

            d

            x
          q

          ″
        (

        x

        )

        d

        x

$$ q'(x)=q'(x+dx)+\int _{x}^{x+dx}q''(x)dx $$

where:

          q

          ″
        (

        x

        )

        =
          J
            i
        (

        x

        )

        +
          J
            j
        (

        x

        )

$$ q''(x)=J_{i}(x)+J_{j}(x) $$

Because of the binary nature of the mixture, only one species needs to be evaluated. Prescribing a function n'i=n'i(x), the species balance can be rewritten as:

          q

          ′
        (

        x

        )
          n
            i
          ′
        (

        x

        )

        =
          q

          ′
        (

        x

        +

        Δ

        x

        )
          n
            i
          ′
        (

        x

        +

        Δ

        x

        )

        +
          ∫
            x
            x

            +

            d

            x
          q

          ″
        (

        x

        )

        d

        x
                n
                  i
                ″
              ¯

$$ q'(x)n'_{i}(x)=q'(x+\Delta x)n'_{i}(x+\Delta x)+\int _{x}^{x+dx}q''(x)dx{\bar {n_{i}''}} $$

Where:

          ∫
            x
            x

            +

            d

            x
          q

          ″
        (

        x

        )

        d

        x

        =

        δ
          q

          ″
        ,
                n
                  i
                ″
              ¯
        =
                n
                  i
                ″
              (

              x

              )

              +
                n
                  i
                ″
              (

              x

              +

              Δ

              x

              )
            2

$$ \int _{x}^{x+dx}q''(x)dx=\delta q'',\quad {\bar {n_{i}''}}={\frac {n_{i}''(x)+n_{i}''(x+\Delta x)}{2}} $$

        δ
          q

          ″
        =
                n
                  i
                ′
              (

              x

              )

              −
                n
                  i
                ′
              (

              x

              +

              Δ

              x

              )
                      n
                        i
                      ″
                    ¯
              −
                n
                  i
                ′
              (

              x

              +

              Δ

              x

              )
          q

          ′
        (

        x

        )

$$ \delta q''={\frac {n'_{i}(x)-n'_{i}(x+\Delta x)}{{\bar {n_{i}''}}-n'_{i}(x+\Delta x)}}q'(x) $$

Lastly, the area required per unit membrane length can be obtained by the following expression:

        A

        =
              δ
                q

                ″
                J
                  i
              +
                J
                  j

$$ A={\frac {\delta q''}{J_{i}+J_{j}}} $$

## Membrane materials for carbon capture in flue gas streams

The material of the membrane plays an important role in its ability to provide the desired performance characteristics. It is optimal to have a membrane with a high permeability and sufficient selectivity and it is also important to match the membrane properties to that of the system operating conditions (for example pressures and gas composition).

Synthetic membranes are made from a variety of polymers including polyethylene, polyamides, polyimides, cellulose acetate, polysulphone and polydimethylsiloxane.

### Polymer membranes

Polymeric membranes are a common option for use in the capture of CO2 from flue gas because of the maturity of the technology in a variety of industries, namely petrochemicals. The ideal polymer membrane has both a high selectivity and permeability. Polymer membranes are examples of systems that are dominated by the solution-diffusion mechanism. The membrane is considered to have holes which the gas can dissolve (solubility) and the molecules can move from one cavity to the other (diffusion).

It was discovered by Robeson in the early 1990s that polymers with a high selectivity have a low permeability and opposite is true; materials with a low selectivity have a high permeability. This is best illustrated in a Robeson plot where the selectivity is plotted as a function of the CO2 permeation. In this plot, the upper bound of selectivity is approximately a linear function of the permeability. It was found that the solubility in polymers is mostly constant but the diffusion coefficients vary significantly and this is where the engineering of the material occurs. Somewhat intuitively, the materials with the highest diffusion coefficients have a more open pore structure, thus losing selectivity. There are two methods that researchers are using to break the Robeson limit, one of these is the use of glassy polymers whose phase transition and changes in mechanical properties make it appear that the material is absorbing molecules and thus surpasses the upper limit. The second method of pushing the boundaries of the Robeson limit is by the facilitated transport method. As previously stated, the solubility of polymers is typically fairly constant but the facilitated transport method uses a chemical reaction to enhance the permeability of one component without changing the selectivity.

### Nanoporous membranes

Nanoporous membranes are fundamentally different from polymer-based membranes in that their chemistry is different and that they do not follow the Robeson limit for a variety of reasons. The simplified figure of a nanoporous membrane shows a small portion of an example membrane structure with cavities and windows. The white portion represents the area where the molecule can move and the blue shaded areas represent the walls of the structure. In the engineering of these membranes, the size of the cavity (Lcy x Lcz) and window region (Lwy x Lwz) can be modified so that the desired permeation is achieved. It has been shown that the permeability of a membrane is the production of adsorption and diffusion. In low loading conditions, the adsorption can be computed by the Henry coefficient.

If the assumption is made that the energy of a particle does not change when moving through this structure, only the entropy of the molecules changes based on the size of the openings. If we first consider changes the cavity geometry, the larger the cavity, the larger the entropy of the absorbed molecules which thus makes the Henry coefficient larger. For diffusion, an increase in entropy will lead to a decrease in free energy which in turn leads to a decrease in the diffusion coefficient. Conversely, changing the window geometry will primarily effect the diffusion of the molecules and not the Henry coefficient.

In summary, by using the above simplified analysis, it is possible to understand why the upper limit of the Robeson line does not hold for nanostructures. In the analysis, both the diffusion and Henry coefficients can be modified without affecting the permeability of the material which thus can exceed the upper limit for polymer membranes.

#### Silica membranes

Silica membranes are mesoporous and can be made with high uniformity (the same structure throughout the membrane). The high porosity of these membranes gives them very high permeabilities. Synthesized membranes have smooth surfaces and can be modified on the surface to drastically improve selectivity. Functionalizing silica membrane surfaces with amine containing molecules (on the surface silanol groups) allows the membranes to separate CO2 from flue gas streams more effectively. Surface functionalization (and thus chemistry) can be tuned to be more efficient for wet flue gas streams as compared to dry flue gas streams. While previously, silica membranes were impractical due to their technical scalability and cost (they are very difficult to produce in an economical manner on a large scale), there have been demonstrations of a simple method of producing silica membranes on hollow polymeric supports. These demonstrations indicate that economical materials and methods can effectively separate CO2 and N2. Ordered mesoporous silica membranes have shown considerable potential for surface modification that allows for ease of CO2 separation. Surface functionalization with amines leads to the reversible formation of carbamates (during CO2 flow), increasing CO2 selectivity significantly.

#### Zeolite membranes

Zeolites are crystalline aluminosilicates with a regular repeating structure of molecular-sized pores. Zeolite membranes selectively separate molecules based on pore size and polarity and are thus highly tunable to specific gas separation processes. In general, smaller molecules and those with stronger zeolite-adsorption properties are adsorbed onto zeolite membranes with larger selectivity. The capacity to discriminate based on both molecular size and adsorption affinity makes zeolite membranes an attractive candidate for CO2 separation from N2, CH4, and H2.

Scientists have found that the gas-phase enthalpy (heat) of adsorption on zeolites increases as follows: H2 < CH4 < N2 < CO2. It is generally accepted that CO2 has the largest adsorption energy because it has the largest quadrupole moment, thereby increasing its affinity for charged or polar zeolite pores. At low temperatures, zeolite adsorption-capacity is large and the high concentration of adsorbed CO2 molecules blocks the flow of other gases. Therefore, at lower temperatures, CO2 selectively permeates through zeolite pores. Several recent research efforts have focused on developing new zeolite membranes that maximize the CO2 selectivity by taking advantage of the low-temperature blocking phenomena.

Researchers have synthesized Y-type (Si:Al>3) zeolite membranes which achieve room-temperature separation factors of 100 and 21 for CO2/N2 and CO2/CH4 mixtures respectively. DDR-type and SAPO-34 membranes have also shown promise in separating CO2 and CH4 at a variety of pressures and feed compositions. The SAPO-34 membranes, being nitrogen selective, are also strong contender for natural gas sweetening process.

Researchers have also made an effort to utilize zeolite membranes for the separation of H2 from hydrocarbons. Hydrogen can be separated from larger hydrocarbons such as C4H10 with high selectivity. This is due to the molecular sieving effect since zeolites have pores much larger than H2, but smaller than these large hydrocarbons. Smaller hydrocarbons such as  CH4, C2H6, and C3H8 are small enough to not be separated by molecular sieving. Researchers achieved a higher selectivity of hydrogen when performing the separation at high temperatures, likely as a result of a decrease in the competitive adsorption effect.

#### Metal-organic framework (MOF) membranes

There have been advances in zeolitic-imidazolate frameworks (ZIFs), a subclass of metal-organic frameworks (MOFs), that have allowed them to be useful for carbon dioxide separation from flue gas streams. Extensive modeling has been performed to demonstrate the value of using MOFs as membranes. MOF materials are adsorption-based, and thus can be tuned to achieve selectivity. The drawback to MOF systems is stability in water and other compounds present in flue gas streams. Select materials, such as ZIF-8, have demonstrated stability in water and benzene, contents often present in flue gas mixtures. ZIF-8 can be synthesized as a membrane on a porous alumina support and has proven to be effective at separating CO2 from flue gas streams. At similar CO2/CH4 selectivity to Y-type zeolite membranes, ZIF-8 membranes achieve unprecedented CO2 permeance, two orders of magnitude above the previous standard.

#### Perovskite membranes

Perovskite are mixed metal oxide with a well-defined cubic structure and a general formula of ABO3, where A is an alkaline earth or lanthanide element and B is a transition metal. These materials are attractive for CO2 separation because of the tunability of the metal sites as well as their stabilities at elevated temperatures.

The separation of CO2 from N2 was investigated with an α-alumina membrane impregnated with BaTiO3. It was found that adsorption of CO2 was favorable at high temperatures due to an endothermic interaction between CO2 and the material, promoting mobile CO2 that enhanced CO2 adsorption-desorption rate and surface diffusion. The experimental separation factor of CO2 to N2 was found to be 1.1-1.2 at 100 °C to 500 °C, which is higher than the separation factor limit of 0.8 predicted by Knudsen diffusion. Though the separation factor was low due to pinholes observed in the membrane, this demonstrates the potential of perovskite materials in their selective surface chemistry for CO2 separation.

## Other membrane technologies

In special cases other materials can be utilized; for example, palladium membranes permit transport solely of hydrogen. In addition to palladium membranes (which are typically palladium silver alloys to stop embrittlement of the alloy at lower temperature) there is also a significant research effort looking into finding non-precious metal alternatives. Although slow kinetics of exchange on the surface of the membrane and tendency for the membranes to crack or disintegrate after a number of duty cycles or during cooling are problems yet to be fully solved.

## Construction

Membranes are typically contained in one of three modules:

Hollow fibre bundles in a metal module

Spiral wound bundles in a metal module

Plate and frame module constructed like a plate and frame heat exchanger

## Uses

Membranes are employed in:

The separation of nitrogen or oxygen from air (generally only up to 99.5%)

Separation of hydrogen from gases like nitrogen and methane

Recovery of hydrogen from product streams of ammonia plants

Recovery of hydrogen in oil refinery processes

Separation of methane from the other components of biogas

Enrichment of air by oxygen for medical or metallurgical purposes. One of the methods used for commercial production of nitrox breathing gas for underwater diving.

Enrichment of ullage by nitrogen in inerting systems designed to prevent fuel tank explosions

Removal of water vapor from natural gas and other gases

Removal of SO2, CO2 and H2S from natural gas (polyamide membranes)

Removal of volatile organic liquids (VOL) from air of exhaust streams

### Air separation

Oxygen-enriched air is in high demanded for a range of medical and industrial applications including chemical and combustion processes. Cryogenic distillation is the mature technology for commercial air separation for the production of large quantities of high purity oxygen and nitrogen. However, it is a complex process, is energy-intensive, and is generally not suitable for small-scale production. Pressure swing adsorption is also commonly used for air separation and can also produce high purity oxygen at medium production rates, but it still requires considerable space, high investment and high energy consumption. The membrane gas separation method is a relatively low environmental impact and sustainable process providing continuous production, simple operation, lower pressure/temperature requirements, and compact space requirements.

## Current status of CO2 capture with membranes

A great deal of research has been undertaken to utilize membranes instead of absorption or adsorption for carbon capture from flue gas streams, however, no current projects exist that utilize membranes. Process engineering along with new developments in materials have shown that membranes have the greatest potential for low energy penalty and cost compared to competing technologies.

### Need for multi-stage process

Single-stage membranes devices are not feasible for obtaining a high concentration of separated material in the permeate stream. This is due to the pressure ratio limit that is economically unrealistic to exceed. Therefore, the use of multi-stage membranes is required to concentrate the permeate stream. The use of a second stage allows for less membrane area and power to be used. This is because of the higher concentration that passes the second stage, as well as the lower volume of gas for the pump to process. Other factors, such as adding another stage that uses air to concentrate the stream further reduces cost by increasing concentration within the feed stream. Additional methods such as combining multiple types of separation methods allow for variation in creating economical process designs.

### Membrane use in hybrid processes

Hybrid processes have long-standing history with gas separation.  Typically, membranes are integrated into already existing processes such that they can be retrofitted into already existing carbon capture systems.

MTR, Membrane Technology and Research Inc., and UT Austin have worked to create hybrid processes, utilizing both absorption and membranes, for CO2 capture.  First, an absorption column using piperazine as a solvent absorbs about half the carbon dioxide in the flue gas, then the use of a membrane results in 90% capture.  A parallel setup is also, with the membrane and absorption processes occurring simultaneously.  Generally, these processes are most effective when the highest content of carbon dioxide enters the amine absorption column. Incorporating hybrid design processes allows for retrofitting into fossil fuel power plants.

Hybrid processes can also use cryogenic distillation and membranes.  For example, hydrogen and carbon dioxide can be separated, first using cryogenic gas separation, whereby most of the carbon dioxide exits first, then using a membrane process to separate the remaining carbon dioxide, after which it is recycled for further attempts at cryogenic separation.

### Cost analysis

Cost limits the pressure ratio in a membrane CO2 separation stage to a value of 5; higher pressure ratios eliminate any economic viability for CO2 capture using membrane processes.  Recent studies have demonstrated that multi-stage CO2 capture/separation processes using membranes can be economically competitive with older and more common technologies such as amine-based absorption. Currently, both membrane and amine-based absorption processes can be designed to yield a 90% CO2 capture rate. For carbon capture at an average 600 MW coal-fired power plant, the cost of CO2 capture using amine-based absorption is in the $40–100 per ton of CO2 range, while the cost of CO2 capture using current membrane technology (including current process design schemes) is about $23 per ton of CO2. Additionally, running an amine-based absorption process at an average 600 MW coal-fired power plant consumes about 30% of the energy generated by the power plant, while running a membrane process requires about 16% of the energy generated. CO2 transport (e.g. to geologic sequestration sites, or to be used for EOR) costs about $2–5 per ton of CO2. This cost is the same for all types of CO2 capture/separation processes such as membrane separation and absorption. In terms of dollars per ton of  captured CO2, the least expensive membrane processes being studied at this time are multi-step counter-current flow/sweep processes.
