import { ErrorCard } from 'components/ErrorCard/ErrorCard';
import { Component } from 'react';
import { getNews } from 'services/getNews';

export class ContentInfo extends Component {
  state = {
    news: null,
    // isLoading: false,
    error: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: 'pending' });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            this.setState({ news: data.articles, status: 'resolved' });
          } else {
            return Promise.reject(data.message);
          }
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
      // .finally(() => {
      //   this.setState({ isLoading: false });
      // });
    }
  }

  render() {
    // const { news, isLoading, error } = this.state;
    if (this.state.status === 'pending') {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    } else if (this.state.status === 'resolved') {
      return (
        <ul>
          {this.state.news.map(item => (
            <li key={item.url}>
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      );
    } else if (this.state.status === 'rejected') {
      return <ErrorCard>{this.state.error}</ErrorCard>;
    }
    // return (
    //   <>
    //     {/* {error && <ErrorCard>{error}</ErrorCard>} */}
    //     {/* {isLoading && (
    //       <div className="spinner-border" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //       </div>
    //     )} */}
    //     {/* <ul>
    //       {news &&
    //         news.map(item => (
    //           <li key={item.url}>
    //             <p>{item.title}</p>
    //             <p>{item.author}</p>
    //             <p>{item.description}</p>
    //           </li>
    //         ))}
    //     </ul> */}
    //   </>
    // );
  }
}
