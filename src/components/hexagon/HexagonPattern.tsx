import { useMemo, type FC } from 'react';
import { cn } from '@/lib/utils';

interface HexagonPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  count?: number;
}

export const HexagonPattern: FC<HexagonPatternProps> = ({
  className,
  color = '#FFD700',
  opacity = 0.1,
  count = 20,
}) => {
  // Usar useMemo con valores determinísticos para evitar hydration mismatch
  const hexagons = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      // Usar función hash determinística en lugar de Math.random()
      left: `${((i * 137.5) % 100)}%`,
      top: `${((i * 73.3 + 17) % 100)}%`,
      size: 30 + ((i * 19) % 50),
      delay: (i * 0.1) % 2,
    }));
  }, [count]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {hexagons.map((hex) => (
        <svg
          key={hex.id}
          className="absolute animate-pulse"
          style={{
            left: hex.left,
            top: hex.top,
            width: hex.size,
            height: hex.size,
            animationDelay: `${hex.delay}s`,
            opacity,
          }}
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        </svg>
      ))}
    </div>
  );
};

export default HexagonPattern;
