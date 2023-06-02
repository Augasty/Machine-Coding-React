import { useEffect, useState } from "react";
import explorer from "./data/folderData";
import "./styles.css"
import Folder from './components/Folder'
import useTraverseTree from './hooks/useTraverseTree'
import { Link } from "react-router-dom";


const getLocalStorage = () => {
  let exploreLocal = localStorage.getItem('exploreLocal')

  if (exploreLocal) {
    return JSON.parse(exploreLocal)
  }
  return explorer

}
export default function File_struct() {
  const [explorerData, setExplorerData] = useState(getLocalStorage())
  const { insertNode, deleteNode } = useTraverseTree()


  useEffect(() => {
    localStorage.setItem('exploreLocal', JSON.stringify(explorerData))
  }, [explorerData])

  const handleNode = (folderId, name, isFolder, whatFor) => {
    if (whatFor === 'insert') {
      let finalTree = insertNode(explorerData, folderId, name, isFolder)
      setExplorerData(finalTree)
    }
    else if (whatFor === 'delete') {
      let finalTree = deleteNode(explorerData, folderId)
      setExplorerData(finalTree)
    }

  }




  return (
    <div className="App">
      <Folder explorer={explorerData} handleNode={handleNode} key={explorerData.id} />
      <Link to="/">
        <button type="button" className="Homebutton">Back
        </button></Link>
        <button type="button" className="Homebutton" onClick={()=>setExplorerData(explorer)}>Regenerate</button>
    </div>
  );
}
