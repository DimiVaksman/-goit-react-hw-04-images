// import 'node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Seachbar } from './Searchbar/Searchbar';
import { AppContainer } from './Appcontainer/Appcontainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <AppContainer>
        <Seachbar onSubmit={this.handleFormSubmit} />
        <ImageGallery value={this.state.query} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AppContainer>
    );
  }
}
