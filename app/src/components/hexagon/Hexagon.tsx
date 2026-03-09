import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HexagonProps {
  children?: ReactNode;
  className?: string;
  color?: 'yellow' | 'green' | 'blue' | 'red' | 'purple' | 'orange' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
}

export const Hexagon: FC<HexagonProps> = ({
  children,
  className,
  color = 'yellow',
  size = 'md',
  onClick,
  icon,
  title,
  subtitle,
}) => {
  const sizeClasses = {
    sm: 'hexagon-sm',
    md: '',
    lg: 'hexagon-lg',
  };

  const colorClasses = {
    yellow: 'hexagon-yellow',
    green: 'hexagon-green',
    blue: 'hexagon-blue',
    red: 'hexagon-red',
    purple: 'hexagon-purple',
    orange: 'hexagon-orange',
    cyan: 'hexagon-cyan',
  };

  return (
    <div
      className={cn(
        'hexagon',
        colorClasses[color],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <div className="hexagon-content">
        {icon && <div className="text-2xl mb-1">{icon}</div>}
        {title && <div className="text-sm font-bold leading-tight">{title}</div>}
        {subtitle && <div className="text-xs mt-1 opacity-90">{subtitle}</div>}
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
