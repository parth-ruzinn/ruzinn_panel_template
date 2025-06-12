import React, { memo, useMemo, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../shared";
import { LAYOUT_TYPE_CLASSIC } from "../../constants/theme.constant";
import useAuth from "../../utils/hooks/useAuth";
import useDirection from "../../utils/hooks/useDirection";
import useLocale from "../../utils/hooks/useLocale";

const layouts = {
  [LAYOUT_TYPE_CLASSIC]: lazy(() => import("./ClassicLayout")),
};

const Layout = () => {
  const layoutType = useSelector((state) => state.theme.layout.type);

  const { authenticated } = useAuth();

  useDirection();

  useLocale();

  const AppLayout = useMemo(() => {
    if (authenticated) {
      return layouts[layoutType];
    }
    return lazy(() => import("./AuthLayout"));
  }, [layoutType, authenticated]);

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
