import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
export default function App(){
  return(
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
    
  )
}