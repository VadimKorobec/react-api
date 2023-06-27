import { ErrorCard } from 'components/ErrorCard/ErrorCard';
import { Component } from 'react';
import { getNews } from 'services/getNews';

export class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            this.setState({ news: data.articles });
          } else {
            return Promise.reject(data.message);
          }
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { news, isLoading, error } = this.state;
    return (
      <>
        {error && <ErrorCard>{error}</ErrorCard>}
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <ul>
          {news &&
            news.map(item => (
              <li key={item.url}>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
