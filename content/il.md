---
title: "Impermanent Loss"
metaTitle: "Haptic protocol - Impermanent loss information"
metaDescription: "This page provides information about Impermanent loss"
---

## What is impermanent loss?
Impermanent loss, or divergence loss, is a phenomenon experienced by liquidity providers on AMMs like Uniswap and Balancer. As a result of market volatility and arbitrage trades, a liquidity position may fall in value with respect to either asset comprising it. This means that upon withdrawing liquidity, the user will end up with less tokens that he deposited initially. This is true at least for one of the two assets comprising the position. Impermanent loss is often defined as the percentage loss for a given price movement. It is important to note that impermanent loss will happen regardless of the price direction.

## Formulas
Impermanent loss for a given change in price ratio ![k](https://render.githubusercontent.com/render/math?math=%7Bk%7D), in respect to one asset is defined as:

![equation](https://render.githubusercontent.com/render/math?math=IL_%7B(k)%7D%20%3D%20%5Cfrac%7B2%5Csqrt%7Bk%7D%7D%20%7B1%2Bk%7D%20-1%0A)

<!--- IL_{({\Delta}p^{\!i}_{\USD})} = \frac{\prod_{i}({\Delta}p^{\!i}_{\USD})^wi} {\sum_{i}({\Delta}p^{\!i}_{\USD}\times{wi})}-1
 --->

Impermanent loss in complex pools, where the balance is not 50/50 is defined as:

![equation](https://render.githubusercontent.com/render/math?math=IL_%7B(%7B%7D_%7B%5Ceta%7D)%7D%20%3D%20%5Cfrac%7B%5Cprod_%7Bi%7D(%7B%7D_%7B%5Ceta%7D)%5Ewi%7D%20%7B%5Csum_%7Bi%7D(%7B%7D_%7B%5Ceta%7D)%5Ewi%7D%20%7B%7D-1%0A)

> where:<br/>- ![wi](https://render.githubusercontent.com/render/math?math=w_%7Bi%7D) is the weight of token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D) <br/>- &eta; (or ![deltap](https://render.githubusercontent.com/render/math?math=%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D)) is the price change in ![USD](https://render.githubusercontent.com/render/math?math=%7BUSD%7D) for token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D)

## I/L tracking

Haptic tracks impermanent loss across borrowers' liquidity positions and displays it conveniently in real-time on our user interface. Impermanent loss influences the user outcome and the protocol offers rewards for optimal behavior under certain circumnstances.

<!-- ---
title: "Impermanent Loss"
metaTitle: "Haptic protocol - Impermanent loss information"
metaDescription: "This page provides information about Impermanent loss"
---

# What is impermanent loss?
Impermanent loss, or divergence loss, is a phenomenon experienced by liquidity providers on AMMs like Uniswap and Balancer. As a result of market volatility and arbitrage trades, a liquidity position may fall in value with respect to either asset comprising it. This means that upon withdrawing liquidity, the user will end up with less tokens that he deposited initially. This is true at least for one of the two assets comprising the position. Impermanent loss is often defined as the percentage loss for a given price movement. It is important to note that impermanent loss will happen regardless of the price direction.

# Constant product 
The formula to quantify impermanent depends on the type of AMM design examined. For constant product algorithm (Uniswap V2, etc), the impermanent loss for a given change in price ratio ![k](https://render.githubusercontent.com/render/math?math=%7Bk%7D), in respect to one asset is defined as:

![equation](https://render.githubusercontent.com/render/math?math=IL_%7B(k)%7D%20%3D%20%5Cfrac%7B2%5Csqrt%7Bk%7D%7D%20%7B1%2Bk%7D%20-1%0A)

The following will explain how the formula above is derived all assumptions involved.
We start by considering a market with liquidity ![L](https://render.githubusercontent.com/render/math?math=L) and amounts ![x](https://render.githubusercontent.com/render/math?math=x) and ![y](https://render.githubusercontent.com/render/math?math=y) of assets ![X](https://render.githubusercontent.com/render/math?math=X) and ![Y](https://render.githubusercontent.com/render/math?math=Y) respectively. 

![equation](https://render.githubusercontent.com/render/math?math=x%5Ccdot%7By%7D%20%3D%20L%5E2)  

Let the the initial price ![P](https://render.githubusercontent.com/render/math?math=P) 
 of asset  ![X](https://render.githubusercontent.com/render/math?math=X)  in terms of asset  ![Y](https://render.githubusercontent.com/render/math?math=Y)  be ![eq1](https://render.githubusercontent.com/render/math?math=Y%20%3D%20y%2Fx)  and consider a price movement ![eq2](https://render.githubusercontent.com/render/math?math=P) 
 of asset  ![eq3](https://render.githubusercontent.com/render/math?math=P%5E%7B%27%7D%20%3D%20P_%7Bk%7D), where ![eq3](https://render.githubusercontent.com/render/math?math=k%20%3E%200). It follows that:

![X](https://render.githubusercontent.com/render/math?math=y%20%3D%20L%5Csqrt%7BP%7D) 
 &nbsp;and &nbsp;![eq0b](https://render.githubusercontent.com/render/math?math=x%20%3D%20%5Cfrac%7BL%7D%20%7B%5Csqrt%7BP%7D%7D),&nbsp; now let's define :

>![vstart](https://render.githubusercontent.com/render/math?math=V_%7BSTART%7D) as the value of the initial holding in terms of asset   ![Y](https://render.githubusercontent.com/render/math?math=Y)
 
 >![vSTAKE](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D) as the value of the holding if staked in the pool (![x](https://render.githubusercontent.com/render/math?math=x), and ![y](https://render.githubusercontent.com/render/math?math=y) change with price)

>![vhodl](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D) as the value of the holdings without staking (![x](https://render.githubusercontent.com/render/math?math=x), and ![y](https://render.githubusercontent.com/render/math?math=y) stay constant)

Let the price of asset ![Y](https://render.githubusercontent.com/render/math?math=Y) in terms of ![Y](https://render.githubusercontent.com/render/math?math=Y) be ![1](https://render.githubusercontent.com/render/math?math=1) (e.g. DAI), it follows that the price of asset ![X](https://render.githubusercontent.com/render/math?math=X) in terms of asset ![Y](https://render.githubusercontent.com/render/math?math=Y) is ![P](https://render.githubusercontent.com/render/math?math=P). By substituing for ![x](https://render.githubusercontent.com/render/math?math=x) and ![y](https://render.githubusercontent.com/render/math?math=y)  we derive:


![equation](https://render.githubusercontent.com/render/math?math=V_%7BSTART%7D%20%3D%20y%5Ccdot%7B1%7D%20%2B%20x%5Ccdot%7BP%7D%20%3D%202L%5Csqrt%7BP%7D)  

This formula depends on ![L](https://render.githubusercontent.com/render/math?math=L) and ![P](https://render.githubusercontent.com/render/math?math=P), so if the price changes, we can use it to calculate the value of future ![L](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D)  holdings :

![equation](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D%20%3D%202L%5Csqrt%7BP%5E%7B%27%7D%7D%20%3D%202L%5Csqrt%7BPk%7D)  

Let's use the original quantities to understand how the ![vstake](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D) changes compared to ![vhodl](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D) by pluggin in ![x](https://render.githubusercontent.com/render/math?math=x) and ![y](https://render.githubusercontent.com/render/math?math=y)  with the new prices [1](https://render.githubusercontent.com/render/math?math=1) (assuming DAI)  and  ![x](https://render.githubusercontent.com/render/math?math=P%5E%7B%27%7D%20%3D%20P_%7Bk%7D):

![equation](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D%20%3D%20y%20%2B%20xP%5E%7B%27%7D%20%3D%20L%5Csqrt%7BP%7D%281%2Bk%29)  

Impermanent loss is given by the percentage loss of having ![v1](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D) as compared to ![vhodl](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D) :

![equation](https://render.githubusercontent.com/render/math?math=IL%28k%29%20%3D%20%5Cfrac%7B%20V_%7BSTAKE%7D%20-%20V_%7BHODL%7D%20%7D%20%7BV_%7BHODL%7D%20%7D%20%3D%20%5Cfrac%7BL%5Csqrt%7BP%7D%20%282%5Csqrt%7Bk%7D%20-1%20-k%29%20%7D%20%7BL%5Csqrt%7BP%7D%20%281%2Bk%29%7D%20%3D%20%5Cfrac%7B2%5Csqrt%7Bk%7D%7D%20%7B1%2Bk%7D%20-1%20) 

# Concentrated liquidity

Uniswap V3 allows liquidity providers to engage the protocol within a fixed price range ![eq](https://render.githubusercontent.com/render/math?math=%5Ba%2C%20b%5D) instead of the whole curve. This feature is called concentrated liquidity. We will examine the implications of this model for users. In a nutshell, concentrated liquidity means that reserves are used more intensively within the range (virtual liquidity) and exhausted more quickly. Once the price falls outside the range, the position is left with one asset and stops trading. Uniswap rewards concentrated liquidity with higher fees for the increased risk of impermanent loss. Here is to calculate impermanent loss in Uniswap V3:


Again, we start by considering a market with liquidity ![L](https://render.githubusercontent.com/render/math?math=L) and amounts ![x](https://render.githubusercontent.com/render/math?math=x) and ![y](https://render.githubusercontent.com/render/math?math=y) of assets ![X](https://render.githubusercontent.com/render/math?math=X) and ![Y](https://render.githubusercontent.com/render/math?math=Y) respectively in a concentrated liquidity position. 

Let the initial price ![P](https://render.githubusercontent.com/render/math?math=P) of asset ![X](https://render.githubusercontent.com/render/math?math=X) in terms of  asset ![Y](https://render.githubusercontent.com/render/math?math=Y) and consider a price movement to ![eq3](https://render.githubusercontent.com/render/math?math=P%5E%7B%27%7D%20%3D%20P_%7Bk%7D), where ![eq3](https://render.githubusercontent.com/render/math?math=k%20%3E%200). Let ![eq](https://render.githubusercontent.com/render/math?math=%5Bp_%7Ba%7D%2C%20p_%7Bb%7D%5D) be the price interval of our concentrated position, with both ![P](https://render.githubusercontent.com/render/math?math=P) and ![P](https://render.githubusercontent.com/render/math?math=P%5E%7B%27%7D) within the interval. 


Reserves for a concentrated liquidity pool are given by:


![eq](https://render.githubusercontent.com/render/math?math=(x%20%2B%20%5Cfrac%7BL%7D%20%7B%5Csqrt%7Bp_%7Bb%7D%7D%7D)%20(y%2BL%5Csqrt%7Bp_%7Ba%7D%7D)%20%3D%20L%5E%7B2%7D)

This means that reserves x and y are leveraged in the given price range and profit and losses are amplified.


![eq](https://render.githubusercontent.com/render/math?math=x_%7Bvirtual%7D%5Ccdot%20y_%7Bvirtual%20%3D%20L%5E%7B2%7D%20%7D)


Let's calculate virtual reserves based on liquidity ![L](https://render.githubusercontent.com/render/math?math=L) and price ![P](https://render.githubusercontent.com/render/math?math=P) :


 ![eq](https://render.githubusercontent.com/render/math?math=x%20%3D%20x_%7Bvirtual%7D%20-%20%5Cfrac%7BL%7D%20%7B%5Csqrt%7BP_%7Bb%7D%7D%7D%20%3D%20L(%5Csqrt%7B%5Cfrac%7B1%7D%20%7BP%7D%7D%20-%20%5Cfrac%7B1%7D%20%7B%5Csqrt%7Bp_%7Bb%7D%7D%7D)%20)


 ![eq](https://render.githubusercontent.com/render/math?math=y%20%3D%20y_%7Bvirtual%7D%20-%20L%5Csqrt%7BP_%7Ba%7D%7D%20%3D%20L(%5Csqrt%7BP%7D%20-%20%5Csqrt%7BP_%7Ba%7D%7D))

 Again, let's define three values


>![vstart](https://render.githubusercontent.com/render/math?math=V_%7BSTART%7D) as the value of the initial holding in terms of asset   ![Y](https://render.githubusercontent.com/render/math?math=Y)
 
 >![vSTAKE](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D) as the value of the holding if staked in the pool (![x](https://render.githubusercontent.com/render/math?math=x), and ![y](https://render.githubusercontent.com/render/math?math=y) change with price)

>![vhodl](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D) as the value of the holdings without staking (![x](https://render.githubusercontent.com/render/math?math=x), and ![y](https://render.githubusercontent.com/render/math?math=y) stay constant)

We derive that: 

![vstart](https://render.githubusercontent.com/render/math?math=V_%7BSTART%7D%20%3D%20y%20%5Ccdot%201%20%2B%20x%20*%20P)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![vstart](https://render.githubusercontent.com/render/math?math=%3D%20L(%5Csqrt%7BP%7D%20-%20%5Csqrt%7BP_%7Ba%7D%7D)%20%2B%20L(%5Csqrt%7BP%7D%20-%20%5Cfrac%7BP%7D%20%7B%5Csqrt%7BP_%7Bb%7D%7D%7D))


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![vstart](https://render.githubusercontent.com/render/math?math=%3D%202L%5Csqrt%7BP%7D%20-%20L(%5Csqrt%7BP_%7Ba%7D%7D%20%2B%20%5Cfrac%7BP%7D%20%7B%5Csqrt%7BP_%7Bb%7D%7D%7D))

Let's substitute ![P](https://render.githubusercontent.com/render/math?math=P') for ![P](https://render.githubusercontent.com/render/math?math=P) in ![vstart](https://render.githubusercontent.com/render/math?math=V_%7BSTART%7D) to obtain ![v1](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D) :

![v1](https://render.githubusercontent.com/render/math?math=V_%7BSTAKE%7D%20%3D%202L%5Csqrt%7BP_%7Bk%7D%7D%20-%20L(%5Csqrt%7BP_%7Ba%7D%7D%20%2B%20%5Cfrac%7BPk%7D%20%7B%5Csqrt%7BP_%7Bb%7D%7D%7D)) 

And for ![vhodl](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D):

![eq](https://render.githubusercontent.com/render/math?math=V_%7BHODL%7D%20%3D%20y%20%2B%20xP%5E%7B%27%7D)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![eq](https://render.githubusercontent.com/render/math?math=%3D%20L(%5Csqrt%7BP%7D%20-%20%5Csqrt%7BP_%7Ba%7D%7D)%20%2B%20L%20%5Ccdot%20Pk%20(%5Cfrac%7B1%7D%20%7B%5Csqrt%7BP%7D%7D%20-%20%5Cfrac%7B1%7D%20%7B%5Csqrt%7BP_%7Bb%7D%7D%7D))


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![eq](https://render.githubusercontent.com/render/math?math=%3D%20L%5Csqrt%7BP%7D(1%2Bk)%20-%20L(%5Csqrt%7Bp_%7Ba%7D%7D%20%2B%20%5Cfrac%7BPk%7D%20%7B%5Csqrt%7Bp_%7Bb%7D%7D%7D)
)

Again, impermanent loss is computed as percentage change:

![eq](https://render.githubusercontent.com/render/math?math=IL_%7Ba%2Cb%7D(k)%20%3D%20%5Cfrac%7BV_%7BSTAKE%7D%20-%20V_%7BHODL%7D%20%7D%20%7BV_%7BHODL%7D%7D)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![eq](https://render.githubusercontent.com/render/math?math=%3D%20L%5Cfrac%7B2L%5Csqrt%7BPk%7D%20-%20L%5Csqrt%7BP%7D(1%2Bk)%7D%20%7BL%5Csqrt%7BP%7D(1%2Bk)-%20L(%5Csqrt%7BP_%7Ba%7D%7D%20%2B%20%5Cfrac%7BPk%7D%20%7B%5Csqrt%7Bp_%7Bb%7D%7D%20%7D)%7D%20%20
)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![eq](https://render.githubusercontent.com/render/math?math=%3D%20%5Cfrac%20%7B2%5Csqrt%7Bk%7D%20-1%20-k%7D%20%7B%201%2Bk-%20%5Csqrt%7B%5Cfrac%7Bp_%7Ba%7D%7D%20%7BP%7D%7D%20-%20k%5Csqrt%7B%5Cfrac%7BP%7D%20%7Bp_%7Bb%7D%7D%7D%7D%20
)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![eq](https://render.githubusercontent.com/render/math?math=%3D%20IL(k)%5Ccdot(%5Cfrac%7B1%7D%7B1-%5Cfrac%7B%5Csqrt%7B%5Cfrac%7Bp_%7Ba%7D%7D%20%7BP%7D%7D%2Bk%5Csqrt%7B%5Cfrac%7BP%7D%20%7Bp_%7Bb%7D%7D%7D%7D%7B1%2Bk%7D%7D))


Where ![vhodl](https://render.githubusercontent.com/render/math?math=IL_%7Ba%2Cb%7D(k)) is the impermanent loss for a concentrated position in range ![eq](https://render.githubusercontent.com/render/math?math=%5Ba%2C%20b%5D)   and ![vhodl](https://render.githubusercontent.com/render/math?math=%3D%20IL(k)) is the impermanent loss for a V2 style position in the range ![eq](https://render.githubusercontent.com/render/math?math=(0%2C%20%2B%5Cinfty)).



<!-- = IL(k)\cdot(\frac{1}{1-\frac{\sqrt{\frac{p_{a}} {P}}+k\sqrt{\frac{P} {p_{b}}}}{1+k}})       ->

<!-- = \frac {2\sqrt{k} -1 -k} { 1+k- \sqrt{\frac{p_{a}} {P}} - k\sqrt{\frac{P} {p_{b}}}}  ->

<!-- (0, +\infty) ->

<!-- IL_{a,b}(k) = \frac{V_{STAKE} - V_{HODL} } {V_{HODL}}  ->
<!-- = \frac{2L\sqrt{Pk} - L\sqrt{P}(1+k)} {L\sqrt{P}(1+k)- L(\sqrt{P_{a}} + \frac{Pk} {\sqrt{p_{b}} })}  ->

<!-- V_{HODL} = y + xP^{'} ->
<!-- = L(\sqrt{P} - \sqrt{P_{a}}) + L \cdot Pk (\frac{1} {\sqrt{P}} - \frac{1} {\sqrt{P_{b}}})->
<!-- = L\sqrt{P}(1+k) - L(\sqrt{p_{a}} + \frac{Pk} {\sqrt{p_{b}}}) ->



<!-- V_{STAKE} = 2L\sqrt{P_{k}} - L(\sqrt{P_{a}} + \frac{Pk} {\sqrt{P_{b}}}) ->
<!-- V_{0} = y \cdot 1 + x * P ->

<!-- = L(\sqrt{P} - \sqrt{P_{a}}) + L(\sqrt{P} - \frac{P} {\sqrt{P_{b}}}) ->

<!-- = 2L\sqrt{P} - L(\sqrt{P_{a}} + \frac{P} {\sqrt{P_{b}}}) ->


<!-- x = x_{virtual} - \frac{L} {\sqrt{P_{b}}} = L(\sqrt{\frac{1} {P}} - \frac{1} {\sqrt{p_{b}}}) ->

<!-- x_{virtual}\cdot y_{virtual = L^{2} } ->
<!-- (x + \frac{L} {\sqrt{p_{b}}}) (y+L\sqrt{p_{a}}) = L^{2} ->


<!-- [a, b]>
<!--  IL(k) = \frac{ V_{1} - V_{held}} {V_{held}} = \frac{L\sqrt{P}(2\sqrt_{k} -1 -k)} {L\sqrt{P}(1+k)} ->

<!-- IL(k) = \frac{ V_{1} - V_{held} } {V_{held} } = \frac{L\sqrt{P} (2\sqrt{k} -1 -k) } {L\sqrt{P} (1+k)} = \frac{2\sqrt{k}} {1+k} -1 ->

<!-- V_{held} = y + xP^{'} = L\sqrt{P}(1+k) ->

<!-- V_{0} = y\cdot{1} + x\cdot{P} = 2L\sqrt{P} ->

<!-- V_{1} = 2L\sqrt{P^{'}} = 2L\sqrt{Pk}->

<!-- V_{held} -> as the value of the holdings if kept outside the pool ()

<!-- x\cdot{y} = L^2>
<!-- Y = y\cdot{x}>
 
<!-- Y = y/x>
<!-- P^{'} = P_{k}>
<!-- k > 0>

<!-- y = L\sqrt{P}>

<!-- x = \frac{L} {\sqrt{P}}>

<!--- IL_{({\Delta}p^{\!i}_{\USD})} = \frac{\prod_{i}({\Delta}p^{\!i}_{\USD})^wi} {\sum_{i}({\Delta}p^{\!i}_{\USD}\times{wi})}-1



Impermanent loss in complex pools, where the balance is not 50/50 is defined as:

![equation](https://render.githubusercontent.com/render/math?math=IL_%7B(%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D)%7D%20%3D%20%5Cfrac%7B%5Cprod_%7Bi%7D(%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D)%5Ewi%7D%20%7B%5Csum_%7Bi%7D(%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D%5Ctimes%7Bwi%7D)%7D-1%0A)

where ![wi](https://render.githubusercontent.com/render/math?math=w_%7Bi%7D) is the weight of token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D) and ![deltap](https://render.githubusercontent.com/render/math?math=%7B%5CDelta%7Dp%5E%7B%5C!i%7D_%7B%5CUSD%7D) is price change in ![USD](https://render.githubusercontent.com/render/math?math=%7BUSD%7D) for token ![i](https://render.githubusercontent.com/render/math?math=%7Bi%7D)

WIP

# I/L tracking

Haptic tracks impermanent loss across borrowers' liquidity positions and displays it conveniently in real-time on our user interface. Impermanent loss influences the user outcome and the protocol offers rewards for optimal behavior under certain circumnstances.

-->

### Links

[Website](https://haptic.finance) / [Medium](https://hapticfinance.medium.com/) / [Twitter](https://twitter.com/hapticfinance/) / [Discord](https://twitter.com/hapticfinance/) / [Github](https://github.com/hapticfinance/)