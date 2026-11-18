import cleanserImage from '../assets/gel-limpeza.jpg'
import serumImage from '../assets/serum.jpg'
import moisturizerImage from '../assets/hidratante.jpg'
import sunscreenImage from '../assets/protetor-solar.jpg'

export const products = [
  {
    id: 'gel-limpeza',
    benefits: [
      'Espuma suave',
      'Remove as impurezas do dia',
      'Sensação de frescor após a limpeza',
    ],
    usage: 'Massageie uma pequena quantidade na pele úmida e enxágue. Use pela manhã e ao fim do dia.',
    name: 'Gel de Limpeza Facial',
    tagline: 'O primeiro gesto do dia',
    price: 'R$ 98',
    description: 'Uma textura em gel leve que se transforma em espuma delicada e transforma a limpeza em uma pausa. Remove as impurezas do dia e deixa a pele com sensação de frescor.',
    image: cleanserImage,
    alt: 'Frasco fosco com válvula branca e rótulo verde-sálvia',
  },
  {
    id: 'serum',
    size: '30 ml',
    benefits: [
      'Textura fluida de rápida absorção',
      'Sensação de conforto ao longo do dia',
      'Acabamento natural, sem brilho',
    ],
    usage: 'Depois de limpar a pele, aplique de três a quatro gotas com leves batidas, do centro do rosto para fora. Use antes do hidratante.',
    name: 'Sérum Hidratante',
    tagline: 'Alguns minutos só para você',
    price: 'R$ 168',
    description: 'Uma gota de textura fluida que se espalha com leveza e deixa a pele com aspecto descansado, macio e luminoso. O nosso produto mais amado.',
    image: serumImage,
    alt: 'Frasco âmbar com conta-gotas preto sobre uma pedra clara',
  },
  {
    id: 'hidratante',
    benefits: [
      'Textura macia',
      'Sensação de conforto',
      'Complementa a etapa de hidratação',
    ],
    usage: 'Depois da limpeza e do sérum, espalhe uma camada fina de creme pelo rosto.',
    name: 'Hidratante Facial',
    tagline: 'Conforto para o dia inteiro',
    price: 'R$ 139',
    description: 'Um creme de textura macia que derrete na pele e deixa uma sensação de aconchego. O passo que sela o seu ritual e mantém a pele confortável.',
    image: moisturizerImage,
    alt: 'Pote creme com tampa verde-sálvia sobre linho dobrado',
  },
  {
    id: 'protetor-solar',
    benefits: [
      'FPS 50',
      'Toque seco',
      'Acabamento invisível',
    ],
    usage: 'Aplique como último passo da rotina da manhã e siga as instruções de aplicação e reaplicação da embalagem.',
    name: 'Protetor Solar Facial',
    tagline: 'FPS 50 · Toque seco',
    price: 'R$ 112',
    description: 'Proteção diária com textura leve e acabamento invisível. A camada final do ritual para os dias em que você vai viver a rua, a praia ou a janela do escritório.',
    image: sunscreenImage,
    alt: 'Bisnaga branca com faixa verde-sálvia sobre travertino',
  },
]
