import React, { useEffect, useState } from 'react';
import ProductSummary from './components/ProductSummary';
import style from './style.module.scss';

const Gallery: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        // Adiciona a base do Vite aos caminhos das imagens
        const baseUrl = import.meta.env.BASE_URL; // Obter base URL do Vite
        const updatedData = data.map((product: any) => {
          const updatedImages = {
            ...product.image,
            thumbnail: `${baseUrl}${product.image.thumbnail}`,
            mobile: `${baseUrl}${product.image.mobile}`,
            tablet: `${baseUrl}${product.image.tablet}`,
            desktop: `${baseUrl}${product.image.desktop}`
          };
          return { ...product, image: updatedImages };
        });
        setData(updatedData);
      })
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
  );
};

export default Gallery;
