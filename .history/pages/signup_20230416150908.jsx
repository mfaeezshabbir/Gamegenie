import GameCard from '@/components/GameCard/GameCard'
import React from 'react'

function signup() {
  return (
    <div>
      Signup
      <GameCard
        title="The Legend of Zelda: Breath of the Wild"
        imageSrc="/hero-iamge.jpg"
        platform="Nintendo Switch"
        genre="Action-Adventure"
        rating="9.5"
      />

    </div>
  )
}

export default signup
