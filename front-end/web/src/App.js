import React ,{useState, useEffect} from 'react';
import api from './services/api';

import './App.css';


import Header from './components/Header';

function App(){

    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        api.get('projects').then(response=>{
            setProjects(response.data);
        });
    },[])
    
    /*o usestate ira retornar u array com dua posiçoes
    1. variavel com o seu valor inicial
    2*função para atualizar esse valor
    */
    function handleAddProject(){
        //projects.push(`Novo project ${Date.now()}`);
        
        setProjects([...projects,`Novo project ${Date.now()}` ])

        console.log(projects)
    }
    return(
    <>
    
   <Header title ="projects"/>
  
    <ul>
     {projects.map(project => <li key={project.id}>{project.title}</li>)}
   </ul>
   
   <button type="button" onClick={handleAddProject}>Adicionar novo Projecto</button>
    </>
    );
}

export default App;