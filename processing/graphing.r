library(ggplot2)
library(lubridate)

swims = read.csv("./data/every-swims.csv", sep = "|", header=TRUE, row.names = NULL)

# make each of the overlap by moving them to this year
swims$date <- as.Date(swims$date)
swims$date <- ymd(swims$date) + years(2017 - swims$season)
swims$season <- as.factor(swims$season)

# exclude seasons with fewer than 50 swims (usually user-inputting times which aren't relevant)
sufficient.seasons <- names(which(table(swims$season) > 100))
sufficient.seasons.data <- swims[which(swims$season %in% sufficient.seasons),]

# graph of just the points
ggplot(sufficient.seasons.data) + 
  aes(x = date, y = points) +
  geom_point(size = .5) + 
  scale_y_continuous(limits = c(300, 820))

# smoothing spline for each season
ggplot(sufficient.seasons.data) + 
  aes(x = date, y = points, colour = season) +
  geom_point(colour = "grey", size = 1) +
  geom_smooth(se = FALSE) +
  scale_y_continuous(limits = c(300, 820))