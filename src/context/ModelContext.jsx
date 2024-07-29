/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
// import {modelUtils} from '../utils/modelUtils.js'
// import {dataModels} from '../data/datamodels.js'
export const ModelContext = React.createContext()
export default function ModelContextProvider({children}){
    return (
        <ModelContext.Provider value={{}}>
            {children}
        </ModelContext.Provider>
    )
}