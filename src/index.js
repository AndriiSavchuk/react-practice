const css = require('./style.sass');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';

const API_KEY = 'AIzaSyDcH-ShTwqK9h5z9Abz8VA9Zkn56oMlSt0';

/* Function-based Component */

// const App = () => {
//   return ( <div>
//     <SearchBar />
//   </div>
//   );
// }

/* Class-based Component */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null
    };

    this.videoSearch('sportcar');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
