import React, { useEffect, useState } from 'react';
import ProductSummary from './components/ProductSummary';
import style from './style.module.scss';

const Gallery: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('src/data/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Erro ao carregar os dados:", error));
  }, []);
  
  return (
    <div className={style.gallery}>
      <h1 className={style.title}>Desserts</h1>
      <div className={style.galleryGrid}>

        {data.map((product: any) => {
          return (
            <ProductSummary
              key={product.name}
              product={product}
            />
          )
        })}
      </div>
    </div>

  )
}

export default Gallery