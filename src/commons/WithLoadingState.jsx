import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;

        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
}

export default WithLoadingState;