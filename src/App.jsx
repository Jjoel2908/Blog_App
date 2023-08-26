import { useState } from "react";
import { ArticleInformation, CategoryButton, Header } from "./components"
import data from "./data/data"

function App() {

  const allCategories = ['All' ,...new Set(data.map(article => article.category))];

  const [article, setArticle] = useState(data);

  const filterCategory = (allCategories) => {
    if(allCategories === 'All') {
      setArticle(data);
      return
    }

    const filteredArticle = data.filter(article => article.category === allCategories);
    setArticle(filteredArticle);
  }

  return (
    <>
      <Header />
      <CategoryButton allCategories={allCategories} filterCategory={filterCategory} />
      <ArticleInformation article={article} />
    </>
  )
}

export default App
