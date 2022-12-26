
import "./fileManager.css";

import {
    FileManagerComponent,
    DetailsView,
    NavigationPane,
    Inject,
    Toolbar
} from "@syncfusion/ej2-react-filemanager";  //ej2-react-filemanager

const FileManager = ({toolbar=false})=>{

    //URL link of the ASP.net Core file Provider ==> file operations 
    const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

    // AjaxSettings JSON
    const fileManagerSettings = {
        url: hostUrl + "api/FileManager/FileOperations",//To perform the connectt operation, initialize the url property in a ajaxSettings of File Manager Component
        downloadUrl: hostUrl + 'api/FileManager/Download',// To perform the download operation, initialize the downloadUrl property in a ajaxSettings of File Manager Component
        uploadUrl: hostUrl + 'api/FileManager/Upload', //To perform the upload operation, initialize the uploadUrl property in a ajaxSettings of File Manager Component
        getImageUrl: hostUrl + "api/FileManager/GetImage", //To perform the image preview support , initialize the getImageUrl property in a ajaxSettings of File Manager Component
    }

    //run when file manager created 
    const onCreated = (args)=>{
        console.info("created");
    }
    //File Select
    const onFileSelect = (args)=>{
        console.log(args.fileDetails.name + " has been " + args.action + "ed");
    }

    //Drag Start 
    const onFileDragStart = (args)=>{
        console.info('File Drag Start');
    }
    //Drag End
    const onFileDragStop = (args)=>{
        console.info("Drag Stop");
    }
    //file dragging
    const onFileDragging = (args)=>{
        console.info("File Dragging");
    }
    //file dropped
    const onFileDropped = (args)=>{
        console.info("File Dropped");
    }

    const design  = (
         <>
            <div className="control-section">
                <FileManagerComponent 
                    id="file"
                    contextMenuSettings={{
                         file: ['Open'],
                         visible: false
                    }}
                    toolbarSettings={{
                        visible : toolbar
                    }}
                    allowDragAndDrop={true}  //Drag and Drop Files and
                    showFileExtension={false}
                    showHiddenItems={false}
                    ajaxSettings={fileManagerSettings}  //File Manager Settings 
                    created={onCreated.bind(this)}
                    fileSelect={onFileSelect.bind(this)} //when file select  this operation perform
                    fileDragStart={onFileDragStart.bind(this)} //when file drag start this operation perform
                    fileDragStop={onFileDragStop.bind(this)}  //when file drag stop this operation perform
                    fileDragging={onFileDragging.bind(this)}  //when file draging this operation perform
                    fileDropped={onFileDropped.bind(this)}   //when file drop start this operation perform
                >
                    <Inject services={[NavigationPane, DetailsView, Toolbar]} />
                </FileManagerComponent>
            </div>
        </>
    );
    return design;
}
export default FileManager;
