import { Provider } from "react-redux"
import store from "./store"

type DataProviderProps = {
  children: React.ReactNode
}

function DataProvider({
  children
}: DataProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default DataProvider