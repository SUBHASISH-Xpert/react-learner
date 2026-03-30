import React from 'react'

const Product = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 199, image: '🎧', description: 'High-quality wireless headphones' },
    { id: 2, name: 'Smart Watch', price: 299, image: '⌚', description: 'Feature-rich smartwatch' },
    { id: 3, name: 'Gaming Mouse', price: 79, image: '🖱️', description: 'Precision gaming mouse' }
  ]

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '10px'
      }}>Product Page</h1>

      <p style={{
        textAlign: 'center',
        color: '#666',
        marginBottom: '30px'
      }}>This is a simple product page using React Router DOM.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '4rem',
              marginBottom: '15px'
            }}>
              {product.image}
            </div>

            <h3 style={{
              color: '#333',
              marginBottom: '10px'
            }}>
              {product.name}
            </h3>

            <p style={{
              color: '#666',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
              {product.description}
            </p>

            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#4CAF50',
              marginBottom: '15px'
            }}>
              ${product.price}
            </p>

            <button style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product