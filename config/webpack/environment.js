const { environment } = require('@rails/webpacker')
//jqueryの導入
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({ /*ProvidePluginはオブジェクトを引数に取る
                                ここでは'jquery/scr/jqueryモジュールを
                                jQueryという名前で使えるという意味*/
     $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Swiper: 'swiper/swiper-bundle'
  })
)

module.exports = environment
