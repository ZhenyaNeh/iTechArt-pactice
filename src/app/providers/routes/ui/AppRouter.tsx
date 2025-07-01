import { Loader } from "lucide-react";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader size={32}/>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route key={path} element={element} path={path}/>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
