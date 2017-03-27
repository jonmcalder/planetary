
[![Project Status: WIP ? Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip) [![Build Status](https://travis-ci.org/jonmcalder/planetary.svg?branch=master)](https://travis-ci.org/jonmcalder/planetary) [![codecov](https://codecov.io/gh/jonmcalder/planetary/branch/master/graph/badge.svg)](https://codecov.io/gh/jonmcalder/planetary)

------------------------------------------------------------------------

[![minimal R version](https://img.shields.io/badge/R%3E%3D-3.1.0-6666ff.svg)](https://cran.r-project.org/) [![CRAN\_Status\_Badge](http://www.r-pkg.org/badges/version/planetary)](https://cran.r-project.org/package=planetary)

[![packageversion](https://img.shields.io/badge/Package%20version-0.1.0-orange.svg?style=flat-square)](commits/master)

------------------------------------------------------------------------

[![Last-changedate](https://img.shields.io/badge/last%20change-2017--03--27-yellowgreen.svg)](/commits/master)

<!-- README.md is generated from README.Rmd. Please edit that file -->
planetary
=========

planetary is an htmlwidget for the `planetary.js` library, which facilitates the creation of "awesome interactive globes for the web". Check out <http://planetaryjs.com/> for more info.

![](img/ex-rotating.png) ![](img/ex-quake.png)

Installation
------------

You can install planetary from GitHub with:

``` r
# install.packages("devtools")
devtools::install_github("jonmcalder/planetary")
```

Examples
--------

Simple rotating planet example with random pings - also draggable and zoomable.

``` r
library(planetary)
planetary(rotate = 10)
```
