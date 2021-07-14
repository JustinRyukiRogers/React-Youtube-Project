import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //path reference required if it's a file that we write
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//youtube api key, whenever we try to access their api
const API_KEY = 'api key';


//Turn App into class-based from function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


//JSX is what produces the html when we place this on the page, this is why we need it

//take this component's generated HTML and put it on page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // App is a class, <App/> makes it an instance
// document.querySelector tells them where to render.
