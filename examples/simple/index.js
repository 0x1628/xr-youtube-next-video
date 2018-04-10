import React from 'react'
import {render} from 'react-dom'
import YouTubeNextVideo from '../../src'
import '../../src/index.css'
import locale from '../../src/locale/zh_CN'
import './index.css'

class App extends React.Component {
  handleNext = () => {
    console.log('Next')
  }

  handleCancel = () => {
    console.log('Cancel')
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          <div className="wrapper">
            <img alt="" src="https://images.unsplash.com/photo-1522198734915-76c764a8454d?auto=format&fit=crop&w=500&q=60" />
            <YouTubeNextVideo
              author="CaseyNeistat"
              title="SHE'S MUCH BETTER'"
              onNext={this.handleNext}
              onCancel={this.handleCancel}
              locale={locale}
            />
          </div>
        </div>
      </React.StrictMode>
    )
  }
}

render(<App />, document.getElementById('root'))
