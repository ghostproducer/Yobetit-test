import React from "react";
import Typography from "@material-ui/core/Typography";

export default class Question4 extends React.Component {
  state = {
    responseToPost: false,
    loading: false
  };

  runMachine = async e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    fetch("/api/runMachine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          responseToPost: data
        });
      });
  };

  render() {
    const { loading, responseToPost } = this.state;
    return (
      <div>
        <div>
          <Typography variant="h6" component="h2" gutterBottom>
            {"SLOT MACHINE GAME"}
          </Typography>
          <form onSubmit={this.runMachine}>
            <p>
              <strong>Search a country from the list:</strong>
            </p>
            <button type="submit">RUN!</button>
          </form>
          {loading && <p>...loading</p>}
          <p>coins:{responseToPost && responseToPost.coins}</p>
          <p>result:{responseToPost && responseToPost.result}</p>
          <p>reel</p>
          {responseToPost && responseToPost.reel.map(el => <div>{el}</div>)}
        </div>
      </div>
    );
  }
}
