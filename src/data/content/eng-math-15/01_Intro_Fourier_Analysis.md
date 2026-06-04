# 1. Introduction to Fourier Analysis

In 1822, Joseph Fourier made a bold and highly controversial claim: **Any periodic mathematical function, no matter how jagged, discontinuous, or chaotic, can be perfectly reconstructed simply by adding together enough sine and cosine waves.**

His peers (including giants like Lagrange and Laplace) thought he was crazy. How could you possibly build an angular square wave out of perfectly smooth, curvy sine waves? 
But Fourier was right.

### The Power of Sines and Cosines
Why would we want to break a function down into sines and cosines?
In engineering, linear systems respond exceptionally well to sinusoidal inputs. If you send a pure sine wave into a linear circuit, the output will always be a pure sine wave (just shifted and scaled). 

If you send a complex, jagged square wave into a circuit, calculating the output in the time domain is an absolute nightmare. 
But using Fourier's method, we can:
1.  Break the square wave down into 100 individual sine waves.
2.  Calculate how the circuit responds to each simple sine wave individually.
3.  Add the 100 simple outputs together to get the final, complex output.

This is the exact principle behind how digital audio (MP3s), image compression (JPEGs), telecommunications, and quantum mechanics work.

### The Frequency Domain
Fourier Analysis allows us to view the world from a completely different perspective: **The Frequency Domain**.

Instead of graphing a sound wave as air pressure over time (Time Domain), Fourier allows us to graph it as Amplitude over Frequency. This tells us exactly how much "bass," "mid," and "treble" is in the signal. When you look at a graphic equalizer on a stereo, you are looking at a real-time Fourier transform!
