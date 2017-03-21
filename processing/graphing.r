library(ggplot2)
library(lubridate)

swims = read.csv("./data/swims.csv", sep = "|", header=TRUE, row.names = NULL)

swims$date <- as.Date(swims$date)
swims$date <- ymd(swims$date) + years(2017 - swims$season)
swims$season <- as.factor(swims$season)

sufficient.seasons <- names(which(table(swims$season) > 15))
sufficient.seasons.data <- swims[which(swims$season %in% sufficient.seasons),]

ggplot(sufficient.seasons.data) + aes(x = date, y = points) +
  geom_line(aes(group = season),
                colour = "grey") +
  geom_smooth(se = FALSE)
