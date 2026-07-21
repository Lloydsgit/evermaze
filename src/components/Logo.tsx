interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = true }: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  };

  const taglineSizes = {
    sm: 'text-[0.65rem] md:text-[0.7rem]',
    md: 'text-[0.7rem] md:text-[0.75rem]',
    lg: 'text-[0.75rem] md:text-[0.8rem]',
  };

  return (
    <a 
      href="/" 
      className={`flex flex-col items-start leading-none ${className}`}
    >
      <span 
        className={`font-serif tracking-[0.25em] text-[#564850] transition-colors ${sizeClasses[size]}`}
        style={{ fontWeight: 500 }}
      >
        EVERMAZE
      </span>
      {showTagline && (
        <span 
          className={`mt-1 tracking-[0.35em] uppercase text-[#7D6B87] ${taglineSizes[size]}`}
          style={{ fontWeight: 400 }}
        >
          Love in a Box
        </span>
      )}
    </a>
  );
}
