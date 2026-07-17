"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Settings } from 'lucide-react';

export const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [speed, setSpeed] = useState(0.5);
  const [density, setDensity] = useState(1);
  const [textColor, setTextColor] = useState('#06B6D4'); // Set to Ice Cyan to match portfolio theme!
  
  const animationFrameId = useRef(null);
  const strands = useRef([]);
  const lastTime = useRef(0);
  const cursorBlinkTime = useRef(0);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,./<>?';
  
  const getRandomChar = useCallback(() => {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }, []);

  const createStrand = useCallback((x, canvasHeight) => {
    const layer = Math.floor(Math.random() * 3);
    const scale = layer === 0 ? 0.8 : layer === 1 ? 1 : 1.2;
    const length = Math.floor(Math.random() * 15) + 15;
    
    const chars = Array(length).fill(null).map(() => ({
      char: getRandomChar(),
      opacity: 1
    }));

    return {
      x,
      y: -length * (fontSize * scale),
      speed: (Math.random() * 0.3 + 0.7) * speed * fontSize * (layer === 2 ? 1.2 : layer === 1 ? 1 : 0.8),
      length,
      characters: chars,
      showCursor: true,
      layer,
      scale
    };
  }, [fontSize, getRandomChar, speed]);

  const updateStrands = useCallback((ctx, width, height, deltaTime) => {
    const spacing = fontSize * 1.5;
    const maxStrands = Math.floor(width / spacing) * density * 1.5;
    
    if (strands.current.length < maxStrands) {
      const availableSlots = Array.from({ length: Math.floor(width / spacing) })
        .map((_, i) => i * spacing)
        .filter(x => !strands.current.some(strand => strand.x === x));
      
      if (availableSlots.length > 0 && Math.random() < 0.1 * density) {
        const x = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        strands.current.push(createStrand(x, height));
      }
    }
    
    cursorBlinkTime.current += deltaTime;
    if (cursorBlinkTime.current >= 500) {
      strands.current.forEach(strand => {
        strand.showCursor = !strand.showCursor;
      });
      cursorBlinkTime.current = 0;
    }
    
    // Fade effect for trailing
    ctx.fillStyle = 'rgba(11, 14, 20, 0.15)'; // Deep steel dark color with opacity
    ctx.fillRect(0, 0, width, height);
    
    strands.current.sort((a, b) => a.layer - b.layer);
    
    strands.current = strands.current.filter(strand => {
      strand.y += strand.speed * deltaTime * 0.05;
      
      const baseOpacity = strand.layer === 0 ? 0.1 : strand.layer === 1 ? 0.3 : 0.5; // Kept subtle so it doesn't distract
      const blur = strand.layer === 0 ? 1 : strand.layer === 1 ? 2 : 3;
      
      const scaledFontSize = fontSize * strand.scale;
      ctx.font = `${scaledFontSize}px monospace`;
      ctx.shadowBlur = blur;
      ctx.shadowColor = textColor;

      strand.characters.forEach((char, i) => {
        const y = strand.y + (i * scaledFontSize);
        
        if (y > -scaledFontSize && y < height + scaledFontSize) {
          ctx.fillStyle = (i === strand.characters.length - 1) ? '#FFFFFF' : textColor;
          ctx.globalAlpha = baseOpacity;
          ctx.fillText(char.char, strand.x, y);
          
          if (i === strand.characters.length - 1 && strand.showCursor) {
            ctx.fillStyle = '#FFFFFF';
            ctx.globalAlpha = baseOpacity;
            ctx.fillRect(strand.x, y + 2, scaledFontSize * 0.8, 2);
          }
        }
      });

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (Math.random() < 0.02) {
        const randomIndex = Math.floor(Math.random() * strand.characters.length);
        strand.characters[randomIndex].char = getRandomChar();
      }

      return strand.y - (strand.length * (fontSize * strand.scale)) < height;
    });
  }, [density, fontSize, getRandomChar, textColor, createStrand]);
  
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  
  const animate = useCallback((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const deltaTime = time - lastTime.current;
    lastTime.current = time;
    
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      resizeCanvas();
    }
    
    updateStrands(ctx, canvas.width, canvas.height, deltaTime);
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, [resizeCanvas, updateStrands]);
  
  useEffect(() => {
    resizeCanvas();
    lastTime.current = performance.now();
    cursorBlinkTime.current = 0;
    animationFrameId.current = requestAnimationFrame(animate);
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animate, resizeCanvas]);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
        style={{ backgroundColor: '#0B0E14' }}
      />
      
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="bg-surface/80 text-primary p-3 rounded-full hover:bg-surface transition-colors backdrop-blur-md border border-border shadow-lg"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
      </div>
      
      {showSettings && (
        <div className="fixed bottom-20 left-6 bg-surface/95 backdrop-blur-xl p-5 rounded-2xl border border-border text-secondary w-72 shadow-2xl z-50">
          <h2 className="text-sm mb-6 font-bold uppercase tracking-wider text-primary">Matrix Settings</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-xs font-medium">Font Size: {fontSize}px</label>
              <input 
                type="range" 
                min={8} 
                max={24} 
                value={fontSize} 
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-xs font-medium">Speed: {speed.toFixed(1)}x</label>
              <input 
                type="range" 
                min={0.1} 
                max={3} 
                step={0.1}
                value={speed} 
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-xs font-medium">Density: {density.toFixed(1)}x</label>
              <input 
                type="range" 
                min={0.2} 
                max={2} 
                step={0.1}
                value={density} 
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-xs font-medium">Text Color:</label>
              <div className="flex items-center space-x-3">
                <input 
                  type="color" 
                  value={textColor} 
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-8 h-8 rounded border-none cursor-pointer bg-transparent"
                />
                <span className="text-xs font-mono bg-background/50 px-2 py-1 rounded">{textColor}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
