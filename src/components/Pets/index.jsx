import React from 'react';
import List from '../../commons/List';
import WithLoadingState from '../../commons/WithLoadingState';
import { getFetch } from '../../commons/ApiMethods';

function Index({refresh, setRefresh}) {
    const LoadingList = WithLoadingState(List)
    const [contents, setContents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!refresh) return
        setLoading(true)
        getFetch('pets').then((data) => {
            setContents(data)
            setLoading(false)
        })
        setRefresh(false)
    }, [setContents, setLoading, refresh])

    return (
        <>
            <h2 style={{ margin: "4px" }}>Primera conexión con Api local</h2>
            <LoadingList isloading={loading} contents={contents} />
        </>
    )
};

export default Index;
