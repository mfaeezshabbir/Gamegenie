import GameCard from '@/components/GameCard/GameCard'
import gameImage3 from '../public/images/game-image-3.jpg';

function signup() {
  return (
    <div>
      Signup
      <GameCard
        title="The Legend of Zelda: Breath of the Wild"
        imageSrc=`game`
        platform="Nintendo Switch"
        genre="Action-Adventure"
        rating="9.5"
      />

    </div>
  )
}

export default signup
