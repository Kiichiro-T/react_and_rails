import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Selects from './Selects';
import Select from './Select';
import Comments from './Comments';
import Comment from './Comment';

class CommentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      selected_month: this.getStringFromDate(),
      months: []
    };
    this.getComments = this.getComments.bind(this);
  }
  componentDidMount() {
    this.getComments(this.state.selected_month);
  }
  getComments(selected_month) {
    if (selected_month.length) {
      axios
        .get(`/api/v1/comments?selected_month=${selected_month}`)
        .then(response => {
          this.setState({ selected_month: selected_month })
          const comments = response.data['comments'];
          this.setState({ comments: comments });
          const months = response.data['months'];
          if (months.length) {
            this.setState({ months: months });
          }
        })
        .catch(error => {
          console.log(error)
        });
    } else {
      axios
        .get("/api/v1/comments")
        .then(response => {
          const comments = response.data['comments'];
          this.setState({ comments: comments });
          const months = response.data['months'];
          if (months.length) {
            this.setState({ months: months });
          }
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
  getStringFromDate() {
    let date = new Date();
    let year = date.getFullYear()
    let month = ('0' + (date.getMonth()+1)).slice(-2);
    let format = 'YYYY/MM';
    format = format.replace(/YYYY/g, year);
    format = format.replace(/MM/g, month)
    return format
  };
  render() {
    return(
      <>
        <Selects
          selected_month={this.state.selected_month}
          getComments={this.getComments}
        >
            {this.state.months.map(month => (
              <Select
                key={month}
                month={month}
                selected_month={this.state.selected_month}
              />
            ))}
        </Selects>
        <Comments>
          {this.state.comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))}
        </Comments>
      </>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('comment-app')
  app && ReactDOM.render(<CommentApp />, app)
})
