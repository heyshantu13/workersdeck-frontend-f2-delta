import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {

  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>Something went wrong. Try Again Later</h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
