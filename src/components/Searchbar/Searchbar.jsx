// import { Component } from 'react';
// import {
//   SearchHeader,
//   SearchForm,
//   SearchInput,
//   SearchButton,
// } from './Searchbar.styled';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export class Seachbar extends Component {
//   state = {
//     value: '',
//   };

//   handlePictureChange = event => {
//     this.setState({ value: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.value.trim() === '') {
//       toast.info('please enter your search term');
//       return;
//     }
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <SearchHeader className="searchbar">
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchInput
//             name="pictures"
//             value={this.state.value}
//             onChange={this.handlePictureChange}
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//           <SearchButton type="submit">
//             <span className="button-label">Search</span>
//           </SearchButton>
//         </SearchForm>
//       </SearchHeader>
//     );
//   }
// }


/////-------------------------------------------------------////HOOKS


import {useState } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({onSubmit})=> {

  const [value, setValue] = useState('')

  const handlePictureChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };


  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.info('please enter your search term');
      return;
    }
    onSubmit(value);
    setValue('' );
  };

    return (
      <SearchHeader className="searchbar">
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="pictures"
            value={value}
            onChange={handlePictureChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <span className="button-label">Search</span>
          </SearchButton>
        </SearchForm>
      </SearchHeader>
    );
  }


  Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
  };