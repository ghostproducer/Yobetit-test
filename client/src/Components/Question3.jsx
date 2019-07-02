import React from "react";
import Typography from "@material-ui/core/Typography";

const CountryCard = ({ name, flag }) => (
  <div>
    <img src={flag} style={{ width: "30px" }} />
    <span style={{ paddingLeft: "10px" }}>{name}</span>
  </div>
);

export default class Question3 extends React.Component {
  state = {
    filteredList: [],
    responseToPost: [],
    loading: true
  };

  componentDidMount() {
    this.handleAllCountry();
  }

  handleAllCountry = async () => {
    this.setState({ responseToPost: [], loading: true });
    fetch("/api/allCountry", {
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

  filterCountries = e => {
    this.setState({ loading: true });
    const filtered = this.state.responseToPost.filter(country => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ filteredList: filtered, loading: false });
  };

  render() {
    const { responseToPost, post, loading, filteredList } = this.state;
    return (
      <div>
        <Typography variant="h6" component="h2" gutterBottom>
          {
            "Using the same API (​ ​ https://restcountries.eu/​ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end."
          }
        </Typography>
        <form onSubmit={this.handleAllCountry}>
          <p>
            <strong>Search a country from the list:</strong>
          </p>
          <input type="text" value={post} onChange={this.filterCountries} />
          <button type="submit">Search</button>
        </form>
        {loading && <p>...loading</p>}
        <div>
          {!!filteredList.length
            ? filteredList.map(el => (
                <CountryCard name={el.name} flag={el.flag} key={el.name} />
              ))
            : responseToPost.map(el => (
                <CountryCard name={el.name} flag={el.flag} key={el.name} />
              ))}
        </div>
      </div>
    );
  }
}
