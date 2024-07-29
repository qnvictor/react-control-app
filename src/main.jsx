import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './context/AppContext.jsx'
import FormContextProvider from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppContextProvider>
			<FormContextProvider>
				<App />
			</FormContextProvider>
		</AppContextProvider>
	</React.StrictMode>
);
