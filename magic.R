# Header ------------------------------------------------------------------
rm(list=ls())
seqn <- data.frame(n=seq(1, 63, 1))
card.1 <- subset(seqn, n %%  2 == 1)
card.2 <- subset(seqn, n %%  4 ==  2 | n %%  4 ==  3)
card.3 <- subset(seqn, n %%  8 >=  4 & n %%  8 <=  7)
card.4 <- subset(seqn, n %% 16 >=  8 & n %% 16 <= 15)
card.5 <- subset(seqn, n %% 32 >= 16 & n %% 32 <= 31)
card.6 <- subset(seqn, n >= 32)

card.1$n
card.2$n
card.3$n
card.4$n
card.5$n
card.6$n