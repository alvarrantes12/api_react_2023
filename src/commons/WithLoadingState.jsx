import React from "react";

function WithLoadingState(Component){
    return function WithLoadingStateComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p>Espere, cargando...)</p>
        );
    }
}

export default WithLoadingState;