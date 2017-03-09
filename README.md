# Basic Scraping todo

- go to https://www.collegeswimming.com/swimmer/233047/
- inspect-element
- Network
- XHR
- Click on "Meet" to get raw HTML for times
- perhaps scrape with [this](https://github.com/cheeriojs/cheerio)

# Processing

- Calculate points for each meet, take the maximum score to allow people to only score their "best" swim
- Points = 1000 * (Base Time / Time)^3
    - Base time xls currently included
- Break each person into each of their "seasons"
    - define as September - August

- For each person, you should have a date-score timeline
- basically a enormous csv with the following column
  - swimmerID + year
  - date (without year in order to compare across years)
  - score

# Graphing

1. Start with graphing one person
2. Superimpose a bunch
3. Do it in ggplot2
4. Do it in D3
