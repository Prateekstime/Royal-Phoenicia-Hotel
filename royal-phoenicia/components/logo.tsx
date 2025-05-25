export function Logo({ className = "", size = "medium" }: { className?: string; size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`font-playfair font-bold ${sizeClasses[size]} text-primary`}>RP</div>
    </div>
  )
}
