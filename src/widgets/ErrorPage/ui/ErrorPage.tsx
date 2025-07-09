import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import { Button } from "shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className = "" }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames([className, cls["error-page"]])}>
      <p>Something went wrong...</p>
      <Button onClick={reloadPage}>Reload page</Button>
    </div>
  );
};
