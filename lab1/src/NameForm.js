import React from 'react';

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '',isCorrect:true,isCorrect2:false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        if(/[^a-zA-Z]/.test(this.state.value)) {
          this.setState({isCorrect: false});
        }else {
          this.setState({isCorrect: true});
          this.setState({isCorrect2: true});
        }
        event.preventDefault();
      }

      render() {
        return (
          <div>
          { (!this.state.isCorrect2) ?
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            {(!this.state.isCorrect) ? <div className = "error">This is invalid!</div>: null}
          </form> :
          <span> Hey there {this.state.value}</span>
          }
          </div>
        );
      }
    }
export default NameForm;
