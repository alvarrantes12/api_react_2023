import React from "react"; 

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return (
            <div>
                <h1>Espere, cargando información...</h1>
            </div>
        );
    }
}

export default WithLoadingState;