import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      You might feel like if you’re just hearing about the surge of crypto industry that you are late to the party. Perhaps you’re right on time, we may just be getting started. Surges in the prices of Bitcoin or Ethereum are only proxies for the waves of interest in the market. Gazing deeper behind the scenes, you’ll find stronger undercurrents sweeping the industry forward.
      </p>

      <div className="pl-6 pr-6">
        <img
          className="w-full"
          src="/images/Chart.png"
          alt="Total Value Locked (USD) in DeFi"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-16 italic">
      Source: defipulse.com
      </p>

      <p className="mb-10">
      Take for example the total value locked in Decentralized Finance (DeFi). Total value locked can be looked upon as a measure of confidence in the budding decentralized finance ecosystem, as this metric represents the total estimated dollar value locked in lending, assets, payments, and other financial products of the DeFi space. From one year ago, the total value locked in DeFi has skyrocketed from sub-$1B to over a whopping $80B. The value flowing into this space has helped to accelerate the advancement of the development and adoption of DeFi products and services. The train doesn’t appear to be stopping here.
      </p>

      <div className="pl-6 pr-6 mb-16">
        <img
          className="w-full"
          src="/images/tweet-1.png"
          alt="Matthew Graham teet"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-10">
      Ironically, despite Charlie Munger’s recent charming characterization of the crypto space as <a href="https://www.cnbc.com/2021/05/01/charlie-munger-calls-bitcoin-disgusting-and-contrary-to-the-interests-of-civilization.html" target="_blank">“disgusting” and “contrary to the interests of civilization”</a>, major financial institutions appear to disagree and be taking more serious bets on increasing their exposure. Considering hallmark events such as Coinbase’s debut IPO,<a href="https://www.theblockcrypto.com/linked/104115/auction-house-sothebys-announces-its-second-nft-sale-set-for-june" target="_blank"> Sotheby’s involvement in the NFT space</a> of digital art auctions, or Latin American e-commerce giant <a href="https://www.coindesk.com/e-commerce-giant-mercadolibre-discloses-7-8m-bitcoin-buy" target="_blank">MercadoLibre disclosing a $7.8MM bitcoin buy,</a> the crypto industry would appear to be firmly here to stay. Keep an eye out beyond the headlines and the price feeds though and you’ll witness a growing, thriving ecosystem of founders, protocols, and novel products behind the buzz that are completely reimagining the way we conduct commerce. Perhaps the timing of it all has been peculiarly fitting: as our office lives are virtualizing, so too now are our means of exchange (at least in some form...for now).
      </p>

      <div className="pl-6 pr-6 mb-16">
        <img
          className="w-full"
          src="/images/tweet-2.png"
          alt="Kyle Davies teet"
          width={611}
          height={407}
        />
      </div>
      
    </PostLayout>
  )
}

export default Post
