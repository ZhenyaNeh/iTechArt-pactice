import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className = "" }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames([cls.sidebar, className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>
        {collapsed ? <ArrowRightFromLine /> : <ArrowLeftFromLine />}
      </Button>
    </div>
  );
};
