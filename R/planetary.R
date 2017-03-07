#' Planetary: Awesome interactive globes for the web
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
planetary <- function(rotate = 0, width = NULL, height = NULL, elementId = NULL) {

  # forward options using opts
  opts = list(
    rotate = rotate,
    world_data = world_110m
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'planetary',
    opts,
    width = width,
    height = height,
    sizingPolicy = htmlwidgets::sizingPolicy(browser.fill = TRUE),
    package = 'planetary',
    elementId = elementId
  )
}

#' Shiny bindings for planetary
#'
#' Output and render functions for using planetary within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a planetary
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name planetary-shiny
#'
#' @export
planetaryOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'planetary', width, height, package = 'planetary')
}

#' @rdname planetary-shiny
#' @export
renderPlanetary <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, planetaryOutput, env, quoted = TRUE)
}
