import clsx from "clsx";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light, className }: SectionLabelProps) {
  return (
    <span className={clsx(light ? "label-sage" : "label", className)}>
      {children}
    </span>
  );
}
