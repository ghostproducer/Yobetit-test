import React from "react";
import Typography from "@material-ui/core/Typography";

const CountryCard = ({ name, flag }) => (
  <div>
    <img src={flag} style={{ width: "30px" }} />
    <span style={{ paddingLeft: "10px" }}>{name}</span>
  </div>
);

export default class Question2 extends React.Component {
  state = {
    post: "",
    responseToPost: [],
    loading: false
  };

  handleListCountry = async e => {
    e.preventDefault();
    this.setState({ responseToPost: [], loading: true });
    fetch("/api/listCountry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    })
      .then(response => response.json())
      .then(data => {
        const parsed = JSON.parse(data);
        this.setState({ responseToPost: parsed, loading: false });
      });
  };

  render() {
    const { responseToPost, post, loading } = this.state;
    return (
      <div>
        <Typography variant="h6" component="h2" gutterBottom>
          {
            "Using the same API (​ ​ https://restcountries.eu/​ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end."
          }
        </Typography>
        <form onSubmit={this.handleListCountry}>
          <p>
            <strong>Search a Unique Country:</strong>
          </p>
          <input
            type="text"
            value={post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p>...loading</p>}
        <p>
          {responseToPost.map(el => (
            <CountryCard name={el.name} flag={el.flag} />
          ))}
        </p>
      </div>
    );
  }
}
