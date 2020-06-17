import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
// import unsplash from "./api/unsplash";
import youtube from "./api/youtube";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoList from "./Components/VideoList/VideoList";
import VideoDetails from "./Components/VideoDetails/VideoDetails";

export class App extends Component {
  state = {
    inputText: "",
    imagesArray: [],
    videosArray: [],
    selectedVideo: null,
    loading: false,
    buttonLoading: false,
    nextPageToken: "",
  };
  onInputChange = (e) => {
    this.setState({ inputText: e.target.value });
  };
  // onInputSubmit = (e) => {
  //   e.preventDefault();
  //   unsplash
  //     .get(`/search/photos/?`, {
  //       params: {
  //         query: this.state.inputText,
  //       },
  //     })
  //     .then((resp) => {
  //       this.setState({ imagesArray: resp.data.results });
  //     });
  // };
  onSearchSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    youtube
      .get("/search", {
        params: {
          q: this.state.inputText,
          key: ``,
          part: "snippet",
          maxResults: 15,
        },
      })
      .then((resp) => {
        this.setState({
          videosArray: resp.data.items,
          loading: false,
          selectedVideo: null,
          nextPageToken: resp.data.nextPageToken,
        });
      });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onLoadMore = () => {
    this.setState({ buttonLoading: true });
    youtube
      .get("/search", {
        params: {
          q: this.state.inputText,
          key: "AIzaSyAmwqinVY6JpdiaA81f5P6GtigAP2j6nTA",
          part: "snippet",
          maxResults: 15,
          pageToken: this.state.nextPageToken,
        },
      })
      .then((resp) => {
        this.setState({
          videosArray: [...this.state.videosArray, ...resp.data.items],
          nextPageToken: resp.data.nextPageToken,
          buttonLoading: false,
        });
      });
  };
  render() {
    if (!this.state.loading) {
      return (
        <div>
          <SearchBar
            value={this.state.inputText}
            onInputChange={this.onInputChange}
            onInputSubmit={this.onSearchSubmit}
            heading="Find Videos"
          />
          <div className="videoContent">
            {this.state.selectedVideo && (
              <VideoDetails selectedVideo={this.state.selectedVideo} />
            )}

            <VideoList
              videos={this.state.videosArray}
              onVideoSelect={this.onVideoSelect}
              onLoadMore={this.onLoadMore}
              buttonLoading={this.state.buttonLoading}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="Loading">
          <Loader size="massive" active inline="centered">
            Loading
          </Loader>
        </div>
      );
    }
  }
}

export default App;
