import React from 'react'


interface SearchResultProps {
    url: string;
    title: string;
    desc: string;
    imgSrc?: string;
    count: number;
}


const SearchResult = (props:SearchResultProps)=> {
    const { url, title, desc, imgSrc, count } = props;
    return (
        <div>
            searchresult
        </div>
    )
}



// const SearchResult: React.FC<SearchResultProps> = ({ url,title,desc,count }) => (
//     <div>
//         <div>url: {url}</div>
//         <div>{title}</div>
//     </div>
//   );

export default SearchResult;