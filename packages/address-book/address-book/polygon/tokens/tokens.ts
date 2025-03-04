import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const MATIC = {
  name: 'Wrapped Matic',
  address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  symbol: 'WMATIC',
  decimals: 18,
  chainId: 137,
  website: 'https://polygon.technology/',
  description:
    'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
  logoURI:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
} as const;

const MAI = {
  name: 'Mai',
  address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
  symbol: 'MAI',
  decimals: 18,
  chainId: 137,
  website: 'https://www.mai.finance/',
  description:
    "MAI is a stable coin collateralized by your MATIC holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
  logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
} as const;

const _tokens = {
  CADC: {
    name: 'CAD Coin',
    symbol: 'CADC',
    address: '0x5d146d8B1dACb1EBBA5cb005ae1059DA8a1FbF57',
    chainId: 137,
    decimals: 18,
    website: 'https://paytrie.com/cadc',
    description:
      "CADC is a fully-backed stable coin for the Canadian Dollar, issued by PayTrie.",
    logoURI: 'https://assets.coingecko.com/coins/images/14149/small/cadc_2.png?1614666625',
  },
  jCAD: {
    name: 'Jarvis Synthetic Canadian Dollar',
    symbol: 'jCAD',
    address: '0x8ca194A3b22077359b5732DE53373D4afC11DeE3',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jCHF is a multi-collateralized synthetic token tracking the price of the Canadian Dollar. It is built on the top of UMA and Chainlink.',
    logoURI: 'https://yield.jarvis.network/static/media/jCAD.832ff304.png',
  },
  USTw: {
    name: 'TerraUSD (Wormhole)',
    symbol: 'UST',
    address: '0xE6469Ba6D2fD6130788E0eA9C0a0515900563b59',
    chainId: 137,
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
    website: 'https://coinmarketcap.com/currencies/terrausd-wormhole/',
    description:
      'Terra stablecoins offer instant settlements, low fees and seamless cross-border exchange - loved by millions of users and merchants.',
  },
  ETH2x: {
    name: 'ETH 2x Flexible Leverage Index',
    symbol: 'ETH2x',
    address: '0x3Ad707dA309f3845cd602059901E39C4dcd66473',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9789.png',
    website: 'https://www.indexcoop.com/ethfli',
    description:
      'The Ethereum Flexible Leverage Index lets you leverage a collateralized debt position in a safe and efficient way, by abstracting its management into a simple index. It enabled market participants to take on leverage while minimizing the transaction costs and risks associated with maintaining collateralized debt.',
  },
  gOHM: {
    name: 'Governance OHM',
    symbol: 'gOHM',
    address: '0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://pancakeswap.finance/images/tokens/0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1.svg',
    website: 'https://www.olympusdao.finance/',
    description:
      'Olympus is building a community-owned decentralized financial infrastructure to bring more stability and transparency for the world.',
  },
  TUSD: {
    name: 'True USD',
    symbol: 'TUSD',
    address: '0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756',
    decimals: 18,
    chainId: 137,
    website: 'https://www.trueusd.com/',
    description:
      'TrueUSD is one of a number of cryptocurrency stablecoins administered by TrustToken, a platform for tokenizing real-world assets.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2563.png',
  },
  WCRO: {
    name: 'WCRO',
    symbol: 'WCRO',
    address: '0xf2D8124b8F9267DaD61351c7aD252362880C6638',
    chainId: 137,
    decimals: 18,
    website: 'https://cronos.crypto.org/',
    description: 'Crypto.com Coin',
    logoURI: 'https://vvs.finance/images/tokens/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23.svg',
  },
  SHIB: {
    name: 'SHIBA INU',
    symbol: 'SHIB',
    address: '0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec',
    chainId: 137,
    decimals: 18,
    website: 'https://shibatoken.com/',
    description: 'A Decentralized Meme Token that Evolved into a Vibrant Ecosystem.',
    logoURI: 'https://assets.coingecko.com/coins/images/11939/small/shiba.png?1622619446',
  },
  FTM: {
    name: 'Fantom Token',
    symbol: 'FTM  ',
    address: '0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5',
    chainId: 137,
    decimals: 18,
    website: 'https://fantom.foundation/',
    description:
      'Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
    logoURI: 'https://ftmscan.com/token/images/wFtm_32.png',
  },
  jEUR: {
    name: 'Jarvis Synthetic Euro',
    symbol: 'jEUR',
    address: '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jEUR is a multi-collateralized synthetic token tracking the price of Euro. It is built on the top of UMA and Chainlink.',
    logoURI: 'https://i.imgur.com/ZvP634G.png',
  },
  jGBP: {
    name: 'Jarvis Synthetic British Pound',
    symbol: 'jGBP',
    address: '0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jGBP is a multi-collateralized synthetic token tracking the price of the British Pound. It is built on the top of UMA and Chainlink.',
    logoURI: 'https://i.imgur.com/zOLD6Vf.png',
  },
  jCHF: {
    name: 'Jarvis Synthetic Swiss Franc',
    symbol: 'jCHF',
    address: '0xbD1463F02f61676d53fd183C2B19282BFF93D099',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jCHF is a multi-collateralized synthetic token tracking the price of the Swiss Franc. It is built on the top of UMA and Chainlink.',
    logoURI: 'https://i.imgur.com/EknGhAl.png',
  },
  JRT: {
    name: 'Jarvis Reward Token',
    symbol: 'JRT',
    address: '0x596eBE76e2DB4470966ea395B0d063aC6197A8C5',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'The Jarvis Reward Token  is a utility token for securing and governing the Jarvis network, and rewarding agents who would bring value to it.',
    logoURI: 'https://cdn.coinranking.com/vLU4_a_Zp/jarvis.svg?size=48x48',
  },
  pBREW: {
    name: 'pBREW',
    symbol: 'pBREW',
    address: '0xb5106A3277718eCaD2F20aB6b86Ce0Fee7A21F09',
    chainId: 137,
    decimals: 18,
    website: 'https://polygon.cafeswap.finance/',
    description: 'Safest & Lowest fee AMM on BSC & Polygon.',
    logoURI: 'https://polygon.cafeswap.finance/images/tokens/pbrew.png',
  },
  FOX: {
    name: 'FOX',
    symbol: 'FOX',
    address: '0x65A05DB8322701724c197AF82C9CaE41195B0aA8',
    chainId: 137,
    decimals: 18,
    website: 'https://shapeshift.com/',
    description:
      'FOX is ShapeShift’s official loyalty token. Holders of FOX enjoy zero-commission trading and win ongoing USDC crypto payments from Rainfall (payments increase in proportion to your FOX holdings). Use at ShapeShift.com.',
    logoURI: 'https://assets.coingecko.com/coins/images/9988/large/FOX.png',
  },
  CRYSTL: {
    name: 'CrystalToken',
    symbol: 'CRYSTL',
    address: '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
    chainId: 137,
    decimals: 18,
    website: 'https://www.crystl.finance/',
    description:
      'Crystl Finance is a decentralized yield farm that runs on Polygon and ApeSwap Polygon Exchange, and pays out $CRYSTL, the native currency. With it, you can earn profits from your capital in a way that is fair, transparent, and secure.',
    logoURI: 'https://www.crystl.finance/images/crystlbg.png',
  },
  TETU: {
    name: 'TETU',
    symbol: 'TETU',
    address: '0x255707B70BF90aa112006E1b07B9AeA6De021424',
    chainId: 137,
    decimals: 18,
    website: 'https://app.tetu.io/',
    description:
      'Tetu implements automated yield farming strategies in order to provide investors with a safe and secure method of receiving high yield on their investments.',
    logoURI: 'https://github.com/tetu-io/tetu-brand-assets/blob/master/token_icons/flat_icon.svg',
  },
  WATCH: {
    name: 'YieldWatch',
    symbol: 'WATCH',
    address: '0x09211Dc67f9fe98Fb7bBB91Be0ef05f4a12FA2b2',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8621.png',
    website: 'https://www.yieldwatch.net/',
    description: 'Smart Defi Dashboard',
  },
  AXS: {
    name: 'Axie Infinity Shard',
    symbol: 'AXS',
    address: '0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/6783.png',
    website: 'https://axieinfinity.com/',
    description:
      'Axie Infinity is a Pokémon-inspired digital pet universe built on the Ethereum blockchain where anyone can earn token rewards through skilled gameplay and contributions to the ecosystem.',
  },
  AVAX: {
    name: 'Avalanche',
    symbol: 'AVAX',
    address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818',
    website: 'https://www.avax.network/',
    description:
      'Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.',
  },
  PEAR: {
    name: 'PearZap',
    symbol: 'PEAR',
    address: '0xc8bcb58caEf1bE972C0B638B1dD8B0748Fdc8A44',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/17173/small/pear200.png',
    website: 'https://pearzap.com/',
    description:
      'PearZap is a high yield farm & pool on the Polygon Chain (MATIC) and Binance Smart Chain',
  },
  SPADE: {
    name: 'PolygonFarm',
    symbol: 'SPADE',
    address: '0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://polygonfarm.finance/images/spade.png',
    website: 'https://polygonfarm.finance/',
    description:
      'PolygonFarm Finance is a community led next generation stable-yield farming protocol established exclusively on the Polygon ecosystem',
  },
  $DG: {
    name: 'decentral.games',
    address: '0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4',
    symbol: '$DG',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/dg.jpg',
    website: 'https://decentral.games/',
    description: 'decentral.games is a DAO-governed metaverse casino powered by $DG',
  },
  AAVE: {
    name: 'Aave',
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    symbol: 'AAVE',
    decimals: 18,
    chainId: 137,
    website: 'https://aave.com/',
    description:
      'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.',
    logoURI: 'https://etherscan.io/token/images/aave_32.png',
  },
  AZUKI: {
    name: 'DokiDokiAzuki',
    address: '0x7CdC0421469398e0F3aA8890693d86c840Ac8931',
    symbol: 'AZUKI',
    decimals: 18,
    chainId: 137,
    website: 'https://dokidoki.com/',
    description: 'AZUKI is a secondary token designed for use in Doki Doki NFT products',
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/azuki.png',
  },
  BANANA: {
    name: 'ApeSwapFinance Banana',
    address: '0x5d47bAbA0d66083C52009271faF3F50DCc01023C',
    symbol: 'BANANA',
    decimals: 18,
    chainId: 137,
    website: 'https://apeswap.finance/',
    description:
      'ApeSwap is a leading decentralized exchange (DEX) on Binance Smart Chain and Polygon focused on offering a premier trading experience. Users are incentivized to pool liquidity on ApeSwap through yield farming to earn the native currency, $BANANA. Additionally, apes can use their earned $BANANA to stake and earn other tokens and unlock exclusive features. Built by DeFi apes, for DeFi apes, we have a dedicated team with years of experience who are committed to the DeFi community and growing the ApeSwap Jungle.',
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BANANA.svg',
  },
  BIFI: {
    name: 'beefy.finance',
    address: '0xFbdd194376de19a88118e84E279b977f165d01b8',
    symbol: 'BIFI',
    decimals: 18,
    chainId: 137,
    website: 'https://www.beefy.finance/',
    description:
      'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
  },
  DAI: {
    name: 'Dai Stablecoin',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    symbol: 'DAI',
    decimals: 18,
    chainId: 137,
    website: 'https://makerdao.com/',
    description:
      'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  DEGEN: {
    name: 'DEGEN Index',
    address: '0x8a2870fb69A90000D6439b7aDfB01d4bA383A415',
    symbol: 'DEGEN',
    decimals: 18,
    chainId: 137,
    website: 'https://indexed.finance/',
    description:
      'A higher risk/reward index of promising Ethereum protocols that have significant room to grow',
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/DEGEN_LOGO.png',
  },
  ETH: {
    name: 'Ether',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    symbol: 'ETH',
    decimals: 18,
    chainId: 137,
    website: 'https://ethereum.org/',
    description:
      'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  FISH: {
    name: 'Fish',
    address: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B',
    symbol: 'FISH',
    decimals: 18,
    chainId: 137,
    website: 'https://polycat.finance/vaults',
    description:
      'Polycat is a value-oriented, economically sustainable and decentralized hybrid yield optimizer (yield farm and yield aggregator) running on the Polygon blockchain (formerly known as MATIC).',
    logoURI: 'https://i.imgur.com/ncleoTN.png',
  },
  FRAX: {
    name: 'Frax',
    address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
    symbol: 'FRAX',
    decimals: 18,
    chainId: 137,
    website: 'https://frax.finance/',
    description:
      'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
    logoURI: 'https://avatars.githubusercontent.com/u/56005256?s=200&v=4',
  },
  FXS: {
    name: 'Frax Share',
    address: '0x1a3acf6D19267E2d3e7f898f42803e90C9219062',
    symbol: 'FXS',
    decimals: 18,
    chainId: 137,
    website: 'https://frax.finance/',
    description:
      'The Frax Share token (FXS) is the non-stable, utility token in the protocol. It is meant to be volatile and hold rights to governance and all utility of the system. It is important to note that we take a highly governance-minimized approach to designing trustless money in the same ethos as Bitcoin. We eschew DAO-like active management such as MakerDAO. The less parameters for a community to be able to actively manage, the less there is to disagree on. Parameters that are up for governance through FXS include adding/adjusting collateral pools, adjusting various fees (like minting or redeeming), and refreshing the rate of the collateral ratio. No other actions such as active management of collateral or addition of human-modifiable parameters are possible other than a hardfork that would require voluntarily moving to a new implementation entirely. ',
    logoURI: 'https://app.sushi.com/images/tokens/fxs-square.jpg',
  },
  GHST: {
    name: 'Aavegotchi GHST Token',
    address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
    symbol: 'GHST',
    decimals: 18,
    chainId: 137,
    website: 'https://www.aavegotchi.com/',
    description:
      'Aavegotchis are crypto-collectibles living on the Ethereum blockchain, backed by the ERC721 standard used in popular blockchain games.',
    logoURI: 'https://aavegotchi.com/images/ghsttoken.svg',
  },
  GNS: {
    name: 'Gains Network Token',
    address: '0xE5417Af564e4bFDA1c483642db72007871397896',
    symbol: 'GNS',
    decimals: 18,
    chainId: 137,
    website: 'https://gainsnetwork.io/',
    description: 'Decentralized leverage trading platform on Polygon.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/GNS.png',
  },
  LINK: {
    name: 'ChainLink Token',
    address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    symbol: 'LINK',
    decimals: 18,
    website: 'https://chain.link/',
    description:
      'Link is the currency used to pay the Chainlink node operators for their work. Chainlink node operators have to stake LINK in the network in order to participate and provide data services.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
  },
  MANA: {
    name: 'Decentraland MANA',
    address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    symbol: 'MANA',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png',
  },
  miMATIC: MAI,
  MAI: MAI,
  MUST: {
    name: 'Must',
    address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',
    symbol: 'MUST',
    decimals: 18,
    chainId: 137,
    website: 'https://www.cometh.io/',
    description:
      'Explore the galaxy and mine precious tokens out of asteroids. Cometh is a defi powered game with yield generating NFT. Get a spaceship, explore the galaxy and earn tokens.',
    logoURI: 'https://etherscan.io/token/images/cometh_32.png',
  },
  QI: {
    name: 'Qi Dao',
    address: '0x580A84C73811E1839F75d86d75d88cCa0c241fF4',
    symbol: 'QI',
    decimals: 18,
    chainId: 137,
    website: 'https://www.mai.finance/',
    description:
      'Qi (pronounced CHEE) is the governance token of the QiDao Protocol. It allows those who hold it to vote on changes to the QiDao Protocol. ',
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png',
  },
  QUICK: {
    name: 'Quickswap',
    address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
    symbol: 'QUICK',
    decimals: 18,
    chainId: 137,
    website: 'https://quickswap.exchange/#/swap',
    description: 'Next-gen Layer 2 DEX. Trade at lightning-fast speeds with near-zero gas fees.',
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon.jpeg',
  },
  SOL: {
    name: 'Solana',
    address: '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4',
    symbol: 'SOL',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452',
    website: 'https://solana.com/',
    description:
      'The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain.',
  },
  TEL: {
    name: 'Telcoin',
    address: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
    symbol: 'TEL',
    decimals: 2,
    chainId: 137,
    website: 'https://www.telco.in/',
    description: 'A cryptocurrency distributed by your mobile operator and accepted everywhere.',
    logoURI: 'https://pbs.twimg.com/profile_images/933388441475194881/57fOk40N_400x400.jpg',
  },
  UNI: {
    name: 'Uniswap',
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    symbol: 'UNI',
    decimals: 18,
    website: 'https://uniswap.org/',
    description:
      'UNI is the governance token for Uniswap. UNI was introduced on 16th September 2020 through a retrospective airdrop to users who have interacted with the protocol either by swapping tokens or by providing liquidity.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon1.png',
  },
  USDC: {
    name: 'USD Coin',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC',
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  USDT: {
    name: 'Tether USD',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    symbol: 'USDT',
    decimals: 6,
    chainId: 137,
    website: 'https://tether.to/',
    description:
      'Tether converts cash into digital currency, to anchor or tether the value to the price of national currencies like the US dollar, the Euro, and the offshore Chinese yuan.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  VISION: {
    name: 'Vision Token',
    address: '0x034b2090b579228482520c589dbD397c53Fc51cC',
    symbol: 'VISION',
    decimals: 18,
    chainId: 137,
    website: 'https://matic.apy.vision/',
    description: 'All-in-one liquidity pool analytics and yield farming rewards tracking tool',
    logoURI: 'https://s3-us-west-2.amazonaws.com/acf-uploads/apyvisionlogo200circle.png',
  },
  WBTC: {
    name: 'Wrapped BTC',
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    symbol: 'WBTC',
    decimals: 8,
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  WEXpoly: {
    name: 'WEXPoly',
    address: '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
    symbol: 'WEXPoly',
    decimals: 18,
    chainId: 137,
    website: 'https://wault.finance/',
    description:
      'WEXpoly, or Wault EXchange Token, is the foundational token of WaultSwap, on the Polygon network. ',
    logoURI:
      'https://assets.coingecko.com/coins/images/16282/small/ws_purple_circle_200x200_%281%29.png',
  },
  MATIC,
  WMATIC: MATIC,
  WNATIVE: MATIC,
  xMARK: {
    name: 'Standard',
    address: '0xf153EfF70DC0bf3b085134928daeEA248d9B30d0',
    symbol: 'xMARK',
    decimals: 9,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/8cb78aca77b340510958ed98a3cd260d2d7f0420/blockchains/ethereum/assets/0x36b679bd64Ed73DBfd88909cDCB892cB66Bd4CBb/logo.png',
    website: 'https://benchmarkprotocol.finance/',
    description:
      'Benchmark Protocol is an elastic stablecoin-alternative bridging capital markets to DeFi.',
  },
  YFI: {
    name: 'yearn.finance',
    address: '0xDA537104D6A5edd53c6fBba9A898708E465260b6',
    symbol: 'YFI',
    decimals: 18,
    chainId: 137,
    website: 'https://yearn.finance/',
    description:
      'Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
  },
  ROUTE: {
    name: 'Route',
    address: '0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4',
    symbol: 'ROUTE',
    decimals: 18,
    chainId: 137,
    website: 'https://routerprotocol.com/',
    description:
      'Router is developing the bridging infrastructure to allow contract level data flow across various blockchains, thus enabling asset level data transfer.',
    logoURI: 'https://assets.coingecko.com/coins/images/13709/small/route_token_200x200-19.png',
  },
  DFYN: {
    name: 'Dfyn',
    address: '0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97',
    symbol: 'DFYN',
    decimals: 18,
    chainId: 137,
    website: 'https://exchange.dfyn.network/#/swap',
    description:
      'With Dfyn nodes spread across multiple Layer 1 and Layer 2 blockchains, Dfyn will act as a multi-chain DEX. This will allow Dfyn to plug into a liquidity super-mesh, enabling users to perform their asset trades seamlessly on several blockchains from a single interface. Dfyn will also build a decentralized swap station to swap large assets natively like BTC, ETH, ADA in a non-custodial way.',
    logoURI: 'https://raw.githubusercontent.com/dfyn/assets/main/DFYN_logo.png',
  },
  IRON: {
    name: 'Iron',
    address: '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a',
    symbol: 'IRON',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://polygon.iron.finance/static/media/IRON.484ee2b8.png',
  },
  SUSHI: {
    name: 'Sushi',
    address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    symbol: 'SUSHI',
    decimals: 18,
    chainId: 137,
    website: 'https://sushi.com/',
    description:
      'Sushi is the home of DeFi. Their community is building a comprehensive, decentralized trading platform for the future of finance. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform.',
    logoURI: 'https://app.sushi.com/static/media/logo.11fafaa5.png',
  },
  GRT: {
    name: 'The Graph',
    address: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
    symbol: 'GRT',
    decimals: 18,
    chainId: 137,
    website: 'https://thegraph.com/',
    description:
      'The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x5fe2B58c013d7601147DcdD68C143A77499f5531/logo.png',
  },
  WOOFY: {
    name: 'Woofy',
    address: '0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
    symbol: 'WOOFY',
    decimals: 12,
    chainId: 137,
    website: 'https://woofy.finance/',
    description:
      'The WOOFY token is the blue dog companion token of YFI. Utilizing special Woof technology, it allows two-way conversion between the two tokens, allowing holders to be exposed to YFI in a fluffier package.',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xD0660cD418a64a1d44E9214ad8e459324D8157f1/logo.png',
  },
  renDOGE: {
    name: 'renDOGE',
    address: '0xcE829A89d4A55a63418bcC43F00145adef0eDB8E',
    symbol: 'renDOGE',
    decimals: 8,
    chainId: 137,
    website: 'https://renproject.io/',
    description: 'renDOGE is a one-for-one representation of Dogecoin (DOGE) on Polygon via RenVM.',
    logoURI: 'https://polygonscan.com/token/images/rendogecoin_32.png',
  },
  SNX: {
    name: 'SNX',
    address: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
    symbol: 'SNX',
    decimals: 18,
    chainId: 137,
    website: 'https://synthetix.io/',
    description:
      'Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.',
    logoURI: 'https://app.sushi.com/images/tokens/snx-square.jpg',
  },
  CRV: {
    name: 'Curve Protocol',
    symbol: 'CRV',
    address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
    chainId: 137,
    decimals: 18,
    website: 'https://curve.fi/',
    description:
      'Curve is an exchange liquidity pool on Ethereum. Curve is designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
    logoURI: 'https://external-content.duckduckgo.com/ip3/resources.curve.fi.ico',
  },
  DOKI: {
    name: 'DokiDoki Finance',
    symbol: 'DOKI',
    address: '0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C',
    chainId: 137,
    decimals: 18,
    website: 'https://dokidoki.finance/stake/pool/1',
    description: 'Doki is the platform token for DokiDoki Finance.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png',
  },
  PZAP: {
    name: 'PolyZap',
    symbol: 'PZAP',
    address: '0xeb2778f74E5ee038E67AA6c77f0F0451ABd748FD',
    chainId: 137,
    decimals: 18,
    website: 'https://farm.polyzap.finance/',
    description:
      'PolyZap is an innovative and reliable, next-generation Automated Market Maker (AMM) and Yield Farm on the Polygon Network, with unique features and attributes:',
    logoURI: 'https://polyzap.finance/logo.png',
  },
  WFIL: {
    name: 'Wrapped Filecoin',
    symbol: 'WFIL',
    address: '0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F',
    chainId: 137,
    decimals: 18,
    website: 'https://filecoin.io/',
    description:
      'Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency.',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F/logo.png',
  },
  ibBTC: {
    name: 'Interest bearing BTC',
    symbol: 'ibBTC',
    address: '0x4EaC4c4e9050464067D673102F8E24b2FccEB350',
    chainId: 137,
    decimals: 18,
    website: 'https://app.badger.finance/ibBTC',
    description:
      'ibBTC is an asset launched in collaboration with DeFiDollar, it stands for Interest Bearing Bitcoin. It was created to serve as the default Bitcoin asset on Ethereum while generating interest to the users who hold it.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  BNB: {
    name: 'AnySwap Bridge Polygon Binance Coin',
    symbol: 'BNB',
    address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    chainId: 137,
    decimals: 18,
    website: 'https://www.binance.com/',
    description:
      'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
    logoURI:
      'https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  PUP: {
    name: 'Polypup.Finance',
    symbol: 'PUP',
    address: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59',
    chainId: 137,
    decimals: 18,
    website: 'https://www.polypup.finance/',
    description:
      'PolyPup Finance is a new DeFi project on Polygon featuring a deflationary token model with a maximum supply of 31,000 PUP tokens.',
    logoURI: 'https://polypup.finance/images/egg/9.png',
  },
  rUSD: {
    name: 'Ramp USD',
    symbol: 'rUSD',
    address: '0xfC40a4F89b410a1b855b5e205064a38fC29F5eb5',
    chainId: 137,
    decimals: 18,
    website: 'https://rampdefi.com/',
    description:
      'Ramp aims to empower users with access to a global, blockchain-agnostic liquidity network. rUSD can be minted on Binance Smart Chain and Polygon, with more chains in the near future.',
    logoURI: 'https://appv2.rampdefi.com/assets/icon/rusdc.svg',
  },
  UST: {
    name: 'USD Terra',
    symbol: 'UST',
    address: '0x692597b009d13C4049a947CAB2239b7d6517875F',
    chainId: 137,
    decimals: 18,
    website: 'https://www.terra.money/',
    description:
      'Terra stablecoins offer instant settlements, low fees and seamless cross-border exchange - loved by millions of users and merchants.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
  },
  WMATIC_DFYN: {
    name: 'Wrapped Matic, DFYN version',
    symbol: 'WMATIC',
    address: '0x4c28f48448720e9000907BC2611F73022fdcE1fA',
    chainId: 137,
    decimals: 18,
    website: 'https://polygon.technology/',
    description:
      'DFyn version. Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
  },
  pWINGS: {
    name: 'JetSwap Polygon Token',
    symbol: 'pWINGS',
    address: '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
    chainId: 137,
    decimals: 18,
    website: 'https://jetswap.finance/',
    description:
      'Jetswap is a decentralized Automated Market Maker (AMM) on Binance Smart Chain & Polygon with low fees and instant trade execution. Trade from the comfort of your own wallet! ',
    logoURI: 'https://polygon-info.jetswap.finance/static/media/wings.dca9f9fe.png',
  },
  HONOR: {
    name: 'FarmHero HONOR',
    symbol: 'HONOR',
    address: '0xb82A20B4522680951F11c94c54B8800c1C237693',
    chainId: 137,
    decimals: 18,
    website: 'https://polygon.farmhero.io/',
    description: 'FarmHero is a protocol that mixes NFT, gaming and DEFI concepts.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10620.png',
  },
  ICE: {
    name: 'Iron Finance ICE Token',
    symbol: 'ICE',
    address: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef',
    chainId: 137,
    decimals: 18,
    website: 'https://iron.finance/',
    description:
      'Iron Finance is building a full suite of decentralized finance ecosystem of products and use cases on the Polygon network. The official Iron Finance token is the ICE token, inspired by A Song of Ice and Fire novels, where the Iron Throne is a well-known symbol.',
    logoURI: 'https://app.iron.finance/static/media/ice-square.6e960434.svg',
  },
  NEXO: {
    name: 'Nexo',
    symbol: 'NEXO',
    address: '0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E',
    chainId: 137,
    decimals: 18,
    website: 'https://nexo.io/',
    description:
      'Since 2018 Nexo has strived to bring professional financial services to the world of digital assets. Leveraging the best of the team’s years of experience in FinTech along with the power of blockchain technology, Nexo is empowering thousands of people to harness the value behind their crypto assets and live the future of finance today.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2694.png',
  },
  DINO: {
    name: 'DINO',
    symbol: 'DINO',
    address: '0xAa9654BECca45B5BDFA5ac646c939C62b527D394',
    chainId: 137,
    decimals: 18,
    website: 'https://dinoswap.exchange/',
    description:
      'DinoSwap is a cross-chain infrastructure project that builds liquidity for layer-one blockchains, AMMs and partnering projects.',
    logoURI: 'https://assets.coingecko.com/coins/images/17103/small/DINO.png',
  },
  BCT: {
    name: 'Toucan Protocol: Base Carbon Tonne',
    symbol: 'BCT',
    address: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://pancakeswap.finance/images/tokens/0x2F800Db0fdb5223b3C3f354886d907A671414A7F.svg',
    website: 'https://toucan.earth/',
    description:
      'Toucan Protocol brings carbon as a new money-lego to Web3. Kickstarting an open and decentralized climate finance ecosystem.',
  },
  KLIMA: {
    name: 'Klima DAO',
    symbol: 'KLIMA',
    address: '0x4e78011Ce80ee02d2c3e649Fb657E45898257815',
    chainId: 137,
    decimals: 9,
    logoURI:
      'https://pancakeswap.finance/images/tokens/0x4e78011Ce80ee02d2c3e649Fb657E45898257815.svg',
    website: 'https://www.klimadao.finance/',
    description:
      'Klima DAO gives Web3 builders and users the opportunity to participate in the carbon market through the KLIMA token.',
  },
  polyWISE: {
    name: 'Polywise',
    symbol: 'WISE',
    address: '0x4c19DdeebAF84cA3A255730295AD9d824D4Ff51f',
    chainId: 137,
    decimals: 18,
    website: 'https://polywise.finance/',
    description:
      'PolyWise Finance is a next-generation yield farming protocol on the Polygon network with lots of unique and creative features that enable you to earn a passive income. We are trying to create a protocol like Yearn, but with a reduced token supply and high value for Polygon Network users, LP providers and stakers. The max supply of WISE token is 5400.',
  },
  polySAGE: {
    name: 'PolySage',
    symbol: 'SAGE',
    address: '0x2ed945Dc703D85c80225d95ABDe41cdeE14e1992',
    chainId: 137,
    decimals: 18,
    website: 'https://polysage.finance/',
    description:
      'PolySage Finance is a next-generation yield farming protocol on the Polygon network with lots of unique and creative features that enable you to earn a passive income.',
    logoURI: 'https://polysage.finance/images/sage.png',
  },
  TOMB: {
    name: 'TOMB',
    symbol: 'TOMB',
    address: '0x0e98C977B943f06075b2D795794238fBfB9b9a34',
    chainId: 137,
    decimals: 18,
    logoURI: '',
    website: 'https://tomb.finance/',
    description:
      'The first algorithmic stablecoin on Fantom Opera, pegged to the price of 1 FTM via seigniorage',
  },
  CLAM: {
    name: 'Otter Clam',
    symbol: 'CLAM',
    address: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
    chainId: 137,
    decimals: 9,
    logoURI: '',
    website: 'https://www.otterclam.finance/#/',
    description: 'The first store of value meme',
  },
  HBAR: {
    name: 'HBAR[0x]',
    symbol: 'HBAR',
    address: '0x1646C835d70F76D9030DF6BaAeec8f65c250353d',
    chainId: 137,
    decimals: 8,
    logoURI: '',
    website: 'https://hedera.com/',
    description:
      'Hedera is the most used enterprise-grade public network for you to make your digital world exactly as it should be – yours. HBAR is the native, energy-efficient cryptocurrency of Hedera that powers the decentralized economy. Whether youre a startup or enterprise, a creator or consumer, Hedera goes beyond blockchain for developers to create the next era of fast, fair, and secure applications.',
  },
  agEUR: {
    name: 'agEUR',
    symbol: 'agEUR',
    address: '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4',
    chainId: 137,
    decimals: 18,
    logoURI: '',
    website: 'https://www.angle.money/',
    description:
      'Angle is an over-collateralized, decentralized and capital-efficient stablecoin protocol. It offers full convertibility between stable assets and collateral at oracle value.',
  },
  jJPY: {
    name: 'Jarvis Synthetic Yen',
    symbol: 'jJPY',
    address: '0x8343091F2499FD4b6174A46D067A920a3b851FF9',
    chainId: 137,
    decimals: 18,
    website: 'https://jarvis.network/',
    description:
      'jJPY is a multi-collateralized synthetic token tracking the price of Yen. It is built on the top of UMA and Chainlink.',
    logoURI: '',
  },
  JPYC: {
    name: 'JPY Coin',
    symbol: 'JPYC',
    address: '0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c',
    chainId: 137,
    decimals: 18,
    website: 'https://jpyc.jp/',
    description:
      "JPYC (JPYCoin) is Japan's first Japanese Yen stablecoin that utilizes blockchain technology.",
    logoURI: '',
  },
  PSP: {
    name: 'ParaSwap',
    symbol: 'PSP',
    address: '0x42d61D766B85431666B39B89C43011f24451bFf6',
    chainId: 137,
    decimals: 18,
    website: 'https://paraswap.io/',
    description:
      "ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with decentralized finance on Ethereum and EVM-compatible chains: Polygon, Avalanche, BSC & more to come.",
    logoURI: '',
  },
  KIRO: {
    name: 'Kirobo',
    symbol: 'KIRO',
    address: '0xB382C1cfA622795a534e5bd56Fac93d59BAc8B0D',
    chainId: 137,
    decimals: 18,
    website: 'https://www.kirobo.io/',
    description:
      'Kirobos decentralized applications remove the risk of losing funds enabling you to use blockchain technology to its fullest potential from one consolidated platform.',
    logoURI: '',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
