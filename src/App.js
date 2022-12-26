import "./App.css";

//File Manager Component
import FileManager from "./Components/file-manager/FileManager";

const App = ()=>{
   const design = (
       <>
          <FileManager  
            toolbar={false} //Manage Toolbar using props
          />
       </>
   );
   return design;
}

export default App;