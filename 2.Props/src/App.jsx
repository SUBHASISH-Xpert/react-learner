import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="card-container">
      <Card user ='Subhasish' para="This is Subhasish's card." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6bfvI53IKkEsh7UbcxXyQnkzzAj0pPWlgQ&s"/>
      <Card user ='Mohit' para="This is Mohit's card." img="https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg"/>
      <Card user ='Jane' para="This is Jane's card." img="https://st4.depositphotos.com/3516927/22348/i/450/depositphotos_223489912-stock-photo-girl-is-walking-a-dog.jpg"/>
      <Card user ='Bob' para="This is Bob's card." img ="https://png.pngtree.com/thumb_back/fh260/background/20240520/pngtree-new-hd-beautiful-photo-editing-image_15804437.jpg"/>
      <Card user ='Alice' para="This is Alice's card." img ="https://img.freepik.com/free-photo/dramatic-sunset-rocky-ocean-cliffs-with-waves-crashing_9975-33096.jpg?semt=ais_rp_progressive&w=740&q=80"/>
      <Card user ='Charlie' para="This is Charlie's card." img ="https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?semt=ais_hybrid&w=740&q=80"/>
    </div>
  )
}

export default App