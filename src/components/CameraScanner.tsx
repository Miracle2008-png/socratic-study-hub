import React, { useState, useEffect, useRef } from 'react';
import { Camera, Aperture, Scan, X, CheckCircle2 } from 'lucide-react';
import nerdamer from 'nerdamer';
import 'nerdamer/Algebra.js';
import 'nerdamer/Calculus.js';
import 'nerdamer/Solve.js';
import katex from 'katex';

interface CameraScannerProps {
  onScanComplete: (expression: string, steps: string[]) => void;
  onClose: () => void;
}

export const CameraScanner: React.FC<CameraScannerProps> = ({ onScanComplete, onClose }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [customEquation, setCustomEquation] = useState('diff(x * sin(x), x)');
  const [scanResult, setScanResult] = useState<string[] | null>(null);
  
  const generateSteps = (expression: string) => {
    try {
      const inputTex = nerdamer(expression).toTeX();
      const outputTex = nerdamer(expression).evaluate().toTeX();
      
      let newSteps = [
        "\\\\text{Scanned Problem: }",
        inputTex
      ];

      if (expression.includes('integrate')) {
        newSteps.push("\\\\text{Applying analytical integration techniques...}");
        newSteps.push("\\\\text{Simplifying the anti-derivative...}");
      } else if (expression.includes('diff')) {
        newSteps.push("\\\\text{Applying differentiation rules...}");
        newSteps.push("\\\\text{Using product rule: } d(uv) = u'v + uv'");
      } else if (expression.includes('solve')) {
        newSteps.push("\\\\text{Isolating variables...}");
      } else {
        newSteps.push("\\\\text{Evaluating expression algebraically...}");
      }
      
      newSteps.push(`= ${outputTex}`);
      return newSteps;
    } catch (err) {
      return [
        "\\\\text{Error: Could not parse expression.}",
        "\\\\text{Ensure correct syntax: } integrate(x^2, x)"
      ];
    }
  };

  const handleSnap = () => {
    if (!customEquation.trim()) return;
    setIsScanning(true);
    setScanProgress(0);
    setScanResult(null);

    // Simulate scanning process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        const steps = generateSteps(customEquation);
        setScanResult(steps);
        setTimeout(() => {
          setIsScanning(false);
          onScanComplete(customEquation, steps);
        }, 1500); // give time to see result before passing up
      }
    }, 50);
  };

  return (
    <div className="camera-scanner-overlay anim-fade">
      <div className="camera-modal luxury-card">
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
        
        <div className="camera-header">
          <Camera size={24} className="text-gold-gradient" />
          <h2>Smart Lens Solver</h2>
          <p>Frame your equation or type it manually to solve.</p>
        </div>

        <div className="viewfinder">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          
          {isScanning && <div className="scan-line"></div>}

          {!isScanning && !scanResult && (
            <div className="viewfinder-content">
              <input 
                type="text" 
                value={customEquation} 
                onChange={(e) => setCustomEquation(e.target.value)}
                className="equation-input"
                placeholder="e.g. integrate(x*sin(x), x)"
              />
            </div>
          )}

          {isScanning && (
            <div className="scanning-overlay">
              <Aperture size={48} className="spinner text-gold-gradient" />
              <div className="scan-progress-bar">
                <div className="scan-progress-fill" style={{ width: `${scanProgress}%` }}></div>
              </div>
              <span>Extracting Math... ({scanProgress}%)</span>
            </div>
          )}

          {scanResult && !isScanning && (
            <div className="scan-success">
              <CheckCircle2 size={48} className="text-gold-gradient" />
              <h3>Equation Detected!</h3>
            </div>
          )}
        </div>

        <div className="camera-controls">
          <button 
            className="shutter-btn" 
            onClick={handleSnap}
            disabled={isScanning || !!scanResult}
          >
            <div className="shutter-inner"></div>
          </button>
        </div>
      </div>

      <style>{`
        .camera-scanner-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 100;
        }

        .camera-modal {
          width: 90%; max-width: 500px;
          background: var(--color-base-deep);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--border-radius-lg);
          padding: 24px; position: relative;
          display: flex; flex-direction: column; gap: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .close-btn {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: var(--color-text-secondary);
          cursor: pointer; transition: color 0.2s;
        }
        .close-btn:hover { color: var(--color-text-primary); }

        .camera-header { text-align: center; }
        .camera-header h2 { font-family: var(--font-display); margin: 8px 0 4px; color: var(--color-text-primary); }
        .camera-header p { font-size: 14px; color: var(--color-text-secondary); margin: 0; }

        .viewfinder {
          height: 300px; background: rgba(0,0,0,0.5);
          border-radius: var(--border-radius-md);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        .corner {
          position: absolute; width: 30px; height: 30px;
          border: 3px solid var(--color-accent);
        }
        .top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; }
        .top-right { top: 20px; right: 20px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: 20px; left: 20px; border-right: none; border-top: none; }
        .bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; }

        .scan-line {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--color-accent);
          box-shadow: 0 0 10px var(--color-accent);
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }

        .viewfinder-content {
          width: 80%; background: rgba(255,255,255,0.05);
          padding: 16px; border-radius: var(--border-radius-sm);
        }
        .equation-input {
          width: 100%; background: transparent; border: none;
          color: white; font-family: monospace; font-size: 18px;
          text-align: center; outline: none;
        }

        .scanning-overlay, .scan-success {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .scan-success h3 { color: var(--color-text-primary); }

        .scan-progress-bar {
          width: 200px; height: 4px; background: rgba(255,255,255,0.1);
          border-radius: 2px; overflow: hidden;
        }
        .scan-progress-fill {
          height: 100%; background: var(--color-accent); transition: width 0.1s;
        }

        .spinner { animation: spin 2s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        .camera-controls {
          display: flex; justify-content: center; padding: 12px 0;
        }
        .shutter-btn {
          width: 64px; height: 64px; border-radius: 50%;
          border: 4px solid var(--color-text-secondary);
          background: transparent; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s;
        }
        .shutter-btn:hover:not(:disabled) { border-color: var(--color-accent); }
        .shutter-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .shutter-inner {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--color-white); transition: all 0.1s;
        }
        .shutter-btn:active:not(:disabled) .shutter-inner { transform: scale(0.9); }
      `}</style>
    </div>
  );
};
