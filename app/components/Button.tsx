import { LucideIcon } from "lucide-react";

type buttonProps = { children: React.ReactNode; icon: LucideIcon };

export default function Button({ children, icon: Icon }: buttonProps) {
  return (
    <div>
      <figure>
        <Icon size={20} />
      </figure>
      <span>{children}</span>
    </div>
  );
}
