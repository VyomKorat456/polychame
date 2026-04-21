/**
 * Single asset: public/assets/logo.png (black artwork on white — invert on dark UI only).
 */
export function BrandLogo({
  className = '',
  variant = 'onDark',
  width,
  height,
  loading = 'lazy',
  ...imgProps
}) {
  const tone = variant === 'onDark' ? 'invert' : ''

  return (
    <img
      src="/assets/logo.png"
      alt="Overlap Polychem — Quality, Consistency and Certainty"
      className={`object-contain ${tone} ${className}`.trim()}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      {...imgProps}
    />
  )
}
