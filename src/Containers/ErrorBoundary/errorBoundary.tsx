import React, { ErrorInfo } from 'react';

class ErrorBoundary extends React.Component<{ children: any }, { error: Error | null; errorInfo: ErrorInfo | null }> {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;
        if (errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return children;
    }
}

export default ErrorBoundary;
