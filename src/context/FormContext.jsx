/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'

export const FormContext = React.createContext()
export default function FormContextProvider({children}) {
    const fields = [
			{
				name: "name",
				label: "Name",
				htmlFor: "component-name",
				isRequired: true,
			},
			{
				name: "calories",
				label: "Calories",
				htmlFor: "component-calories",
				isRequired: true,
			},
			{
				name: "fat",
				label: "Fat(g)",
				htmlFor: "component-fat",
				isRequired: true,
			},
			{
				name: "carbs",
				label: "Carbs(g)",
				htmlFor: "component-carbs",
				isRequired: true,
			},
			{
				name: "protein",
				label: "Protein(g)",
				htmlFor: "component-protein",
				isRequired: true,
			},
			{
				name: "price",
				label: "Price($)",
				htmlFor: "component-price",
				isRequired: true,
			},
		];
  return (
    <FormContext.Provider value={{fields}}>
        {children}
    </FormContext.Provider>
  )
}

