import { ContentInfo } from 'components/ContentInfo/ContentInfo';
import { Search } from 'components/Search/Search';
import { useState } from 'react';

const NewsPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return (
    <>
      <h1>News Page</h1>
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
    </>
  );
};

export default NewsPage;
