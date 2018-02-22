import React, {Component} from 'react';

class ProjectItem extends Component {
  deleteProj(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
        <div className="Project">
          <h4><strong>{this.props.project.title}</strong></h4>
          <li className="Project">
            id: {this.props.project.id}
          </li>
          <li>
            category: {this.props.project.category}
          </li>
          <a href="#" onClick={this.deleteProj.bind(this, this.props.project.id)}>X</a>
        </div>
    )
  }
}

export default ProjectItem;
