import React, { Component } from "react";
import TerminatorList from "./components/Terminator-list/terminator-list.component";
import { robotmodels } from "./models";
import SearchBox from "./components/searchbox/searchbox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: robotmodels,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    
    this.setState({searchfield:event.target.value});
    
  };
  render() {
    const filteredModels = this.state.models.filter((model) => {
        return model.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase);
      });
    return (
      <div className="tc">
        <h1>Terminator Modellek</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <TerminatorList robotmodelsProp={filteredModels} />
      </div>
    );
  }
}

export default App;
