import React, {Component} from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce',
          category: "Web Development"
        }
      ]
    });
  }

  handleAddProject(project) {
    // this.state.projects.push(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProj(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
        <div className="App">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProj.bind(this)}/>
        </div>
    );
  }
}

export default App;
