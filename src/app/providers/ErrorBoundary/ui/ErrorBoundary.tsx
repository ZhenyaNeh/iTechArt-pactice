import React, { ErrorInfo, Suspense } from "react";
import { ErrorPage } from "widgets/ErrorPage";
import { PageLoader } from "widgets/PageLoader";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
     
      return (
        <Suspense fallback={<PageLoader />}>
          <ErrorPage />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
