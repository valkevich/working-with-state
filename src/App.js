import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    italic: false
  }

  onChangeFont = () => {
    this.setState({italic: !this.state.italic})
  }


  render() {
    return(
      <p onClick = {this.onChangeFont} className = {this.state.italic ? 'italic' : ''}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut malesuada mi, sed rhoncus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur dignissim id metus a mattis. In dapibus accumsan ligula eu malesuada. Mauris accumsan turpis porttitor consequat ultricies. Fusce sit amet lorem bibendum felis tincidunt scelerisque. Aliquam id sapien molestie, feugiat sem ac, scelerisque turpis.
        Quisque fermentum nunc sit amet lacus malesuada, sit amet cursus augue laoreet. Aenean congue dolor nibh, vitae iaculis arcu pellentesque eget. Sed ut ante sit amet dolor convallis feugiat. Nunc tincidunt fermentum ullamcorper. Vivamus tincidunt finibus ipsum sed sagittis. Proin vestibulum eros sit amet neque posuere suscipit. Donec eget hendrerit orci. Vestibulum vel laoreet risus.
        Quisque aliquet quis ipsum et tristique. Quisque et ullamcorper ante. Sed in mauris sed ante euismod interdum ac nec ipsum. Nunc eu urna tincidunt, dapibus odio vitae, egestas lectus. Duis sagittis, erat ut interdum vestibulum, lorem sapien pretium lorem, eget sagittis ligula tortor eu tellus. Quisque auctor a mauris convallis sodales. Fusce quis orci nec lacus porta mattis. Nam in massa vel turpis venenatis rhoncus a et nisi. Aenean efficitur aliquam tempor. Etiam euismod varius mi, vitae hendrerit elit rutrum nec. Nam hendrerit pharetra justo id imperdiet. Aliquam ultrices condimentum volutpat. Nam finibus purus sit amet commodo dignissim. Morbi laoreet varius lacus in viverra. Pellentesque orci mauris, vulputate a nisl lacinia, laoreet placerat tortor. Donec posuere pulvinar ligula nec porttitor.
      </p>
    )
  }

}

export default App;