# Memory, ADC, and DAC

## Memory Types

| Type | Volatile | Writeable | Notes |
|------|----------|-----------|-------|
| SRAM | Yes | Yes | Fast, 6T cell, used as cache |
| DRAM | Yes | Yes | Dense, 1T1C, needs refresh |
| ROM | No | No | Mask programmed |
| EPROM | No | UV erase | |
| EEPROM/Flash | No | Electrically | Block erase |

**Capacity**: $2^n \times m$ bits with $n$ address lines and $m$-bit data bus.

## ADC — Successive Approximation Register (SAR)

Most common for 8–16 bit resolution.

1. Start with MSB = 1, all others 0 → compare $V_{DAC}$ with $V_{in}$
2. If $V_{DAC} > V_{in}$: clear bit; else keep bit
3. Move to next bit, repeat
4. After $n$ steps: $n$-bit result

Conversion time: $n$ clock cycles.

## Flash ADC

$2^n - 1$ comparators in parallel. All compare simultaneously → 1-cycle conversion.

Fast but exponentially expensive: 8-bit needs 255 comparators.

## DAC — R-2R Ladder

$$V_{out} = -V_{ref}\left(\frac{b_{n-1}}{2} + \frac{b_{n-2}}{4} + \cdots + \frac{b_0}{2^n}\right)$$

Uses only two resistor values (R and 2R). $n$-bit DAC needs only $2n$ resistors.

## Key Specifications

**Resolution**: $\Delta = V_{FSR}/2^n$ (smallest voltage step)

**Quantisation error**: $\pm \frac{1}{2}$LSB

**Nyquist-Shannon theorem**: sample rate $f_s > 2f_{max}$ to avoid aliasing.
$$f_s \geq 2f_{max}$$

Anti-aliasing low-pass filter must be applied before sampling.