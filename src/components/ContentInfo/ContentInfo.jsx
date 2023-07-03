import { ErrorCard } from 'components/ErrorCard/ErrorCard';
import { useEffect, useState } from 'react';
import { getNews } from 'services/getNews';
import { useCustomContext } from 'testContext/Context/Context';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export const ContentInfo = ({ searchText }) => {
  const { news, setNews } = useCustomContext();
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    news && setStatus(STATUS.RESOLVED);
  }, [news]);

  useEffect(() => {
    if (!searchText) return;
    setStatus(STATUS.PENDING);
    getNews(searchText)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          setNews(data.articles);
          setStatus(STATUS.RESOLVED);
        } else {
          return Promise.reject(data.message);
        }
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
      });
  }, [searchText, setNews]);

  if (status === STATUS.PENDING) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (status === STATUS.RESOLVED) {
    return (
      <ul>
        {news.map(item => (
          <li key={item.url}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === STATUS.REJECTED) {
    return <ErrorCard>{error}</ErrorCard>;
  }
};

// export class ContentInfo extends Component {
//   state = {
//     news: null,
//     // isLoading: false,
//     error: '',
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({ status: 'pending' });
//       getNews(this.props.searchText)
//         .then(response => response.json())
//         .then(data => {
//           if (data.status === 'ok') {
//             this.setState({ news: data.articles, status: 'resolved' });
//           } else {
//             return Promise.reject(data.message);
//           }
//         })
//         .catch(error => {
//           this.setState({ error, status: 'rejected' });
//         });
//       // .finally(() => {
//       //   this.setState({ isLoading: false });
//       // });
//     }
//   }

//   render() {
//     const { news, error } = this.state;
//     if (this.state.status === 'pending') {
//       return (
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       );
//     } else if (this.state.status === 'resolved') {
//       return (
//         <ul>
//           {news.map(item => (
//             <li key={item.url}>
//               <p>{item.title}</p>
//               <p>{item.author}</p>
//               <p>{item.description}</p>
//             </li>
//           ))}
//         </ul>
//       );
//     } else if (this.state.status === 'rejected') {
//       return <ErrorCard>{error}</ErrorCard>;
//     }
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
