export let documents = [{
    "name": "Basics",
    "text": "The haptic protocol is a system of smart contracts designed to increase capital efficiency and to reduce the impact of impermanent loss. Stakers lock Haptic network token (HAP) as a collateral, enabling the issuance of tokenized debt (TDA). The pooled collateral model enables deep liquidity and eliminates the need for counterparts. Borrowers lock ETH to obtain a stablecoin denominated loan from a supported procotol and the funds are used to provide liquidity on a external automated market maker platform. The protocol tracks impermanent loss and provides compensation to honest borrowers along with the exchange fees generated by their liquidity. Stakers are rewarded for their role with staking rewards and yields generated by the Treasury. The system is built around composability principles and leverages existing protocols to achieve its functionality. Haptic is a dual token system, comprised of Haptic network token (HAP) and Tokenized Debt Asset (TDA). All TDA is backed by HAP tokens, with a collateralisation ratio (c-ratio) of 400%. Stakers incur in debt when they mint TDA, and they must pay it back before exiting the system. Stakers are incentivized to stake their HAP tokens in several ways. Firstly, if their account is in optimal health, they are entitled to a portion of the protocol's weekly inflationary supply. In addition, they will receive extra yields generated by the Treasury. Borrowers deposit ETH and obtain a stablecoin denominated loan, choosing from a supported protocol and a desired c-ratio. For example, they can obtain sUSD from Synthetix at 150%, or LUSD on Liquity at 120% c-ratio. Funds are used to add liquidity on the desired AMM platform (Uniswap at the moment). Borrowers earn from exchange fees generated by the liquidity, with additional impermanent loss protection disboursed in TDA. Lastly, they are incentivised to avoid withdrawing liquidity during high market volatility with unique NFT rewards.As explained above, there are two types of Haptic users, Borrowers and Stakers. The former use the platform to engage in liquidity provisioning and yield farming on selected pools, without having to sell their principal (ETH at the moment) and with added impermanent loss protection. The latter engage the protocol by staking HAP tokens and contributing to the debt pool depth, with the goal of earning from staking rewards and extra yields. ",
  }, {
    "name": "Borrowers",
    "text": "Haptic finance aims to be a friendly on-ramp for the average DeFi user who seeks to engage in liquidity provisioning and yield farming activities. Our mission is to empower users and enhance their decision making process by providing them with context and awareness. As such, Haptic offers real-time tracking of impermanent loss coupled with detailed LP stats. Our user interface is designed to guide and reward users for optimal behavior and maximum profit. Borrowers engage with Haptic by depositing ETH and selecting one of the available protocols as the loan provider. E.g., if they choose Synthetix, they will receive sUSD, with a 150% C-ratio. If ETH/USD is $3000, this means that by depositing 1 ETH, they can mint roughly 2000 sUSD. In addition, the loan is subject to an interest rate(*). The next step is selecting the desired liquidity pool, initially, we will support only Uniswap but this will change in the future. Once a choice is made, the protocol will execute the token swaps(s) and add liquidity onto the pool. As a result, the borrower engages in LP provisioning and his impermanent loss starts being tracked, together with any earnings from exchange fees generated by his position. From this time on, the borrower must keep his account in check, in order to benefit from impermanent loss compensation and avoid liquidation. Borrowers can decide at any time to exit their position and withdraw the ETH deposited. Upon such action, liquidity is withdrawn and the outstanding loan is paid back, including any interest. Under normal market conditions, the protocol will calculate impermanent loss and disburse compensation denominated in TDA. Borrower can choose to automatically swap TDA for the loaned token and withdraw their principal plus profit. During heavy market volatility, the protocol will offer rewards in change for the user locking the liquidity position for a certain amount of time, e.g. 15 days. Rewards offered will range from HAP token to exclusive NFTs. " ,
  }, {
    "name": "Stakers",
    "text": "Debt on the Haptic protocol is backed by HAP tokens. Stakers lock HAP as collateral using our user interface and mint a desired amount of tokenized debt asset (TDA). TDA is currently backed by a 400% c-ratio. This may change in the future, as determined by the community via decentralized governance mechanisms. The c-ratio guarantees that the value of the collateral deposited in enough to absorb most price shocks, without incurring in liquidation risk. Stakers' debt fluctuates as a result of impermanent loss action and borrowers' actions. When a staker wants to exit their position and withdraw HAP collateral, they must pay back their original debt plus any surplus by burning TDA. Stakers represent the debt pool backing and as such they are central to the system. For this role, they are rewarded with Weekly inflationary supply Extra yields generated by the Treasury Protocol fees. Every week, 80% of the inflationary supply minted is distributed to stakers as a reward. Additionally, the Treasury is able to generate extra yield from LP tokens obtained via the LP bonding process and redirect them to stakers, along with 20% of protocol fees. Stakers take on the overall debt risk and enable impermanent loss compensation. They will be able to hedge against this risk through the Haptic protocol, with a combination of options and futures at an added cost. Alternatively, they can deploy their own hedging strategy by taking positions external to the system. " ,
  }]
