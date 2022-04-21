---
title: "Impermanent Loss"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

## What is impermanent loss?
Impermanent loss, or divergence loss, is a phenomena experienced by liquidity providers on AMMs like Uniswap. As a result of market volatility and arbitrage trades, the liquidity position may fall in value with respect to either asset comprising the position. This means that upon withdrawing liquidity, the user will end up with less tokens that he deposited initially, at least for one of the two assets comprising the position. Impermanent loss is often defined as the percentage loss for a given price movement. It is important to note that impermanent loss will happen regardless of the price direction.

Impermanent loss for a given change in price ratio ![k](https://render.githubusercontent.com/render/math?math=%7Bk%7D), in respect to one asset is defined as:

![equation](https://render.githubusercontent.com/render/math?math=IL_%7B(k)%7D%20%3D%20%5Cfrac%7B2%5Csqrt%7Bk%7D%7D%20%7B1%2Bk%7D%20-1%0A)


Impermanent loss in complex pools, where the balance is not 50/50 is defined as:

![equation](https://render.githubusercontent.com/render/math?math=%5Cfrac%7B%5Cprod_%7Bi%7D(%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D)%5Ewi%7D%20%7B%5Csum_%7Bi%7D(%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D%5Ctimes%7Bwi%7D)%7D-1%0A)

where ![wi](https://render.githubusercontent.com/render/math?math=w_%7Bi%7D) is the weight of token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D) and ![deltap](https://render.githubusercontent.com/render/math?math=%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D) is price change in ![USD](https://render.githubusercontent.com/render/math?math=%7BUSD%7D) for token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D)


## Links

[Website](https://haptic.finance) / [Medium](https://hapticfinance.medium.com/) / [Twitter](https://twitter.com/hapticfinance/) / [Discord](https://twitter.com/hapticfinance/) / [Github](https://github.com/hapticfinance/)