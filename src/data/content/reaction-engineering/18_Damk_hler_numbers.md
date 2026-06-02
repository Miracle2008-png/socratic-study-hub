# Damköhler numbers

The Damköhler numbers (Da) are dimensionless numbers used in chemical engineering to relate the chemical reaction timescale (reaction rate) to the transport phenomena rate occurring in a system. It is named after German chemist Gerhard Damköhler, who worked in chemical engineering, thermodynamics, and fluid dynamics. 

## Derivation for decomposition of a single species

From the general mole balance on some species 
        A

$$ A $$

, where for a CSTR steady state and perfect mixing are assumed,

          in
        −
          out
        +
          generation
        =
          accumulation

$$ {\text{in}}-{\text{out}}+{\text{generation}}={\text{accumulation}} $$

          F
            A

            0
        −
          F
            A
        +
          r
            A
        V

        =

        0

$$ F_{A0}-F_{A}+r_{A}V=0 $$

          F
            A
        −
          F
            A

            0
        =
          r
            A
        V

$$ F_{A}-F_{A0}=r_{A}V $$

Assuming a constant volumetric flow rate 
          v
            0

$$ v_{0} $$

, which is the case for a liquid reactor or a gas phase reaction with no net generation of moles,

        (
          C
            A
        −
          C
            A

            0
        )
          v
            0
        =
          r
            A
        V

$$ (C_{A}-C_{A0})v_{0}=r_{A}V $$

        (
          C
            A
        −
          C
            A

            0
        )

        =
          r
            A
            V
              v
                0

$$ (C_{A}-C_{A0})=r_{A}{\frac {V}{v_{0}}} $$

        (
          C
            A
        −
          C
            A

            0
        )

        =
          r
            A
        τ

$$ (C_{A}-C_{A0})=r_{A}\tau $$

where the space-time is defined to be the ratio of the reactor volume to volumetric flow rate. It is the time required for a slug of fluid to pass through the reactor. For a decomposition reaction, the rate of reaction is proportional to some power of the concentration of 
        A

$$ A $$

. In addition, for a single reaction a conversion may be defined in terms of the limiting reactant, for the simple decomposition that is species 
        A

$$ A $$

        (
          C
            A
        −
          C
            A

            0
        )

        =

        −

        k
          C
            A
            n
        τ

$$ (C_{A}-C_{A0})=-kC_{A}^{n}\tau $$

        (

        (

        1

        −

        X

        )
          C
            A

            0
        −
          C
            A

            0
        )

        =

        −

        k
          C
            A

            0
            n
        τ

        (

        1

        −

        X
          )
            n

$$ ((1-X)C_{A0}-C_{A0})=-kC_{A0}^{n}\tau (1-X)^{n} $$

        X

        =

        k
          C
            A

            0
            n

            −

            1
        τ

        (

        1

        −

        X
          )
            n

$$ X=kC_{A0}^{n-1}\tau (1-X)^{n} $$

        0

        =
              (

              1

              −

              X
                )
                  n
            X
        −
            1
              D
                a
                  n

$$ 0={\frac {(1-X)^{n}}{X}}-{\frac {1}{\rm {Da_{n}}}} $$

As can be seen, as the Damköhler number increases, the other term must decrease. The ensuing polynomial can be solved and the conversion for the rule of thumb Damköhler numbers found. Alternatively, one can graph the expressions and see where they intersect with the line given by the inverse Damköhler number to see the solution for conversion. In the plot below, the y-axis is the inverse Damköhler number and the x-axis the conversion. The rule-of-thumb inverse Damköhler numbers have been placed as dashed horizontal lines.
