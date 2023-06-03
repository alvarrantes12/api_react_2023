import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return(
            <p>Espere, cargando la información</p>
        )
    }
}

export default WithLoadingState;