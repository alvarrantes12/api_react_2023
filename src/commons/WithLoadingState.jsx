import React from 'react'

function WithLoadingState(Component) {
    return function WithLoadingState({isLoding, ...props}) {
        if (!isLoding) return <Component {...props} />

        return (
            <p>Cargando...</p>
        )
    }
}

export default WithLoadingState;