library(ggplot2)
library(lubridate)

swims = read.csv("./data/cmu.csv", sep = "|", header=TRUE, row.names = NULL)

swims$date <- as.Date(swims$date)
swims$date <- ymd(swims$date) + years(2017 - swims$season)
swims$season <- as.factor(swims$season)

ggplot(swims) + aes(x = date, y = points) +
  geom_point(aes(group = season),
                colour = "grey", size = .5) +
  geom_smooth(se = FALSE)
