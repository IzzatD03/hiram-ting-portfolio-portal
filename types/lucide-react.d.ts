declare module "lucide-react" {
  import type { ComponentType, SVGProps, ReactNode } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
    children?: ReactNode;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Download: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const FlaskConical: LucideIcon;
  export const Globe: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const Search: LucideIcon;
  export const UserRound: LucideIcon;
  export const X: LucideIcon;
}
