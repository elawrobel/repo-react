import React from 'react';

// 1. Clickbait app
// Napisz mini serwis informacyjny, czyli aplikację, która posiada dane w postaci tablicy obiektów. Na podstawie danych zrób iterację po elementach tablicy, aby wyświetlić każdy pojedynczy artykuł. Jeżeli intro jest dłuższe niż 25 znaków, wówczas wyświetl pierwsze 25 znaków, a następnie 3 kropki. W aplikacji wykorzystaj stylowanie, ale spróbuj to zrobić za pomocą JavaScript.


const styles = {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px 20px',
  rowGap: '10px',
  columnGap: '20px',
  backgroundColor: '#ececec',
  padding: '16px',

  card:{
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
    width: '33%',
    backgroundColor: '#ffffff',
  },
};

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
]

function Zadanie1(){

  return (
    <div className="container" style={styles}>
      { posts.map( ( post ) => (
        <div className="news" style={styles.card} key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.intro}</p>
        </div>
      )) }
    </div>
  );
}
export default Zadanie1;