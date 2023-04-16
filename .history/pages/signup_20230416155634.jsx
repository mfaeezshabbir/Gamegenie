import GameCard from '@/components/GameCard/GameCard'
import gameImage3 from '../public/images/The Legend of Zelda: .jpg';

function signup() {
  return (
    <div>
      Signup
      <GameCard
        title="The Legend of Zelda: Breath of the Wild"
        imageSrc= {gameImage3}
        platform="Nintendo Switch"
        genre="Action-Adventure"
        rating="9.5"
      />

    </div>
  )
}

export default signup
