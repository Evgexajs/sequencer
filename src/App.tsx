import React from "react"
import { RootView } from "../RootView/RootView"
import { HelmetProvider } from "react-helmet-async"

export function App() {
    return (
        <React.StrictMode>
            <HelmetProvider>
                <RootView />
            </HelmetProvider>
        </React.StrictMode>
    )
}
