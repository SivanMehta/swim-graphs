library(ggplot2)
library(lubridate)

sivan = read.csv("./data/sivan-mehta-233047.csv", sep = "|", header=TRUE, row.names = NULL)

sivan$date <- as.Date(sivan$date)
sivan$date <- ymd(sivan$date) + years(2017 - sivan$season)
sivan$season <- as.factor(sivan$season)

sufficient.seasons <- names(which(table(sivan$season) > 15))
sufficient.seasons.data <- sivan[which(sivan$season %in% sufficient.seasons),]

ggplot(sufficient.seasons.data) + aes(x = date, y = points) +
  geom_line(aes(group = season),
                colour = "grey") +
  geom_smooth(se = FALSE)
