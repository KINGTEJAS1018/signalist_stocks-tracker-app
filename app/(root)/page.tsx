import TradingViewWidgets from "@/components/TradingViewWidgets"
import { Button } from "@/components/ui/button"
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constant"

const Home = () => {

  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`


  return (
    <div className="flex flex-col gap-10 min-h-screen home-wrapper">
      <section className="grid w-full grid-cols-1 xl:grid-cols-3 gap-8 home section">
        <div className="xl:col-span-1">
          <TradingViewWidgets 
            title = "Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config = {MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md-col-span xl:col-span-2">
          <TradingViewWidgets 
            title = "Stock Heatmap"
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config = {HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 xl:grid-cols-3 gap-8 home section">
        <div className="xl:col-span-1 h-full">
          <TradingViewWidgets 
            scriptUrl={`${scriptUrl}timeline.js`}
            config = {TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>
        <div className="xl:col-span-2 h-full">
          <TradingViewWidgets 
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config = {MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
    
  )
}

export default Home