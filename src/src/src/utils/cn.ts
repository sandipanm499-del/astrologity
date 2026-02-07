// Simple utility for merging tailwind classes without needing external packages
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
